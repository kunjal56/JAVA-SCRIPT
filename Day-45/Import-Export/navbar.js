function loadNav(){
    let nav = `<nav>
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Product</a>
        <a href="">Contact Us</a>
    </nav>`
    document.getElementById("navbar").innerHTML = nav
}

export{loadNav}