const contactForm = document.querySelector("#emailjs-id");
const submitBtn = document.querySelector("#submit-btn");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const publicKey = "4bzSRJJS5rcD2ruCd";
const serviceID = "service_44eyt8l";
const templateID = "template_vzo61c9";

emailjs.init(publicKey);

contactForm.addEventListener("submit", (e) => 
{
    e.preventDefault();
    submitBtn.innerText = "Sending...";
    const inputFields = 
    {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value,
    }

    emailjs.send(serviceID, templateID, inputFields).then(() => 
    {
        submitBtn.innerText = "Email Sent";
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    }, (error) => 
    {
        console.log(error);
        submitBtn.innerText = "Something went wrong..";
    });
});