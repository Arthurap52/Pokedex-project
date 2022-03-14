/* esconder os cartoes e mostrar somente o que esta com a classe open

para isso vamo trabalhar com dois elementos 1-pokemon-list e 1-pokemon-card

-remover a classe aberto



-remover a classe active do pokemon marcado

-adicionar a classe active no item selecionado  

*/

// criar duas variaveis pra mexer nos elementos e trabalhar com o evento de clique feito pelo usuario na pokemon-list
const selectList = document.querySelectorAll('.pokemon');
const pokemonsCard = document.querySelectorAll('.pokemon-cards');

// criar um evento de click
selectList.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        //remover a classe open do pokemon marcado
        const pokemonCardOpen = document.querySelector('.open');
        pokemonCardOpen.classList.remove('open');

        // pegar o id do pokemon ao clicar nele
        const idSelectPokemon = pokemon.attributes.id.value;

        const pokemonCardIdToOpen = idSelectPokemon + '-card';
        const pokemonCardToOpen = document.getElementById(pokemonCardIdToOpen);
        pokemonCardToOpen.classList.add('open');

        //ramover a classe ativo do pokemon marcado
        const pokemonListActive = document.querySelector('.active');
        pokemonListActive.classList.remove('active');

        //adicionar classe active no pokemon marcado
        const SelectpokemonListed = document.getElementById(idSelectPokemon);
        SelectpokemonListed.classList.add('active');
    }) 
})