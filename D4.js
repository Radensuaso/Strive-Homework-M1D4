/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript (uncommented)
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Create an array containing the first 5 positive numbers.
*/

/* WRITE YOUR CODE HERE */
console.log("----------------------< EXERCISE 1 >-------------------------------\n");

let theFive = [1, 2, 3, 4, 5];
console.log(theFive);

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

/* WRITE YOUR CODE HERE */
console.log("\n----------------------< EXERCISE 2 >-------------------------------\n");

let person = {
    name: "André",
    surname: "Sousa",
    email: "andrels@gmail.com",
    age: 28
}
console.log(person);

/* EXERCISE 3
Add to the previously created object a boolean value to represent whether you have or not a driving license.
*/
/* WRITE YOUR CODE HERE */
console.log("\n----------------------< EXERCISE 3 >-------------------------------\n");

person.hasDrivingLicense = true;
console.log(person);


/* EXERCISE 4
Remove from the previously created object the age property.
*/

/* WRITE YOUR CODE HERE */
console.log("\n----------------------< EXERCISE 4 >-------------------------------\n");
delete person.age;
console.log(person);

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

/* WRITE YOUR CODE HERE */
console.log("\n----------------------< EXERCISE 5 >-------------------------------\n");
let person2 = {};
Object.assign(person2, person);
person2.email = "batman@gmail.com";
console.log(person2);

/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/

/* WRITE YOUR CODE HERE */
console.log("\n----------------------< EXERCISE 6 >-------------------------------\n");
let totalShoppingCart = 56;
let totalCost;
if (totalShoppingCart < 51) {
    totalCost = totalShoppingCart + 10;
    console.log(`The total cost of your cart is ${totalCost}€. To have free shipping add more contents to the cart.`);
} else {
    totalCost = totalShoppingCart;
    console.log(`You have free shipping. The total cost of your cart is ${totalCost}€.`);
}

/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR CODE HERE */
console.log("\n----------------------< EXERCISE 7 >-------------------------------\n");
let totaltotalShoppingCartWithDiscount = totalShoppingCart - (totalShoppingCart * 0.2);
if (totaltotalShoppingCartWithDiscount < 51) {
    totalCost = totaltotalShoppingCartWithDiscount + 10;
    console.log(`The total cost of your cart is ${totalCost}€. To have free shipping add more contents to the cart.`);
} else {
    totalCost = totaltotalShoppingCartWithDiscount;
    console.log(`You have free shipping. The total cost of your cart is ${totalCost}€.`);
}


/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

/* WRITE YOUR CODE HERE */
console.log("\n----------------------< EXERCISE 8 >-------------------------------\n");
car = {
    brand: "Renault",
    model: "Captur",
    licensePlate: "21-BP-Y1"
}
console.log(car);

car2 = {};
car3 = {};
car4 = {};
car5 = {};
car6 = {};

Object.assign(car2, car);
Object.assign(car3, car);
Object.assign(car4, car);
Object.assign(car5, car);
Object.assign(car6, car);

car2.licensePlate = "45-IS-08";
car3.licensePlate = "15-PT-78";
car4.licensePlate = "85-IP-MD";
car5.licensePlate = "98-01-K6";
car6.licensePlate = "09-GF-07";

console.log(car2);
console.log(car3);
console.log(car4);
console.log(car5);
console.log(car6);

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

/* WRITE YOUR CODE HERE */
console.log("\n----------------------< EXERCISE 9 >-------------------------------\n");

let carsForRent = [car, car2, car3, car4, car5, car6];
console.log(carsForRent);

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR CODE HERE */
console.log("\n----------------------< EXERCISE 10 >-------------------------------\n");
carsForRent.shift();
carsForRent.pop();
console.log(carsForRent);

/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/

/* WRITE YOUR CODE HERE */
console.log("\n----------------------< EXERCISE 11 >-------------------------------\n");
let brandDataType = typeof(car.brand);
let licensePlateDataType = typeof(car.licensePlate);
console.log(`Brand Data Type: ${brandDataType}. License Plate Data Type: ${licensePlateDataType}.`);
            
/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

/* WRITE YOUR CODE HERE */
console.log("\n----------------------< EXERCISE 12 >-------------------------------\n");
let carsForSale = [
    {
        brand: "Ferrari",
        model: "812 GTS",
        licencensePlate: "LT-21-98"
    },
    {
        brand: "Toyota",
        model: "Avalon",
        licencensePlate: "82-LT-P1"
    },
    {
        brand: "Renault",
        model: "Clio",
        licencensePlate: "P1-ND-81"
    }
];

let totalCars = carsForSale.concat(carsForRent).length;
console.log(`The Total number of cars for sale and rent are: ${totalCars}.`);

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

/* WRITE YOUR CODE HERE */
console.log("\n----------------------< EXERCISE 13 >-------------------------------\n");
for (let i = 0; i < carsForSale.length; i++) {
    console.log(`Car ${i + 1} is a ${carsForSale[i].brand} ${carsForSale[i].model}, with the license plate ${carsForSale[0].licencensePlate}.`);
}


/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/