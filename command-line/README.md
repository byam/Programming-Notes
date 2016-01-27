
Server Notes

## Download file from Server

```sh
# download one file from server
$ scp -i key.pem username@serverIP:/path/to/file /path/to/save/file

# example
$ scp -i ~/.ssh/bya-aws.pem ubuntu@54.92.75.228:/home/ubuntu/datas/GW6/1509192045_CFCvsARSENAL.txt .


# download all files from server
$ scp -r -i key.pem username@serverIP:/path/to/file /path/to/save/file

# example
$ scp -r -i ~/.ssh/bya-aws.pem ubuntu@54.92.75.228:/home/ubuntu/datas/GW7/ ~/Dropbox/Research/datas
```


## Upload file to Server
```sh
# upload one file from server
$ scp -i key.pem upload_file username@serverIP:/path/to/save/upload_file

# example
$ scp -i ~/.ssh/bya-aws.pem word_features5k_shortReviews.pickle ubuntu@54.92.75.228:/home/ubuntu/pickled_algos/word_features5k_shortReviews.pickle
```


### Check core number (MacOSX)
```sh
$ sysctl -n hw.ncpu
4


## show interl core model
$ sysctl -n machdep.cpu.brand_string`
```



