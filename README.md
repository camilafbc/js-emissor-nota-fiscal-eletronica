# 📄 Emissor de Nota Fiscal Eletrônica

![Screenshot](https://github.com/camilafbc/js-emissor-nota-fiscal-eletronica/blob/main/to-readme.jpg?raw=true)

O "Emissor de Nota Fiscal Eletrônica" foi desenvolvido como parte do curso Técnico em Desenvolvimento de Sistemas do SENAC, atendendo a uma demanda de um dos professores do curso Técnico em Administração da instituição. O objetivo era criar um sistema que simulasse a emissão de notas fiscais eletrônicas para utilização em aulas.

O projeto pode ser acessado aqui 👉 https://emissor-nfe.netlify.app/

## Visão Geral

Este sistema, desenvolvido com o propósito de simular a emissão de notas fiscais eletrônicas, foi concebido como uma ferramenta prática e educativa para os alunos do curso Técnico em Administração e o escolhido para utilização no curso.

O sistema utiliza o Local Storage do navegador para armazenar os dados utilizados para geração do DANFE.

## Destaques

- Utilizado como ferramenta de ensino nas aulas do curso Técnico em Administração da instituição.

## Tecnologias Utilizadas
  * HTML, CSS e JavaScript
  * API ViaCEP
  * Bootstrap
  * InputMask.js
  * SweetAlert2

## Funcionalidades

  * Simulação da emissão de notas fiscais eletrônicas.
  * Facilidade de preenchimento e geração do Documento Auxiliar da Nota Fiscal Eletrônica (DANFE).
  * Feedback para dados inválidos e campos preenchidos de forma incorreta.
  * Preenchimento automático de endereço através da API via CEP.
  * Intuitiva navegação entre os campos e abas do formulário, utilizando a tecla "tab".
  * Geração e visualização da DANFE em formato PDF, com opção de impressão ou salvamento.

## Utilização

1. Preencha os dados correspondentes em cada aba do nav-tab.
2. Aba Produtos: prencha os dados do produto para inclui-lo na tabela (o campo "desconto" é opcional). Para excluir um produto, basta clicar sobre ele na tabela e logo após em "Excluir.
3. Clique em "Gerar DANFE".
4. Uma nova página com a DANFE é exibida.
5. Clique em "Imprimir" para imprimir ou salvar o PDF gerado.
6. Clique em "Fechar" para retornar à página do sistema.
7. Clique em "Limpar" para recarregar a página e atualizar o número da nota.


