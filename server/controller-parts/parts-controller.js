let parts = require('./parts');


module.exports = {
    create: (req,res) => {
        const {parts,performance} = req.id;
        parts.push({id,parts});
        id++
    },

    read: (req, res) => {
        res.status(200).json(parts);
    },

    update: (req, res) => {
    },

    delete: (req, res) => {
 
        const {part} = req.params
        parts.forEach((part))
    },

    getPartById: (req, res) => {
        const {id} = req.params;
        let selected;
        parts.forEach((part)=>{
            console.log(part.id)
            if(part.id == id){
                 selected = parts
                 
            }
        })
        res.status(200).send(selected)
    }
}