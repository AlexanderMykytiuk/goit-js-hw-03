// Задача 3-1
// CRUD для свойств объекта
// С - create (создать)
// R - read (читать)
// U - update (обновить)
// D - delete (удалить)
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле 'mood' со значением 'happy'
// добавляет поле 'full time' со значением true
// заменяет значение 'hobby' на 'skydiving'
// заменяет значение 'premium' на false
// в переменную message записывает содержимое объекта user:
// для переменной keys присваивает массив свойств объекта, используя метод Object.keys()
// с помощью оператора for...of
// в формате ключ:значение
// c переносом строки ('\n')


// let message = '';
// const user = {
//   age: 20,
//   hobby: 'html',
//   name: 'Mango',
//   premium: true,
// };
 
// //Write code under this line  
// const updateUser = function(user, newMood, newHobby, newPremium, newFullTime) { 
//   	user.mood = newMood;
// 	user.hobby = newHobby;
// 	user.premium = newPremium;
//    	user["full time"] = newFullTime;
// }
// updateUser(user, 'happy','skydiving', false, true);


 
// const keys = Object.keys(user);
// // Write code under this line
// for (const key of Object.keys(user)) {
// //console.log(key); 
 

// console.log(key + ' : '+ user[key]); 


//   //message = age : ${age},\n hobby : ${hobby},\n;
//   //message = finihs;
  
// }
// //console.log(user.age);
// message = user;
//  //
// console.log(message); 
// /*
// 'age : 20 
// hobby : skydiving 
// name : Mango 
// premium : false 
// mood : happy 
// "full time" : true 
// ' */

let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};
//Write code under this line 
  user.mood ='happy';
user["full time"] = true;
 user.hobby ='skydiving';
user.premium = false;
const { age, hobby, name, premium, ['full time']: time, mood } = user;
message = `age : ${age},\n hobby : ${hobby},\n name : ${name},\n premium : ${premium},\n mood : ${mood},\n full time : ${user['full time']}`;
const keys = Object.keys(user);
// Write code under this line
 for (const key of keys) {
}
console.log(message);