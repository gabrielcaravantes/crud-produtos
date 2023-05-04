
let listaProdutos = [];
let idAutoIncrement = 1;

function listar() {
    return listaProdutos;
}

function inserir(produto) {
    if(produto && produto.nome && produto.preco){
        produto.id = idAutoIncrement++;
        listaProdutos.push(produto);
    }
    else {
        throw {
            numero: 100,
            msg: "Erro: Os dados de produto estao invalidos"
        };
    }
}

function buscarPorId(id) {
    for(let produto of listaProdutos){ 
        if(produto.id === id){
            return produto;
        }
    }
}

function atualizar(id, produtoAlterar) {
    for(let indice in listaProdutos){
        if(listaProdutos[indice].id === id) {
            produtoAlterar.id = id;
            listaProdutos[indice] = produtoAlterar;
        }
    }    
}

function deletar(id) {
    for(let indice in listaProdutos){
        if(listaProdutos[indice].id === id) {
            listaProdutos.splice(indice,1);
        }
    }
}

module.exports = { 
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar
}