// tamagotchi.js

class Tamagotchi {
    #name;
    #type;
    #hunger;
    #happiness;
    #isAlive;

    constructor(name, type) {
        this.#name = name;
        this.#type = type;
        this.#hunger = 10;
        this.#happiness = 10;
        this.#isAlive = true;

        this.startHungerDecrease();
        this.startHappinessDecrease();
    }

    startHungerDecrease() {
        setInterval(() => {
            if (this.#isAlive && this.#hunger > 0) {
                this.#hunger--;
                if (this.#hunger === 0) this.die();
            }
        }, 1000); // Decrease hunger every second
    }

    startHappinessDecrease() {
        setInterval(() => {
            if (this.#isAlive && this.#happiness > 0) {
                this.#happiness--;
                if (this.#happiness === 0) this.die();
            }
        }, 2000); // Decrease happiness every two seconds
    }

    feed() {
        if (this.#isAlive && this.#hunger < 10) {
            this.#hunger++;
        }
    }

    play() {
        if (this.#isAlive && this.#happiness < 10) {
            this.#happiness++;
        }
    }

    die() {
        this.#isAlive = false;
    }

    getName() {
        return this.#name;
    }

    getType() {
        return this.#type;
    }

    getHunger() {
        return this.#hunger;
    }

    getHappiness() {
        return this.#happiness;
    }

    isAlive() {
        return this.#isAlive;
    }
}

export default Tamagotchi;
