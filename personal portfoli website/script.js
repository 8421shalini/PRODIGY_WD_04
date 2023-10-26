var typed = new Typed('#element', {
    strings: ['Web Developer', 'UI/UX Designer','Web Designer'],
    typeSpeed: 50,
    });

    
        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
    
        function opentab(tabname) {
            for (var i = 0; i < tabcontents.length; i++) {
                tabcontents[i].style.display = "none";
            }
            for (var i = 0; i < tablinks.length; i++) {
                tablinks[i].classList.remove("active-link");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).style.display = "block";
        }
    
        for (var i = 0; i < tablinks.length; i++) {
            tablinks[i].addEventListener("click", function() {
                var tabName = this.getAttribute("onclick").split("'")[1];
                opentab(tabName);
            });
        }

