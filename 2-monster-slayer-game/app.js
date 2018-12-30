new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },

        attack () {
            this.playerAttacks(3, 10);
        },

        specialAttack () {
            this.playerAttacks(10, 20);
        },

        playerAttacks (min, max) {
            // Calculate damage in given min-max range
            let damage = Math.max(Math.floor(Math.random() * max) + 1, min);

            // Deduct monster's health
            this.monsterHealth -= damage;

            // Show application state on Front End
            this.turns.unshift({
                class: 'player-attack',
                text: 'Player hits Monster for ' + damage
            });

            // Check if damage dealt wins the game
            if (this.checkWin()) {
                return;
            }

            // END player's turn with monster attack
            this.monsterAttacks();
        },

        heal () {
            if (this.playerHealth <= 85) {
                this.playerHealth += 15;
            } else {
                this.playerHealth = 100;
            }

            // Show application state on Front End
            this.turns.unshift({
                class: 'player-heal',
                text: 'Player heals for 10'
            });

            // END player's turn with monster attack
            this.monsterAttacks();
        },

        giveUp () {
            return this.gameIsRunning = false;
        },

        monsterAttacks () {
            // Calculate damage in given min-max range
            let damage = Math.max(Math.floor(Math.random() * 12) + 1, 5);

            // Deduct player's health
            this.playerHealth -= damage;

            // Check if damage dealt is Game Over
            this.checkWin();

            // Show application state on Front End
            this.turns.unshift({
                class: 'monster-attack',
                text: 'Monster hits Player for ' + damage
            });
        },

        checkWin () {
            // Always returns a boolean value

            if (this.monsterHealth <= 0) {
                if (confirm('You WON! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;

            } else if (this.playerHealth <= 0) {
                if (confirm('You are dead. New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;

            }

            return false;
        }
    }
});