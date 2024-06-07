function scrollToSecondSection() {
    document.querySelector('.about').scrollIntoView({ behavior: 'smooth' });
}

function scrollToThirdSection() {
    document.querySelector('.kuliner').scrollIntoView({ behavior: 'smooth' });
}

const wrapper = document.querySelector(".wrapper"),
carousel = document.querySelector(".carousel"),
buttons = document.querySelectorAll(".button");
let imageIndex = 0;

const slideImage = (direction) => {
imageIndex += direction;
  imageIndex = (imageIndex + 4) % 4; // Loop around if at the end
  carousel.style.transform = `translateX(-${imageIndex * 100}%)`;
};

buttons.forEach((button) => {
button.addEventListener("click", (e) => {
    const direction = e.target.id === "next" ? 1 : -1;
    slideImage(direction);
});
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('/SajiKukar/navbar/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        });
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".action");
    const popup = document.querySelector(".popup-box");
    const closeBtn = document.querySelector(".popup-close");

    buttons.forEach((button) => {
        button.addEventListener("click", function() {
            popup.classList.add("fade-in");
            popup.style.display = "block";
        });
    });

    closeBtn.addEventListener("click", function() {
        popup.classList.add("fade-out");
        setTimeout(function() {
            popup.style.display = "none";
            popup.classList.remove("fade-out");
        }, 500); // Mengatur timeout sesuai durasi animasi fade-out
    });
});

function showDetailPopup(placeName) {
    var popup = document.getElementById("detailPopup");
    var title = document.getElementById("popupTitle");
    var description = document.getElementById("popupDescription");
    var price = document.getElementById("popupPrice");
    var map = document.getElementById("popupMap");

    // Mengatur konten popup sesuai dengan tempat makanan yang dipilih
    switch (placeName) {
        case "Rumah Makan Tepian Pandan":
            title.innerText = "Rumah Makan Tepian Pandan";
            description.innerText = "Nikmati masakan tradisional dan hidangan laut segar dengan pemandangan tepi sungai yang indah. Tempat ideal untuk keluarga dan wisatawan.";
            price.innerText = "Rp. 50.000 - Rp. 1.000.000";
            map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.693267027517!2d117.00170159999999!3d-0.4536383999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df67ab6a1842bb5%3A0x60ce7f358422903b!2sRM%20Tepian%20Pandan!5e0!3m2!1sid!2sid!4v1717736001837!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
            break;        
        case "Pondok Zidane":
            title.innerText = "Pondok Zidane";
            description.innerText = "Hadirkan masakan khas Indonesia dalam suasana nyaman. Cocok untuk acara keluarga dan pertemuan bisnis dengan menu beragam.";
            price.innerText = "Rp. 70.000 - Rp. 120.000";
            map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.706063065689!2d116.96108887496472!3d-0.429802899565982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df66538c99b9e73%3A0x10e966ac7d3fc126!2sZidane%20Resto!5e0!3m2!1sid!2sid!4v1717735948568!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
            break;
        case "Kopiral":
            title.innerText = "Kopiral";
            description.innerText = "Kafe yang fokus pada kopi lokal berkualitas dengan berbagai hidangan ringan dan berat. Tempat cozy untuk nongkrong atau bekerja.";
            price.innerText = "Rp. 40.000 - Rp. 80.000";
            break;
        // Tambahkan case untuk tempat makanan lainnya di sini...
        default:
            title.innerText = "Informasi tidak tersedia";
            description.innerText = "Maaf, informasi untuk tempat makanan ini belum tersedia.";
            price.innerText = ""; // Harga kosong jika informasi tidak tersedia
            contact.innerText = ""; // Kontak kosong jika informasi tidak tersedia
            map.innerHTML = ""; // Peta kosong jika informasi tidak tersedia
            break;
    }

    // Menampilkan popup
    popup.style.display = "block";
}

function hideDetailPopup() {
    var popup = document.getElementById("detailPopup");
    popup.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".action");
    const popup = document.querySelector(".popup-box");
    const closeBtn = document.querySelector(".popup-close");

    button.addEventListener("click", function() {
        popup.classList.add("fade-in");
        popup.style.display = "block";
    });

    closeBtn.addEventListener("click", function() {
        popup.classList.add("fade-out");
        setTimeout(function() {
            popup.style.display = "none";
            popup.classList.remove("fade-out");
        }, 500); // Mengatur timeout sesuai durasi animasi fade-out
    });
});
