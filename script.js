function changeMessage() {
    const heartText = document.querySelector('#heart p');
    const messages = [
        "I Like uhhh",
        "But my heart say..",
        "Guess what ???",
        "ok baba...click to know that what my heart say..",
        "My heart say that...",
        "Hey Asif..You r totally fall in love",
        "I LOVE YOUUUU",
        "I love you very much",
        "You Are Amazing!",
        "You Mean The World",
        "I wanna forever Yours",
        "My Heart Beats For You"
    ];

    let currentMessage = heartText.innerText;
    let nextIndex = (messages.indexOf(currentMessage) + 1) % messages.length;
    
    heartText.innerText = messages[nextIndex];
}
