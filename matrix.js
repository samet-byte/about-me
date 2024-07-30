function choosePill(color) {
            if (color === 'red') {
                gsap.to(".container", {duration: 1, opacity: 0, scale: 0, rotation: 720, onComplete: () => {
                    window.location.href = "/1";
                }});
            } else {
                gsap.to(".container", {duration: 1, opacity: 0, y: "-100%", ease: "power2.in", onComplete: () => {
                    window.history.back();
                }});
            }
        }

        // Matrix rain effect
        const canvas = document.querySelector('.matrix-rain');
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const katakana = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const nums = '0123456789';

        const alphabet = katakana + latin + nums;

        const fontSize = 16;
        const columns = canvas.width / fontSize;

        const rainDrops = [];

        for (let x = 0; x < columns; x++) {
            rainDrops[x] = 1;
        }

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#0F0';
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < rainDrops.length; i++) {
                const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

                if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    rainDrops[i] = 0;
                }
                rainDrops[i]++;
            }
        };

        setInterval(draw, 30);

        // Pill hover animations
        gsap.to("#redPill", {duration: 2, rotation: 360, repeat: -1, ease: "none"});
        gsap.to("#bluePill", {duration: 2, rotation: -360, repeat: -1, ease: "none"});