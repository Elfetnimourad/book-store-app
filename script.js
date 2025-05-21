let bookPart = document.querySelector(".book-part");
let menuIcon = document.querySelector("i");
let upPart = document.querySelector(".up-part");
menuIcon.addEventListener("click", function () {
  let sideBar = document.createElement("div");
  //   let [Home, About, Category, ContactUs] = document.createElement("h6");
  let Home = document.createElement("a");
  let About = document.createElement("a");
  let Category = document.createElement("a");
  let ContactUs = document.createElement("a");
  let closeIcon = document.createElement("i");
  closeIcon.className = "bi bi-arrow-left";
  closeIcon.style.color = "white";
  closeIcon.style.lineHeight = "50px";
  menuIcon.style.display = "none";
  //   closeIcon.style.backgroundColor = "red";
  About.href = "/About.html";
  Home.href = "/";
  ContactUs.href = "/ContactUs.html";

  Home.innerText = "Home";
  About.innerText = "About";
  Category.innerText = "Category";
  ContactUs.innerText = "Contact Us";
  sideBar.style.display = "flex";
  sideBar.style.flexDirection = "column";
  sideBar.style.justifyContent = "flex-start";
  sideBar.appendChild(closeIcon);
  sideBar.appendChild(Home);
  sideBar.appendChild(About);
  sideBar.appendChild(Category);
  sideBar.appendChild(ContactUs);

  sideBar.style.width = "30%";
  sideBar.style.height = "100vh";
  sideBar.style.position = "fixed";
  sideBar.style.zIndex = "9999";
  sideBar.style.backgroundColor = "black";
  sideBar.style.opacity = "0.9";
  upPart.appendChild(sideBar);

  // route
  // const route = (event) => {
  //   event = event || window.event;
  //   event.preventDefault();
  //   window.history.pushState({}, "", event.target.href);
  //   handleLocation();
  // };
  // const routes = {
  //   404: "/404.html",
  //   "/": "/index.html",
  //   "/About": "/About.html",
  //   "/ContactUs": "/ContactUs.html",
  // };
  const handleLocation = async () => {
    // const path = window.location.pathname;
    // const route = routes[path] || routes[404];
    // await fetch(route).then((data) => data.text());
    // document.getElementById("main-page").innerHTML = html;
  };

  // window.onpopstate = handleLocation;
  // window.route = route;

  // handleLocation();

  // About.onclick = route();

  //close Icon
  closeIcon.addEventListener("click", function () {
    sideBar.remove();
    menuIcon.style.display = "flex";
  });
});
async function getData() {
  try {
    const res = await fetch(
      "https://openlibrary.org/subjects/programming.json?limit=20"
    );
    const data = await res.json();
    let arr = data.works;
    console.log(data);
    console.log(arr);
    arr.map((element) => {
      let cardBook = document.createElement("div");
      let bookCover = document.createElement("img");
      let bookTitle = document.createElement("p");
      //   cardBook.style.width = "24%";
      cardBook.style.height = "100%";
      cardBook.style.borderRadius = "10px";
      cardBook.style.backgroundColor = "white";
      cardBook.className = "card-book";
      bookCover.src = `https://covers.openlibrary.org/b/id/${element.cover_id}-M.jpg`;
      bookCover.style.width = "99%";
      bookCover.style.height = "80%";

      bookTitle.innerText = element.title;
      cardBook.appendChild(bookCover);
      cardBook.appendChild(bookTitle);
      bookPart.appendChild(cardBook);
    });
  } catch (err) {
    console.log(err);
  }
}
window.onscroll = function () {
  upPart.classList.add("fixed");
};
getData();
//63a6b97b
