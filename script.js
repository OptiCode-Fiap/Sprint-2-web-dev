const usuario = prompt('digite o usuario');
      
        
    if (usuario.length < 3){
        alert('Usuario deve ter mais de 3 caracteres');
        location.reload();
    } else {
        const senha = prompt('digite a senha');
    if (senha.length < 4){
        alert('A senha deve ter mais de 4 caracteres');  
        location.reload(); 
    } 

    if (usuario.length >= 3 && senha.length >= 4) {

        alert('Login feito');
    }}
     




const storage = document.getElementById('storage');
const filters = document.getElementById('filters');
const slideshow = document.getElementById('slideshow');

const img = document.getElementById('slideImage');
const btns = document.querySelectorAll('.filter-btn');

btns[0].addEventListener('click', () => {
    img.style.filter = 'grayscale(100%)';
});

btns[1].addEventListener('click', () => {
    img.style.filter = 'sepia(100%)';
});

btns[2].addEventListener('click', () => {
    img.style.filter = 'brightness(150%)';
});

const imagens = [
    './src/imagens/image.png',
    './src/imagens/image2.png',
    './src/imagens/image3.png'
];

let atual = 0;

document.getElementById('prevBtn').addEventListener('click', () => {
    atual--;
    if (atual < 0) atual = imagens.length - 1;
    img.src = imagens[atual];
    atualizarContador();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    atual++;
    if (atual >= imagens.length) atual = 0;
    img.src = imagens[atual];
    atualizarContador();
});

const contadorDiv = document.createElement('div');
contadorDiv.id = 'contadorFotos';
contadorDiv.style.marginTop = '15px';
contadorDiv.style.fontSize = '14px';
contadorDiv.style.color = '#fff';
contadorDiv.style.textAlign = 'center';
contadorDiv.style.padding = '5px';
contadorDiv.style.backgroundColor = 'rgba(0,0,0,0.5)';
contadorDiv.style.borderRadius = '5px';

slideshow.appendChild(contadorDiv);

function atualizarContador() {
    contadorDiv.textContent = 'Foto ' + (atual + 1) + ' de ' + imagens.length;
}

atualizarContador();

const botaoReset = document.createElement('button');
botaoReset.textContent = 'Limpar Filtros';
botaoReset.style.margin = '5px';
botaoReset.style.padding = '10px 15px';
botaoReset.style.cursor = 'pointer';
botaoReset.style.backgroundColor = '#ff5722';
botaoReset.style.color = 'white';
botaoReset.style.border = 'none';
botaoReset.style.borderRadius = '5px';
botaoReset.style.fontSize = '14px';

botaoReset.addEventListener('click', () => {
    img.style.filter = 'none';
    alert('Filtros resetados!');
});

document.querySelector('.filter-buttons').appendChild(botaoReset);

const storageBox = document.querySelector('.storage-box');
const indicadorStorage = document.createElement('div');
indicadorStorage.style.marginTop = '10px';
indicadorStorage.style.padding = '10px';
indicadorStorage.style.backgroundColor = '#333';
indicadorStorage.style.borderRadius = '5px';
indicadorStorage.style.textAlign = 'center';

const espacoUsado = 47;
indicadorStorage.innerHTML = `
    <p style="margin: 0; font-size: 14px;">Armazenamento utilizado: ${espacoUsado}%</p>
    <div style="width: 100%; background-color: #555; border-radius: 5px; margin-top: 5px;">
        <div style="width: ${espacoUsado}%; background-color: #4CAF50; height: 8px; border-radius: 5px;"></div>
    </div>
`;

storageBox.appendChild(indicadorStorage);
