// P:
// R: You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square. If it is a square, return its area. If it is a rectangle, return its perimeter.
// E: area_or_perimeter(6, 10) --> 32 area_or_perimeter(3, 3) --> 9
// P: if length and width the same multiply values. if length and width different find perimeter

const areaOrPerimeter = function(l , w) {
    return l === w ? l*w : 2 * (l+w)
  };