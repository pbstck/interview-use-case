## Pubstack use case interview 

Clone this repository and run `pnpm install` in it.  

### Launch API server

```
cd server
pnpm run serve
```

Server will be listening on `localhost:3000/api/context/config/:sitename`

### Launch static script server for development 

```
cd script
pnpm run dev
```

Script will be served through `localhost:4000/index.js`

### Site to debug

https://public-preview.s3.eu-west-1.amazonaws.com/testdebugsite/index.html
