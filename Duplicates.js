function duplicateCount(text) {
    let stringArray = text.toLowerCase().split("")

    let numberOfDuplicates = 0;
    stringArray.forEach(element => {
        let dupNumber = stringArray.filter(x => element.includes(x)).length
        console.log(`Element: ${element} number: ${dupNumber}`);
        
        if (dupNumber > 1) {
            numberOfDuplicates++;
        }
    });

    return numberOfDuplicates;
}

console.log("Res", duplicateCount("aabbcde"));