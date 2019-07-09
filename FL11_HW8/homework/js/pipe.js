function pipe() {
    let one = arguments[0];
    for(let i = 1; i < arguments.length; i++) {
    one = arguments[i](one);
    }
    return one;
  }
  
  function addOne(x) {
    return x + 1;
  }
  console.log(pipe(1, addOne, addOne, addOne));