#List of JavaScript Notes & Tips

* [Basics](https://github.com/byam/Byam-Programming-Notes/blob/master/js-note/Basics)

* [OOP](https://github.com/byam/Byam-Programming-Notes/blob/master/js-note/OOP)

* [Data Visualization with JavaScript](https://github.com/byam/Byam-Programming-Notes/blob/master/js-note/DataVisual)




---

* [基礎文法](#js)
* [WebページでJavaScript](#js_web)
    * [HTMLにJavaScriptを取り入れる](#js_html)
    * [RailsにJavaScriptを取り入れる](#js_rails)
    * [JavaScriptで簡単な機能を実装する](#js_func)
* [jQueryでタブメニューを作る](#jquery)
    * [jQueryとは](#jquery_jquery)
    * [jQueryの基本](#jquery_basic)
    * [タブメニューを作る](#jquery_tab)
* [Ajaxで非同期通信をする](#ajax)


<a name="js"></a>
# 基礎文法

<a name="js_js"></a>
## JavaScriptとは
JavaScriptはブラウザに組み込まれている唯一のプログラミング言語であり、ブラウザ上の要素、HTMLやCSSを操作することができます。これにより「ボタンがクリックされたらメニューを表示する」や、「スクロールに応じて要素を表示する」といった処理を行うことができます。

コンソールは、`command + option + J`で立ち上げる

* JavaScriptはRubyと同様にプログラミング言語の一つである。
* JavaScriptはHTMLの要素に変化を加えることができる。
* JavaScriptは単体でサーバと通信することができ、これを非同期通信と呼ぶ。また、非同期通信を実現する仕組みをAjaxと呼ぶ。

```js
console.log("Hello world");
```

* JavaScriptでは一般的に、文末にセミコロンを置く。
* JavaScriptではRubyと異なり、引数等の括弧を省略することができない。


## JavaScriptの基礎文法

#### 変数
```js
var x = 1;
x = 5;
var name = "shizuka";
var array = [1, 2, "a"];
```
* 変数を定義する時は、変数名の前にvarをつける

#### 関数
```js
function 関数名(引数) {
  処理内容
}
```

```js
function square(number) {
  console.log(number * number);
}

var number = 5;
square(number);
```

* 関数はfunctionという語を使って定義することができる。

#### オブジェクト
```js
var hash = {key1: "value1"};
hash.key2 = "value2";
```

* オブジェクトはRubyのハッシュのようなものであり、キーと値をセットとして保存する。
* オブジェクトの、キーと値のセットをプロパティと呼ぶ。一般にプロパティと言う時は、キーに対応する値のことを指す。
* プロパティとして、数値や文字列の他に、メソッドを持つこともできる。



















<a name="js_web"></a>
# WebページでJavaScript

<a name="js_html"></a>
## HTMLにJavaScriptを取り入れる

HTMLファイル内に、JavaScriptのコードをscriptタグで囲って配置すると、読み込まれたタイミングで実行されます。

```html
<html>
  <head>
    <script>
      console.log("Hello world"); // この行が読み込まれた時点で実行される
    </script>
  </head>
  <body>
    ...
  </body>
</html>
```


### HTMLからJavaScriptファイルを読み込む

> test.js
```js
console.log("Hello world");
```

> test.html
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <script src="test.js"></script>
  </head>
  <body>
  </body>
</html>
```

* HTMLにJavaScriptを取り入れる方法として、scriptタグで囲ってHTMLファイル内に適当な場所に配置するという方法がある。
* HTMLにJavaScriptを取り入れる方法として、CSSと同様に、headタグ内に適切な記述をすることで、外部のJavaScriptファイルを読み込むという方法がある。


<a name="js_rails"></a>
## RailsにJavaScriptを取り入れる

### 新規アプリケーションを作成

> 新規アプリケーションを作成
```sh
$ rails new test-js -d mysql
```

### ページにアクセスできるようする


>① bundle installにより必要なgemをインストールする

デフォルトでインストールされるgemであるmysql2の最新版(0.4.0)には問題があるため、Gemfileの記述を変更し、低いバージョンを指定する必要があります。

*Gemfile:*
```ruby
# 7行目付近のmysql2の記述を以下のように書き換える
gem 'mysql2', '0.3.18'
```

```sh
$ bundle install
```

>② データベースを作成する
```sh
$ rake db:create
```

>③ コントローラーを作成し、アクションを定義する

topコントローラーを作成し、indexアクションを定義する。

```sh
$ rails g controller top
```

*app/controllers/top_controller.rb:*
```ruby
class TopController < ApplicationController
  def index
  end
end
```

>④ 作成したアクションに対応するビューを作成する
```sh
$ touch app/views/top/index.html.erb
```

>⑤ 作成したアクションに対応するルーティングを追加する

*config/routes.rb:*
```ruby
Rails.application.routes.draw do
  root 'top#index'
end
```



### ビューからJavaScriptファイルを読み込む

#### レイアウトとテンプレート
Railsでは、実際に表示されるHTMLとなるビューは、application.html.erbといったレイアウトと呼ばれるものと、index.html.erbといったテンプレートと呼ばれるもので構成されています。

テンプレートファイルは、index、show等のアクション毎に存在し、それぞれで表示するHTMLを記述します。

一方で、レイアウトファイルは、PicTweetのナビゲーションバーや、moooviのランキング表示部分など、多くのページで共通するHTMLを記述します。

headタグも多くのページで共通する部分と言え、レイアウトファイル内に記述されるのが一般的であり、デフォルトではapplication.html.erbに記述されています。

*application.html.erb:*
```js
<!DOCTYPE html>
<html>
<head>
  <title>TestJs</title>
  <%= stylesheet_link_tag    'application', media: 'all', 'data-turbolinks-track' => true %>
  <%= javascript_include_tag 'application', 'data-turbolinks-track' => true %>
  <%= csrf_meta_tags %>
</head>
<body>

<%= yield %>

</body>
</html>
```
この`javascript_include_tag`という記述によって、`app/assets/javascripts/application.js`が読み込まれています。


*app/assets/javascripts/application.js:*
```js
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
```


Railsは上記の記述を読んでおり、`//= require ***`といった記述を見て、gemの中から、あるいは、`app/assets/javascripts/`や、`vendor/assets/javascripts/`以下から、`***.js`等のJavaScriptファイルを探し、`application.js`の中に取り込みます。

また、`require_tree .`という記述をすると、`application.js`と同じディレクトリ、すなわち`app/assets/javascripts`以下の全てのJavaScriptファイルを`application.js`の中に取り込みます。

つまりRailsではデフォルトで、全てのページで`app/assets/javascripts/application.js`が読み込まれるようになっていて、`application.js`は、そのファイル内でrequireしたJavaScriptファイル、また、同じディレクトリ以下に含まれるJavaScriptファイルにより構成されているということです。

よって、RailsにJavaScriptを取り入れるには、jsファイルを`app/assets/javascripts/`以下に配置するだけで良いということになります。全てのページでそのjsファイルが読み込まれることになります。

ちなみに、上記のように沢山のJavaScriptファイルを`application.js`一つのファイルにまとめる仕組みをAsset Pipelineと言います。一つのファイルにまとめることで、読み込み速度の向上などが期待されます。


`top.coffee`という（ほぼ）空のファイルがあります。coffeeというのは、CoffeeScriptで記述されたファイルのことを表し、CoffeeScriptとは、JavaScriptの表現方法の一つです。

`rails g controller top`と実行した時に、topコントローラーに関するscss（cssの表現方法の一つ）、coffeeファイルも同時に作られていたのです。

今回はCoffeeScriptでなく、通常のJavaScript（生JSと呼んだりします）を記述するので、このファイルは不要となります。また、 同名のCoffeeファイルがあると、JavaScriptファイルが読み込まれなくなるため、`top.coffee`は削除してください。



> app/assets/javascripts/にtop.jsを作成
```js
console.log("Hello world");
```


Railsでは、CSSやJavaScriptのファイル名は`(表示するビューのコントローラー名).js`等とするのが一般的です。


* RailsにJavaScriptを取り入れるには、app/assets/javascriptsにjsファイルを置けば良い。



<a name="js_func"></a>
## JavaScriptで簡単な機能を実装する

test-jsアプリケーションのトップページに、「ボタンをクリックしたら文字が変わる」という簡単な機能を実装する。

### 「ボタン」をJavaScript上で扱えるようにする
ボタンはHTMLの要素です。HTMLの要素をJavaScript上でオブジェクトとして扱えるようにするために、DOMという仕組みを使う。

#### DOM

DOMは、Document Object Modelの略で、HTMLの一つ一つの要素を、JavaScriptのオブジェクトとして扱えるようにする仕組みです。特にそのHTML一つ一つの要素に対応するオブジェクトのことを、DOMオブジェクトと呼びます。


> ボタンを作成

*app/views/top/index.html.erb:*
```html
<input type="button" value="ボタン">
```


#### querySelectorメソッド

`querySelector`メソッドは引数を持ち、HTML上でその引数で指定したセレクタに合致するもののうち、一番最初に見つかった要素をDOMオブジェクトとして返します。

```js
document.querySelector("input");
```

querySelectorメソッドでは、Mechanize::Pageオブジェクトのatメソッドやsearchメソッドと同様に、複雑なセレクタも指定できます。
```js
document.querySelector("form .btn"); // formタグ要素の中の、クラスがbtnの要素
document.querySelector("#footer a.next"); // idがfotterの要素の中の、クラスがnextのaタグ要素
```


* DOMは、HTMLの要素をJavaScript上でオブジェクトとして扱うことを可能にする仕組みである。
* querySelectorメソッドを用いて、HTMLの要素をDOMオブジェクトとして取得することができる。



### 「ボタンをクリックしたら」を取得する
ボタンが「クリックされたかどうか」を取得するために、JavaScriptのイベントと呼ばれる概念を使います。

#### イベント

「クリックする」「マウスを乗せる」など、ブラウザ上で起きる出来事をイベントと呼びます。

ある要素に対してあるイベントが起きた時になんらかの処理を実行したい場合、イベントリスナーというものを定義し、イベントが起こった時の処理を書きます。イベントリスナーは、DOMオブジェクトの`addEventListener`メソッドを使って定義することができます。

#### addEventListenerメソッド

`addEventListener`メソッドはDOMオブジェクトのメソッドで、以下のようにして実行します。

```js
(DOMオブジェクト).addEventListener("イベント名", 関数);
```
上記のような記述により、この記述の読み込み以降で「DOMオブジェクト」に「イベント」が起きた時に、「関数」を実行するようになります。

一つのイベントと一つの関数を紐付ける仕組みのことをイベントリスナと呼びます。
一つのイベントに複数の関数を紐付ける場合は、関数の数だけイベントリスナが存在します。

`addEventListener`は、あるDOMオブジェクトに対して、そのDOMオブジェクトのイベントに関数を紐付ける仕組みであるイベントリスナを追加するメソッドである、ということです。

なお、`addEventListener`メソッドが引数として関数を取っていることが奇妙に見えますが、これは前の章で説明したように、JavaScriptでは関数は数値や文字列同様、一つの値であるとみなされていることに因ります。

> addEventListenerメソッドを用いて、ボタンがクリックされたらコンソールに適当な文字列を出力するようにする

*app/assets/javascripts/top.js:*
```js
var btn = document.querySelector("input");
// ボタンをDOMオブジェクトとして取得し、変数btnに代入する

function printHello() {
  console.log("Hello world");
}
// printHello関数を定義

btn.addEventListener("click", printHello);
// ボタンのDOMオブジェクトであるbtnに対して、
// clickイベントとprintHello関数を紐付ける仕組みであるイベントリスナを追加する
```


しかし、実際にブラウザでボタンをクリックしてもコンソールに何も表示されません。

今回コードを記述したtop.jsは、application.jsの中で呼び出されています。
application.jsは、application.html.erbのheadタグ内に記述されています。

よって、ブラウザがこのJavaScriptのコードを読み込む時、まだhtmlファイルの内headタグ内までしか読み込まれておらず、bodyタグ内にあるinputタグは読み込まれていなかったのです。

そのため、querySelectorメソッドによりボタンのDOMオブジェクトは取得できず、変数btnの中身はnull（何も無いという意味）となっていたのです。
nullのプロパティとしてaddEventListenerメソッドが実行されることとなり、コンソールではそれに対するエラーとして以下のように表示されます。

```js
Cannot ready property 'addEventListener' of null
```


この問題を解決するために、上記の一連の処理を、「ページの読み込みが終わったら」実行するようにします。
「ページの読み込みが終わる」というイベントは、windowオブジェクトのloadイベントに対応します。そこで、windowオブジェクトのloadイベントに対応する関数として上記の一連の処理を定義すれば良いと考えられます。なお、windowオブジェクトは、元から用意されている、ブラウザの情報を持つオブジェクトです。


*app/assets/javascripts/top.js:*
```js
function printHelloWithButton() {
  var btn = document.querySelector("input");

  function printHello() {
    console.log("Hello world");
  }
  // 関数内で定義された関数は、関数の中でしか呼び出せないという性質があるだけで、
  // 通常の関数同様に呼び出せる

  btn.addEventListener("click", printHello);
}
// 一連の処理をまとめた関数を作る

window.addEventListener("load", printHelloWithButton);
```


* イベントとは、クリック等の、HTML要素に対して起こる「出来事」のことである。
* イベントリスナとは、DOM要素の一つのイベントと一つの関数を紐付ける仕組みのことである。
* addEventListenerメソッドを用いることにより、DOM要素に対してイベントリスナを追加することができる。


### コードを見直

*app/assets/javascripts/top.js:*
```js
window.addEventListener("load", function() {
  var btn = document.querySelector("input");

  btn.addEventListener("click", function() {
    console.log("Hello world");
  });
});
```




### 「文字が変わる」を実装する

> app/views/top/index.html.erb
```html
<p>
  ボタンが・・
</p>
<input type="button" value="ボタン">
```


> app/assets/javascripts/top.js
```js
window.addEventListener("load", function() {
  var btn = document.querySelector("input");

  btn.addEventListener("click", function() {
    var p = document.querySelector("p");
    p.innerText = "クリックされた！";
  });
});
```














<a name="jquery"></a>
# jQueryでタブメニューを作る


<a name="jquery_jquery"></a>
## jQueryとは

jQueryはJavaScriptのライブラリです。JavaScriptの上で動くものであり、jQueryを導入したからといってJavaScriptが使えなくなるというわけではありません。

jQueryを導入することによって、今までのJavaScriptの書き方に加えて、とても便利なメソッドを有するjQueryオブジェクトを使うことができるようになります。

jQueryはJavaScriptで書かれています。通常、jQueryを使いたい場合は、head内でjQueryを記述するjsファイルを読み込む必要がありますが、RailsではデフォルトでjQueryが使えるようになっているため、特に何かする必要はありません。



<a name="jquery_basic"></a>
## jQueryの基本


### jQueryを使ってHTML要素を取得

```js
$(".hoge"); // クラスがhogeの要素
$("p"); // pタグの要素
$("#fuga .piyo"); //idがfugaの要素の中のクラスがpiyoの要素
```

##### jQueryオブジェクト

jQueryオブジェクトは、DOMオブジェクトとは完全に異なります。すなわち、DOMオブジェクトに定義されていたメソッドは使えません。例えば、addEventListenerメソッドによってイベントと関数を紐付けることはできません。

一方で、jQueryオブジェクトだからこそ使えるメソッドも沢山あります。そして、このメソッドが便利であるというのが、jQueryが広く使われる理由でもあります。



### jQueryオブジェクトのメソッド


#### onメソッド
jQueryオブジェクトに対してイベントを紐付けたい時は、`on`メソッドを使います。以下の二つはどちらも「idがbuttonである要素がクリックされたらfunc関数を実行する」という全く同じ意味を表します。

```js
document.querySelector("#button").addEventListener("click", func);

$("#button").on("click", func);
```

```js
document.querySelector("#button").addEventListener("click", function() {
  // 処理
});

$("#button").on("click", function() {
  // 処理
});
```


#### triggerメソッド

jQueryオブジェクトに対してtriggerメソッドを使うと、triggerメソッドの引数のイベントを起こさせることができます。

例えば、コンソールで以下のコードを実行すると、画面上にある全てのチェックボックスをクリックすることができます。

```js
$("input[type='checkbox']").trigger("click");
```
※タグ名等のセレクタに続いて[属性名='値']とすると、それに合致した要素を取得することができます。これはCSS等にも共通する使い方で、今回の場合は、typeがcheckboxのinput要素、すなわちチェックボックスを取得しています。

上述の通り、jQueryオブジェクトは、セレクタに合致する要素が複数ある場合、配列の形で全てを取得します。そしてjQueryオブジェクトのメソッドは、jQuery要素が複数ある場合、全ての要素に対して処理を実行します。

よって、上記のコードにより、画面上の全てのチェックボックスをクリックすることができるのです。


* jQueryオブジェクトとは、jQueryの書き方により取得した、HTMLの要素に対応するオブジェクトである。
* オブジェクトに対して使えるメソッドは、そのオブジェクトに定義されているプロパティのみであるから、jQueryオブジェクトとDOMオブジェクトでは使えるメソッドが異なる。








<a name="jquery_tab"></a>
## タブメニューを作る
jQueryを用いてタブメニュー機能を実装しましょう。
前回のtest-jsアプリケーションに実装します。

タブメニューとして、以下の仕様を実装します。

・左右二つのタブを配置する
・タブがクリックされたら、そのタブの背景色が変わり、「選択されている」ことが分かるようにする
・タブの下には左右二つのコンテンツを置き、選択されている方に対応するコンテンツを表示し、そうでない方を隠す
・最初は、左のタブが選択されている状態とする

まずは、HTMLとCSSを作ってしまいましょう。


### HTML・CSSを完成させる


> index.html.erb
```html
<div class="tab-menu">
  <ul>
    <li id="left" class="selected">左タブ</li>
    <li id="right">右タブ</li>
  </ul>

  <div class="contents">
    <div class="left">
      <p>お花コンテンツ</p>
    </div>
    <div class="right">
      <p>お魚コンテンツ</p>
    </div>
  </div>
</div>
```

最初は左のタブが選択されている状態にするため、左のタブのliタグに対してselectedクラスを適用しています。
タブであるliタグがクリックされたら、クリックされたliタグに対してselectedクラスを追加し、クリックされていない方のliタグのselectedクラスを削除するという仕様にします。

また、左のコンテンツ、右のコンテンツについては、最初からHTML上に表示させておきます。タブがクリックされるとともに、表示したくない方を画面上から消す（HTML上には残す）という仕様にします。

次に、CSSファイルを記述しましょう。コントローラー作成時に生成された、top.scssファイルを編集します。これはSCSSと呼ばれ、CSSの表現方法の一つです。



#### SCSS

SCSSは、CSSに変換（コンパイルと呼びます）されてからブラウザに送られます。

SCSSでは、CSSの書き方に加えて、いくつかの便利な書き方をすることができます。ここでは、入れ子構造が表現できること、セレクタの条件の追加ができることを紹介します。実際に例を見てみましょう。

例えば、CSSでは、外側と内側の要素に対してそれぞれCSSを適用する時、以下のようにして書きます。

```css
.outer {
  width: 500px;
  background-color: #ccc;
}

.outer .inner { /* .outerの中の.innerに適用される */
  width: 200px;
  background-color: #aaa;
}
```

SCSSでは、上記を以下のように書くことができます。
```css
.outer {
  width: 500px;
  background-color: #ccc;

  .inner { /* .outerの中に記述すると、.outerの中の.innerに対して適用される */
    width: 200px;
    background-color: #aaa;
  }
}
```
このように、あるセレクタについての記述が書かれる中括弧の中に、別のセレクタについての記述を書くと、「外側のセレクタを満たす要素」の中にある「内側のセレクタの要素」に対してCSSを適用させることができます。

また、CSSでは、例えばマウスを乗せた時に別のCSSを適用させたい場合、以下のように書きます。
```css
a {
  color: #aaa;
}

a:hover { /* 「:hover」は要素にマウスを乗せた時に追加される擬似クラス */
  color: #666;
}
```

SCSSでは、上記を以下のように書くことができます。
```css
a {
  color: #aaa;

  &:hover { /* aタグで、かつ:hover擬似クラスがついているもの */
    color: #666;
  }
}
```

このように、あるセレクタについての記述が書かれる中括弧の中に、別のセレクタについての記述を&(アンパサンド)をつけて書くと、「外側のセレクタを満たす要素」かつ「内側のセレクタを満たす要素」に対してCSSを適用させることができます。



> app/assets/stylesheets/top.scss
```css
body{
  background-color: #f5f5f5;
}

.tab-menu {
  width: 500px;
  margin-left: 60px;

  ul { /* .tab-menuの中のulに対する記述 */
    margin: 0;
    padding: 0;
    margin-top: 50px;
  }

  li { /* .tab-menuの中のli */
    display: inline-block;
    width: 120px;
    height: 22px;
    padding: 10px 10px 5px;
    cursor: pointer;
    background-color: #AECD6A;
    border-top-right-radius: 10px;
    font-size: 14px;
    color: #fff;
    text-align: center;

    &.selected {/* .tab-menuの中のliの内、.selectedが与えられているものに対する記述 */
      background-color: #fff;
      color: #AECD6A;
    }
  }
}

.contents {
  background-color: #fff;
  height: 360px;
  padding: 20px;

  .right { /* .contentsの中の.rightに対する記述 */
    display: none; /* 最初、右のコンテンツは非表示にする */
  }
}
```


* SCSSは、RailsにおけるCSSの表現方法の一つであり、通常のCSSの記法に加えて、便利なSCSS記法を用いることができる。

### クリックされた要素を取得

####this

onメソッドの引数の関数内でthisという変数を使うと、そのイベントが発生した要素をDOMオブジェクトとして取得できます。

実際にタブメニューで「どちらがクリックされたか」を出力してみましょう。
DOMオブジェクトのidプロパティを出力させます。

> app/assets/top.js
```js
window.addEventListener("load", function() {
  $("li").on("click", function() {
    console.log(this.id);
  });
});
```


### タブのクラスを操作しよう

#### addClassメソッド、removeClassメソッド

以下のようにして、クラスの追加、削除が行えます。

```js
(jQueryオブジェクト).addClass("クラス名");
(jQueryオブジェクト).removeClass("クラス名");
```


> app/assets/top.js
```js
window.addEventListener("load", function() {
  $("li").on("click", function() {
    $("li.selected").removeClass("selected");
    $(this).addClass("selected");
  });
});
```


* イベントリスナの関数の中では、イベントが起きたDOMオブジェクトをthisという変数で取得することができる。
* DOMオブジェクトをjQueryオブジェクトに変換するには、$(DOMオブジェクト)とすれば良い。


### コンテンツ部分の表示非表示を切り替え


#### showメソッド、hideメソッド

hideメソッドは、jQueryオブジェクトに対し、display: none;というCSSを適用させます。これにより、画面上に表示されなくなります。
反対に、showメソッドは、そのオブジェクトがブロック要素ならdisplay: block;、インライン要素ならdisplay: inline;といったように、そのオブジェクトに合った形で画面上に表示させるCSSを適用させます。

なお、このCSSは、通常のcssファイルの記述よりも優先されます。すなわち、cssファイルでdisplay: none;としているものについても、showメソッドによるdisplay: block;等が優先されるため、画面上に表示されることとなります。




> app/assets/top.js
```js
window.addEventListener("load", function() {
  $("li").on("click", function() {
    $("li.selected").removeClass("selected");
    $(this).addClass("selected");
    $('.contents div').hide(); // 二つの要素を非表示にする
    $("." + this.id).show(); // クリックされたボタンに対応する要素を表示する
  });
});
```


最後に少しコードの見直しをしましょう。liタグにはjQueryのonメソッドを使ってイベントリスナを追加しています。「ページの読み込みが終わったら」に関するイベントリスナも、jQueryで書くことで統一してみましょう。

windowはDOMオブジェクトです。DOMオブジェクトをjQueryオブジェクトに変換するには$(DOMオブジェクト)とすれば良いのでした。
> app/assets/top.js
```js
$(window).on("load", function() {
  $("li").on("click", function() {
    $("li.selected").removeClass("selected");
    $(this).addClass("selected");
    $('.contents div').hide(); // 二つの要素を非表示にする
    $("." + this.id).show(); // クリックされたボタンに対応する要素を表示する
  });
});
```








<a name="ajax"></a>
# Ajaxで非同期通信をする

非同期通信を用いた機能を実装することを通じて、Railsにおける非同期通信の実装の仕方


<a name="ajax_ajax"></a>
## 非同期通信とは

ブラウザがサーバにリクエストを送り、サーバがリクエストに応じた処理をし、レスポンスをブラウザにHTMLという形で返し、ブラウザがそれを表示する、という通常の流れとは別に、JavaScriptがサーバとする通信のことを非同期通信と呼びます。また、その通信をする仕組みのことをAjaxと呼びます。

Ajaxを用いることで、画面遷移することなく、サーバと通信することができます。画面遷移しない分、ユーザに快適なブラウジングを提供することができます。レスポンスに応じて、HTMLの要素を書き換えることもできるため、ブラウザとの通信の後にビューにちょっとした変化しか無い場合はAjaxを使うことを検討しましょう。

* JavaScript上で行うサーバとの通信を非同期通信と呼び、非同期通信を実現する仕組みをAjaxと呼ぶ。
* Ajaxを用いることで、画面遷移することなくサーバと通信し、諸々の処理を行うことができる。



<a name="ajax_app"></a>
## 非同期通信を使った一行メモアプリ

今回作るのは以下のような、次々と一行のメモを残すことの出来るアプリです。

![alt text](https://tech-master.s3.amazonaws.com/uploads/curriculums//df8fc96b9c0dc6321387a96f070be873.gif
 "Logo Title Text 1")

画面遷移することなくメモを投稿することができ、また、データベースにも保存されます。


<a name="ajax_rails"></a>
## Ajaxを使わずに実装する
まずは、Ajaxを用いずに、メモを投稿する機能と、表示する機能を実装しましょう。

大まかに以下のような手順で実装します。

① アプリケーションを作成する（bundle installも実行される）
② Memoモデルを作成する
③ Memosコントローラーを作成し、トップページに対応するindexアクションを定義する
④ indexアクションに対応するビューファイルを作成する
⑤ indexアクションに対応するルーティングを追加する
⑥ 投稿に対応するアクションを定義する（トップページにリダイレクトさせる）
⑦ 投稿に対応するルーティングを追加する




> ① アプリケーションを作成する（bundle installも実行される）
```sh
$ rails new memo-app -d mysql
```

mysql2の最新バージョンには問題があるため、Gemfileの記述を変更し、bundle installする必要があります。

*Gemfile:*
```ruby
# 7行目付近のmysql2の記述を以下のように書き換える
gem 'mysql2', '0.3.18'
```

```sh
$ bundle install
```



> ② Memoモデルを作成する

*Memoモデルを作成:*
```sh
$ rake db:create

$ rails g model memo text:string

$ rake db:migrate
```

> ③ Memosコントローラーを作成し、トップページに対応するindexアクションを定義する

```sh
$ rails g controller memos
```

*app/controllers/memos_controller.rb:*
```ruby
class MemosController < ApplicationController
  def index
    @memos = Memo.all
    @memo = Memo.new
  end
end
```

> ④ indexアクションに対応するビューファイルを作成する

```sh
$ touch app/views/memos/index.html.erb
$ touch app/views/memos/_memo.html.erb
```

*app/views/memos/index.html.erb:*
```html
<%= form_for @memo do |f| %>
  <%= f.text_field :text %>
  <%= f.submit '投稿' %>
<% end %>
<ul>
  <%= render @memos %>
</ul>
```

*app/views/memos/_memo.html.erb:*
```html
<li>
  <%= memo.text %>
</li>
```


**form_forメソッド**

html.erbファイルは、rubyの記述が許されたHTMLファイルです。html.erbファイルは、rubyの処理が行われた後、HTMLレスポンスとしてブラウザに返されます。

`form_for`はヘルパーメソッドであり、html.erbファイルがHTMLに変換される際にformタグに変換されます。formタグは、送信ボタンを押した時のリクエスト送信先のURLの情報と、リクエストを送る時のHTTPメソッドとして何を用いるか、という情報を持ちます。

`form_for`は、引数にモデルのインスタンスを取ります。このインスタンスに応じて、URLとHTTPメソッドを柔軟に変更します。

引数として、まだレコードに追加されていない新しいインスタンスが渡された時は、そのインスタンスを生成する、すなわちそのインスタンスのcreateアクションに対応するURLとHTTPメソッドを情報として持ちます。

一方、引数として、レコードに追加された既に作成済みのインスタンスを渡した時は、そのインスタンスを編集する、すなわちそのインスタンスのupdateアクションに対応するURLとHTTPメソッドを情報として持ちます。

今回は、コントローラーで定義した@memoインスタンスを引数としています。@memoインスタンスには、まだレコードに追加されていない（saveされていない）、新しいMemoモデルのインスタンスが入っています。そのため、このform_forは、Memoモデルを新規作成するアクション、すなわちMemosControllerのcreateアクションに対応するURLとHTTPメソッドを持ちます。

* form_forはモデルと紐付くデータを入力するフォームを生成するときに用いる。
* form_forは、引数のインスタンスに応じて、URLとHTTPメソッドを変える。

> ⑤ indexアクションに対応するルーティングを追加する

*config/routes.rb:*
```ruby
Rails.application.routes.draw do
  root 'memos#index'
end
```

> ⑥ 投稿に対応するアクションを定義する（トップページにリダイレクトさせる）

`form_for`を経て送信されたパラメータは、paramsのそのモデル名をキーとする値に、ハッシュとして定義されています。
以下のように二重のハッシュ構造になっているということですね。
```ruby
params # => {.., :memo => {:text => "入力した内容"}, ..}
params[:memo] # => {:text => "入力した内容"}
params[:memo][:text] # => "入力した内容"
```

よって、まずparamsのrequireメソッドにより、「memoキーに対応する値であるハッシュ」を取り出します。
```ruby
params.require(:memo) # => {:text => "入力した内容"}
```

さらに、ストロングパラメータとしてキーを指定すれば良いのでした。
```ruby
params.require(:memo).permit(:text) # => {:text => "入力した内容"}
```

それでは実際にコントローラーにアクションを追加しましょう。

*app/controllers/memos_controller.rb:*
```ruby
class MemosController < ApplicationController
  def index
    @memos = Memo.all
    @memo = Memo.new
  end

  def create
    Memo.create(memo_params)
    redirect_to :root
  end

  private
  def memo_params
    params.require(:memo).permit(:text)
  end
end
```

> ⑦ 投稿に対応するルーティングを追加する

*config/routes.rb:*
```ruby
Rails.application.routes.draw do
  root 'memos#index'
  resources :memos, only: :create
end
```











<a name="ajax_rails_ajax"></a>
## Ajaxを用いて、非同期通信で投稿

以下のような仕様を実装します。

* form_forで非同期通信によってリクエストを送る
* サーバはリクエストを受け取ったら、レコードを作成し、一覧を書き直すJavaScriptの処理をレスポンスとして返す
* ブラウザはレスポンスを受け取ったら、そのJavaScriptを実行し、画面上の要素を書き換える



### form_forで非同期通信によりリクエストを送るようにしよう
`form_for`は、デフォルトでは同期通信です。すなわち、リクエストを送り、レスポンスをHTMLとして受け取り、画面を再描画します。

これを非同期通信、すなわち画面遷移させずにリクエストを送るようにするためには、`form_for`に`remote: true`というオプションをつけます。


> app/views/memos/index.html.erb
```ruby
<%= form_for @memo, remote: true do |f| %>
  <%= f.text_field :text %>
  <%= f.submit '投稿' %>
<% end %>
<ul>
  <%= render @memos %>
</ul>
```

これにより、非同期通信が実現できました。
Railsでは、非同期通信がいとも簡単に実装できるようになっているのです。

* remote: trueというオプションをつけることにより、非同期通信によりリクエストが送られるようになる。



### createアクションのレスポンスを作ろう
remote: trueオプションをつけると、アクションを実行した後、「（アクション名）.js.erb」ファイルを探し、あればそれをレスポンスとしてブラウザに返します。html.erb同様、これはコントローラーで定義したインスタンス変数を使うことができ、また、rubyタグを使うこともできるJavaScriptファイルです。最終的には純粋なjsファイルに変換された後で、ブラウザにレスポンスとして返されます。



今回は、createアクションに対応するレスポンスを作れば良いので、create.js.erbというファイルを作成すれば良いことになります。

そのファイルの中では、

* 入力フォームの初期化
* 一覧の再描画

> app/views/memos/create.js.erbを新規作成
```js
$("#memo_text").val(""); // 入力フォームを空欄にする処理
$("ul").html("<%= j(render @memos) %>");
```

1行目は、入力フォームの初期化を表します。form_for内のtext_fieldタグで生成したinputタグは、「（モデル名）_（カラム名）」といったidが適用されています。そのため、上記のようにすることでその入力フォームをjQueryオブジェクトとして取得することができます。

valはjQueryオブジェクトのメソッドで、そのjQueryオブジェクトの中のテキストを、引数で渡した文字列に書き換えます。
今回は、空欄にしたいため、空の文字列を引数に渡しています。

2行目に関しては、「ulタグの中身を `<%= render @memos %>`で書き換え直す」という意味であると考えて下さい。



### createアクションを修正しよう
さて、レスポンスは、createアクションで@memos変数に一覧を取得することを前提に作成しました。

そこで、コントローラーで、インスタンス変数としてメモの一覧を取得するようにしましょう。また、ルートパスにリダイレクトさせる処理は、非同期通信においては不要なので削除しましょう。

> app/controllers/memos_controller.rb
```ruby
class MemosController < ApplicationController
  def index
    @memos = Memo.all
    @memo = Memo.new
  end

  def create
    Memo.create(memo_params)
    @memos = Memo.all
  end

  private
  def memo_params
    params.require(:memo).permit(:text)
  end
end
```

以上により、フォームから非同期通信でリクエストを送りレコードを作成した後、「入力フォームの内容を空にする」そして「一覧を更新する」という処理が記述されたJavaScriptファイルがレスポンスとしてブラウザに返されるようになりました。
ブラウザはそのレスポンスを受け取るとすぐに実行します。



* remote: trueをつけた場合、レスポンスとしてjs.erbがブラウザに返され、JavaScriptとして実行される。




<a name="ajax_rails_ajax_del"></a>
## Ajaxを用いて、非同期通信で削除できるようにする

各メモを削除できる機能もAjaxにより実装してみましょう。

![delete](https://tech-master.s3.amazonaws.com/uploads/curriculums//efd71f57222e5d73125956aafa6bd1ac.gif)

以下のような手順で実装します。

① メモの削除に対応するdestroyアクションを定義する
② 削除に対応するレスポンス（destroy.js.erb）を作成する
③ 削除に対応するルーティングを設定する
④ トップページに削除ボタンを実装する





> ① メモの削除に対応するdestroyアクションを定義する

destroyアクションは、一件のMemoを削除します。そのため、どのMemoを削除するか、という情報が必要になります。

適切なルーティングを用いると、削除したいメモのレコードのidはparams[:id]によって取得できます。

メモを削除した後は、create同様に一覧の再描画をしたいので、メモの一覧を取得しておき、レスポンスのjs.erbから取得できるようにしておきます。

*app/controllers/memos_controller.rb:*
```ruby
class MemosController < ApplicationController
  def index
    @memos = Memo.all
    @memo = Memo.new
  end

  def create
    Memo.create(memo_params)
    @memos = Memo.all
  end

  def destroy
    Memo.find(params[:id]).destroy
    @memos = Memo.all
  end

  private
  def memo_params
    params.require(:memo).permit(:text)
  end
end
```

> ② 削除に対応するレスポンス（destroy.js.erb）を作成する

*app/views/memos/にdestroy.js.erbを作成:*
```js
$("ul").html("<%= render @memos %>")
```

> ③ 削除に対応するルーティングを設定する

*config/routes.rb:*
```ruby
Rails.application.routes.draw do
  root 'memos#index'
  resources :memos, only: [:create, :destroy]
end
```

> ④ トップページに削除ボタンを実装する

`link_to`メソッドにより削除ボタンを記述してみましょう。`form_for`同様、`remote: true`オプションをつけます。

*app/views/memos/_memo.html.erb:*
```html
<li>
  <%= memo.text %>
  <%= link_to '削除', memo_path(memo), method: :delete, remote: true %>
</li>
```
link_toメソッドは第二引数に、リンク先のパスを記述しました。
パスの指定の仕方が見慣れないかもしれません。これは、以下と同じ意味です。

```js
<%= link_to '削除', "/memos/#{memo.id}", method: :delete, remote: true %>
```

resourcesを用いて記述したルーティングには、Prefixと呼ばれる、パスの名前が付与されます。

この記述から、memos#destroyに対応するパスに「memo」というPrefixが付与されていることがわかります。

```sh
Prefix Verb   URI Pattern          Controller#Action
  root GET    /                    memos#index
 memos POST   /memos(.:format)     memos#create
  memo DELETE /memos/:id(.:format) memos#destroy
```

link_toの第二引数を(Prefix名)_pathとすると、そのPrefixに対応するパスをリンク先として指定することができます。

今回であればmemo_pathとすれば良いことになりますね。

destroyのように、パラメータとしてidが必要になる場合、(Prefix名)_pathの後に括弧をつけて、そのインスタンスを渡します。今回、部分テンプレートの性質から、削除したいmemoレコードは変数memoに入っています。そのため、memo_path(memo)とすれば良いことになります。

さて、これで削除ボタンの実装も完了し、Ajaxを使って削除する一連の流れが出来上がりました。

実際に挙動を確認してみると、画面遷移せずにメモが削除できていることがわかります。

link_to、form_for、form_tagはremote: trueオプションを使うことが出来ます。これらに対しては、今回学んだ知識を用いて非同期通信を実装することができます。


















