/* 
1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign
value to it and use the typeof operator to check different data types. 
*/

let firstName="Subham"
let lastName="Chakraborty"

let country="India"
let city="Asansol"

let age=23

let isMarried=false

const now=new Date();


console.log(`
First Name:${firstName}
Last Name ${lastName}
Country:${country}
City:${city}
Age:${age}
Married:${isMarried}
Year:${now.getFullYear()}
-----------Type of-----------------
First Name:${typeof firstName}
Last Name ${typeof lastName}
Country:${typeof country}
City:${typeof city}
Age:${typeof age}
Married:${typeof isMarried}
Year:${typeof now.getFullYear()}
`);

// ==================================OUTPUT======================================

/* 
First Name:Subham
Last Name Chakraborty
Country:India
City:Asansol
Age:23
Married:No
Year:2022
-----------Type of-----------------
First Name:string
Last Name string
Country:string
City:string
Age:number
Married:bollen
Year:number
 */