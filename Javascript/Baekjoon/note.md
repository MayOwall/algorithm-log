## node.js로 백준 input을 입력받는 방법

### 한줄일 경우

```js
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
```

### 여러줄일 경우

```js
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
```
