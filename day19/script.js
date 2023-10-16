let z='one';

switch(z){
    case 'one':
     console.log('Hello from case one ...');
    case 'two':
     console.log('Hello from case two ...');
    case 'three':
        console.log('Hello from case three...');
    default:
            console.log('none of teh case is satisfied.');
}
let k=1;
let sum=0;
while (k <= 10){
    sum =sum + 10;
    k += 1;
}
console.log(sum);

for(let i =0; i <5;i++){
    console.log('welcome to veranda');

}

const newobj =[
    {
        id:1,
        order:'below 500',
        'order percentage': '10.05',
        restaurant:'punjabi tadka',
    },
    {
        id:2,
        order:'500-100',
        'order percentage': '14.57',
        restaurant:'punjabi tadka',
    },
    {
        id:3,
        order:'1000-1500',
        'order percentage': '15.05',
        restaurant:'punjabi tadka',
    },
    {
        id:4,
        order:'1500-2000',
        'order percentage': '22.11',
        restaurant:'punjabi tadka',
    },
    {
        id:5,
        order:'above 2000',
        'order percentage': '38.19',
        restaurant:'punjabi tadka',
    }
];
for(let obj of newobj){
    console.log(obj['order percentage']);
}