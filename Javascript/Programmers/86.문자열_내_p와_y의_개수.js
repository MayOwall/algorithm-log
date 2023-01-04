const solution = (s) =>
  [...s].filter((v) => v === "p" || v === "P").length ===
  [...s].filter((v) => v === "y" || v === "Y").length;

// 기존 코드
/*
function solution(s){
    let countP = 0;
    let countY = 0;
    
    [...s].forEach(v => {
        if(v === 'p' || v === 'P') countP += 1;
        if(v === 'y' || v === 'Y') countY += 1;
    } );
    
    return countP === countY ? true : false;
}
*/
