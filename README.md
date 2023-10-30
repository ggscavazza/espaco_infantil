# Configurando o projeto
0. > Instale o Visual Code em seu computador, baixando e executando o instalador a partir do link: [Instalador VSCode](https://code.visualstudio.com/download)
1. > Agora instale o Node.js no seu computador, baixando e executando o instalador a partir do link: [Instalador Node.js](https://nodejs.org/en/download)
2. > Instale o GitBash no seu computador, baixando e executando o instalador a partir do link: [Instalador Git](https://git-scm.com/downloads)
3. > Instale o React no computador, seguindo o passo a passo a seguir:
    >> Primeiro abra o GitBash como administrador
    >> Depois execute o script `npm install react`
4. > Crie um fork do projeto [Espaço Infantil CCB](https://github.com/ggscavazza/espaco_infantil). Para isso, ao acessar o link siga o passo a passo a seguir: [Criando um fork, passo a passo](https://www.youtube.com/watch?v=q-QTbNu8Ybc)
5. > Antes de clonarmos o repositório "forkado", crie uma pasta em seu computador onde você quiser que fiquem as pastas de projetos que irá trabalhar.
6. > Entre na pasta criada e clique com o botão direito do mouse em um espaço vazio, na barra de opções aparecerá "Git Bash Here", clique nesta opção. O terminal do GitBash será aberto e você poderá notar que o caminho na linha de comando do terminal já estará dentro da sua pasta.
7. > Clone o repositório "forkado" para trabalhar em seu computador. Para isso siga o passo a passo a seguir: [Clonando um repositório](https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository)
8. > Entre na pasta do projeto clonado rodando o comando `cd espaco_infantil`
9. > Para abrir o projeto no Visual Code execute o comando `code .` no terminal do GitBash
10. > Para rodar o projeto em localhost execute o comando `npm install & npm start`, o projeto será iniciado e poderá ser aberto no navegador no link [http://localhost:3000](http://localhost:3000). Abaixo deixarei alguns comandos script da própria documentação do React.


## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.