let menuIcon = document.querySelector("i");
let upPart = document.querySelector(".up-part");
let input = document.querySelector("input");
let sideBar = document.querySelector(".sidebar");
let closeIcon = document.querySelector("#closeIcon");
let allOptionsOfSelect = document.querySelectorAll("option");
let categoryList = document.querySelector("#categorySelect");
let bookPart = document.querySelector(".book-part");
let About = document.getElementById("aboutLink");
// let array = [];
let arr = JSON.parse(localStorage.getItem("arr")) || [];

closeIcon.addEventListener("click", function () {
  sideBar.classList.toggle("d-none", true);
});
menuIcon.addEventListener("click", function () {
  sideBar.classList.toggle("d-none", false);
});
//   // route
// const route = (event) => {
//   event = event || window.event;
//   event.preventDefault();
//   window.history.pushState({}, "", event.currentTarget.href);
//   handleLocation();
//   console.log("hhh");
// };
// const routes = {
//   404: "/404.html",
//   "/": "/index.html",
//   "/About": "/pages/about.html",
//   "/ContactUs": "/pages/ContactUs.html",
// };
// const handleLocation = async () => {
//   const path = window.location.pathname;
//   const route = routes[path] || routes[404];
//   const html = await fetch(route).then((data) => data.text());
//   document.getElementById("main-page").innerHTML = html;
// };

// window.addEventListener("hashchange", handleLocation);
// window.addEventListener("DOMContentLoaded", handleLocation);
// Utility to fetch and render HTML pages

categoryList.addEventListener("change", function () {
  console.log("hiiii");
  bookPart.classList.toggle("d-none", true);
  getData(
    `https://openlibrary.org/subjects/${categoryList.value}.json?limit=52`,
    { method: "PUT" }
  );
  bookPart.classList.toggle("d-none", false);
});

async function getData(url) {
  try {
    const res = await fetch(url);

    const data = await res.json();
    let arr = data.works;

    localStorage.setItem("arr", JSON.stringify(arr));
    console.log(data);

    input.onchange = function (e) {
      showItems(arr.filter((ele) => ele.title === e.target.value));
      if (e.target.value === "") {
        showItems(arr);
      }
    };

    showItems(arr);
  } catch (err) {
    console.log(err);
  }
}
window.onscroll = function () {
  upPart.classList.add("fixed");
};
getData(`https://openlibrary.org/subjects/science.json?limit=52`);
//63a6b97b
function showItems(items) {
  bookPart.innerHTML = ""; //clear the list items API to Update

  items.forEach((element) => {
    let bookPart = document.querySelector(".book-part");

    //   cardBook.style.width = "24%";
    let cardBook = document.createElement("div");
    let bookCover = document.createElement("img");
    let bookTitle = document.createElement("p");
    cardBook.style.height = "100%";
    cardBook.style.borderRadius = "10px";
    cardBook.style.backgroundColor = "white";
    cardBook.className = "card-book";
    bookCover.src = `https://covers.openlibrary.org/b/id/${element.cover_id}-M.jpg`;
    bookCover.style.width = "99%";
    bookCover.style.height = "80%";
    let bookPdf = document.createElement("a");
    bookPdf.className = "bookPdf";
    bookPdf.href = `https://openlibrary.org/${element.key}/${element.title}.pdf`;
    bookPdf.innerHTML = "read";
    bookTitle.innerText = element.title;
    cardBook.appendChild(bookCover);
    cardBook.appendChild(bookTitle);
    cardBook.appendChild(bookPdf);

    bookPart?.appendChild(cardBook);
  });
}

// function () {
//   let sideBar = document.createElement("div");
//   //   let [Home, About, Category, ContactUs] = document.createElement("h6");
//   let Home = document.createElement("a");
//   let About = document.createElement("a");
//   let Category = document.createElement("select");
//   let ContactUs = document.createElement("a");
//   let closeIcon = document.createElement("i");
//   let optGr = document.createElement("optgroup");
//   closeIcon.className = "bi bi-arrow-left";
//   closeIcon.style.color = "white";
//   closeIcon.style.lineHeight = "50px";
//   menuIcon.style.display = "none";
//   //   closeIcon.style.backgroundColor = "red";
//   About.href = "/pages/About.html";
//   Home.href = "/";
//   ContactUs.href = "/pages/ContactUs.html";

//   Home.innerText = "Home";
//   About.innerText = "About";
//   Category.innerText = "Category";
//   ContactUs.innerText = "Contact Us";
//   sideBar.style.display = "flex";
//   sideBar.style.flexDirection = "column";
//   sideBar.style.justifyContent = "flex-start";
//   sideBar.appendChild(closeIcon);
//   sideBar.appendChild(Home);
//   sideBar.appendChild(About);
//   sideBar.appendChild(Category);
//   sideBar.appendChild(ContactUs);

//   sideBar.style.width = "30%";
//   sideBar.style.height = "100vh";
//   sideBar.style.position = "fixed";
//   sideBar.style.zIndex = "9999";
//   sideBar.style.backgroundColor = "black";
//   sideBar.style.opacity = "0.9";
//   upPart.appendChild(sideBar);
//   //side bar for category

//   // Category.appendChild(categoryLabel);
//   let opt1 = document.createElement("option");
//   let opt2 = document.createElement("option");
//   let opt3 = document.createElement("option");
//   let opt4 = document.createElement("option");
//   opt1.innerText = "science";
//   opt2.innerText = "programming";
//   opt3.innerText = "history";
//   opt4.innerText = "math";

//   if (opt2.value === "programming") {
//   }

//   // opt2.addEventListener(
//   //   "click",
//   // );

//   // arr.addEventListener("click", function () {
//   //   subject = opt2.value;
//   //   console.log(subject);
//   // });
//   optGr.appendChild(opt1);
//   optGr.appendChild(opt2);
//   optGr.appendChild(opt3);
//   optGr.appendChild(opt4);
//   Category.appendChild(optGr);
//   console.log(optGr.children.item(1).textContent, "this opt");
//   Category.addEventListener("click", function () {
//     // console.log("from contact us");
//     // let sideBarForCategory = document.createElement("div");
//     // sideBarForCategory.style.height = "20vh";
//     // sideBarForCategory.style.width = 10%";
//     // sideBarForCategory.style.backgroundColor = "white";
//     // sideBarForCategory.style.opacity = "0.9";
//     // sideBarForCategory.style.zIndex = "99999";
//     // // Category.style.display = "flex";
//     // sideBar.appendChild(sideBarForCategory);
//   });

//   // route
//   const route = (event) => {
//     event = event || window.event;
//     event.preventDefault();
//     window.history.pushState({}, "", event.target.href);
//     handleLocation();
//   };
//   const routes = {
//     404: "/404.html",
//     "/": "/index.html",
//     "/About": "/pages/About.html",
//     "/ContactUs": "/pages/ContactUs.html",
//   };
//   const handleLocation = async () => {
//     const path = window.location.pathname;
//     const route = routes[path] || routes[404];
//     await fetch(route).then((data) => data.text());
//     // document.getElementById("main-page").innerHTML = html;
//   };

//   window.onpopstate = handleLocation;
//   window.route = route;

//   handleLocation();

//   About.onclick = route();

//   let allOptions = document.querySelectorAll("option");
//   console.log(allOptions[0].value, "this is all for Option");
//   // allOptions.forEach((e) => {
//   //   console.log(e);
//   function getSpecified() {
//     if (Category.value !== "") {
//       getData(
//         `https://openlibrary.org/subjects/${Category.value}.json?limit=20`
//       );
//     }
//   }

//   // });
//   //close Icon
//   closeIcon.addEventListener("click", function () {
//     sideBar.remove();
//     menuIcon.style.display = "flex";
//   });
// }
