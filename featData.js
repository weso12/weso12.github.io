const featData = {
	"Acrobatic": {
		canLearn: function(characterInfo){
			return true;
		},
		commonSenseCheck: function (characterInfo) {
			return true;
		},
		uponLearning: function(characterInfo){
			grantSkillBonus(characterInfo, "Jump", 2)
			grantSkillBonus(characterInfo, "Tumble", 2)
		},
		determineWeight: function (characterInfo) {
			let weight = 3;
			if (characterInfo.classSkills.includes("Jump")){
				weight++;
			}
			if (characterInfo.classSkills.includes("Tumble")){
				weight++;
			}
			weight += Math.floor((calculateSkillMod(characterInfo, "Jump") + calculateModifier(characterInfo, "Tumble"))/2)
			return Math.max(weight, 1)
		},
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: false
	},
	"Agile": {
		canLearn: function(characterInfo){
			return true;
		},
		commonSenseCheck: function(characterInfo){
			return true; 
		},
		uponLearning: function (characterInfo) {
			grantSkillBonus(characterInfo, "Balance", 2)
			grantSkillBonus(characterInfo, "Escape Artist", 2)
		},
		determineWeight: function (characterInfo) {
			let weight = 3;
			if (characterInfo.classSkills.includes("Balance")){
				weight++;
			}
			if (characterInfo.classSkills.includes("Spot")){
				weight++;
			}
			weight += Math.floor((calculateSkillMod(characterInfo, "Balance") + calculateModifier(characterInfo, "Spot"))/2)
			return Math.max(weight, 1)
		},
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: false
	},
	"Alertness": {
		canLearn: function(characterInfo){
			return true;
		},
		commonSenseCheck: function(characterInfo){
			return true;
		},
		uponLearning: function(characterInfo){
			grantSkillBonus(characterInfo, "Listen", 2)
			grantSkillBonus(characterInfo, "Spot", 2)
		},
		determineWeight: function (characterInfo) {
			let weight = 3;
			if (characterInfo.classSkills.includes("Listen")){
				weight++;
			}
			if (characterInfo.classSkills.includes("Spot")){
				weight++;
			}
			weight += Math.floor((calculateSkillMod(characterInfo, "Listen") + calculateModifier(characterInfo, "Spot"))/2)
			return Math.max(weight, 1)
		},
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: false
	},
	"Animal Affinity": {
		canLearn: function(characterInfo){
			return true;
		},
		commonSenseCheck: function(characterInfo){
			return true;
		},
		uponLearning: function (characterInfo) {
			grantSkillBonus(characterInfo, "Handle Animal", 2)
			grantSkillBonus(characterInfo, "Ride", 2)
		},
		determineWeight: function (characterInfo) {
			let weight = 3;
			if (characterInfo.classSkills.includes("Handle Animal")){
				weight++;
			}
			if (characterInfo.classSkills.includes("Ride")){
				weight++;
			}
			weight += Math.floor((calculateSkillMod(characterInfo, "Handle Animal") + calculateModifier(characterInfo, "Ride"))/2)
			return Math.max(weight, 1)
		},
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: false
	},
	"Armor Proficiency (Heavy)": {
		canLearn: function(characterInfo){
			return (characterInfo.armorProficiencies.lightArmor && characterInfo.armorProficiencies.mediumArmor && !characterInfo.armorProficiencies.heavyArmor)
		},
		commonSenseCheck: function (characterInfo) {
			return true;
		},
		uponLearning: function (characterInfo) {
			characterInfo.armorProficiencies.heavyArmor = true
		},
		determineWeight: function (characterInfo) {
			weight = 5;
			weight += calculateModifier(characterInfo.dexterity) * -1
			if (characterInfo.class === "Bard" || characterInfo.class === "Barbarian" || characterInfo.class === "Ranger"){
				weight -= 1
			}
			if (characterInfo.class === "Wizard" || characterInfo.class === "Sorcerer" || characterInfo.class === "Monk"){
				weight -= 2
			}
			if (characterInfo.class === "Druid"){
				weight -= 3
			}
			return Math.max(weight, 1)
		},
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: false
	},
	"Armor Proficiency (Light)": {
		canLearn: function(characterInfo){
			return !characterInfo.armorProficiencies.lightArmor
		},
		commonSenseCheck: function(characterInfo){
			return true
		},
		uponLearning: function(characterInfo){
			characterInfo.armorProficiencies.lightArmor = true
		},
		determineWeight: function (characterInfo) {
			weight = 5;
			weight += calculateModifier(characterInfo.dexterity) * -1
			if (characterInfo.class === "Wizard" || characterInfo.class === "Sorcerer" || characterInfo.class === "Monk"){
				weight -= 2
			}
			return Math.max(weight, 1)
		},
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: false
	},
	"Armor Proficiency (Medium)": {
		canLearn: function(characterInfo){
			return (characterInfo.armorProficiencies.lightArmor && !characterInfo.armorProficiencies.mediumArmor)
		},
		commonSenseCheck: function(characterInfo){
			return true
		},
		uponLearning: function(characterInfo) {
			characterInfo.armorProficiencies.mediumArmor = true
		},
		determineWeight: function(characterInfo){
			weight = 5;
			weight += calculateModifier(characterInfo.dexterity) * -1
			if (characterInfo.class === "Bard" || characterInfo.class === "Ranger"){
				weight -= 1
			}
			if (characterInfo.class === "Wizard" || characterInfo.class === "Sorcerer" || characterInfo.class === "Monk"){
				weight -= 2
			}
			return Math.max(weight, 1)
		},
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: false
	},
	"Athletic": {
		canLearn: function(characterInfo){
			return true;
		},
		commonSenseCheck: function(characterInfo){
			return true;
		},
		uponLearning: function(characterInfo){
			grantSkillBonus(characterInfo, "Climb", 2)
			grantSkillBonus(characterInfo, "Swim", 2)
		},
		determineWeight: function (characterInfo) {
			let weight = 3;
			if (characterInfo.classSkills.includes("Climb")){
				weight++;
			}
			if (characterInfo.classSkills.includes("Swim")){
				weight++;
			}
			weight += Math.floor((calculateSkillMod(characterInfo, "Climb") + calculateModifier(characterInfo, "Swim"))/2)
			return Math.max(weight, 1)
		},
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: false
	},
	"Augment Summoning": {
		canLearn: function(characterInfo){
			return characterInfo.featsKnown.includes("Spell Focus (Conjuration)")
		},
		commonSenseCheck: function(characterInfo){
			for (var i = 0; i < characterInfo.rawSpellsKnown.length; i++){
				if (spellData[characterInfo.rawSpellsKnown[i]].college === "Conjuration" && spellData[characterInfo.rawSpellsKnown[i]].subschool === "Summoning"){
					return true
				}
			}
			return false;
		},
		determineWeight: function (characterInfo) {
			let weight = 8
			let count = 0
			for (var i = 0; i < characterInfo.rawSpellsKnown.length; i++){
				if (spellData[characterInfo.rawSpellsKnown[i]].college === "Conjuration" && spellData[characterInfo.rawSpellsKnown[i]].subschool === "Summoning"){
					count++
				}
			}
			if (count === 0){
				return 1
			}
			return (weight + count)
		},
		uponLearning: function(characterInfo){
			return
		},
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: false
	},
	"Blind-Fight": {
		canLearn: function(characterInfo){
			return true
		},
		commonSenseCheck: function(characterInfo) {
			return true
		},
		uponLearning: function(characterInfo){
			return;
		},
		determineWeight: function (characterInfo) {
			let weight = 5
			if (characterInfo.features.includes("Darkvision 60 feet")){
				weight -= 2
			}
			else if (characterInfo.features.includes("Low-Light Vision")){
				weight -= 1
			}
			if (characterInfo.class === "Monk"){
				weight += 3
			}
			if (characterInfo.class === "Fighter" || characterInfo.class === "Barbarian" || characterInfo.class === "Paladin" || characterInfo.class === "Rogue"){
				weight += 2
			}
			if (characterInfo.class === "Ranger"){
				weight += 1
			}
			if (characterInfo.class === "Sorcerer" || characterInfo.class === "Wizard"){
				weight -= 2
			}
			if (calculateModifier(characterInfo.dexterity) >= 1){
				weight += Math.floor(calculateModifier(characterInfo.dexterity)/2)
			}
			return Math.max(weight, 1)
		},
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: true
	},
	"Cleave": {
		canLearn: function (characterInfo) {
			return (characterInfo.strength >= 13 && characterInfo.featsKnown.includes("Power Attack"))
		},
		commonSenseCheck: function (characterInfo) {
			return true; 
		},
		uponLearning: function(characterInfo){
			return;
		},
		determineWeight: function(characterInfo){
			weight = 6
			weight += calculateModifier(characterInfo.strength)
			if (classData[characterInfo.class].baseAttackBonus === "Good"){
				weight += 2
			}
			else if (classData[characterInfo.class].baseAttackBonus === "Poor"){
				weight -= 2
			}
			return Math.max(weight, 1)
		},
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: true
	},
	"Combat Casting": {
		canLearn: function (characterInfo) {
			return true
		},
		commonSenseCheck: function(characterInfo){
			let hasSpellLikeAbility = false
			for (var i = 0; i < characterInfo.features.length; i++){
				if (characterInfo.features[i].startsWith("Spell-Like Ability")){
					hasSpellLikeAbility = true
				}
			}
			return (characterInfo.rawSpellsKnown.length > 0 || hasSpellLikeAbility)
		},
		uponLearning: function (characterInfo) {
			return;
		},
		determineWeight: function(characterInfo){
			let weight = 5
			if (characterInfo.rawSpellsKnown.length > 0) {
				if (characterInfo.classSkills["Concentration"]){
					weight += 1
				}
				weight += Math.floor(calculateSkillMod(characterInfo, "Concentration") /2)
				let hasSpellLikeAbility
				for (var i = 0; i < characterInfo.features.length; i++){
					if (characterInfo.features[i].startsWith("Spell-Like Ability")){
						weight++
						break;
					}
				}
				return Math.max(weight, 1 )
			}
			else {
				return 1
			}
		},
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: false
	},
	"Combat Expertise": {
		canLearn: function(characterInfo) {
			return (characterInfo.intelligence >= 13)
		},
		commonSenseCheck: function(characterInfo) {
			return true;
		},
		uponLearning: function(characterInfo){
			return;
		},
		determineWeight: function(characterInfo){
			let weight = 5
			if (classData[characterInfo.class].baseAttackBonus === "Good"){
				weight += 2
			}
			else if (classData[characterInfo.class].baseAttackBonus === "Poor"){
				weight -= 2
			}
			return weight
		},
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: true
	},
	"Combat Reflexes": {
		canLearn: function(characterInfo){
			return true
		},
		commonSenseCheck: function(characterInfo){
			return (calculateModifier(characterInfo.dexterity) >= 1)
		},
		uponLearning: function(characterInfo){
			return;
		},
		determineWeight: function (characterInfo) {
			if (calculateModifier(characterInfo.dexterity) < 1){
				return 1
			}
			else {
				let weight = 5
				weight += calculateModifier(characterInfo.dexterity)
				if (classData[characterInfo.class].baseAttackBonus === "Good"){
					weight += 2
				}
				else if (classData[characterInfo.class].baseAttackBonus === "Poor"){
					weight -= 2
				}
				return weight
			}
		},
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: true
	},
	"Deceitful": {
		canLearn: function(characterInfo){
			return true;
		},
		commonSenseCheck: function(characterInfo){
			return true;
		},
		uponLearning: function(characterInfo){
			grantSkillBonus(characterInfo, "Disguise", 2)
			grantSkillBonus(characterInfo, "Forgery", 2)
		},
		determineWeight: function (characterInfo) {
			let weight = 3;
			if (characterInfo.classSkills.includes("Disguise")){
				weight++;
			}
			if (characterInfo.classSkills.includes("Forgery")){
				weight++;
			}
			weight += Math.floor((calculateSkillMod(characterInfo, "Disguise") + calculateModifier(characterInfo, "Forgery"))/2)
			return Math.max(weight, 1)
		},
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: false
	},
	"Deflect Arrows": {
		canLearn: function(characterInfo){
			return (characterInfo.dexterity >= 13 && (characterInfo.featsKnown.includes("Improved Unarmed Strike") || characterInfo.features.includes("Unarmed Strike")))
		},
		commonSenseCheck: function(characterInfo) {
			return true;
		},
		uponLearning: function(characterInfo){
			return;
		},
		hasSubfeats: false,
		stacking: false,
		determineWeight: function(characterInfo){
			return 8
		},
		fighterBonusFeat: true
	},
	"Deft Hands": {
		canLearn: function (characterInfo) {
			return true
		},
		commonSenseCheck: function(characterInfo){
			return true;
		},
		uponLearning: function(characterInfo){
			grantSkillBonus(characterInfo, "Sleight of Hand", 2)
			grantSkillBonus(characterInfo, "Use Rope", 2)
		},
		determineWeight: function (characterInfo) {
			let weight = 3;
			if (characterInfo.classSkills.includes("Sleight of Hand")){
				weight++;
			}
			if (characterInfo.classSkills.includes("Use Rope")){
				weight++;
			}
			weight += Math.floor((calculateSkillMod(characterInfo, "Sleight of Hand") + calculateModifier(characterInfo, "Use Rope"))/2)
			return Math.max(weight, 1)
		},
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: false 
	},
	"Diehard": {
		canLearn: function(characterInfo){
			return characterInfo.features.includes("Endurance")
		},
		commonSenseCheck: function (characterInfo) {
			return true
		},
		uponLearning: function(characterInfo){
			return
		},
		determineWeight: function (characterInfo) {
			weight = 8;
			if (characterInfo.class === "Fighter" || characterInfo.class === "Barbarian" || characterInfo.class === "Monk" || characterInfo.class === "Paladin"){
				weight += 2
			}
			if (characterInfo.class === "Rogue"){
				weight -= 1
			}
			if (characterInfo.class === "Wizard" || characterInfo.class === "Sorcerer"){
				weight -= 2
			}
			return weight
		},
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: false
	},
	"Diligent": {
		canLearn: function (characterInfo) {
			return true
		},
		commonSenseCheck: function (characterInfo) {
			return true
		},
		uponLearning: function (characterInfo) {
			grantSkillBonus(characterInfo, "Appraise", 2)
			grantSkillBonus(characterInfo, "Decipher Script", 2)
		},
		determineWeight: function (characterInfo) {
			let weight = 3;
			if (characterInfo.classSkills.includes("Appraise")){
				weight++;
			}
			if (characterInfo.classSkills.includes("Decipher Script")){
				weight++;
			}
			weight += Math.floor((calculateSkillMod(characterInfo, "Appraise") + calculateModifier(characterInfo, "Decipher Script"))/2)
			return Math.max(weight, 1)
		},
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: false
	},
	"Dodge": {
		canLearn: function (characterInfo){
			return (characterInfo.dexterity >= 13)
		},
		commonSenseCheck: function(characterInfo){
			return true
		},
		uponLearning: function(characterInfo){
			return
		},
		determineWeight: function (characterInfo) {
			weight = 6;
			if (characterInfo.class === "Fighter" || characterInfo.class === "Barbarian" || characterInfo.class === "Monk" || characterInfo.class === "Paladin"){
				weight += 2
			}
			if (characterInfo.class === "Rogue"){
				weight += 1
			}
			if (characterInfo.class === "Wizard" || characterInfo.class === "Sorcerer"){
				weight -= 2
			}
			return weight
		},

		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: true
	},
	"Empower Spell": {
		canLearn: function (characterInfo){
			return true;
		},
		commonSenseCheck: function (characterInfo) {
			if (calculateMaximumSpellLevel(characterInfo) >= 2){
				for (var property in characterInfo.spells){
					for (var i = 0; i < characterInfo.spells[property].length - 2; i++){
						for (var j = 0; j < characterInfo.spells[property][i].length; j++){
							if (spellData[characterInfo.spells[property][i][j]].empowerable){
								return true
							}
						}
					}
				}
				return false
			}
			else {
				return false
			}
		},
		uponLearning: function(characterInfo){
			return;
		},
		determineWeight: function(characterInfo){
			if (calculateMaximumSpellLevel(characterInfo) >= 2){
				let weight = 5;
				let empowerableSpells = 0
				for (var property in characterInfo.spells){
					for (var i = 0; i <= characterInfo.spells[property].length - 2; i++){
						for (var j = 0; j <= characterInfo.spells[property][i].length; j++){
							if (spellData[characterInfo.spells[property][i][j]].empowerable){
								empowerableSpells++;
							}
						}
					}
				}
				if (empowerableSpells === 0){
					return 1
				}
				else {
					weight += Math.floor(empowerableSpells/2)
					return weight
				}
			}
			else {
				return 1
			}
		},
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: false
	},
	"Endurance": {
		canLearn: function(characterInfo){
			return true;
		},
		commonSenseCheck: function (characterInfo) {
			return true;
		},
		uponLearning: function (characterInfo) {
			return;
		},
		determineWeight: function(characterInfo){
			weight = 10
			weight += calculateModifier(characterInfo.constitution) * 2
			if (characterInfo.classSkills.includes["Swim"]){
				weight++;
			}
			weight += Math.floor(calculateSkillMod(characterInfo, "Swim")/2)
			return Math.max(Math.floor(weight/2), 1)
		},
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: false
	},
	"Enlarge Spell": {
		canLearn: function(characterInfo){
			return true
		},
		commonSenseCheck: function(characterInfo){
			for (property in characterInfo.spells){
				for (var i = 0; i < characterInfo.spells[property].length - 1; i++){
					for (var j = 0; j < characterInfo.spells[property][i]; j < 0){
						if (spellData[characterInfo.spell[property][i]].range === "Close" ||
							spellData[characterInfo.spell[property][i]].range === "Medium" ||
							spellData[characterInfo.spell[property][i]].range === "Long"){
							return true
						}
				}
				}
			}
			return false
		},
		uponLearning: function(characterInfo){
			return
		},
		determineWeight: function(characterInfo){
			let weight = 5;
			let elligbleSpells = 0;
			for (property in characterInfo.spells){
				for (var i = 0; i < characterInfo.spells[property].length - 1; i++){
					for (var j = 0; j <characterInfo.spells[property][i].length; j++){
						if (spellData[characterInfo.spell[property][i]].range === "Close" ||
							spellData[characterInfo.spell[property][i]].range === "Medium" ||
							spellData[characterInfo.spell[property][i]].range === "Long"){
							elligbleSpells++;
						}
					}
				}
			}
			if (elligbleSpells === 0){
				return 1
			}
			else {
				weight += Math.floor(elligbleSpells/2)
			}
			return weight
		},
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: false
	},
	"Eschew Materials": {
		canLearn: function (characterInfo) {
			return true;
		},
		commonSenseCheck: function (characterInfo) {
			for (var i = 0; i < characterInfo.rawSpellsKnown.length; i++){
				if ((spellData[characterInfo.rawSpellsKnown[i]].materialCompontent && spell[characterInfo.rawSpellsKnown[i]].materialCompontentCost <= 100) && (classData[characterInfo.class].castingType !== "Divine" || !spellData[characterInfo.rawSpellsKnown[i]].divineFocusComponent)){
					return true
				}
			}
			return false
		},
		determineWeight: function (characterInfo){
			let weight = 5
			let elligbleSpells = 0
			for (var i = 0; i < characterInfo.rawSpellsKnown.length; i++){
				if (spellData[characterInfo.rawSpellsKnown[i]].materialCompontent && (classData[characterInfo.class].castingType !== "Divine" || !spellData[characterInfo.rawSpellsKnown[i]].divineFocusComponent)){
					elligbleSpells++;
				}
			}
			if (elligbleSpells === 0){
				return 1
			}
			else {
				weight += Math.floor(elligbleSpells/2)
				return weight
			}
		},
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: false,
		uponLearning: function(characterInfo){
			return
		},

	},
	"Exotic Weapon Proficiency": {
		canLearn: function (characterInfo){
			if (characterInfo.baseAttackBonus < 1){
				return false
			}
			else {
				for (var property in weaponData){
					if (weaponData[property].proficiencyType === "Exotic" || !characterInfo.weaponProficiencies[property] && !characterInfo.features.includes("Weapon Familiarity (" + property + ")") && ((property !== "Bastard Sword" && property !== "War Axe") || characterInfo.strength >= 13)){
						return true
					}
				}
				return false
			}
		},
		commonSenseCheck: function(characterInfo){
			return true;
		},
		hasSubfeats: true,
		generateSubfeats: function(characterInfo) {
			let array = []
			for (var property in weaponData){
				if (weaponData[property].proficiencyType === "Exotic" || !characterInfo.weaponProficiencies[property] && !characterInfo.features.includes("Weapon Familiarity (" + property + ")") && ((property !== "Bastard Sword" && property !== "War Axe") || characterInfo.strength >= 13)){
					array.push(property)
				}
			}
			return array
		},
		uponLearning: function(characterInfo, subfeat){
			characterInfo.weaponProficiencies[subfeat] = true;
		},
		determineWeight: function (characterInfo) {
			let weight = 5
			weight += Math.floor((calculateModifier(characterInfo.strength) + calculateModifier(characterInfo.dexterity))/2)
			if (classData[characterInfo.class].baseAttackBonus === "Good"){
				weight += 2
			}
			else if (characterInfo[characterInfo.class].baseAttackBonus === "Poor"){
				weight -= 2
			}
			return weight
		},
		determineSubfeatWeight: function (characterInfo, subfeat) {
			let weight = 5
			if(((weaponData[subfeat].subtype === "Light Melee Weapon" || weaponData[subfeat].subtype === "Unarmed Attacks" || subfeat === "Whip" || subfeat === "Spiked Chain") && characterInfo.featsKnown.includes("Weapon Finesse") && (characterInfo.dexterity > characterInfo.strength)) || weaponData[subfeat].subtype === "Ranged Weapon"){
				weight += calculateModifier(characterInfo.dexterity) 
			}
			else {
				weight += calculateModifier(characterInfo.strength)
			}
			if (characterInfo.race === "Half-Orc" && subfeat === "Orc Double Axe"){
				weight += 2
			}
			return weight
		},
		stacking: false,
		fighterBonusFeat: true
	},
	"Extend Spell": {
		canLearn: function (characterInfo){
			return true;
		},
		commonSenseCheck: function (characterInfo) {
			for (var property in characterInfo.spells){
				for (var i = 0; i < characterInfo.spells[property].length - 1; i++){
					for (var j = 0; j < characterInfo.spells[property][i].length; j++){
						if (characterInfo.spells[property][i][j].duration !== "Concentration" && !characterInfo.spells[property][i][j].durationRequiresConcentration && !characterInfo.spells[property][i].durationBoostedByConcentration && !characterInfo.spells[property][i].duration !== "Instantaneous" && !characterInfo.spells[property][i][j].duration !== "Concentration" && !characterInfo.spells[property][i][j].duration !== "See text"){
							return true
						}
					}
				}
			}
			return false
		},
		uponLearning: function(characterInfo){
			return;
		},
		determineWeight: function (characterInfo) {
			let weight = 5;
			let count = 0
			for (var property in characterInfo.spells){
				for (var i = 0; i < characterInfo.spells[property].length - 1; i++){
					if (characterInfo.spells[property][i] === null){
						continue
					}
					for (var j = 0; j < characterInfo.spells[property][i].length; j++){
						if (characterInfo.spells[property][i].duration !== "Concentration" && !characterInfo.spells[property][i].durationRequiresConcentration && !characterInfo.spells[property][i].durationBoostedByConcentration && !characterInfo.spells[property][i].duration !== "Instantaneous" && !characterInfo.spells[property][i].duration !== "Concentration"){
							count++
						}
					}
				}
			}
			if (count === 0){
				return 1
			}
			else {
				weight += Math.floor(count/3)
				return count
			}
		},
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: false
	},
	"Extra Tunning": {
		canLearn: function(characterInfo){
			for (var i =  0; i < characterInfo.features.length; i++){
				if (characterInfo.features[i].startsWith("Turn") || characterInfo.features[i].startsWith("Rebuke")){
					return true;
				}
			}
			return false
		},
		commonSenseCheck: function (characterInfo) {
			return true
		},
		uponLearning: function(characterInfo){
			return;
		},
		determineWeight: function(characterInfo){
			let weight = 3
			let count = 0
			for (var i =  0; i < characterInfo.features.length; i++){
				if (characterInfo.features[i].startsWith("Turn") || characterInfo.features[i].startsWith("Rebuke")){
					count++
				}
			}
			weight += calculateModifier(characterInfo.charisma)
			return weight + (count * 2)
		},
		hasSubfeats: false,
		stacking: true,
		fighterBonusFeat: false
	},
	"Far Shot": {
		canLearn: function(characterInfo) {
			return characterInfo.featsKnown.includes("Point Blank Shot")
		},
		commonSenseCheck: function(characterInfo){
			return true
		},
		uponLearning: function (characterInfo) {
			return;
		},
		determineWeight: function(characterInfo){
			let weight = 8;
			weight += Math.floor(calculateModifier(characterInfo.dexterity)/2)
			if (classData[characterInfo.class].baseAttackBonus === "Good"){
				weight += 2
			}
			else if (classData[characterInfo.class].baseAttackBonus === "Poor"){
				weight -= 2
			}
		 	for (var i = 0; i < characterInfo.featsKnown.length; i++){
		 		if (characterInfo.featsKnown[i].startsWith("Weapon Focus")){
		 			for (var property in weaponData){
		 				let weaponFocus = "Weapon Focus (";
		 				if (weaponData[characterInfo.featsKnown[i].substring(weaponFocus.length, characterInfo.featsKnown[i].length - 1)] && weaponData[characterInfo.featsKnown[i].substring(weaponFocus.length, characterInfo.featsKnown[i].length - 1)].subtype === "Ranged Weapon"){
		 					weight += 2
		 				}
		 			}
		 		}
		 	}
		 	return Math.max(weight, 1)
		},
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: true,
	},
	"Great Fortitude": {
		canLearn: function(characterInfo){
			return true;
		},
		commonSenseCheck: function(characterInfo){
			return true
		},
		uponLearning: function (characterInfo) {
			characterInfo.fortitude += 2
		},
		determineWeight: function(characterInfo){
			weight = 3
			if (classData[characterInfo.class].fortitudeSave === "Good"){
				weight += 4
			}
			weight += calculateModifier(characterInfo.constitution)
		},
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: false
	},
	"Greater Spell Focus": {
		canLearn: function(characterInfo){
			for (var i = 0; i < characterInfo.featsKnown.length; i++){
				if (characterInfo.featsKnown[i].startsWith("Spell Focus")){
						return true;
				}
			}
			return false
		},
		commonSenseCheck: function (characterInfo) {
			let college
			for (var i = 0; i < characterInfo.featsKnown.length; i++){
				if (characterInfo.featsKnown[i].startsWith("Spell Focus")){
					college = characterInfo.featsKnown[i].substring(13, characterInfo.featsKnown[i].length - 1)
					for (var i = 0; i < characterInfo.rawSpellsKnown.length; i++){
						if (spellData[characterInfo.rawSpellsKnown[i]].college === college && spellData[characterInfo.rawSpellsKnown[i]].hasSavingThrow){
							return true;
						}
					}
				}
			}
			return false
		},
		hasSubfeats: true,
		generateSubfeats: function (characterInfo) {
			let = array = []
			for (var i = 0; i < characterInfo.featsKnown.length; i++){
				if (characterInfo.featsKnown[i].startsWith("Spell Focus")){
					let college = characterInfo.featsKnown[i].substring(13, characterInfo.featsKnown[i].length - 1)
					if (document.getElementById("basicfiltering").checked){
						for (var i = 0; i < characterInfo.rawSpellsKnown.length; i++){
							if (spellData[characterInfo.rawSpellsKnown[i]].college === college && spellData[characterInfo.rawSpellsKnown[i]].hasSavingThrow){
								array.push(college)
							}
						}
					}
					else {
						array.push(college)
					}
				}
			}
			return array
		},
		uponLearning: function (characterInfo, subfeat) {
			return;
		},
		determineWeight: function (characterInfo){
			let weight = 8;
			let college = []
			for (var i = 0; i < characterInfo.featsKnown.length; i++){
				if (characterInfo.featsKnown[i].startsWith("Spell Focus")){
					let spellFocus = "Spell Focus ("
					college.push(characterInfo.featsKnown[i].substring(spellFocus.length, characterInfo.featsKnown[i].length - 1))
				}
			}
			let count = []
			for (var i = 0; i < characterInfo.rawSpellsKnown.length; i++){
				count.push(0)
				if (college.includes(spellData[characterInfo.rawSpellsKnown[i]].college) && spellData[characterInfo.rawSpellsKnown[i]].hasSavingThrow){
					count[i]++
				}
			}
			if (Math.max(...count) === 0 || count.length === 0){
				return 1
			}
			weight += Math.floor(Math.max(...count)/2)
		},
		determineSubfeatWeight: function(characterInfo, subfeat){
			let weight = 5;
			let count = 0
			for (var i = 0; i < characterInfo.rawSpellsKnown.length; i++){
				if (college === spellData[characterInfo.rawSpellsKnown[i]].college && spellData[characterInfo.rawSpellsKnown[i]].hasSavingThrow){
					count++
				}
			}
			if (count === 0){
				return 1
			}
			else {
				weight += Math.floor(count/2)
			}
		},
		stacking: false,
		fighterBonusFeat: false
	},
	"Greater Spell Penetration": {
		canLearn: function(characterInfo){
			return characterInfo.featsKnown.includes("Spell Penetration")
		},
		commonSenseCheck: function (characterInfo) {
			for (var i = 0; i < characterInfo.rawSpellsKnown.length; i++){
				if (spellData[characterInfo.rawSpellsKnown[i]].spellResistance){
					return true
				}
			}
			return false
		},
		hasSubfeats: false,
		uponLearning: function (characterInfo) {
			return;
		},
		determineWeight: function(characterInfo){
			let weight = 8;
			let count = 0
			for (var i = 0; i < characterInfo.rawSpellsKnown.length; i++){
				if (spellData[characterInfo.rawSpellsKnown[i]].spellResistance){
					count++
				}
			}
			if (count === 0){
				return 1
			}
			else {
				return weight + Math.floor(count/2)
			}
		},
		stacking: false,
		fighterBonusFeat: false
	},
	"Heighten Spell": {
		canLearn: function(characterInfo){
			return true
		},
		commonSenseCheck: function(characterInfo){
			return (calculateMaximumSpellLevel(characterInfo) >= 1)
		},
		determineWeight: function (characterInfo) {
			let weight = 5
			let count = 0
			for (var property in characterInfo.spells){
				for (var i = 0; i < characterInfo.spells[property].length - 1; i++){
					if (characterInfo.spells[property][i] === null){
						continue
					}
					for (var j = 0; j < characterInfo.spells[property][i].length; j++){
						if (spellData[characterInfo.spells[property][i][j]].spellResistance){
							count++
						}
					}
				}
			}
			if (count === 0){
				return 2
			}
			return weight + Math.floor(count/3)
		},
		hasSubfeats: false,
		uponLearning: function (characterInfo) {
			return;
		},

		stacking: false,
		fighterBonusFeat: false
	},
	"Improved Bull Rush": {
		canLearn: function(characterInfo){
			return (characterInfo.strength >= 13 && characterInfo.featsKnown.includes("Power Attack"))
		},
		commonSenseCheck: function(characterInfo) {
			return true
		},
		hasSubfeats: false,
		uponLearning: function(characterInfo){
			return;
		},
		determineWeight: function(characterInfo){
			let weight = 9;
			if (classData[characterInfo.class].baseAttackBonus === "Good"){
				weight += 2
			}
			else if (classData[characterInfo.class].baseAttackBonus === "Poor"){
				weight -= 2
			}
			return weight
		},
		stacking: false,
		fighterBonusFeat: true
	},
	"Improved Counterspell": {
		canLearn: function(characterInfo){
			return true
		},
		commonSenseCheck: function(characterInfo){
			return (characterInfo.rawSpellsKnown.length > 0 || calculateMaximumSpellLevel(characterInfo) >= 1)
		},
		hasSubfeats: false,
		uponLearning: function(characterInfo){
			return;
		},
		determineWeight: function(characterInfo){
			let weight = 4;
			if (characterInfo.rawSpellsKnown.length === 0 || calculateMaximumSpellLevel(characterInfo) < 1){
				return 1
			}
			weight += Math.floor((calculateSkillMod(characterInfo, "Spellcraft"))/2)
			if (characterInfo.rawSpellsKnown.includes("Dispel Magic")){
				weight -= 1
			}
			return Math.max(weight, 1)
		},
		stacking: false,
		fighterBonusFeat: false
	},
	"Improved Disarm": {
		canLearn: function(characterInfo){
			return (characterInfo.intelligence >= 13 && characterInfo.featsKnown.includes("Combat Expertise"))
		},
		commonSenseCheck: function(characterInfo){
			return true
		},
		hasSubfeats: false,
		uponLearning: function(characterInfo){
			return
		},
		determineWeight: function(characterInfo){
			let weight = 9;
			if (classData[characterInfo.class].baseAttackBonus === "Good"){
				weight += 2
			}
			else if (classData[characterInfo.class].baseAttackBonus === "Poor"){
				weight -= 2
			}
			if (raceData[characterInfo.race].size === "Small"){
				weight -= 1
			}
			for (var i = 0; i < characterInfo.featsKnown.length; i++){
				if (characterInfo.featsKnown[i].startsWith("Weapon Focus")){
					let weaponFocus = "Weapon Focus (";
					if (weaponData[characterInfo.featsKnown[i].substring(weaponFocus.length, characterInfo.featsKnown[i].length - 1)].subtype === "Two-Handed Melee Weapon"){
						weight += 1
					}
				}
			}
			return Math.max(weight, 1)
		},
		stacking: false,
		fighterBonusFeat: true
	},
	"Improved Feint": {
		canLearn: function(characterInfo){
			return (characterInfo.intelligence >= 13 && characterInfo.featsKnown.includes("Combat Expertise"))
		},
		commonSenseCheck: function(characterInfo){
			return true
		},
		hasSubfeats: false,
		uponLearning: function (characterInfo) {
			return
		},
		determineWeight: function(characterInfo){
			let weight = 8;
			if (classData[characterInfo.class].baseAttackBonus === "Good"){
				weight += 2
			}
			else if (classData[characterInfo.class].baseAttackBonus === "Poor"){
				weight -= 2
			}
			weight += Math.floor((calculateSkillMod(characterInfo, "Bluff"))/2)
			return Math.max(weight, 1)

		},
		stacking: false,
		fighterBonusFeat: true
	},
	"Improved Grapple": {
		canLearn: function(characterInfo) {
			return (characterInfo.dexterity > 13 && (characterInfo.featsKnown.includes("Improved Unarmed Strike") || characterInfo.features.includes("Unarmed Strike")))
		},
		commonSenseCheck: function(characterInfo){
			return true
		},
		hasSubfeats: false,
		uponLearning: function(characterInfo){
			return
		},
		determineWeight: function (characterInfo) {
			let weight = 8;
			weight += calculateModifier(characterInfo.strength)
			if (raceData[characterInfo.race].size === "Small"){
				weight -= 4
			}
			if (classData[characterInfo.class].baseAttackBonus === "Good"){
				weight += 2
			}
			else if (classData[characterInfo.class].baseAttackBonus === "Poor"){
				weight -= 2
			}
			return Math.max(weight, 1)
		},
		stacking: false,
		fighterBonusFeat: true
	},
	"Improved Initiative": {
		canLearn: function(characterInfo){
			return true
		},
		commonSenseCheck: function(characterInfo) {
			return true
		},
		hasSubfeats: false,
		uponLearning: function(characterInfo){
			characterInfo.initiative += 4
		},
		determineWeight: function(characterInfo){
			let weight = 5;
			weight += calculateModifier(characterInfo.dexterity)
			return Math.max(weight, 1)
		},
		stacking: false,
		fighterBonusFeat: true
	},
	"Improved Overrun": {
		canLearn: function(characterInfo) {
			return (characterInfo.strength > 13 && characterInfo.featsKnown.includes("Power Attack"))
		},
		commonSenseCheck: function(characterInfo){
			return true
		},
		hasSubfeats: false,
		uponLearning: function (characterInfo) {
			return
		},
		determineWeight: function(characterInfo){
			let weight = 9;
			weight += calculateModifier(characterInfo.strength)
			if (raceData[characterInfo.race].size === "Small"){
				weight -= 1
			}
			return Math.max(weight, 1)
		},
		stacking: false,
		fighterBonusFeat: true
	},
	"Improved Shield Bash": {
		canLearn: function(characterInfo){
			return characterInfo.armorProficiencies.shield
		},
		commonSenseCheck: function(characterInfo){
			return true
		},
		hasSubfeats: false,
		uponLearning: function (characterInfo){
			return;
		},
		determineWeight: function(characterInfo){
			let weight = 6;
			weight += Math.floor(calculateModifier(characterInfo.strength)/2)
			if (classData[characterInfo.class].fullCaster && classData[characterInfo.class].castingType === "Arcane"){
				weight -= 2
			}
			return Math.max(weight, 1)
		},
		stacking: false,
		fighterBonusFeat: true
	},
	"Improved Sunder": {
		canLearn: function(characterInfo){
			return (characterInfo.strength > 13 && characterInfo.featsKnown.includes("Power Attack"))
		},
		commonSenseCheck: function(characterInfo){
			return true
		},
		hasSubfeats: false,
		uponLearning: function (characterInfo) {
			return
		},
		determineWeight: function(characterInfo){
			weight = 8;
			weight += calculateModifier(characterInfo.strength)
			if (raceData[characterInfo.race].size === "Small"){
				weight -= 2
			}
			return Math.max(weight, 1)
		},
		stacking: false,
		fighterBonusFeat: true
	},
	"Improved Trip": {
		canLearn: function(characterInfo) {
			return (characterInfo.intelligence > 13 && characterInfo.featsKnown.includes("Combat Expertise"))
		},
		commonSenseCheck: function(characterInfo){
			return true
		},
		hasSubfeats: false,
		uponLearning: function(characterInfo){
			return
		},
		determineWeight: function(characterInfo){
			weight = 8;
			weight += calculateModifier(characterInfo.strength)
			if (raceData[characterInfo.race].size === "Small"){
				weight -= 2
			}
			if (classData[characterInfo.class].baseAttackBonus === "Good"){
				weight += 2
			}
			else if (classData[characterInfo.class].baseAttackBonus === "Poor"){
				weight -= 2
			}
			return Math.max(weight, 1)
		},
		stacking: false,
		fighterBonusFeat: true
	},
	"Improved Turning": {
		canLearn: function(characterInfo){
			for (var i =  0; i < characterInfo.features.length; i++){
				if (characterInfo.features[i].startsWith("Turn") || characterInfo.features[i].startsWith("Rebuke")){
					return true;
				}
			}
			return false
		},
		commonSenseCheck: function(characterInfo) {
			return true
		},
		hasSubfeats: false,
		uponLearning: function(characterInfo){
			return
		},
		determineWeight: function(characterInfo){
			let weight = 3;
			let count = 0
			for (var i = 0; i < characterInfo.features.length; i++){
				if (characterInfo.features[i].startsWith("Turn") || characterInfo.features[i].startsWith("Rebuke")){
					count++;
				}
			}
			weight += calculateModifier(characterInfo.charisma)
			return weight + (count*2)
		},
		stacking: false,
		fighterBonusFeat: false
	},
	"Improved Unarmed Strike": {
		canLearn: function (characterInfo){
			return true
		},
		commonSenseCheck: function(characterInfo){
			return true
		},
		hasSubfeats: false,
		uponLearning: function (characterInfo) {
			return
		},
		determineWeight: function(characterInfo){
			let weight = 5;
			weight += calculateModifier(characterInfo.strength)
			if (characterInfo.weaponProficiencies.allMartial){
				weight -= 1
			}
			return Math.max(weight, 1)
		},
		stacking: false,
		fighterBonusFeat: true
	},
	"Investigator": {
		canLearn: function (characterInfo) {
			return true
		},
		commonSenseCheck: function (characterInfo) {
			return true
		},
		hasSubfeats: false,
		uponLearning: function (characterInfo) {
			grantSkillBonus(characterInfo, "Gather Information", 2)
			grantSkillBonus(characterInfo, "Search", 2)
		},
		determineWeight: function(characterInfo){
			let weight = 3
			if (characterInfo.classSkills.includes("Gather Information")){
				weight++
			}
			if (characterInfo.classSkills.includes("Search")){
				weight++
			}
			weight += Math.floor((calculateSkillMod(characterInfo, "Gather Information") + calculateModifier(characterInfo, "Search"))/2)
			
			return Math.max(weight, 1)
		}
	},
	"Iron Will": {
		canLearn: function(characterInfo){
			return true
		},
		commonSenseCheck: function (characterInfo) {
			return true
		},
		hasSubfeats: false,
		uponLearning: function (characterInfo) {
			characterInfo.will += 2
		},
		determineWeight: function(characterInfo){
			let weight = 3
			if (classData[characterInfo.class].willSave === "Good"){
				weight += 4
			}
			weight += calculateModifier(characterInfo.wisdom)
			return Math.max(weight, 1)
		}
	},
	"Lightning Reflexes": {
		canLearn: function (characterInfo) {
			return true
		},
		commonSenseCheck: function (characterInfo) {
			return true
		},
		hasSubfeats: false,
		uponLearning: function(characterInfo){
			characterInfo.reflex += 2
		},
		determineWeight: function (characterInfo) {
			let weight = 3
			if (classData[characterInfo.class].willSave === "Good"){
				weight += 4
			}
			weight += calculateModifier(characterInfo.dexterity)
			return Math.max(weight, 1)
		}
	},
	"Magical Aptitude": {
		canLearn: function (characterInfo) {
			return true
		},
		commonSenseCheck: function (characterInfo) {
			return true
		},
		hasSubfeats: false,
		uponLearning: function (characterInfo) {
			grantSkillBonus(characterInfo, "Spellcraft", 2)
			grantSkillBonus(characterInfo, "Use Magic Device", 2)
		},
		determineWeight: function(characterInfo){
			weight = 3;
			if (characterInfo.classSkills.includes("Spellcraft")){
				weight++;
			}
			if (characterInfo.classSkills.includes("Use Magic Device")){
				weight++;
			}
			weight += Math.floor((calculateSkillMod(characterInfo, "Spellcraft") + calculateModifier(characterInfo, "Use Magic Device"))/2)
			return Math.max(weight, 1)
		}
	},
	"Martial Weapon Proficiency": {
		canLearn: function (characterInfo) {
			if (characterInfo.weaponProficiencies.allMartial){
				return false
			}
			else {
				let allowedMartialWeapon = false;
				for (var property in weaponData) {
					if ((weaponData[property].proficiencyType === "Martial" || (weaponData[property].proficiencyType === "Exotic" && characterInfo.features.includes("Weapon Familiarity (" + property + ")"))) && !characterInfo.weaponProficiencies[property]){
						allowedMartialWeapon = true
						break;
					}
				}
				return allowedMartialWeapon
			}
		},
		commonSenseCheck: function (characterInfo) {
			return true;
		},
		hasSubfeats: true,
		generateSubfeats: function(characterInfo){
			let array = []
			for (var property in weaponData) {
				if ((weaponData[property].proficiencyType === "Martial" || (weaponData[property].proficiencyType === "Exotic" && characterInfo.features.includes("Weapon Familiarity (" + property + ")"))) && !characterInfo.weaponProficiencies[property]){
					array.push(property)
				}
			}
			return array
		},
		uponLearning: function(characterInfo, subfeat){
			characterInfo.weaponProficiencies[subfeat] = true;
		},
		determineWeight: function(characterInfo){
			let weight = 5
			if (classData[characterInfo.class].baseAttackBonus === "Good"){
				weight += 2
			}
			else if (classData[characterInfo.class].baseAttackBonus === "Poor"){
				weight -= 2
			}
			weight += Math.floor((calculateModifier(characterInfo.strength) + calculateModifier(characterInfo.dexterity))/2)
			return Math.max(weight, 1)
		},
		determineSubfeatWeight: function(characterInfo, subfeat){
			let weight = 5;
			if(((weaponData[subfeat].subtype === "Light Melee Weapon" || weaponData[subfeat].subtype === "Unarmed Attacks" || subfeat === "Whip" || subfeat === "Spiked Chain") && characterInfo.featsKnown.includes("Weapon Finesse") && (characterInfo.dexterity > characterInfo.strength)) || weaponData[subfeat].subtype === "Ranged Weapon"){
				weight += calculateModifier(characterInfo.dexterity) 
			}
			else {
				weight += calculateModifier(characterInfo.strength)
			}
			if (weaponData[subfeat].thrownWeapon && characterInfo.race === "Halfling"){
				weight += 2
			}
			let array = ["Longsword", "Rapier", "Longbow", "Shortbow"]
			if (array.includes(subfeat) && characterInfo.race === "Half-Elf"){
				weight += 2
			}
			return weight
		},
		fighterBonusFeat: false,
		stacking: false
	},
	"Maximize Spell": {
		canLearn:function(characterInfo){
			return true
		},
		commonSenseCheck: function(characterInfo){
			for (var property in characterInfo.spells){
				for (var i = 0; i < characterInfo.spells[property].length - 3; i++){
					for (var j = 0; j < characterInfo.spells[property][i]; j++){
						 if (characterInfo.spells[property][i][j].empowerable){
						 	return true
						 }
					}
				}
			}
			return false
		},
		determineWeight: function(characterInfo){
			let count = 0
			for (var property in characterInfo.spells){
				for (var i = 0; i < characterInfo.spells[property].length - 3; i++){
					for (var j = 0; j < characterInfo.spells[property][i]; j++){
						 if (characterInfo.spells[property][i][j].empowerable){
						 	count++
						 }
					}
				}
			}
			if (count === 0){
				return 1
			}
			let weight = 5;
			weight += Math.floor(count/2)
			return weight 
		},
		hasSubfeats: false,
		uponLearning: function(characterInfo){
			return
		},
		fighterBonusFeat: false
	},
	"Mobility": {
		canLearn:function(characterInfo){
			return (characterInfo.dexterity >= 13 || characterInfo.featsKnown.includes("Dodge"))
		},
		commonSenseCheck: function (characterInfo) {
			return true
		},
		hasSubfeats: false,
		uponLearning: function (characterInfo) {
			return
		},
		fighterBonusFeat: true,
		determineWeight: function(characterInfo){
			let weight = 7;
			weight += calculateModifier(characterInfo.dexterity)
			return Math.max(weight, 1)
		}
	},
	"Mounted Archery": {
		canLearn: function(characterInfo){
			return(characterInfo.skillRanks["Ride"] && characterInfo.skillRanks["Ride"] >= 1 && characterInfo.featsKnown.includes("Mounted Combat"))
		},
		commonSenseCheck: function(characterInfo){
			return true
		},
		hasSubfeats: false,
		uponLearning: function (characterInfo) {
			return
		},
		fighterBonusFeat: true,
		determineWeight: function(characterInfo){
			let weight = 7
			if (characterInfo.featsKnown.includes("Point Blank Shot")){
				weight += 2
			}
			if (characterInfo.featsKnown.includes("Precise Shot")){
				weight += 2
			}
			if (characterInfo.classSkills.includes("Ride")){
				weight++
			}
			let weaponFocus = "Weapon Focus ("
			for (var i = 0; i < characterInfo.featsKnown.length; i++){
				if (characterInfo.featsKnown[i].startsWith("Weapon Focus") && weaponData[characterInfo.featsKnown[i].substring(weaponFocus.length, characterInfo.featsKnown[i].length - 1)].subtype === "Ranged Weapon"){
					weight += 2
				}
			}
			weight += Math.floor(calculateSkillMod(characterInfo, "Ride")/2)
			if (classData[characterInfo.class].baseAttackBonus === "Good"){
				weight += 2
			}
			else if (classData[characterInfo.class].baseAttackBonus === "Poor"){
				weight -= 2
			}
			weight += Math.floor(calculateModifier(characterInfo.dexterity)/2)
			return Math.max(weight, 1)
		}
	},
	"Mounted Combat": {
		canLearn: function (characterInfo) {
			return(characterInfo.skillRanks["Ride"] && characterInfo.skillRanks["Ride"] >= 1)
		},
		commonSenseCheck: function(characterInfo){
			return true
		},
		hasSubfeats: false,
		uponLearning: function (characterInfo) {
			return
		},
		determineWeight: function (characterInfo){
			let weight = 5
			if (characterInfo.classSkills.includes("Ride")){
				weight++
			}
			weight += Math.floor(calculateSkillMod(characterInfo, "Ride")/2)
			return Math.floor(weight, 1)
		},
		fighterBonusFeat: true
	},
	"Negotiator": {
		canLearn: function(characterInfo){
			return true
		},
		commonSenseCheck: function(characterInfo){
			return true
		},
		hasSubfeats: false,
		uponLearning: function (characterInfo) {
			grantSkillBonus(characterInfo, "Diplomacy", 2)
			grantSkillBonus(characterInfo, "Sense Motive", 2)
		},
		determineWeight: function(characterInfo){
			let weight = 3
			if (characterInfo.classSkills.includes("Diplomacy")){
				weight++
			}
			if (characterInfo.classSkills.includes("Sense Motive")){
				weight++
			}
			weight += Math.floor((calculateSkillMod(characterInfo, "Diplomacy") + calculateSkillMod(characterInfo, "Sense Motive"))/2)
			return Math.max(weight, 1)
		},
		fighterBonusFeat: false
	},
	"Nimble Fingers": {
		canLearn: function(characterInfo){
			return true
		},
		commonSenseCheck: function(characterInfo){
			return 
		},
		hasSubfeats: false,
		uponLearning: function (characterInfo) {
			grantSkillBonus(characterInfo, "Disable Device", 2)
			grantSkillBonus(characterInfo, "Open Locks", 2)
		},
		determineWeight: function (characterInfo) {
			let weight = 3
			if (characterInfo.classSkills.includes("Disable Device")){
				weight++
			}
			if (characterInfo.classSkills.includes("Open Locks")){
				weight++
			}
			weight += Math.floor((calculateSkillMod(characterInfo, "Disable Device") + calculateSkillMod(characterInfo, "Open Locks"))/2)
			return Math.max(weight, 1)
		},
		fighterBonusFeat: false
	},
	"Persuasive": {
		canLearn: function(characterInfo){
			return true
		},
		commonSenseCheck: function(characterInfo){
			return true
		},
		hasSubfeats: false,
		uponLearning: function (characterInfo) {
			grantSkillBonus(characterInfo, "Bluff", 2)
			grantSkillBonus(characterInfo, "Intimidate", 2)
		},
		determineWeight: function (characterInfo) {
			let weight = 3
			if (characterInfo.classSkills.includes("Bluff")){
				weight++
			}
			if (characterInfo.classSkills.includes("Intimidate")){
				weight++
			}
			weight += Math.floor((calculateSkillMod(characterInfo, "Bluff") + calculateSkillMod(characterInfo, "Intimidate"))/2)
			return Math.max(weight, 1)
		},
		fighterBonusFeat: false
	},
	"Point Blank Shot": {
		canLearn: function(characterInfo){
			return true
		},
		commonSenseCheck: function(characterInfo) {
			return true
		},
		hasSubfeats: false,
		uponLearning: function(characterInfo){
			return;
		},
		determineWeight: function(characterInfo){
			let weight = 5;
			let weaponFocus = "Weapon Focus ("
			for (var i = 0; i < characterInfo.featsKnown.length; i++){
				if (characterInfo.featsKnown[i].startsWith("Weapon Focus") && (weaponData[characterInfo.featsKnown[i].substring(weaponFocus.length, characterInfo.featsKnown[i].length - 1)] && weaponData[characterInfo.featsKnown[i].substring(weaponFocus.length, characterInfo.featsKnown[i].length - 1)].subtype === "Ranged Weapon")){
					weight += 2
				}
			}
			if (characterInfo.featsKnown.includes("Rapid Reload")){
				weight += 2
			}
			weight += calculateModifier(characterInfo.dexterity)
			return weight
		},
		fighterBonusFeat: true
	},
	"Power Attack": {
		canLearn: function (characterInfo) {
			return (characterInfo.strength >= 13)
		},
		commonSenseCheck: function(characterInfo) {
			return true
		},
		hasSubfeats: false,
		uponLearning: function(characterInfo){
			return
		},
		determineWeight: function(characterInfo){
			let weight = 5;
			if (classData[characterInfo.class].baseAttackBonus === "Good"){
				weight += 2
			}
			else if (classData[characterInfo.class].baseAttackBonus === "Poor"){
				weight -= 2
			}
			weight += calculateModifier(characterInfo.strength)
			return Math.max(weight, 1)
		},
		fighterBonusFeat: true
	},
	"Precise Shot": {
		canLearn: function(characterInfo){
			return (characterInfo.featsKnown.includes("Point Blank Shot"))
		},
		commonSenseCheck: function(characterInfo) {
			return true
		},
		hasSubfeats: false,
		uponLearning: function (characterInfo) {
			return
		},
		determineWeight: function(characterInfo){
			let weight = 8;
			if (classData[characterInfo.class].baseAttackBonus === "Good"){
				weight += 2
			}
			else if (characterInfo[characterInfo.class].baseAttackBonus === "Poor"){
				weight -= 2
			}
			weight += calculateModifier(characterInfo.dexterity)
			return Math.max(weight, 1)
		},
		fighterBonusFeat: true
	},
	"Quick Draw": {
		canLearn: function (characterInfo) {
			return characterInfo.baseAttackBonus >= 1
		},
		commonSenseCheck: function (characterInfo) {
			return true
		},
		hasSubfeats: false,
		uponLearning: function (characterInfo) {
			return
		},
		determineWeight: function(characterInfo){
			let weight = 5;
			if (classData[characterInfo.class].baseAttackBonus === "Good"){
				weight += 2
			}
			else if (characterInfo[characterInfo.class].baseAttackBonus === "Poor"){
				weight -= 2
			}
			if (characterInfo.race === "Halfling"){
				weight += 1
			}
			return Math.max(weight, 1)
		},
		fighterBonusFeat: true
	},
	"Quicken Spell": {
		canLearn: function(characterInfo){
			return true
		},
		commonSenseCheck: function(characterInfo){
			for (var property in characterInfo.spells){
				if (property !== "Sorcerer" && property !== "Bard"){
					for (var i = 0; i < characterInfo.spells[property].length - 4; i++){
						for (var j = 0; j < characterInfo.spells[property][i].length; j++){
							if (spellData[characterInfo.spells[property][i][j]].canBeQuicken){
								return true
							}
						}
					}
				}
			}
			return false
		},
		hasSubfeats: false,
		uponLearning: function(characterInfo){
			return
		},
		determineWeight: function(characterInfo){
			let weight = 5
			let count = 0
			for (var property in characterInfo.spells){
				if (property !== "Sorcerer" && property !== "Bard"){
					for (var i = 0; i < characterInfo.spells[property].length - 4; i++){
						for (var j = 0; j < characterInfo.spells[property][i].length; j++){
							if (spellData[characterInfo.spells[property][i][j]].canBeQuicken){
								count++
							}
						}
					}
				}
			}
			if (count === 0){
				return 1
			}
			else {
				return weight + Math.floor(count/4)
			}
		},
		fighterBonusFeat: false
	},
	"Rapid Reload": {
		canLearn: function(characterInfo) {
			return (canUseWeapon(characterInfo, "Hand Crossbow") || canUseWeapon(characterInfo, "Light Crossbow") || canUseWeapon(characterInfo, "Heavy Crossbow"))
		},
		commonSenseCheck: function(characterInfo){
			return true
		},
		hasSubfeats: true,
		generateSubfeats: function(characterInfo) {
			let array = []
			if (canUseWeapon(characterInfo, "Hand Crossbow")){
				array.push("Hand Crossbow")
			}
			if (canUseWeapon(characterInfo, "Light Crossbow")){
				array.push("Light Crossbow")
			}
			if (canUseWeapon(characterInfo, "Heavy Crossbow")){
				array.push("Heavy Crossbow")
			}
			return array
		},
		determineWeight: function(characterInfo){
			let weight = 5
			weight += calculateModifier(characterInfo.dexterity)
			if (characterInfo.featsKnown.includes("Weapon Focus (Light Crossbow")){
				weight += 2
			}
			if (characterInfo.featsKnown.includes("Weapon Focus (Heavy Crossbow")){
				weight += 2
			}
			if (characterInfo.featsKnown.includes("Weapon Focus (Hand Crossbow")){
				weight += 2
			}
			if (characterInfo.featsKnown.includes("Point Blank Shot")){
				weight += 2
			}
			if (characterInfo.featsKnown.includes("Precise Shot")){
				weight += 2
			}
			if (canUseWeapon(characterInfo, "Hand Crossbow")){
				weight += 2
			}
			return weight
		},
		uponLearning: function (characterInfo, subfeat) {
			return
		},
		determineSubfeatWeight: function(characterInfo, subfeat){
			let weight = 5;
			if (subfeat === "Light Crossbow" && characterInfo.featsKnown.includes("Weapon Focus (Light Crossbow)")){
				weight += 5
			}
			else if (subfeat === "Heavy Crossbow" && characterInfo.featsKnown.includes("Weapon Focus (Heavy Crossbow)")){
				weight += 5
			}
			else if (subfeat === "Hand Crossbow" && characterInfo.featsKnown.includes("Weapon Focus (Hand Crossbow)")){
				weight += 5
			}
			if (subfeat === "Hand Crossbow"){
				weight += Math.floor(calculateSkillMod(characterInfo, "Sleight of Hand")/4)
			}
			if (classData[characterInfo.class].baseAttackBonus === "Good"){
				weight++
			}
			else if (classData[characterInfo.class].baseAttackBonus === "Poor"){
				weight--
			}
			return Math.max(weight, 1)
		},
		fighterBonusFeat: true
	},
	"Rapid Shot": {
		canLearn: function(characterInfo){
			return (characterInfo.dexterity >= 13 && characterInfo.featsKnown.includes("Point Blank Shot"))
		},
		commonSenseCheck: function(characterInfo){
			return true
		},
		hasSubfeats: false,
		uponLearning: function (characterInfo) {
			return;
		},
		determineWeight: function(characterInfo){
			let weight = 7
			let weaponFocus = "Weapon Focus ("
			for (var i = 0; i < characterInfo.featsKnown.length; i++){
				if (characterInfo.featsKnown[i].startsWith("Weapon Focus") && weaponData[characterInfo.featsKnown[i].substring(weaponFocus.length, characterInfo.featsKnown[i].length - 1)].subtype === "Ranged Weapon"){
					weight += 2
				}
			}
			if (characterInfo.featsKnown.includes("Precise Shot")){
				weight += 2
			}
			weight += calculateModifier(characterInfo.dexterity)
			if (classData[characterInfo.class].baseAttackBonus === "Good"){
				weight += 2
			}
			else if (classData[characterInfo].baseAttackBonus === "Poor"){
				weight += 2
			}
			return weight
		},
		fighterBonusFeat: true,
		stacking: false
	},
	"Ride-By Attack": {
		canLearn: function(characterInfo){
			return (characterInfo.skillRanks["Ride"] && characterInfo.skillRanks["Ride"] >= 1 && characterInfo. featsKnown.includes("Mounted Combat"))
		},
		commonSenseCheck: function(characterInfo) {
			return true
		},
		hasSubfeats: false,
		uponLearning: function(characterInfo){
			return;
		},
		determineWeight: function(characterInfo){
			return Math.max(7 + Math.floor(calculateSkillMod(characterInfo, "Ride")/2), 1)
		},
		fighterBonusFeat: true
	},
	"Run": {
		canLearn: function (characterInfo) {
			return true
		},
		commonSenseCheck: function (characterInfo) {
			return true
		},
		hasSubfeats: false,
		uponLearning: function(characterInfo){
			return
		},
		determineWeight: function(characterInfo){
			let weight = 4
			if (raceData[characterInfo.race].baseLandSpeed === 20){
				weight -= 2
			}
			if (characterInfo.classSkills.includes("Jump")){
				weight += 1
			}
			weight += Math.floor(calculateSkillMod(characterInfo, "Jump")/2)
			return Math.max(weight, 1)
		},
		fighterBonusFeat: false,
		stacking: false
	},
	"Scribe Scroll": {
		canLearn: function(characterInfo){
			return (classData[characterInfo.class].fullCaster)
		},
		commonSenseCheck: function (characterInfo) {
			return true
		},
		hasSubfeats: false,
		uponLearning: function (characterInfo) {
			return
		},
		determineWeight: function(characterInfo){
			return 7
		},
		fighterBonusFeat: false,
		stacking: false
	},
	"Self-Sufficient": {
		canLearn: function(characterInfo){
			return true
		},
		commonSenseCheck: function(characterInfo){
			return true
		},
		hasSubfeats: false,
		uponLearning: function(characterInfo){
			grantSkillBonus(characterInfo, "Heal", 2)
			grantSkillBonus(characterInfo, "Survival", 2)
		},
		determineWeight: function(characterInfo){
			let weight = 3
			if (characterInfo.classSkills.includes("Heal")){
				weight++
			}
			if (characterInfo.classSkills.includes("Survival")){
				weight++
			}
			weight += Math.floor((calculateSkillMod(characterInfo, "Heal") + calculateSkillMod(characterInfo, "Survival"))/2)
			return Math.max(weight, 1)
		},
		fighterBonusFeat: false,
		stacking: false
	},
	"Shield Proficiency": {
		canLearn: function (characterInfo) {
			return (!characterInfo.armorProficiencies.shields)
		},
		commonSenseCheck: function(characterInfo){
			return true
		},
		hasSubfeats: false,
		uponLearning: function(characterInfo){
			characterInfo.armorProficiencies.shields = true
		},
		determineWeight: function(characterInfo){
			let weight = 5
			if (classData[characterInfo.class].fullCaster && classData[characterInfo.class].castingType === "Arcane"){
				weight -= 2
			}
			if (characterInfo.features.includes("AC Bonus") && calculateModifier(characterInfo.wisdom) >= 1){
				weight -= calculateModifier(characterInfo.wisdom) * -1
			}
			return Math.max(weight, 1)
		},
		fighterBonusFeat: false,
		stacking: false
	},
	"Silent Spell": {
		canLearn: function(characterInfo){
			return true
		},
		commonSenseCheck: function(characterInfo){
			for (var property in characterInfo.spells){
				for (var i = 0; i < characterInfo.spells[property].length - 1; i++){
					if (characterInfo.spells[property][i] === null){
						continue
					}
					for (var j = 0; j < characterInfo.spells[property][i].length; j++)
					if (spellData[characterInfo.spells[characterInfo.class][i][j]].verbalComponent){
						return true
					}
				}
			}
			return false
		},
		hasSubfeats: false,
		uponLearning: function(characterInfo){
			return
		},
		determineWeight: function(characterInfo){
			let count = 0
			for (var property in characterInfo.spells){
				for (var i = 0; i < characterInfo.spells[property].length - 1; i++){
					if (characterInfo.spells[property][i] === null){
						continue
					}
					for (var j = 0; j < characterInfo.spells[property][i].length; j++)
					if (spellData[characterInfo.spells[characterInfo.class][i][j]].verbalComponent){
						count++
					}
				}
			}
			if (count === 0){
				return 1
			}
			return 5 + Math.floor(count/3)

		},
		fighterBonusFeat: false,
		stacking: false
	},
	"Simple Weapon Proficiency": {
		canLearn: function(characterInfo){
			return (!characterInfo.weaponProficiencies.allSimple)
		},
		commonSenseCheck: function (characterInfo) {
			return true
		},
		hasSubfeats: false,
		uponLearning: function(characterInfo) {
			let weaponProficienciesArray = Object.keys(characterInfo.weaponProficiencies)
			for (var i = 0; i < weaponProficienciesArray.length; i++){
				if (weaponData[weaponProficienciesArray[i]] && weaponData[weaponProficienciesArray[i]].proficiencyType === "Simple"){
					delete characterInfo.weaponProficiencies[weaponProficienciesArray[i]]
				}
			}
			characterInfo.weaponProficiencies.allSimple = true
		},
		fighterBonusFeat: false,
		determineWeight: function(characterInfo){
			let weight = 5
			if (classData[characterInfo.class].baseAttackBonus === "Good"){
				weight += 2
			}
			else if (classData[characterInfo.class].baseAttackBonus === "Poor"){
				weight -= 2
			}
			weight += Math.floor((calculateModifier(characterInfo.strength) + calculateModifier(characterInfo.dexterity))/2)
			return weight
		},
		stacking: false
	},
	"Skill Focus": {
		canLearn: function(characterInfo){
			return true
		},
		commonSenseCheck: function(characterInfo){
			return true
		},
		hasSubfeats: true,
		generateSubfeats: function(characterInfo){
			let array = []
			for (var property in skillData){
				if (
					(!document.getElementById("basicfiltering").checked || skillData[property].allowedUntrained || characterInfo.skillRanks[property] >= 1)
					 && property !== "Speak Languages" &&
					 (property !== "Forgery" || !characterInfo.features.includes("Illiteracy") || !document.getElementById("basicfiltering").checked)){
					array.push(property)
				}
			}
			return array
		},
		determineWeight: function(characterInfo){
			let weight = 3
			weight += Math.min(classData[characterInfo.class].skillPoints + calculateModifier(characterInfo.intelligence), 1)
			if (characterInfo.race === "Human"){
				weight++
			}
			return weight
		},
		determineSubfeatWeight: function(characterInfo, subfeat){
			let weight = 5
			if (skillData[subfeat].hasSubskills){
				let value = 0
				for (var i = 0; i < skillData[subfeat].subskills.length; i++){
					value += calculateSkillRanksAndBunuses(characterInfo, subfeat, skillData[subfeat].subskills[i])
				}
				value = Math.floor(value/2)
				weight += value + calculateModifier(skillData[subfeat].attribute.toLowerCase())
				if (subfeat === "Craft" && characterInfo.race === "Dwarf"){
					weight += 2
				}
				if (subfeat === "Perform" && characterInfo.class === "Bard"){
					weight += 5
				}
			}
			else {
				weight += calculateSkillMod(characterInfo, subfeat)
				if (characterInfo.features.includes("Illiteracy") && subfeat === "Forgery" && document.getElementById("basicfiltering").checked){
					return 0
				}
				else if (characterInfo.features.includes("Illiteracy") && subfeat === "Forgery"){
					return 1
				}
				if (characterInfo.race === "Dwarf" && subfeat === "Appraise"){
					weight += 2
				}
				if (characterInfo.featsKnown.includes("Improved Feint") && subfeat === "Bluff"){
					weight += 4
				}
				if (classData[characterInfo.class].fullCaster && subfeat === "Concentration"){
					weight += 2
				}
				else if (!classData[characterInfo.class].halfCaster && subfeat === "Concentration"){
					weight -= 3
				}
				if  (characterInfo.class === "Rogue" && subfeat === "Disable Device"){
					weight += 3
				}
				if (characterInfo.class === "Druid" && subfeat === "Handle Animal"){
					weight += 4
				}
				if (characterInfo.class === "Ranger" && subfeat === "Handle Animal"){
					weight += 2
				}
				if (raceData[characterInfo.race].size === "Small" && subfeat === "Hide"){
					weight += 4
				}
				if (subfeat.startsWith("Knowledge") && subfeat !== "Knowledge (Nature)" && characterInfo.features.includes("Illiteracy")){
					weight -= 2
				}
				if (characterInfo.class === "Bard" && subfeat === "Knowledge (Arcane)"){
					weight += 2
				}
				if ((characterInfo.class === "Wizard" || characterInfo.class === "Sorcerer") && subfeat == "Knowledge (Arcane)"){
					weight += 3
				}
				if (characterInfo.class === "Druid" && subfeat === "Knowledge (Nature)"){
					weight += 3
				}
				else if (characterInfo.class === "Ranger" && subfeat === "Knowledge (Nature)"){
					weight += 1
				}
				if (characterInfo.class === "Cleric" && subfeat === "Knowledge (Religion)"){
					weight += 3
				}
				if (characterInfo.class === "Paladin" && subfeat === "Knowledge (Religion)"){
					weight += 1
				}
				if (characterInfo.class === "Ranger" && subfeat === "Listen"){
					weight += 1
				}
				if (characterInfo.class === "Barbarian" && ((skillData[subfeat].attribute === "Charisma" && subfeat !== "Intimidate") || (skillData[subfeat].attribute === "Dexterity" && (subfeat !== "Balance" && subfeat !== "Escape Artist" && subfeat !== "Ride"))|| skillData[subfeat].attribute === "Intelligence" || subfeat === "Concentration")){
					weight -= 1
				}
				if (characterInfo.class === "Rogue" && subfeat === "Search"){
					weight += 4
				}
				if (characterInfo.class === "Ranger" && subfeat === "Sense Motive"){
					weight +=  1
				}
				if (characterInfo.class === "Wizard" && subfeat === "Spellcraft"){
					weight += 4
				}
				else if (classData[characterInfo.class].fullCaster && subfeat === "Spellcraft"){
					weight += 2
				}
				if (characterInfo.class === "Ranger" && subfeat === "Spot"){
					weight += 1
				}
				if (characterInfo.class === "Ranger" && subfeat === "Survival"){
					weight += 5
				}
				return weight
			}
			if (characterInfo.classSkills.includes(subfeat)){
				weight *= document.getElementById("classSkillWeight").value
			}
			else {
				weight *= document.getElementById("crossClassSkillWeight").value
			}
		},
		uponLearning: function(characterInfo, subfeat){
			if (skillData[subfeat].hasSubskills){
				let subskillArray = []
				if (document.getElementById("weighfeats").checked){
					for (var i = 0; skillData[subfeat].subskills.length; i++){
						let weight = 5;
						weight += calculateSkillRanksAndBunuses(characterInfo, subfeat, skillData[subfeat].subskills[i])
						if (subfeat === "Craft" && characterInfo.race === "Dwarf" && (skillData[subfeat].subskills[i] === "Armorsmithing" || skillData[subfeat].subskills[i] === "Blacksmithing" || skillData[subfeat].subskills === "Locksmithing" || skillData[subfeat].subskills === "Stonemasonry" || skillData[subfeat].subskills === "Weaponsmithing")){
							weight += 2
						}
						else if (subfeat === "Craft" && characterInfo.race === "Dwarf" && skillData[characterInfo].subskills[i] === "Sculpting"){
							weight += 1
						}
						if (subfeat === "Perform" && characterInfo.class === "Bard" && (skillData[subfeat].subskills[i] === "Keyboard Instruments" || skillData[subfeat].subskills[i] === "Percussion Instruments" || skillData[subfeat].subskills[i] === "String Instruments" || skillData[subfeat].subskills[i] === "Wind Instruments" || skillData[subfeat].subskills[i] === "Sing")){
							weight += 5
						}
						if (subfeat === "Profession" && characterInfo.race === "Dwarf" && skillData[subfeat].subskills[i] === "Miner"){
							weight += 5 
						}
						if (subfeat === "Profession" && characterInfo.class === "Ranger" && skillData[subfeat].subskills[i] === "Hunter"){
							weight += 3
						}
						if (subfeat === "Profession" && characterInfo.features.includes("Illiteracy") && skillData[subfeat].subskills[i] === "Scribe"){
							weight = 0
						}
						if (subfeat === "Craft" && skillData[subfeat].subskills[i] === "Alchemy" && document.getElementById("basicfiltering".checked) && classData[characterInfo.class].fullCaster){
							weight = 0
						}
						if (characterInfo.featsKnown.includes("Skill Focus (" + subfeat + " (" + skillData[subfeat].subskills[i] + "))")){
							weight = 0
						}
						for (var j = 0; j < weight; j++){
							subsskillArray.push(weight)
						}
					}
				}
				else {
					for (var i = 0; i < skillData[subfeat].subskills.length; i++){
						if (!characterInfo.featsKnown.includes("Skill Focus (" + subfeat + " (" + skillData[subfeat].subskills[i] +"))") && (!document.getElementById("basicfiltering").checked || skillData[subfeat].allowedUntrained || characterInfo.skillRanks[subfeat + " (" + skillData[subfeat].subskills[i] + ")"] >= 1) && (!document.getElementById("basicfiltering").checked || subfeat !== "Craft" || skillData[subfeat].subskills !== "Alchemy" || classData[characterInfo.class].fullCaster) && (!characterInfo.features.includes("Illiteracy") || !document.getElementById("basicfiltering") || subfeat !== "Profession" || skillData[subfeat].subskills[i] !== "Scribe")){
							subskillArray.push(skillData[subfeat].subskills[i])
						}
					}
				}
				let subskillRolled = subskillArray[Math.floor(Math.random() * subskillArray.length)]
				characterInfo.featsKnown[characterInfo.featsKnown.indexOf("Skill Focus (" + subfeat + ")")] = "Skill Focus (" + subfeat + " (" + subskillRolled + "))"
				grantSkillBonus(characterInfo, subfeat + " (" + subskillRolled + ")", 3)
			}
			else {
				grantSkillBonus(characterInfo, subfeat, 3)
			}
		},
		fighterBonusFeat: false,
		stacking: false
	},
	"Snatch Arrows": {
		canLearn: function(characterInfo){
			return (characterInfo.dexterity >= 15 && (characterInfo.featsKnown.includes("Improved Unarmed Strike") || characterInfo.features.includes("Unarmed Strike")) && characterInfo.featsKnown.includes("Snatch Arrows"))
		},
		commonSenseCheck: function(characterInfo) {
			return true;
		},
		uponLearning: function(characterInfo){
			return;
		},
		determineWeight: function(characterInfo){
			let weight = 8;
			if (classData[characterInfo.class].baseAttackBonus === "Good"){
				weight += 2
			}
			else if (classData[characterInfo.class].baseAttackBonus === "Poor"){
				weight -= 2
			}
			return weight
		},
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: true
	},
	"Spell Focus": {
		canLearn: function(characterInfo){
			return true
		},
		commonSenseCheck: function(characterInfo){
			for (var i = 0; i <characterInfo.rawSpellsKnown.length; i++){
				if (spellData[characterInfo.rawSpellsKnown[i]].hasSavingThrow && spellData[characterInfo.rawSpellsKnown[i]].college !== "Universal"){
					return true
				}
			}
			return false 
		},
		uponLearning: function(characterInfo){
			return
		},
		hasSubfeats: true,
		generateSubfeats: function(characterInfo){
			if (document.getElementById("basicfiltering").checked){
				let array = []
				for (var i = 0; i < characterInfo.rawSpellsKnown.length; i++){
					if (spellData[characterInfo.rawSpellsKnown[i]].hasSavingThrow && !array.includes(spellData[characterInfo.rawSpellsKnown[i]].college) && spellData[characterInfo.rawSpellsKnown[i]].college !== "Universal"){
						array.push(spellData[characterInfo.rawSpellsKnown[i]].college)
					}
				}
				return array
			}
			else {
				return ["Abjuration", "Conjuration", "Divination", "Enchantment", "Evocation", "Illusion", "Necromancy", "Transmutation"]
			}
		},
		determineWeight: function(characterInfo){
			let count = 0
			for (var i = 0; i < characterInfo.rawSpellsKnown.length; i++){
				if (spellData[characterInfo.rawSpellsKnown[i]].hasSavingThrow &&  spellData[characterInfo.rawSpellsKnown[i]].college !== "Universal"){
					count++
				}
			}
			return count
		},
		determineSubfeatWeight: function(characterInfo, subfeat){
			let weight = 5
			for (var i = 0; i < characterInfo.rawSpellsKnown.length; i++){
				if (spellData[characterInfo.rawSpellsKnown[i]].hasSavingThrow &&  spellData[characterInfo.rawSpellsKnown[i]].college === subfeat){
					weight++
				}
			}
			return weight
		},
		uponLearning: function(characterInfo){
			return;
		},
		stacking: false,
		fighterBonusFeat: false
	},
	"Spell Mastery": {
		canLearn: function(characterInfo){
			return characterInfo.class === "Wizard"
		},
		commonSenseCheck: function(characterInfo){
			return characterInfo.intelligence >= 12
		},
		uponLearning: function(characterInfo){
			if (!characterInfo.wizardSpellMasteryArray){
				characterInfo.wizardSpellMasteryArray = []
			}
			let wizardSpellsKnown = []
			for (var i = 0; i < characterInfo.spells["Wizard"].length; i++){
				for (var j = 0; j < characterInfo.spells["Wizard"][i].length; j++){
					if (!document.getElementById("basicfiltering") || characterInfo.spells["Wizard"][i][j] !== "Read Magic"){
						wizardSpellsKnown.push(characterInfo.spells["Wizard"][i][j])
					}
				}
			}
			for (var i = 0; i < calculateModifier(characterInfo.intelligence); i++){
				characterInfo.wizardSpellMasteryArray.push(wizardSpellsKnown[Math.floor(Math.random() * wizardSpellsKnown.length)])
			}
		},
		determineWeight: function(characterInfo){
			if (characterInfo.intelligence < 12){
				return 1
			}
			return 5 + calculateModifier(characterInfo.intelligence)
		},
		hasSubfeats: false,
		stacking: true,
		fighterBonusFeat: false
	},
	"Spell Penetration": {
		canLearn: function(characterInfo){
			return true
		},
		commonSenseCheck: function(characterInfo){
			for (var i = 0; i < characterInfo.rawSpellsKnown.length; i++){
				if (spellData[characterInfo.rawSpellsKnown[i]].spellResistance){
					return true
				}
			}
			return false
		},
		uponLearning: function(characterInfo){
			return
		},
		determineWeight: function(characterInfo){
			let count = 0
			for (var i = 0; i < characterInfo.rawSpellsKnown.length; i++){
				if (spellData[characterInfo.rawSpellsKnown[i]].spellResistance){
					count++
				}
			}
			if (count === 0){
				return 1
			}
			return 5 + Math.floor(count/3)
		},
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: false
	},
	"Spirited Charge": {
		canLearn: function(characterInfo){
			return (characterInfo.skillRanks["Ride"] && characterInfo.skillRanks["Ride"] >= 1 && characterInfo.featsKnown.includes("Mounted Combat") && characterInfo.featsKnown.includes("Ride-By Attack"))
		},
		commonSenseCheck: function(characterInfo) {
			return true
		},
		hasSubfeats: false,
		uponLearning: function(characterInfo){
			return
		},
		stacking: false,
		determineWeight: function(characterInfo){
			let weight = 9
			if (classData[characterInfo.class].baseAttackBonus === "Good"){
				weight += 2
			}
			else if (classData[characterInfo.class].baseAttackBonus === "Poor"){
				weight -= 2
			}
			return weight 
		},
		fighterBonusFeat: true
	},
	"Stealthy": {
		canLearn: function(characterInfo){
			return true
		},
		commonSenseCheck: function(characterInfo){
			return true
		},
		hasSubfeats: false,
		uponLearning: function(characterInfo){
			grantSkillBonus(characterInfo, "Hide", 2)
			grantSkillBonus(characterInfo, "Move Silently", 2)
		},
		determineWeight: function(characterInfo){
			let weight = 3;
			if (characterInfo.classSkills.includes("Hide")){
				weight++;
			}
			if (characterInfo.classSkills.includes("Move Silently")){
				weight++;
			}
			weight += Math.floor((calculateSkillMod(characterInfo, "Hide") + calculateModifier(characterInfo, "Move Silently"))/2)
			return Math.max(weight, 1)
		},
		stacking: false,
		fighterBonusFeat: false
	},
	"Still Spell": {
		canLearn: function(characterInfo){
			return true
		},
		commonSenseCheck: function(characterInfo){
			for (var property in characterInfo.spells){
				for (var i = 0; i < characterInfo.spells[property].length - 1; i++){
					if (characterInfo.spells[property][i] === null){
						continue
					}
					for (var j = 0; j < characterInfo.spells[property][i][j]; j++){
						if (spellData[characterInfo.spells[property][i][j]].somaticComponent){
							return true
						}
					}
				}
			}
			return false
		},
		hasSubfeats: false,
		uponLearning: function(characterInfo) {
			return
		},
		determineWeight: function (characterInfo) {
			let count = 0
			for (var i = 0; i < characterInfo.spells[characterInfo.class][0].length - 1; i++){
				if (spellData[characterInfo.spells[characterInfo.class][0][i]].somaticComponent){
					return true
				}
			}
			return false
		},
		stacking: false,
		fighterBonusFeat: false 
	},
	"Toughness": {
		canLearn: function(characterInfo){
			return true
		},
		commonSenseCheck: function(characterInfo) {
			return true
		},
		hasSubfeats: false,
		uponLearning: function(characterInfo){
			characterInfo.hitPoints += 3
		},
		determineWeight: function(characterInfo){
			return (9 - Math.floor(classData[characterInfo.class].hitDie)) + calculateModifier(characterInfo.constitution)
		},
		stacking: true,
		fighterBonusFeat: false
	},
	"Tower Shield Proficiency": {
		canLearn: function(characterInfo){
			return (characterInfo.armorProficiencies.shields && !characterInfo.armorProficiencies.towerShields)
		},
		commonSenseCheck: function (characterInfo) {
			return (characterInfo.class !== "Druid")
		},
		hasSubfeats: false,
		uponLearning: function (characterInfo) {
			characterInfo.armorProficiencies.towerShields = true
		},
		determineWeight: function(characterInfo){
			if (characterInfo.class === "Druid"){
				return 1
			}
			let weight = 7
			if (calculateModifier(characterInfo.dexterity) > 2){
				weight -= (calculateModifier(characterInfo.dexterity) - 2) * 2
			}
			if (classData[characterInfo.class].fullCaster && classData[characterInfo.class].castingType === "Arcane"){
				weight -= 3
			}
			return Math.max(weight, 1)
		},
		stacking: false,
		fighterBonusFeat: false
	},
	"Track": {
		canLearn: function(characterInfo){
			return true
		},
		commonSenseCheck: function (characterInfo) {
			return true
		},
		hasSubfeats: false,
		uponLearning: function (characterInfo) {
			return
		},
		determineWeight: function(characterInfo){
			let weight = 5;
			weight += calculateSkillMod(characterInfo, "Survival") * 2
			return Math.max(weight, 1)
		},
		stacking: false,
		fighterBonusFeat: false
	},
	"Trample": {
		canLearn: function(characterInfo){
			return (characterInfo.skillRanks["Ride"] && characterInfo.skillRanks["Ride"] >= 1 && characterInfo.featsKnown.includes("Mounted Combat"))
		},
		commonSenseCheck: function(characterInfo){
			return true
		},
		hasSubfeats: false,
		uponLearning: function(characterInfo){
			return
		},
		determineWeight: function(characterInfo){
			let weight = 8
			weight += calculateSkillMod(characterInfo, "Ride")
			return weight
		},
		stacking: false,
		fighterBonusFeat: true
	},
	"Two-Weapon Defense": {
		canLearn: function (characterInfo) {
			return (characterInfo.dexterity >= 15 && characterInfo.featsKnown.includes("Two-Weapon Fighting"))
		},
		commonSenseCheck: function (characterInfo) {
			return true
		},
		hasSubfeats: false,
		uponLearning: function (characterInfo) {
			return
		},
		determineWeight: function(characterInfo){
			let weight = 7
			weight += calculateModifier(characterInfo.dexterity)
			if (classData[characterInfo.class].baseAttackBonus === "Good"){
				weight += 2
			}
			else if (classData[characterInfo.class].baseAttackBonus === "Poor"){
				weight -= 2
			}
			return weight
		},
		stacking: false,
		fighterBonusFeat: true
	},
	"Two-Weapon Fighting": {
		canLearn: function (characterInfo) {
			return (characterInfo.dexterity >= 15)
		},
		commonSenseCheck: function(characterInfo) {
			return true
		},
		hasSubfeats: false,
		uponLearning: function (characterInfo) {
			return
		},
		determineWeight: function(characterInfo){
			let	weight = 5
			if (classData[characterInfo.class].baseAttackBonus === "Good"){
				weight += 2
			}
			else if (classData[characterInfo.class].baseAttackBonus === "Poor"){
				weight -= 2
			}
		},
		stacking: false,
		fighterBonusFeat: true
	},
	"Weapon Finesse": {
		canLearn: function(characterInfo) {
			return (characterInfo.baseAttackBonus >= 1)
		},
		commonSenseCheck: function (characterInfo) {
			return (calculateModifier(characterInfo.dexterity) > calculateModifier(characterInfo.strength))
		},
		hasSubfeats: false,
		determineWeight: function(characterInfo){
			if (calculateModifier(characterInfo.strength) <= calculateModifier(characterInfo.dexterity)){
				return 1
			}
			let weight = 5
			if (classData[characterInfo.class].baseAttackBonus === "Good"){
				weight += 2
			}
			else if (classData[characterInfo.class].baseAttackBonus === "Poor"){
				weight -= 2
			}
			return weight
		},
		uponLearning: function(characterInfo) {
			return true
		}
	},
	"Weapon Focus": {
		canLearn: function(characterInfo){
			return (characterInfo.baseAttackBonus >= 1)
		},
		commonSenseCheck: function(characterInfo){
			return true
		},
		hasSubfeats: true,
		generateSubfeats: function (characterInfo) {
			let array = [];
			for (var property in weaponData){
				if (canUseWeapon(characterInfo, property)){
					array.push(property)
				}
			}
			array.push("Grapple")
			return array
		},
		determineWeight: function(characterInfo){
			let weight = 5
			if (classData[characterInfo.class].baseAttackBonus === "Good"){
				weight += 2
			}
			else if (classData[characterInfo.class].baseAttackBonus === "Poor"){
				weight -= 2
			}
			return weight
		},
		determineSubfeatWeight: function(characterInfo, subfeat){
			let weight = 5
			if ((characterInfo.featsKnown.includes("Weapon Finesse") && characterInfo.dexterity > characterInfo.strength && ((weaponData[subfeat] && weaponData[subfeat].subtype === "Unarmed Attacks") || (weaponData[subfeat].subtype && weaponData[subfeat].subtype === "Light Melee Weapon") || subtype === "Rapier" || subtype === "Whip" || subtype === "Spiked Chain")) || (weaponData[subfeat] && weaponData[subfeat].subtype === "Ranged Weapon")){
				weight += calculateModifier(characterInfo.dexterity)
			}
			else if (subfeat !== "Ray") {
				weight += calculateModifier(characterInfo.strength)
			}
			if (characterInfo.featsKnown.includes("Cleave") && weaponData[subfeat].subtype === "Ranged Weapon"){
				weight -= 2
			}

			if (characterInfo.featsKnown.includes("Improved Unarmed Strike") && subfeat === "Unarmed Strike"){
				weight += 3
			}
			if (characterInfo.featsKnown.includes("Point Blank Shot") && weaponData[subfeat].subtype === "Ranged Weapon"){
				weight += 2
			}
			return weight
		},
		uponLearning: function(characterInfo, subfeat) {
			return;
		},
		fighterBonusFeat: true
	},
	"Widen Spell": {
		canLearn: function(characterInfo) {
			return true
		},
		commonSenseCheck: function (characterInfo) {
			for (var property in characterInfo.spells){
				for (var i = 0; i < characterInfo.spells.length - 3 ; i++){
					for (var j = 0; j < characterInfo.spellls[i].length; j++){
						if (spellData[characterInfo.spells[i][j]].canBeWiden){
							return true
						}
					}
				}
			}
			return false
		},
		hasSubfeats: false,
		uponLearning: function (characterInfo) {
			return
		},
		determineWeight: function(characterInfo){
			let count = 0
			for (var property in characterInfo.spells){
				for (var i = 0; i < characterInfo.spells.length - 3 ; i++){
					for (var j = 0; j < characterInfo.spellls[i].length; j++){
						if (spellData[characterInfo.spells[i][j]].canBeWiden){
							count++
						}
					}
				}
			}
			if (count === 0){
				return 1
			}
			return 5 + count
		},
		fighterBonusFeat: false
	}
}