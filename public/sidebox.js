
    function openMenu(){
       var divMenuSlide =document.getElementById("menu-slide");
       
       if(divMenuSlide.style.width == "0px" || divMenuSlide.style.width == ""){
           divMenuSlide.style.width="300px";
         
           divMenuSlide.style.display="block";
       } else {
           divMenuSlide.style.width="0px";
      
           divMenuSlide.style.display="none"
       }
       
    }
    function closeMenu(){
           var divMenuSlide =document.getElementById("menu-slide");
         
           divMenuSlide.style.width="0";
       
           divMenuSlide.style.display="none"
          
       
    }
    document.addEventListener("click", function(event) {
        if (!event.target.closest("#bars")) {
            closeMenu();
        }
    });
