/* 
2. Boolean value is either true or false.
a. Write three JavaScript statements which provide truthy value.
b. Write three JavaScript statements which provide falsy value.
*/

console.log(`
${1=='1'}
${1==[1]}
${'1'==[1]}`)

/* OUTPUT:-
true
true
true
 */

console.log(`
${1==='1'}
${1===[1]}
${'1'===[1]}`)

/* OUTPUT:-
false
false
false
 */