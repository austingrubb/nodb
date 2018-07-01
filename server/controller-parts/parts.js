 
let carParts = [
    {id: 1, type: "performance", item: "turbo"},
    {id: 2, type: "performance", item: "coilovers"},
    {id: 3, type: "performance", item: "exhaust"},
    {id: 4, type: "performance", item: "wheels"},
    {id: 5, type: "performance", item: "audio"},
    {id: 6, type: "performance", item: "tuner"},
    {id: 7, type: "performance", item: "injectors"},
    {id: 8, type: "maintenance", item: "air-filter"},
    {id: 9, type: "maintenance", item: "tie-rod"},
    {id: 10, type: "maintenance", item: "radiator"},
    {id: 11, type: "maintenance", item: "waterpump"},
    {id: 12, type: "maintenance", item: "oil"},

]
var id = 12;
module.exports = {
    create: (req,res) => {
        const {type,item} = req.body;
        let newParts = {
            id:id,
            type:type,
            item:item
        };
        id++
        carParts.push(newParts);
        res.status(200).json(carParts)
    },
    read: (req,res)=>{ 
        res.status(200).json(carParts)
    
    },

    update: (req, res) => {
        const {id, type, item} = req.body
        
         carParts.foreach((newParts, index) =>{
             if(newParts.id == id){
                   carParts[index].type = type||carParts[index].type
             };
         })
         carParts[index] = {
             id:carParts[index].id,
             type:req.body.type||carParts[index].type,
             item:req.body.item||carParts[index].item
         }
         res.status(200).json(carparts)
     },
    
    delete:(req,res) => {
        let {id} = req.query;
        let {part} = req.params
        carParts.forEach((carParts, id)=>{
            if(part.id == id){
                carParts.splice(id, 1)  
            }
        })
        res.status(200).json(carParts)
    },

    getPartById: (req, res) => {
        const {id} = req.params;
        let selected;
        carParts.forEach((part)=>{
            console.log(part.id)
            if(part.id == id){
                 selected = part
                 
            }
        })
        res.status(200).send(selected)
    }
}