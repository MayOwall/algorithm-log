function solution(numbers) {
    const nums = numbers.split('');
    let answer = 0;
    const primes = {};
    
    function isPrime(num) {
        if(num < 2) return false;
        if(num === 2) return true;
        for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
            if(num % i === 0) return false; 
        }
        return true; 
    }
    
    const search = (num, lefts) => {
        if(isPrime(num * 1) && !primes[num * 1]) primes[num * 1] = true;
        if(!lefts.length) return;
        
        lefts.forEach((left, i) => {
            const nextNum = `${num}${left}`;
            const nextLefts = [...lefts.slice(0, i), ...lefts.slice(i + 1)];
            search(nextNum, nextLefts);
        })
    };
    
    search('', nums);
    return Object.keys(primes).length;
}