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

function flyBy(lamps, drone){
 const lampArr = lamps.split('')
 
for(let i in lampArr){
  if(i < drone.length) lampArr[i] ='o'
}
 
 return lampArr.join('')
}
 
