const express = require('express')
const app = express()
const port = 3000

app.get('/',(request,response)=>{
    response.send('Hello, World')
})

app.post("/frutas", (request, response) => {
    response.send("Frutas");
  });

//O listen sempre tem que ficar no final do arquivo app (que é o arquivo de configurações)
app.listen(port,()=>{
    console.log(`Nosso servidor está rodando na porta ${port}`)
})