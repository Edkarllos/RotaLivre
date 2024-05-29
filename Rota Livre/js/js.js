function registrarUsuario() {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem');
        return;
    }

    const usuario = {
        nome,
        sobrenome,
        cpf,
        email,
        senha
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));
    alert('Usuário cadastrado com sucesso!');
    window.location.href = '/htmls/login.html';
}


function loginUsuario() {
    const email = document.getElementById('emailLogin').value;
    const senha = document.getElementById('senhaLogin').value;

    const usuarioArmazenado = localStorage.getItem('usuario');
    if (!usuarioArmazenado) {
        alert('Usuário não encontrado. Por favor, cadastre-se.');
        return;
    }

    const usuario = JSON.parse(usuarioArmazenado);
    if (email === usuario.email && senha === usuario.senha) {
        alert('Login realizado com sucesso!');
        window.location.href = '/htmls/principal.html';
    } else {
        alert('E-mail ou senha incorretos');
    }
}

