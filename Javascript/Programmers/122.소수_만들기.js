// 소수인지 판별하는 함수 만들기
const isPrime = (num) => {
  for (let i = 2; i * i <= num; i++) {
    if (!(num % i)) return false;
  }
  return true;
};

// 풀이
const solution = (nums) => {
  let answer = 0;
  for (let a = 0; a < nums.length - 2; a++) {
    for (let b = a + 1; b < nums.length - 1; b++) {
      for (let c = b + 1; c < nums.length; c++) {
        isPrime(nums[a] + nums[b] + nums[c]) ? answer++ : null;
      }
    }
  }

  return answer;
};

// 예전 풀이
/*
function solution(nums) {
    let answer = 0, number = 0;
    
    for(let i = 0; i < nums.length - 2; i++){
        for(let j = i + 1; j < nums.length - 1; j++){
            for(let l = j + 1; l < nums.length; l++){
                number=nums[i]+nums[j]+nums[l];
                let count=0;
                
                for(var k=1;k<=number;k++){
                    if(number%k==0) count++;
                }
                
                if(count==2) answer++;
            }
        }
    }
    return answer;
}
*/
