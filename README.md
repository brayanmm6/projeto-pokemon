# Projeto Pokémon com PokéAPI

## Projeto proposto pelo curso de desenvolvimento full stack DevQuest, com o obejtivo de praticar tudo o que foi passado até aqui.

## Tecnologias presentes:

### <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="50px"/>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" width="50px"/>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width="50px"/>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" width="50px"/>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" width="50px"/> ;
### [ PokeAPI ](https://pokeapi.co/);
### [ Styled Components ](https://styled-components.com );
### [ React Router ](https://reactrouter.com/en/main);
### [React Testing library](https://testing-library.com/docs/react-testing-library/intro/);

## Como rodar o Projeto:
 - Primeiro digite o comando `npm install` ou `yarn` em seu terminal. **Esse comando instala todas as dependências necessárias para o projeto funcionar corretamente.**
 - Aguarde o processo de instalação das dependências do projeto.
 - Ao finlizar o proceso, basta digitar o comando `npm start` ou `yarn start` no terminal, que será aberta uma guia em seu navegador padrão, já com o projeto rodando.

## Testes Unitários:
O projeto conta com testes unitários em todos os componentes importantes, para garantir o funcionamento correto dos mesmos, previnindo de erros até mesmo em caso de refatoração do código. Os testes encontran-se em `src/tests/components`.

![Tests](./src/assets/screenshots/tests.gif)

## Como rodar os testes:
 - Para rodar os testes unitários, basta digitar `npm run test` ou `yarn run test`;
 - **Caso necessário**, em seguida digitar a tecla da opção desejada para rodar os testes. **Digite a tecla `a` caso queira rodar todos os testes.**

 ![Tests options](./src/assets/screenshots/tests-options.png)

## Apresentando o projeto:

### Home:
No topo da Home encontra-se um simples menu, com a logo do anime Pokémon, e paralelo a ela o botão para alternar o tema.

![Home Menu](./src//assets/screenshots/menu.png)

Em seguida, já na seção dos cards, vemos uma barra de ferramentas. Onde encontra-se a filtragem por tipo de Pokémon, e do outro lado a barra de pesquisa, para pesquisar por **nome de um Pokemon**.

![Home Toolbar](./src//assets/screenshots/toolbar.png)

Essa barra de pesquisa possúi um algorítmo que possibilita uma pesquisa mais "facilitada", fazendo com que possa ser encontrado o pekémon desejado mesmo sem digitar o nome exato ou completo do Pokemón, que aparecerão os nomes mais próximos.

![Home Search Input func](./src//assets/screenshots/search-func.png)

Caso o usuário digite algo inválido na barra de pesquisa, irá aparecer uma mensagem de erro informando o ocorrido.

![Search Input error state](./src/assets/screenshots/search-func-error.png)

Na parte onde ficam os cards inicialmente lhe mostra-rá uma listagem com 10 Pokémons. E logo abaixo você verá um botão `Show more`, que carregará mais 10 Pokémons com suas respectivas informações iniciais.

![Home Cards](./src//assets/screenshots/cards.png)

Vale ressaltar que esses valores podem ser alterados nos arquivos do projeto, na pasta `variables` em `./src/js/variables`, nas variáveis `listDefaultValue` e `moreToshow`.

![Cards default values](./src//assets/screenshots/cards-default-values.png)

## Página de Infos sobre um Pókemon:

Ao Clicar em um Pokémon, abrirá uma página contendo inforamções mais detalhadas sobre o mesmo. Sendo elas:
 - Nome; 
 - Id;
 - Imagem Oficial;
 - Estatísticas;
 - Peso;
 - Tipo ou Tipos do Pokémon;
 - Altura;
 - Experiência Base;
 - Habilidades do Pokémon, contendo nome e sua respectiva descrição;
 - Lista de Movimentos, contendo nome e sua respectiva descrição;
 - Uma versão em miniatura da seção de Cards presente na Home.

![Pokemon Info](./src/assets/screenshots/pokemon-info.png)

Observe que a parte onde mostra o tipo/tipos do Pokémon, também é um botão. Que faz a filtragem por tipo também nessa página.

![Pokemon type gif](./src/assets/screenshots/type-button.gif)

## Personalização do projeto:

O projeto usa a biblioteca Styled Components, o que possibilita personalizar cada componente de uma maneira mais fácil e organizada. Os componentes estilizados, encontran-se em `src/styled-components` .
Nesse mesmo diretório encontra-se também, o componente estilizado dos backgrounds de cada tema. Sendo possível também estizá-los de maneiras diferentes. 

Para uma personalização mais geral, podemos ir em `src/js/objects`. Onde podemos encontrar as cores dos tipos de Pokémons existentes, contendo nome e hexadecimal. E logo abaixo um objeto contendo a definição de cores para componentes que mudam de cor de acordo com o tema. Sendo possível personalizar à gosto. 

![Personalization object](./src/assets/screenshots/personalization.png)

### O Projeto está 100% responsivo, se ajustando em telas de diferentes tamanhos. 

## Capturas de tela:

### Desktop:

Home:
![Desktop Home light](./src/assets/screenshots/desktop-home-light.png)
![Desktop Home dark](./src/assets/screenshots/desktop-home-dark.png)

Pokemon Infos: 
![Desktop Poke Infos light](./src/assets/screenshots/poke-info-desktop-light.png)
![Desktop Poke Infos dark](./src/assets/screenshots/poke-info-desktop-dark.png)

### Mobile:

Home:
![Mobile Home light](./src/assets/screenshots/mobile-home-light.png)
![Mobile Home dark](./src/assets/screenshots/mobile-home-dark.png)

Pokemon Infos: 
![Mobile Poke Infos light](./src/assets/screenshots/poke-info-mobile-light.png)
![Mobile Poke Infos dark](./src/assets/screenshots/poke-info-mobile-dark.png)


## Feito com muito amor 💙. Espero que gostem 😊!!!