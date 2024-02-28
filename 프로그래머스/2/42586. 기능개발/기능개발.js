// 1. 각 작업별로 배포되는데 소요되는 날짜 배열을 구한다.
// 2. 1의 배열을 순회하며 현재 인덱스보다 같거나 작은 값의 값이 얼마나 연속되는지 구한다.
// 3. 구한 값들을 배열로 리턴한다.
const solution = (pregresses, speeds) => {
    const days = pregresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));
    const answer = [];
    
    const sum = days.reduce((acc, cur) => {
        if(acc.max < cur) {
            if(acc.count) answer.push(acc.count);
            acc.max = cur;
            acc.count = 1;
            return acc;
        }
        
        acc.count += 1;
        return acc;
    }, {max : 0, count : 0});
    
    if(sum.count) answer.push(sum.count);
    return answer;
}