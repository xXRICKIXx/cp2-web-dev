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
function mudar() {
    titulo = document.querySelector('#titulo');
    texto = document.querySelector('.conteudo');
    escolha = document.querySelector('#menu').value;

    switch (escolha) {
        case 'inicio':
            titulo.innerText = 'Adotei e Agora?';
            texto.innerHTML = `
                <p>
                    Parabéns pela adoção do seu novo pet! Para começar, prepare sua casa com itens essenciais, como uma caminha confortável, um comedouro adequado e um espaço seguro onde seu animal possa se sentir à vontade. 
                    É importante agendar uma visita ao veterinário logo após a adoção para garantir que seu novo amigo receba as vacinas necessárias, vermifugação e qualquer cuidado inicial que ele possa precisar. 
                    Tenha paciência durante o processo de adaptação e ofereça um ambiente tranquilo, respeitando o tempo do seu pet para se acostumar com a nova rotina. 
                    Uma alimentação adequada é fundamental, portanto, mantenha água fresca sempre disponível e evite dar alimentos que possam ser tóxicos para ele. 
                    Proporcione momentos de lazer com brinquedos interativos e não se esqueça de incluir passeios regulares na rotina, ajudando seu pet a se manter ativo e saudável, o que é essencial para sua felicidade e bem-estar no novo lar.
                </p>`;
            break;

        case 'Cuidados':
            titulo.innerText = 'Cuidados Básicos com um pet recém-adotado';
            texto.innerHTML = `
                <p>
                    Cuidar do seu pet recém-adotado é essencial para garantir seu bem-estar e felicidade. Comece oferecendo ração de qualidade, adequada para a idade e porte do animal, e mantenha sempre água fresca e limpa disponível. 
                    Visitas regulares ao veterinário são fundamentais para vacinas, exames de saúde e vermifugação. A higiene deve ser uma prioridade: banhos regulares, escovação e limpeza das orelhas ajudam a prevenir doenças. 
                    Ofereça um espaço seguro e confortável, enriquecido com brinquedos e atividades que estimulem o comportamento natural do seu pet. A socialização e o treinamento são igualmente importantes, então dedique tempo para brincar e ensinar comandos básicos. 
                    Com amor, atenção e cuidados adequados, seu pet se tornará um membro feliz e saudável da sua família.
                </p>`;
            break;

        case 'Alimentacao':
            titulo.innerText = 'Alimentos indicados';
            texto.innerHTML = `
                <p>
                    A alimentação do seu pet é fundamental para sua saúde e bem-estar. Escolha uma ração de qualidade, específica para a idade e o porte do seu animal, evitando alimentos caseiros que podem não fornecer os nutrientes necessários. 
                    Mantenha sempre água fresca e limpa disponível. Pesquise sobre alimentos que são tóxicos para pets, como chocolate, cebola e uvas, e evite-os a todo custo. 
                    Consulte seu veterinário para recomendações sobre a melhor dieta para seu novo amigo.
                </p>`;
            break;

        case 'Adaptacao':
            titulo.innerText = 'Como adaptar um pet ao novo lar';
            texto.innerHTML = `
                <p>
                    Adaptar um pet ao novo lar pode ser um desafio, mas com paciência e atenção, o processo pode ser tranquilo. 
                    Ofereça um espaço seguro onde seu animal possa explorar e se sentir à vontade. Mantenha uma rotina consistente, com horários fixos para alimentação e passeios, para ajudar seu pet a se sentir seguro. 
                    Apresente novos ambientes e pessoas aos poucos, permitindo que seu pet se acostume gradualmente com as mudanças. Brinque e interaja frequentemente para fortalecer o vínculo entre vocês. 
                    Lembre-se, a adaptação pode levar tempo, então seja paciente e ofereça muito amor durante esse processo.
                </p>`;
            break;

        default:
            titulo.innerText = 'Adotei e Agora';
    }
}
