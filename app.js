function getRandomValue(min, max) {
	return Math.floor(Math.random() * (max - min)) + min; //formula for random number between MIN and MAX
}

const app = Vue.createApp({
	data() {
		return {
			playerHealth: 100,
			monsterHealth: 100,
			round: 0,
			winner: null,
		};
	},
	methods: {
		attackMonster() {
			this.round++;
			const damage = getRandomValue(10, 15);
			this.monsterHealth -= damage;
			this.attackPlayer();
		},
		attackPlayer() {
			const damage = getRandomValue(13, 20);
			this.playerHealth -= damage;
		},
		specialAttackMonster() {
			this.round++;
			const damage = getRandomValue(15, 25);
			this.monsterHealth -= damage;
			this.attackPlayer();
		},
		healPlayer() {
			this.round++;
			const heal = getRandomValue(10, 20);
			if (this.playerHealth + heal > 100) {
				this.playerHealth = 100;
			} else {
				this.playerHealth += heal;
			}
			this.attackPlayer();
		},
		startGame() {
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.round = 0;
			this.winner = null;
		},
		surrender() {
			this.winner = "monster";
		},
	},
	computed: {
		monsterBarStyle() {
			if (this.monsterHealth < 0) return { width: "0%" };
			return { width: this.monsterHealth + "%" };
		},
		playerBarStyle() {
			if (this.playerHealth < 0) return { width: "0%" };
			return { width: this.playerHealth + "%" };
		},
		useSpecialAttack() {
			return this.round % 3 !== 0;
		},
	},
	watch: {
		playerHealth(value) {
			if (value <= 0 && this.monsterHealth <= 0) {
				this.winner = "draw";
			} else if (value <= 0) {
				this.winner = "monster";
			}
		},
		monsterHealth(value) {
			if (value <= 0 && this.playerHealth <= 0) {
				this.winner = "draw";
			} else if (value <= 0) {
				this.winner = "player";
			}
		},
	},
});

app.mount("#game");
