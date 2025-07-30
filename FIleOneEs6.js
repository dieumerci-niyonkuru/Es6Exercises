const obj={
    name:"ganza",
    city:"kigali",
    age:25,
    greet:  function(){
        console.log(`Hello, my name is ${this.name} and my age is ${this.age} and also my city 
            
            is ${this.city}`);
    }
};
obj.greet();
const arr=[12,87,70,98,43];
for(const index of arr){
    console.log(index);
}
function restparameter(...items){
for( const itm of items){
    console.log(itm)
}
}
restparameter(12,34,67,9,87);