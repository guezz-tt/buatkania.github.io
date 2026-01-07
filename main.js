onload = () =>{
        document.body.classList.remove("container");
};
const titleTxt = "nih buat kamuu";
const bodyTxt = "aku cuma bisa ngasih bunga virtual sederhana ini hehehe...";
const footerTxt = "muachhh... 😘";

function typeWriter(text, element, speed, callback) {
    let i = 0;
    element.innerHTML = "";
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            setTimeout(callback, 1000);
        }
    }
    type();
}

// Muncul setelah 7 detik
setTimeout(() => {
    const card = document.getElementById('romantic-card');
    card.classList.add('active');

    setTimeout(() => {
        typeWriter(titleTxt, document.getElementById('typing-title'), 150, () => {
            typeWriter(bodyTxt, document.getElementById('typing-text'), 100, () => {
                typeWriter(footerTxt, document.getElementById('typing-closing'), 150);
            });
        });
    }, 1000);
}, 7000);