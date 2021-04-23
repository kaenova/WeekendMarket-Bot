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

