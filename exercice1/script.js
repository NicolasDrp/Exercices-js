
let finalResult;

let evenOddResult;

// Add your code here

let var1 = 10;
let var2 = 14;
let var3 = 2;
let var4 = 4;

let unPlusDeux = var1 + var2; 
let quatreMoinsTrois = var4 - var3;

finalResult = unPlusDeux*quatreMoinsTrois

evenOddResult = finalResult%2;

alert(evenOddResult)


// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
const finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`;
para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`;
const para2 = document.createElement('p');
const evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.';
para2.textContent = evenOddResultCheck;

section.appendChild(para1);
section.appendChild(para2);
