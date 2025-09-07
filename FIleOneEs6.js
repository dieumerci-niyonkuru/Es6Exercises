// A simple object with a method
const obj = {
    name: "ganza",
    city: "kigali",
    age: 25,
    greet: function () {
        console.log(`Hello, my name is ${this.name} and my age is ${this.age} and also my city is ${this.city}`);
    }
};
obj.greet();

// ---

// Iterating over an array using a for...of loop
const arr = [12, 87, 70, 98, 43];
console.log("\nArray elements:");
for (const element of arr) {
    console.log(element);
}

// ---

// Using a function with rest parameters
function restparameter(...items) {
    console.log("\nRest parameters output:");
    for (const itm of items) {
        console.log(itm);
    }
}
restparameter(12, 34, 67, 9, 87);

// ---

// A class to manage a study group
class LearnTogether {
    constructor() {
        this.members = [];
    }

    addMember(name, topic) {
        this.members.push({ name, topic });
        console.log(`${name} has joined the group to learn about ${topic}.`);
    }

    removeMember(name) {
        this.members = this.members.filter(member => member.name !== name);
        console.log(`${name} has left the group.`);
    }

    displayMembers() {
        if (this.members.length === 0) {
            console.log("No members in the group.");
            return;
        }

        console.log("Current Members:");
        this.members.forEach(member => {
            console.log(`- ${member.name} (Learning about: ${member.topic})`);
        });
    }
}

const studyGroup = new LearnTogether();
console.log("\nStudy Group Members:");
studyGroup.addMember('Alice', 'JavaScript');
studyGroup.addMember('Bob', 'Python');
studyGroup.displayMembers();
studyGroup.removeMember('Alice');
studyGroup.displayMembers();

// ---

// Creating and iterating over a Set
const setvalues = new Set(['apple', 'banana', 'orange']);
const iterator = setvalues.values();
console.log("\nSet iterator value:");
console.log(iterator.next().value);