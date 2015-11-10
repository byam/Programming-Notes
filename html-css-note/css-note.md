# CSS note
* [セレクタ](#selecter)
    * [idセレクタ](#selecter_id)
    * [classセレクタ](#selecter_class)
    * [複数セレクタ](#selecter_plural)
    * [要点チェック](#selecter_check)
* [プロパティ](#property)
    * [backgroundプロパティ](#property_background)
    * [font-size](#property_fontsize)
    * [font-family](#property_fontfamily)
    * [text-align](#property_textalign)
    * [:hover](#property_giji)
    * [list-style](#property_liststyle)
* [レイアウトに利用するプロパテイ](#layout)
    * [borderプロパティ](#layout_border)
    * [paddingプロパティ](#layout_padding)
    * [marginプロパティ](#layout_margin)
    * [floatプロパティ](#layout_float)
    * [positionプロパティ](#layout_position)
    * [displayプロパティ](#layout_display)
    * [CSSでレイアウトをする時に使うもの](#layout_css)

## HTMLにスタイルシートを読み込む
```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

<a name="selecter"></a>
## セレクタ
セレクタの構造は、セレクタ/プロパティ/値からなっています。

基本の形は「セレクタ { プロパティ: 値; }」となり、セレクタ構造を示すために{}を、プロパティの値を指定する場合は、:を使い、値の最後には;を書きます。

### HTML tagセレクタ
test.html
```html
<p>このサイトは、●●です。</p>
```

style.css
```css
p {
 color: red;
}
```

<a name="selecter_id"></a>
### idセレクタ
HTMLの特定の要素にID属性をつけ、それを目印にして、スタイルを適用するものです。HTMLではid="xxx"とID名(xxx)をつけ、CSSでは、#xxxとシャープの後にID名を指定します。

test.html
```html
<h1 id="title">サイト名</h1>
```

style.css
```css
#title {
  color: blue;
}
```


<a name="selecter_class"></a>
### classセレクタ
全てのhtmlタグにはclassという属性を付与することができます。これは、あるhtml要素に対してつける識別子です。
class属性は、HTMLの文章の中で何度も使うことができます。
HTMLでは、class="xxx"(xxx)と書きますが、CSSでは、「.xxx」とピリオドの後にclass名を指定します。

特定の要素にスタイルを適用したい場合、基本的にはその要素にclassで名前をつけて、cssファイルでclassを指定して装飾をしていきます。idを利用しないのは、idだと1箇所しか指定できないためです。同じ指定をしたい要素が複数ある時に使い勝手が良くありません。

test.html
```html
<h2 class="subtitle">ようこそ サイト名 へ</h2>
<h3 class="subtitle">氏名</h3>
```

style.css
```css
.subtitle {
color: orange;
}
```

<a name="selecter_plural"></a>
### 複数セレクタ
複数の要素、例えばh1とpに同じスタイルを適用したい場合は、セレクタに要素を複数書き、カンマ(,)でつなぎます。

test.html
```html
<h4>好きな言葉</h4>
<blockquote>
  好きな言葉
</blockquote>
```

style.css
```css
h4, blockquote {
color: green;
}
```

<a name="selecter_deep"></a>
### 要素の中の要素にスタイルを適用
例えば、p要素の中のstrong要素にスタイルに適応したい場合は、セレクタの間にスペースを入れることでpの中のstrongという指定が可能になります。
test.html
```html
<p><strong>21歳</strong>です。</p>
```

style.css
```css
p strong {
color: blue;
}
```

<a name="selecter_check"></a>
### 要点チェック

* IDセレクタは、IDを付けたHTMLを目印にして、スタイルを適用するものです。 同一のIDは、HTMLの文章の中で１度しか使えません。
* classセレクタは、classを付けたHTMLを目印にして、スタイルを適用するものです。 classは、HTMLの文章の中で複数回使えます。
* 複数セレクタは、同じスタイルを他のセレクタに指定するときは、セレクタの間にカンマを入れます。
* 要素の中の要素にスタイルを適用したいときは、セレクタの間にスペースを入れます。

<a name="property"></a>
## プロパティ

<a name="property_background"></a>
### backgroundプロパティ
背景を指定するには、backgroundプロパティを使用します。
backgroundは、背景を指定します。背景色や、背景画像などが指定できます。派生していくつかのプロパティが存在するので以下で簡単に説明します。

* background-position

    backgroundプロパティの一種です。背景画像の表示の起点を設定できます。

* background-repeat

    デフォルトでは、設定した背景画像の大きさが表示領域以下だった場合、残りの部分は設定した画像を繰り返すことで覆い尽くされます。こちらの値をnoneに設定すると、繰り返しをさせないようにできます。

* background-attachment

    背景画像の固定、非固定を設定できます。値をfixedとすると背景画像が固定され、表示領域がまるで窓のような役割を果たします(表示領域部分を通して固定された背景画像の一部を見られる)。

test.html
```html
<table>
  <tr>
    <th>順位</th>
    <th>県</th>
    <th>ゆるきゃら</th>
  </tr>
  <tr>
    <td>1</td>
    <td>ぐんま</td>
    <td>ぐんまちゃん</td>
  </tr>
  <tr>
    <td>2</td>
    <td>埼玉県</td>
    <td>ふっかちゃん</td>
  </tr>
  <tr>
    <td>3</td>
    <td>愛媛</td>
    <td>みっきゃん</td>
  </tr>
</table>
```

style.css
```css
table td {
  background-color: #ECF0F1;
}
table th {
  background-image: url(画像のパス);
  background-position: left center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
```



<a name="property_fontsize"></a>
### font-sizeプロパティ
文字サイズを指定するには、font-sizeプロパティを使用します。
単位は`px, em, %`などです。

|
- | -
px | ピクセル単位での大きさ指定。
em | 1文字分を表している単位です。フォントサイズを指定しなければブラウザの初期設定の16px分の大きさになります。
%  | １文字分のサイズを％で指定できます。16pxで100%であれば100%は16pxとなります。

test.html
```html
<h3>氏名</h3>
<p><strong>21歳</strong>です。</p>
<p>千葉県出身で、千葉県に住んでいます。<em>よろしくお願いします！</em></p>
```

style.css
```css
body {
font-size: 12px;
}
```


<a name="property_fontfamily"></a>
### font-familyプロパティ
ワードなどで使用しているフォントを指定することができます。ただし、自分のPCにしか入ってないフォントを指定しても、相手には見られません。

指定できるフォントには種類があり、

* サンセリフ体sans-serif
* セリフ体serif
* 等幅フォントmonospace
* 装飾体fantasy
* 手書き体cursive

の5種類があります。

test.html
```html
<div class="sans-serif">
<h2>sans-serif</h2>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
</div>
<div class="serif">
<h2>serif</h2>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
</div>
<div class="monospace">
<h2>monospace</h2>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
</div>
<div class="fantasy">
<h2>fantasy</h2>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
</div>
<div class="cursive">
<h2>cursive</h2>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
</div>
```

style.css
```css
.sans-serif {
font-family: sans-serif;
}
.serif {
font-family: serif;
}
.monospace {
font-family: monospace;
}
.fantasy {
font-family: fantasy;
}
.cursive {
font-family: cursive;
}
```


<a name="property_lineheight"></a>
### line-heightプロパティ
単位は不要で数値のみで指定します。
数値を3とすると、文字の大きさの300%になります。

test.html
```html
<h3>氏名</h3>
<p><strong>21歳</strong>です。</p>
<p>千葉県出身で、千葉県に住んでいます。<em>よろしくお願いします！</em></p>
```

style.css
```css
p {
line-height: 3;
}
```


<a name="property_textalign"></a>
### text-alignプロパティ
下記例では、pにclassをつけて指定をしていますが、試しにbody要素に対して、left,center,rightの値を試してみましょう。

test.html
```html
<p class="left">
吾輩は猫である。名前はまだ無い。<br>
 どこで生れたかとんと見当けんとうがつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。
</p>

<p class="center">
吾輩は猫である。名前はまだ無い。<br>
 どこで生れたかとんと見当けんとうがつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。
</p>

<p class="right">
吾輩は猫である。名前はまだ無い。<br>
 どこで生れたかとんと見当けんとうがつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。
</p>
```

style.css
```css
.left {
text-align: left;
}
.center {
text-align: center;
}
.right {
text-align: right;
}
```


<a name="property_giji"></a>
### 擬似要素
CSSのセレクタのあとに「:hover」や「:after」などと擬似要素をつけることで、CSSを拡張することができます。

例えば「a:hover」であれば、タグにマウスオーバーした際に適用されるプロパティを定義できます。

test.html
```html
<p><strong>21歳</strong>です。</p>
<a href="https://tech-camp.in/">TECH::CAMPのサイトへ</a>
```

style.css
```css
a:hover {
  color: blue;
}
```


<a name="property_liststyle"></a>
### list-style
リストの時に●が付きますが、レイアウトやデザインする時に、邪魔になる場合があります。その場合は、●を削除することができます。

test.html
```html
<ul>
    <li>list1</li>
    <li>list2</li>
</ul>
```

style.css
```css
li {
  list-style: none;
}
```

<a name="layout"></a>
## レイアウトに利用するプロパテイ

### widthプロパティ
要素の幅を指定するプロパティです。数値は、`px/pt/em/%`などを指定します。

test.html
```html
<img src="#" alt="">
```

style.css
```css
img {
width: 300px;
}
```

### heightプロパティ
要素の高さを指定するプロパティです。数値は、px/pt/em/%などを指定します。

test.html
```html
<img src="#" alt="">
```

style.css
```css
img {
height: 300px;
}
```


<a name="layout_border"></a>
### borderプロパティ
borderプロパティでは、幅・線の種類(solid/double/dottedなど)・色を指定することができます。

test.html
```html
<div>
  <h2>ゆるキャラランキング</h2>
</div>
```

style.css
```css
div {
  border: 2px solid #000;
}
```


<a name="layout_padding"></a>
### paddingプロパティ
内側に余白を指定するには、paddingプロパティを使用します。

上下左右全ての方向に同じ幅の余白を指定する場合は値を１つ指定すれば良いですが、方向によって余白の幅を分けたい場合は以下のように指定することができます。

指定方法  |  説明
- | -
padding: 1px;  | [上下左右]の余白をまとめて1pxに指定
padding: 1px 1px; |  [上下][左右]の余白をそれぞれ1pxに指定
padding: 1px 1px 1px; |  [上][左右][下]の余白をそれぞれ1pxに指定
padding: 1px 1px 1px 1px; |  [上][右][下][左]の余白をそれぞれ1pxに指定

test.html
```html
<div>
  <h2>ゆるキャラランキング</h2>
</div>
```

style.css
```css
div {
  padding: 20px;
}
```



<a name="layout_margin"></a>
### marginプロパティ
外側に余白を指定するには、marignプロパティを使用します。
指定方法は以下のとおりです。


test.html
```html
<div>
  <h2>ゆるキャラランキング</h2>
</div>
```

style.css
```css
div {
  margin: 20px;
}
```


<a name="layout_float"></a>
### floatプロパティ
指定された要素を左または右に寄せて配置する際に使用します。 後に続く内容は、その反対側に回り込みます。

test.html
```html
<ul>
  <li>読書</li>
  <li>映画鑑賞</li>
</ul>
```

style.css
```css
ul li {
  float: left;
}
```

### clearfix
擬似要素の :after を使ったものです。:afterは、ボックス内の末尾に新たなインラインボックスを作ることができます。:afterで作った新たなインラインボックスに対して、clear: both（回りこみ解除）とdisplay: block（ブロック要素）を指定することによって、回り込みを解除します。

### clearプロパティ
clearプロパティは、floatによって無くなる要素の高さを正常に戻してくれるプロパティです。手前の要素をfloatしたあと、floatによって回り込ませたくない要素に対して使います。
値は both とすることが多いです。

### displayプロパティ
displayプロパティは、要素の種類(ブロック要素、インライン要素)を変更することができるプロパティです。値には、変更したい要素の種類を取ります。

test.html
```html
<ul class="clearfix">
  <li>読書</li>
  <li>映画鑑賞</li>
</ul>
```

style.css
```css
.clearfix:after {
  content: "";
  clear: both;
  display: block;
}
```


<a name="layout_position"></a>
### positionプロパティ
要素の表示位置を調節できるプロパティです。

ボックスを重ねて配置したり、マウスカーソルを合わせた時に表示されるメニューを作ったりする時に使います。

値  | 説明
- |  -
static|  positionプロパティを指定していない場合のデフォルト値です。要素は通常の場所に配置されます。
relative|    相対位置の配置。本来表示されるはずの場所を基準とし、topプロパティなどで表示位置を調節します。
absolute |   絶対位置の配置。親要素にstaticが指定されてる場合は、ウィンドウの左上が基準位置になります。static以外が指定されている場合は、relativeなどの親要素の左上が基準位置です。
fixed  | 絶対位置の配置。スクロールしても位置が固定されます。

* topプロパティ

    top プロパティは、上からの配置位置を指定できます。

* rightプロパティ

    right プロパティは、右からの配置位置を指定できます。

* bottomプロパティ

    bottom プロパティは、下からの配置位置を指定できます。

* leftプロパティ

    leftプロパティは、左からの配置位置を指定できます。

* position: relative; の使い方

    relativeは、細かく位置をずらしたい時に使います。例えば、上に-5pxしたい場合には、topプロパティと合わせることによって、位置をずらすことができます。

* position: absolute; の使い方

    absoluteは、relative を親要素として使用する場合によく使います。
親要素にrelativeを指定した場合、親要素の位置から top, right, left, bottom を指定できます。

* position: fixed; の使い方

    fixedは、固定をすることができるので、ヘッダーを固定することによく使われます。

test.html
```html
<div class="position-static">position-static</div>
<div class="position-relative">position-relative</div>
<div class="position-absolute">position-absolute</div>
<div class="position-fixed">position-fixed</div>
```

style.css
```css
.position-static {
  position: static;
  background-color: #2ecc71;
}
.position-relative {
  position: relative;
  background-color: #9b59b6;
  top: 60px;
  left: 80px;
}
.position-absolute {
  position: absolute;
  background-color: #3498DB;
  top: 120px;
  left: 120px;
}
.position-fixed {
  position: fixed;
  background-color: #F1C40F;
  top: 20px;
  left: 20px;
}
```


<a name="layout_display"></a>
### displayプロパティ
ブロックレベル・インライン等の、要素の表示形式を指定する際に使用します。
例えば、display: block;とすればその要素をブロック要素にすることができ、display: inline;とするとインライン要素にすることができます。
display: none;とすると、指定した要素は消えてしまいます。
表示を隠しておいて、ボタンをクリックしたら表示するようなやり方の時に使用します。


<a name="layout_css"></a>
## CSSでレイアウトをする時に使うもの

### margin: auto;
幅を指定したボックスに対して、左右中央に配置することができます。

margin: auto;を使って、コンテンツ全体を左右中央にしてみましょう。

```css
div {
  width: 300px;
  margin: auto;
}
```

### max-width/max-heightプロパティ
最大の幅と高さの値を指定することができます。
最大の値を指定することによって、ブラウザの幅が小さくなっても自動的に小さくなります。

divのwidth: 300px;をmax-width: 300px;を指定して、最大の幅を設定しましょう。

```css
div {
  max-width: 300px;
}
```










