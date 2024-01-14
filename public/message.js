
   var submitted=document.getElementById("submitted").innerHTML;
   if(submitted=="yes"){
       var contacttitle=document.getElementById("contact-title");
       var contactForm=document.getElementById("contact-form");
     var contactThankYou=document.getElementById("contact-thanku");
     contacttitle.style.display="none";
     contactForm.style.display="none";
        contactThankYou.style.display="block";
   } else {
       console.log("errore");
   }

