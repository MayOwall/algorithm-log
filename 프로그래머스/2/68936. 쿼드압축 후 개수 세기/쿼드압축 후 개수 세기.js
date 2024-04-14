function solution(arr) {
    return search(arr);
    
    function search(arr) {
        if(arr.length === 1) {
            if(arr[0][0] === 1) {
                return [0, 1];
            };
            if(arr[0][0] === 0) {
                return [1, 0];
            };
        };
        
        const n = arr.length / 2;
        
        const a = arr.slice(0, n).map(v => v.slice(0, n));
        const b = arr.slice(0, n).map(v => v.slice(n));
        const c = arr.slice(n).map(v => v.slice(0, n));
        const d = arr.slice(n).map(v => v.slice(n));
        
        const resultA = search(a);
        const resultB = search(b);
        const resultC = search(c);
        const resultD = search(d);
        
        const sum = [resultA, resultB, resultC, resultD].reduce((acc, cur) => {
            return [acc[0] + cur[0], acc[1] + cur[1]];
        },[0, 0]); 
        
        if(sum[0] === 4 && sum[1] === 0) {
            return [1, 0];
        };
        if(sum[0] === 0 && sum[1] === 4) {
            return [0, 1];
        }
        
        return sum;
    }
    
    /** search (arr)
    
        arr을 받는다.
        arr이 한칸짜리라면
        한칸 안의 값이 1이라면 [0, 1]을 반환
        한칸 안의 값이 0이라면 [1, 0]을 반환 끝
        
        arr을 4분할로 나눈다.
        n = arr의 현재 길이 / 2
        0 ~ n, n ~ 2n
        0 ~ n, n ~ 2n 
        
        a = search(arr)
        b = search(arr)
        c = search(arr)
        d = search(arr)
        
        return [a, b, c, d].reduce(...) 0과 1을 다 더해서 리턴
    */
}
