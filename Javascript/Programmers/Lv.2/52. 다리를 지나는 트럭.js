const solution = (bridge_length, weight, truck_weights) => {
  let cnt = 0;
  let sum = 0;
  let leftTrucks = truck_weights.length;
  let bridge = Array.from({ length: bridge_length }, () => 0);

  while (!!leftTrucks) {
    cnt += 1;

    const headTruck = bridge[0];
    if (!!headTruck) {
      sum -= headTruck;
      leftTrucks -= 1;
    }

    const nextBridge = bridge.slice(1);
    const nextTruck =
      sum + truck_weights[0] <= weight ? truck_weights.shift() : 0;
    nextBridge.push(nextTruck);
    sum += nextTruck;
    bridge = nextBridge;
  }

  return cnt;
};
