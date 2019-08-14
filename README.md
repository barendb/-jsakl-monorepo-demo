# monorepo-demo

## demo notes

1. Show changes to repo via github
   [show pr](https://github.com/barendb/-jsakl-monorepo-demo/pull/1/files)

2. make sure you run 
```
nvm use
npm run clean && npm run bootstrap && npm run build
```

3. Demo that CatTester9000 works 
```
const { CatTester9000 } = require('@jsakl/module3')
CatTester9000('some unknown cat')
CatTester9000('Javanese')
```

3. run verdaccio 
```
docker run -it --rm --name verdaccio -p 4873:4873 verdaccio/verdaccio
```

4. 
```
npm adduser --registry=http://localhost:4873 --scope=@jsakl
```

5. Show git tags & github releases
  [github releases](https://github.com/barendb/-jsakl-monorepo-demo/releases)
