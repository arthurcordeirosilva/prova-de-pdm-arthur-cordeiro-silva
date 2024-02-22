let aluno1 = {
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
function validarCadastro(aluno) { 

if (aluno.nome.lenght >= 10) {

   return console.log("nome bonito")
} else{ 
    return console.log("nome pequeno demais")
}
if (aluno.idade > 14) {
   return console.log("idade certa")
} else {
 return console.log("não tem a idade minima")
}
if (aluno.cursando.lenght >= 3) {
    return console.log("cursos ok")
} else {
    return console.log("cursa poucas materias")
}
if (aluno.presença >= 2) {
    return console.log("vai bastante a aula")
} else{
    return console.log("falta muito")
}
if (aluno.ra === 7){

    return console.log("ra correto")
} else {
    return console.log("ra errado")
}

}
validarCadastro(aluno1)
