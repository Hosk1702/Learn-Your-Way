const bcrypt = require('bcryptjs');
const pool = require('../db/connection');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const SALT_ROUNDS = 10;

const register = async (req, res) => {
  const { email, password } = req.body;

  //Validamos entrada de datos
  if (!email || !password) {
    return res.status(400).json({ error: 'Email y password son requeridos.' });
  }

  //Validamos formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Formato de email inválido.' });
  }

  //Validamos longitud minima de password
  if (password.length < 8) {
    return res.status(400).json({ error: 'El password debe tener mínimo 8 caracteres.' });
  }

  try {
    //hasheamos password
    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

    //Insertamos en BD
    const [result] = await pool.execute(
      'INSERT INTO users (email, password_hash) VALUES (?, ?)',
      [email, passwordHash]
    );

    return res.status(201).json({
      message: 'Usuario registrado correctamente.',
      userId: result.insertId,
    });

  } catch (err) {

    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ error: 'El email ya está registrado.' });
    }

    console.error('[register] Error:', err);
    return res.status(500).json({ error: 'Error interno del servidor.' });
  }
};

const login = async (req, res) => {
    const {email, password} = req.body;

    //Validamos entrada de datos
    if (!email || !password) {
        return res.status(400).json({ error: 'Email y password son requeridos.' });
    }

    try{
        //Comprobamos que el email este registrado
        const [rows] = await pool.execute('SELECT id, password_hash FROM users WHERE email = ?', [email]);
        const user = rows[0];
        if(!user){
            return res.status(401).json({ message: 'Credenciales inválidas'});
        } 

        //Comprobamos contraseña
        const isMatch = await bcrypt.compare(password, user.password_hash);
        if(!isMatch){
            return res.status(401).json({ message: 'Credenciales inválidas'});
        }

        //Creamos token
        const token = jwt.sign(
            {id: user.id},
            process.env.JWT_SECRET,
            {expiresIn: '24h'}
        );

        return res.status(200).json({ token });

    } catch (err) {

        console.error('[login] Error:', err);
        return res.status(500).json({ message: 'Error interno del servidor' });

    }
};

const forgotPassword = async (req, res) => {
    const {email} = req.body;

    if(!email){
        return res.status(400).json({ error: 'Email es requerido.' });
    }

  try {

    const [rows] = await pool.execute(
        'SELECT id FROM users WHERE email = ?',
        [email]
    );

    const user = rows[0];

    if(!user){
       return res.status(200).json({ message: 'OK' });
    }

    //Creo token de restauracion
    const token = crypto.randomBytes(32).toString('hex');

    //Guardo el token en la BD, junto con su tiempo de expiracion
    await pool.execute(
        `UPDATE users 
        SET reset_token = ?, reset_expires = DATE_ADD(NOW(), INTERVAL 1 HOUR)
        WHERE id = ?`,
        [token, user.id]
    );

    //Imprimo en pantalla el token para simular el envio por email
    console.log(token);

    return res.status(200).json({ message: 'OK' });
    
  } catch (err) {

    console.error('[forgotPassword] Error:', err);
    return res.status(500).json({ message: 'Error interno' });

  }
};

const resetPassword = async (req, res) => {
    const {token, newPassword} = req.body;

    if(!token || !newPassword){
        return res.status(400).json({ error: 'El token y la nueva contraseña son requeridos.' });
    }

    //Validamos longitud minima de password
    if (newPassword.length < 8) {
        return res.status(400).json({ error: 'El password debe tener mínimo 8 caracteres.' });
    }

    try{

        //Hasheo la nueva contraseña
        const hash =  await bcrypt.hash(newPassword, SALT_ROUNDS);

        //Verifico token, actualizo la nueva contraseña y restauro los datos de reseteo del usuario en la BD
        const [result] = await pool.execute(
            `UPDATE users 
            SET password_hash = ?, reset_token = NULL, reset_expires = NULL
            WHERE reset_token = ? AND reset_expires > NOW()`,
            [hash, token]
        );

        if (result.affectedRows === 0) {
            return res.status(400).json({ message: 'Token inválido o expirado' });
        }

        return res.status(200).json({ message: 'OK' });

    } catch (err){

        console.error('[resetPassword] Error:', err);
        return res.status(500).json({ message: 'Error interno' });
    }

};

module.exports = { register, login, forgotPassword, resetPassword };