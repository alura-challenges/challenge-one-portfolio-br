function openNav() {
    
    document.getElementsByClassName("sidebar")[0].style.width = "250px";
    document.getElementsByClassName("main__document")[0].style.marginLeft = "0";
  }
  
  function closeNav() {
    document.getElementsByClassName("sidebar")[0].style.width = "0";
    document.getElementsByClassName("main__document")[0].style.marginLeft= "0";
  }