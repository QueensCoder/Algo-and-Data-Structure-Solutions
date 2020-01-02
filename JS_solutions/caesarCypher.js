function caesarCipherEncryptor(s, key) {
  // Write your code here.
  let res = "";
  const al = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < s.length; i++) {
    let x = s[i];
    let pos = al.indexOf(x);
    let next = pos + key;
    let letter = al[next] || al[next % al.length];
    res += letter;
  }
  return res;
}
