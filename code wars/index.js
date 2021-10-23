
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

// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.
// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.
// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b


// 7 kyu shorter concat [reverse longer]

// Pre-code :
// Given 2 str a,b 
// Rtn them as shorter+reverse(longer)+shorter. So shorter one is prefix and suffix and longest one in reverse 
// a,b may be empty but not null
// If a and b have same length a is the longer one 
//  Find out which has the longest length and check if they have same len 
// Thn rtn easy 


// Actual code:

// function shorter_reverse_longer(a,b){
// let rtnWord;
// if(a.length > b.length || a.length === b.length ){
//  rtnWord = `${b}${a.split('').reverse().join('')}${b}`
// } else {
//   rtnWord = `${a}${b.split('').reverse().join('')}${a}`
// }
//   return rtnWord



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
// let strArr = str.split("")
//  let counter = 1 
//  let rtnArr = []
//  const strMap = strArr.map((val, idx)=>{
//   if(val === ( strArr[idx + 1])) counter += 1 
//   else {
//     rtnArr.push([counter, `${val}`])
//     counter = 1
//   }})

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
        // console.log(`start is ${start} and this the ${i} iteration`)
        // console.log(`stop is ${stop} and this the ${i} iteration`)
        if (sortedAr[i] === stop+1) {
          stop = sortedAr[i];
         
        } else {
          
            if (start === stop) {
          result += start + ', ';
                     
            } else   {
              result += start + '-' + stop + ', ';
              
            }
            // reset the start and stop pointers
            start = sortedAr[i];
            stop = start;
            
          }
          console.log(`start is ${start} and this the ${i} iteration`)
          console.log(`stop is ${stop} and this the ${i} iteration`)
          console.log(`res is ${result} and this the ${i} iteration`)

        }


    if (start === stop) {
      result += start;            
  } else {
      result += start + '-' + stop;
  }
  
  console.log(result);

console.log(cnt)
  
  
 console.log(sortedAr)

 }
  
  
 console.log( solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,21, 19, 20]));
 // returns "-6,-3-1,3-5,7-11,14,15,17-20"
 
// // objective for sep 23 finish the level 4 kyu 95% done 






//  Lvl 5 kyu BEERIMID


// Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.
// A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
// Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:
// your referral bonus, and
// the price of a beer can
// For example:
// beeramid(1500, 2); // should === 12
// beeramid(5000, 3); // should === 16


// Returns number of complete beeramid levels
// var beeramid = function(bonus, price) {
//   let $beer = 0,
//    level = 1;

//   if(bonus <= 0) level = 0

//   while($beer < bonus){
//     $beer += ((level**2) * price )
//     console.log(`level is ${level}`)
//     console.log( `((${level ** 2}) * ${price} )  =    ${$beer}`)
//     if($beer > bonus){
//       level -= 1
//       break
//     }else if($beer === bonus){
//       break;
//     }
//     level++
//   }


 


//    return level 


// }


// console.log(beeramid(1500, 2))
// console.log(beeramid(455, 5))
// console.log(beeramid(5000, 3))
// console.log(beeramid(-1, 4))
// console.log(beeramid(-1, 4))
// console.log(beeramid(0, 4))


//  level 6 kyu inverted ranges
// Rules
// A range of numbers is represented as a tuple of two numbers, for example [0, 10] would indicate a range between 0 and 10 inclusively.
// The inverse of a range between some bounds are the ranges from the lower bound, to the lowest part of the range and the upper part of the range to the upper bound.
// For example:
// Given the range [25, 75]
// And the lower bound 0
// And the upper bound 100
// The inverse ranges would be [[0, 24], [76, 100]].
// Write a function invertedRanges which when given a list of ranges, returns the inverse of those ranges with a lower bound of 0 and an upper bound of 100.
// All ranges will be between 0 and 100, they will be given in order and will not overlap
// Examples:
// An empty list of ranges would return a list with a single range between 0 and 100:
// invertedRanges([]) == [[0, 100]];

// A list of ranges which cover numbers between 0 and 100 would return an empty list
// invertedRanges([[0, 100]]) == [];
// invertedRanges([[0, 50], [51, 100]]) == [];

// A list of ranges which cover some numbers between 0 and 100 must return the ranges that aren't covered
// invertedRanges([[0, 25], [51, 75]]) == [[26, 50], [76, 100]];
// pre-code 

// We are given a upper and lower of 100, 0  if we get an empty array we rtn [0,100] or if we get a list of numbers that covers 0 100 ie [0-50] [51-100] rtn [] so anything that over laps 
// We can do a else if again to check if the length is 2 then we can minus [ranges[0][1] + 1 , ranges[1][0] - 1]


// Act code 
// function invertedRanges(ranges) {
 
//   if(ranges.length === 0) return [[0,100]]


//   else if (ranges.length === 1){
//     if(ranges[0].reduce((a,b) => a+b >= 99)){
//       return []
//     }
//     return [[0, (ranges[0][0] - 1)] , [(ranges[0][1] + 1), 100]]
//   }
//   else if (ranges.length === 2){
//     if(ranges[0].reduce((a,b)=> b - a) + ranges[1].reduce((a,b)=> b - a) >= 99){
//       return []
//     }
//     return  [[ranges[0][1] + 1 , (ranges[1][0] - 1)] , [ ranges[1][1] + 1, 100]]
    
//   }
// }


// Level 6 kyu - Travelling on a Grid



// You have an 8x8 grid with coordinates ranging from 1 to 8. The origin (1, 1) is in the top left corner. The bottom right corner is (8, 8).
// You are given a string as an input which will contain the 2 coordinates in this format: "(x1 y1)(x2 y2)", where (x1 y1) represents point A and (x2 y2) represents point B. In the inputs provided, point A will always be up and to the left of point B. In other words, x1 < x2 and y1 < y2 will be true for every input.
// Your goal is to find out the number of different paths you can take to get from point A to point B by moving one cell at a time either down or right.
// Example
// Given an input of "(2 3)(3 5)", the number of possible paths to get from A to B is 3.


// Pre-code 

// Kinda tricky so given 2 coords (x1,y1)(a) and (x2,y2)(b) we know that a will always be to the top left 
// What we need to figure out all the total paths it takes to get from a to b one cell at a time 
// Im sure if we can figure the math to get to one point to another this will be easy
// function fac(n){ return(n<2)?1:fac(n-1)*n; }
// f=n=>(n<2)?1:f(n-1)*n
// Find out distance xDis(x1 - x2)  right and down yDis (y1 - y2)   
// Combination equation is fac(xDis + yDis /total) /(fac(xDis) * fac(yDis)) = combo
// https://math.stackexchange.com/questions/636128/calculating-the-number-of-possible-paths-through-some-squares
// https://betterexplained.com/articles/navigate-a-grid-using-combinations-and-permutations/



// My code 
 
// function fac(n){ return(n<2)?1:fac(n-1)*n; }

// function travelChessboard(s){
//  let cordinatesArr = s.split(''),
//      x1 = Number(cordinatesArr[1]),
//      y1 = Number(cordinatesArr[3]),
//      x2 = Number(cordinatesArr[6]),
//      y2 = Number(cordinatesArr[8])
//  const xDis = (x2-x1)
//  const yDis = (y2-y1)
 
 
//  const comboEq = ( fac(xDis + yDis) / ( fac(xDis) * fac(yDis) ))
 
 
//   return comboEq;
// }





//------------------------------------------
// scRIMBA js Advance Challenges 
//------------------------------------------

// 1) ARRAY REPLACE 
  
// gIVEN an ARRAY OF INTERGERS, replace  all the occurences of elmToreplace w/ subElem

/**
* Test Suite 
*/
// describe('arrayReplace()', () => {
//     it('adds a border around entire application', () => {
//         // arrange
//         const array = [1, 2, 1];
//         const elemToReplace = 1;
//         const substitutionElem = 3;
        
//         // act
//         const result = arrayReplace(array, elemToReplace, substitutionElem);

//         // log
//         console.log("result: ", result);
        
//         // assert
//         expect(result).toEqual([3, 2, 3]);
//     });
// });


// MY CODE 

// function arrayReplace(array, elemToReplace, substitutionElem) {
//   //  write code here.
//   let huh = [...array]

//        for(let i = 0; i <= huh.length; i++){
//         if(huh[i] === elemToReplace){
//           huh[i] = substitutionElem
//         }
//        }
//  return huh
// }

//  rAN into Map and for of problems, both would return all values as undef super aggy and e




// 2) CASE INSENSITIVE PALINDROME 


// /**
// * Test Suite 
// */
// describe('caseInsensitivePalindrome()', () => {
//     it('returns true for a case insensitive palindrome', () => {
//         // arrange
//         const str = 'AaBaa';
        
//         // act
//         const result = caseInsensitivePalindrome(str);

//         // log
//         console.log("result 1: ", result);
        
//         // assert
//         expect(result).toBe(true);
//     });
    
//     it('returns false when not a case insensitive palindrome', () => {
//         // arrange
//         const str = 'abac';
        
//         // act
//         const result = caseInsensitivePalindrome(str);

//         // log
//         console.log("result 2: ", result);
        
//         // assert
//         expect(result).toBe(false);
//     });    
// });

// MY CODE did it the long way 

// function caseInsensitivePalindrome(str) {
//   //  write code here.
  
//   //FIND A WAY TO REVERSE STR WITHOUT REVERSE()
//    let rev = []
//    let strSpt = str.toLowerCase().split('')
//     let copy = [...strSpt].map(v => rev.unshift(v))
   

    
//   // COMPARE REV STR TO OG STR AND CHECK IF EACH INDEX MATCHES EACH OTHER
//       for(let i = 0; i < strSpt.length; i++){
//   //RTN T/F IF DEPENDING ON CONDO
//           if(strSpt[i] === rev[i]) return true
//           return false
//       }

// }

// could have done it like this 

// function caseInsensitivePalindrome(str) {
//   const caselessStr = str.toLowerCase();
//   const reversedCaselessStr = caselessStr.split('').reverse().join(''); 
  
//   return caselessStr === reversedCaselessStr;
// }


// function caseInsensitivePalindrome(str) {
//   const caselessStr = str.toLowerCase();
//   // const reversedCaselessStr = caselessStr.split('').reverse().join(''); 
//   let reversedCaselessStr = '';
  
//   for(let i = caselessStr.length - 1; i >= 0; i--) {
//       reversedCaselessStr += caselessStr[i];
//   }
  
//   return caselessStr === reversedCaselessStr;
// }


// 3) ENCLOSED BRACKETS IN 3 WAYS 







/**
* Test Suite 
*/
// describe('encloseInBrackets()', () => {
//   it('adds () around a string', () => {
//       // arrange
//       const str = "Yo";
      
//       // act
//       const result = encloseInBrackets(str);

//       // log
//       console.log("result: ", result);
      
//       // assert
//       expect(result).toBe('(Yo)');
//   });
// });


// MY CODE 
// function encloseInBrackets(str) {
//     //  write code here.
    
//     // ADD IN A ( ) TO BEGIN AND EN
// str =  str.padStart(5,'(') 
//  str= str.padEnd(6,')') 
     
//     //RTN 
//     return str
    
// }
// function encloseInBrackets(str) {
//     return `(${str})`   
// }

// function encloseInBrackets(str) {
//      let strArray = str.split('')
//       strArray.unshift('(')
//       strArray.push(')')
      
//     return strArray.join('')   
// }


// 4 ) NUMBER FACTORIAL 



/**
* Test Suite 
*/
// describe('factorialNumber()', () => {
//   it('returns factorial of number param', () => {
//       // arrange
//       const num = 5;
      
//       // act
//       const result = factorialNumber(num);

//       // log
//       console.log("result: ", result);
      
//       // assert
//       expect(result).toBe(120);
//   });
// });



// MY CODE 

// function factorialNumber(num) {
//   // write code here
//   // CRT A VAR TOTAL TO ADD UP ALL THE MULTIPLICATIONS 
//   let total = 1
//   // TAKE NUMBER AND TIMES IT BY THE NUMER LESS THAN IT SO FAC 5 = 1*2*3*4*5
//   for(let i = 2; i <= num; i++){ total *=  i}
  
//   return total
// }



// 5 ) FIRST DIGIT FIND THE LEFTMOST DIGIT THAT OCCURS IN A GIVEN STR 



/**
* Test Suite 
*/
// describe('firstDigit()', () => {
//   it('return the first digit in a string', () => {
//       // arrange
//       const str = "var_1__Int2";
      
//       // act
//       const result = firstDigit(str);

//       // log
//       console.log("result: ", result);
      
//       // assert
//       expect(result).toBe('1');
//   });
// });




// MY CODE 
// function firstDigit(str) {
//   //  write code here.
    
//   //   CRT VAR TO HOLD NUM
//     let firstNum;

//   //SPLT STR LOOP THRU AND FIND THE FIRST NUM 
//   let strSplit = str.split('')

//   for(let i = 0; i < strSplit.length; i++){
//       if( !isNaN(strSplit[i])){
//           firstNum = strSplit[i]
//           break // THIS STOPS THE LOOP AS SOON AS A NUM IS FOUND 
//       }
//   }
    
//     return firstNum
// }


// 6 ) lARGEST NUMBER  FOR EX N=2 THE OUTPUT SHOULD BE lARGESTNUM(N) = 99














// MY CODE 

function largestNumber(num) {
  //  write code here.
  let lrgstNum = 1
  
  do {
   largestNumber++   
   console.log(lrgstNum)
  }
  while( lrgstNum.toString().length <= num)
  
  
} 

console.log(largestNumber(2))














// 6 ) MAX MULTIPLE 






// MY CODE 



















