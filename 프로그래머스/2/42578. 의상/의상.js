function solution(clothes) {
    const closet = {};
    clothes.forEach(([cloth, type]) => {
        if(!closet[type]) closet[type] = {};
        if(!closet[type][cloth]) closet[type][cloth] = true;
    });

    return Object.values(closet).reduce((acc, cur) => acc * (Object.keys(cur).length + 1), 1) - 1;
}