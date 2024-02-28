const solution = (phone_book) => {
    phone_book.sort((a, b) => a.length - b.length);
    
    for(let i = 0; i < phone_book.length; i++) {
        const num = phone_book[i];
        if(isPrefixExist(num)) return false;
        prefixs[num] = true;
    }
    
    return true;
}

const prefixs = {};

const isPrefixExist = (num) => {
    for(let i = 1; i <= num.length; i++) {
        const cur = num.slice(0, i);
        if(prefixs[cur]) return true;
    }
    return false;
}