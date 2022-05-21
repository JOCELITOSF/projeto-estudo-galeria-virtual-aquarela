const aquarelas = document.querySelectorAll('.aquarela')

    aquarelas.forEach((aquarela) =>{
    aquarela.addEventListener('mouseenter' , () =>{
    const aquarelaSelecionada = document.querySelector('.selecionada')
    aquarelaSelecionada.classList.remove('selecionada')  
    aquarela.classList.add('selecionada')

const idSelecionada = aquarela.attributes.id.value;

const imagemAquarelaSelecionada = document.getElementById('aquarela-selecionada');
        imagemAquarelaSelecionada.src = `./src/imagens/${idSelecionada}.jpg`;

const nomeAquarela = document.getElementById('nome-aquarela');
        nomeAquarela.innerHTML = nomeSelecionada;

const nomeSelecionada = aquarela.getAttribute('data-name');

    });
});