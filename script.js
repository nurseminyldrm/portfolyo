//Daktilo Efekti (Typewriter Effect)
const words = ["Bilgisayar Mühendisiyim.", "Yapay Zeka Meraklısıyım.", "Full-Stack Geliştiriciyim."];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.getElementById('typewriter').innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 2000); // Kelime bittikten sonra 2 saniye bekle
            return false;
        }
        timer = setTimeout(loopTyping, 100); // Harflerin yazılma hızı (ms)
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.getElementById('typewriter').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0; // Başa dön
            }
            setTimeout(typingEffect, 500); // Diğer kelimeye geçmeden önce küçük bir boşluk
            return false;
        }
        timer = setTimeout(loopDeleting, 50); // Harflerin silinme hızı (ms)
    };
    loopDeleting();
}
// Sayfa tamamen yüklendiğinde efekti başlat
window.onload = typingEffect;



// 3D Kart Eğilmesi (Tilt Effect) Kodları
const cards = document.querySelectorAll('section.card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const cardRect = card.getBoundingClientRect();
        
        // Farenin kart içindeki X ve Y koordinatlarını buluyoruz
        const x = e.clientX - cardRect.left;
        const y = e.clientY - cardRect.top;
        
        // Kartın merkez noktasını hesaplıyoruz
        const midX = cardRect.width / 2;
        const midY = cardRect.height / 2;
        
        // Eğilme açılarını hesaplıyoruz (Açıyı artırmak/azaltmak için 15 değerini değiştirebilirsin)
        const angleX = (midY - y) / 15;
        const angleY = (x - midX) / 15;
        
        // Kartı 3 boyutlu olarak döndürüyoruz
        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-3px)`;
    });
    // Fare kartın üzerinden çekildiğinde kartı eski orijinal haline döndürüyoruz
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
});


// İmleç Takip Eden Neon Işık Kodları
const glow = document.querySelector('.cursor-glow');

window.addEventListener('mousemove', (e) => {
    // Işığın konumunu farenin X ve Y koordinatlarına eşitliyoruz
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// EKSTRA ŞIKLIK: Fare bir butona veya linke geldiğinde ışık büyüsün
const interactiveElements = document.querySelectorAll('a, .skills-list li, section.card');

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        glow.style.width = '450px';
        glow.style.height = '450px';
    });
    element.addEventListener('mouseleave', () => {
        glow.style.width = '300px';
        glow.style.height = '300px';
    });
});



// İletişim Formu Doğrulama (Validation) Kodları
const form = document.getElementById('portfolio-form');
const successBox = document.getElementById('success-box');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Sayfanın yeniden yüklenmesini engeller
    
    // Giriş alanlarını ve hata yer tutucularını seçiyoruz
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    let isValid = true;
    
    // 1. İsim Kontrolü
    if (name.value.trim() === "") {
        showError(name, 'name-error', 'Lütfen adınızı yazın.');
        isValid = false;
    } else {
        clearError(name, 'name-error');
    }
    
    // 2. E-posta Kontrolü (Regex ile kurumsal kontrol)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        showError(email, 'email-error', 'Geçerli bir e-posta adresi giriniz.');
        isValid = false;
    } else {
        clearError(email, 'email-error');
    }
    
    // 3. Mesaj Kontrolü
    if (message.value.trim() === "") {
        showError(message, 'message-error', 'Lütfen bir mesaj bırakın.');
        isValid = false;
    } else {
        clearError(message, 'message-error');
    }
    
    // EĞER HER ŞEY DOĞRUYSA (Form Valid ise)
    if (isValid) {
        form.style.display = 'none'; // Formu gizle
        successBox.style.display = 'block'; // Başarı mesajını göster
    }
});

// Hata Gösterme Fonksiyonu
function showError(input, errorId, message) {
    const errorSpan = document.getElementById(errorId);
    errorSpan.innerText = message;
    input.parentElement.classList.add('invalid');
}

// Hatayı Temizleme Fonksiyonu
function clearError(input, errorId) {
    const errorSpan = document.getElementById(errorId);
    errorSpan.innerText = '';
    input.parentElement.classList.remove('invalid');
}



// Yukarı Kaydır Butonu Kodları
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
    // Sayfa 300 pikselden fazla aşağı kaydırıldıysa butona 'show' sınıfını ekle
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});
// Butona tıklandığında sayfayı yumuşakça en yukarı kaydır
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Yumuşak kayma hareketi sağladım.
    });
});