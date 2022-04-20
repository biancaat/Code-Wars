// P:
// R: Write a function findNeedle() that takes an array full of junk but containing one "needle". After your function finds the needle it should return a message (as a string) that says: "found the needle at position " plus the index it found the needle.
// E: findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']) Should return "found the needle at position 5"
// P: create a function that seaches the array for the element and returns an index. 

function findNeedle(haystack) {
    return 'found the needle at index ' + haystack.indexOf('needle');
  }