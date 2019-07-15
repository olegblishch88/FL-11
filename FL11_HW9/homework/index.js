/* TASK 0 */
function getNumbers(str) {
    let arr = str.split('');
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            result.push(parseInt(arr[i]));
        }
    }
    return result;
}
getNumbers('n1um3ber95');

/* TASK 1 */
function findTypes() {
    const object = {};
    let dataType;
    for( let i = 0 ; i < arguments.length ; i++ ){
        dataType = typeof arguments[i];
        if(dataType in object){
            object[dataType] += 1;
        }else{
            object[dataType] = 1;
        }
    }
    return object;
}
findTypes(123,'asd', null);

/* TASK 2 */ 
function executeforEach(arr, callback){
    for(let i = 0; i <arr.length; i++){
        callback(arr[i]);
    }
}
executeforEach([1,2,3], function(i){
    console.log(i);
})

/* TASK 3 */
function mapArray(arr, callBack) {
	let transformedArr = [];
	executeforEach(arr, function(num) {
		transformedArr.push(callBack(num))
	})
	return transformedArr;
}
mapArray([2, 5, 8], function(el) { 
	return el + 3 
})

/* TASK 4 */
function filterArray(arr, callBack) {
	let filteredArr = [];
	executeforEach(arr, function(num) {
        if (callBack(num)) {
            filteredArr.push(num);
        }
    })
    return filteredArr;
}

filterArray([2, 5, 8], function(el) { 
	return el > 3 
})

/* TASK 5 */

function showFormattedDate(date) {
    let monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let day = date.getDate();
    let month = monthArr[date.getMonth()];
    let year = date.getFullYear();
    
    return `Date: ${day} of ${month}, ${year}`;
}
showFormattedDate('2019-01-27T01:10:00');


let data = [
    {
      "_id": "5b5e3168c6bf40f2c1235cd6",
      "index": 0,
      " birthday ": '2016-03-18T00:00:00',
      "eyeColor": "green",
      "name": "Stein",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e3168e328c0d72e4f27d8",
      "index": 1,
      " birthday ": '1991-02-11T00:00:00',
      "eyeColor": "blue",
      "name": "Cortez",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5b5e3168cc79132b631c666a",
      "index": 2,
      " birthday ": '1984-04-17T00:00:00',
      "eyeColor": "blue",
      "name": "Suzette",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e31682093adcc6cd0dde5",
      "index": 3,
      " birthday ": '1994-04-17T00:00:00',
      "eyeColor": "green",
      "name": "George",
      "favoriteFruit": "banana"
    }
  ]

function getAmountOfAdultPeople(arr){
	let amountOfAdult = filterArray(arr, function(el) {
		return el.age > 18;
	})
	return amountOfAdult.length;
}

console.log(getAmountOfAdultPeople(data)); 




function keys(obj) {
	let arrOfKeys = [];
	for (let key of Object.keys(obj)) {
		if(obj.hasOwnProperty(key)) {
			arrOfKeys.push(key);
		}
	}
	return arrOfKeys;
}

keys({keyOne: 1, keyTwo: 2, keyThree: 3}); 

function values(obj) {
	let arrOfValues = [];
	for (let value of Object.values(obj)) {
	if(value) {
			arrOfValues.push(value);
		}
	}
	return arrOfValues;
}
values({keyOne: 1, keyTwo: 2, keyThree: 3}); 