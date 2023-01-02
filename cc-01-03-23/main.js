// P: a string of characters separated by commas
// R: return a new string containing the same string sequence except the first and last character are removed and the commas are replaced with spaces. if the string param is empty or would cause the return to be empty return NULL
// E: '1,2,3,4' => '2 4' 
// P:

function array(arr){
	return arr.split(',').length <=3 ? null: arr.split(',').slice(1,-1).join(' ')
  
 
}
