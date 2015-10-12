## Install PySpark

### Java Environment

* Install Java JDK 8. 
[Download here](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

* Add Java Path to .bashrc(or .zshrc)

```sh
# Java PATH
export JAVA_HOME=$(/usr/libexec/java_home -v 1.8)
```

* Check Java Version
```sh
$ java -version
java version "1.8.0_60"
Java(TM) SE Runtime Environment (build 1.8.0_60-b27)
Java HotSpot(TM) 64-Bit Server VM (build 25.60-b23, mixed mode)
```

### Apache Maven 

* Install Apache Maven 3.3.3
[Download Here](https://maven.apache.org/download.cgi#)

* Add Maven Path to .bashrc(or .zshrc)
```sh
### Add apache-maven-3.3.3
export PATH="/Users/Bya/apache-maven-3.3.3/bin:$PATH"
```

* Check Maven Version
```sh
$ mvn -V
Apache Maven 3.3.3 (7994120775791599e205a5524ec3e0dfe41d4a06; 2015-04-22T20:57:37+09:00)
Maven home: /Users/Bya/apache-maven-3.3.3
Java version: 1.8.0_60, vendor: Oracle Corporation
Java home: /Library/Java/JavaVirtualMachines/jdk1.8.0_60.jdk/Contents/Home/jre
Default locale: en_US, platform encoding: UTF-8
OS name: "mac os x", version: "10.11", arch: "x86_64", family: "mac"
```

### Install Apache Spark

* [Download Apache Spark](http://spark.apache.org/downloads.html)

* Build Spark

```sh
# inside spark directory
$ cd spark-1.5.1

# build spark
$ build/mvn -DskipTests clean package
```


## Test PySpark

```sh
# inside spark directory
$ cd spark-1.5.1

# run pyspark console
$ ./bin/pyspark
Welcome to
      ____              __
     / __/__  ___ _____/ /__
    _\ \/ _ \/ _ `/ __/  '_/
   /__ / .__/\_,_/_/ /_/\_\   version 1.5.1
      /_/

Using Python version 2.7.9 (default, Feb 10 2015 03:28:08)
SparkContext available as sc, SQLContext available as sqlContext.

# test pyspark
>>> sc.parallelize(range(1000)).count()
15/10/12 21:52:45 INFO SparkContext: Starting job: count at <stdin>:1
15/10/12 21:52:45 INFO DAGScheduler: Got job 0 (count at <stdin>:1) with 4 output partitions
15/10/12 21:52:45 INFO DAGScheduler: Final stage: ResultStage 0(count at <stdin>:1)
15/10/12 21:52:45 INFO DAGScheduler: Parents of final stage: List()
15/10/12 21:52:45 INFO DAGScheduler: Missing parents: List()
15/10/12 21:52:45 INFO DAGScheduler: Submitting ResultStage 0 (PythonRDD[1] at count at <stdin>:1), which has no missing parents
15/10/12 21:52:45 INFO MemoryStore: ensureFreeSpace(4104) called with curMem=0, maxMem=555755765
15/10/12 21:52:45 INFO MemoryStore: Block broadcast_0 stored as values in memory (estimated size 4.0 KB, free 530.0 MB)
15/10/12 21:52:45 INFO MemoryStore: ensureFreeSpace(2701) called with curMem=4104, maxMem=555755765
15/10/12 21:52:45 INFO MemoryStore: Block broadcast_0_piece0 stored as bytes in memory (estimated size 2.6 KB, free 530.0 MB)
15/10/12 21:52:45 INFO BlockManagerInfo: Added broadcast_0_piece0 in memory on localhost:54696 (size: 2.6 KB, free: 530.0 MB)
15/10/12 21:52:45 INFO SparkContext: Created broadcast 0 from broadcast at DAGScheduler.scala:861
15/10/12 21:52:45 INFO DAGScheduler: Submitting 4 missing tasks from ResultStage 0 (PythonRDD[1] at count at <stdin>:1)
15/10/12 21:52:45 INFO TaskSchedulerImpl: Adding task set 0.0 with 4 tasks
15/10/12 21:52:45 INFO TaskSetManager: Starting task 0.0 in stage 0.0 (TID 0, localhost, PROCESS_LOCAL, 2589 bytes)
15/10/12 21:52:45 INFO TaskSetManager: Starting task 1.0 in stage 0.0 (TID 1, localhost, PROCESS_LOCAL, 2833 bytes)
15/10/12 21:52:45 INFO TaskSetManager: Starting task 2.0 in stage 0.0 (TID 2, localhost, PROCESS_LOCAL, 2839 bytes)
15/10/12 21:52:45 INFO TaskSetManager: Starting task 3.0 in stage 0.0 (TID 3, localhost, PROCESS_LOCAL, 2839 bytes)
15/10/12 21:52:45 INFO Executor: Running task 2.0 in stage 0.0 (TID 2)
15/10/12 21:52:45 INFO Executor: Running task 0.0 in stage 0.0 (TID 0)
15/10/12 21:52:45 INFO Executor: Running task 3.0 in stage 0.0 (TID 3)
15/10/12 21:52:45 INFO Executor: Running task 1.0 in stage 0.0 (TID 1)
15/10/12 21:52:46 INFO PythonRunner: Times: total = 492, boot = 488, init = 3, finish = 1
15/10/12 21:52:46 INFO PythonRunner: Times: total = 492, boot = 482, init = 9, finish = 1
15/10/12 21:52:46 INFO PythonRunner: Times: total = 498, boot = 492, init = 5, finish = 1
15/10/12 21:52:46 INFO PythonRunner: Times: total = 511, boot = 505, init = 6, finish = 0
15/10/12 21:52:46 INFO Executor: Finished task 3.0 in stage 0.0 (TID 3). 995 bytes result sent to driver
15/10/12 21:52:46 INFO Executor: Finished task 0.0 in stage 0.0 (TID 0). 995 bytes result sent to driver
15/10/12 21:52:46 INFO Executor: Finished task 1.0 in stage 0.0 (TID 1). 995 bytes result sent to driver
15/10/12 21:52:46 INFO Executor: Finished task 2.0 in stage 0.0 (TID 2). 995 bytes result sent to driver
15/10/12 21:52:46 INFO TaskSetManager: Finished task 2.0 in stage 0.0 (TID 2) in 577 ms on localhost (1/4)
15/10/12 21:52:46 INFO TaskSetManager: Finished task 1.0 in stage 0.0 (TID 1) in 584 ms on localhost (2/4)
15/10/12 21:52:46 INFO TaskSetManager: Finished task 3.0 in stage 0.0 (TID 3) in 582 ms on localhost (3/4)
15/10/12 21:52:46 INFO TaskSetManager: Finished task 0.0 in stage 0.0 (TID 0) in 614 ms on localhost (4/4)
15/10/12 21:52:46 INFO TaskSchedulerImpl: Removed TaskSet 0.0, whose tasks have all completed, from pool
15/10/12 21:52:46 INFO DAGScheduler: ResultStage 0 (count at <stdin>:1) finished in 0.641 s
15/10/12 21:52:46 INFO DAGScheduler: Job 0 finished: count at <stdin>:1, took 0.823196 s
1000
```


## Interactive Tools

### IPython
```sh
$ IPYTHON=1 ~/spark-1.5.1/bin/pyspark
```

### IPython Notebook
```sh
$ IPYTHON_OPTS='notebook' ~/spark-1.5.1/bin/pyspark
```









