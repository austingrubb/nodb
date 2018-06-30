const express = require('express');
const bodyParser = require('body-parser');
const pC = require('./controller-parts/parts-controller');



const app = express();

app.use(bodyParser.json());

app.get('/api/get_all_parts/:id', pC.getPartById);


app.get('/api/get_all_parts', pC.read)

app.delete('/api/get_all_parts', pC.delete);

const port = 4000;

app.listen(port, () => console.log(`sever listening on port ${port}`))