//переменные
var message;
message = "сообщение";
var myNumber = 10.28392;
var myString = "ДОРОУ!";
var myBoolean = true;
var myNull = null,
    myUndefined = undefined;

//числа
// console.log(50 + myNumber, 50 - myNumber, 50 * myNumber, 50 / myNumber);
// myNumber += 0.5;
// console.log(myNumber);
// myNumber --;
// console.log(myNumber);
// console.log(Math.round(myNumber));
// console.log(Math.floor(myNumber));
//
// var newNumber  = 2.437;
// newNumber = newNumber.toFixed(1); //мат округление
// console.log(newNumber);

//строки
// console.log("CHEBUREK " + myString);
// console.log(myString.toLowerCase());

//массивы
 var names = ["LOL", 666, "KEK", "CHEBUREK"];
// console.log(names[0].toLowerCase());
// names.push("SOSKA NEREALKA");
// console.log(names[2]);

//условия
// if ("5" === 5) {
//     console.log("YES")
// }
//
// if ("HUI" != "SOBACHII" || myNumber > 10) {
//     console.log("YES2")
// } ;
//
// if (myNumber < 20){
//     console.log("меньше 20")
// } else {
//     console.log("больше 20")
// }

//циклы
// for (var i = 0; i < 5; i++) {
//     if (i == 3) {
//         continue;
//     }
//     console.log(i)
// };
//
// for (var j = 0; j < names.length; j++) {
//     console.log(names[j]);
// };
//
// var i = 0;
// while (i < 5) {
//   console.log(i)
//   i++
// };

//функции
// function sum(i, j) {
//   return (i + j);
// };
// console.log(sum(6, 4));

//объекты
// var myObject = {
//   name: "кекович",
//   surname: "суковна",
//   age: 23,
//   getFullName: function () {
//     return this.name + " " + this.surname;
//   }
// };
// myObject.name = "лолкович";
// console.log(myObject.name);
//
// console.log(myObject.getFullName());

// ONCLICK ONCHANGE
function myFunc() {
 var chbox;
 chbox = document.getElementById("one");
 if (chbox.checked) {
  alert("choose");
 } else {
  alert("not choose");
 }
}

function myFunc2() {
 var chbox;
 chbox = document.getElementById("two");
 if (chbox.checked) {
  alert("выбран");
 } else {
  alert("не выбран");
 }
}

// RADIOBUTTON
function myFunc3() {
 var radi=document.getElementsByName("r1");
 for (var i=0; i < radi.length; i++) {
  //alert(i);
  if (radi[i].checked) {
   alert("выбран " + i + " элемент")
  }
 }
}

// SELECT
function myFunc4() {
 var sel=document.getElementById("mySelect").selectedIndex;
 var opts=document.getElementById('mySelect').options;
 alert('выбрана опция ' + opts[sel].text);
}

function myFunc5() {
 var rng=document.getElementById('rng1');
 var p=document.getElementById('paragraph');
 p.innerHTML=rng.value;

}





