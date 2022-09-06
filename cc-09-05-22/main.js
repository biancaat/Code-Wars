// P: 2 strings
// R: true if both strings are anagrams false if not
// E: lad adl => true
// P: if string sorted == other string sorted then true else false

var isAnagram = function(test, original) {
    return test.toLowerCase().split('').sort().join('') == original.toLowerCase().split('').sort().join('')
  };