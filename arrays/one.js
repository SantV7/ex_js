const nameUsers = ['Vy', 'Vinícius', 'Sant']

console.log(nameUsers[2])

for(let i = 0 ; i < nameUsers.length; i++) {
    console.log(nameUsers[i])
}

//  Indices começam em 0, indice é o []

nameUsers.push('Vini')
console.log("-------------------------------------------")
console.log('Here I add a new element with push. nameUsers.push("Vini")')
console.log("-------------------------------------------")
nameUsers.map((item) => {
    console.log(item)
})


console.log("-------------------------------------------")
console.log('With pop(nameUsers, I remove the last element)')
nameUsers.pop(nameUsers)
console.log(nameUsers)