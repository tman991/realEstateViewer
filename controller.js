const houses = require('.db.json')
let globalId = 4

module.exports = {
    getHouses: (req, res) => res.status(200).send(houses),
    deleteHouse: (res, req) => {
        let index = houses.findIndex(elem => elem.id === +req.params.id)
        houses.splice(index, 1)
        res.status(200).send(houses)
    },
    createHouse: (res, req) => {
        let {address, price, imageURL} = req.body
        let newHouse = {
            id: globalId,
            address,
            price,
            imageURL
        }
        houses.push(newHouse)
        res.status(200).send(houses)
        globalId++
    },
    updateHouse: (res, req) => {
        let {id} = req.params
        let {type} = req.body
        let index = houses.findIndex(elem => +elem.id === +id)
    
        if (house[index].price <= 1000 && type === 'minus') {
            house[index].price = 0
            res.status(200).send(houses)
        } else if ( type === 'plus') {
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if (type === 'minus') {
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else {
            res.sendStatus(400)
        }
    
    }
}