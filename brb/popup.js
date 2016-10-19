       var link = document.querySelector(".login");
        var popup = document.querySelector(".modal-content");
         var close = popup.querySelector(".modal-content-close");
        var form = popup.querySelector("form");
        var login = popup.querySelector("[name=login]");
        var password = popup.querySelector("[name=password]");
        
        
        link.addEventListener("click", function(event) {
        event.preventDefault(); 
        popup.classList.add("modal-content-show");   
        login.focus();
         });

        
        close.addEventListener("click", function(event) {
         event.preventDefault();
          popup.classList.remove("modal-content-show");
         });
        
         form.addEventListener("submit", function(event) {
          if (!login.value || !password.value) {
            event.preventDefault();
            console.log("Нужно ввести логин и пароль");
            }
         });