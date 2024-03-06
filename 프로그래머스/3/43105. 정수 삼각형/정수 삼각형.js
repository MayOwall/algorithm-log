const solution = (triangle) => {
   for(let i = triangle.length - 2; i >= 0; i--) {
       for(let j = 0; j < triangle[i].length; j++) {
           const left = triangle[i + 1][j];
           const right = triangle[i + 1][j + 1];
           triangle[i][j] += left > right ? left : right;
       }
   }
    
   return triangle[0][0]
}

