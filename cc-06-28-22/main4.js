// P: string
// R: string sandwich with shorter string on outside both side of the longer string
// E: '1' '22' => '1221'
// P: turnary if a.length < b.length => aba : bab

function solution(a, b){
    return a.length < b.length ? `${a}${b}${a}` :  `${b}${a}${b}`
  }