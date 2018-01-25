// Create an array with five decimal numbers, and use it for the following:
//
// Create a function that finds the highest number.
//
// highestNumber([1,4,2]) should return 4
// highestNumber([-1,-2,-4]) should return -1
// Hint: create a variable called max, and assign
//it a reasonable start value; then use forEach: if an element is higher than max, change max.



// var array = [-200, -4.6, 2.7, 9.3, 3.2, 10, 100, -40]
//
//
// function highestNumber (){
//
//   //array.sort();
//   var max = array[0]
//
//   array.forEach(function(element) {
//     if (element > max) {
//       max = element;
//     }
//   })
// console.log(max)
// }


// var array = [200, -4.6, 2.7, 9.3, 3.2, 10, -100, -40]
//
//
// function lowestNumber (){
//
//   //array.sort();
//   var min = array[0]
//
//   array.forEach(function(element) {
//     if (element < min) {
//       min = element;
//     }
//   })
// console.log(min)
// }
//
// lowestNumber()


// var array = [200, -4.6, 2.7, 9.3, 3.2, 10, -100, -40]
//
// function smallestNumber () {
//
//   var closest = Math.abs(array[0])
//
//   array.forEach(function(i) {
//     if (Math.abs(array[i]) < closest) {
//       closest = Math.abs(array[i])
//       var smallest = i;
//       console.log(smallest);
//     }
// })
// console.log(smallest);
// }
//
//
// smallestNumber();




// var array = [100,2,3,10,100]
// var sumTotal = 0;
//
//
// function sum () {
//
//   array.forEach(function(element) {
//     sumTotal = sumTotal + element
//
//     })
// console.log(sumTotal);
// }
//
// sum();


// var array = [100,2,3,10,100]
// var sumTotal = 0;
//
//
// function sum () {
//
//   array.forEach(function(element) {
//     sumTotal = sumTotal + element
//
//     })
//  var mean = sumTotal / array.length
//  console.log(mean)
// }
//
// sum();






// var array = [200, 4, 6, 20, 74]
//
//
// function highestNumber (){
//
//   //array.sort();
//   var max = array[0]
//
//   array.forEach(function(element) {
//     if (element > max) {
//       max = element;
//     }
//   })
// console.log(max)
// console.log(array.lastIndexOf(max))
// }
//
// highestNumber()

// var array = [70, 2, 6, 70]
//
//
// function indexHighestNumber () {
//
//   var max = array[0]
//
//   array.forEach(function(element) {
//   if (element > max) {
//   max = element;
//
//
// }
// })
// console.log(max)
// console.log(array.lastIndexOf(max))
//
// }
// indexHighestNumber();
//
//


// var array = [2,4]
// var evenArray = []
//
// function getEven() {
//
// array.forEach(function(element) {
//
//   if (element % 2 !== 0) {
//     evenArray.push(element)
//
//   }
//   else {
//     return
//   }
//
// })
//   console.log(evenArray)
// }
//
//
//


function mapArray(array,fun) {
    extra();

function extra(x) {
    return x*2
  }

  var returnArray = [];
  array.forEach(function(element) {
    var result = extra(element)
    returnArray.push(result)
    })

    console.log(returnArray)

}
