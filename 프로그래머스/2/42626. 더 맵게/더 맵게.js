class MinQueue {
    constructor(){
        this.queue = [null];
    }
    
    getParentIdx = (i) => Math.floor(i / 2);
    getLeftIdx = (i) => i * 2;
    getRightIdx = (i) => i * 2 + 1;
    getMin = () => this.queue.length > 1 ? this.queue[1] : null;
    getQueue = () => [...this.queue];
    getCount = () => this.queue.length - 1;
    
    up = () => {
        let curIdx = this.queue.length - 1;
        while(curIdx > 1) {
            const parentIdx = this.getParentIdx(curIdx);
            
            const cur = this.queue[curIdx];
            const parent = this.queue[parentIdx];
            if(parent <= cur) break;
            
            this.queue[curIdx] = parent;
            this.queue[parentIdx] = cur;
            curIdx = parentIdx;
        };
    };
    
    down = () => {
        let curIdx = 1;
        while(this.getLeftIdx(curIdx) <= this.queue.length - 1) {
            const leftIdx = this.getLeftIdx(curIdx);
            const rightIdx = this.getRightIdx(curIdx);
            const minIdx = !this.queue[rightIdx] ? leftIdx : this.queue[rightIdx] < this.queue[leftIdx] ? rightIdx : leftIdx;
            const min = this.queue[minIdx];
            const cur = this.queue[curIdx];
            
            if(cur <= min) break;
            this.queue[curIdx] = min;
            this.queue[minIdx] = cur;
            curIdx = minIdx;
        }
    }
    enQueue = (v) => {
        this.queue.push(v);
        this.up();
    };
    
    deQueue = () => {
        if(this.queue.length === 1) {
            return null;
        }
        if(this.queue.length === 2) {
            return this.queue.pop();
        }
        const min = this.getMin();
        this.queue[1] = this.queue.pop();
        this.down();
        return min;
    };
    
    
}

function solution(scoville, K) {
    const q = new MinQueue();
    scoville.forEach(v => q.enQueue(v));
    let count = 0;
    
    while(q.getCount() >= 2) {
        if(q.getMin() >= K) {
            break;
        }
        const next = q.deQueue() + (q.deQueue() * 2);
        q.enQueue(next);
        count++;
    }
    
    return q.getMin() >= K ? count : -1;
}