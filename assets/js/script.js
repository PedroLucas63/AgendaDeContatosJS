//Função de menu que exibe as informações e recebe os dados:
function menu(){
    //Inicio da repetição do menu:
    do{
        //Criação da constante do menu:
        const MENU = `${'='.repeat(9)} AGENDA TELEFONICA ${'='.repeat(9)}
1 ${'.'.repeat(65)} Inserir
2 ${'.'.repeat(65)} Remover
3 ${'.'.repeat(65)} Buscar
4 ${'.'.repeat(65)} Listar
5 ${'.'.repeat(65)} Encerrar`;

        //Exibição do menu e recebimento de dados:
        var opcao = prompt(MENU);

        //Verificação da opção selecionada e envio para a função determinada:
        switch(opcao){
            case "1":
                inserirContato();
                break;
            
            case "2":
                removerContato();
                break;
            
            case "3":
                buscarContato();
                break;

            case "4":
                listarContatos();
                break;

            case "5":
                console.log("Encerrar!");
                break;
            
            default:
                alert("Nenhuma opção selecionada, tente novamente!");
        }

    }while(opcao != 5);
}

//Função de adicionar um contato à agenda:
function inserirContato(){
    //Pedido dos dados:
    var nome = prompt("Digite o nome do contato:");
    var numero = prompt("Digite o número telefonico do contato:");

    //Inserção de dados no Array:
    contatos.push([nome, numero]);

    //Chamada da função de salvar:
    salvarCookies();
}

//Função de remover um contato pelo número de telefone:
function removerContato(){
    //Pedido do número:
    var numero = prompt("Digite o número telefonico do contato à ser removido:");

    //Percorrimento do Array:
    contatos.forEach(function(item, index, objeto){
        //Verifica igualdade:
        if(numero == item[1]){
            objeto.splice(index, 1);
        }
    });

    //Salva os dados em cookies:
    salvarCookies();
}

//Função de buscar um contato:
function buscarContato(){
    //Recebe o nome a ser buscado:
    var nome_buscado = prompt("Digite o nome do contato a ser buscado:");

    //Cria a variavel que deve guardar os dados dos contatos encontrados:
    var informações = "";

    //Percorre o array em busca do nome:
    contatos.forEach(contato => {
        if(nome_buscado == contato[0]){
            informações += `Nome: ${contato[0]}\nNúmero: ${contato[1]}\n\n`;
        }
    });

    //Exibição dos dados:
    alert(informações);
}

//Função de listar os contatos:
function listarContatos(){
    //Criação de uma variavel que deve guardar os dados de cada contato:
    var informações = "";

    //Percorrimento do vetor e gravação dos dados:informações += `Pessoa ${i+1}
    contatos.forEach(contato => {
        informações += `Nome: ${contato[0]}\nNúmero: ${contato[1]}\n\n`;
    });

    //Exibição dos dados:
    alert(informações);
}

//Função que salva o array de contatos em cookies:
function salvarCookies(){
    localStorage.setItem("contatos", JSON.stringify(contatos));
}

//Recebimentos dos Cookies:
var contatos = JSON.parse(localStorage.getItem("contatos") || "[]");

//Chamada da função de menu:
menu();