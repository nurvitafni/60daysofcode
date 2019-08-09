const isString = (data) => {
    return typeof data != "string" ? false : true
}

const checking_one = (value1, value2) => {
    let array = []
    // let result
    let data_type1 = isString(value1)
    let data_type2 = isString(value2)

    // let array = []

    if (data_type1 === true && data_type2 === true) {
        array.push(value1)
        array.push(value2)

        return array

    } else {
        return "Wrong type."
    }

}

// const checking_two = (value) => {
//     let result
//     let array = {}
//     let x = array.name = isString(value)
//     let y = array.email = isString(value)

//     if (x == true) {
//         if (y == true) {
//             result = array.push({name: x, email: y})
//         } else {
//         result = "Wrong."
//         }
//     }

//     return result

// }

const checking_two = (name, email) => {
    let result = {
        name,
        email
    }
    return result
}

module.exports = {
    checking_one,
    checking_two
}