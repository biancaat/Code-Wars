// P: a string that represents a dirty file name
// R: return the filename with the first extension only
// E: "1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34" => 'This_is_an_otherExample.mpg'
// P: find the index for the first letter in the filename, find the index for the last netter of the file name, isolate the extension name, return the the dirtyfile name sliced with the above indexes and the extension in a template literal

class FileNameExtractor {
    static extractFileName (dirtyFileName) {
      let fileNameIndexStart = dirtyFileName.indexOf('_') +1;
      let fileNameIndexEnd = dirtyFileName.indexOf('.')
      
      let extensionName = dirtyFileName.slice(fileNameIndexEnd+1).split('.')[0]
      
      return `${dirtyFileName.slice(fileNameIndexStart, fileNameIndexEnd)}.${extensionName}`
    }
}