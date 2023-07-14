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

namen = parseInt(prompt("Bitte Namen eingeben:"));
alter = prompt("Bitte Alter eingeben:");

switch (alter) {
    case (alter < 5):
        console.log(`${namen} trinkt Milch`);
        break;
    case (alter < 12):
        console.log(`${namen} trinkt Saft`);
    break;
    case (alter <= 17):
        console.log(`${namen} trinkt Cola`);
    break;
    default:
        console.log(`${namen} trinkt Wein`);
        break;
}
