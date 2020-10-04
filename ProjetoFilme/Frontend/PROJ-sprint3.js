function buscarFilmes(value) {
    const cep = value.cep.value
    preventDefault();

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(resposta => resposta.json(console.log(resposta)))
    .then(jsonBody => {
        document.getElementById("bairro").innerHTML = jsonBody.bairro;
        console.log(jsonBody);
    })
}   