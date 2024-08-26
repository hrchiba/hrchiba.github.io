document.getElementById('lang-toggle').addEventListener('click', function() {
    const currentLang = document.documentElement.lang;
    const langToggleBtn = document.getElementById('lang-toggle');

    if (currentLang === 'ja') {
        document.documentElement.lang = 'en';
        langToggleBtn.textContent = '日本語';

        document.getElementById('about-content-ja').style.display = 'none';
        document.getElementById('about-content-en').style.display = 'block';

        document.getElementById('research-content-ja').style.display = 'none';
        document.getElementById('research-content-en').style.display = 'block';

        document.getElementById('awards-content-ja').style.display = 'none';
        document.getElementById('awards-content-en').style.display = 'block';

        document.getElementById('activities-content-ja').style.display = 'none';
        document.getElementById('activities-content-en').style.display = 'block';
    } else {
        document.documentElement.lang = 'ja';
        langToggleBtn.textContent = 'English';

        document.getElementById('about-content-ja').style.display = 'block';
        document.getElementById('about-content-en').style.display = 'none';

        document.getElementById('research-content-ja').style.display = 'block';
        document.getElementById('research-content-en').style.display = 'none';

        document.getElementById('awards-content-ja').style.display = 'block';
        document.getElementById('awards-content-en').style.display = 'none';

        document.getElementById('activities-content-ja').style.display = 'block';
        document.getElementById('activities-content-en').style.display = 'none';
    }
});

document.getElementById('menu-icon').addEventListener('click', function() {
    const navbar = document.getElementById('navbar').querySelector('ul');
    navbar.classList.toggle('active');
});

// メニュー内のリンクがクリックされたときにメニューを折りたたむ処理
document.querySelectorAll('#navbar ul li a').forEach(function(link) {
    link.addEventListener('click', function() {
        const navbar = document.getElementById('navbar').querySelector('ul');
        navbar.classList.remove('active');
    });
});
