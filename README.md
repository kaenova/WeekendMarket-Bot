# WeekendMarket BOT for hitomodachi Discord Server
 
## Docker 
If you want to run this on docker please fill the `env.list` file first and then build it and run it on docker, passing your environment using `env.list` file:

### Build The Image
Make sure your active working directory is in this repository
```sh
$ docker build -t [tag name] .
```
### Run The Image
```sh
$ docker run -d -t --env-file ./env.list --name [Name of the container] [docker image tag name] 
```

## Javascript
If you want to run on local machine (not using docker) make a file `.env` from `env_example.txt` amd fill your environment.


#### Just a Personal Note
Yoo I'm quite happy to learn Docker. This is my first time to deploy a project on docker. Maybe i should dockerize all my projects :D

<p align="center">
<br><br>
<img src="https://cdn.discordapp.com/attachments/829581469936386079/830470865190912081/K-Gif.gif" height="60px"/>
</p>
