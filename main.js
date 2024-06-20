let usuario = {
    email: 'DarthVader',
    senha: 'pneumonoultramicroscopicsilicovolcanoconiosis'
};

const pegarEmail = document.getElementById('email');
const pegarSenha = document.getElementById('senha');
const botaoEnviar = document.getElementById('enviar');

botaoEnviar.addEventListener('click', () => {
    const valorEmail = pegarEmail.value;
    const valorSenha = pegarSenha.value;

    console.log('Email inserido:', valorEmail);
    console.log('Senha inserida:', valorSenha);

    if (valorEmail === usuario.email && valorSenha === usuario.senha) {
        console.log('Usuário autenticado com sucesso!');
        window.location.href = 'https://www.reddit.com/r/blwhale/s/6TrsB9Bx2L';
    } else {
        alert('Falha na autenticação. Email ou senha incorretos.');
    }

});



