function Enviar() {
    if (document.querySelector('#nome').value.length < 2){
        alert('Nome (deve conter no mínimo duas letras)');
    }
    else{
        var nome = document.querySelector("#nome").value
        var email = document.querySelector("#email").value
        var telefone = document.querySelector("#telefone").value
        var assunto = document.querySelector("#assunto").value;
        var mensagem = document.querySelector("#mensagem").value
        // Exibindo os dados em um alert
        switch(assunto){
            case 'adocao':
                assunto = 'Adoção';
                break;
            case 'ajuda':
                assunto = 'Como Ajudar';
                break;
            case 'prox':
                assunto = 'Próximos Eventos';
                break;
            case 'suges':
                assunto = 'Sugestões';
                break;
            case 'outros':
                assunto = 'Outros';
                break;
            default:
                assunto = 'INVALIDO';
                break;
        }
        alert(
        `Informações preenchidas:\n Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nAssunto: ${assunto}\nMensagem: ${mensagem}\n\nEnviado com sucesso!`);
        }
        
    }


function popup(nome, idade, porte){
    alert(`Nome: ${nome}\nIdade: ${idade}\nPorte: ${porte}`)
    

}
function mudar(){
    escolha = document.querySelector('#menu').value
    switch(escolha){
        case 'Cuidados':
            window.location.href =  'Cuidados.html';
            break;
        case 'Alimentacao':
            window.location.href = 'alimentacao.html';
            break;
        case 'Adaptacao':
            window.location.href = 'adaptacao.html';
            break;
        default:
            titulo.innerText = 'Adotei e Agora';
    }
}