document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.querySelector('.typing-text span');
    const texts = [
        "Web Developer",
        "Developer",
        "Web Designer",
        "Gamer",
        "Digital Accounts Seller"
    ];
    let currentIndex = 0;
    let currentText = '';
    let isDeleting = false;
    let isTyping = true;
    let speed = 100;
    let deleteSpeed = 50; 
    let pauseTime = 1500; 

    function type() {
        const text = texts[currentIndex];

        if (isTyping) {
            currentText = text.substring(0, currentText.length + 1);
            typingElement.textContent = currentText;

            if (currentText === text) {
                isTyping = false;
                setTimeout(() => {
                    isDeleting = true;
                }, pauseTime);
            }
        } else if (isDeleting) {
            currentText = text.substring(0, currentText.length - 1);
            typingElement.textContent = currentText;

            if (currentText === '') {
                isDeleting = false;
                isTyping = true;
                currentIndex = (currentIndex + 1) % texts.length;
                setTimeout(type, pauseTime);
                return;
            }
        }

        setTimeout(type, isTyping ? speed : deleteSpeed);
    }

    
    function startTypingAnimation() {
        typingElement.classList.add('typing');
        type();
    }
 
    const audio = document.getElementById('backgroundMusic');
    audio.volume = 0.05;
    audio.loop = true; 

 
    function playAudio() {
        audio.play().then(() => {
            console.log('Audio playing successfully');
        }).catch(error => {
            console.log('Audio play failed:', error);
        });
    }
  
    document.getElementById('overlay').addEventListener('click', function() {
        const overlay = document.getElementById('overlay');
        overlay.classList.add('hidden');

        const mainContent = document.getElementById('mainContent');
        mainContent.classList.add('show');

        
        playAudio();

       
        document.body.addEventListener('click', playAudio, { once: true });
        document.body.addEventListener('touchstart', playAudio, { once: true });
        document.body.addEventListener('touchend', playAudio, { once: true });

       
        startTypingAnimation();
    });

    function sanitizeInput(input) {
        return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
});

    document.querySelector('.home-img img').addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
  const socialIcons = document.querySelectorAll('.social-icons a');

   
    socialIcons.forEach(icon => {
        icon.addEventListener('contextmenu', function(e) {
            e.preventDefault(); 
        });
    });
