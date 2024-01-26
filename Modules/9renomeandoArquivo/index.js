const fs = require ('fs')

const arqAntigo = "arquivo.txt"
const arqNovo = "novoNome.txt"

fs.rename(arqAntigo, arqNovo, function(err){
    if(err){
        console.log(err)
        return
    }
    console.log("Nome do arquivo foi alterado!")
})