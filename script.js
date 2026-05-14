const botaoLogin = document.getElementById('loginButton');
const secaoLogin = document.getElementById('login');
const secaoArmazenamento = document.getElementById('storage');
const secaoFiltros = document.getElementById('filters');
const secaoSlideshow = document.getElementById('slideshow');

secaoArmazenamento.style.display = 'none';
secaoFiltros.style.display = 'none';
secaoSlideshow.style.display = 'none';

botaoLogin.addEventListener('click', () => {
    const usuario = prompt('Digite seu usuário:');
    const senha = prompt('Digite sua senha:');
    
    if (usuario === 'admin' && senha === '123') {
        secaoLogin.style.display = 'none';
        secaoArmazenamento.style.display = 'block';
        secaoFiltros.style.display = 'block';
        secaoSlideshow.style.display = 'block';
        alert('Login feito!');
    } else {
        alert('Usuário ou senha errados!');
    }
});


