const weaponData = {
	"Gauntlet": {
		purchasable: true,
		proficiencyType: "Simple",
		subtype: "Unarmed Attacks",
		hasAmmunition: false,
		cost: 200,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Unarmed Strike": {
		purchasable: false,
		proficiencyType: "Simple",
		subtype: "Unarmed Attacks",
		hasAmmunition: false,
		cost: 0,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Dagger": {
		purchasable: true,
		proficiencyType: "Simple",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		cost: 200,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Punching Dagger": {
		purchasable: true,
		proficiencyType: "Simple",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		cost: 200,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Spiked Gauntlet": {
		purchasable: true,
		proficiencyType: "Simple",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		cost: 500,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Light Mace": {
		purchasable: true,
		proficiencyType: "Simple",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		cost: 500,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Sickle": {
		purchasable: true,
		proficiencyType: "Simple",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		cost: 500,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Club": {
		purchasable: true,
		proficiencyType: "Simple",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 0,
		hasPurchaseCap: true,
		purchaseCap: 1,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Heavy Mace": {
		purchasable: true,
		proficiencyType: "Simple",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 1200,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Morningstar": {
		purchasable: true,
		proficiencyType: "Simple",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 800,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Shortspear": {
		purchasable: true,
		proficiencyType: "Simple",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 100,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Longspear": {
		purchasable: true,
		proficiencyType: "Simple",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 500,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Quaterstaff": {
		purchasable: true,
		proficiencyType: "Simple",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 0,
		hasPurchaseCap: true,
		purchaseCap: true,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Spear": {
		purchasable: true,
		proficiencyType: "Simple",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 200,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Heavy Crossbow": {
		purchasable: true,
		proficiencyType: "Simple",
		subtype: "Ranged Weapon",
		hasAmmunition: true,
		ammunition: "Crossbow Bolt", 
		cost: 5000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Light Crossbow": {
		purchasable: true,
		proficiencyType: "Simple",
		subtype: "Ranged Weapon",
		hasAmmunition: true,
		ammunition: "Crossbow Bolt",
		cost: 3500,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Dart": {
		purchasable: true,
		proficiencyType: "Simple",
		subtype: "Ranged Weapon",
		hasAmmunition: false,
		cost: 50,
		hasPurchaseCap: false,
		consumable: true,
		hasUniqueWeaponProfiency: true
	},
	"Javelin": {
		purchasable: true,
		proficiencyType: "Simple",
		subtype: "Ranged Weapon",
		hasAmmunition: false,
		cost: 100,
		hasPurchaseCap: false,
		consumable: true,
		hasUniqueWeaponProfiency: true
	},
	"Sling": {
		purchasable: true,
		proficiencyType: "Simple",
		subtype: "Ranged Weapon",
		hasAmmunition: true,
		ammunition: "Sling Bullets",
		cost: 0,
		hasPurchaseCap: true,
		purchaseCap: 1,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Throwing Axe": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		cost: 800,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Light Hammer": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		cost: 100,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Handaxe": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		cost: 600,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Light Pick": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		cost: 400,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Sap": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		cost: 100,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Light Shield": {
		purchasable: false,
		proficiencyType: "Martial",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Spiked Armor": {
		purchasable: false,
		proficiencyType: "Martial",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Light Spiked Shield": {
		purchasable: false,
		proficiencyType: "Martial",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Short Sword": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		cost: 1000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Battleaxe": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 1000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Flail": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 800,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Longsword": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 1500,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Heavy Pick": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 800,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Rapier": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 2000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Scimitar": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 1500,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Heavy Shield": {
		purchasable: false,
		proficiencyType: "Martial",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Heavy Spiked Shield": {
		purchasable: false,
		proficiencyType: "Martial",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Trident": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 1500,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Warhammer": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 1200,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Falchion": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 7500,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Glaive": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 800,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Greataxe": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 2000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Greatclub": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 500,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Heavy Flail": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 1500,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Greatsword": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 5000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Guisarme": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 900,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Halberd": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 1000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Lance": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 1000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Ranseur": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 1000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Scythe": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 1800,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Longbow": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Ranged Weapon",
		hasAmmunition: true,
		ammunition: "Arrow",
		cost: 7500,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Composite Longbow": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Ranged Weapon",
		hasAmmunition: true,
		ammunition: "Arrow",
		cost: 10000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: false,
		sharedProfiencyWith: "Longbow"
	},
	"Shortbow": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Ranged Weapon",
		hasAmmunition: true,
		ammunition: "Arrow",
		cost: 3000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Composite Shortbow": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Ranged Weapon",
		hasAmmunition: true,
		ammunition: "Arrow",
		cost: 7500,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: false,
		sharedProfiencyWith: "Shortbow"
	},
	"Kama": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		cost: 200,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Nunchaku": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		cost: 200,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Sai": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		cost: 100,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Siangham": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		cost: 300,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Bastard Sword": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 3500,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Dwarven Waraxe": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 3000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Whip": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 100,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true,
	},
	"Orc Double Axe": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 6000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Spiked Chain": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 2500,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Dire Flail": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 9000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Gnome Hooked Hammer": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false, 
		cost: 2000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Two-Bladed Sword": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 10000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Dwarven Urgrosh": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 5000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true,
	},
	"Bolas": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "Ranged",
		hasAmmunition: false,
		cost: 500,
		hasPurchaseCap: false,
		consumable: true,
		hasUniqueWeaponProfiency: true
	},
	"Hand Crossbow": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "Ranged",
		hasAmmunition: true,
		ammunition: "Bolt",
		cost: 10000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Repeating Heavy Crossbow": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "Ranged",
		hasAmmunition: true,
		ammunition: "Bolt",
		cost: 40000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Repeating Light Crossbow": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "Ranged",
		hasAmmunition: true,
		ammunition: "Bolt",
		cost: 25000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProfiency: true
	},
	"Net": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "Ranged",
		hasAmmunition: false,
		cost: 2000,
		hasPurchaseCap: false,
		consumable: true,
		hasUniqueWeaponProfiency: true
	},
	"Shuriken": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "Ranged",
		hasAmmunition: false,
		cost: 100,
		hasPurchaseCap: false,
		consumable: true,
		hasUniqueWeaponProfiency: true 
	}
}