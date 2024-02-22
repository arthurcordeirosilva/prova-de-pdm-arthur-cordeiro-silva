const aluno1 = {
    nome: "Jorge Miguel",
    idade: 15,
    cursando: ["PDM, BD, TIA"],
    presença: ["22,2,24", "30,01,24"],
    ra: [2638453],
}
const aluno2 = {
    nome: "Paulo",
    idade: 13,
    cursando: ["PDM"],
    presença: ["2,9,23"],
    ra: [6236],
}
//esta função valida o cadastro dos alunos
function validarCadastro(aluno1) { 

if (aluno1.nome >= 10) {

   return console.log("nome bonito")
} else{ 
    return console.log("nome pequeno demais")
}
if (aluno1.idade > 14) {
   return console.log("idade certa")
} else {
 return console.log("não tem a idade minima")
}
if (aluno1.cursando >= 3) {
    return console.log("cursos ok")
} else {
    return console.log("cursa poucas materias")
}
if (aluno1.presença >= 2) {
    return console.log("vai bastante a aula")
} else{
    return console.log("falta muito")
}
if (aluno1.ra = 7){

    return console.log("ra correto")
} else {
    return console.log("ra errado")
}

}
validarCadastro(aluno1)

function validarCadastro(aluno2) { 

    if (aluno2.nome >= 10) {
    
       return console.log("nome bonito")
    } else{ 
        return console.log("nome pequeno demais")
    }
    if (aluno2.idade > 14) {
       return console.log("idade certa")
    } else {
     return console.log("não tem a idade minima")
    }
    if (aluno2.cursando >= 3) {
        return console.log("cursos ok")
    } else {
        return console.log("cursa poucas materias")
    }
    if (aluno2.presença >= 2) {
        return console.log("vai bastante a aula")
    } else{
        return console.log("falta muito")
    }
    if (aluno2.ra = 7){
    
        return console.log("ra correto")
    } else {
        return console.log("ra errado")
    }
    
    }
    validarCadastro(aluno2)
