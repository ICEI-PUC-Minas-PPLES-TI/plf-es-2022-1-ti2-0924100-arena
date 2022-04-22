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

O projeto Arena tem como proposta facilitar a prática de esportes no país. O objetivo principal do sistema é unir praticantes iniciantes ou atletas casuais a outros jogadores que podem estar em busca de times, partidas, adversários ou parceiros de equipe. A aplicação também realiza a intermediação entre jogadores e locatários de espaços para a prática esportiva, com o objetivo de proporcionar a localização para que os eventos ocorram.  

    1.1 Contextualização

O número de pessoas sedentárias vem crescendo com o passar do tempo e esse problema se agravou com a pandemia da COVID-19. </br>
De acordo com a Organização Mundial da Saúde (OMS), em média 5 milhões de mortes poderiam ser evitadas caso as vítimas realizassem algum tipo de atividade física [1.1], também segundo a fonte, o Brasil é o país mais sedentário da América Latina e ocupa a quinta posição no ranking mundial [1.2]. </br>
Assim, surge a necessidade de se integrar o meio virtual à pratica e incentivo aos esportes, amenizando assim essa situação.

    1.2 Problema 

   A falta de ferramentas destinadas à prática de esportes no Brasil é notável, percebemos a dificuldade para encontrar pessoas que possam praticar o mesmo esporte que você e que esteja com seu nível de experiencia na devida atividade física. Outro grande problema encontrado foi o seguinte: “tenho meu time, onde vou treinar ou jogar? “, a falta de acesso a comunicação digital com locatários de quadras, campos, estádios, arenas sendo elas públicas ou particulares para a efetuação da pratica é um desafio a ser quebrado.  



    1.3 Objetivo geral

Este projeto tem como objetivo o desenvolvimento de uma aplicação web, visando conectar vários esportistas e profissionais da área, automatizando vários processos relacionados à partida.

        1.3.1 Objetivos específicos

- Coleta de dados;
- Levantamento de requisitos;
- Permitir a criação de times;
- Permitir a busca por atletas;
- Permitir a criação e busca de partidas;
- Permitir a busca de quadras;

Estes são os resultados esperados pelo projeto.

    1.4 Justificativas

Ciente que essa vida sedentária é nociva à saúde, o projeto Arena pode colaborar para inverter esse quadro. Com o avanço significativo das vacinas e o regresso gradativo da vida cotidiana, os esportes estão retornando como uma ótima opção de atividade física e lazer. 

Através de um processo automatizado, a aplicação proporcionará um acesso mais rápido e descomplicado para os espaços físicos e simplificará a organização e a formação de times, partidas e campeonatos. Consequentemente, poderá incentivar as pessoas a praticar esportes e sair da vida sedentária.
 

## 2. Participantes do processo

Os participantes do processo podem ser definidos como atletas e locatários.

Os atletas - iniciantes ou experientes - que desejam praticar um esporte por meio de uma partida. Geralmente esse grupo encontra dificuldade em achar outras pessoas para jogar ou quadras adequadas. Caso o esporte não seja o futebol, esses processos tornam-se ainda mais complicados e demorados. 

Por fim, os locatários, o grupo de pessoas que possuem estabelecimentos esportivos para locação,  que desejam encontrar clientes dispostos a utilizar suas instalações para a prática de esportes. 


## 3. Modelagem do processo de negócio

## 3.1. Análise da situação atual

Nos dias de hoje, as pessoas dependem das redes sociais para organizar as partidas de um determinado esporte. Para isso, cria-se um grupo no Whatsapp ou no Facebook para adicionar potenciais participantes. Deste ponto em diante, discute-se qual será o melhor dia, o horário, quem vai poder participar, as regras, a duração e o valor em dinheiro a pagar. Logo após, caso tenha um número mínimo de jogadores de acordo com os combinados, alguém poderá agendar uma quadra.

A utilização das redes sociais para realizar esses processos iniciais é ineficiente. Primeiramente, o número de pessoas adicionadas é limitado pelo ciclo social dos participantes; isso faz com que caso uma pequena parcela não possa comparecer prejudique a efetivação da partida. Segundamente, tanto o chat do Whatsapp quanto o do Facebook não são adequados para organizar eventos, pois a grande quantidade de mensagens trocadas tira o destaque das mais importantes e fica difícil distinguir qual pergunta a resposta enviada no chat responde.

Já para a parte do agendamento, ela pode ser feita por meio de aplicativos como “Agendei Quadras”, conta comercial dos estabelecimentos nas redes sociais ou por telefonemas. O cliente deve informar: o nome, número de contato,  quantos vão jogar, a data, o horário e a duração. Se o proprietário estiver de acordo, ele agenda a quadra.

Por esse processo não ser integrado aos outros, pode ocorrer erros nos dados informados. Já que caso haja alguma alteração nas informações como um adiamento de um agendamento será necessário reabrir o canal de comunicação cliente com o proprietário e recomeçar todo o processo para agendar.
  

## 3.2. Descrição Geral da proposta

Para utilizar a  ferramenta Arena, o usuário deverá se cadastrar informando dados relevantes como nome, CPF e os esportes que deseja praticar. Após o registro, a plataforma disponibilizará meios para: formar um time, procurar um para ingressar ou simplesmente encontrar pessoas com quem jogar. Dessa forma, os potenciais participantes serão todos os usuários cadastrados no banco de dados. Por consequência, a partida terá uma maior probabilidade de realização. 

Os assuntos relacionados à realização da partida podem ser tratadas no momento da criação do evento. O criador fornecerá o esporte, as datas, os horários, e a duração. Nesse momento, os outros participantes poderão escolher a melhor opção. Com isso, espera-se que as informações mais relevantes, como o horário de realização e o número de jogadores, sejam destacadas. Caso não queira criar uma partida, o usuário poderá buscar por jogos ou campeonatos públicos formados por terceiros.

Assim que pelo menos um número mínimo de participantes - estabelecido pelo criador - confirmar a presença,  a Arena   auxialará na efetivação do agendamento da quadra previamente escolhida.

Com a conclusão da partida, os jogadores poderão avaliar uns aos outros. Primeiro por sua conduta e segundo pelas habilidades. Na finalidade de manter o respeito e equilíbrio durante os jogos.   



## 3.3. Modelagem dos Processos

### 3.3.1 Processo 1 – Cadastrar  usuário

Processo para obter dados necessários e criar um login de cada usuário . Dessa forma, o sistema conseguirá identificar se é um atleta ou um locatário logado. Por conta disso, a Arena poderá disponibilizar informações e funcionalidades adequadas para cada tipo de participante.

![Cadastro_1](https://user-images.githubusercontent.com/90854173/161832079-695e16f0-608d-48c6-9284-3ea81eac390e.png)

### 3.3.2 Processo 2 – Cadastrar Quadra

Após criar uma conta, terá uma seção "adicionar quadra”, que terá um formulário para preencher os dados relacionados ao estabelecimento e  os horários disponíveis para o aluguel. Este processo visa agilizar o agendamento e melhorar a comunicação do proprietário com o cliente.

![Cadastro_quadra](https://user-images.githubusercontent.com/90854634/163627098-1937f67f-d5ab-44f8-9d4c-163c8732f1ae.png)

Pré-requisitos: Estar logado em uma conta do tipo locatário.

### 3.3.3 Processo 3 – Criar ou entrar em um time

Processo no qual o usuário registrado poderá criar um novo time ou se inscrever para entrar em algum já existente. Para conseguir criar um time, o usuário deverá especificar o esporte e o nível de experiencia dos jogadores do time. Para entrar em um já existente, o usuário deve se candidatar em times que estejam procurando atletas, para isso, o usuário deverá deixar dados como seu nível de experiência e quantas vezes na semana ou mês tem disponibilidade para estar participando dos jogos.


![modelagem](https://user-images.githubusercontent.com/90854062/162285023-cc48851a-8039-42a2-9553-573efae8cbf2.png)


### 3.3.4 Processo 4 – Criar ou entrar em uma partida

Processo no qual o usuário registrado poderá criar uma partida ou ingressar em uma das já existentes. Para ingressar em partidas já existentes, o usuário deverá escolher entre as opções disponíveis a que melhor se adequa. Já na criação, dados como esporte escolhido, número de participantes, horário de realização e regras deverão ser informadas pelo organizador. Dessa forma, as informações importantes são colocadas em destaque, gerando maior facilidade na busca de jogadores e organização do evento.

![Processo 4 - Criar ou entrar em uma partida](https://user-images.githubusercontent.com/90854484/162280744-b617ade2-3522-4b49-ad81-4af56f53b77c.png)

Pré-requisitos: Estar logado como atleta.

### 3.3.5 Processo 5 – Realizar pagamento

Processo para decidir o valor que cada atleta irá pagar, por meio do pix, para alugar a quadra e controlar quem já quitou o valor. Dessa forma,  o sistema poderá auxiliar na gestão de pagamentos, e consequentemente, fornecer para o proprietário de quadra uma maior segurança do cumprimento dessa tarefa. 

![Pagamento_BPMN](https://user-images.githubusercontent.com/90854173/163892063-51eba942-62c5-472f-9bd6-e951dfcb81e4.png)


### 3.3.7 Processo 6 – Avaliar participantes

Processo que ocorre ao final da partida realizada, em que os atletas participantes poderão realizar uma avaliação dos envolvidos na partida, levando em consideração a conduta esportiva e sua habilidade no determinado esporte. Com essa avaliação, acredita-se garantir partidas mais equilibradas e respeitosas.

![Processo 6 - Avaliar Participantes](https://user-images.githubusercontent.com/90854484/161132404-2be6c0b1-ec4d-4ec0-8ff4-05e469592a76.png)

Pré-requisitos: Estar logado como atleta e ter participado de alguma partida.


## 4. Projeto da Solução

### 4.1. Detalhamento das atividades

Descrever aqui cada uma das propriedades das atividades de cada um dos processos. Devem estar relacionadas com o modelo de processo apresentado anteriormente.

#### Processo 1 – Cadastrar usuário

**Inserir dados gerais**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Nome | Caixa de Texto |  |  |
| Data de Nascimento | Data |  |  |
| Sexo | Seleção única |  |  |
| E-mail | Caixa de Texto |  |  |
| Senha | Caixa de Texto | Mínimo 8 caracteres |   |

**Inserir dados do atleta**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Esportes | Múltipla escolha | Pelo menos 1 |  

**Inserir dados do locatário**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Contato | Número |  |  |
| Chave pix | Caixa de Texto |  |  |

#### Processo 2 – Cadastrar quadra

**Inserir dados do estabelecimento**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Nome da quadra | Caixa de texto | Mínimo 8 digítos |  |
| CEP | Número | Mínimo 8 digítos |  |
| Número da quadra | Número |  |  |
| Esportes suportados | Seleção múltipla | Pelo menos 1 |  |
| Datas disponiveis | Data |  |  |
| Horários disponiveis | Seleção múltipla |  |  |
| Capacidade | Número |  |  |
| Preço de aluguel | Número |  |  |

#### Processo 3 - Criar ou entrar em um time

**Escolher esporte**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Esporte | Seleção única |  |  |

**Criar Time**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Nível de experiencia | Seleção única | Obrigatório  |  |
| Vagas disponíveis | Número | Obrigatório |  |

**Escolher Time** 

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Time | Seleção Única |  |  |

**Inscrever em um time**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Increver time | Seleção Única |  |  |

#### Processo 4 - Criar ou entrar em uma partida

**Escolher esporte**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Esporte | Seleção única |  |  |

**Selecionar time**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Time | Seleção única |  |  |

**Ingressar na partida**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Ingressar | Link |  |  |

**Informar dados da partida**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Número de Participantes | Número | Obrigatório |  |
| Tempo de Jogo | Número | Obrigatório |  |
| Horário de Realização | Data | Obrigatório |  |

**Escolher quadra**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Quadra | Seleção única |  |  |

**Confirmar agendamento**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Confirmar agendamento | Seleção única |  |  |

#### Processo 5 – Realizar pagamento

**Escolher a(s) partida(s)**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Partidas | Múltipla escolha | Pelo menos 1 |  |

**Escolher forma de pagamento**

**Enviar o comprovante**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Comprovante | Arquivo |  |  |

**Averiguar o comprovante**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Confirmação do comprovante | Seleção única |  |  |

**Informar o motivo**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Motivo | área de texto | Obrigatório quando o comprovante é recusado |  |


#### Processo 6 – Avaliar Participantes

**Escolher atleta**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Atleta | Seleção única | Obrigatório |  |


**Avaliar atleta**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Habilidade | Número | Intervalo: [0,10] (Obrigatório) |  |
| Conduta Esportiva   |  Número  |  Intervalo: [0,10] (Obrigatório) | |
| Comentários   |  Área de texto  |     |

### 4.2. Tecnologias

Descreva qual(is) tecnologias você vai usar para resolver o seu problema, ou seja implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas. Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## 5. Modelo de dados

![TabelaRelacional drawio](https://user-images.githubusercontent.com/90854173/163626441-10a623aa-1eb4-4cc1-985b-4ac554b1a316.svg)


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




