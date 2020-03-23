
// setTimeout(() => {
//     console.log('two seconds turkish')
// }, 2000)

// const names = ['Micky','Stone','Sarah']

// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             lat: 0,
//             long: 0
//         }
//         callback(data)
//     }, 2000)
// }

// geocode('Atlanta', (data) => {
//     console.log(data)
// })
const add = (a,b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}

add(1,4, (sum) => {
    console.log(sum)
})