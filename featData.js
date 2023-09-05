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
		uponLearning: function(characterInfo){

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
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: true
	},
	"Combat Casting": {
		canLearn: function (characterInfo) {
			return true
		},
		commonSenseCheck: function(characterInfo){
			return (characterInfo.rawSpellsKnown.length > 0)
		},
		uponLearning: function (characterInfo) {
			return;
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
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: true
	},
	"Combat Reflexes": {
		canLearn: function(characterInfo){
			return true
		},
		commonSenseCheck: function(characterInfo){
			return (calculateModifer(characterInfo.dexterity) >= 1)
		},
		uponLearning: function(characterInfo){
			return;
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
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: false
	},
	"Deflect Arrows": {
		canLearn: function(characterInfo){
			return (characterInfo.dexterity >= 13 && characterInfo.featsKnown.includes("Improved Unarmed Strike"))
		},
		commonSenseCheck: function(characterInfo) {
			return true;
		},
		uponLearning: function(characterInfo){
			return;
		},
		hasSubfeats: false,
		stacking: false,
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
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: true
	},
	"Empower Spell": {
		canLearn: function (characterInfo){
			return true;
		},
		commonSenseCheck: function (characterInfo) {
			return (characterInfo.rawSpellsKnown.length > 0 && calculateMaximumSpellLevel(characterInfo) >= 2)
		},
		uponLearning: function(characterInfo){
			return;
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
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: false
	},
	"Enlarge Spell": {
		canLearn: function(characterInfo){
			return true
		},
		commonSenseCheck: function(characterInfo){
			return (characterInfo.rawSpellsKnown.length > 0 && calculateMaximumSpellLevel(characterInfo) >= 1)
		},
		uponLearning: function(characterInfo){
			return
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
			return (characterInfo.rawSpellsKnown.length > 0)
		},
		hasSubfeats: false,
		stacking: false,
		fighterBonusFeat: false,
		uponLearning: function(characterInfo){
			return
		}
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
		stacking: false,
		fighterBonusFeat: true
	},
	"Extend Spell": {
		canLearn: function (characterInfo){
			return true;
		},
		commonSenseCheck: function (characterInfo) {
			return (characterInfo.rawSpellsKnown.length > 0 && calculateMaximumSpellLevel(characterInfo) >= 1)
		},
		uponLearning: function(characterInfo){
			return;
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
				college = characterInfo.featsKnown[i].substring(13, characterInfo.featsKnown[i].length - 1)
			}
			for (var i = 0; i < characterInfo.rawSpellsKnown.length; i++){
				if (spellData[characterInfo.rawSpellsKnown[i]].college === college){
					return true;
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
							if (spellData[characterInfo.rawSpellsKnown[i]].college === college){
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
		stacking: false,
		fighterBonusFeat: false
	},
	"Greater Spell Penetration": {
		canLearn: function(characterInfo){
			return characterInfo.featsKnown.includes("Spell Penetration")
		},
		commonSenseCheck: function (characterInfo) {
			return (characterInfo.rawSpellsKnown.length > 0)
		},
		hasSubfeats: false,
		uponLearning: function (characterInfo) {
			return;
		},
		stacking: false,
		fighterBonusFeat: false
	},
	"Heighten Spell": {
		canLearn: function(characterInfo){
			return true
		},
		commonSenseCheck: function(characterInfo){
			return (characterInfo.rawSpellsKnown.length > 0)
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
		stacking: false,
		fighterBonusFeat: true
	},
	"Improved Counterspell": {
		canLearn: function(characterInfo){
			return true
		},
		commonSenseCheck: function(characterInfo){
			return (characterInfo.rawSpellsKnown.length > 0)
		},
		hasSubfeats: false,
		uponLearning: function(characterInfo){
			return;
		},
		stacking: false,
		fighterBonusFeat: false
	},
	"Improved Disarm": {
		canLearn: function(characterInfo){
			return (characterInfo.intelligence > 13 && characterInfo.featsKnown.includes("Combat Expertise"))
		},
		commonSenseCheck: function(characterInfo){
			return true
		},
		hasSubfeats: false,
		uponLearning: function(characterInfo){
			return
		},
		stacking: false,
		fighterBonusFeat: true
	},
	"Improved Feint": {
		canLearn: function(characterInfo){
			return (characterInfo.intelligence > 13 && characterInfo.featsKnown.includes("Improved Feint"))
		},
		commonSenseCheck: function(characterInfo){
			return true
		},
		hasSubfeats: false,
		uponLearning: function (characterInfo) {
			return
		},
		stacking: false,
		fighterBonusFeat: true
	},
	"Improved Grapple": {
		canLearn: function(characterInfo) {
			return (characterInfo.dexterity > 13 && characterInfo.featsKnown.includes("Improved Unarmed Strike"))
		},
		commonSenseCheck: function(characterInfo){
			return true
		},
		hasSubfeats: false,
		uponLearning: function(characterInfo){
			return
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
		fighterBonusFeat: false
	},
	"Maximize Spell": {
		canLearn:function(characterInfo){
			return true
		},
		commonSenseCheck: function(characterInfo){
			return false
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
		fighterBonusFeat: true
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
		fighterBonusFeat: true
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
		fighterBonusFeat: false
	},
	"Nimble Fingers": {
		canLearn: function(characterInfo){
			return true
		},
		commonSenseCheck: function(characterInfo){
			return (!document.getElementById("basicfiltering").checked || characterInfo.skillRanks["Disabled"] >= 1)
		},
		hasSubfeats: false,
		uponLearning: function (characterInfo) {
			grantSkillBonus(characterInfo, "Disable Device", 2)
			grantSkillBonus(characterInfo, "Open Locks", 2)
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
		fighterBonusFeat: true
	},
	"Quicken Spell": {
		canLearn: function(characterInfo){
			return true
		},
		commonSenseCheck: function(characterInfo){
			return false
		},
		hasSubfeats: false,
		uponLearning: function(characterInfo){
			return
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
		uponLearning: function (characterInfo, subfeat) {
			return
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
			characterInfo.armorProficiencies.shield = true
		},
		fighterBonusFeat: false,
		stacking: false
	},
	"Silent Spell": {
		canLearn: function(characterInfo){
			return true
		},
		commonSenseCheck: function(characterInfo){
			if (calculateMaximumSpellLevel(characterInfo) < 1){
				return false
			}
			for (var i = 0; i < characterInfo.spells[characterInfo.class][0].length; i++){
				if (spellData[characterInfo.spells[characterInfo.class][0][i]].verbalComponent){
					return true
				}
			}
			return false
		},
		hasSubfeats: false,
		uponLearning: function(characterInfo){
			return
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
				if ((!document.getElementById("basicfiltering").checked || skillData[property].allowedUntrained || characterInfo.skillRanks[property] >= 1) && property !== "Speak Languages"){
					array.push(property)
				}
				else if (skillData[property].hasSubskills) {
					for (var i = 0; i < skillData[property].subskills.length; i++){
						if (characterInfo.skillRanks[property + " (" + skillData[property].subskills[i] + ")"] &&characterInfo.skillRanks[property + " (" + skillData[property].subskills[i] + ")"]  >= 1 ){
							array.push(property)
						}
					}
				}
			}
			return array
		},
		uponLearning: function(characterInfo, subfeat){
			if (skillData[subfeat].hasSubskills){
				let subskillArray = []
				for (var i = 0; i < skillData[subfeat].subskills.length; i++){
					if (!characterInfo.featsKnown.includes("Skill Focus (" + subfeat + " (" + skillData[subfeat].subskills[i] +"))") && (!document.getElementById("basicfiltering").checked || skillData[subfeat].allowedUntrained || characterInfo.skillRanks[subfeat + " (" + skillData[subfeat].subskills[i] + ")"] >= 1)){
						subskillArray.push(skillData[subfeat].subskills[i])
					}
				}
				let subskillRolled = subskillArray[Math.floor(Math.random() * subskillArray.length)]
				for (var i = 0; i < characterInfo.featsKnown.length; i++){
					if (characterInfo.featsKnown[i] === "Skill Focus (" + subfeat + ")"){
						characterInfo.featsKnown[i] = "Skill Focus (" + subfeat + " (" + subskillRolled + "))"
						break;
					}
				}
				grantSkillBonus(characterInfo, subfeat + " (" + subskillRolled + ")")
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
			return (characterInfo.dexterity >= 15 && characterInfo.featsKnown.includes("Improved Unarmed Strike") && characterInfo.featsKnown.includes("Snatch Arrows"))
		},
		commonSenseCheck: function(characterInfo) {
			return true;
		},
		uponLearning: function(characterInfo){
			return;
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
			return characterInfo.rawSpellsKnown.length > 0
		},
		uponLearning: function(characterInfo){
			return
		},
		hasSubfeats: true,
		generateSubfeats: function(characterInfo){
			if (document.getElementById("basicfiltering").checked){
				let array = []
				for (var i = 0; i < characterInfo.rawSpellsKnown.length; i++){
					if (!array.includes(spellData[characterInfo.rawSpellsKnown[i]].college) && spellData[characterInfo.rawSpellsKnown[i]].college !== "Universal"){
						array.push(spellData[characterInfo.rawSpellsKnown[i]].college)
					}
				}
				return array
			}
			else {
				return ["Abjuration", "Conjuration", "Divination", "Enchantment", "Evocation", "Illusion", "Necromancy", "Transmutation"]
			}
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
					if (characterInfo.spells["Wizard"][i][j] !== "Read Magic"){
						wizardSpellsKnown.push(characterInfo.spells["Wizard"][i][j])
					}
				}
			}
			for (var i = 0; i < calculateModifer(characterInfo.intelligence); i++){
				characterInfo.wizardSpellMasteryArray.push(wizardSpellsKnown[Math.floor(Math.random() * wizardSpellsKnown.length)])
			}
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
					break
				}
			}
			return false
		},
		uponLearning: function(characterInfo){
			return
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
		stacking: false,
		fighterBonusFeat: false
	},
	"Still Spell": {
		canLearn: function(characterInfo){
			return true
		},
		commonSenseCheck: function(characterInfo){
			if (calculateMaximumSpellLevel(characterInfo) < 1){
				return false
			}
			for (var i = 0; i < characterInfo.spells[characterInfo.class][0].length; i++){
				if (spellData[characterInfo.spells[characterInfo.class][0][i]].somaticComponent){
					return true
				}
			}
			return false
		},
		hasSubfeats: false,
		uponLearning: function(characterInfo) {
			return
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
		stacking: true,
		fighterBonusFeat: false
	},
	"Tower Shield Proficiency": {
		canLearn: function(characterInfo){
			return (characterInfo.armorProficiencies.shields && !characterInfo.armorProficiencies.towerShields)
		},
		commonSenseCheck: function (characterInfo) {
			return true
		},
		hasSubfeats: false,
		uponLearning: function (characterInfo) {
			characterInfo.armorProficiencies.towerShields = true
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
		stacking: false,
		fighterBonusFeat: false
	},
	"Trample": {
		canLearn: function(characterInfo){
			return (characterInfo.skillRanks["Ride"] && characterInfo.skillRanks["Ride"] >= 1 && characterInfo.featsKnown.includes("Mouonted Combat"))
		},
		commonSenseCheck: function(characterInfo){
			return true
		},
		hasSubfeats: false,
		uponLearning: function(characterInfo){
			return
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
		stacking: false,
		fighterBonusFeat: true
	},
	"Weapon Finesse": {
		canLearn: function(characterInfo) {
			return (characterInfo.baseAttackBonus >= 1)
		},
		commonSenseCheck: function (characterInfo) {
			return true
		},
		hasSubfeats: false,
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
			if (!array.includes("Unarmed Strike")){
				array.push("Unarmed Strike")
			}
			array.push("Grapple")

			return array
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
			return false
		},
		hasSubfeats: false,
		uponLearning: function (characterInfo) {
			return
		},
		fighterBonusFeat: false
	}
}