function allTruthy() {
  for (let i = 0; i < arguments.length; i++) {
    if (!arguments[i]) {
      return false;
    }
  }
  return true;
}

console.log(allTruthy(5, 4, 3, 2, 1, 0));