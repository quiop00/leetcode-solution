/* 
 string s containing just the characters '(', ')', '{', '}', '[' and ']', 
 determine if the input string is valid.
Example 1:
Input: s = "()[]{}"
Output: true

Example 2:
Input: s = "(]"
Output: false
*/

const validPalentheses = () => {
  const s = "()";
  // create a stack to save close brackets
  var stack = [];
  for (let c of s) {

    if (c == '(' || c == '{' || c == '[') {
      stack.push(c);
      continue;
    }
    // character is close bracket
    if (!stack.length || // if the stack is empty or 
      (c === ')' && stack[stack.length - 1] !== '(') ||
      (c === '}' && stack[stack.length - 1] !== '{') ||
      (c === ']' && stack[stack.length - 1] !== '[')) {
      return false;
    }
    stack.pop();
  }

  return stack.length === 0;
}
