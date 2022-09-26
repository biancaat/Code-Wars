// P: array of objects
// R: the object that is a python developer, if not return no python developers
// E: [{ firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' }, { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }] => 'There will be no Python developers'
// P: store the vale of the python dev in a variable, if variable exists return name and country if not return no python developer

function getFirstPython(list) {
    let newArr = list.filter((e,i,a) => e.language == 'Python')
    return newArr.length ? `${newArr[0].firstName}, ${newArr[0].country}` : 'There will be no Python developers'
  }
  