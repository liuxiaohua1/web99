

function apple (){
    var number=0;
    return function(){
    console.log(number++)
    }
}

var a = apple()
a()
a()
a()



//
for(var i=0;i<10;i++){
    (function(i){
        setTimeout(function(){
           console.log("this is" + i)
    },2000)
})(i)
}





