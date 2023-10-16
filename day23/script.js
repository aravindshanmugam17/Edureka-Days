class EmployeeData{
    emp1 ={
        name:'Rahul',
        empid:3567,
        mailid:'mailme@gmail.com',
        Address:{
            'City Name':'vijayawada',
            District:'krishna district',
            pin:526894,
        },
        Hobbies:['Natflix','Tennis','Codind'],
    };
    emp2 ={
        name:'Ravi',
        empid:9867,
        mailid:'ravi@gmail.com',
        Address:{
            'City Name':'guntur',
            District:'prakasham district',
            pin:526894,
        },
        Hobbies:['Reading','Swimming','Baking'],
    };
    emp3 ={
        name:'Santosh',
        empid:8876,
        mailid:'san@gmail.com',
        Address:{
            'City Name':'Warangal',
            District:' Hanamkonda district',
            pin:526894,
        },
        Hobbies:['Natflix','Tennis','Codind'],
    };
    emp4 ={
        name:'Surya',
        empid:3464,
        mailid:'surya@gmail.com',
        Address:{
            'City Name':'Nazambad',
            District:'Nazambad district',
            pin:526894,
        },
        Hobbies:['gaming','cooking','music'],
    };
    emp5 ={
        name:'Kiram',
        empid:8843,
        mailid:'kiram@gmail.com',
        Address:{
            'City Name':'wadavijaya',
            District:'krishna district',
            pin:526894,
        },
        Hobbies:['Natflix','Tennis','Codind'],
    };
}

const empData = new EmployeeData();
const body = document.querySelector('#body');
console.log(body);

const mainbox = document.createElement('div');
mainbox.className = 'mainbox';

body.appendChild(mainbox);

Object.keys(empData).map((emp,index) =>{
    const empbox = document.createElement('div');
    empbox.className =`emp${index +1}`;
    
    const h2 = document.createElement('h2');
    h2.innerHTML =`Name: ${empData[emp].name}`;

    const h3 =document.createElement('h3');
    h3.innerHTML =` Employee Id : ${empData[emp].empid}`;

    const addBox =document.createElement('div');
    addBox.className ='addressBox';

    const h32 = document.createElement('h3');
    h32.innerHTML = 'Address:'

    addBox.appendChild(h32);

    Object.keys(empData[emp].Address).map(( add ,i)=>{
        const addComp =document.createElement('p');
        addComp.innerHTML =`<b>${add}:</b> ${Object.values(empData[emp].Address)[i]}`;

        addBox.appendChild(addComp);
    });

    const hobbies = document.createElement('p');
    const hobHeading = document.createElement('span');
    hobHeading.innerHTML =`<strong>Hobbies: </strong>`;

    hobbies.appendChild(hobHeading);

    empData[emp].Hobbies.map((hobby,index) =>{
        const hobbiesLength = empData[emp].Hobbies.length;
        const eachHobby = document.createElement('span');

        if (index +1!== hobbiesLength){
            eachHobby.innerHTML =`${hobby},`;

        }else{
            eachHobby.innerHTML=`${hobby},`;
        }
        hobbies.appendChild(eachHobby);
    });

    empbox.appendChild(h2);
    empbox.appendChild(h3);
    empbox.appendChild(addBox);
    empbox.appendChild(hobbies);
    mainbox.appendChild(empbox);

     
    
 
});

console.log(Object.keys(empData));