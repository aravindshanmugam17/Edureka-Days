

//global scope
let y='global';
console.log('value of y in global scope:' + y);

//block scope

function myfun(){
    const y='functional';
    console.log('value of y in functional scope:'+y);
    if (true){
        const y='block';
        console.log('value of y block scope:'+y);
    }
}
myfun();

//Lexical scope
function newfn(){
    console.log('value of y in lexical scopoing:'+y);
}
newfn();

//console.log(typeof Add);
let z =[1,2,3,4,5];

 const Add =(...args) =>{
    let sum =0;
    args .map((ele)=>{
        sum = sum+ele;
    });
    return sum;
};

console.log(Add(...z))