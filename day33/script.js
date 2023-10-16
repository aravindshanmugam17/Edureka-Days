//Q1.Create an example for Array,Object,Set,andMapDatatypes.

let arr1=['Apple','Mango','Graphs','Guava']
console.log(arr1);

obj={
    name:'Surya',
    empid:'3469',
    mailid:'suryamail@gmail.com',
    address:{
        City:'nazambad',
        District:'Nazambad District',
        Pin:648597
    },

    Hobbies:['Badmiton','E-sports','Netflix'],
}
console.log(obj);

for(let value of arr1)
{
    console.log(value);
}

Object.values(obj).map((val)=>{
    console.log(val);
})




const fruits = new Set()
fruits.add('Apple')
fruits.add('Mango')
fruits.add('Graphs')
fruits.add('Guava')
function aravind(value)
    {
    
        if(value=='Graphs'){
            console.log(value);
        }
    }
fruits.forEach(aravind)

console.log(fruits.has('Mango'));

const map=new Map()

map.set('Hello World','Guava');
const arr=[1,2,3];
map.set(arr,{
    type:'numbers',
    value:arr,
});
console.log(map);
