# Componente de Avaliação Interativo
Oi Pessoal! 
Esta é uma solução para o desafio [Interactive rating component](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI) do Frontend Mentor, construída com React e Tailwind CSS.

## 🎯 Sobre o Projeto

Este projeto é um componente de interface de usuário (UI) que permite aos usuários fornecer uma avaliação de 1 a 5. É um excelente exemplo de como lidar com estado, interatividade e feedback visual em uma aplicação front-end moderna. O objetivo foi criar uma experiência de usuário fluida e responsiva, seguindo o design proposto pelo Frontend Mentor.


### Ao Vivo

**[Clique aqui para interagir com o projeto](https://www.google.com/search?q=URL_DO_SEU_DEPLOY_AQUI)**


### GIF de Demonstração

![Image](https://github.com/user-attachments/assets/6b870576-56a7-4284-a66e-f4565ef0685b)


## ✨ Funcionalidades

  - **Seleção de Nota:** O usuário pode escolher uma nota de 1 a 5.
  - **Estado Interativo (Hover):** Feedback visual claro quando o usuário passa o mouse sobre as notas e o botão de envio.
  - **Tela de Agradecimento:** Após o envio, o componente exibe uma mensagem de agradecimento mostrando a nota que foi selecionada.
  - **Validação Simples:** Exibição de um modal de alerta caso o usuário tente enviar a avaliação sem selecionar uma nota.
  - **Design Responsivo:** O componente se adapta perfeitamente a diferentes tamanhos de tela.

## 🛠️ Tecnologias Utilizadas

  - **React:** Biblioteca JavaScript para construir interfaces de usuário componentizadas e reativas.
  - **Tailwind CSS:** Framework CSS utility-first para estilização rápida, consistente e customizável.
  - **Vite:** Ferramenta de build moderna que oferece uma experiência de desenvolvimento extremamente rápida.
  - **JavaScript (ES6+):** Utilização de recursos modernos da linguagem, como `useState`.

## 🚀 Conceitos e Habilidades Demonstradas

Este projeto, embora compacto, foi uma ótima oportunidade para aplicar e demonstrar conceitos fundamentais do desenvolvimento front-end com React:

  - **Gerenciamento de Estado com `useState`**: Controle do estado da nota selecionada (`selecionado`), do status de envio (`enviado`) e da exibição do modal de erro (`erro`).
  - **Componentização e Reutilização**: A aplicação foi dividida em componentes lógicos e reutilizáveis (`Rating`, `SubmitButton`, `Obrigado`, `AlertModal`), promovendo um código mais limpo e organizado.
  - **Comunicação entre Componentes via Props**: Passagem de dados (a nota selecionada) e funções (o callback para fechar o modal) entre componentes pais e filhos.
  - **Renderização Condicional**: Utilização de operadores ternários para alternar a exibição entre o card de avaliação e o card de agradecimento, além de controlar a visibilidade do modal de erro.
  - **Manipulação de Eventos**: Captura de eventos `onClick` para atualizar o estado da aplicação de forma interativa.
  - **Estilização com Utility-First CSS**: Demonstração de proficiência com Tailwind CSS para criar uma UI complexa e responsiva de forma eficiente, diretamente no JSX.

## ⚙️ Como Executar o Projeto Localmente

```bash
# 1. Clone o repositório
git clone https://github.com/camilarochatec/interactive-rating-component.git

# 2. Navegue até o diretório do projeto
cd nome-do-projeto

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:5173](https://www.google.com/search?q=http://localhost:5173) (ou a porta indicada no seu terminal) para visualizar no navegador.

## 📬 Contato

**Camila Rocha**
  - **LinkedIn:** (www.linkedin.com/in/camilarochatec)
  
  Obrigado pela visita! 👋

-----