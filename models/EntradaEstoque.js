// class EntradaEstoque {
//     constructor(id_entrada, id_produto, quantidade, data_entrada) {
//      //   this.id_entrada = id_entrada;
//         this.id_produto = id_produto;
//         this.quantidade = quantidade;
//         this.data_entrada = data_entrada;
//     }
// }


const entradaData = {
    id_produto: 'id_do_produto',
    quantidade: 10,
    data_entrada: new Date()
};

const entradaEstoqueRef = db.collection('entradasEstoque').doc('id_da_entrada');
const entradaDoc = await entradaEstoqueRef.get();

if (entradaDoc.exists) {
    const produtoRef = db.collection('produtos').doc(entradaDoc.data().id_produto);
    const produtoDoc = await produtoRef.get();

}