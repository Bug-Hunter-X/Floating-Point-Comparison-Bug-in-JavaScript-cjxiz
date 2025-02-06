function foo(a, b, tolerance = 0.00001) {
  return Math.abs(a - b) < tolerance;
}
// Example usage showing that the solution handles the floating point issues appropriately.
console.log(foo(0.1 + 0.2, 0.3)); // true
console.log(foo(0.1 + 0.2, 0.3, 0.00000001)); //false