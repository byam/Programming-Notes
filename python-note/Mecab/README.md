## Homebrew install Mecab

```sh
# updare homebrew
$ brew update

# install mecab
$ brew install mecab
brew install mecab-ipadic

# Checking mecab
➜  ~  mecab
今日はインテルさんのハッカソンに参加しました。
今日  名詞,副詞可能,*,*,*,*,今日,キョウ,キョー
は   助詞,係助詞,*,*,*,*,は,ハ,ワ
インテル    名詞,固有名詞,組織,*,*,*,インテル,インテル,インテル
さん  名詞,接尾,人名,*,*,*,さん,サン,サン
の   助詞,連体化,*,*,*,*,の,ノ,ノ
ハッカソン   名詞,一般,*,*,*,*,*
に   助詞,格助詞,一般,*,*,*,に,ニ,ニ
参加  名詞,サ変接続,*,*,*,*,参加,サンカ,サンカ
し   動詞,自立,*,*,サ変・スル,連用形,する,シ,シ
まし  助動詞,*,*,*,特殊・マス,連用形,ます,マシ,マシ
た   助動詞,*,*,*,特殊・タ,基本形,た,タ,タ
。   記号,句点,*,*,*,*,。,。,。
EOS
```


## Python install Mecab

```python
# install
$ wget https://mecab.googlecode.com/files/mecab-python-0.996.tar.gz
$ pip install mecab-python-0.996.tar.gz


# usage
$python
>>> import MeCab
>>> text = "今日はいい天気ですね"
>>> t = MeCab.Tagger("-Owakati")
>>> result = t.parse(text)
>>> print result
今日 は いい 天気 です ね

```


## MeCabの出力形式

出力形式はオプションにより変わる。
* 'mecabrc': (デフォルト)

* '-Ochasen': (ChaSen 互換形式)

* '-Owakati': (分かち書きのみを出力)

* '-Oyomi': (読みのみを出力)
