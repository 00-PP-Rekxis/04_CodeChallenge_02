/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

/******** Variante I. Switch | Case ********/

// let firstName = prompt("Bitte Namen eingeben:");
// let age = parseInt(prompt("Bitte Alter eingeben:"));

// switch (true) {
//     case (age >= 0 && age <= 5):
//         console.log(`${firstName} trinkt Milch`);
//         break;
//     case (age >= 6 && age <= 12):
//         console.log(`${firstName} trinkt Saft`);
//         break;
//     case (age >= 13 && age <= 17):
//         console.log(`${firstName} trinkt Cola`);
//         break;
//     default:
//         console.log(`${firstName} trinkt Wein`);
//         break;
// }


/******** Variante Ia. Switch | Case - Kleinere Redundanz ********/

// let firstName = prompt("Bitte Namen eingeben:");
// let age = parseInt(prompt("Bitte Alter eingeben:"));

// let drink;

// switch (true) {
//     case (age >= 0 && age <= 5):
//         drink = "Milch";
//         break;
//     case (age <= 12):
//         drink = "Saft";
//         break;
//     case (age <= 17):
//         drink = "Cola";
//         break;
//     default:
//         drink = "Wein";
//         break;
// }

// console.log(`${firstName} trinkt ${drink}`);


/******** Variante II. IF / ELSE IF  ********/

// let firstName = prompt("Bitte Namen eingeben:");
// let age = parseInt(prompt("Bitte Alter eingeben:"));

// if (age >= 0 && age <= 5) {
//     console.log(`${firstName} trinkt Milch`);
// } else if (age >= 6 && age <= 12) {
//     console.log(`${firstName} trinkt Saft`);
// } else if (age >= 13 && age <= 17){
//     console.log(`${firstName} trinkt Cola`);
// } else {
//     console.log(`${firstName} trinkt Wein`);
// }


/******** Variante IIa. IF / ELSE IF - Kleinere Redundanz ********/

// let firstName = prompt("Bitte Namen eingeben:");
// let age = parseInt(prompt("Bitte Alter eingeben:"));

// let drink;

// if (age >= 0 && age <= 5) {
//     drink = "Milch";
// } else if (age <= 12) {
//     drink = "Saft";
// } else if (age <= 17){
//     drink = "Cola";
// } else {
//     drink = "Wein";
// }

// console.log(`${firstName} trinkt ${drink}`);

/******** Variante III. Ternärer Operator ********/

// let firstName = prompt("Bitte Namen eingeben:");
// let age = parseInt(prompt("Bitte Alter eingeben:"));

// let drink = (age >= 0 && age <= 5) ? "Milch" :
//             (age <= 12) ? "Saft" :
//             (age <= 17) ? "Cola" :
//             "Wein";
                                        
// console.log(`${firstName} trinkt ${drink}`);


/******** Variante Var_1 ********/

let firstName = prompt("Bitte Namen eingeben:");
let ageInput = prompt("Bitte Alter eingeben:");

let age = parseInt(ageInput);

let drink;

if (!isNaN(age) && typeof ageInput === "string") {
    if (age >= 0 && age <= 5) {
        drink = "Milch";
    } else if (age <= 12) {
        drink = "Saft";
    } else if (age <= 17){
        drink = "Cola";
    } else {
        drink = "Wein";
    }
    console.log(`${firstName} trinkt ${drink}`);
} else {
    console.log("Tee");
}