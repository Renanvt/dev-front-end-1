
# Lista de tags adicionais

| Tag | Significado |
| ------ | ------ |
| `<article>` |Espaço na página para algum conteúdo independente, como texto, formulário.|
| `<aside>` | Conteúdo relacionado com a página. |
| `<command>`| Botão, radiobutton ou checkbox para formulários. |
|`<details>` | Detalhamento de uma parte da página. |
| `<summary>` | Capitular ou sumário dentro da tag `<details>`. |
| `<figure>` | Legenda em uma imagem ou vídeo. |
| `<legend>` | Fará a inserção de um texto título para o conjunto de campos, permitindo melhor compreensão do agrupamento. |
| `<fieldset>` |  delimita um conjunto de campos, agrupando para posterior envio em conjunto por meio da tag `<BUTTON>` |
| `<figcaption>` | Legenda da figura em uma seção. |
| `<footer>` | Rodapé de um documento ou seção, podendo incluir: data, autor, contatos e direitos autorais. |
| `<header>` |Usado para introduzir um documento ou seção e pode conter o elemento |
| `<nav>` | para inclusão de links de navegação. |
| `<hgroup>` | Cria títulos e subtítulos a partir de tags `<h1>` a `<h6>`, em que o maior é o título e os outros são subtítulos. |
| `<mark>` | Destacar textos. |
| `<meter>` | Medição. Usado quando existe valor máximo e mínimo conhecidos. |
| `<nav>` | Usado para uma seção de navegação por links (menu). |
| `<progress>` | Progresso de uma tarefa. |
| `<section>` | Seção de um documento, como capítulos, cabeçalhos, rodapés ou outras seções do documento. |
| `<time>` | Definição de tempo ou data. |
| `<wbr>` | Quebra de palavra. Para definir uma oportunidade de quebra de linha. |

# Lista de campos type

| Tag | Significado |
| ------ | ------ |
| `<color>` |mostra uma paleta de cores..|
| `<date>` | mostra um calendário para escolha de meses e anos.. |
| `<datetime>`|  ajusta data e hora. |
|`<datetime-local>` | data e hora local. |
| `<email>` | navegador valida o valor de um e-mail válido estando ativada a validação. |
| `<month>` |    mostra no campo opção para navegação entre meses. |
| `<number>` | valores “min” e “max” em intervalo de valores (step define valor para salto). |
| `<range>` |   cria botão estilo deslizante.|
| `<search>` |  usado para campos de pesquisa. |
| `<tel>` |   usado para preencher campos com número de telefone. |
| `<time>` | usado para mostrar a hora do sistema. |
| `<url>` |   cria campos para entrada de endereços de e-mail seguindo o padrão URL. |
| `<week>` | mostra campo formatado para escolha de dias de semana.A implementação desses elementos é feita usando a seguinte sintaxe: `<input type=“elemento” name=“nome_elemento”/>` |

# Listagem de atributos


| Atributo/Parâmetro | Significado |
| ------ | ------ |
| `Autocomplete` |    Habilita o auto complemento nos campos (on / off ). |
| `Novalidate` |      Ativa ou desativa validação de campos se ativado (on / off ). |
| `Autofocus`  |     Foca o campo após página ser carregada pelo navegador. |
| `Formaction`  |    Substitui ACTION no formulário com URL válida para onde enviar os dados quando o formulário for submetido. |
| `Formmethod`  |    Substitui METHOD no formulário e define o método HTTP para o envio de dados para o URL usando GET, POST, PUT ou DELETE. |
| `Formnovalidate` |      Substitui NOVALIDATE no formulário sendo TRUE para não validar. |
| `Formtarget` |         Parâmetro para definir destino BLANK, SELF, _PARENT e TOP. |
| `Width e Height` |      Largura e altura de campo do formulário (% ou px). |
| `List`  |      Referência a DATALIST onde um elemento `<li` com nome ID se associe a ID. |   
| `Multiple` |        Permite que o usuário selecione mais de um item em elemento. |
| `Pattern` |    Cria restrições por expressões regulares: `<input pat-tern=”[0-9]{3}” name=”digito” required title=”Validação de Dados”/>`. |
|  `Placeholder` |     Define ajuda para o usuário preencher campo com os dados corretos. |
|  `Step`    |    Utilizado com tipos DATETIME, TIME, DATE, entre outros, para salto em intervalos numéricos. |
|  `Required`  |      Dentro de um elemento INPUT torna o campo (validação ativada). |
| `ENCTYPE=”APPLICATION/X-WWW-FORM-URLENCODED”` | Define o método de encriptação de dados utilizado no envio de dados. |
| `ACCEPT-CHARSET=”UTF-8859”` | Define o conjunto de caracteres ASCII aceitos no preenchimento do formulário |
| `Action` | Indica que, quando submetido, o formulário enviará dados ao local indicado entre aspas, sendo, normalmente, um servidor PHP para tratamento dos dados ou um e-mail. |
| `Post` |  Outro parâmetro de `<FORM>` para definir o envio mais seguro dos dados sem exibição deles no endereço indicado na barra de endereços do navegador, ao passo que “GET” exibe esses dados na barra e não se preocupa com o ocultamento de dados |
| `Onclick` | é um parâmetro para indicar uma ação para um clique do mouse, podendo exibir informações em caixas de mensagem. |
        
       

# Listagem de tags formulários
| Atributo | Significado |
| ------ | ------ |
| BUTTON | Cria botões de ação em formulários  |
| LABEL | é a tag essencial para criação dos campos do formulário e utiliza parâmetros como `INPUT TYPE=”SEARCH”`, que define o tipo do campo que será criado, e `NAME=”CAMPO”`, que indica um nome que é extremamente importante para o posterior tratamento dos dados por um código PHP, por exemplo. |
|      CHECKBOX   | Cria opção do tipo SIM/NÃO, estando ou não em agrupamento|
|        COLOR  | Parâmetro de cor para campos|
|       DATE  |  Cria campo do tipo data|
|       DATETIME  |  Cria campo do tipo data e hora|
|        DATETIME-LOCAL | Cria campo do tipo data, hora e local|
|        EMAIL  | Cria campo para entrada de e-mail   | 
|        FILE  |  Cria campo para inclusão de arquivo |
|        HIDDEN | Parâmetro para ocultamento de campo |
|        IMAGE  | Cria campo para inclusão de imagem |
|        MONTH |  Cria campo para entrada de mês |
|        NUMBER | Cria campo para entrada de número |
|        PASSWORD  |  Cria campo para entrada de senha usando caracter * |
|        RADIO  | Cria campo do tipo múltipla escolha em agrupamento |
|        RANGE  | Parâmetro que define limites para a digitação de valores |
|        RESET  | Parâmetro TYPE de botão para limpar o formulário |
|        SEARCH | Cria campo de pesquisa |
|       SUBMIT | Parâmetro TYPE de botão para enviar o formulário |
|        TEL   |  Cria campo para inserção de número de telefone |
|       TEXT   | Cria campo de texto |
|       TIME  |  Cria campo para entrada de hora |
|       URL   |  Cria campo de entrada de endereço eletrônico (formato URL) |
|       WEEK  |  Cria campo para entrada de dia da semana |
|       DATALIST  |  Cria uma lista de opções para um campo |
|       OPTION   |   Parâmetro para definição do tipo de campo de agrupamento |
|       VALUE    |   Parâmetro para definição de valor padrão de um campo |
        
# Audio

| Atributo | Significado |        
| ------ | ------ |
| `autostart` | Define se o som começará imediatamente, assim que a página abrir. Você pode ter um valor de verdadeiro ou falso aqui |
| `volume` | Pode ter qualquer valor de 1 a 100. |
| `autoplay` | Define que o audio começará a ser tocado assim que ele estiver pronto. |
| `controls` | Os controles serão mostrados. |
| `src` |  	URL do arquivo a ser tocado. |
| `loop` | Define que o audio começará a ser tocado novamente quando terminar. |

`
<audio src="/test/audio.ogg">
<p>Seu nevegador não suporta o elemento audio.</p>
</audio>
`

`
<audio src="audio.ogg" controls autoplay loop>
<p>Seu navegador não suporta o elemento audio </p>
</audio>
`

`
<audio src="audio.mp3" preload="auto" controls></audio>
`

![CombatibilidadeAudio](HTML5/img/CombatibilidadedeAudio.png)
![CombatibilidadeAudio2](HTML5/img/CombatibilidadedeAudio2.png)   

# Video   
| Atributo | Valores | Significado |        
| ------ | ------ |
| `preload` | `"none"`,  `"auto"` e `"metadata"` | não carrega o arquivo, carrega o arquivo e carrega apenas os meta dados do arquivo respectivamente | 
| `poster` | especifica a imagem que será exibida antes do início da reprodução. Mais precisamente, antes da definição do formato que o navegador pode reproduzir |
| `<object>` | diz ao navegador o que fazer se nenhum dos formatos não puder ser reproduzido. No nosso caso, o navegador tenta abrir o vídeo no flash player. Em caso de falha, dê uma mensagem de que o formato não é suportado. |

`<video src="http://v2v.cc/~j/theora_testsuite/320x240.ogg" controls>
  Seu navegador não suporta o elemento <code>video</code>.
</video>` 


`
<video controls>
  <source src="foo.ogg" type="video/ogg">
  <source src="foo.mp4" type="video/mp4">
  Seu navegador não suporta o elemento <code>video</code>.
</video>
`
Aqui é especificado que o vídeo usa os codecs Dirac e Speex. Se o navegador suportar Ogg, mas não suportar os codecs especificados, o vídeo não será reproduzido.
`
<video controls>
  <source src="foo.ogg" type="video/ogg; codecs=dirac, speex">
  Seu navegador não suporta o elemento <code>video</code>.
</video>
`
#
[Como inserir um vídeo do YouTube
](HTML5/video/README.md)
 ![CombatibilidadeVideo](HTML5/img/CombatibilidadeDeVideo.png)       
           
# Comandos CSS

Em geral, os comandos CSS são chamados seletores e seguem uma sintaxe como a do exemplo a seguir:
`SELETOR {PROPRIEDADE:VALOR; PROPRIEDADE:VALOR;}`

Um arquivo contendo os seletores de estilo CSS deve ser gravado em um arquivo de texto com a extensão .CSS e deve ser adicionado a um código HTML por meio da tag `<LINK>`, dentro do cabeçalho `<HEAD>`, como no exemplo:
`
        <head>
               <link rel=”stylesheet” type=”text/css” href=”estilo.css”>
        </head> 
`

É possível também utilizar um estilo CSS para configurar apenas uma tag html, tendo validade, apenas, enquanto a tag estiver ativa, como no exemplo a seguir:

`
 <h1>style=”color:blue;margin-left:30px;”>Texto</h1>
 `
 
 HTML5 introduziu um método para permitir que web designers possam as-sumir o controle sobre a janela de exibição, por meio do `<meta>` tag.
    Você deve incluir o elemento `<meta>` dentro da área de cabeçalho `<HEAD>` para indicar as propriedades de exibição em todas as suas páginas web:
`
 <meta name=”viewport” content=”width=device-width, initial-scale=1.0”>
 `
 Um `<meta>` elemento viewport dá as instruções do navegador sobre como controlar dimensões e escalonamento da página.
    A largura = largura do dispositivo parte define a largura da página a seguir à tela de largura do dispositivo (que irá variar dependendo do dispositivo).
    A escala inicial = 1,0 parte define o nível de zoom inicial, quando a página é carregada pela primeira vez pelo browser.
    
## Ter diferentes medidas para ajustar tamanho de fonte é útil?

Imagine um site mobile ou um site para telas maiores ou projeções. Ao invés de você mudar as fontes para cada elemento, é possível ajustar diretamente o tamanho da fonte padrão para cada tag HTML de texto.

Exemplo de código para ajuste de tamanho da fonte

`
body {font: 100% verdana, arial, sans-serif;}

h1{  font-size: 2.50em;}

h2{  font-size: 1.50em;}

p{  font-size: 0.8em;}
`
Fonte:Unicesumar

Mudando o valor de porcentagem da FONT do elemento BODY, proporcionalmente, a fonte e todo conteúdo padrão da página são ajustados.

Outra unidade chamada REM também pode ser utilizada para referenciar ta-manho de fonte e funciona de maneira proporcional a medidas em pixels. A figura 11 mostra um exemplo de código utilizando essa unidade de medida.

Exemplo de código para ajuste de tamanho da fonte
`
body {font: 100% verdana, arial,sans-serif;}
h1 {  font-size: 3.00rem;}
h2 {  font-size: 2.00rem;}
p {  font-size: 1.50rem;}
`
Fonte: Unicesumar
Alguns  navegadores  podem  ter  problemas  com  essas  unidades,  mas  isso  ocorre  mais  com  navegadores  antigos,  em  que  é  interessante  o  uso  de  PX  ou porcentagem mesmo como unidade padrão.
