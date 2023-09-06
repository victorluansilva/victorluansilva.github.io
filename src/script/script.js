function openContent(event, articleName) {
    var i, article_content, tablinks;
    article_content = document.getElementsByClassName("article-content");
    for (i = 0; i < article_content.length; i++) {
      article_content[i].style.display = "none";
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