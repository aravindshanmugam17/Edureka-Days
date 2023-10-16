const ratingData =[
    { restaurant:'KRC',rating:5},
    { restaurant:'Burger king',rating:4},
    { restaurant:'KRC',rating:3},
    { restaurant:'Domino',rating:2},
    { restaurant:'Sudway',rating:3},
    { restaurant:'Domino',rating:1},
    { restaurant:'Sudway',rating:4},
    { restaurant:'Pizza Hut',rating:5},

];

const avgRating = ()=>{
    const headers = Array.from(
        new Set(ratingData.map(({restaurant})=> restaurant))
    );
    let arr =[];
    headers.map((head)=>{
        let total =0;
        let count=0;
        const filterredratingData = ratingData.filter(
            (obj)=> obj.restaurant == head
        );
        filterredratingData.map((item)=>{
            total =filterredratingData.reduce((prev,next)=>prev + next.rating,0);
            count++;
        });
        arr.push({ restaurant:head,averageRating:(total/count).toFixed(2)});

    });
    return arr;
};

const arr =avgRating();

console.log(arr);

console.log(arr.filter((item)=>item.averageRating>4));