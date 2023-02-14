const realtyData = require('./db.json');
let houseId = 4;

module.exports = {
    getHouses: (req,res) => {
        res.status(200).send(realtyData);
    },
    deleteHouse: (req,res) => {
        let {id} = req.params;
        let index = realtyData.findIndex(houses => houses.id === +id);
        realtyData.splice(index,1);
        res.status(200).send(realtyData);
    },  
    createHouse:  (req,res) => {
        let newHouse = {...req.body, id:houseId}
        realtyData.push(newHouse);
        res.status(200).send(realtyData);
    },
    updateHouse: (req,res) => {
        let {id} = req.params;
        let {type} = req.body;
        let index = realtyData.findIndex(house => house.id === +id);
        if(type === 'plus') {
            realtyData[index].price += 10000;
        } else {
            realtyData[index].price -= 10000;
        }
        res.status(200).send(realtyData);
    }
}