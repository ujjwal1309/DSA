function longestSubstringLength(s) {
    let maxLength = 0;
    let start = 0;
    const charMap = new Map();
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
  
      if (charMap.has(char) && charMap.get(char) >= start) {
        start = charMap.get(char) + 1;
      }
  
      charMap.set(char, i);
      maxLength = Math.max(maxLength, i - start );
    }
  
    return maxLength;
  }
  
  const str = "thisracecarisgood";
  console.log(longestSubstringLength(str)); // Output: 7
  