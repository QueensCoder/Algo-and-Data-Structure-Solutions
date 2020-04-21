// brackets of different types cannot overlap each other
// opening bracket has to match a closing bracket after it
// closing bracket has to match opening bracket before it

// at end of string if a closing bracket with no prior matching opening return false

class Stack {
  constructor() {
    this.stack = [];
  }

  shift() {
    return this.stack.shift();
  }

  unshift(val) {
    this.stack.unshift(val);
  }
}

const matcher = (open, close) => {
  if (open === '[' && close === ']') return true;
  else if (open === '(' && close === ')') return true;
  else if (open === '{' && close === '}') return true;
  return false;
};

function balancedBrackets(string) {
  const closing = new Set([']', ')', '}']);
  const opening = new Set(['[', '(', '{']);

  const stack = new Stack();

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (opening.has(char)) stack.unshift(char);
    else if (closing.has(char)) {
      let open = stack.shift();
      if (!matcher(open, char)) {
        return false;
      }
    }
  }
  //   if stack length is 0 it meansthe stack was empty and the func should return true
  // if the len is > 0 means there were unmatched brackets
  return !stack.stack.length;
}
