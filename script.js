let bookPart = document.querySelector(".book-part");
let menuIcon = document.querySelector("i");
let upPart = document.querySelector(".up-part");
menuIcon.addEventListener("click", function () {
  let sideBar = document.createElement("div");
  //   let [Home, About, Category, ContactUs] = document.createElement("h6");
  let Home = document.createElement("h6");
  let About = document.createElement("h6");
  let Category = document.createElement("h6");
  let ContactUs = document.createElement("h6");
  let closeIcon = document.createElement("i");
  closeIcon.className = "fa fa-times";
  closeIcon.style.color = "white";
  closeIcon.style.height = "200px";

  Home.innerHTML = "Home";
  About.innerHTML = "About";
  Category.innerHTML = "Category";
  ContactUs.innerHTML = "Contact Us";
  sideBar.style.display = "flex";
  sideBar.style.flexDirection = "column";
  sideBar.style.justifyContent = "flex-start";
  sideBar.appendChild(closeIcon);
  sideBar.appendChild(Home);
  sideBar.appendChild(About);
  sideBar.appendChild(Category);
  sideBar.appendChild(ContactUs);

  sideBar.style.width = "250px";
  sideBar.style.height = "100vh";
  sideBar.style.position = "fixed";
  sideBar.style.zIndex = "9999";
  sideBar.style.backgroundColor = "black";
  sideBar.style.opacity = "0.9";
  upPart.appendChild(sideBar);
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
      let bookTitle = document.createElement("h6");
      cardBook.style.width = "318px";
      cardBook.style.height = "318px";
      cardBook.style.borderRadius = "10px";
      cardBook.style.backgroundColor = "white";
      bookCover.src = `https://covers.openlibrary.org/b/id/${element.cover_id}-M.jpg`;
      bookCover.style.width = "95%";
      bookCover.style.height = "95%";

      bookTitle.innerText = element.title;
      cardBook.appendChild(bookCover);
      cardBook.appendChild(bookTitle);
      bookPart.appendChild(cardBook);
    });
  } catch (err) {
    console.log(err);
  }
}
getData();
//63a6b97b
