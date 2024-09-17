const playground = document.getElementById('playground');
// playground.append('Wizard');

// const playground2 = document.querySelector('#playground2');
// playground2.append('Wizard');

// const playground3 = document.querySelector('playground3');
// playground3.append('Wizard');

// const magical0rb = document.createElement('div');
// magical0rb.textContent = 'orb';
// playground.append(magical0rb);

// spellbook.innerHTML = '<p>Spells insclude: <strong>Levitation</Strong> and <em>Invisibility</em>!</p>';

const temporaryElement = document.createElement('p');
temporaryElement.textContent = "Now you se me";
playground.append(temporaryElement);
temporaryElement.remove();

const fruitBasket = document.createElement('div');
fruitBasket.innerHTML = `<p>Apple</p><p>Banana</p><p>Cherry</p>`;
playground.append(fruitBasket);

while (fruitBasket.firstChild) {
    fruitBasket.removeChild(fruitBasket.firstChild);
}

const magicwand = document.createElement ('div');
magicwand.setAttribute('id', 'wand1');
magicwand.setAttribute('class','magic-item wand');
magicwand.textContent = "Magic Wand";
playground.append(magicwand);

console.log(magicwand.id);
console.log(magicwand.getAttribute('class'));

fruitBasket.classList.add('Grapes');
console.log("Initial classes:", )
fruitBasket.classList.toggle('invisible');

magicwand.style.fontSize ='40px';
magicwand.style.color ='blue';

const magicButton = document.createElement ('button');
magicButton.textContent ='Cast Spell';
playground.append(magicButton);

magicButton.addEventListener('click', () => {
    alert('Magic sparkles fill the air!')
});

magicButton.addEventListener('mouseover',(event) => {
    event.target.style.backgroundColor = 'blue'
})

magicButton.addEventListener('mouseout',(event) => {
    event.target.style.backgroundColor = 'white'
})