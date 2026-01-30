// index.ts
console.log("Hello, TypeScript!");

function divide(a: number, b: number) {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
}

console.log(divide(10, 2)); // 5
