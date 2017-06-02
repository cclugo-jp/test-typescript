//Interfaces are used to type-check whether an object fits a certain structure. 
//By defining an interface we can name a specific combination of variables, making sure that they will always go together. 
//When translated to JavaScript, interfaces disappear – their only purpose is to help in the development stage.
// We tell our function to expect an object that fulfills the Food interface. 
// This way we know that the properties we need will always be available.
function speak(food) {
    console.log("Our " + food.name + " has " + food.calories + " calories.");
}
// We define an object that has all of the properties the Food interface expects.
// Notice that types will be inferred automatically.
var ice_cream = {
    name: "ice cream",
    calories: 200
};
speak(ice_cream);
//# sourceMappingURL=interfaces.js.map