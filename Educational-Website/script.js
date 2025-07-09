const nav = document.querySelector(".nav"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");


navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
}); 

function sendemail() {
  Email.send({
      Host: "smtp.elasticemail.com",
      Username: "bdcommerce09@gmail.com",
      Password: "7247E6A8582F935491EC67310B93F9CB4EA8",
      To: 'bdcommerce09@gmail.com',
      From: 'bdcommerce09@gmail.com',
      Subject: "Message from Website",
      Body: "Name: " + document.getElementById("name").value
      + " <br> Email: " + document.getElementById('email').value
      + " <br> Phone No: " + document.getElementById('phone').value
      + " <br> Message: " + document.getElementById('message').value
  }).then(
      message => alert('Message Sent Successfully!')
  );
}