let nameStudents = {
    student1: 'Vinícius',
    student2: 'Marcos',
    student3: 'João',
    student4: 'Arthur',
    student5: 'Ycaro',
}

let studentsName = ['Vinícius', 'Marcos', 'Ycaro', 'João', 'Arthur']
console.table(studentsName)
console.table(nameStudents)


// Criar um array e objects de nomes de alunos, a coleção deve ter pelo menos 5 nomes. 
// Mostre no console

// agora mostre o primeiro, do meio e ultimo estudante
let studentOnHalf = parseInt(studentsName.length / 2) 
console.log('Os alunos selecionados são ' + studentsName[0] + ', ' + studentsName[studentOnHalf] + ', ' + studentsName[4])