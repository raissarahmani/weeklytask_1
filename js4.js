// 4a. gabungkan dengan spread operator //
const arr1 = [1,2,3]
const arr2 = [4,5,6]
let newArray = [...arr1, ...arr2]
console.log(newArray)

// 4b. tambahkan dengan spread operator //
const person = {
    name: "John",
    age: 30
}
let newPerson = {
    ...person,
    gender: "male",
}

console.log(newPerson)