class restaurantManager {
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
    ]
    printallRestaurantName=() =>{
        return this.restaurantList.map((restaurant) => restaurant .restaurantName); 
    };
    filterRestaurantName=(cityName) => {
        return this.restaurantList.filter((restaurant)=> restaurant.city == cityName);
    };
}

const restaurantObj = new restaurantManager();
console.log(restaurantObj.printallRestaurantName());
console.log(restaurantObj.filterRestaurantcity('Pune'));

const date =new Date();
console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear);
console.log(date.getTime());
console.log(date.getHours());

console.log('// Math');

console.log(Math.round(23.456));
console.log(Math.cell(45.75));
console.log(Math.floor(95.142));
console.log(Math.PI);
console.log(Math.sqrt(16));
console.log(Math.random());