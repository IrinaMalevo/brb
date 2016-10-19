         var mapOpen = document.querySelector(".js-open");
         var mapPopup = document.querySelector(".modal-content-map");
         var mapClose = mapPopup.querySelector(".modal-content-close");

         mapOpen.addEventListener("click", function(event) {
         event.preventDefault(); 
          mapPopup.classList.add("modal-content-two");   
          });

          mapClose.addEventListener("click", function(event) {
          event.preventDefault(); 
          mapPopup.classList.remove("modal-content-two");   
          });