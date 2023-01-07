function togglemenu(){
    const menuMoobile = document.getElementById("menu-mobile")

    if(menuMoobile.className === "menu-mobile-active"){
        menuMoobile.className = "menu-mobile"
    }else{
        menuMoobile.className = "menu-mobile-activ"
    }
}