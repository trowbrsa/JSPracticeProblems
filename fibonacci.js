function fib(n){
  if (n < 2) {return n}
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(5));

function iterativeFib(n){
  if(n < 2){ return n}

  var prevPrev = 0; // fib0
  var prev = 1; // fib1
  var current;// fib 2

  for(var i = 1; i < n; i++){
    current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
  }
  return current;
}

console.log(iterativeFib(5));
