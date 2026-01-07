// Do not load footer on login & register pages
const excludedPages = ["Register.html", "Login.html"];

const currentPage = window.location.pathname.split("/").pop();

if (!excludedPages.includes(currentPage)) {
    fetch("Footer.html")
        .then(res => res.text())
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data);
        });
}
