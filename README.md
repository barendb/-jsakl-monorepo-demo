# monorepo-demo

## demo notes

1. make sure you run
```nvm use```

2. run verdaccio 
```
docker run -it --rm --name verdaccio -p 4873:4873 verdaccio/verdaccio
```

3. 
```
npm adduser --registry=http://localhost:4873 --scope=@jsakl
```
