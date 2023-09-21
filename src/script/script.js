function openContent(event, articleName) {
    let i, article_content_vls, tablinks;
    article_content_vls = document.getElementsByClassName("article_content_vls");
    for (i = 0; i < article_content_vls.length; i++) {
      article_content_vls[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(articleName).style.display = "block";
    event.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();