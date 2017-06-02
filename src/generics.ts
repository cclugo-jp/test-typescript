// Generics are templates that allow the same function to accept arguments of various different types. 
// Creating reusable components using generics is better than using the any data type, 
// as generics preserve the types of the variables that go in and out of them.

// A quick example would be a script that receives an argument and returns an array containing that same argument.

// The <T> after the function name symbolizes that it's a generic function.
// When we call the function, every instance of T will be replaced with the actual provided type.

// Receives one argument of type T,
// Returns an array of type T.

function genericFunc<T>(argument: T): T[] {    
  var arrayOfT: T[] = [];    // Create empty array of type T.
  arrayOfT.push(argument);   // Push, now arrayOfT = [argument].
  return arrayOfT;
}

var arrayFromString = genericFunc<string>("beep");
console.log(arrayFromString[0]);         // "beep"
console.log(typeof arrayFromString[0])   // String

var arrayFromNumber = genericFunc(42);
console.log(arrayFromNumber[0]);         // 42
console.log(typeof arrayFromNumber[0])   // number

// The first time we called the function we manually set the type to string. 
// This isn’t required as the compiler can see what argument has been passed and automatically decide what type suits it best, 
// like in the second call. Although it’s not mandatory, 
// providing the type every time is considered good practice as the compiler might fail to guess the right type in more complex scenarios.