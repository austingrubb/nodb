const express = require('express');
const bodyParser = require('body-parser');
const gC = require('./controller-Groceries/Groceries');



const app = express();

app.use(bodyParser.json());

app.get('/api/get_all_Groceries/:id', gC.getGroceriesById);


app.get('/api/get_all_Groceries', gC.read)

app.put('/api/get_all_Groceries', gC.update);

app.post('/api/get_all_Groceries', gC.create);

app.delete('/api/get_all_Groceries/:id', gC.delete);

 
const port = 4000;

app.listen(port, () => console.log(`sever listening on port ${port}`))