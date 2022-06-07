var title = document.getElementsByClassName('about-title-header')[0];
var paragraph = document.getElementsByClassName('about-paragraph')[0];

var typewriter = new Typewriter(paragraph, {
    loop: false,
    delay: 0,
});

window.setTimeout(function() {
    typewriter
        .typeString("I am <strong>Vane Skubic</strong>, a web developer and part-time musician based in Logatec, Slovenia. My mission is to equip <strong>your brand with a strong visual identity</strong> on the web. My main interests are web design/development, mobile development, and 3D. Currently, I am studying computer engineering at The Faculty of Computer and Information Science in Ljubljana. I've also spent a good part of my teens playing guitar and studying music.<br><strong>Let's work together!</strong>")
        .start().callFunction(function() {
            window.setTimeout(function() {
                // document.getElementsByTagName('footer')[0].style.display = 'flex';
                var projects = document.getElementById('projects')
                projects.style.display = 'block';
                projects.scrollIntoView({
                    behavior: 'smooth'
                });
                window.setTimeout(function() {
                    var socials = document.getElementsByClassName('socials')[0]
                    socials.style.display = 'flex';
                }, 400)
            }, 1000)

        })
}, 1000)