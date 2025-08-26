const mongoose = require('mongoose');
const brypt = require('bcryptjs');

const UserShema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }

});

UserShema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt =await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

UserShema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('user', UserShema);