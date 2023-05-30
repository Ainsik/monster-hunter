function getRandomValue(min, max) {
	return Math.floor(Math.random() * (max - min)) + min; //formula for random number between MIN and MAX
}

const app = Vue.createApp({
	data() {
		return {
			playerHealth: 100,
			monsterHealth: 100,
		};
	},
	methods: {
		attackMonster() {
			const playerDamage = getRandomValue(15, 10);
			this.monsterHealth -= playerDamage;
			this.attackPlayer();
		},
		attackPlayer() {
			const monsterDamage = getRandomValue(20, 13);
			this.playerHealth -= monsterDamage;
		},
	},
	computed: {
		monsterBarStyle() {
			return { width: this.monsterHealth + "%" };
		},
		playerBarStyle() {
			return { width: this.playerHealth + "%" };
		},
	},
});

app.mount("#game");
