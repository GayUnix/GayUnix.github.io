window.addEventListener("load", (ev) => {
    document.addEventListener("mousemove", (event) => {
        c = document.getElementById("pointer")        
        c.style.left = event.pageX + "px"
        c.style.top = event.pageY + "px"
    }) 
    document.getElementById("server").addEventListener("click", (eoc) => {
        window.top.location = "https://discord.gg/4ACcpGr9UT"
    })
})