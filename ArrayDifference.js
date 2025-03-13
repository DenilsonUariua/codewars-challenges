function arrayDiff(a, b) {
    let unique = []
    a.forEach(element => {
        if(b.every(x => x !== element))
            unique.push(element)
    });
    return unique
}

console.log(arrayDiff([1, 2, 2], []));