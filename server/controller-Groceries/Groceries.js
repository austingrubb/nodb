 
let groceries = [
    {id: 1, type: "Heathy Food", item: "cucumber", price: 3.00},
    {id: 2, type: "Junk Food", item: "salsa", price: 7.00},
    {id: 3, type: "Junk Food", item: "chips", price: 4.00},
    {id: 4, type: "Heathy Food", item: "frozon-berrys", price: 2.80},
    {id: 5, type: "Heathy Food", item: "alomond-milk", price: 3.50},
    {id: 6, type: "Heathy Food", item: "ribeye", price: 8.50},
    {id: 7, type: "Heathy Food", item: "chicen-brest", price: 1.75},
    {id: 8, type: "Junk Food", item: "french-fries", price: 4.00},
    {id: 9, type: "Junk Food", item: "kit-kat", price: 1.50},
    {id: 10, type: "Junk Food", item: "chetos", price: 1.90},
    {id: 11, type: "Heathy Food", item: "apple", price: 3.40},
    {id: 12, type: "Heathy Food", item: "bannana", price: 1.10},

]
var id = 13;
module.exports = {
    create: (req,res) => {
        const {type,item,price} = req.body;
        let newGroceries = {
            id:id,
            type:type,
            item:item,
            price:price
        };
        id++
        groceries.push(newGroceries);
        res.status(200).json(groceries)
    },
    read: (req,res)=>{ 
        res.status(200).json(groceries)
    
    },

    update: (req, res) => {
        const {price} = req.body
        const {id} = req.query
        console.log(req.body)
         groceries.forEach((newGroceries, index) =>{
             if(newGroceries.id == id){
                 console.log(groceries[index])
                   groceries[index].price = +price|| groceries[index].price
             };
         })
         res.status(200).json(groceries)
     },
    
    delete:(req,res) => {
        const {id} = req.params
        console.log(req.params)
        groceries.forEach((newGroceries, index)=>{
            if(newGroceries.id == req.params.id){
                groceries.splice(index, 1)
            }
        })

            res.status(200).json(groceries)
    },

    getGroceriesById: (req, res) => {
        const {id} = req.params;
        let selected;
        groceries.forEach((groceries)=>{
           // console.log(groceries.id)
            if(Groceries-item.id == id){
                 selected = Groceries-item
                 
            }
        })
        res.status(200).send(selected)
    }
}