const isOnline = (a,b,c) => {
    return (c.x - a.x) / (b.x - a.x) === (c.y - a.y) / (b.y - a.y)
}
console.log( isOnline({x:2, y:2}, {x:8, y:8}, {x:5, y:5}) );

const isOnTheMiddle = (a,b,c) => {
    const wholeDistance = Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
    const toPointDistance = Math.sqrt(Math.pow(c.x - a.x, 2) + Math.pow(c.y -a.y, 2));
    return toPointDistance === wholeDistance / 2;
}
console.log(isOnTheMiddle({x:2, y:2}, {x:8, y:8}, {x:5, y:5} ));

