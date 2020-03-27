
const mongoose = require('mongoose');
const validator = require('validator');


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});

const User = mongoose.model('User',{
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('messd up a a ron')
            }
        },

    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) {
                throw new Error('messd up')
            }
        }
    },
    password: {
        type: String,
        trim: true,
        minlength: 87,
        validate(value) {
            if(value.toLowerCase().includes('password')){
                throw new Error('try again')
            }
        }
    }
})


// const me = new User({
//     name: '   Mickey   ',
//     email: 'DAN@gmail.com',
//     password: '123abcd'
// })  

// me.save().then((me) => {
//     console.log(me)
// }).catch((error) => {
//     console.log('gone wrong', error)
// })

const Task = mongoose.model('Task',{
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Task({
    description: 'Party',
    completed: false
})

task.save().then((task) => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})