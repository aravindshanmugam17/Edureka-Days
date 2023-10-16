restaurantList =[
    {
        id:1,
        restaurantName: 'KFC',
        address:'Anand vihar',
        city:'Delhi',
    },
    {
        id:2,
        restaurantName: 'Domino',
        address:'prabanjan',
        city:'Delhi',
    },
    {
        id:3,
        restaurantName: 'Burger King',
        address:'Civil Lines',
        city:'Pune',
    },
    {
        id:4,
        restaurantName: 'Suway',
        address:'Cantonment',
        city:'Mumdai',
    },
];

let userData =[
    {
        userid:1,
        id:1,
        title: 'delectus aut autem',
        completed: false,
    },
    {
        userid:1,
        id:2,
        title: 'quis ut nam facilis et oficia qui',
        completed: false,
    },
    
    {
        userid:1,
        id:3,
        title: 'fugiat veniam minus',
        completed: false,
    },
    
    {
        userid:1,
        id:4,
        title: 'et porro tempora',
        completed: false,
    },
    {
        userid:1,
        id:5,
        title: 'laboriosam mollitia et enasi quasi adipisci',
        completed: false,
    },
    
    
];
const getData =() =>{
    const myPromise = new Promise ((resolve,reject) =>{
        setTimeout(()=>{
            resolve(userData);
        },3000);
    });
    return myPromise;
    
};
const myFun =async () =>{
    const x =await getData();
    console.log(x);
    x.map((item)=>{
        console.log(item.title);
    });
};

myFun();

const spreadFunction =()=>{
    let newArr =[...restaurantList,[1,2,3,]];
    console.log(newArr);
};

spreadFunction();
  
const restFunction = (...args) =>{
    args.map((ele)=>{
        console.log(ele);
    });
};

restFunction(...restaurantList);