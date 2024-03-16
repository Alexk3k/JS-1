/*
    дополнить объект методами для получиния имени:
    - компании
    - сео
    - сотрудника
*/


const company = {
    name : 'OOO Agro',
    getCorpName : function(){
        console.log(this.name) 
    },
    employees : [
        {
            name : 'Sveta'
        }
    ],
    ceo : 'Vasya',
    getCeoName : function(){
        console.log(this.ceo) 
    }

}

company.employees.map((item) => {
        console.log(item.name) ;
 })


company.getCeoName()
company.getCorpName()

