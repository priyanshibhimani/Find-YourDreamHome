  const primaryhHeader=document.querySelector(".primary-header")
    const navtoggle = document.querySelector(".mobile-nav-toggle");
    const primarynav = document.querySelector(".primary-navigation");
        primaryhHeader.addEventListener("click", () => {
                    primarynav.hasAttribute("data-visible")
                        ? navtoggle.setAttribute("aria-expanded",false)
                        :navtoggle.setAttribute("aria-expanded",true)
                    primarynav.toggleAttribute("data-visible");
                    primaryhHeader.toggleAttribute("data-overley");
                });




  
   
