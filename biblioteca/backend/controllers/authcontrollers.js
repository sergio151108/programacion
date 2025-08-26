const jwt = require('jsonwebtoken');
const user = require('../models/user');

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
};

const registerUser = async (req, res) => {
    const {username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'por favor, introduce usuario y contraseña'});
    }

    try {
        const userExists = await user.findOne({ username });
        if (userExists) {
            return res,status(400).json({ message: 'El usuario ya existe'});
        }

        const user = await user.create({ username,password });

        if (user) {
            res.status(201).json({
                _id: user._id,
                username: user.username,
                Token: generateToken(user._id),
        });
        } else {
            res.status(400).json({ message: 'datos de usuario invalidos' });
        }
    } catch (error) {
        res.status(500).json({ message: 'error al registrar usuario', error: error.message });
        }
    };

    const loginUser = async (req, res) => {
        const { username, password } = req.body;

        try {
            const user = await user.findOne({ username });

            if (user && (await user.matchpassword(password))) {
                res.json({
                    _id: user._id,
                    username: user.username,
                    Token: generateToken(user._id),
                });
            } else {
                res.status(401).json({ message: 'usuario o contraseña invalidos'});
            }
        } catch (error) {
            res.status(500).json({ message: 'error al iniciar sesion ', error: error.message });
        }
    };

    module.exports = { registerUser, loginUser };