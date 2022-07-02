// P: string
// R: modified string
// E: "www.codewars.com#about" --> "www.codewars.com"
// P: split string @ '#' return the first element

function removeUrlAnchor(url){
    return url.split('#')[0]
  }