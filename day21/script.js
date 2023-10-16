

arr=[1,2,3]

arr.push(4)
console.log(arr);


arr.pop()
console.log(arr);


arr.shift()
console.log(arr);


arr.unshift(5)
console.log(arr);



let arr2 = [
{Name: 'Aravind', 
empId: 3567,
mailId: 'mailme@gmail.com',
 Address:
  {'City Name': 'Vijayawada',
  District: 'Krishna district', 
  pin: 526894,
  },
  Hobbies: ['Netflix', 'Tennis', 'Coding'],},

  {Name: 'Ravi',
   empId: 9867,
   mailId: 'ravimail@gmail.com', 
   Address:
   {'City  Name':  'Guntur', 
   District:  'Prakasham  district',
   Pin: 685479,},
   Hobbies: ['Reading', 'Swimming', 'Baking'],},
     
    {Name: 'Santosh',
    empId: 8876,
    mailId: 'santoshmail@gmail.com',
    Address:
    {'City Name': 'Warangal',
    District: 'Hanamkonda district',
    Pin: 996587,},
    Hobbies: ['Gym', 'Reading Novels'],},

   {Name: 'Surya',
    empId: 3469,
    mailId: 'suryamail@gmail.com', 
    Address:
     {City: 'Nazamabad',
     District: 'Nazamabad district',
     Pin: 648597,},
     Hobbies: ['Badminton', 'E-Sports','Netflix'],},
     
     {Name: 'Kiran', 
     empId: 8864,
     mailId: 'kirammail@gmail.com',
     Address: {city: 'edappadi',district: 'Salem district', pin: 666954,},
     Hobbies: ['Badminton', 'E-Sports', 'Netflix'],
    },
    
    {Name: 'Kiran', 
    empId: 8864,
    mailId: 'kirammail@gmail.com',
    Address: {city: 'edappadi',district: 'Salem district', pin: 666954,},
    Hobbies: ['Gaming', 'Cooking', 'Music'],},];

   arr2.map((ele)=>{
    console.log(ele.Name);
    let arr3=[]
    Object.keys(ele.Address).map((item)=>{
        arr3.push(ele.Address[item]);
    });
    console.log(arr3);
    ele.Hobbies.forEach((hobby)=>{
        console.log(hobby);
    })
   })


