const obj = {
    name: "ganza",
    city: "kigali",
    age: 25,
    greet: function () {
        console.log(`Hello, my name is ${this.name} and my age is ${this.age} and also my city is ${this.city}`);
    }
};
obj.greet();

const arr = [12, 87, 70, 98, 43];
for (const index of arr) {
    console.log(index);
}

function restparameter(...items) {
    for (const itm of items) {
        console.log(itm);
    }
}
restparameter(12, 34, 67, 9, 87);

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
studyGroup.addMember('Alice', 'JavaScript');
studyGroup.addMember('Bob', 'Python');
studyGroup.displayMembers();
studyGroup.removeMember('Alice');
studyGroup.displayMembers();
