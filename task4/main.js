const array = [ [46, 22], [17, 94] ]; 
 
let summ = 0; 
 
for (let i = 0; i < array.length; i++) { 
    for (let j = 0; j < array[i].length; j++){ 
        console.log(array[i][j]); 
    } 
 } 
 
 for (let i = 0; i < array.length; i++) { 
     console.log(`кол-во элементов в ${i+1} массиве = ${array[i].length}`); 
     for (let j = 0; j < array[i].length; j++) { 
         summ += array[i][j]; 
    } 
 } 
 console.log(`Сумма элементов массива = ${summ}.`); 
 
 
 const users = [ 
     { name: 'Vlada', age: 18, city: 'London' }, 
     { name: 'Alekc', age: 10, city: 'Volgograd' }, 
    { name: 'Ksenia', age: 40, city: 'Vladikavkaz' } 
 ]; 
 
 for (let item of users) { 
     let age = item.age 
     console.log(age); 
 } 
 
 for (let item of users) { 
     item.age += 1 
     console.log(age); 
 } 
 
 
const companies = { 
    companyA: { 
        employees: ['Viktor', 'Nastya'] 
    }, 
    companyB: { 
        employees: ['Ellen', 'Set'] 
    }, 
    companyC: { 
        employees: ['Nil', 'Andry'] 
    } 
}; 
 
for (let company in companies) { 
    console.log(`Сотрудники компании ${company}:`); 
    for (let i = 0; i < companies[company].employees.length; i++) { 
        console.log(companies[company].employees[i]); 
    }  
}
