let btn = document.getElementById('ativa');
let icon = btn.querySelector('i');
let imagens = document.querySelectorAll('img'); // Seleciona todas as imagens

btn.addEventListener('click', () => {
    icon.classList.toggle('ativo'); // Muda cor do coração

    imagens.forEach(img => {
        if (img.style.display === 'none' || img.style.display === '') {
            img.style.display = 'block'; // Aparece
        } else {
            img.style.display = 'none'; // Desaparece
        }
    });

    console.log('Botão ativado!');
});