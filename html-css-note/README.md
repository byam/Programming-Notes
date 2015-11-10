# HTML note
* [Basics](#basics)
    * [構成](#basicsKousei)
    * [属性](#basicsZokusei)
    * [head要素](#basicsHead)
    * [body要素](#basicsBody)
    * [HTMLのコツ](#basicsGotsu)
* [HTML箱](#hako)
* [リスト](#list)
* [テーブル](#table)
* [フォーム](#form)
* [情報をまとめる要素](#divspan)
* [ヘッダーとフッターをあらわす要素](#headerfooter)

<a name="basics"></a>
## Basics

<a name="basicsKousei"></a>
### 構成
* HTMLの構造は、html,head,bodyからなっています。
* DOCTYPEは、文章がHTML文章であることを宣言するものです。
* meta charset=""は、文字コードを指定するものです。
```html
<!DOCTYPE HTML>
<html>
<head>
  <meta charset="UTF-8" />
  <title></title>
</head>
  <body>

  </body>
</html>
```

<a name="basicsZokusei"></a>
### 属性
属性の記入方法は以下です。

* 属性名は開始タグの中で、要素名の後に半角スペースで区切って記述します
* 基本的に属性値は「=」の後に、""(ダブルクォーテーション)で囲んで記述します
* 複数の属性を記述するには、半角スペースで区切って記述します
```html
<img src="image.jpg" alt="サンプル画像">
```

<a name="basicsHead"></a>
### head要素
* head要素にはHTMLサイトの情報を記述します。
* head要素には、title,link,meta,scriptといったものがあります。
* `<!--から-->` の間に文字を入れると、コメントアウトされてブラウザに表示されません。

要素名 | 用途
- | -
title要素  |サイトのタイトルを付ける
meta要素   |文章の情報を保存し、ブラウザや検索エンジン（Googleなど）に知らせるため
link要素   |スタイルシートを指定する
script要素   |  JavaScriptを指定する
```html
<!DOCTYPE HTML>
<html>
  <head>
  <!-- ここから -->
    <meta charset="UTF-8" />
    <title></title>
  <!-- ここまでにhead要素を書きます -->
  </head>
  <body>

  </body>
</html>
```

<a name="basicsBody"></a>
### body要素
* body要素は、コンテンツを入れる場所でブラウザ上で表示される。
* HTMLの要素を入れる場合は、body内に書いていく。
* htmlを書く時は、必ずインデントをする。
```html
<!DOCTYPE HTML>
<html>
<head>
  <meta charset="UTF-8" />
  <title>サイト名</title>
</head>
  <body>
  <!-- 主にここからコードを追記していきます -->



  <!-- ここまでの間にコードを書きます -->
  </body>
</html>
```


<a name="basicsGotsu"></a>
### HTMLのコツを知ろう
1. HTMLとは左上に重力のある積み木である
2. 積み木の一つ一つは中身によって大きさの変わる箱であり、入れ子構造になっている

<a name="hako"></a>
## HTMLの箱の種類〜ブロック要素とインライン要素
* ブロック要素は、ウェブページを構成する一つのブロックになる。
* インライン要素は、文字の一部のスタイルを適用するために使う。

値 |  説明
- | -
inline | インライン要素の場合、デフォルト値。ブロック要素をインライン要素にしたい場合に使用できます。
block | ブロック要素の場合、デフォルト値。インライン要素をブロック要素にしたい場合に使用できます。
inline-block | 表示形式として、インライン要素と同様だが、幅や高さ、外側の余白を指定することが出来る。

<a name="tagh"></a>
### h要素
headingの略で、見出しとして使われるブロック要素です。
h要素は、見出しのレベルがh1~h6まであり、h1が一番大きな見出しとなります。
```html
<h1>サイト名</h1>
<h2>ようこそ サイト名 へ</h2>
<h3>氏名</h3>
<h4>好きな言葉</h4>
<h5>趣味</h5>
<h6>好きな食べものランキング</h6>
```

<a name="tagp"></a>
### p要素
paragraphの略で、段落を示すブロック要素です。文章を書く際、段落を作る時に使います。
```html
<p>このサイトは、●●です。</p>
```
<p>このサイトは、●●です。</p>

<a name="tagbr"></a>
### br要素
文字を改行することができる要素です。
```html
<p>このサイトは、●●です。<br>ゆっくりしていってね！</p>
```
<p>このサイトは、●●です。<br>ゆっくりしていってね！</p>

<a name="tagstrong"></a>
### strong要素
特定の語句を強調するために使われるインライン要素です。テキストを囲うとテキストが太くなり、強調されます。
```html
<p><strong>21歳</strong>です。千葉県出身です。よろしくお願いします！</p>
```
<p><strong>21歳</strong>です。千葉県出身です。よろしくお願いします！</p>

<a name="tagem"></a>
### em要素
em要素を使って、文章の中で重要な部分を強調してみましょう
```html
<p>21歳です。千葉県出身です。<em>よろしくお願いします！</em></p>
```
<p>21歳です。千葉県出身です。<em>よろしくお願いします！</em></p>

<a name="tagblockquote"></a>
### blockquote要素
引用した文章であることを示す際に利用するブロック要素です。
```html
<p>好きな言葉</p>
<blockquote>
  好きな言葉を書こう！
</blockquote>
```
<p>好きな言葉</p>
<blockquote>
  好きな言葉を書こう！
</blockquote>


<a name="taghr"></a>
### hr要素
文章などの間に水平な罫線を引くことができます。hr要素はブロック要素です。
```html
<p>このサイトは、●●です。<br>ゆっくりしていってね！</p>
<hr>
<p>氏名</p>
```
<p>このサイトは、●●です。<br>ゆっくりしていってね！</p>
<hr>
<p>氏名</p>

<a name="tagimg"></a>
### img要素
画像を表示させるためのインライン要素です。
他の要素と異なり、画像のパスアドレス(src)、代替テキスト(alt)などを指定して利用します。
#### alt
視覚障害がある方がスクリーン リーダーを使用していたり、回線が遅く画像が見れない場合、altで指定したテキストが表示されます。
またGoogleなどの検索エンジンで、代替テキストの情報を使用して画像の検索を行えるようになります。
```html
<img src="https://pbs.twimg.com/profile_images/594423575697707008/gEb10V3o.png" alt="画像サンプル">
```
  <img src="https://pbs.twimg.com/profile_images/594423575697707008/gEb10V3o.png" alt="画像サンプル">


<a name="taga"></a>
### a要素
囲った文章をクリックすると特定のページにリンクするよう設定できるインライン要素です。
新しいタブ（ウィンドウ）にするときは、`target="_blank"`を指定します。
```html
<a href="http://angir.mn/" title="АНГИР.МН" target="_blank">АНГИР.МН</a>
```
<a href="http://angir.mn/" title="АНГИР.МН" target="_blank">АНГИР.МН</a>


<a name="list"></a>
## リストを作る

#### 順序のないリスト
```html
<ul>
  <li>趣味１</li>
  <li>趣味２</li>
</ul>
```
<ul>
  <li>趣味１</li>
  <li>趣味２</li>
</ul>

#### 順序のあるリスト
```html
<ol>
    <li>まぐろ</li>
    <li>ステーキ</li>
</ol>
```

<ol>
<li>まぐろ</li>
<li>ステーキ</li>
</ol>

#### 定義・説明リスト
```html
<dl>
    <dt>1月1日</dt>
    <dd>元日</dd>

    <dt>1月12日</dt>
    <dd>成人の日</dd>

    <dt>2月11日</dt>
    <dd>建国記念日</dd>
</dl>
```

  <dl>
    <dt>1月1日</dt>
    <dd>元日</dd>
    <dt>1月12日</dt>
    <dd>成人の日</dd>
    <dt>2月11日</dt>
    <dd>建国記念日</dd>
  </dl>


<a name="table"></a>
## テーブル
* table要素

    表を作成するブロック要素です。

* th要素

    表の見出しを作成するブロック要素です。

* tr要素

    表の横方向の一行を定義するブロック要素です。

* td要素

    表のデータを入れるブロック要素です。

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

<a name="form"></a>
## フォーム

### input要素
フォームの入力欄や実行ボタンなどを構成する要素です。

input要素のtype属性を指定するとさまざまな種類のフォームの部品を作り出すことができます。

* **`type="text"`**

１行のテキスト入力欄を作成します。
```html
<input type="text">
```
<input type="text">

* **`type="checkbox"`**

チェックボックスを作成します。複数作成することができます。
```html
<input type="checkbox">
```
<input type="checkbox">


* **`type="radio"`**

複数の中から１つしか選択できない、ラジオボタンを作ります。
複数をグループとして認識させるには、name属性で同じ名前をつけます。
```html
<input type="radio">
```
<input type="radio">


* **`type="submit"`**

送信ボタンを作ります。
```html
<input type="submit">
```
<input type="submit">

* **`name=""`**

入力された情報の識別子として、固有の名前をつけることができます。
```html
<input type="text" name="email">
```
<input type="text" name="email">


* **`value=""`**

こちらはフォームの種類によって挙動が変わってくる属性になります。
type = "button" の場合、ボタンに文字をつけることができます。
```html
<input type="submit" value="送信する">
```
<input type="submit" value="送信する">

```html
<input type="text" value="さいとう">
```
<input type="text" value="さいとう">


* **`placeholder=""`**

テキストなどの入力欄に文字を表示することができます。
```html
<input type="text" placeholder="名前を入力してください">
```
<input type="text" placeholder="名前を入力してください">

### textarea要素
textarea要素を使うと、複数行のテキスト入力欄を作成できます。

textarea要素の中のテキストは、テキスト入力欄の初期値になります。

### label要素
label要素は、フォームの構成部品（一行テキストボックス・チェックボックス・ラジオボタン等）と、 その項目名（ラベル）を明確に関連付けるための要素です。

フォームの部品とテキストを一緒にタグで囲むことにより関連付けが行われ、テキストをクリックしてもチェックボックスにチェックを入れることができるようになります。

### select要素
メニュー（セレクトボックス）を作成するときに使用します。メニューの選択肢は、select要素内に配置するoption要素で作成します。

### option要素
メニューの選択肢を作成するときに使用します。この要素内の文字列が、メニューの選択肢として表示されます。この要素は、select要素の間に記述します。

```html
<h2>お問い合わせ</h2>

<form>
  <input type="text" placeholder="名前を入力してください"><br>

  <textarea placeholder="テキスト本文"></textarea><br>

  <label>
    <input type="radio" name="RadioGroup1" value="0">男性
  </label><br>
  <label>
    <input type="radio" name="RadioGroup1" value="1">女性
  </label>

  アンケートにご協力ださい。
  <label>
  <input type="checkbox" name="CheckboxGroup1" value="チェックボックス">
  サイトは面白かった </label>
  <br>
  <label>
  <input type="checkbox" name="CheckboxGroup1" value="チェックボックス">
  サイトは役立った </label>

  <select>
    <option value="セレクト">返信必要</option>
    <option value="セレクト">返信不要</option>
  </select>

  <input type="submit" value="送信する">

</form>
```

<h2>お問い合わせ</h2>

<form>
  <input type="text" placeholder="名前を入力してください"><br>
  <textarea placeholder="テキスト本文"></textarea><br>
  <label>
    <input type="radio" name="RadioGroup1" value="0">男性
  </label>
  <label>
    <input type="radio" name="RadioGroup1" value="1">女性
  </label><br>

  アンケートにご協力ださい。<br>
  <label>
  <input type="checkbox" name="CheckboxGroup1" value="チェックボックス">
  サイトは面白かった </label>
  <br>
  <label>
  <input type="checkbox" name="CheckboxGroup1" value="チェックボックス">
  サイトは役立った </label><br>

  <select>
    <option value="セレクト">返信必要</option>
    <option value="セレクト">返信不要</option>
  </select>
  <br>
  <input type="submit" value="送信する">
</form>


<a name="divspan"></a>
## 情報をまとめる要素

HTMLのコツでも登場したdiv要素とspan要素は、情報をひと固まりにできるものです。
どちらも、要素自体には意味を持っておらず、CSSでレイアウトや装飾をするときに使われます。

#### div要素
意味を持っている要素ではありませんが、CSSでレイアウトや装飾をするときに使うブロック要素です。div要素で囲んだ部分の配置を一気に変更することなどが可能です。

#### span要素
div要素と同じく意味を持っていませんが、文字の装飾などに使うインライン要素です。

```html
<div>
 <h2>ゆるキャラランキング</h2>
 <p><span>10/17</span>現在のゆるきゃらランキングです。</p>
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
</div>
```

* div要素は、サイトのレイアウトや装飾をする時に使われる。
* span要素は、サイトの文字の装飾をするときに使われる。

<a name="headerfooter"></a>
## ヘッダーとフッターをあらわす要素

### header要素
上部にあるものを示すことができます。
はじめに紹介したhead要素と混同しがちなので気をつけてください。

例えば、見出しやナビゲーションなどを囲うことによって、上部にあることがHTMLだけでわかるようになります。
header要素は、ブロック要素となります。
```html
<header>
<h1>サイト名</h1>
<h2>ようこそ サイト名 へ</h2>
<p>このサイトは、●●です。<br>ゆっくりしていってね！</p>
</header>
```

### footer要素
下部にあるものを示すことができます。
例えば、コメント数やコピーライトを囲うことによって、下部にあることがHTMLだけでわかるようになります。
```html
<footer>
<p>copyright サイト名</p>
</footer>
```

### section要素
文章内の1部分がひとつのセクションであることを表します。
sectionを使用するときは、小さなまとまりの見出しとしてh要素が使われます。
section要素は、ブロック要素となります。
```html
<section>
<h3>氏名</h3>
<p><strong>21歳</strong>です。</p>
<p>千葉県出身で、千葉県に住んでいます。<em>よろしくお願いします！</em></p>
</section>
```


### article要素
内容が単体（article）が完結している時に使えます。
例えば、ブログでは、複数の記事がひとつのHTMLにある場合があり、記事ごとにarticleでマークアップします。

article内でarticleを使用することができますが、親要素に関連（コメントなど）している必要があります。

article要素は、ブロック要素となります。

```html
<article>
  <section>
    <h3>氏名</h3>
    <p><strong>21歳</strong>です。</p>
    <p>千葉県出身で、千葉県に住んでいます。<em>よろしくお願いします！</em></p>
  </section>
</article>
```

* section要素は、文章がひとつのセクションとなる時使えます。
* article要素は、内容がひとつのまとまりで完結している時に使えます。














