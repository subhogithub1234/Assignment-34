/* 
3. Figure out the result of the following expressions first without using console.log().
After you decide the result confirm it by using console.log()
*/


const check = 4 > 3 && 10 >12        
const check1 = 4 > 3 && 10 > 12       
      

const check3 = 4 > 3 || 10 < 12         
const check4 = 4 > 3 || 10 > 12      
        



let check6 = !(4 > 3)                     
let check7 = !(4 < 3)                
        
let isMarried = !false  

let check8 = !(4 > 3 && 10 < 12)
let check9 = !(4 > 3 && 10 > 12)

console.log(`
${check}
${check1}
${check3}
${check4}
${check6}
${check7}
${check8}
${check9}
${isMarried }
`)

// ======================================OUTPUT=====================================
/* 
false
false
true
true
false
true
false
true
true

*/