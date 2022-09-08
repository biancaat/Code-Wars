// P: query string that searches against an array of strings
// R: array with strings that contain the query string, ignore capitalization
// E: 'me',  ["home", "milk", "Mercury", "fish"] =>  ["home","Mercury"]
// P: filter array where the elements left are the ones that contain the query string, if query not present return ['Empty']

function wordSearch(query, seq){
    let filtered = seq.filter((e,a,i) => e.toLowerCase().includes(query.toLowerCase()))
      return filtered.length ? filtered : ['Empty']
  }
  