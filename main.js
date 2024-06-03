// main.js
import Tamagotchi from './tamagotchi.js';

let tamagotchis = [];

function addTamagotchi() {
    const name = document.getElementById('tamagotchi-name').value;
    const type = document.getElementById('tamagotchi-type').value;
    const tamagotchi = new Tamagotchi(name, type);
    tamagotchis.push(tamagotchi);
    renderTamagotchis();
}

function renderTamagotchis() {
    const container = document.getElementById('tamagotchi-container');
    container.innerHTML = '';

    tamagotchis.forEach((tamagotchi, index) => {
        const tamagotchiElement = document.createElement('div');
        tamagotchiElement.classList.add('tamagotchi');
        if (!tamagotchi.isAlive()) {
            tamagotchiElement.classList.add('dead');
        }
        
        tamagotchiElement.innerHTML = `
            <h2>${tamagotchi.getName()}</h2>
            <p>Type: ${tamagotchi.getType()}</p>
            <p>Hunger: ${tamagotchi.getHunger()}</p>
            <p>Happiness: ${tamagotchi.getHappiness()}</p>
            <button onclick="feedTamagotchi(${index})">Feed</button>
            <button onclick="playWithTamagotchi(${index})">Play</button>
        `;

        container.appendChild(tamagotchiElement);
    });
}

function feedTamagotchi(index) {
    tamagotchis[index].feed();
    renderTamagotchis();
}

function playWithTamagotchi(index) {
    tamagotchis[index].play();
    renderTamagotchis();
}

setInterval(renderTamagotchis, 1000);
window.addTamagotchi = addTamagotchi;
window.feedTamagotchi = feedTamagotchi;
window.playWithTamagotchi = playWithTamagotchi;
