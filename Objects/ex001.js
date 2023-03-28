const person = {
    name: 'Valmir',
    last_name: 'Thume Junior',
    eyes: 'green',
    age: 21,
    hello: function() {
        return `Hello, my name is ${person.name + ' ' + person.last_name}, I am ${person.age} years old, my eyes are the green color`
    } 
};


person.name = 'Valmirito'
console.log(person.name)
console.log(person.hello())