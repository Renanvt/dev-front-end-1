* # [Comandos html](#Lista-de-tags-adicionais)
* # [Inserção de áudio](#Audio)
* # [Inserção de video](#Video)
* # [Comandos CSS](#Comandos-css)

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
| `Formtarget` |         Parâmetro para definir destino **BLANK**, **SELF**, **_PARENT** e **TOP**. |
| `Width e Height` |      Largura e altura de campo do formulário (% ou px). |
| `List`  |      Referência a **DATALIST** onde um elemento `<li` com nome ID se associe a ID. |   
| `Multiple` |        Permite que o usuário selecione mais de um item em elemento. |
| `Pattern` |    Cria restrições por expressões regulares: `<input pat-tern=”[0-9]{3}” name=”digito” required title=”Validação de Dados”/>`. |
|  `Placeholder` |     Define ajuda para o usuário preencher campo com os dados corretos. |
|  `Step`    |    Utilizado com tipos **DATETIME**, **TIME**, **DATE**, entre outros, para salto em intervalos numéricos. |
|  `Required`  |      Dentro de um elemento INPUT torna o campo (validação ativada). |
| `ENCTYPE=”APPLICATION/X-WWW-FORM-URLENCODED”` | Define o método de encriptação de dados utilizado no envio de dados. |
| `ACCEPT-CHARSET=”UTF-8859”` | Define o conjunto de caracteres ASCII aceitos no preenchimento do formulário |
| `Action` | Indica que, quando submetido, o formulário enviará dados ao local indicado entre aspas, sendo, normalmente, um servidor PHP para tratamento dos dados ou um e-mail. |
| `Post` |  Outro parâmetro de `<FORM>` para definir o envio mais seguro dos dados sem exibição deles no endereço indicado na barra de endereços do navegador, ao passo que “GET” exibe esses dados na barra e não se preocupa com o ocultamento de dados |
| `Onclick` | é um parâmetro para indicar uma ação para um clique do mouse, podendo exibir informações em caixas de mensagem. |
        
       

# Listagem de tags formulários
| Atributo | Significado |
| ------ | ------ |
| **BUTTON** | Cria botões de ação em formulários  |
| **LABEL** | é a tag essencial para criação dos campos do formulário e utiliza parâmetros como `INPUT TYPE=”SEARCH”`, que define o tipo do campo que será criado, e `NAME=”CAMPO”`, que indica um nome que é extremamente importante para o posterior tratamento dos dados por um código PHP, por exemplo. |
|      **CHECKBOX**   | Cria opção do tipo SIM/NÃO, estando ou não em agrupamento|
|        **COLOR**  | Parâmetro de cor para campos|
|       **DATE**  |  Cria campo do tipo data|
|       **DATETIME**  |  Cria campo do tipo data e hora|
|        **DATETIME-LOCAL** | Cria campo do tipo data, hora e local|
|        **EMAIL**  | Cria campo para entrada de e-mail   | 
|        **FILE**  |  Cria campo para inclusão de arquivo |
|        **HIDDEN** | Parâmetro para ocultamento de campo |
|        **IMAGE**  | Cria campo para inclusão de imagem |
|        **MONTH** |  Cria campo para entrada de mês |
|        **NUMBER** | Cria campo para entrada de número |
|        **PASSWORD**  |  Cria campo para entrada de senha usando caracter * |
|        **RADIO**  | Cria campo do tipo múltipla escolha em agrupamento |
|        **RANGE**  | Parâmetro que define limites para a digitação de valores |
|        **RESET**  | Parâmetro **TYPE** de botão para limpar o formulário |
|        **SEARCH** | Cria campo de pesquisa |
|       **SUBMIT** | Parâmetro **TYPE** de botão para enviar o formulário |
|        **TEL**   |  Cria campo para inserção de número de telefone |
|       **TEXT**   | Cria campo de texto |
|       **TIME**  |  Cria campo para entrada de hora |
|       **URL**   |  Cria campo de entrada de endereço eletrônico (formato URL) |
|       **WEEK**  |  Cria campo para entrada de dia da semana |
|       **DATALIST**  |  Cria uma lista de opções para um campo |
|       **OPTION**   |   Parâmetro para definição do tipo de campo de agrupamento |
|       **VALUE**    |   Parâmetro para definição de valor padrão de um campo |
        
# Audio

| Atributo | Significado |        
| ------ | ------ |
| `autostart` | Define se o som começará imediatamente, assim que a página abrir. Você pode ter um valor de verdadeiro ou falso aqui |
| `volume` | Pode ter qualquer valor de 1 a 100. |
| `autoplay` | Define que o audio começará a ser tocado assim que ele estiver pronto. |
| `controls` | Os controles serão mostrados. |
| `src` |  	URL do arquivo a ser tocado. |
| `loop` | Define que o audio começará a ser tocado novamente quando terminar. |

```
<audio src="/test/audio.ogg">
<p>Seu nevegador não suporta o elemento audio.</p>
</audio>
```

```
<audio src="audio.ogg" controls autoplay loop>
<p>Seu navegador não suporta o elemento audio </p>
</audio>
```

```
<audio src="audio.mp3" preload="auto" controls></audio>
```

![CombatibilidadeAudio](../HTML5/img/CombatibilidadeAudio.png )
![CombatibilidadeAudio2](../HTML5/img/CombatibilidadeAudio2.png)   

# Video   
| Atributo | Valores | Significado |        
| ------ | ------ | ------ |
| `preload` | `"none"`,  `"auto"` e `"metadata"` | não carrega o arquivo, carrega o arquivo e carrega apenas os meta dados do arquivo respectivamente | 
| `poster` | |especifica a imagem que será exibida antes do início da reprodução. Mais precisamente, antes da definição do formato que o navegador pode reproduzir |
| `<object>` | | diz ao navegador o que fazer se nenhum dos formatos não puder ser reproduzido. No nosso caso, o navegador tenta abrir o vídeo no flash player. Em caso de falha, dê uma mensagem de que o formato não é suportado. |

```
<video src="http://v2v.cc/~j/theora_testsuite/320x240.ogg" controls>
  Seu navegador não suporta o elemento <code>video</code>.
</video>
```

```
<video controls>
  <source src="foo.ogg" type="video/ogg">
  <source src="foo.mp4" type="video/mp4">
  Seu navegador não suporta o elemento <code>video</code>.
</video>
```
Aqui é especificado que o vídeo usa os codecs Dirac e Speex. Se o navegador suportar Ogg, mas não suportar os codecs especificados, o vídeo não será reproduzido.

```
<video controls>
  <source src="foo.ogg" type="video/ogg; codecs=dirac, speex">
  Seu navegador não suporta o elemento <code>video</code>.
</video>
```

[Como inserir um vídeo do YouTube](../HTML5/video/README.md)

![CombatibilidadeVideo](../HTML5/img/CombatibilidadeVideo.png)      
           
# Comandos CSS

## Comandos essenciais
| Comandos | Significado |        
| ------ | ------ |
| `background` |Ajusta todas as propriedades de fundo de uma vez |
| `background-color` | Ajusta as propriedades da cor de fundo |
| `background-image` |Ajusta as propriedades da imagem de fundo. |
| `background-repeat` | Ajusta as propriedades da repetição da imagem de fundo. |
| `background-attachment` |  Ajusta as propriedades da rolagem da imagem de fundo. |
| `background-position` |Ajusta as propriedades da posição da imagem de fundo. |
| `border` | Ajusta todas as propriedades de borda de uma vez |
| `border-bottom` | Ajusta as propriedades de borda de baixo de uma vez
-**color** – ajusta a cor da borda
-**style** – ajusta o tipo da linha de borda
-**width** – ajusta a largura da linha de borda|
| `border-top` | Ajusta as propriedades de borda de cima de uma vez
-**color** – ajusta a cor da borda
-**style** – ajusta o tipo da linha de borda
-**width** – ajusta a largura da linha de borda |
| `border-left` | Ajusta as propriedades de borda da esquerda de uma vez
-**color** – ajusta a cor da borda
-**style** – ajusta o tipo da linha de borda
-**width** – ajusta a largura da linha de borda |
| `border-right` | Ajusta as propriedades de borda da direita de uma vez
-**color** – ajusta a cor da borda
-**style** – ajusta o tipo da linha de borda
-**width** – ajusta a largura da linha de borda. |
| `margin` | Ajusta todas as bordas do elemento de uma vez |
| `margin-top` | Ajusta as margens de cima do elemento |
| `margin-right` | Ajusta as margens da direita do elemento. |
| `margin-bottom` |  Ajusta as margens de baixo  do elemento |
| `margin-left` | Ajusta as margens da esquerda do elemento. |
| `padding` |Ajusta o espaçamento entre borda e conteúdo |
| `padding-top` | Ajusta o espaçamento entre borda de cima e conteúdo |
| `padding-right` | Ajusta o espaçamento entre borda da direita e conteúdo. |
| `padding-bottom` |  Ajusta o espaçamento entre borda de baixo e conteúdo. |
| `padding-left` | Ajusta espaçamento entre borda da esquerda e conteúdo |
| `color` |  Ajusta a cor do texto de um elemento (texto, tabela, etc.) |
| `text-align` | Ajusta o espaçamento horizontal do texto de um elemento |
| `text-decoration` | Permite destacar textos com linhas usando as opções: **overline**: linha sobre; **line-through**: linha riscando o texto; **underline**: linha abaixo do texto |
| `text-transform` | Modifica os caracteres do texto usando as opções: **uppercase**: maiúsculas; **lowercase**: minúsculas; **capitalize**: letra capitular |
| `line-height` | Ajusta o espaçamento entre linhas de texto |
| `text-shadow` | Adiciona o efeito de sombra a um texto. |
| `font-family` | Permite a escolha de fontes para texto |
| `font-style` | Ajusta efeitos entre texto normal ou italic (itálico) |
| `font-weight` | Ajusta efeitos entre texto normal ou bold (negrito) |
| `a:link` | Comando para configurar estilos para links não clicados |
| `a:visited` | Comando para configurar estilos para links já clicados. |
| `a:hover` | Comando para configurar estilos quando mouse em link|
| `a:active` | Comando para configurar estilos quando link é clicado |
| `list-style-type` | Seletor para criar tópicos em listas usando opções como:square (quadrado), circle (círculo), upper-roman (números romanos), lower-alpha (letras) |
| `list-style-image` |Utiliza imagens gravadas como marcadores em listas |

## Comandos complementares
| Comandos | Significado |        
| ------ | ------ |
| `border` | Ajusta bordas para tags `<table>`, `<th>` e `<td>` em tabelas|
| `border-collapse` | Esse seletor permite deixar a borda simples (‘collapse’)|
| `width` | Seletor para largura de elementos (tabela, div -% ou px) |
| `height` | Seletor para altura de elementos (tabela, div - % ou px) |
| `vertical-align` |  Assim como text-align, ajusta posição do texto (vertical) |
| `padding` | Seletor para ajuste da distância entre borda e texto |
| `outline` | Seletor para estilo, largura e cor de linha ao redor de div |
| `outline-style` | Define estilo de linha ao redor de um box (div), usando **dotted** (pontilhada), **dashed** (tracejada), **solid** (simples), **double** (dupla), **groove**, **ridge**, **inset**, **outset** (bordas 3d), **none** (nenhuma), **hidden** (oculta). |
| `outline-width` | Seletor para a largura da linha ao redor da div|
| `outline-color` | Seletor para a cor da linha ao redor da div |
| `outline-width` | Seletor para a largura da linha ao redor da div|
| `max-width` | Seletor para definir limite máximo para largura de um div |
| `max-height` | Seletor para definir limite máximo para altura de um div |
| `min-width` | Seletor para definir limite mínimo para largura de um div |
| `min-height` | Seletor para definir limite mínimo para altura de um div |
| `z-index` | Seletor para posicionamento de objetos em camadas (-1) |
| `float` | Serve para posicionar elementos em relação a outros |
| `clear` | Seletor para anular o efeito do seletor float |
| `clear` | Seletor para anular o efeito do seletor float |
| `clearfix` | Classe que pode ser usada para ajustar elementos de forma a se organizarem com o parâmetro **overflow: auto**|
| `floating-box` | Caixas para alocar elementos soltos de tamanho variado|
| `after-box` | Limpa ajustes feitos por floating-box (**clear: left;**) |
| `margin` | Seletor para posicionamento de elementos (**margin: auto;**) |
| `position` | Seletor para posicionamento definido por parâmetros: 
**position: absolute;** para dimensões e posição exatas 
**position: relative;** para ajustes proporcionais a janela|
| `opacity` |Propriedade de transparência entre 0 e 1 (**opacity: 0.4;**)|

## Parâmetros adicionais para CSS 3

| Comandos | Significado |        
| ------ | ------ |
| `border-radius` | Propriedade para arredondamento de cantos pela ordem: **sup. esquerdo** , **sup. direito**, **inf. esquerdo**, **inf. direito** |
| `border-image` |Propriedade para uso de imagem para compor borda|
| `background-image` | Permite múltiplas imagens como fundo em camadas |
| `background-size` | Propriedade para ajustar o tamanho do plano de fundo (**background-size: contain;** ou **background-size: cover;**) |
| `background-origin` |  Propriedade para especificar a posição do plano de fundo
**border-box**: Plano de fundo inicia no canto sup. esquerdo
**padding-box**: Plano de fundo inicia dentro da borda
**content-box**: Plano de fundo inicia junto com o texto |
| `background-clip` | Propriedade para especificar a posição da cor de fundo
**border-box**: Cor de fundo inicia no canto sup. esquerdo
**padding-box**: Cor de fundo inicia dentro da borda
**content-box**: Cor de fundo inicia junto com o texto|
| `rgba` | Define cores e transparência (**cor**, **% saturação**, **% brilho**)
315º 360º/0º 45º
270º      90º
225º 180º 135º|
| `hsla` | Ajustes de **cor**, **saturação**, **luminosidade** e **transparência** em valores de *0* a *360*, *0%* a *100%*, *0%* a *100%* e *0* a *1* |
| `linear-gradient` | Propriedade de ajuste de background em gradiente linear
Direção: **left-top**, **to bottom right**, **to right**, **to left**, etc (*0º a 360º*), *Cor inicial*, *Cor final* |
| `radial-gradient` | Propriedade de ajuste de background em gradiente radial Forma: **circle**, **closest-side**, **farthest-side**, **closest-corner**, **farthest-cor-ner**, **cores** (nome) e **porcentagens** (%)|
| `text-shadow` | Propriedade que cria sombra em texto com seus atributos *Distância horizontal*, *Distância vertical*, *efeito borrar*, *cor* |
| `box-shadow` | Cria uma sombra em caixas div (*tamanho*, *borrar*, *cor*) |
| `transform` | *Efeitos 2D* em elementos a partir de parâmetros diversos:
**translate()** move o elemento horizontal e verticalmente (px)
**rotate()** gira um elemento horário/anti-horário (deg ou –deg)
**scale()** aumenta ou reduz o tamanho de um element (valor)
**skewX()** inclina um element de acordo com o ângulo (deg)
**skewY()** inclina um element de acordo com o ângulo (deg)
**matrix()** agrupa todos os métodos acima em valores |
| `transform` | *Efeitos 2D* em elementos a partir de parâmetros diversos:
**rotateX()** gira sobre o eixo central X o elemento (deg)
**rotateY()** gira sobre o eixo central Y o elemento (deg)
**rotateZ()** gira sobre o eixo central Z o elemento (deg)
**translate3d()** define um movimento em 3D (x,y,z)**scale3d()** aumenta ou reduz em 3D (x,y)
**rotate3D** gira o elemento (x,y,z,ângulo)**perspective()** visão perspectiva de um elemento (n) |
| `transition` | Ajuste de parâmetros para controlar efeitos de animação **transition: width 2s, height 4s;** (modifica largura e altura) |
| `transition-timing-function` | Ajustes no tempo de execução dos efeitos
**ease**: início lento, accelerando e reduzindo no final
**linear**: do início ao fim com a mesma velocidade
**ease-in**: início lento da transição
**ease-out**: final lento da transição
**cubic-bezier(n,n,n,n)**: ajustes na curva de transição |
| `transition-delay` | Ajusta um tempo de espera para início da transição |
| `column-count` | Divide o conteúdo de um elemento em colunas (valor) |
| `column-gap` | Define a distância entre as colunas definidas (px) |
| `column-rule-style` | Define o estilo da linha divisória entre colunas (solid) |
| `column-rule-width` | Define a espessura da linha divisória entre colunas (px) |
| `column-rule-color` | Define a cor da linha divisória entre colunas (nome) |
| `column-rule` | Agrupa as definições para divisão de elementos em colunas|
| `column-span` |Mescla colunas divididas **(column-span: all;)**|
| `column-width` | Especifica a largura preferencial para colunas (px)|
| `filter` | Seletor para ajuste de filtros para tratamento de imagens.
**None**: retira efeitos ativados
**blur()**: Embaça a imagem (%)
**brightness()**: Brilho da imagem (%)
**contrast()**: Ajusta contraste (%)
**drop-shadow()**: Sombra  na imagem (Horiz, Vert, blur, cor)
**grayscale()**: Converte a imagem em tons de cinza (%)
**hue-rotate()**: Matiz da imagem (deg) |
| `filter` | **invert()**: Inverte as cores da imagem no estilo negative (%)
**opacity()**: Transparência da imagem (%)
**saturate()**: Saturação da imagem (%)
**sepia()**: Converte a imagem no estilo envelhecida (%) |



Em geral, os comandos CSS são chamados seletores e seguem uma sintaxe como a do exemplo a seguir:
`SELETOR {PROPRIEDADE:VALOR; PROPRIEDADE:VALOR;}`

Um arquivo contendo os seletores de estilo CSS deve ser gravado em um arquivo de texto com a extensão .CSS e deve ser adicionado a um código HTML por meio da tag `<LINK>`, dentro do cabeçalho `<HEAD>`, como no exemplo:
```
        <head>
               <link rel=”stylesheet” type=”text/css” href=”estilo.css”>
        </head> 
```

É possível também utilizar um estilo CSS para configurar apenas uma tag html, tendo validade, apenas, enquanto a tag estiver ativa, como no exemplo a seguir:

```
 <h1>style=”color:blue;margin-left:30px;”>Texto</h1>
```
 
 HTML5 introduziu um método para permitir que web designers possam as-sumir o controle sobre a janela de exibição, por meio do `<meta>` tag.
    Você deve incluir o elemento `<meta>` dentro da área de cabeçalho `<HEAD>` para indicar as propriedades de exibição em todas as suas páginas web:
```
 <meta name=”viewport” content=”width=device-width, initial-scale=1.0”>
```
 Um `<meta>` elemento viewport dá as instruções do navegador sobre como controlar dimensões e escalonamento da página.
    A largura = largura do dispositivo parte define a largura da página a seguir à tela de largura do dispositivo (que irá variar dependendo do dispositivo).
    A escala inicial = 1,0 parte define o nível de zoom inicial, quando a página é carregada pela primeira vez pelo browser.
    
## Ter diferentes medidas para ajustar tamanho de fonte é útil?

Imagine um site mobile ou um site para telas maiores ou projeções. Ao invés de você mudar as fontes para cada elemento, é possível ajustar diretamente o tamanho da fonte padrão para cada tag HTML de texto.

Exemplo de código para ajuste de tamanho da fonte

```
body {font: 100% verdana, arial, sans-serif;}

h1{  font-size: 2.50em;}

h2{  font-size: 1.50em;}

p{  font-size: 0.8em;}
```
> Fonte:Unicesumar

Mudando o valor de porcentagem da FONT do elemento BODY, proporcionalmente, a fonte e todo conteúdo padrão da página são ajustados.

Outra unidade chamada REM também pode ser utilizada para referenciar ta-manho de fonte e funciona de maneira proporcional a medidas em pixels. A figura 11 mostra um exemplo de código utilizando essa unidade de medida.

Exemplo de código para ajuste de tamanho da fonte
```
body {font: 100% verdana, arial,sans-serif;}
h1 {  font-size: 3.00rem;}
h2 {  font-size: 2.00rem;}
p {  font-size: 1.50rem;}
```
> Fonte: Unicesumar

Alguns  navegadores  podem  ter  problemas  com  essas  unidades,  mas  isso  ocorre  mais  com  navegadores  antigos,  em  que  é  interessante  o  uso  de  PX  ou porcentagem mesmo como unidade padrão.
