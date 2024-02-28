const solution = (clothes) => {
    const closet = {};
    
    // 옷들을 종류별로 분류
    clothes.forEach(cloth => {
        const [name, type] = cloth;
        if(!closet[type]) closet[type] = 0;
        closet[type] += 1;
    });
    
    // 경우의 수를 조합
    const result = Object.values(closet).reduce((acc, cur) => acc * (cur + 1), 1) - 1;
    return result;
}