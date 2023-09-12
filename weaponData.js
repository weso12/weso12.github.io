const weaponData = {
	"Gauntlet": {
		purchasable: true,
		proficiencyType: "Simple",
		subtype: "Unarmed Attacks",
		hasAmmunition: false,
		cost: 200,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true,
		weight: 1,
		determineSelectionWeight: function(characterInfo){
			if (!canUseWeapon(characterInfo, "Gauntlet")){
				return 1
			}
			let weight = 5
			if (characterInfo.featsKnown.includes("Improved Unarmed Strike")){
				weight += 5
			}
			if (characterInfo.featsKnown.includes("Weapon Focus (Gauntlet)")){
				weight += 5
			}
			if (characterInfo.featsKnown.includes("Weapon Finesse")){
				weight += 2
				weight += (calculateModifier(characterInfo.dexterity) - calculateModifer(characterInfo.strength)) * 2 
			}
			else {
				weight += (calculateModifier(characterInfo.strength) - calculateModifer(characterInfo.dexterity)) * 2
			}
			return Math.max(weight, 1)
		},
		uponPurchasing: function(characterInfo){
			return
		}
	},
	"Unarmed Strike": {
		purchasable: false,
		proficiencyType: "Simple",
		subtype: "Unarmed Attacks",
		hasAmmunition: false,
		cost: 0,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Dagger": {
		purchasable: true,
		proficiencyType: "Simple",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		cost: 200,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true,
		thrownWeapon: true,
		weight: 1,
		determineSelectionWeight: function(characterInfo){
			if (!canUseWeapon(characterInfo, "Dagger")){
				return 1
			}
			let weight = 5
			if (characterInfo.featsKnown.includes("Weapon Focus (Dagger)")){
				weight += 5
			}
			if (characterInfo.featsKnown.includes("Weapon Finesse")){
				weight += 2
				weight += (calculateModifier(characterInfo.dexterity) - calculateModifer(characterInfo.strength)) * 2 
			}
			else {
				weight += (calculateModifier(characterInfo.strength) - calculateModifer(characterInfo.dexterity)) * 2
			}
			if (characterInfo.featsKnown.includes("Power Attack")){
				weight -= 5
			}
			return Math.max(weight, 1)
		},
		uponPurchasing: function (characterInfo) {
			return
		}
	},
	"Punching Dagger": {
		purchasable: true,
		proficiencyType: "Simple",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		cost: 200,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true,
		determineSelectionWeight: function(characterInfo){
			if (!canUseWeapon(characterInfo, "Punching Dagger")){
				return 1
			}
			let weight = 5
			if (characterInfo.featsKnown.includes("Weapon Focus (Punching Dagger")){
				weight += 5
			}
			if (characterInfo.featsKnown.includes("Weapon Finesse")){
				weight += 2
				weight += (calculateModifier(characterInfo.dexterity) - calculateModifer(characterInfo.strength)) * 2 
			}
			else {
				weight += (calculateModifier(characterInfo.strength) - calculateModifer(characterInfo.dexterity)) * 2
			}
			if (characterInfo.featsKnown.includes("Power Attack")){
				weight -= 5
			}
			return Math.max(weight, 1)
		}
	},
	"Spiked Gauntlet": {
		purchasable: true,
		proficiencyType: "Simple",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		cost: 500,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true,
		determineSelectionWeight: function(characterInfo){
			if (!canUseWeapon(characterInfo, "Spiked Gauntlet")){
				return 1
			}
			let weight = 5
			if (characterInfo.featsKnown.includes("Weapon Focus (Spiked Gauntlet")){
				weight += 5
			}
			if (characterInfo.featsKnown.includes("Weapon Finesse")){
				weight += 2
				weight += (calculateModifier(characterInfo.dexterity) - calculateModifer(characterInfo.strength)) * 2 
			}
			else {
				weight += (calculateModifier(characterInfo.strength) - calculateModifer(characterInfo.dexterity)) * 2
			}
			if (characterInfo.featsKnown.includes("Power Attack")){
				weight -= 5
			}
			return Math.max(weight, 1)
		}
	},
	"Light Mace": {
		purchasable: true,
		proficiencyType: "Simple",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		cost: 500,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true,
		determineSelectionWeight: function(characterInfo){
			if (!canUseWeapon(characterInfo, "Light Mace")){
				return 1
			}
			let weight = 5
			if (characterInfo.featsKnown.includes("Weapon Focus (Light Mace")){
				weight += 5
			}
			if (characterInfo.featsKnown.includes("Weapon Finesse")){
				weight += 2
				weight += (calculateModifier(characterInfo.dexterity) - calculateModifer(characterInfo.strength)) * 2 
			}
			else {
				weight += (calculateModifier(characterInfo.strength) - calculateModifer(characterInfo.dexterity)) * 2
			}
			if (characterInfo.featsKnown.includes("Power Attack")){
				weight -= 5
			}
			return Math.max(weight, 1)
		}
	},
	"Sickle": {
		purchasable: true,
		proficiencyType: "Simple",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		cost: 500,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true,
		determineSelectionWeight: function(characterInfo){
			if (!canUseWeapon(characterInfo, "Sickle")){
				return 1
			}
			let weight = 5
			if (characterInfo.featsKnown.includes("Weapon Focus (Sickle")){
				weight += 5
			}
			if (characterInfo.featsKnown.includes("Weapon Finesse")){
				weight += 2
				weight += (calculateModifier(characterInfo.dexterity) - calculateModifer(characterInfo.strength)) * 2 
			}
			else {
				weight += (calculateModifier(characterInfo.strength) - calculateModifer(characterInfo.dexterity)) * 2
			}
			if (characterInfo.featsKnown.includes("Power Attack")){
				weight -= 5
			}
			return Math.max(weight, 1)
		}
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
		hasUniqueWeaponProficiency: true,
		thrownWeapon: true,
		determineSelectionWeight: function(characterInfo){
			if (!canUseWeapon(characterInfo, "Club")){
				return 1
			}
			let weight = 5
			if (characterInfo.featsKnown.includes("Weapon Focus (Club)")){
				weight += 5
			}
			weight += (calculateModifier(characterInfo.strength) - calculateModifer(characterInfo.dexterity)) * 2
			return Math.max(weight, 1)
		}
	},
	"Heavy Mace": {
		purchasable: true,
		proficiencyType: "Simple",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 1200,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true,
		determineSelectionWeight: function(characterInfo){
			if (!canUseWeapon(characterInfo, "Heavy Mace")){
				return 1
			}
			let weight = 5
			if (characterInfo.featsKnown.includes("Weapon Focus (Heavy Mace)")){
				weight += 5
			}
			weight += (calculateModifier(characterInfo.strength) - calculateModifer(characterInfo.dexterity)) * 2
			return Math.max(weight, 1)
		}
	},
	"Morningstar": {
		purchasable: true,
		proficiencyType: "Simple",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 800,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true,
		determineSelectionWeight: function(characterInfo){
			if (!canUseWeapon(characterInfo, "Morningstar")){
				return 1
			}
			let weight = 5
			if (characterInfo.featsKnown.includes("Weapon Focus (Morningstar)")){
				weight += 5
			}
			weight += (calculateModifier(characterInfo.strength) - calculateModifer(characterInfo.dexterity)) * 2
			return Math.max(weight, 1)
		}
	},
	"Shortspear": {
		purchasable: true,
		proficiencyType: "Simple",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 100,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true,
		thrownWeapon: true,
		determineSelectionWeight: function(characterInfo){
			if (!canUseWeapon(characterInfo, "Shortspear")){
				return 1
			}
			let weight = 5
			if (characterInfo.featsKnown.includes("Weapon Focus (Shortspear)")){
				weight += 5
			}
			weight += (calculateModifier(characterInfo.strength) - calculateModifer(characterInfo.dexterity)) * 2
			return Math.max(weight, 1)
		}
	},
	"Longspear": {
		purchasable: true,
		proficiencyType: "Simple",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 500,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true,
		determineSelectionWeight: function(characterInfo){
			if (!canUseWeapon(characterInfo, "Club")){
				return 1
			}
			let weight = 5
			if (characterInfo.featsKnown.includes("Weapon Focus (Longspear)")){
				weight += 5
			}
			weight += (calculateModifier(characterInfo.strength) - calculateModifer(characterInfo.dexterity)) * 2
			return Math.max(weight, 1)
		}
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
		hasUniqueWeaponProficiency: true,
		determineSelectionWeight: function(characterInfo){
			if (!canUseWeapon(characterInfo, "Quaterstaff")){
				return 1
			}
			let weight = 5
			if (characterInfo.featsKnown.includes("Weapon Focus (Quaterstaff)")){
				weight += 5
			}
			if (characterInfo.features.includes("Flurry of Blows")){
				weight += 5
			}
			weight += (calculateModifier(characterInfo.strength) - calculateModifer(characterInfo.dexterity)) * 2
			return Math.max(weight, 1)
		}
	},
	"Spear": {
		purchasable: true,
		proficiencyType: "Simple",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 200,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true,
		thrownWeapon: true,
		determineSelectionWeight: function(characterInfo){
			if (!canUseWeapon(characterInfo, "Spear")){
				return 1
			}
			let weight = 5
			if (characterInfo.featsKnown.includes("Weapon Focus (Spear)")){
				weight += 5
			}
			weight += (calculateModifier(characterInfo.strength) - calculateModifer(characterInfo.dexterity)) * 2
			return Math.max(weight, 1)
		}
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
		hasUniqueWeaponProficiency: true,
		determineSelectionWeight: function(characterInfo){
			if (!canUseWeapon(characterInfo, "Heavy Crossbow")){
				return 1
			}
			let weight = 5
			if (characterInfo.featsKnown.includes("Weapon Focus (Heavy Crossbow)")){
				weight += 5
			}
			if (characterInfo.featsKnown.includes("Point Blank Shot")){
				weight += 2
			}
			if (characterInfo.featsKnown.includes("Precise Shot")){
				weight += 2
			}
			if (characterInfo.featsKnown.includes("Rapid Shot")){
				weight += 2
			}
			if (characterInfo.featsKnown.includes("Rapid Reload (Heavy Crossbow)")){
				weight += 5
			}
			weight += (calculateModifier(characterInfo.dexterity) - calculateModifer(characterInfo.strength)) * 2
			return Math.max(weight, 1)
		}
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
		hasUniqueWeaponProficiency: true,
		determineSelectionWeight: function(characterInfo){
			if (!canUseWeapon(characterInfo, "Light Crossbow")){
				return 1
			}
			let weight = 5
			if (characterInfo.featsKnown.includes("Weapon Focus (Light Crossbow)")){
				weight += 5
			}
			if (characterInfo.featsKnown.includes("Point Blank Shot")){
				weight += 2
			}
			if (characterInfo.featsKnown.includes("Precise Shot")){
				weight += 2
			}
			if (characterInfo.featsKnown.includes("Rapid Shot")){
				weight += 2
			}
			if (characterInfo.featsKnown.includes("Rapid Reload (Light Crossbow)")){
				weight += 5
			}
			weight += (calculateModifier(characterInfo.dexterity) - calculateModifer(characterInfo.strength)) * 2
			return Math.max(weight, 1)
		}
	},
	"Dart": {
		purchasable: true,
		proficiencyType: "Simple",
		subtype: "Ranged Weapon",
		hasAmmunition: false,
		cost: 50,
		hasPurchaseCap: false,
		consumable: true,
		hasUniqueWeaponProficiency: true,
		thrownWeapon: true,
		determineSelectionWeight: function(characterInfo){
			if (!canUseWeapon(characterInfo, "Javelin")){
				return 1
			}
			let weight = 5
			if (characterInfo.featsKnown.includes("Weapon Focus (Javelin)")){
				weight += 5
			}
			if (characterInfo.featsKnown.includes("Point Blank Shot")){
				weight += 2
			}
			if (characterInfo.featsKnown.includes("Precise Shot")){
				weight += 2
			}
			if (characterInfo.featsKnown.includes("Rapid Shot")){
				weight += 2
			}
			if (characterInfo.featsKnown.includes("Quick Draw")){
				weight += 5
			}
			if (characterInfo.features.includes("+1 racial bonus on attack rolls with thrown weapons and slings")){
				weight += 2
			}
			weight += (calculateModifier(characterInfo.dexterity) - calculateModifer(characterInfo.strength))
			return Math.max(weight, 1)
		}
	},
	"Javelin": {
		purchasable: true,
		proficiencyType: "Simple",
		subtype: "Ranged Weapon",
		hasAmmunition: false,
		cost: 100,
		hasPurchaseCap: false,
		consumable: true,
		hasUniqueWeaponProficiency: true,
		thrownWeapon: true,
		determineSelectionWeight: function(characterInfo){
			if (!canUseWeapon(characterInfo, "Light Crossbow")){
				return 1
			}
			let weight = 5
			if (characterInfo.featsKnown.includes("Weapon Focus (Light Crossbow)")){
				weight += 5
			}
			if (characterInfo.featsKnown.includes("Point Blank Shot")){
				weight += 2
			}
			if (characterInfo.featsKnown.includes("Precise Shot")){
				weight += 2
			}
			if (characterInfo.featsKnown.includes("Rapid Shot")){
				weight += 2
			}
			if (characterInfo.featsKnown.includes("Quick Draw")){
				weight += 5
			}
			if (characterInfo.features.includes("+1 racial bonus on attack rolls with thrown weapons and slings")){
				weight += 2
			}
			weight += (calculateModifier(characterInfo.dexterity) - calculateModifer(characterInfo.strength))
			return Math.max(weight, 1)
		}
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
		hasUniqueWeaponProficiency: true,
		determineSelectionWeight: function(characterInfo){
			if (!canUseWeapon(characterInfo, "Sling")){
				return 1
			}
			let weight = 5
			if (characterInfo.featsKnown.includes("Weapon Focus (Sling)")){
				weight += 5
			}
			if (characterInfo.featsKnown.includes("Point Blank Shot")){
				weight += 2
			}
			if (characterInfo.featsKnown.includes("Precise Shot")){
				weight += 2
			}
			if (characterInfo.featsKnown.includes("Rapid Shot")){
				weight += 2
			}
			if (characterInfo.featsKnown.includes("Quick Draw")){
				weight += 5
			}
			if (characterInfo.features.includes("+1 racial bonus on attack rolls with thrown weapons and slings")){
				weight += 2
			}
			weight += (calculateModifier(characterInfo.dexterity) - calculateModifer(characterInfo.strength))
			return Math.max(weight, 1)
		}
	},
	"Throwing Axe": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		cost: 800,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true,
		determineSelectionWeight: function(characterInfo){
			if (!canUseWeapon(characterInfo, "Throwing Axe")){
				return 1
			}
			let weight = 10
			if (characterInfo.featsKnown.includes("Weapon Focus (Throwing Axe)")){
				weight += 10
			}
			weight += (calculateModifier(characterInfo.strength) - calculateModifer(characterInfo.dexterity)) * 2
			return Math.max(weight, 1)
		}
	},
	"Light Hammer": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		cost: 100,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true,
		thrownWeapon: true,
		determineSelectionWeight: function(characterInfo){
			if (!canUseWeapon(characterInfo, "Light Hammer")){
				return 1
			}
			let weight = 5
			if (characterInfo.featsKnown.includes("Weapon Focus (Light Hammer)")){
				weight += 5
			}
			weight += (calculateModifier(characterInfo.strength) - calculateModifer(characterInfo.dexterity)) * 2
			return Math.max(weight, 1)
		}
	},
	"Handaxe": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		cost: 600,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Light Pick": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		cost: 400,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Sap": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		cost: 100,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Light Shield": {
		purchasable: false,
		proficiencyType: "Martial",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Spiked Armor": {
		purchasable: false,
		proficiencyType: "Martial",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Light Spiked Shield": {
		purchasable: false,
		proficiencyType: "Martial",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Short Sword": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		cost: 1000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Battleaxe": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 1000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Flail": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 800,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Longsword": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 1500,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Heavy Pick": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 800,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Rapier": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 2000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Scimitar": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 1500,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Heavy Shield": {
		purchasable: false,
		proficiencyType: "Martial",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Heavy Spiked Shield": {
		purchasable: false,
		proficiencyType: "Martial",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Trident": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 1500,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true,
		thrownWeapon: true
	},
	"Warhammer": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 1200,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Falchion": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 7500,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Glaive": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 800,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Greataxe": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 2000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Greatclub": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 500,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Heavy Flail": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 1500,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Greatsword": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 5000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Guisarme": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 900,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Halberd": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 1000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Lance": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 1000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Ranseur": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 1000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Scythe": {
		purchasable: true,
		proficiencyType: "Martial",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 1800,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
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
		hasUniqueWeaponProficiency: true
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
		hasUniqueWeaponProficiency: false,
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
		hasUniqueWeaponProficiency: true
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
		hasUniqueWeaponProficiency: false,
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
		hasUniqueWeaponProficiency: true
	},
	"Nunchaku": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		cost: 200,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Sai": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		cost: 100,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Siangham": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "Light Melee Weapon",
		hasAmmunition: false,
		cost: 300,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Bastard Sword": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 3500,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Dwarven Waraxe": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 3000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Whip": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "One-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 100,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true,
	},
	"Orc Double Axe": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 6000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Spiked Chain": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 2500,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Dire Flail": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 9000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Gnome Hooked Hammer": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false, 
		cost: 2000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Two-Bladed Sword": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 10000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Dwarven Urgrosh": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "Two-Handed Melee Weapon",
		hasAmmunition: false,
		cost: 5000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true,
	},
	"Bolas": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "Ranged Weapon",
		hasAmmunition: false,
		cost: 500,
		hasPurchaseCap: false,
		consumable: true,
		hasUniqueWeaponProficiency: true
	},
	"Hand Crossbow": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "Ranged Weapon",
		hasAmmunition: true,
		ammunition: "Bolt",
		cost: 10000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Repeating Heavy Crossbow": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "Ranged Weapon",
		hasAmmunition: true,
		ammunition: "Bolt",
		cost: 40000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Repeating Light Crossbow": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "Ranged Weapon",
		hasAmmunition: true,
		ammunition: "Bolt",
		cost: 25000,
		hasPurchaseCap: false,
		consumable: false,
		hasUniqueWeaponProficiency: true
	},
	"Net": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "Ranged Weapon",
		hasAmmunition: false,
		cost: 2000,
		hasPurchaseCap: false,
		consumable: true,
		hasUniqueWeaponProficiency: true,
		thrownWeapon: true
	},
	"Shuriken": {
		purchasable: true,
		proficiencyType: "Exotic",
		subtype: "Ranged Weapon",
		hasAmmunition: false,
		cost: 100,
		hasPurchaseCap: false,
		consumable: true,
		hasUniqueWeaponProficiency: true,
		thrownWeapon: true
	}
}