document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage ||
            (currentPage === "" && link.getAttribute("href") === "index.html")) {
            link.classList.add("active");
        }
    });

    const projects = {
  1: {
    title: "Rumah Modern",
    image: "images/des1a.jpg",
    description: "Proyek hunian modern dengan konsep minimalis tropis, memaksimalkan pencahayaan alami dan ventilasi silang."
  },
  2: {
    title: "Gedung Perkantoran",
    image: "images/des2.jpg",
    description: "Gedung perkantoran dengan pendekatan arsitektur kontemporer dan efisiensi ruang kerja."
  },
  3: {
    title: "Interior Premium",
    image: "images/des3a.jpg",
    description: "Desain interior premium dengan material eksklusif dan tata cahaya modern."
  }
};

// Ambil ID dari URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Tampilkan data
if (projects[id]) {
  document.getElementById("project-title").innerText = projects[id].title;
  document.getElementById("project-image").src = projects[id].image;
  document.getElementById("project-description").innerText = projects[id].description;
}

});
