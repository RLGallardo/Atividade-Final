document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    if (nome && email) {
        adicionarUsuarioNaTabela(nome, email);
        document.getElementById('cadastroForm').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

function adicionarUsuarioNaTabela(nome, email) {
    const tabela = document.getElementById('tabelaUsuarios').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    const colunaNome = novaLinha.insertCell(0);
    const colunaEmail = novaLinha.insertCell(1);

    colunaNome.textContent = nome;
    colunaEmail.textContent = email;
}
