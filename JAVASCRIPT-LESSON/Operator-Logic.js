let yog = 10;
let mas = 12;

/* AND operator */
console.log(yog < 15 && mas > 10); // (true && true) -> true
console.log(yog > 15 && mas > 10); // (false && true) -> false

/* OR operator */
console.log(yog < 15 || mas > 10); // (true || true) -> true
console.log(yog > 15 || mas > 10); // (false || true) -> true

/* NOT operator */
console.log(!(yog < 15)); // !(true) -> false
console.log(!(yog < 15 && mas > 10)); // !(true && true) -> !(true) -> false
