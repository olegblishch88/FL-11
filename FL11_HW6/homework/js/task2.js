let a = Number(prompt('Please enter A side for triangle:'));
let b = Number(prompt('Please enter B side for triangle:'));
let c = Number(prompt('Please enter C side for triangle:'));

if(a <= 0 || b <= 0 || c <= 0){
    console.log('Triangle doesnt exist');
}else if( a === b && b === c && c === a ){
    console.log('Eequivalent triangle');
}else if( a !== b && b !== c && c !== a){
    console.log('Normal triangle');
}else if(a === b || b === c || a === c){
    console.log('Isosceles triangle')
}

