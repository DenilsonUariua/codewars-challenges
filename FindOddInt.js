function findOdd(A) {
    //happy coding!
    let oddNumber;
    for(let i =0; i < A.length; i++) {
        let numberOfTimes = A.filter(x => x === A[i]).length
        if (numberOfTimes % 2 === 1) {
            oddNumber = A[i];
            break;
        }
    }
    return oddNumber;
}

console.log("Thone", findOdd([0,1,0,1,0]));