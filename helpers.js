module.exports={
    partialHelper: function(id){
        console.log("id from Helper");
        console.log(id);
        if(id==="1"){return "post";}
        if(id==="2"){return "captionb";}
        if(id==="3"){return "snap";}
       
    }
}