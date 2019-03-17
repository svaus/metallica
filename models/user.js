const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const UserSchema = new mongoose.Schema({
    email: {
        type : String,
        require: true,
        trim: true
    },
    password:{
        type: String,
        required: true
    },
    displayName: {
        type: String,
        require: true
    }
});

UserSchema.plugin(timestamp);

const User = mongoose.model('User', UserSchema);
module.exports = User;
