 
let carParts = [
    {id: 1, type: "Performance", item: "turbo", price: 3500},
    {id: 2, type: "Performance", item: "coilovers", price: 2000},
    {id: 3, type: "Performance", item: "exhaust", price: 400},
    {id: 4, type: "Performance", item: "wheels", price: 2800},
    {id: 5, type: "Performance", item: "audio", price: 1500},
    {id: 6, type: "Performance", item: "tuner", price: 350},
    {id: 7, type: "Performance", item: "injectors", price: 1750},
    {id: 8, type: "Maintenance", item: "air-filter", price: 40},
    {id: 9, type: "Maintenance", item: "tie-rod", price: 150},
    {id: 10, type: "Maintenance", item: "radiator", price: 190},
    {id: 11, type: "Maintenance", item: "waterpump", price: 340},
    {id: 12, type: "Maintenance", item: "oil", price: 110},

]
var id = 13;
module.exports = {
    create: (req,res) => {
        const {type,item,price} = req.body;
        let newParts = {
            id:id,
            type:type,
            item:item,
            price:price
        };
        id++
        carParts.push(newParts);
        res.status(200).json(carParts)
    },
    read: (req,res)=>{ 
        res.status(200).json(carParts)
    
    },

    update: (req, res) => {
        const {price} = req.body
        const {id} = req.query
        //console.log(req.body)
         carParts.forEach((newParts, index) =>{
             if(newParts.id == id){
                 //console.log(carParts[index])
                   carParts[index].price = +price|| carParts[index].price
             };
         })
         res.status(200).json(carParts)
     },
    
    delete:(req,res) => {
        const {id} = req.params
        //console.log(req.params)
        carParts.forEach((newParts, index)=>{
            if(newParts.id == req.params.id){
                carParts.splice(index, 1)
            }
        })

            res.status(200).json(carParts)
    },

    getPartById: (req, res) => {
        const {id} = req.params;
        let selected;
        carParts.forEach((part)=>{
           // console.log(part.id)
            if(part.id == id){
                 selected = part
                 
            }
        })
        res.status(200).send(selected)
    }
}