function sum(first, second) {
    return first + second;
}

function exponentiation(number, power = 2) {
    let result = 0
    if (typeof value === 'number' && typeof power === 'number') {
        result = number
        for (let i = 0; i < power - 1; i++) {
            result = result * number
        }
    }
    return result
}
exponentiation(3,2)
