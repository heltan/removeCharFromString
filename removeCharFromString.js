let removeCharFromString = function (charToBeRemoved, string1) {
    let returnString = '';
    for (let char of string1) {
        if (charToBeRemoved.toUpperCase() !== char.toUpperCase()) {
            returnString += char;
        }
    }
    return returnString;
}

//test below, which will return 'abracadabra' without the character 'a'
//console.log(removeCharFromString('a', 'abracadabra'));
