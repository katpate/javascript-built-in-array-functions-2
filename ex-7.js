function isPalindrome(string) {
  
  const normalizedString = string.trim().toLowerCase();
  const reversedString = normalizedString.split('').reverse().join('');
  
  return normalizedString === reversedString; 
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false