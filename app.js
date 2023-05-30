function getRandomValue(min, max) {
	return Math.floor(Math.random() * (max - min)) + min; //formula for random number between MIN and MAX
}

const app = Vue.createApp({
	data() {
		return {
			playerHealth: 100,
			monsterHealth: 100,
			round: 0,
		};
	},
	methods: {
		attackMonster() {
			this.round++;
			const playerDamage = getRandomValue(10, 15);
			this.monsterHealth -= playerDamage;
			this.attackPlayer();
		},
		attackPlayer() {
			const monsterDamage = getRandomValue(13, 20);
			this.playerHealth -= monsterDamage;
		},
		specialAttackMonster() {
			this.round++;
			const playerDamage = getRandomValue(15, 25);
			this.monsterHealth -= playerDamage;
			this.attackPlayer();
		},
	},
	computed: {
		monsterBarStyle() {
			return { width: this.monsterHealth + "%" };
		},
		playerBarStyle() {
			return { width: this.playerHealth + "%" };
		},
		useSpecialAttack() {
			return this.round % 3 !== 0;
		},
	},
});

app.mount("#game");
