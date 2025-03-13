function zero(operation) {
    if (operation) {
        return Math.floor(eval(`0 ${operation.operation} ${operation.value}`))
    }
    return 0
}

function one(operation) {
    if (operation) {
        return Math.floor(eval(`1 ${operation.operation} ${operation.value}`))
    }
    return 1
}

function two(operation) {
    if (operation) {
        return Math.floor(eval(`2 ${operation.operation} ${operation.value}`))
    }
    return 2
}

function three(operation) {
    if (operation) {
        return Math.floor(eval(`3 ${operation.operation} ${operation.value}`))
    }
    return 3
}

function four(operation) {
    if (operation) {
        return Math.floor(eval(`4 ${operation.operation} ${operation.value}`))
    }
    return 4
}

function five(operation) {
    if (operation) {
        return Math.floor(eval(`5 ${operation.operation} ${operation.value}`))
    }
    return 5
}

function six(operation) {
    if (operation) {
        return Math.floor(eval(`6 ${operation.operation} ${operation.value}`))
    }
    return 6
}

function seven(operation) {
    if (operation) {
        return Math.floor(eval(`7 ${operation.operation} ${operation.value}`))
    }
    return 7
}

function eight(operation) {
    if (operation) {
        return Math.floor(eval(`8 ${operation.operation} ${operation.value}`))
    }
    return 8
}

function nine(operation) {
    if (operation) {
        return Math.floor(eval(`9 ${operation.operation} ${operation.value}`))
    }
    return 9
}

function plus(num) {
    return {
        "operation": "+",
        "value": num
    }
}
function minus(num) {
    return {
        "operation": "-",
        "value": num
    }
}
function times(num) {
    return {
        "operation": "*",
        "value": num
    }
}
function dividedBy(num) {
    return {
        "operation": "/",
        "value": num
    }
}

console.log("Tst", four(dividedBy(five())));