function XO(str) {
    let lowerStr = str.toLowerCase()
    let stringArray = lowerStr.split("")
    let x = "x"
    let o = "o"

    let numberOfX = stringArray.filter(wordX => wordX.includes(x)).length
    let numberOfO = stringArray.filter(wordO => wordO.includes(o)).length

    return numberOfO == numberOfX
}

console.log(XO("ooom"));