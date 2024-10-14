function Enviar() {
    var nome = document.querySelector("#nome").value.trim();
    var email = document.querySelector("#email").value.trim();
    var telefone = document.querySelector("#phone").value.trim();
    var assunto = document.querySelector("#assunto").value;
    var mensagem = document.querySelector("#mensagem").value.trim();
    // Exibindo os dados em um alert
    if (nome.length < 2)
    {
        alert("O nome deve conter pelo menos duas letras.")
    }
    else if (email === ""){
        alert("O email não pode ficar vazio.");

    }
    else if (telefone === ""){
        alert("O telefone não pode ficar vazio.");
        
    }
    else if (assunto === ""){
        alert("Você deve selecionar um assunto.");
        
    }
    else if (mensagem === ""){
        alert("A mensagem não pode ficar em branco.");
        
    }
    else{
        switch(assunto){
            case 'adocao':
                assunto = 'Adoção';
                break;
            case 'ajuda':
                assunto = 'Ajuda';
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
            window.alert(
        `Informações preenchidas:\n Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nAssunto: ${assunto}\nMensagem: ${mensagem}\n\nEnviado com sucesso!`);
    }
}
function popup(nome, idade, porte){
    alert(`Nome: ${nome}\nIdade: ${idade}\nPorte: ${porte}`)
    

}