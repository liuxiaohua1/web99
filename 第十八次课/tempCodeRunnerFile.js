
var pitaya = {}

//var pitaya = Object.creat()

var pitaya2 = {
    name:"火龙果",
    price:15,
    origin:"海南省",
    weight:1,
    nut:{
        name:"火龙果 nut"
    },
    printName:function(){
        console.log(this.name)
    }
}

pitaya2.printName();
pitaya2["printName"]()