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

// Event listenerid 24. sept

let count = 0

const numberCount = document.getElementById('number')

const liitmiseNupp = document.getElementById('liida')
const lahutamiseNupp = document.getElementById('lahuta')
const tühistamiseNupp = document.getElementById('tühista')

liitmiseNupp.onclick = () => {
    count++
    numberCount.innerHTML = count
}

lahutamiseNupp.onclick = () => {
    count--
    if (count >= 0) {
    numberCount.innerHTML = count
    }
}

tühistamiseNupp.onclick = () => {
    count = 0
    numberCount.innerHTML = count
}

// Minu versioon - lihtsam lahendus:
 playground.addEventListener('click', () => {
    alert('Div clicked!')
});

// Õpetaja lahendus (pikad jooned ei tööta)
//const element = document.querySelectorAll('div')

//console.log(element)

/*document.addEventListener('click', (event) => {
    console.log(event, event.target)
    if(event.target.nodeName === 'DIV' ││ event.target.parentNode.nodeName === "DIV"){
        alert('Div clicked')
    }
})
*/

const data = [
{
    name: "Banaan",
    price: 4,
},
{
    name: "Arbuus",
    price: 3,
},
{
    name: "Kiivi",
    price: 2,
},
{
    name: "Viinamari",
    price: 2.5,
},
{
    name: "Maasikad",
    price: 4,
},
];

const tabeligenereerimine = () => {


const tabeliKeha = document.querySelector("tbody");

    for (let i = 0; i < data.length; i++) {
    //create a table row
    const row = document.createElement("tr");

    for(let j = 0; j < 2; j++) {
        //create cells
        const cell = document.createElement("td")
        if (j === 0){
            cell.append(data[i].name);
        } else {
            cell.append(data[i].price);
        }
        row.append(cell);
    }

        tabeliKeha.append(row);
    }
};

tabeligenereerimine();
