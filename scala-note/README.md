* [Scala Install](#install)
* [Scala Hello Word](#hello_world)
* [Scala CUI: sbt](#sbt)


---
<a name="install"></a>

## Installation

```sh
# install scala
$ brew install scala


# check version
$ scala -version
Scala code runner version 2.11.7 -- Copyright 2002-2013, LAMP/EPFL

$ scalac -version
Scala compiler version 2.11.7 -- Copyright 2002-2013, LAMP/EPFL

$ fsc -version
Fast Scala compiler version 2.11.7 -- Copyright 2002-2013, LAMP/EPFL
```


<a name="hello_world"></a>
## Hello World

* PERL
```sh
$ scala
Welcome to Scala version 2.11.7 (Java HotSpot(TM) 64-Bit Server VM, Java 1.8.0_65).
Type in expressions to have them evaluated.
Type :help for more information.

scala> println("Helllo World!")
Helllo World!

scala> :quit
```

* File
```scala
object HelloWorld extends App {
    println("Hello World!")
}
```

```sh
# compile
$ scalac hello_world.scala

# run
$ scala HelloWorld
Hello World!
```

* fsc(fast)
```sh
# compile
$ fsc hello_world.scala

# run
$ scala HelloWorld
Hello World!
```


<a name="sbt"></a>
## CUI: sbt(Simple Build Tool)

```sh
# install
$ brew install sbt

```


