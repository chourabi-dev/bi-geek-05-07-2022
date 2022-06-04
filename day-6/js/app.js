console.log("JS IS READY");

/**  type des variables
 * console.log(typeof "chourabi taher");
console.log(typeof 2012);
console.log(typeof 10.5);
console.log(typeof   true  );
console.log(typeof   false  ); 
console.log(typeof   [ 1,2,3 ]  );
console.log(typeof   {  }  );   // json 
//var user = { firstname:"taher", lastname:"chourabi"  }
console.log(typeof   new Date()  );

console.log(typeof   function closeDoor(){}    ); 
 */

/**
 * 
var appName="Welcome to JS"; 

let userName="chourabi taher";

const pi = 3.14;
 */


/**
 * var x = 15;
var y = 16; 
var s = (x + y);

//var resltStr='La somme de '+x+' et '+y+' = '+s;

var resltStr=`La somme de ${x} et ${y}  = ${s}`;


console.log(resltStr);
 */


var str='welcome to js course, js is easy to learn.';

// length
console.log( "length ="+str.length );
// STRING
/**
 * str
'welcome to js course, js is easy to learn.'
str.split(" ")
(9) ['welcome', 'to', 'js', 'course,', 'js', 'is', 'easy', 'to', 'learn.']
str.indexOf("s")
12
str.indexOf("taher")
-1
str.substr(0,10)
'welcome to'


str
'   welcome to js course, js is easy to learn.   '
str.trim()
'welcome to js course, js is easy to learn.'
 
str.toLowerCase()
'welcome to js course, js is easy to learn.'
str.toUpperCase()
'WELCOME TO JS COURSE, JS IS EASY TO LEARN.'
str.replace('js','javascript')
'welcome to javascript course, js is easy to learn.'
str.replaceAll('js','javascript')
'welcome to javascript course, javascript is easy to learn.'

'welcome to js course, js is easy to learn.'
str.split(' ')
(9) ['welcome', 'to', 'js', 'course,', 'js', 'is', 'easy', 'to', 'learn.']
str.split(' ').length
9
*/



// number
var year = 2012;

/**
 * length =42
year.toString()
'2012'
true
true
true.toString()
'true'
isNaN()
true
isNaN("test")
true
isNaN(18)
false
18 * "test"
NaN
8
8
typeof NaN
'number'
 */



// array [1,2,3]
var arr = [ 1,2,3,4,5,6,7,8,9 ];
/**
 * arr
(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 15]
arr.pop()
15
arr
(9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.indexOf(5)
4
arr.splice(2,1)
[3]0: 3length: 1[[Prototype]]: Array(0)
arr
(8) [1, 2, 4, 5, 6, 7, 8, 9]
arr.splice(2,2)
(2) [4, 5]
arr
(6) [1, 2, 6, 7, 8, 9]
arr.shift()
1
arr
(5) [2, 6, 7, 8, 9]0: 21: 62: 73: 84: 9length: 5[[Prototype]]: Array(0)
arr.slice(2,4)
(2) [7, 8]
arr
(5) [2, 6, 7, 8, 9]
arr.concat(5,6,9)
(8) [2, 6, 7, 8, 9, 5, 6, 9]
arr.concat( [18,19],[20,21] )
(9) [2, 6, 7, 8, 9, 18, 19, 20, 21]
 */


// for each element "e"
/**
 * arr.map( (e)=>{ 
    console.log(e);
})

arr.forEach((e)=>{
    console.log(e);
})
 */



// search in array

var notes = [18,16,2,5,18,19,20,7,6,3,4];
console.log(notes);


var goodNotes = [];
var BadNotes = [];

goodNotes = notes.filter( (e)=>  e >=10  );
console.log(goodNotes);

/********************************************** */

var transactions = [
    { amount:500 , date:new Date(2022,4,2) },
    { amount:600 , date:new Date(2022,4,5) },
    { amount:700 , date:new Date(2022,4,10) },
    { amount:700 , date:new Date(2022,4,9) },
    { amount:700 , date:new Date(2022,4,12) },
    { amount:700 , date:new Date(2022,4,11) } 
];


var transactionsSorted = transactions.sort( (a , b) => (a.date.getTime()) - ( b.date.getTime() ) );


console.log(transactionsSorted);

var res = transactions.filter( (t)=>  t.date.getTime() < new Date(2022,4,5).getTime()  );

console.log(res);



/// sort 

var amounts = [ 180, 100,190,50,60,30,70,20 ];

amounts.sort((a, b) => a - b);

console.log(amounts);

console.log(amounts.reverse());






// boolean

/**
 * 1 == 1
true
1 == 2
false
1 == "1"
true
1 === "1"
false
11 == "11abc"
false
2 * 2
4
2 * "2abc"
NaN
2 / 2
1
2 / "2abc"
NaN
"abc" * 2
NaN
2* "2"
4
"2" * 2
4
parseInt("5")
5
"22"  * "10"
220
"5" + "5"
'55'
"5" + 9
'59'
 */





