
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. 
// Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
    let averageScore = (s1 + s2 + s3) / 3;
   if (averageScore >= 90 && averageScore <= 100) {
     return 'A';
   } else if (averageScore >= 80 && averageScore < 90) {
     return 'B';
   } else if (averageScore >= 70 && averageScore < 80) {
     return 'C';
   } else if (averageScore >= 60 && averageScore < 70) {
     return 'D';
   } else {
     return 'F';
   }
 }