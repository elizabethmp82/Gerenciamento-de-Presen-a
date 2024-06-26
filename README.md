# Sistema de Gerenciamento de Presença

Este projeto é um sistema de gerenciamento de presença desenvolvido para permitir que os usuários gerenciem a presença diária de alunos, incluindo a criação, edição, exclusão de cadastros de alunos e turmas, bem como a marcação de presença dos alunos.

## Índice

- [Objetivo Principal](#objetivo-principal)
- [Tipos de Usuários](#tipos-de-usuários)
- [Principais Funcionalidades](#principais-funcionalidades)
- [Fluxo de Trabalho](#fluxo-de-trabalho)
- [Instalação](#instalação)

## Objetivo Principal

Permitir que os usuários gerenciem a presença diária de alunos, incluindo a criação, edição, exclusão de cadastros de alunos e turmas, bem como a marcação de presença dos alunos.

## Tipos de Usuários

- **Usuário Regular (Professor)**: Pode editar, excluir e visualizar o cadastro dos alunos de sua turma, além de registrar a presença dos alunos.
- **Administrador**: Pode gerenciar todos os alunos e turmas. Pode editar, excluir e visualizar o cadastro dos alunos e das turmas.

## Principais Funcionalidades

- **Autenticação de Usuário**: Registro, login e logout.
- **Gerenciamento de Alunos**: Criação, edição, exclusão e visualização de alunos.
- **Gerenciamento de Turmas**: Criação, edição, exclusão e visualização de turmas.
- **Registro de Presença**: Marcação de presença dos alunos diariamente.
- **Relatórios de Presença**: Geração de relatórios de presença por aluno e por turma.
- **Painel de Controle do Usuário**: Exibição de informações sobre a turma.
- **Administração**: Gerenciamento de usuários (apenas para administradores).

## Fluxo de Trabalho

1. **Registro/Login**:
   - O usuário se registra ou faz login no sistema.
2. **Visualização da Turma**:
   - Após o login, o usuário é redirecionado para o painel de controle onde pode ver as informações sobre a turma.
3. **Gerenciamento da Turma**:
   - O usuário pode adicionar um novo aluno, editar ou excluir alunos existentes.
   - O usuário pode listar os alunos para registrar a presença.
4. **Registro de Presença**:
   - O usuário pode marcar a presença dos alunos diariamente.
5. **Relatórios de Presença**:
   - O usuário pode gerar e visualizar relatórios de presença por aluno e por turma.
6. **Administração (somente para administradores)**:
   - O administrador pode visualizar e gerenciar todos os usuários e suas turmas.
   - O administrador pode visualizar e gerar relatórios de presença.

## Instalação

Siga os passos abaixo para configurar o ambiente de desenvolvimento e instalar as dependências necessárias.

1. Clone o repositório:

```bash
git clone https://github.com/elizabethmp82/Gerenciamento-de-Presenca.git
cd Gerenciamento-de-Presenca
