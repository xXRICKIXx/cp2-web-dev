function Enviar() {
    if (document.querySelector('#nome').value.length < 2) {
        alert('Nome (deve conter no mínimo duas letras)');
    }
    else {
        var nome = document.querySelector("#nome").value
        var email = document.querySelector("#email").value
        var telefone = document.querySelector("#telefone").value
        var assunto = document.querySelector("#assunto").value;
        var mensagem = document.querySelector("#mensagem").value
        // Exibindo os dados em um alert
        switch (assunto) {
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
        }
        alert(
            `Informações preenchidas:\n Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nAssunto: ${assunto}\nMensagem: ${mensagem}\nENVIADO COM SUCESSO !`);
    }

}


function popup(nome, idade, porte) {
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
            <p>Parabéns por adotar um novo amigo! Aqui estão algumas orientações para ajudar você a cuidar bem do seu pet e garantir uma adaptação tranquila.</p> 
            <h3>Primeiros Dias</h3> 
            <p>Os primeiros dias são cruciais. Dê ao seu pet tempo para se acostumar com o novo ambiente. Mantenha a casa calma e evite muitas visitas no início.</p> 
            <h3>Registro e Documentação</h3> 
            <p>Certifique-se de registrar seu novo amigo no veterinário e manter a documentação em dia, incluindo vacinas e exames.</p> 
            <h3>Crie um Espaço Seguro</h3> 
            <p>Prepare um cantinho confortável com cama, água e brinquedos. Isso ajuda seu pet a se sentir seguro.</p> 
            <h3>Treinamento e Socialização</h3> 
            <p>Inicie o treinamento básico e socialize seu pet com outros animais e pessoas, sempre de forma gradual.</p> `;
            break;

        case 'Cuidados':
            titulo.innerText = 'Cuidados Básicos com um pet recém-adotado';
            texto.innerHTML = `
            <p>Seja bem-vindo(a) ao Pacotinho de Amor! Abaixo, você encontrará dicas essenciais para garantir que seu novo amigo esteja feliz e saudável.</p>
    
            <h3>Consultas Veterinárias</h3>
            <p>Agende uma consulta assim que possível e mantenha as vacinas sempre em dia.</p>
    
            <h3>Alimentação Balanceada</h3>
            <p>Ofereça ração de qualidade e adequada à idade e porte do seu pet.</p>
    
            <h3>Higiene</h3>
            <p>Realize banhos regulares e escovação para manter a pelagem saudável.</p>
    
            <h3>Exercícios Diários</h3>
            <p>Reserve tempo para passeios e brincadeiras para manter seu pet ativo.</p>
    
            <h3>Amor e Atenção</h3>
            <p>Dedique tempo para criar um vínculo forte com seu novo amigo!</p>`
            break;

        case 'Alimentacao':
            titulo.innerText = 'Alimentos indicados';
            texto.innerHTML = `
            <p>A alimentação do seu pet é essencial para sua saúde e bem-estar. Confira algumas dicas valiosas:</p>
    
            <h3>Ração Adequada</h3>
            <p>Escolha uma ração de alta qualidade, específica para a idade e porte do seu animal.</p>
    
            <h3>Horários Fixos</h3>
            <p>Estabeleça uma rotina de alimentação para criar segurança e estabilidade.</p>
    
            <h3>Evite Alimentos Prejudiciais</h3>
            <p>Não ofereça chocolate, cebola, uvas e outros alimentos que possam ser tóxicos.</p>
    
            <h3>Água Sempre Fresca</h3>
            <p>Mantenha sempre água limpa e fresca disponível para o seu pet.</p>
    
            <h3>Consultas Regulares</h3>
            <p>Consulte um veterinário para receber orientações específicas sobre a dieta.</p>`;
            break;

        case 'Adaptacao':
            titulo.innerText = 'Como adaptar um pet ao novo lar';
            texto.innerHTML = `
            <p>A chegada de um novo amigo pode ser um grande desafio. Siga essas dicas para uma adaptação tranquila:</p>
    
            <h3>Ambiente Confortável</h3>
            <p>Prepare um espaço tranquilo onde seu pet possa se sentir seguro.</p>
    
            <h3>Estabeleça uma Rotina</h3>
            <p>Uma rotina ajuda seu pet a entender o que esperar, tornando o ambiente mais seguro.</p>
    
            <h3>Socialização Gradual</h3>
            <p>Introduza seu novo amigo a outros pets e pessoas lentamente.</p>
    
            <h3>Brinquedos e Atividades</h3>
            <p>Ofereça brinquedos e atividades para ajudar seu pet a se distrair e se adaptar.</p>
    
            <h3>Paciência e Amor</h3>
            <p>Lembre-se de ser paciente e oferecer muito amor durante esse processo.</p>`
            break;
    }
}