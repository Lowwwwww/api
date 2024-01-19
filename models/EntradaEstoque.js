class EntradaEstoque {
    constructor(id_entrada, id_produto, quantidade, data_entrada) {
        this.id_entrada = id_entrada;
        this.id_produto = id_produto;
        this.quantidade = quantidade;
        this.data_entrada = data_entrada;
    }
}

const entrada1 = new EntradaEstoque(1, 101, 50, '2024-01-19');
console.log(entrada1);
