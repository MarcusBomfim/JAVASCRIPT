function extrairPrecos(ordenar) {
    const produtos = [];
    const elementosProdutos = document.querySelectorAll(".puis-card-container");
  

    for (const elementoProduto of elementosProdutos) {
      const tituloProduto =
        elementoProduto.querySelector(".a-size-base-plus")?.innerText || ''
        "";
      const precoProduto =
        Number(elementoProduto.querySelector(".a-price-whole")?.innerText.replace(/\D/g, '')) || ''
        "";
  
      produtos.push({ tituloProduto, precoProduto });
    }
      if (ordenar === true) produtos.sort((a,b) => a.precoProduto - b.precoProduto)
    return produtos;
  }
  const teste = extrairPrecos(true)
  console.log(teste)
