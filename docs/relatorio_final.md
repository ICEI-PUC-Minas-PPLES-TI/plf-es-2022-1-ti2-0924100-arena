# Arena


**Arthur Alexi Moreira Menezes, aammenezes@sga.pucminas.br**

**Gabriel de Souza, gabriel.souza.1365691@sga.pucminas.br**

**Gabriel Lima de Souza, gabriel.souza.1354648@sga.pucminas.br**

**Marcus Vinícius Pinto Viana Filho, marcus.filho.1353449@sga.pucminas.br**

---

Professores:

**Prof. Hugo Bastos De Paula**

**Profa. Joyce Christina De Paiva Carvalho**

---

_Curso de Engenharia de Software, Unidade Praça da Liberdade_

_Instituto de Informática e Ciências Exatas – Pontifícia Universidade de Minas Gerais (PUC MINAS), Belo Horizonte – MG – Brasil_

---


## 1. Introdução

O projeto Arena tem como proposta facilitar a prática de esportes no país. O objetivo principal do sistema é unir praticantes iniciantes ou atletas casuais a outros jogadores que podem estar em busca de times, campeonatos, adversários ou parceiros de equipe. A aplicação também realiza a intermediação entre jogadores e locatários de espaços para a prática esportiva, com o objetivo de proporcionar a localização para que os eventos ocorram.  

    1.1 Contextualização

O número de pessoas sedentárias vem crescendo com o passar do tempo e esse problema se agravou com a pandemia da COVID-19. </br>
De acordo com a Organização Mundial da Saúde (OMS), em média 5 milhões de mortes poderiam ser evitadas caso as vítimas realizassem algum tipo de atividade física [1.1], também segundo a fonte, o Brasil é o país mais sedentário da América Latina e ocupa a quinta posição no ranking mundial [1.2]. </br>
Assim, surge a necessidade de se integrar o meio virtual à pratica e incentivo aos esportes, amenizando assim essa situação.

    1.2 Problema 

   A falta de ferramentas destinadas à prática de esportes no Brasil é notável, percebemos a dificuldade para encontrar pessoas que possam praticar o mesmo esporte que você e que esteja com seu nível de experiencia na devida atividade física, buscando também novos desafios através dos campeonatos. Outro grande problema encontrado foi o seguinte: “tenho meu time, onde vou treinar ou jogar? “, a falta de acesso a comunicação digital com locatários de quadras, campos, estádios, arenas sendo elas públicas ou particulares para a efetuação da pratica é um desafio a ser quebrado.  



    1.3 Objetivo geral

Este projeto tem como objetivo o desenvolvimento de uma aplicação web, visando conectar vários esportistas e profissionais da área, automatizando vários processos relacionados à partida.

        1.3.1 Objetivos específicos

- Coleta de dados;
- Levantamento de requisitos;
- Permitir a criação de times;
- Permitir a busca por jogadores;
- Permitir a criação e busca de campeonatos;
- Permitir a busca de quadras;
- Permitir a busca por árbitros;
- Permitir visualizar as informações do campeonato;

Estes são os resultados esperados pelo projeto.

    1.4 Justificativas

Ciente que essa vida sedentária é nociva à saúde, o projeto Arena pode colaborar para inverter esse quadro. Com o avanço significativo das vacinas e o regresso gradativo da vida cotidiana, os esportes estão retornando como uma ótima opção de atividade física e lazer. 

Através de um processo automatizado, a aplicação proporcionará um acesso mais rápido e descomplicado para os espaços físicos e simplificará a organização e a formação de times, partidas e campeonatos. Consequentemente, poderá incentivar as pessoas a praticar esportes e sair da vida sedentária.
 

## 2. Participantes do processo

Os participantes do processo podem ser definidos como iniciantes, atletas casuais e proprietários de quadras.

Os iniciantes compreendem o grupo de pessoas que desejam começar a praticar esportes, alguns com modalidades predefinidas e outros em busca de experimentar novas categorias.  Geralmente encontram dificuldades em encontrar possíveis jogadores e companheiros de equipe, bem como locais para começar a sua prática.

Os atletas casuais englobam as pessoas que já possuem certa experiência em determinado(os) esporte(es), procuram espaços adequados e um tempo determinado para o exercício destes. Este perfil também busca novos desafios, seja jogando com jogadores com o mesmo nível de experiência ou até mesmo participando de campeonatos organizados pelos usuários. 

Por fim, os proprietários de quadras são o grupo de pessoas que possuem estabelecimentos esportivos para locação, e que desejam encontrar clientes dispostos a utilizar suas instalações para a prática de esportes. 


## 3. Modelagem do processo de negócio

## 3.1. Análise da situação atual

Apresente uma descrição textual de como os sistemas atuais resolvem o problema que se propoe a resolver.  Caso sua proposta seja inovadora e não existam processos claramente definidos, **apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente**, mesmo que não se utilize tecnologia computacional.

## 3.2. Descrição Geral da proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

## 3.3. Modelagem dos Processos

### 3.3.1 Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN.

![Exemplo de um Modelo BPMN do PROCESSO 1](imagens/process.png "Modelo BPMN do Processo 1.")


### 3.3.2 Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Exemplo de um Modelo BPMN do PROCESSO 2](imagens/call_process.png "Modelo BPMN do Processo 2.")

## 4. Projeto da Solução

### 4.1. Detalhamento das atividades

Descrever aqui cada uma das propriedades das atividades de cada um dos processos. Devem estar relacionadas com o modelo de processo apresentado anteriormente.

#### Processo 1 – NOME DO PROCESSO

**Nome da atividade 1**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| [Nome do campo] | [Área de texto, Caixa de texto, Número, Data, Imagem, Seleção única, Múltipla escolha, Arquivo, Link, Tabela] |  |  |
| ***Exemplo:***  |    |     |
| login | Caixa de Texto | formato de e-mail |  |
| senha | Caixa de Texto | mínimo de 8 caracteres |   |

**Nome da atividade 2**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| [Nome do campo] | [Área de texto, Caixa de texto, Número, Data, Imagem, Seleção única, Múltipla escolha, Arquivo, Link, Tabela] |  |  |
|    |    |     |

#### Processo 2 – NOME DO PROCESSO

**Nome da atividade 1**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| [Nome do campo] | [Área de texto, Caixa de texto, Número, Data, Imagem, Seleção única, Múltipla escolha, Arquivo, Link, Tabela] |  |  |
|    |    |     |

**Nome da atividade 2**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| [Nome do campo] | [Área de texto, Caixa de texto, Número, Data, Imagem, Seleção única, Múltipla escolha, Arquivo, Link, Tabela] |  |  |
|    |    |     |

### 4.2. Tecnologias

Descreva qual(is) tecnologias você vai usar para resolver o seu problema, ou seja implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas. Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## 5. Modelo de dados

Apresente o modelo de dados por meio de um modelo relacional ou Diagrama de Entidade-Relacionamento (DER) que contemple todos conceitos e atributos apresentados item anterior. 

![Diagrama de Entidade Relacionamento de Exemplo](imagens/er_diagram.png "Diagrama de Entidade Relacionamento de Exemplo")

## 6. Indicadores de desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores.

Usar o seguinte modelo:

| **Indicador** | **Objetivos** | **Descrição** | **Cálculo** | **Fonte dados** | **Perspectiva** |
| --- | --- | --- | --- | --- | --- |
| Percentual reclamações | Avaliar quantitativamente as reclamações | Percentual de reclamações em relação ao total atendimento |   | Tabela reclamações | Aprendizado e Crescimento |
| Taxa de Requisições abertas | Melhorar a prestação de serviços medindo a porcentagem de requisições | Mede % de requisições atendidas na semana | ![\frac{\sum{atendidas}}{\sum{requisicoes}}100](https://latex.codecogs.com/svg.latex?\frac{\sum{atendidas}}{\sum{requisicoes}}100) | Tabela solicitações | Processos internos |
| Taxa de entrega de material | Manter controle sobre os materiais que estão sendo entregues | Mede % de material entregue dentro do mês |   | Tabela Pedidos | Clientes |

Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe **a ser proposto**

## 7.Sistema desenvolvido

Faça aqui uma breve descrição do software e coloque as principais telas com uma explicação de como usar cada uma.

## 8. Conclusão

Apresente aqui a conclusão do seu trabalho. Discussão dos resultados obtidos no trabalho, onde se verifica as observações pessoais de cada aluno. Poderá também apresentar sugestões de novas linhas de estudo.

# REFERÊNCIAS

**[1.1]** - OMS divulga guia para combater sedentarismo, que mata até 5 milhões por ano. ONU News, 27 de novembro de 2020. Disponível em:       <https://news.un.org/pt/story/2020/11/1734322>. Acesso em: 14/02/2022.

**[1.2]** - América Latina tem maior índice de sedentário, Brasil lidera. Agência Brasil, 05 de setembro de 2018. Disponível em: https://agenciabrasil.ebc.com.br/internacional/noticia/2018-09/america-latina-tem-maior-indice-de-sedentarios-brasil-lidera>. Acesso em: 16/02/2022.


# APÊNDICES

**Colocar link:**

Do código (armazenado no repositório);

Dos artefatos (armazenado do repositório);

Apresentação: https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-1-ti2-0924100-arena/blob/master/docs/apresenta%C3%A7%C3%A3o.md ;

Do vídeo de apresentação (armazenado no repositório).




