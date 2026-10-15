function showMessage() {
    const facts = [
        "John H. Duncan designed me.",
        "The Trenton Battle Monument Association officially commissioned me.",
        "The monument commemorates the American Army defeating the forces of Great Britain in the Battle of Trenton.",
        "The victory occurred on December 26, 1776.",
        "I am 130 feet tall.",
        "George Washington stands at the very top of me.",
        "The statue of George Washington is 13 feet tall.",
        "William Rudolf O'Donovan sculpted the statue of George Washington.",
        "I'm located at the intersection of North Broad Street, Warren Street, Brunswick Avenue, Pennington Avenue, and Princeton Avenue.",
        "During the Battle of Trenton, the American forces fought German soldiers."
    ];

    const randomFact = facts[Math.floor(Math.random() * facts.length)];

    alert(randomFact);
}
