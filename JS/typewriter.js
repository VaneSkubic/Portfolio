var title = document.getElementsByClassName('about-title-header')[0];
var paragraph = document.getElementsByClassName('about-paragraph')[0];
var hand = document.getElementsByClassName('about-title-img')[0];
var cancel = document.getElementsByClassName('cancel')[0]
var canceled = false

var typewriter;
var pause = 1000;
var string = `I am <strong>Vane Skubic</strong>, 
    a web developer and part-time musician based in Logatec, Slovenia. 
    My mission is to equip <strong>your brand with a strong visual identity</strong> 
    on the web. My main interests are web design/development, mobile development, and 3D. 
    Currently, I am studying computer engineering at The Faculty of Computer and Information Science in Ljubljana. 
    I've also spent a good part of my teens playing guitar and studying music.
    <br><strong>Let's work together!</strong>`

typewriter = new Typewriter(title, {
    loop: false,
    cursor: ' '
});

window.setTimeout(function() {
    typewriter.typeString("HELLO!").changeCursor(' ').start().callFunction(function() {

        typewriter = new Typewriter(paragraph, {
            loop: false,
            delay: 40,
        });

        hand.style.opacity = '1'
        paragraph.style.opacity = '1';

        window.setTimeout(function(

        ) {
            document.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    typewriter.stop()
                    var spanElement = paragraph.getElementsByTagName('span')[0]
                    spanElement.innerHTML = string
                }
                finishAnimation()
            })

            document.addEventListener('touchend', function(e) {
                if (!canceled) {
                    canceled = true
                    typewriter.stop()
                    var spanElement = paragraph.getElementsByTagName('span')[0]
                    spanElement.innerHTML = string
                    finishAnimation()
                }
            })

            typewriter
                .typeString("I am <strong>Vane Skubic</strong>, a web developer and part-time musician based in Logatec, Slovenia.")
                .pauseFor(pause)
                .typeString(" My mission is to equip <strong>your brand with a strong visual identity</strong> on the web.")
                .pauseFor(pause)
                .typeString(" My main interests are web design/development, mobile development, and 3D.")
                .pauseFor(pause)
                .typeString(" Currently, I am studying computer engineering at The Faculty of Computer and Information Science in Ljubljana.")
                .pauseFor(pause)
                .typeString(" I've also spent a good part of my teens playing guitar and studying music.")
                .pauseFor(pause)
                .typeString("<br><strong>Let's work together!</strong>")
                .start().callFunction(finishAnimation)

            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                cancel.innerHTML = 'Press anywhere to skip.'
            } else {
                cancel.innerHTML = 'Press Enter to skip.'
            }

            cancel.style.opacity = '1'
            cancel.style.transform = 'translate(-50%, 0)'

        }, 1500)
    })
}, 800)

function finishAnimation() {
    cancel.style.opacity = '0'
    cancel.style.transform = 'translate(-50%, 20px)'
    window.setTimeout(function() {
        var projects = document.getElementById('projects')
        projects.style.display = 'block';
        projects.scrollIntoView({
            behavior: 'smooth'
        });
        window.setTimeout(function() {
            var socials = document.getElementsByClassName('socials')[0]
            socials.style.display = 'flex';
        }, 400)
        delete typewriter
    }, 1000)
}