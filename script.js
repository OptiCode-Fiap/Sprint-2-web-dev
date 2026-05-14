    
    document.getElementById('storage').style.display = 'none';
    document.getElementById('filters').style.display = 'none';
    document.getElementById('slideshow').style.display = 'none';

      
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
        document.getElementById('storage').style.display = 'block';
        document.getElementById('filters').style.display = 'block';
        document.getElementById('slideshow').style.display = 'block';
        alert('Login feito');
    }}
     
