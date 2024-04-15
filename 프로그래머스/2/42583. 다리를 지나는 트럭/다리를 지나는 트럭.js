function solution(bridge_length, weight, truck_weights) {
    let count = truck_weights.length;
    let time = 0;
    const bridge = Array.from({length : bridge_length}, () => 0);
    
    const trucks = truck_weights;
    let weightSum = 0;
    
    while(count) {
        time += 1;
        // 다리의 첫번째 요소 shift;
        const out = bridge.shift();
        // 다리의 첫번째 요소가 0이 아니면 count -= 1;
        if(out) {
            count -= 1;
            weightSum -= out;
        }
        // 남은 트럭이 없다면 다리에 0을 넣고 return
        if(!trucks.length) {
            bridge.push(0);
            continue;
        }
        // 남은 트럭이 있다면
        const next = trucks[0];
        if(weight - weightSum < next) {
            bridge.push(0);
        } else {
            bridge.push(trucks.shift());
            weightSum += next;
        }
        
    }
    return time;
}