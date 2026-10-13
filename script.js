window.addEventListener("load", function () {
    const headerTarget = document.getElementById("site-header");
    const footerTarget = document.getElementById("site-footer");
  
    fetch("includes/header.html")
      .then(response => response.text())
      .then(html => {
        if (headerTarget) headerTarget.innerHTML = html;
      });
  
    fetch("includes/footer.html")
      .then(response => response.text())
      .then(html => {
        if (footerTarget) footerTarget.innerHTML = html;
      });
  });