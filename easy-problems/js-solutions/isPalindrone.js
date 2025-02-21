// O(n) time,  O (n) space
// have to create an additional array with this solution
const isPalindrome = string => {
  return (
    string ===
    string
      .split("")
      .reverse()
      .join("")
  );
};
