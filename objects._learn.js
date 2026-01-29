// Learning whats is and how to use Objects in JavaScript

let myInfo = {
    name: 'Vinícius',      //Propriedade, do tipo String
    age: 18,      //Propriedade, do tipo Number
    hobby: 'Games and technology',      //Propriedade, do tipo String
    workStatus: false    //Propriedade, do tipo Boolean
}


let technologySkills = {
    html: true ,       //Propriedade, do tipo Boolean
    css: true,       //Propriedade, do tipo Boolean
    js: 'Active',     //Propriedade, do tipo String
    react: 'Active',   //Propriedade, do tipo String
}

let statusMsgWork = myInfo.workStatus 
                    ? 'Trabalhando' 
                    : 'Pode ser recrutado'

console.log(`Ola ${myInfo.name}!! Vi que você gosta bastante de ${myInfo.hobby}.
Já que você esta com o status de : "${statusMsgWork}", decidimos te dar um chance para o estágio no Nubank. Uma oportunidade e tanto"`)



let myObject = {
    name: 'Vy',
    age: 18,
    typeSex: 'Male'
}



console.log(`Info do usuário ${myObject.name}.
Ele tem ${myObject.age}, sexo ${myObject.typeSex}.
Atualmente ele esta trabalhando com as tecnologias ${technologySkills.js} e ${technologySkills.react}`)

