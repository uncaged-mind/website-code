async function loadComponent(id, file) {

    const container = document.getElementById(id);


    if (!container) return;


    const response = await fetch(file);


    const html = await response.text();


    container.innerHTML = html;

}



loadComponent(
    "navbar",
    "components/navbar.html"
);


loadComponent(
    "footer",
    "components/footer.html"
);