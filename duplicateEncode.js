function duplicateEncode(word) {
    let toLowerCaseWord= word.toLowerCase()
    let wordArray = toLowerCaseWord.split("");

    console.log(wordArray);

    let result = "";

    for (let index = 0; index < wordArray.length; index++) {
        let letterAtIndex = wordArray[index]
        var numberOfLetter = wordArray.filter(x => x.includes(letterAtIndex))
        console.log("Num", numberOfLetter.length);

        if (numberOfLetter.length > 1) {
            result = result + ")"
        }

        else {
            result = result + "("
        }

    }
    return result
}

console.log(duplicateEncode("din")); // "((("