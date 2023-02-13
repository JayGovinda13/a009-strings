const nomeDoUsuario = prompt("olá, qual seu nome?")
const comida1 = prompt("qual sua comida favorita?")
const comida2 = prompt("me diga mais uma")
const comida3 = prompt("me fala só mais uma")

const listaDeComida = (nome, com1, com2, com3) => {
    return console.log(`Essa é a lista de comida favoridas de ${nome}. \n - ${com1} \n - ${com2} \n - ${com3}`)
}

listaDeComida (nomeDoUsuario, comida1, comida2, comida3)