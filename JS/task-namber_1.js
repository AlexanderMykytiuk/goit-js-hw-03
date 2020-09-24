let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};
 
//Write code under this line  
const updateUser = function(user, newMood, newHobby, newPremium, newFullTime) { 
  	user.mood = newMood;
	user.hobby = newHobby;
	user.premium = newPremium;
   	user["full time"] = newFullTime;
}
updateUser(user, 'happy','skydiving', false, true);


 
const keys = Object.keys(user);
// Write code under this line
for (const key of Object.keys(user)) {
 
    console.log(key + ' : '+ user[key]);
  //message = `${key} : ${user[key]}`;
  //message = finihs;
  
}
//console.log(user.age);
//message = user;
 //
console.log(message); 
/*
'age : 20 
hobby : skydiving 
name : Mango 
premium : false 
mood : happy 
"full time" : true 
' */