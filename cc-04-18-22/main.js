// P:
// R: Introduction: The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc. Task: Given a year, return the century it is in.
// E: century(1705), 18 (century(1900), 19, (century(1601), 17, '
// P: return a value that is divided by 100 and rounded up to the nearest integer.

function century (year){
    return Math.ceil(year/100);
}