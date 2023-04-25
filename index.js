const proficiency = [
  {
    name: "Vue.js",
    images: "https://storage.googleapis.com/project-porto-bucket/vuejs.png",
  },
  {
    name: "Javascript",
    images:
      "https://storage.googleapis.com/project-porto-bucket/javascript.png",
  },
  {
    name: "MySQL",
    images: "https://storage.googleapis.com/project-porto-bucket/mysql.png",
  },
  {
    name: "PHP",
    images: "https://storage.googleapis.com/project-porto-bucket/php.png",
  },
  {
    name: "Java",
    images: "https://storage.googleapis.com/project-porto-bucket/java.png",
  },
  {
    name: "Python",
    images: "https://storage.googleapis.com/project-porto-bucket/python.png",
  },
  {
    name: "Tailwind",
    images: "https://storage.googleapis.com/project-porto-bucket/tailwind.jpg",
  },
  {
    name: "Bootstrap 5",
    images: "https://storage.googleapis.com/project-porto-bucket/bootstrap.png",
  },
];
const el = document.getElementById("proficiency");
let text = "";
for (let i = 0; i < proficiency.length; i++) {
  text += `<div class="col-3 mt-4 text-center">
                    <img
                        src="${proficiency[i].images}"
                        class="img-prof"
                    />
                    <h5 class="mt-3">${proficiency[i].name}</h5>
                   </div>`;
}
el.innerHTML = text;
var slideDown = {
  distance: "1000%",
  origin: "bottom",
  opacity: null,
  duration: 1000,
  delay: 300,
  reset: true,
};

ScrollReveal().reveal(el, slideDown);
