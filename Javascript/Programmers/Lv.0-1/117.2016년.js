const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const solution = (a, b) => day[new Date(2016, a - 1, b).getDay()];

// 예전 풀이
/*
function solution(a, b) {
    const days = [`SUN`, `MON`, `TUE`, `WED`, `THU`, `FRI`, `SAT`];
    const theDate = new Date(2016, a-1, b);
    
    return days[theDate.getDay()];
}
*/
