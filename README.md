<div align="center">
  <h1> Cátolica Tech Academy Hub </h1>
  <img src="https://i.postimg.cc/nVv8LZwx/img-logo.png" style="width: 200px;">
</div>

---

## Objetivo 🚀
O objetivo deste projeto é criar uma plataforma de documentação para consolidar os conhecimentos adquiridos nas disciplinas do curso de Engenharia de Software. Este site servirá como um recurso para estudantes e entusiastas, oferecendo não apenas conteúdos teóricos, mas também exercícios práticos para reforçar o aprendizado. Além de compartilhar conhecimentos de programação, o projeto abrange uma variedade de tópicos relevantes para a formação em Engenharia de Software, contribuindo para a educação e capacitação da comunidade acadêmica e profissional.

---


## 📑 Índice de Conteúdos

>* [Instalação](#-instalacao)
>* [Criando Branchs](#-criando-branchs)
>* [Como Trabalhar em Branches](#-como-trabalhar-em-branches)
>* [Regras de Estrutura de Diretorios](#-regras-de-estrutura-de-diretórios)
>* [Estrutura de Diretórios](#-estrutura-de-diretorios)
>* [Colaboradores](#-colaboradores)
>* [Tecnologías](#-tecnologias)
>* [Licença](#-licença)

---

## 🛠 Instalacao
Para instalar o projeto, siga os seguintes passos:

### 1. Clone o Repositório
   ```bash
   https://github.com/LeoAnders/catolica-tech-academy-hub.git
   ```
### 2. Navegue até o Diretório do Projeto
   ```bash
   cd catolica-tech-academy-hub
   ```

---

## 🌿 Criando Branchs
#### 1. Crie a Branch Localmente
```bash
git checkout -b nome-da-branch
```
#### 2. Envie a Branch para o Repositório Remoto
```bash
git push origin nome-da-branch
```
Esses comandos cria a branch no repositório remoto e a torna disponível para outros colaboradores

---

## 🌿 Como Trabalhar em Branches
Devemos seguir estes passos para acessar e trabalhar na `branch` localmente


#### 1. Sincronize com o Repositório Remoto
Primeiro nos certificamos que o repositorio local está atualizado com as últimas alterações do repositório remoto
```bash
git fetch origin
```


#### 2. Liste as Branches Remotas
Para verificar quais branches estão disponíveis no repositório remoto, use:
```bash
git branch -r
```


#### 3. Crie e Alternar para a Branch Localmente
Para criar uma branch local que rastreia uma branch remota e alternar para ela, use:
```bash
git checkout -b nome-da-branch origin/nome-da-branch
```


#### 4. Verifique a Branch Atual Certifique-se de que você está na branch correta antes de começar a trabalhar
```bash
git branch
```


#### 5. Trabalhe na Branch
Após alternar para a nova branch, faça as alterações necessárias, adicione e comite suas mudanças

Verifique a Branch Atual Novamente Antes de fazer o commit, verifique se você está na branch correta!
```bash
git branch
```

Adicione e comite suas mudanças
```bash
git add .
git commit -m "Descrição das alterações"
```


#### 6. Empurre Suas Alterações para a Branch Remota
Para enviar suas alterações da branch local para a branch remota, use:
```bash
git push
```

Nota:Se a branch local não estiver configurada para rastrear uma branch remota, o comando git push resultará em um erro. Nesse caso, você precisará especificar explicitamente a branch remota usando:
```bash
git push origin nome-da-branch
```


---

## 📂 Regras de Estrutura de Diretórios
- Todos os nomes de arquivos e pastas devem ser escritos em letras minúsculas
- Use hífens (-) para separar palavras em nomes de arquivos e pastas
- Mantenha uma estrutura hierárquica clara e lógica. Pastas principais devem conter subpastas que agrupam conteúdos relacionados

---

## 🗂 Estrutura de Diretorios

```
/catolica-tech-academy-hub
│
├── home.html                                  # Página inicial do site
├── src/                                       # Fonte do projeto
│   ├── content/                               # Conteúdo do site
│   │   ├── c/                                 # Seção específica para a linguagem C
│   │   │   ├── c.html                         # Página principal para a linguagem C, com a configuração da sidebar e links
│   │   │   ├── topico1/                       # Tópico 1 relacionado à linguagem C (ex: Introdução ao C)
│   │   │   │   ├── subtopico1.html            # Página para o sub-tópico 1 (ex: O que é C?)
│   │   │   │   ├── subtopico2.html            # Página para o sub-tópico 2 (ex: História da Linguagem C)
│   │   │   │   ├── subtopico3.html            # Página para o sub-tópico 3 (ex: Ambiente de Desenvolvimento)
│   │   │   ├── topico2/                       # Tópico 2 relacionado à linguagem C (ex: Sintaxe Básica)
│   │   │   │   ├── subtopico1.html            # Página para o sub-tópico 1 (ex: Tipos de Dados)
│   │   │   │   ├── subtopico2.html            # Página para o sub-tópico 2 (ex: Variáveis e Constantes)
│   │   │   │   ├── subtopico3.html            # Página para o sub-tópico 3 (ex: Operadores)
│   │   │   ├── topico3/                       # Tópico 3 relacionado à linguagem C (ex: Estruturas de Controle)
│   │   │   │   ├── subtopico1.html            # Página para o sub-tópico 1 (ex: Estruturas Condicionais)
│   │   │   │   ├── subtopico2.html            # Página para o sub-tópico 2 (ex: Laços de Repetição)
│   │   │   │   ├── subtopico3.html            # Página para o sub-tópico 3 (ex: Comandos de Controle de Fluxo)
│   │   ├── outro-conteudo/                    # Seção específica para outro assunto ou linguagem
│   │   │   ├── outro-conteudo.html            # Página principal para a nova seção, com a configuração da sidebar e links
│   │   │   ├── topico1/                       # Tópico 1 relacionado ao novo assunto ou linguagem (ex: Novo Assunto - Conceito 1)
│   │   │   │   ├── subtopico1.html            # Página para o sub-tópico 1 (ex: Conceito Básico 1)
│   │   │   │   ├── subtopico2.html            # Página para o sub-tópico 2 (ex: Conceito Básico 2)
│   │   │   │   ├── subtopico3.html            # Página para o sub-tópico 3 (ex: Conceito Básico 3)
│   │   │   └── topico2/                       # Tópico 2 relacionado ao novo assunto ou linguagem (ex: Novo Assunto - Detalhes)
│   │   │       ├── subtopico1.html            # Página para o sub-tópico 1 (ex: Detalhe 1)
│   │   │       ├── subtopico2.html            # Página para o sub-tópico 2 (ex: Detalhe 2)
│   │   │       └── subtopico3.html            # Página para o sub-tópico 3 (ex: Detalhe 3)
│   ├── styles/                                # Estilos do site
│   │   ├── components/                        # Estilos para componentes específicos do Bootstrap
│   │   │   ├── accordion.css                  # Estilos para o componente de accordion
│   │   │   ├── navbar.css                     # Estilos para a barra de navegação
│   │   │   └── sidebar.css                    # Estilos para a barra lateral
│   │   ├── pages/                             # Estilos para páginas específicas
│   │   │   ├── home.css                       # Estilos para a página inicial
│   │   │   ├── c.css                          # Estilos para a seção de linguagem C
│   │   │   └── topico.css                     # Estilos para páginas de tópicos específicos
│   └── assets/
│       ├── images/
│       │   └── logo.png
│       └── icons/
│           └── favicon.ico
└── README.md


```
---

## 🤝 Colaboradores

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/LeoAnders" title="Leonardo Anders">
        <img style="border-radius: 50%;" src="https://github.com/user-attachments/assets/2400ce34-00e0-4ee7-b263-805d4f3f5ee1" width="100px;" alt=""/>
      </a><br />
      <sub><b><a href="https://github.com/LeoAnders" title="Leonardo Anders">Leonardo Anders</a></b></sub><br />👨‍🚀
    </td>
    <td align="center">
      <a href="https://github.com/gabrielmassaia" title="Gabriel Massaia">
        <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/121907402?v=4" width="100px;" alt=""/>
      </a><br />
      <sub><b><a href="https://github.com/gabrielmassaia" title="Gabriel Massaia">Gabriel Massaia</a></b></sub><br />👨‍🚀
    </td>
    <td align="center">
      <a href="https://github.com/rodolfoSolera" title="Rodolfo Solera">
        <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/157968301?v=4" width="100px;" alt=""/>
      </a><br />
      <sub><b><a href="https://github.com/rodolfoSolera" title="Rodolfo Solera">Rodolfo Solera</a></b></sub><br />👨‍🚀
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="#" title="João Pedro Meister">
        <img style="border-radius: 50%;" src="https://github.com/user-attachments/assets/46ad4ace-a5ae-4d5e-84e5-53592b7f1087" width="100px;" alt=""/>
      </a><br />
      <sub><b><a href="#" title="João Pedro Meister">João Pedro Meister</a></b></sub><br />🚀
    </td>
    <td align="center">
      <a href="https://github.com/thiagollm" title="Thiago Luis Lombardi">
        <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/129520776?v=4" width="100px;" alt=""/>
      </a><br />
      <sub><b><a href="https://github.com/thiagollm" title="Thiago Luis Lombardi">Thiago Luis Lombardi</a></b></sub><br />🚀
    </td>
    <td align="center">
      <a href="https://github.com/LucasSetterVeiga" title="Lucas Veiga">
        <img style="border-radius: 50%;" src="https://github.com/user-attachments/assets/e72042dd-132a-4ad4-b04d-e0abacc8301b" width="100px;" alt=""/>
      </a><br />
      <sub><b><a href="https://github.com/LucasSetterVeiga" title="Lucas Veiga">Lucas Veiga</a></b></sub><br />🚀
    </td>
  </tr>
</table>


---
## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:


<div style="display: flex; gap: 10px;">
  <img style="width: 50px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" />
  <img style="width: 50px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg" />
  <img style="width: 50px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
</div>

---

## 📜 Licença
Este projeto está sob a licença [LICENSE.md](https://github.com/LeoAnders/catolica-tech-academy-hub/blob/main/LICENSE)






