
// Final result should be 10.42
// Add/update your code here

let result = (7 + 13) / (9 + 7);
let result2 = 100 / (2 * 6);

let finalNumber;

result = result*result2;

finalResult = Math.round(result * 100) / 100

if (typeof(finalResult) === 'string'){
    finalNumber = parseFloat(finalResult);
}
finalNumber = finalResult;

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = `Your finalResult is ${ finalResult }`;
const para2 = document.createElement('p');
const finalNumberCheck = isNaN(finalNumber) === false ? 'finalNumber is a number type. Well done!' : `Ooops! finalNumber is not a number.`;
para2.textContent = finalNumberCheck;

section.appendChild(para1);
section.appendChild(para2);