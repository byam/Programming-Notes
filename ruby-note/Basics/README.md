* [Basics](#basics)
* [メソッドの書き方](#method)
* [hash](#hash)
* [if文](#if)
* [while文](#while)
* [配列](#list)
* [クラス](#class)
* [ソート](#sort)


<a name="basics"></a>
## Basics

### Hello World

```sh
# run irb
$ irb

# example
irb(main):001:0> puts 'Hello'
Hello
=> nil

irb(main):002:0> "Hello"
=> "Hello"

# add two strings
irb(main):003:0> "#{"very" " hard!"}"
=> "very hard!"

# length method
irb(main):004:0>  "Hello World".length
=> 11

# number to string
irb(main):007:0> puts "i am " + 20.to_s + " years old."
i am 20 years old.
=> nil
```

### 演算子
```sh
#足し算
irb(main):001:0> 1000 + 2000
=>3000
#引き算
irb(main):002:0> 3000 - 1500
=>1500
#掛け算
irb(main):003:0> 50 * 40
=>2000
#割り算
irb(main):004:0> 600 / 15
=>40
#5 ÷ 2をした余り
irb(main):005:0> 5 % 2
=>1
```

### 比較演算子
```sh
#20は1より大きいか？
irb(main):001:0> 1 < 20
=>true
#1は20より大きいか？
irb(main):002:0> 1 > 20
=>false
 #2 × 5は10と等しいか？
irb(main):003:0> 2 * 5 == 10
=>true
#10は20と等しいか？
irb(main):004:0> 10 == 20
=>false


#2 × 3は6以上か？
irb(main):001:0> 2 * 3 >= 6
=>true
#2 × 3は6より大きいか？
irb(main):002:0> 2 * 3 > 6
=>false
#4 × 5は20以下か？
irb(main):003:0> 4 * 5 <= 20
=>true
#4 × 5は6より小さいか？
irb(main):004:0> 4 * 5 < 6
=>false


#2 × 3 は6ではないか？
irb(main):001:0> 2 * 3 != 6
=>false
#2 × 3 は10ではないか？
irb(main):002:0> 2 * 3 != 10
=>true

```

### 変数・定数
```ruby
# 変数の名前は、原則として小文字から始めます。
hensuu = 7

# 定数を定義するときは名前の最初を大文字にします
CONST = 10
```

#### Example
```sh
# dogの部分は自分の干支を英語で入力してください
irb(main):001:0> ANIMAL = "dog"
# 定数を出力
irb(main):002:0> puts "I was born in the year of #{ANIMAL}."
```

### Backslash `\`
```ruby
puts "改行したい改行したい\n改行した"
puts "タブしたいタブしたい\tタブした"

puts '改行したい改行したい\n改行できなかった'
puts 'タブしたいタブしたい\tタブできなかった'
```

### 式展開
```ruby
#式展開をする場合は文字列を作るときに"(ダブルクォテーション)で囲む必要があります
name = "佐藤"

puts "わたしの名前は#{name}です。"
puts "1と3を足した値は#{(1 + 3)}です"

# シングルクォテーション
puts 'わたしの名前は#{name}です。'
puts '1と3を足した値は#{(1 + 3)}です'
```

### `gets`
```ruby
input = gets

puts "入力した値は#{input}です"
```

### `chomp`メソッド
`chomp`メソッドは文字列の末尾の改行文字を取り除いた新しい文字列を返してくれるメソッドです。
```ruby
string = "改行します\n\n"

puts string       # 改行される
puts string.chomp # 改行されない
```

<a name="hash"></a>
## `hash` オブジェクト
```ruby
hash1 = {"title" => "るろうに剣心"}

# symbol object
hash2 = {:title => "時をかける少女"}
hash3 = {title: "君に届け"}
puts hash1
puts hash2
puts hash3

# get value
hash = {:title => "時をかける少女"}
puts hash[:title]
```
* ハッシュオブジェクトは{}を使って生成する
* シンボルオブジェクトは名前を識別するためのラベルで基本は文字列と同様に扱える
* ハッシュオブジェクトのキーには文字列、もしくはシンボルが使える

<a name="if"></a>
## 条件分岐 `if`
```ruby
if 条件式1 then
# 条件式1が真(true)のときに実行する処理
elsif 条件式2 then
# 条件式1が偽(false)のとき、かつ
# 条件式2が真(true)のときに実行する処理
else
# 条件式1と条件式2がどちらとも偽(false)のときに実行する処理
end
```
<a name="while"></a>
## `while` 分
```ruby
while 条件式 do
    # 処理を実行する
end
```

<a name="method"></a>
## メソッドの書き方
```ruby
def say_hello # 定義
    puts "Hello World"
end

say_hello # 実行
```

#### `exit`
```ruby
  while true do
    input = gets.chomp         # ユーザーの入力
    if input == "exit" then    # exitと入力されたら
      exit                     # プログラムを終了
    end
    puts "ループ中"
  end
```


<a name="list"></a>
## 配列

### `each` メソッド
配列オブジェクトに対してeachメソッドを実行すると、配列に含まれる要素を順に取り出して繰り返し処理が行われます。すなわち、配列の要素の数だけ処理が行われます。
eachメソッドの使い方は以下のように配列オブジェクトに使います。
```ruby
配列オブジェクト.each do |変数|
    # 処理
end
```

<a name="class"></a>
## クラス

#### クラスの定義
```ruby
class クラス名
  # 変数/メソッドの定義
end
```

#### クラス名のルール
クラス名は半角英大文字から始まる名前にします。
例: User Account Image Group など

#### クラスメソット
```ruby
class Review
  def self.get_review_count
    return 0
  end
end

review = Review.new # Reviewクラスのインスタンスを生成
puts review

puts Review.get_review_count
```

#### インスタンスメソット
```ruby
class Review
  def self.get_review_count
    return 0
  end

  def show_review
    puts "ジャンル : " + "映画"
    puts "---------------------------"
    puts "タイトル : " + "るろうに剣心"
    puts "---------------------------"
    puts "感想 :"
    puts "アクションがすごい！"
    puts "---------------------------"
  end
end

review = Review.new # Reviewクラスのインスタンスを生成
puts review

puts review.show_review
```

#### initializeメソッド

initializeメソッドはコンストラクタとも言い、インスタンスが生成された(newメソッドを実行された)タイミングで生成されたインスタンスで自動で実行されるインスタンスメソッドです。

```ruby
class クラス名
    def initialize
        # 生成のときの処理
        puts "生成されました" # 例
    end
end

インスタンス = クラス名.new # initializeメソッドが呼ばれ
#{}"生成されました"と表示される
```

#### クラス変数
* クラス変数は変数名の最初に@@(アットマーク2つ)をつける
* クラス変数はクラスメソッド、インスタンスメソッドの両方で使える

```ruby
class クラス名
    @@クラス変数
end
```

example:
```ruby
class Review
  @@review_count = 0
  def self.get_review_count
    return @@review_count
  end

  def initialize
    @@review_count = @@review_count + 1
  end

  def show_review
    puts "ジャンル : " + "映画"
    puts "---------------------------"
    puts "タイトル : " + "るろうに剣心"
    puts "---------------------------"
    puts "感想 :"
    puts "アクションがすごい！"
    puts "---------------------------"
  end
end

puts Review.get_review_count

review = Review.new
review.show_review

puts Review.get_review_count
```

#### インスタンス変数

* インスタンス変数変数は変数名の最初に@(アットマーク1つ)をつける
* インスタンス変数はインスタンスメソッドでのみ使える

```ruby
class クラス名
    @@クラス変数
end
```

Example:
```ruby
class Review
  @@review_count = 0
  def self.get_review_count
    return @@review_count
  end

  def initialize
    @@review_count = @@review_count + 1
  end

  def write_review(title, genre, impression)
    @title = title
    @genre = genre
    @impression = impression
  end

  def show_review
    line = "---------------------------"
    puts "ジャンル : #{@genre}\n#{line}\n"
    puts "タイトル : #{@title}\n#{line}\n"
    puts "感想 :\n#{@impression}\n#{line}\n"
  end
end

puts Review.get_review_count

review = Review.new
review.write_review("るろうに剣心", "映画", "アクションがすごい！")
review.show_review

puts Review.get_review_count
```

#### クラスのインスタンスの確認
```ruby
test = 'これはStringのインスタンスです'
test.instance_of?(String) # true


test = []
test.instance_of?(Array) # true

test = Array.new
test.instance_of?(Array) # true
```

#### クラスの継承
あるクラスに定義されたメソッドを、別のクラスで利用出来るようにすることを継承と言います。
```ruby
class 子クラス名 < 親クラス名
```

Example
```ruby
# 親クラス
class Car
    def speed_up
        puts "加速します"
    end

    def speed_down
      puts "減速します"
    end

    def horn
      puts "プップー"
    end
end


# 子クラス
class PatrolCar < Car #クラスの継承
    def siren
      puts "ピーポーピーポー"
    end
end

class TruckCar < Car #クラスの継承
    def carry
      puts "荷物を運びます"
    end
end
```




<a name="sort"></a>
## ソート

* 配列
```ruby
scores = [90, 88, 100, 50]

puts scores.sort
#>>
50
88
90
100

puts scores.sort{|a, b| b <=> a }
#>>
100
90
88
50
```

* ハッシュ
```ruby
score1 = {:score => 90}
score2 = {:score => 88}
score3 = {:score => 100}
score4 = {:score => 50}
scores = [score1, score2, score3, score4]
puts scores.sort{|a, b| b[:score] <=> a[:score] } # 変数aと変数bを入れ替える
```





















