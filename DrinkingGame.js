function hydrate(s) {

    // split the string to get each number
    let stringArray = s.split(/\s+and\s+|,\s*/)
    let totalNumberOfDrinks = 0;

    stringArray.forEach(element => {
        let newNumber = element.match(/\d+/)[0]
        totalNumberOfDrinks += +newNumber
    });

    let result = totalNumberOfDrinks > 1 ? totalNumberOfDrinks + " glasses of water" : totalNumberOfDrinks + " glass of water"

    return result
}

console.log(hydrate("2 glasses of wine and 1 shot"));