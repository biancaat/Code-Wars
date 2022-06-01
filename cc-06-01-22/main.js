// P: array of numbers, empty array, null
// R: sorted array from low to high or empty array
// E: solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50] || solution(null); // should return []
// P: if array is empty or null return empty array else sort the array from least to most

function solution(nums){
    return nums === null ? [] :  nums.sort((a,b) => a-b)
  
  }