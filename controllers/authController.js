const User = require('../models/User');
const jwt = require('jsonwebtoken');


exports.register = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = new User({ username, password });
        await user.save();
        res.status(201).json({ message: "משתמש נרשם בהצלחה" });
    } catch (err) {
        next(err);
    }
};


exports.login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username, password });
        
        if (!user) {
            return res.status(401).json({ message: "שם משתמש או סיסמה שגויים" });
        }


        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        next(err);
    }
};