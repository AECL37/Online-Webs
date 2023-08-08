
function navBarLoad(type, page) {
    const navBar = document.querySelector(".nav-links");
    var list = [//Button icon is the homepage for index.html and about.html
        '<div class="dropdown">',// ---dropdown 0
        '<button class="dropbtn">Front End</button>',// button 1
        '<div class="panel">',// panel 2
        '<a class="nav-drop-link" href="front-end-about.html">What is Front end?</a>',
        '<a class="nav-drop-link" href="html-about.html">HTML</a>',//3
        '<a class="nav-drop-link" href="css-about.html">CSS</a>',//4
        '<a class="nav-drop-link" href="js-about.html">Javascript</a>',//5
        '</div>',//panel 6
        '</div>',// --------dropdown 7
        '<div class="dropdown">',// --------dropdown 8
        '<button class="dropbtn">Back End</button>',// button 9
        '<div class="panel">',// panel 10
        '<a class="nav-drop-link" href="back-about.html">Coming Soon</a>',//11
        '</div>',//panel 12
        '</div>'//-------dropdown 13
    ];
    if (type == "index") {
        list.unshift('<a class="nav-link-home" href="about.html">About</a>')
    }
    if (type == "html") {
        if (page == "about") {
            list.unshift(
                '<div class="dropdown">',
                '<button class="dropbtn"><span class="selected">HTML</span></button> <',
                '<div class="panel">',
                '<a class="nav-drop-link active" href="html-about.html">About HTML</a>',
                '<a class="nav-drop-link" href="html-tutorial.html">HTML Tutorial</a>',
                '</div>',
                '</div>'
            )
        }
        if (page == "tutorial") {
            list.unshift(
                '<div class="dropdown">',
                '<button class="dropbtn">HTML</button> <',
                '<div class="panel">',
                '<a class="nav-drop-link" href="html-about.html">About HTML</a>',
                '<a class="nav-drop-link active" href="html-tutorial.html">HTML Tutorial</a>',
                '</div>',
                '</div>'
            )
            list.unshift(
                '<div class="dropdown">',
                '<button class="dropbtn"><span class="selected">Tutorials</span></button> < ',
                '<div class="panel">',
                '<a class="nav-drop-link" href="html-basics.html">The Basics</a>',
                '<a class="nav-drop-link" href="html-semantics-and-non-semantics.html">Semantics and Non-Semantics</a>',
                '</div>',
                '</div>'
            )
        }
    }
    if (type == "css") {
        if (page == "about") {
            list.unshift(
                '<div class="dropdown">',
                '<button class="dropbtn"><span class="selected">CSS</span></button> <',
                '<div class="panel">',
                '<a class="nav-drop-link active" href="css-about.html">About CSS</a>',
                '<a class="nav-drop-link" href="css-tutorial.html">CSS Tutorial</a>',
                '</div>',
                '</div>'
            )
        }
        if (page == "tutorial") {
            list.unshift(
                '<div class="dropdown">',
                '<button class="dropbtn">CSS</button> <',
                '<div class="panel">',
                '<a class="nav-drop-link" href="css-about.html">About CSS</a>',
                '<a class="nav-drop-link active" href="css-tutorial.html">CSS Tutorial</a>',
                '</div>',
                '</div>'
            )
            list.unshift(
                '<div class="dropdown">',
                '<button class="dropbtn"><span class="selected">Tutorials</span></button> < ',
                '<div class="panel">',
                '<a class="nav-drop-link" href="css-basics.html">The Basics</a>',
                '<a class="nav-drop-link" href="css-kinds-of-selectors.html">Kinds of Selectors</a>',
                '</div>',
                '</div>'
            )
        }
    }
    navBar.innerHTML = list.toString().replaceAll(",", " ");

    //Program for the dropdown
    var acc = document.getElementsByClassName("dropbtn");
    var dropdown = document.getElementsByClassName("dropdown");
    //Toggles the panel class
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none"
            } else {
                removeAll();
                panel.style.display = "block";
            }
            this.classList.toggle("active");
        })
    }
    
    //Checks if a dropdown class is over the mouse
    let isCursorInside = false
    for (var i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("mouseover", () => {
            isCursorInside = true;
        });

        dropdown[i].addEventListener("mouseout", () => {
            isCursorInside = false;
        })
    }
    //Closes the dropdown and its class
    document.addEventListener("click", () => {
        if (!isCursorInside) {
            removeAll(true);
        }
    })
    //the function for closing the dropdown and its class
    function removeAll(type) {
        for (var i = 0; i < acc.length; i++) {
            acc[i].classList.remove("active");
            var panel = acc[i].nextElementSibling;
            panel.style.display = "none";
        }
    }
}