function sendEmail() {
  console.log("hi from sendEmail function");

  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,

    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_dmfdec1", "template_pjlcqzn", params)
    .then(alert("Email Sent!"))
    .catch((err) => console.log("this is the Error", err));
}
