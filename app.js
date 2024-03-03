/* 
    Сделать объект склад с методиками добавления на склад поиска
    по складу товара и расчет веса
*/

const wareHouse = {
    goods : [],
    findGoodById : function (id) {
        wareHouse.goods.map(function(item){
            if(id == item.id){
                return console.log(item)
            }
        });
    },
    addGood : function (goodName) {
        return wareHouse.goods.push(goodName); 
    },
    getWeightKg : function (id) {
        wareHouse.goods.map(function(item){
            if(id == item.id){
            return console.log(item?.weight?.kg)
            }
        })
        
    }

};

/* Товары */

const car = {
    id : 1,
    weight :{
        kg : 1000
    },
    brand : 'Ford'
};

const chair = {
    id : 2,
    weight: {
        kg : 2
    }
};

const paper = {
    id : 3,
    color : 'red'
};

console.log(wareHouse.addGood(car));
console.log(wareHouse.addGood(chair));
console.log(wareHouse.addGood(paper));
console.log(wareHouse);

wareHouse.getWeightKg(1);

wareHouse.findGoodById(1)