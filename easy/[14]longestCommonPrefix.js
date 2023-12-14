// #1 SOLUTION
const longestCommonPrefix = () => {
    const arr = ["flower", "ow", "flight"]
    let longestCommon = "";

    for (let i = 0; i < arr[0].length; i++) {
        for (let j = 1; j < arr.length; j++) {
            // check if length of string is valid
            if (arr[j].length <= i) {
                return longestCommon;
            }
            // check if character is matching
            if (arr[j].charAt(i) != arr[0].charAt(i)) {
                return longestCommon;
            }
        }
        longestCommon += arr[0].charAt(i);
    }
}
// Log to console
console.log(longestCommonPrefix())

// #2 SOLUTION
// We can sort the arr first, then we only check the first and the last element
const longestCommonPrefix2 = () => {
    const arr = ["flower", "ow", "flight"]
    let longestCommon = "";
    arr.sort();
    const first = arr[0];
    const last = arr[arr.length -1]
    for (let i = 0; i < Math.min(first.length, last.length); i++) {
        if (first[i] != last[i]) {
            return longestCommon;
        }
        longestCommon += first.charAt(i);
    }
    return longestCommon;
}
// Log to console
console.log(longestCommonPrefix2())