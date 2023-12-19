// Solution 1: using indexOf
const findIndexOfTheFistOccurrence = (haystack, needle) => {
    return haystack.indexOf(needle);
} 

// Solution 3: compare subString
const findIndexOfTheFistOccurrence2 = (haystack, needle) => {
    const needleLength = needle.length;
    for (let i = 0; i <= haystack.length - needleLength; i++) {
        if (haystack.substr(i, needleLength) === needle) {
            return i;
        }
    }
    return -1;
}

// Solution 3: Use regex
const findIndexOfTheFistOccurrence3 = (haystack, needle) => {
    const regex = new RegExp(needle);
    return haystack.search(regex);
}

console.log(findIndexOfTheFistOccurrence('sadbutsad', 'sad'));