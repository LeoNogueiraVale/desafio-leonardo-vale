class CaixaDaLanchonete {
    calcularValorDaCompra(formaDePagamento, itens) {
        // cardápip
        const cardapio = {
            cafe: { descricao: "Café", valor: 3.00 },
            chantily: { descricao: "Chantily (extra do Café)", valor: 1.50 },
            suco: { descricao: "Suco Natural", valor: 6.20 },
            sanduiche: { descricao: "Sanduíche", valor: 6.50 },
            queijo: { descricao: "Queijo (extra do Sanduíche)", valor: 2.00 },
            salgado: { descricao: "Salgado", valor: 7.25 },
            combo1: { descricao: "1 Suco e 1 Sanduíche", valor: 9.50 },
            combo2: { descricao: "1 Café e 1 Sanduíche", valor: 7.50 },
        };

        //  Formas de pamanetos
        if (!(formaDePagamento === "debito" || formaDePagamento === "credito" || formaDePagamento === "dinheiro")) {
            return "Forma de pagamento inválida!";
        }

        //  Verificação de itens
        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        // Valor total da compra
        let valorTotal = 0;
        for (let item of itens) {
            const [codigo, quantidade] = item.split(",");
            if (!(codigo in cardapio)) {
                return "Item inválido!";
            }
            const itemDoCardapio = cardapio[codigo];
            valorTotal += itemDoCardapio.valor * parseInt(quantidade);
        }

        //itens extras
        for (let item of itens) {
            const [codigo, quantidade] = item.split(",");
            if (codigo.includes("extra") && !(codigo.replace("extra", "") in cardapio)) {
                return "Item extra não pode ser pedido sem o principal";
            }
        }

        // descontos e taxas
        if (formaDePagamento === "dinheiro") {
            valorTotal -= valorTotal * 0.05; // 5% de desconto
        } else if (formaDePagamento === "credito") {
            valorTotal += valorTotal * 0.03; // 3% de acréscimo
        }

        //  formantando e valor total compra
        return "R$ " + valorTotal.toFixed(2).replace(".", ",");

    }
}

export { CaixaDaLanchonete }; 