const roll = document.querySelector('.roller');
const container = document.querySelector('.container');
const decor = document.querySelector('.decorations');

roll.addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice')
        .then(res => {
            if (!res.ok) {
                throw new Error('Network was not Ok, Try again.')
            }
            return res.json();
        })
        .then(res => {
            quote = res.slip.advice;
            id = res.slip.id;

            let newQuote = document.createElement('p');
            newQuote.classList.add('curr-adv');
            newQuote.textContent = `${quote}`;

            let newHeader = document.createElement('h4');
            newHeader.textContent = `Advice ${id}`;

            container.children[0].remove();
            container.insertBefore(newHeader, container.children[0]);

            container.children[1].remove();
            container.insertBefore(newQuote, container.children[1])
        })
        .catch(err => {
            console.log(err);
        });
})