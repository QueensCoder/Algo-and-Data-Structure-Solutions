// single letters are palindrone
// start at begining, then that point is now the middle of a palindrone
//then begin to move outwards on each side using two pointers
// if any pointer points to undefined or if the pointers at the string dont match stop
// compare the length of each palindrone
// need to incoporate logic for if length is odd or even

function longestPalindromicSubstring(string) {
  // 	if string is  1 char or less
  if (string.length <= 1) return string;

  let longest = '';

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    let lp = i - 1;
    let rp = i + 1;
    let currPal = char;

    // look for palindrone is odd length
    while (string[lp] === string[rp] && lp >= 0 && rp < string.length) {
      currPal = string[lp--] + currPal + string[rp++];
      if (currPal.length > longest.length) longest = currPal;
    }

    // 	look for even len,	 reset currPal, rp , lp
    currPal = '';
    rp = i + 1;
    lp = i;
    while (string[lp] === string[rp] && lp >= 0 && rp < string.length) {
      currPal = string[lp--] + currPal + string[rp++];
      if (currPal.length > longest.length) longest = currPal;
    }
  }
  return longest;
}
