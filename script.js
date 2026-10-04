function showMessage() {
    const facts = [
        "John H. Duncan designed the Trenton Battle Monument.",
        "The Trenton Battle Monument Association officially erected the monument.",
        "The monument commemorates the American Army defeating the forces of Great Britain in the Battle of Trenton.",
        "The victory occurred on December 26, 1776.",
        "The Trenton Battle Monument is 130 feet tall.",
        "George Washington stands at the very top of the monument.",
        "The statue of George Washington is 13 feet tall.",
        "William Rudolf O'Donovan sculpted the statue of George Washington.",
        "Alexander Hamilton was the artillery captain Washington commanded to direct the cannons.",
        "During the Battle of Trenton, the American forces fought Hessian-German mercenary soldiers."
    ];

    const randomFact = facts[Math.floor(Math.random() * facts.length)];

    alert(randomFact);
}