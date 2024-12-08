const express = requiere('express'); //importa el framework Express, necesario para crear el servidor web
const app = express(); //crea una instancia de Express para configurar y controlar el servidor
const port = 3000; //D  efine el puerto en el cual el servidor escuchara las solicitudes

app.use(express.json());

app.post('/sumar', (req, res)=> { //Crea un POST en sumar, que toma dos numeros y devuelve su suma
   const {app, b} = req.body; 
   res.json({resultado: a + b}); // Envia un JSON de respuesta con el resultado de la suma
});

app.post('/restar',(req, res)=> { //Crea un Post en restar, que toma dos numeros y devuelve su resta
    const {a,b} = req.body;
    res.json({resultado: a*b}); //Envia un JSON de respuesta con el resultado de la resta
});

app.post('/multiplicar',(req,res)=> { //Crea un Post en multiplicar, que toma dos numeros y devulve su multiplicacion
    const{a,b}= req.body;
    res.json({resultado: a*b}); //Envia un JSON de respuesta con el resultado de la multiplicación
});

app.post('/dividir', (req, res)=>{ //Crea un Post en dividir, que toma dos numero y devuelve su division
    const {a,b}= req.body;
    res.json({resultado: b !== 0 ? a/b: "ERROR: División por cero"}); //En via un JSON de respuesta con el resultado de la division
});

app.listen(port,()=>{
    console.log(`Servidor correido en http://localhost:${port}`); //Arranca e servidor para que escuche en el uerto especificadocd
});