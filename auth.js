const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const User = mongoose.model('User')

exports.authenticate = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log('promise')
            const user = await User.findOne({email});

            console.log(user);

            bcrypt.compare(password, user.password, (err, isMatch) => {
                if(err) throw err; 

                if(isMatch) {
                    resolve(user);
                }else{
                    reject('Authentication failed');
                }
            })
        } catch (err) {
            reject('Authentication failed');
            
        }
    })
}
