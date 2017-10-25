class RetiredForagerBee extends ForagerBee{
  // TODO..
  constructor() {
  	super();
  	this.age = 40;
	  this.job = 'gamble';
	  this.color = 'grey';
	  this.canFly = false;
  }

  forage() {
  	return 'I am too old, let me play cards instead';
	}

	gamble(value) {
  	this.treasureChest.push(value);
	}
};
