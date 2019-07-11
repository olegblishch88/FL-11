function reverseNumber(num){
    num = String(num);
    let reverseNum = '';
    for(let i = num.length - 1; i >= 0; i-- ){
        reverseNum += num[i];
    }
    return parseInt(reverseNum) * Math.sign(num);
}

reverseNumber(-345);
