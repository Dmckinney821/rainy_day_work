
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});

const User = mongoose.model('User',{
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        validate(value) {
            if(value < 0) {
                throw new Error('messd up')
            }
        }
    }
})

const me = new User({
    name: 'Mickey',
    age: 36
})  

me.save().then((me) => {
    console.log(me)
}).catch((error) => {
    console.log('gone wrong', error)
})

const Task = mongoose.model('Task',{
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

// const task = new Task({
//     description: 'Party',
//     completed: false
// })

// task.save().then((task) => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })