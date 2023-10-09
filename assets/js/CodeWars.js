String.prototype.toJadenCase = function () {
    let upperWords = [];

    for (let word of this.trim().split(" ")) {
        upperWords.push(word.charAt(0).toUpperCase() + word.slice(1));
    }

    return upperWords.join(" ");

};
//
// let test = " voici mon test "
// let res = test.toJadenCase();
