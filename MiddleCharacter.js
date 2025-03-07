function getMiddle(s) {
    //Code goes here!
    let stringArray = s.split("")
    let isEven = s.length % 2

    if (isEven == 0) {
        return stringArray[stringArray.length/2 -1] + stringArray[stringArray.length/2]
    }
    else
    {
        return stringArray[stringArray.length/2 - 0.5]
    }
}

console.log(getMiddle("A"));