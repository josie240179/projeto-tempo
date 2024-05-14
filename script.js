let chave = 'cebcd482eda57fa9a6714c2ba91885'


async function buscarCidade(){
    let dados = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Londres&appid={cebcd482eda57fa9a6714c2ba91885}').then(resposta => resposta.json )

    // await = espere
    // feitch = ferramenta do javaScript para acessar servidores
    // then = entao
    // json = javascript object notation - o formato que o javascript entende
    
    console.log(dados)
}

    function cliqueiNoBotao(){
        let cidade = document.querySelector('.input-cidade').value
       
        buscarCidade()
}


