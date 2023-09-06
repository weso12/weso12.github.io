const armorData = {
	"Padded": {
		proficiencyType: "Light",
		cost: 500,
		acBonus: 1,
		maxDexBonus: 8,
		armorCheckPenalty: 0,
		arcaneSpellFailureChance: 5,
		speed: {
			thirtyFeet: 30,
			twentyFeet: 20
		},
		weight: 10,
		isMetal: false,
		hasGauntlets: false
	},
	"Leather": {
		proficiencyType: "Light",
		cost: 1000,
		acBonus: 2,
		maxDexBonus: 6,
		armorCheckPenalty: 0,
		arcaneSpellFailureChance: 10,
		speed: {
			thirtyFeet: 30,
			twentyFeet: 20
		},
		weight: 15,
		isMetal: false
	},
	"Studded Leather": {
		proficiencyType: "Light",
		cost: 2500,
		acBonus: 3,
		maxDexBonus: 5,
		armorCheckPenalty: -1,
		arcaneSpellFailureChance: 15,
		speed: {
			thirtyFeet: 30,
			twentyFeet: 20
		},
		weight: 20,
		isMetal: true
	},
	"Chain Shirt": {
		proficiencyType: "Light",
		cost: 10000,
		acBonus: 4,
		maxDexBonus: 4,
		armorCheckPenalty: -2,
		arcaneSpellFailureChance: 20,
		speed: {
			thirtyFeet: 30,
			twentyFeet: 20
		},
		weight: 25,
		isMetal: true
	},
	"Hide": {
		proficiencyType: "Medium",
		cost: 1500,
		acBonus: 3,
		maxDexBonus: 4,
		armorCheckPenalty: -3,
		arcaneSpellFailureChance: 20,
		speed: {
			thirtyFeet: 20,
			twentyFeet: 15
		},
		weight: 25,
		isMetal: false
	},
	"Scale Mail": {
		proficiencyType: "Medium",
		cost: 5000,
		acBonus: 4,
		maxDexBonus: 3,
		armorCheckPenalty: -4,
		arcaneSpellFailureChance: 25,
		speed: {
			thirtyFeet: 20,
			twentyFeet: 15
		}, 
		weight: 30,
		isMetal: true
	},
	"Chainmail": {
		proficiencyType: "Medium",
		cost: 15000,
		acBonus: 5,
		maxDexBonus: 2,
		armorCheckPenalty: -5,
		arcaneSpellFailureChance: 30,
		speed: {
			thirtyFeet: 20,
			twentyFeet: 15
		},
		weight: 40,
		isMetal: true
	},
	"Breastplate": {
		proficiencyType: "Medium",
		cost: 20000,
		acBonus: 5,
		maxDexBonus: 3,
		armorCheckPenalty: 4,
		arcaneSpellFailureChance: 25,
		speed: {
			thirtyFeet: 20,
			twentyFeet: 15
		},
		weight: 30,
		isMetal: true
	},
	"Splint Mail": {
		proficiencyType: "Heavy",
		cost: 20000,
		acBonus: 6,
		maxDexBonus: 0,
		armorCheckPenalty: -7,
		arcaneSpellFailureChance: 40,
		speed: {
			thirtyFeet: 20,
			twentyFeet: 15
		},
		weight: 45,
		isMetal: true
	},
	"Banded Mail": {
		proficiencyType: "Heavy",
		cost: 25000,
		acBonus: 6,
		maxDexBonus: 1,
		armorCheckPenalty: -6,
		arcaneSpellFailureChance: 35,
		speed: {
			thirtyFeet: 20,
			twentyFeet: 15
		},
		weight: 35,
		isMetal: true
	},
	"Half-Plate":{
		proficiencyType: "Heavy",
		cost: 60000,
		acBonus: 7,
		maxDexBonus: 0,
		armorCheckPenalty: -7,
		arcaneSpellFailureChance: 40,
		speed: {
			thirtyFeet: 20,
			twentyFeet: 15
		},
		weight: 50,
		isMetal: true
	},
	"Full Plate": {
		proficiencyType: "Heavy",
		cost: 150000,
		acBonus: 8,
		maxDexBonus: 1,
		armorCheckPenalty: -6,
		arcaneSpellFailureChance: 35,
		speed: {
			thirtyFeet: 20,
			twentyFeet: 15
		},
		weight: 50,
		isMetal: true
	},
	"Buckler": {
		proficiencyType: "Shield",
		cost: 1500,
		acBonus: 1,
		maxDexBonus: null,
		armorCheckPenalty: -1,
		arcaneSpellFailureChance: 5,
		speed: {
			thirtyFeet: null,
			twentyFeet: null
		},
		weight: 5,
		isMetal: true
	},
	"Light Wooden Shield": {
		proficiencyType: "Shield",
		cost: 300,
		acBonus: 1,
		maxDexBonus: null,
		armorCheckPenalty: -1,
		arcaneSpellFailureChance: 5,
		speed: {
			thirtyFeet: null,
			twentyFeet: null
		},
		weight: 5,
		isMetal: false
	},
	"Light Steel Shield": {
		proficiencyType: "Shield",
		cost: 900,
		acBonus: 1,
		maxDexBonus: null,
		armorCheckPenalty: -1,
		arcaneSpellFailureChance: 5,
		speed: {
			thirtyFeet: null,
			twentyFeet: null
		},
		weight: 6,
		isMetal: true
	},
	"Heavy Wooden Shield": {
		proficiencyType: "Shield",
		cost: 700,
		acBonus: 2,
		maxDexBonus: null,
		armorCheckPenalty: -2,
		arcaneSpellFailureChance: 15,
		speed: {
			thirtyFeet: null,
			twentyFeet: null
		},
		weight: 10,
		isMetal: false
	},
	"Heavy Steel Shield": {
		proficiencyType: "Shield",
		cost: 2000,
		acBonus: 2,
		maxDexBonus: null,
		armorCheckPenalty: -2,
		arcaneSpellFailureChance: 15,
		speed: {
			thirtyFeet: null,
			twentyFeet: null
		},
		weight: 15,
		isMetal: true
	},
	"Tower Shield": {
		proficiencyType: "Tower Shield",
		cost: 3000,
		acBonus: 4,
		maxDexBonus: 2,
		armorCheckPenalty: -10,
		arcaneSpellFailureChance: 50,
		speed: {
			thirtyFeet: null,
			twentyFeet: null
		},
		weight: 45,
		isMetal: true
	}

}