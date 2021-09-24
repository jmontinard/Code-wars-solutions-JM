
// Lvl 7 kyu drone and lamps 
// The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.
// In this kata we will recreate that stunt... sort of.
// You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.
// The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.
// Return the resulting lamps string. See example tests for more clarity.



//test

// describe("Example tests",() =>{
// Test.assertEquals(flyBy('xxxxxx', '====T'), 'ooooox');
// Test.assertEquals(flyBy('xxxxxxxxx', '==T'), 'oooxxxxxx'); 
// Test.assertEquals(flyBy('xxxxxxxxxxxxxxx', '=========T'), 'ooooooooooxxxxx'); 
// })


// Pre code
// Based off the str of lamps we can use the len of drone str to splice in a o where the x would be 
// drone.len  and lamp.split to turn into array
// We can loop thru the lamp arr and take out the number of x’s

// My code 

// function flyBy(lamps, drone){
//  const lampArr = lamps.split('')
 
// for(let i in lampArr){
//   if(i < drone.length) lampArr[i] ='o'
// }
 
//  return lampArr.join('')
// }



// 7KYU Even or Odd - Which is Greater?
// Rules 
// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.
// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"
// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"
// If the total of both even and odd numbers are identical return: "Even and Odd are the same"

// Pre code 
// Get a str of numbers
// Split and map it too numbers
// Use modulus to ?


// My code 

// function evenOrOdd(str) {
// let evn = [],
//    odd = [],
  
//    strArr = str.split('').map(n=> Number(n)),
//    text;
//     strArr.map((n)=>{
//      if(n % 2 === 0) evn.push(n)
//      else{odd.push(n)}
//    })
 
//    const reducer = (accum, cValue) => accum+ cValue;
//    const evnSum = evn.reduce(reducer)
//    const oddSum = odd.reduce(reducer)
  
//    if(evnSum > oddSum) text = 'Even is greater than Odd'
//     else if(oddSum > evnSum){text = 'Odd is greater than Even'}
//    else{text="Even and Odd are the same"}
 
//    return text
 
// }
 
// console.log(evenOrOdd('123456789'))
 

// Lvl 7 kyu drone and lamps 
// The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.
// In this kata we will recreate that stunt... sort of.
// You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.
// The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.
// Return the resulting lamps string. See example tests for more clarity.



//test

// describe("Example tests",() =>{
// Test.assertEquals(flyBy('xxxxxx', '====T'), 'ooooox');
// Test.assertEquals(flyBy('xxxxxxxxx', '==T'), 'oooxxxxxx'); 
// Test.assertEquals(flyBy('xxxxxxxxxxxxxxx', '=========T'), 'ooooooooooxxxxx'); 
// })


// Pre code
// Based off the str of lamps we can use the len of drone str to splice in a o where the x would be 
// drone.len  and lamp.split to turn into array
// We can loop thru the lamp arr and take out the number of x’s

// My code 

// function flyBy(lamps, drone){
//  const lampArr = lamps.split('')
 
// for(let i in lampArr){
//   if(i < drone.length) lampArr[i] ='o'
// }
 
//  return lampArr.join('')
// }
 



 
// Level 6 KYU BASIC COMPRESSION 
 
 
// var compress = function (str) {
// let strArr = str.split('')
//  let counter = 1 
//  let rtnArr = []
//  const strMap = strArr.map((val, idx)=>{
//   if(val === ( strArr[idx + 1])) counter += 1 
//   else {
//     rtnArr.push([counter, `${val}`])
//     counter = 1
//   }})
// //  console.log(rtnArr)
//    return rtnArr
//  }
 
 
// var decompress = function (c) {

//  let cMap = c.map((v,i)=>{
//   return c[i][1].repeat(c[i][0])
// })

// return cMap.join('')

// }
 
 
// console.log(compress('aaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaa'))
// compress('aaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac')
 
// console.log(decompress(compress('aaabcd')))


function solution(list){

  const sortedAr = list.sort((a,b)=> a-b)



  let rtnArr = [],
     arLen = sortedAr.length,
     start = sortedAr[0],
     stop = start,
      result ='',
      cnt = 0

      for (let i = 1; i < arLen; i++) {   	
      
        if (sortedAr[i] === stop+1) {
          stop = sortedAr[i];
        } else {
          
            if (start === stop) {
          result += start + ', ';            
            } else {
              result += start + '-' + stop + ', ';
            }
            // reset the start and stop pointers
            start = sortedAr[i];
            stop = start;
        }
    }


    if (start === stop) {
      result += start;            
  } else {
      result += start + '-' + stop;
  }
  
  console.log(result);


  
  
 console.log(sortedAr)

 }
  
  
 console.log( solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,21, 19, 20]));
 // returns "-6,-3-1,3-5,7-11,14,15,17-20"
 