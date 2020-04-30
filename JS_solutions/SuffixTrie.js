class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; i++) {
      let char = string[i];

      // 			if root does not have char add it
      if (!this.root[char]) this.root[char] = {};

      let pointer = i + 1;
      let currObj = this.root[char];
      while (pointer < string.length) {
        let childChar = string[pointer++];
        if (!currObj[childChar]) currObj[childChar] = {};

        // 				if end of string childchar has endSymbol
        if (pointer === string.length) {
          currObj[childChar]['*'] = true;
        }
        // 				currObj is now the child of the previous currObj
        currObj = currObj[childChar];
      }
      this.addEnd(this.root, i, string, char);
    }
  }

  contains(string) {
    let currNode = this.root;
    let pointer = 0;
    while (pointer < string.length) {
      let char = string[pointer++];
      if (pointer === string.length) {
        return !!currNode[char]['*'];
      } else if (!currNode[char]) {
        return false;
      }
      currNode = currNode[char];
    }
  }

  addEnd(currNode, i, string, char) {
    if (i === string.length - 1) currNode[char]['*'] = true;
  }
}
