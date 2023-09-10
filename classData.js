	const classData = {
		"Barbarian": {
			hitDie: 12,
			skillPoints: 4,
			trainingAge: "Easy",
			fullCaster: false,
			halfCaster: false,
			classSkills: ["Climb", "Craft", "Handle Animal", "Intimidate", "Jump", "Listen", "Ride", "Survival", "Swim"],
			weaponProficiency: {
				allSimple: true,
				allMartial: true
			},
			armorProficiency: {
				lightArmor: true,
				mediumArmor: true,
				heavyArmor: false,
				shields: true,
				towerShields: false
			},
			baseAttackBonus: "Good",
			fortitudeSave: "Good",
			reflexSave: "Poor",
			willSave: "Poor",
			hasAlignmentRestrictions: true,
			attributeWeights: {
				strength: 16,
				dexterity: 6,
				constitution: 16,
				intelligence: 2,
				wisdom: 3,
				charisma:2
			},
			allowedAlignments: ["Neutral Good", "Chaotic Good", "Neutral", "Chaotic Neutral", "Neutral Evil", "Chaotic Evil"],
			assignClassFeatures: [
				null,
				function(characterInfo){
					characterInfo.features.push("Fast Movement")
					characterInfo.features.push("Rage 1/day")
					if (Math.floor(Math.random() * 100) < document.getElementById("LiterateBarbarians")){
						characterInfo.skillPoints -= 2
					}
					else {
						characterInfo.features.push("Illiteracy")
					}
				}
			],
			generateMoney:function(){
				return (Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) +Math.floor(Math.random() * 4) + 4) * 1000
			},
			determineRacialWeight: function(race){
				let weight = 5
				weight += raceData[race].attributeMods.Strength
				weight += raceData[race].attributeMods.Constitution
				if (raceData[race].favoredClass === "Barbarian"){
					weight += 5
				}
				else if (raceData[race].favoredClass === "Any"){
					weight += 2
				}
				return Math.max(weight, 1)
			}
		},
		"Bard": {
			hitDie: 6,
			skillPoints: 6,
			trainingAge: "Medium",
			fullCaster: true,
			castingType: "Arcane",
			spellsAlignmentRestricted: false,
			knowsAllSpells: false,
			castingAttribute: "Charisma",
			classSkills: ["Appraise", "Balance", "Bluff", "Climb", "Concentration", "Craft", "Decipher Script", "Diplomacy", 
			"Escape Artist", "Gather Information", "Hide", "Jump", "Knowledge (Arcana)", "Knowledge (Architecture and Engineering)", 
			"Knowledge (Dungeoneering)", "Knowledge (Geography)", "Knowledge (History)", "Knowledge (Local)", "Knowledge (Nature)",
			"Knowledge (Nobility and Royalty)", "Knowledge (Religion)", "Knowledge (The Planes)", "Listen", "Move Silently", "Perform",
			"Profession", "Speak Languages", "Spellcraft", "Swim", "Tumble", "Use Magic Device"],
			spellList: [
			["Dancing Lights", "Daze", "Detect Magic", "Flare", "Ghost Sound", "Know Direction", "Light", "Lullaby", "Mage Hand",
			"Mending", "Message", "Open/Close", "Prestidigitation", "Read Magic", "Resistance", "Summon Instrument"]
			],
			weaponProficiency: {
				allSimple: true,
				"Longsword": true,
				"Rapier": true,
				"Sap": true,
				"Short Sword": true,
				"Shortbow": true,
				"Whip": true
			},
			armorProficiency: {
				lightArmor: true,
				mediumArmor: false,
				heavyArmor: false,
				shields: true,
				towerShields: false
			},
			baseAttackBonus: "Average",
			fortitudeSave: "Poor",
			reflexSave: "Good",
			willSave: "Good",
			attributeWeights: {
				strength: 5,
				dexterity: 7,
				constitution: 7,
				intelligence: 7,
				wisdom: 3,
				charisma: 84
			},
			hasAlignmentRestrictions: true,
			allowedAlignments: ["Neutral Good", "Chaotic Good", "Neutral", "Chaotic Neutral", "Neutral Evil", "Chaotic Evil"],
			assignClassFeatures: [
				null,
				function(characterInfo){
					characterInfo.features.push("Bardic Knowledge")
					if (characterInfo.charisma >= 10){
						let potentionalSpells = []
						for (var i = 0; i < classData["Bard"].spellList[0].length; i++){
							potentionalSpells.push(classData["Bard"].spellList[0][i])
						}
						if (!characterInfo.spells){
							characterInfo.spells = {}
						}
						characterInfo.spells["Bard"] = []
						characterInfo.spells["Bard"].push([])
						for (var i = 0; i < 4; i++){
							let spellRolled = potentionalSpells.splice(Math.floor(Math.random() * potentionalSpells.length), 1)[0]
							characterInfo.spells["Bard"][0].push(spellRolled)
							characterInfo.rawSpellsKnown.push(spellRolled)
						}
					}
					if (document.getElementById("basicfiltering").checked && document.getElementById("maxlevel1skillranks").checked){
						characterInfo.skillRanks["Perform (" + skillData["Perform"].subskills[Math.floor(Math.random() * skillData["Perform"].subskills.length)] + ")"] = 4
						characterInfo.skillPoints -= 4
						characterInfo.features.push("Countersong")
						characterInfo.features.push("Fascinate")
						characterInfo.features.push("Inspire Courage +1")
					}
					else if (document.getElementById("basicfiltering").checked) {
						characterInfo.skillRanks["Perform (" + skillData["Perform"].subskills[Math.floor(Math.random() * skillData["Perform"].subskills.length)] + ")"] = 3
						characterInfo.skillPoints -= 3
						characterInfo.features.push("Countersong")
						characterInfo.features.push("Fascinate")
						characterInfo.features.push("Inspire Courage +1")
					}
				}
			],
			spellsPerDay: [
				null,
				[2, null, null, null, null, null, null]
			],
			generateMoney:function(){
				return (Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) +Math.floor(Math.random() * 4) + 4) * 1000 
			},
			determineRacialWeight: function(race){
				let weight = 5
				weight += raceData[race].attributeMods.Charisma
				weight += Math.floor(raceData[race].attributeMods.Intelligence/2)
				if (raceData[race].favoredClass === "Bard"){
					weight += 5
				}
				else if (raceData[race].favoredClass === "Any"){
					weight += 2
				}
				return Math.max(weight, 1)
			}
		},
		"Cleric": {
			hitDie: 8,
			skillPoints: 2,
			fullCaster: true,
			castingType: "Divine",
			trainingAge: "Hard",
			spellsAlignmentRestricted: true,
			knowsAllSpells: true,
			castingAttribute: "Wisdom",
			classSkills: ["Concentration", "Craft", "Diplomacy", "Heal", "Knowledge (Arcana)", "Knowledge (History)",
			"Knowledge (Religion)", "Knowledge (The Planes)", "Profession", "Spellcraft"],
			weaponProficiency: {
				allSimple: true
			},
			spellList: [["Create Water", "Cure Minor Wounds", "Detect Magic", "Detect Poison", "Guidance", "Inflict Minor Wounds", 
			"Light", "Mending", "Purify Food and Drink", "Read Magic", "Resistance", "Virtue"],
			["Bane", "Bless", "Bless Water", "Cause Fear", "Command", "Comprehend Languages", "Cure Light Wounds", "Curse Water",
			"Deathwatch", "Detect Chaos", "Detect Evil", "Detect Good", "Detect Law", "Detect Undead", "Divine Favor", "Doom",
			"Endure Elements", "Entropic Shield", "Hide from Undead", "Inflict Light Wounds", "Magic Stone", "Magic Weapon",
			"Obscuring Mist", "Protection from Chaos", "Protection from Evil", "Protection from Good", "Protection from Law", "Remove Fear",
			"Sanctuary", "Shield of Faith", "Summon Monster I"]],
			hasAlignmentRestrictions: false,
			armorProficiency: {
				lightArmor: true,
				mediumArmor: true,
				heavyArmor: true,
				shields: true,
				towerShields: false
			},
			baseAttackBonus: "Average",
			fortitudeSave: "Good",
			reflexSave: "Poor",
			willSave: "Good",
			attributeWeights: {
				strength: 6,
				dexterity: 2,
				constitution: 5,
				intelligence: 1,
				wisdom: 33,
				charisma: 8
			},
			assignClassFeatures: [
				null,
				function(characterInfo){
					characterInfo.clericDomains = [];
					characterInfo.godWorshiped = ""
					if (Math.floor(Math.random() * 100) < document.getElementById("godlessCleric")){
						characterInfo.godWorshiped = "None"
						let domainArray = Object.keys(domainData)
						characterInfo.clericDomains.push(domainArray.splice(Math.floor(Math.random() * domainArray.length), 1)[0])
						for (var i = 0; i < domainData[characterInfo.clericDomains[0]].incompatibleDomains; i++){
							let index = domainArray.indexOf(domainData[characterInfo.clericDomains[0]].incompatibleDomains[i])
							if (index > -1){
								domainArray.splice(index, 1)
							}
						}
						if (characterInfo.clericDomains[0] === "Sun" && document.getElementById("basicfiltering").checked){
							let index = domainArray.indexOf("Evil")
							if (index > -1){
								domainArray.splice(index, 1)
							}
						}
						else if (characterInfo.clericDomains[0] === "Evil" && document.getElementById("basicfiltering").checked){
							let index = domainArray.indexOf("Sun")
							if (index > -1){
								domainArray.splice(index, 1)
							}
						}
						characterInfo.clericDomains.push(domainArray[Math.floor(Math.random() * domainArray.length)])
					}
					else {
						let godArray = []
						for (var property in godData){
							if (!godData[property].raceSpecific || godData[property].allowedRaces.includes(characterInfo.race)){
								godArray.push(property)
							}
						}
						characterInfo.godWorshiped = godArray[Math.floor(Math.random() * godArray.length)]
						let domainArray = []
						for (var i = 0; i < godData[characterInfo.godWorshiped].domains.length; i++){
							domainArray.push(godData[characterInfo.godWorshiped].domains[i])
						}
						characterInfo.clericDomains.push(domainArray.splice(Math.floor(Math.random() * domainArray.length), 1)[0])
						characterInfo.clericDomains.push(domainArray[Math.floor(Math.random() * domainArray.length)])
						narrowAlignment(characterInfo, godData[characterInfo.godWorshiped].allowedAlignments)
					}
					for (var i = 0; i < characterInfo.clericDomains.length; i++){
						if (domainData[characterInfo.clericDomains[i]].hasAlignmentRestrictions){
							narrowAlignment(characterInfo, domainData[characterInfo.clericDomains[i]].allowedAlignments)
						}
						if (characterInfo.clericDomains[i] === "Sun" && document.getElementById("basicfiltering").checked){
							narrowAlignment(characterInfo, ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "Neutral", "Chaotic Neutral"])
						}
					}
					if (((characterInfo.godWorshiped !== "None" &&
						(godData[characterInfo.godWorshiped].alignment === "Lawful Good" ||
						godData[characterInfo.godWorshiped].alignment === "Neutral Good" ||
						godData[characterInfo.godWorshiped].alignment === "Chaotic Good")) ||
						characterInfo.clericDomains.includes("Good") ||
						(characterInfo.clericDomains.includes("Sun") &&
						document.getElementById("basicfiltering").checked)) && calculateModifier(characterInfo.charisma) > -3){
						characterInfo.features.push("Turn Undead")
					}
					else if (((characterInfo.godWorshiped !== "None" &&
						(godData[characterInfo.godWorshiped].alignment === "Lawful Evil" ||
						godData[characterInfo.godWorshiped].alignment === "Neutral Evil" ||
						godData[characterInfo.godWorshiped].alignment === "Chaotic Evil")) ||
						characterInfo.clericDomains.includes("Evil"))
						 && calculateModifier(characterInfo.charisma) > -3){
						characterInfo.features.push("Rebuke Undead")
					}
					else if (calculateModifier(characterInfo.charisma) > -3 && Math.floor(Math.random() * 2) === 0){
						characterInfo.features.push("Turn Undead")
						if (characterInfo.godWorshiped !== "We Jas"){
							narrowAlignment(characterInfo, ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "Neutral", "Chaotic Neutral"])
						}
						else {
							narrowAlignment(characterInfo, ["Lawful Good"])
						}
					}
					else if (calculateModifier(characterInfo.charisma) > -3){
						characterInfo.features.push("Rebuke Undead")
						narrowAlignment(characterInfo, ["Lawful Neutral", "Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"])
					}
					if (characterInfo.wisdom >= 10){
						if (!characterInfo.spells){
							characterInfo.spells = {}
						}
						characterInfo.spells["Cleric"] = []
						characterInfo.spells["Cleric"].push([])
						for (var i = 0; i < classData["Cleric"].spellList[0].length; i++){
							if (spellApprovedForCleric(characterInfo, classData["Cleric"].spellList[0][i])){
								characterInfo.spells["Cleric"][0].push(classData["Cleric"].spellList[0][i])
								if (!characterInfo.rawSpellsKnown.includes(classData["Cleric"].spellList[0][i])){
									characterInfo.rawSpellsKnown.push(classData["Cleric"].spellList[0][i])
								}
							}
						}
						if (characterInfo.wisdom >= 11){
							characterInfo.spells["Cleric"].push([])
							for (var i = 0; i < classData["Cleric"].spellList[1].length; i++){
								if (spellApprovedForCleric(characterInfo, classData["Cleric"].spellList[1][i])){
									characterInfo.spells["Cleric"][1].push(classData["Cleric"].spellList[1][i])
									if (!characterInfo.rawSpellsKnown.includes(classData["Cleric"].spellList[1][i])){
										characterInfo.rawSpellsKnown.push(classData["Cleric"].spellList[1][i])
									}
								}
							}
							characterInfo.spells["Cleric Domain Spells"] = [];
							characterInfo.spells["Cleric Domain Spells"].push(null)
							characterInfo.spells["Cleric Domain Spells"].push([])
							for (var i = 0; i < characterInfo.clericDomains.length; i++){
								if (!characterInfo.spells["Cleric Domain Spells"][1].includes(domainData[characterInfo.clericDomains[i]].spells[1])){
									characterInfo.spells["Cleric Domain Spells"][1].push(domainData[characterInfo.clericDomains[i]].spells[1])
									if (!characterInfo.rawSpellsKnown.includes(domainData[characterInfo.clericDomains[i]].spells[1])){
										characterInfo.rawSpellsKnown.push(domainData[characterInfo.clericDomains[i]].spells[1])
									}
								}
							}
						}
					}
					if (!characterInfo.potentionalLanguages.includes("Celestial") && !characterInfo.languagesKnown.includes("Celestial")){
						characterInfo.potentionalLanguages.push("Celestial")
					}
					if (!characterInfo.potentionalLanguages.includes("Abyssal") && !characterInfo.languagesKnown.includes("Abyssal")){
						characterInfo.potentionalLanguages.push("Abyssal")
					}
					if (!characterInfo.potentionalLanguages.includes("Infernal") && !characterInfo.languagesKnown.includes("Infernal")){
						characterInfo.potentionalLanguages.push("Infernal")
					}
					for (var i = 0; i < characterInfo.clericDomains.length; i++){
						domainData[characterInfo.clericDomains[i]].uponLearning(characterInfo)
					}
				}
			],
			spellsPerDay:[
				null,
				[3, 1, null, null, null, null, null, null, null, null]
			],
			generateMoney:function(){
				return (Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) +Math.floor(Math.random() * 4) + 5) * 1000
			},
			determineRacialWeight: function(race){
				let weight = 5
				weight += raceData[race].attributeMods.Wisdom
				weight += Math.floor(raceData[race].attributeMods.Charisma/2)
				if (raceData[race].favoredClass === "Cleric"){
					weight += 5
				}
				else if (raceData[race].favoredClass === "Any"){
					weight += 2
				}
				return Math.max(weight, 1)
			}
		},
		"Druid": {
			hitDie: 8,
			skillPoints: 4,
			fullCaster: true,
			castingType: "Divine",
			trainingAge: "Hard",
			spellsAlignmentRestricted: true,
			knowsAllSpells: true,
			castingAttribute: "Wisdom",
			classSkills: ["Concentration", "Craft", "Diplomacy", "Handle Animal", "Heal", "Knowledge (Nature)", "Listen", "Profession",
			 "Ride", "Spellcraft", "Spot", "Survival", "Swim"],
			weaponProficiency: {
			 	"Club": true,
			 	"Dagger": true,
			 	"Dart": true,
			 	"Quaterstaff": true,
			 	"Scimitar": true,
			 	"Sickle": true,
			 	"Shortspear": true,
			 	"Sling": true,
			 	"Spear": true
			},
			armorProficiency: {
			 	lightArmor: true,
			 	mediumArmor: true,
			 	heavyArmor: false,
			 	shields: true,
			 	towerShields: false
			},
			attributeWeights: {
				strength: 4,
				dexterity: 4,
				constitution: 6,
				intelligence: 1,
				wisdom: 48,
				charisma: 1
			},
			spellList: [["Create Water", "Cure Minor Wounds", "Detect Magic", "Detect Poison", "Flare", "Guidance", "Know Direction", "Light", "Mending",
			"Purify Food and Drink", "Read Magic", "Resistance", "Virtue"],
			["Calm Animals", "Charm Animal", "Cure Light Wounds", "Detect Animals or Plants", "Detect Snares and Pits", "Endure Elements", "Entangle",
			"Faerie Fire", "Goodberry", "Hide from Animals", "Jump", "Longstrider", "Magic Fang", "Magic Stone", "Obscuring Mist", "Pass without Trace",
			"Produce Flame", "Shillelagh", "Speak with Animals", "Summon Nature's Ally I"]],
			baseAttackBonus: "Average",
			fortitudeSave: "Good",
			reflexSave: "Poor",
			willSave: "Good",
			hasAlignmentRestrictions: true,
			allowedAlignments: ["Neutral Good", "Lawful Neutral", "Neutral", "Chaotic Neutral", "Neutral Evil"],
			 assignClassFeatures: [
			 	null,
			 	function (characterInfo){
			 		let animalCompanionRoll;
			 		if (document.getElementById("allowaquaticanimals").checked){
						animalCompanionRoll = Math.floor(Math.random() * 16)
					}
					else {
						animalCompanionRoll = Math.floor(Math.random() * 12)
					}
					let secondaryAnimalCompanionRoll;
					switch (animalCompanionRoll) {
						case 0:
							characterInfo.animalCompanion = "Badger";
							break;
						case 1:
							characterInfo.animalCompanion = "Camel";
							break;
						case 2:
							characterInfo.animalCompanion = "Dire Rat";
							break;
						case 3:
							characterInfo.animalCompanion = "Dog";
							break;
						case 4:
							characterInfo.animalCompanion = "Riding Dog";
							break;
						case 5:
							characterInfo.animalCompanion = "Eagle";
							break;
						case 6:
							characterInfo.animalCompanion = "Hawk";
							break;
						case 7:
							secondaryAnimalCompanionRoll = Math.floor(Math.random() * 2)
							switch (secondaryAnimalCompanionRoll) {
								case 0:
									characterInfo.animalCompanion = "Light Horse"
									break;
								case 1:
									characterInfo.animalCompanion = "Heavy Horse"
									break;
							}
							break;
						case 8:
							characterInfo.animalCompanion = "Owl";
							break;
						case 9:
							characterInfo.animalCompanion = "Pony";
							break;
						case 10:
							secondaryAnimalCompanionRoll = Math.floor(Math.random() * 2)
							switch (secondaryAnimalCompanionRoll){
								case 0:
									characterInfo.animalCompanion = "Small Viper Snake";
									break;
								case 1:
									characterInfo.animalCompanion = "Medium Viper Snake";
									break;
							}
						break
						case 11:
							characterInfo.animalCompanion = "Wolf";
							break;
						case 12:
							characterInfo.animalCompanion = "Crocodile";
							break;
						case 13:
							characterInfo.animalCompanion = "Porpoise";
							break;
						case 14:
							characterInfo.animalCompanion = "Medium Shark";
							break
						case 15:
							characterInfo.animalCompanion = "Squid"
							break
					}
					characterInfo.features.push("Animal Companion: " + characterInfo.animalCompanion)
					characterInfo.features.push("Nature Sense")
					characterInfo.features.push("Wild Empathy")
					if (!characterInfo.potentionalLanguages.includes("Sylvan") && !characterInfo.languagesKnown.includes("Sylvan")){
						characterInfo.potentionalLanguages.push("Sylvan")
					}
					if (!characterInfo.languagesKnown.includes("Druidic")){
						characterInfo.languagesKnown.push("Druidic")
					}
					grantSkillBonus(characterInfo, "Knowledge (Nature)", 2)
					grantSkillBonus(characterInfo, "Survival", 2)
					if (characterInfo.wisdom >= 10){
						if (!characterInfo.spells){
							characterInfo.spells = {}
						}
						characterInfo.spells["Druid"] = []
						characterInfo.spells["Druid"].push([])
						for (var i = 0; i < classData["Druid"].spellList[0].length; i++){
							characterInfo.spells["Druid"][0].push(classData["Druid"].spellList[0][i])
							if (!characterInfo.rawSpellsKnown.includes(classData["Druid"].spellList[0][i])){
								characterInfo.rawSpellsKnown.push(classData["Druid"].spellList[0][i])
							}
						}
						if (characterInfo.wisdom >= 11){
							characterInfo.spells["Druid"].push([])
							for (var i = 0; i < classData["Druid"].spellList[1].length; i++){
								characterInfo.spells["Druid"][1].push(classData["Druid"].spellList[1][i])
								if (!characterInfo.rawSpellsKnown.includes(classData["Druid"].spellList[1][i])){
									characterInfo.rawSpellsKnown.push(classData["Druid"].spellList[1][i])
								}
							}
						}
					}
				}

			 ],
			spellsPerDay: [
				null,
				[3, 1, null, null, null, null, null, null, null, null]
			],
			generateMoney:function(){
				return (Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + 2)  * 1000
			},
			determineRacialWeight: function(race){
				let weight = 5
				weight += Math.floor(raceData[race].attributeMods.Wisdom * 1.5)
				if (raceData[race].favoredClass === "Druid"){
					weight += 5
				}
				else if (raceData[race].favoredClass === "Any"){
					weight += 2
				}
				else if (race === "Elf") {
					weight += 2
				}
				return Math.max(weight, 1)
			}
		},
		"Fighter": {
			hitDie: 10,
			skillPoints: 2,
			trainingAge: "Medium",
			fullCaster: false,
			halfCaster: false,
			weaponProficiency: {
				allSimple: true,
				allMartial: true
			},
			armorProficiency: {
				lightArmor: true,
				mediumArmor: true,
				heavyArmor: true,
				shields: true,
				towerShields: true
			},
			attributeWeights: {
				strength: 50,
				dexterity: 20,
				constitution: 20,
				wisdom: 4,
				intelligence: 3,
				charisma: 3
			},
			baseAttackBonus: "Good",
			fortitudeSave: "Good",
			reflexSave: "Poor",
			willSave: "Poor",
			hasAlignmentRestrictions: false,
			classSkills: ["Climb", "Craft", "Handle Animal", "Intimidate", "Jump", "Ride", "Swim"],
			assignClassFeatures: [
				null,
				function(characterInfo){
					characterInfo.fighterBonusFeatsToLearn++;
					return;
				}
			],
			display: {
				belowClass: function(characterInfo, span){
					return;
				},
				belowAlignment: function(characterInfo, span){
					return;
				}
			},
			generateMoney:function(){
				return (Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) +Math.floor(Math.random() * 4) +Math.floor(Math.random() * 4) + 6) * 1000
			},
			determineRacialWeight: function(race){
				let weight = 5
				weight += raceData[race].attributeMods.Strength
				weight += Math.floor(raceData[race].attributeMods.Constitution/2)
				if (raceData[race].favoredClass === "Fighter"){
					weight += 5
				}
				else if (raceData[race].favoredClass === "Any"){
					weight += 2
				}
				else if (race === "Half-Orc") {
					weight += 2
				}
				return Math.max(weight, 1)
			}
		},
		"Monk": {
			hitDie: 8,
			skillPoints: 4,
			trainingAge: "Hard",
			fullCaster: false,
			halfCaster: false,
			classSkills: ["Balance", "Climb", "Concentration", "Craft", "Diplomacy", "Escape Artist", "Hide", "Jump", 
			"Knowledge (Arcana)", "Knowledge (Religion)", "Listen", "Move Silently", "Perform", "Profession", "Sense Motive", "Spot", 
			"Swim", "Tumble"],
			weaponProficiency: {
				"Club": true,
				"Light Crossbow": true,
				"Heavy Crossbow": true,
				"Dagger": true,
				"Handaxe": true,
				"Javelin": true,
				"Kama": true,
				"Nunchaku": true,
				"Quaterstaff": true,
				"Sai": true,
				"Shuriken": true,
				"Siangham": true,
				"Sling": true,
				"Unarmed Strike": true
			},
			armorProficiency: {
				lightArmor: false,
				mediumArmor: false,
				heavyArmor: false,
				shields: false,
				towerShields: false
			},
			baseAttackBonus: "Average",
			fortitudeSave: "Good",
			reflexSave: "Good",
			willSave: "Good",
			attributeWeights: {
				strength: 6,
				dexterity: 5,
				constitution: 5,
				intelligence: 2,
				wisdom: 5,
				charisma: 1
			},
			hasAlignmentRestrictions: true,
			allowedAlignments: ["Lawful Good", "Lawful Neutral", "Lawful Evil"],
			assignClassFeatures: [
				null,
				function (characterInfo) {
					characterInfo.features.push("AC Bonus")
					characterInfo.features.push("Flury of Blows")
					characterInfo.features.push("Unarmed Strike")
					addFeat(characterInfo, "Improved Unarmed Strike")
					if (document.getElementById("weighfeats").checked){
						let array = []
						for (var i = 0; i < featData["Improved Grapple"].determineWeight(characterInfo); i++){
							array.push("Improved Grapple")
						}
						for (var i = 0; i < featData["Stunning Fist"].determineWeight(characterInfo); i++){
							array.push("Stunning Fist")
						}
						addFeat(characterInfo, array[Math.floor(Math.random() * array.length)])
					}
					else {
						let roll = Math.floor(Math.random() * 2)
						if (roll === 0){
							addFeat(characterInfo, "Improved Grapple")
						}
						else {
							addFeat(characterInfo, "Stunning Fist")
						}
					}
				}
			],
			generateMoney:function(){
				return (Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) +Math.floor(Math.random() * 4) + 5) * 100
			},
			determineRacialWeight: function(race){
				let weight = 5;
				weight += raceData[race].attributeMods.Strength
				weight += raceData[race].attributeMods.Dexterity
				weight += Math.floor(raceData[race].attributeMods.Wisdom)
				if (raceData[race].favoredClass === "Monk"){
					weight += 5
				}
				else if (raceData[race].favoredClass === "Any"){
					weight += 2
				}
				if (raceData[race].size === "Small"){
					weight -= 2
				}
				return Math.max(weight, 1)
			}

		},
		"Paladin": {
			hitDie: 10,
			skillPoints: 2,
			trainingAge: "Medium",
			fullCaster: false,
			halfCaster: true,
			castingType: "Divine",
			spellsAlignmentRestricted: false,
			knowsAllSpells: true,
			castingAttribute: "Wisdom",
			classSkills: ["Concentration", "Craft", "Diplomacy", "Handle Animal", "Heal", "Knowledge (Nobility and Royalty)",
			 "Knowledge (Religion)", "Profession", "Ride", "Sense Motive"],
			weaponProficiency: {
				allSimple: true,
				allMartial: true
			},
			armorProficiency: {
				lightArmor: true,
				mediumArmor: true,
				heavyArmor: true,
				shields: true,
				towerShields: false
			},
			baseAttackBonus: "Good",
			fortitudeSave: "Good",
			reflexSave: "Poor",
			willSave: "Poor",
			hasAlignmentRestrictions: true,
			allowedAlignments: ["Lawful Good"],
			assignClassFeatures: [
				null,
				function(characterInfo){
					characterInfo.features.push("Aura of Good")
					characterInfo.features.push("Detect Evil")
					characterInfo.features.push("Smite Evil 1/day")
				}
			],
			attributeWeights: {
				strength: 50,
				dexterity: 3,
				constitution: 15,
				wisdom:15,
				intelligence: 2,
				charisma: 15
			},
			generateMoney:function(){
				return (Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) +Math.floor(Math.random() * 4)  +Math.floor(Math.random() * 4) + 6) * 1000
			},
			determineRacialWeight: function(race){
				let weight = 5;
				weight += raceData[race].attributeMods.Strength
				weight += raceData[race].attributeMods.Constitution
				weight += Math.floor(raceData[race].attributeMods.Charisma)
				if (raceData[race].favoredClass === "Paladin"){
					weight += 5
				}
				else if (raceData[race].favoredClass === "Any"){
					weight += 2
				}
				return Math.max(weight, 1)
			}

		},
		"Ranger": {
			hitDie: 8,
			skillPoints: 6,
			trainingAge: "Medium",
			fullCaster: false,
			halfCaster: true,
			castingType: "Divine",
			spellsAlignmentRestricted: false,
			knowsAllSpells: true,
			castingAttribute: "Wisdom",
			classSkills: ["Climb", "Concentration", "Craft", "Handle Animal", "Heal", "Hide", "Jump", "Knowledge (Dungeoneering)", 
			"Knowledge (Geography)", "Knowledge (Nature)", "Listen", "Move Silently", "Profession", "Ride", "Search", "Spot", "Survival",
			"Swim", "Use Rope"],
			weaponProficiency: {
				allSimple: true,
				allMartial: true
			},
			armorProficiency: {
				lightArmor: true,
				mediumArmor: false,
				heavyArmor: false,
				shields: true,
				towerShields: false
			},
			baseAttackBonus: "Good",
			fortitudeSave: "Good",
			reflexSave: "Good",
			willSave: "Poor",
			attributeWeights: {
				strength: 25,
				dexterity: 40,
				constitution: 15,
				intelligence: 5,
				wisdom: 15,
				charisma: 5
			},
			hasAlignmentRestrictions: false,
			assignClassFeatures: [
				null,
				function (characterInfo) {
					let favoredEnemyArray = ["Aberration", "Animal", "Construct", "Dragon", "Elemental", "Fey", "Giant", "Humanoid (aquatic)", "Humanoid (dwarf)", "Humanoid (elf)", "Humanoid (goblinoid)", "Humanoid (gnoll)", "Humanoid (gnome)", "Humanoid (halfling)", "Humanoid (human)", "Humanoid (orc)", "Humanoid (reptilian)", "Magical Beast", "Monstrous humanoid", "Ooze", "Outsider (air)", "Outsider (chaotic)", "Outsider (earth)", "Outsider (evil)", "Outsider (fire)", "Outsider (good)", "Outsider (lawful)", "Outsider (native)", "Outsider (water)", "Plant", "Undead", "Vermin"]
					let favoredEnemy = favoredEnemyArray[Math.floor(Math.random() * favoredEnemyArray.length)]
					characterInfo.features.push("Wild Empathy")
					characterInfo.features.push("Favored Enemy: " + favoredEnemy)
					addFeat(characterInfo, "Track")
				}

			],
			generateMoney:function(){
				return (Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) +Math.floor(Math.random() * 4)  +Math.floor(Math.random() * 4) + 6) * 1000
			},
			determineRacialWeight: function(race){
				let weight = 5;
				weight += raceData[race].attributeMods.Strength
				weight += raceData[race].attributeMods.Dexterity
				weight += Math.floor(raceData[race].attributeMods.Wisdom)
				if (raceData[race].favoredClass === "Ranger"){
					weight += 5
				}
				else if (raceData[race].favoredClass === "Any"){
					weight += 2
				}
				else if (race === "Elf"){
					weight += 2
				}
				return Math.max(weight, 1)
			}

		},
		"Rogue": {
			hitDie: 6,
			skillPoints: 8,
			trainingAge: "Easy",
			fullCaster: false,
			halfCaster: false,
			classSkills: ["Appraise", "Balance", "Bluff", "Climb", "Craft", "Decipher Script", "Diplomacy", "Disable Device", "Disguise", 
			"Escape Artist", "Forgery", "Gather Information", "Hide", "Intimidate", "Jump", "Knowledge (Local)", "Listen", "Move Silently", 
			"Open Lock", "Perform", "Profession", "Search", "Sense Motive", "Sleight of Hand", "Spot", "Swim", "Tumble", "Use Magic Device", 
			"Use Rope"],
			weaponProficiency: {
				allSimple: true,
				"Hand Crossbow": true,
				"Rapier": true,
				"Sap": true,
				"Shortbow": true,
				"Short Sword": true
			},
			armorProficiency: {
				lightArmor: true,
				mediumArmor: false,
				heavyArmor: false,
				shields: false,
				towerShields: false
			},
			baseAttackBonus: "Average",
			fortitudeSave: "Poor",
			reflexSave: "Good",
			willSave: "Poor",
			hasAlignmentRestrictions: false,
			attributeWeights: {
				strength: 3,
				dexterity: 60,
				constitution: 15,
				intelligence: 15,
				wisdom: 2,
				charisma: 5
			},
			assignClassFeatures: [
				null,
				function(characterInfo){
					characterInfo.features.push("Sneak attack +1d6")
					characterInfo.features.push("Trapfinding")
				}
			],
			display: {
				belowClass: function(characterInfo, span){
					return;
				},
				belowAlignment: function (characterInfo, span){
					return;
				}
			},
			generateMoney:function(){
				return (Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) +Math.floor(Math.random() * 4) + 5) * 1000
			},
			determineRacialWeight: function(race){
				let weight = 5;
				weight += raceData[race].attributeMods.Dexterity
				weight += Math.floor(raceData[race].attributeMods.Intelligence)
				if (raceData[race].favoredClass === "Rogue"){
					weight += 5
				}
				else if (raceData[race].favoredClass === "Any"){
					weight += 2
				}
				return Math.max(weight, 1)
			}


		},
		"Sorcerer": {
			hitDie: 4,
			skillPoints: 2,
			trainingAge: "Easy",
			fullCaster: true,
			castingType: "Arcane",
			spellsAlignmentRestricted: false,
			knowsAllSpells: false,
			castingAttribute: "Charisma",
			classSkills: ["Bluff", "Concentration", "Craft", "Knowledge (Arcana)", "Profession", "Spellcraft"],
			spellList: [
				["Resistance", "Acid Splash", "Detect Poison", "Detect Magic", "Read Magic", "Daze", "Dancing Lights", "Flare", "Light", "Ray of Frost", "Ghost Sound", "Disrupt Undead", "Touch of Fatigue", "Mage Hand", "Mending", "Message", "Open/Close", "Arcane Mark", "Prestidigitation"],
				["Alarm", "Endure Elements", "Hold Portal", "Protection from Chaos", "Protection from Evil", "Protection from Good", "Protection from Law", "Shield", "Grease", "Mage Armor", "Mount", "Obscuring Mist", "Summon Monster I", "Unseen Servant", "Comprehend Languages", "Detect Secret Doors", "Detect Undead", "Identify", "True Strike", "Charm Person", "Hypnotism", "Sleep", "Burning Hands", "Magic Missile", "Shocking Grasp", "Tenser's Floating Disk", "Color Spray", "Disguise Self", "Nystul's Magic Aura", "Silent Image", "Ventriloquism", "Cause Fear", "Chill Touch", "Ray of Enfeeblement", "Animate Rope", "Enlarge Person", "Erase", "Expeditious Retreat", "Feather Fall", "Jump", "Magic Weapon", "Reduce Person"]
			],
			weaponProficiency: {
				allSimple: true
			},
			armorProficiency: {
				lightArmor: false,
				mediumArmor: false,
				heavyArmor: false,
				shields: false,
				towerShields: false
			},
			baseAttackBonus: "Poor",
			fortitudeSave: "Poor",
			reflexSave: "Poor",
			willSave: "Good",
			hasAlignmentRestrictions: false,
			attributeWeights: {
				strength: 1,
				dexterity: 5,
				constitution: 5,
				intelligence: 2,
				wisdom: 1,
				charisma: 42
			},

			assignClassFeatures: [
				null,
				function(characterInfo){
					if (characterInfo.charisma >= 10){
						let potentionalLevel0SorcererSpells = []
						for (var i = 0; i < classData["Sorcerer"].spellList[0].length; i++){
							potentionalLevel0SorcererSpells.push(classData["Sorcerer"].spellList[0][i])
						}
						if (!characterInfo.spells){
							characterInfo.spells = {}
						}
						characterInfo.spells["Sorcerer"] = []
						characterInfo.spells["Sorcerer"].push([])
						for (var i = 0; i < 4; i++){
							characterInfo.spells["Sorcerer"][0].push(potentionalLevel0SorcererSpells.splice(Math.floor(Math.random() * potentionalLevel0SorcererSpells.length),1)[0])
						}
						if (characterInfo.charisma >= 11){
							let potentionalLevel1SorcererSpells = []
							for (var i = 0; i < classData["Sorcerer"].spellList[1].length; i++){
								potentionalLevel1SorcererSpells.push(classData["Sorcerer"].spellList[1][i])
							}
							characterInfo.spells["Sorcerer"].push([])
							for (var i = 0; i < 2; i++){
								characterInfo.spells["Sorcerer"][1].push(potentionalLevel1SorcererSpells.splice(Math.floor(Math.random() * potentionalLevel1SorcererSpells.length),1)[0])
							}
						}
					}
				}
			],
			spellsPerDay: [
				null,
				[5, 3, null, null, null, null, null, null, null, null]
			],
			generateMoney:function(){
				return (Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + 3) * 1000
			},
			determineRacialWeight: function(race){
				let weight = 5;
				weight += Math.floor(raceData[race].attributeMods.Charisma * 1.5)
				if (raceData[race].favoredClass === "Sorcerer"){
					weight += 5
				}
				else if (raceData[race].favoredClass === "Any"){
					weight += 2
				}
				return Math.max(weight, 1)
			}
		},
		"Wizard": {
			hitDie: 4,
			skillPoints: 2,
			fullCaster: true,
			castingType: "Arcane",
			trainingAge: "Hard",
			spellsAlignmentRestricted: false,
			knowsAllSpells: false,
			castingAttribute: "Intelligence",
			classSkills: ["Concentration", "Craft", "Decipher Script", "Knowledge (Arcana)", "Knowledge (Architecture and Engineering)",
			"Knowledge (Dungeoneering)", "Knowledge (Geography)", "Knowledge (History)", "Knowledge (Local)", "Knowledge (Nature)",
			"Knowledge (Nobility and Royalty)", "Knowledge (Religion)", "Knowledge (The Planes)", "Profession", "Spellcraft"],
			spellList: [
				["Resistance", "Acid Splash", "Detect Poison", "Detect Magic", "Read Magic", "Daze", "Dancing Lights", "Flare", "Light", "Ray of Frost", "Ghost Sound", "Disrupt Undead", "Touch of Fatigue", "Mage Hand", "Mending", "Message", "Open/Close", "Arcane Mark", "Prestidigitation"],
				["Alarm", "Endure Elements", "Hold Portal", "Protection from Chaos", "Protection from Evil", "Protection from Good", "Protection from Law", "Shield", "Grease", "Mage Armor", "Mount", "Obscuring Mist", "Summon Monster I", "Unseen Servant", "Comprehend Languages", "Detect Secret Doors", "Detect Undead", "Identify", "True Strike", "Charm Person", "Hypnotism", "Sleep", "Burning Hands", "Magic Missile", "Shocking Grasp", "Tenser's Floating Disk", "Color Spray", "Disguise Self", "Nystul's Magic Aura", "Silent Image", "Ventriloquism", "Cause Fear", "Chill Touch", "Ray of Enfeeblement", "Animate Rope", "Enlarge Person", "Erase", "Expeditious Retreat", "Feather Fall", "Jump", "Magic Weapon", "Reduce Person"]
			],
			weaponProficiency: {
				"Club": true,
				"Dagger": true,
				"Heavy Crossbow": true,
				"Light Crossbow": true,
				"Quaterstaff": true
			},
			armorProficiency: {
				lightArmor: false,
				mediumArmor: false,
				heavyArmor: false,
				shields: false,
				towerShields: false
			},
			baseAttackBonus: "Poor",
			fortitudeSave: "Poor",
			reflexSave: "Poor",
			willSave: "Good",
			hasAlignmentRestrictions: false,
			attributeWeights: {
				strength: 1,
				dexterity: 5,
				constitution: 5,
				intelligence: 42,
				wisdom: 1,
				charisma: 2
			},
			assignClassFeatures: [
				null,
				function(characterInfo){
					if (Math.floor(Math.random() * 100) < document.getElementById("specialistWizards").value){
						let specialityArray = ["Abjuration", "Conjuration", "Divination", "Enchantment", "Evocation", "Illusion", "Necromancy", "Transmutation"]
						characterInfo.wizardSpeciality = specialityArray.splice(Math.floor(Math.random() * specialityArray.length), 1)[0]
						let number
						if (characterInfo.wizardSpeciality === "Divination"){
							number = 1
						}
						else {
							number = 2
							let index = specialityArray.indexOf("Divination")
							specialityArray.splice(index, 1)
						}
						characterInfo.barredWizardColleges = []
						for (var i = 0; i < number; i++){
							characterInfo.barredWizardColleges.push(specialityArray.splice(Math.floor(Math.random() * specialityArray.length), 1)[0])
						}
					}
					else {
						characterInfo.wizardSpeciality = "None"
					}
					if (characterInfo.intelligence >= 10){
						if (!characterInfo.spells){
							characterInfo.spells = {}
						}
						characterInfo.spells["Wizard"] = []
						characterInfo.spells["Wizard"].push([])
						for (var i = 0; i < classData["Wizard"].spellList[0].length; i++){
							if (characterInfo.wizardSpeciality === "None" || !characterInfo.barredWizardColleges.includes(spellData[classData["Wizard"].spellList[0][i]].college)){
								characterInfo.spells["Wizard"][0].push(classData["Wizard"].spellList[0][i])
							}
						}
						if (characterInfo.intelligence >= 11){
							characterInfo.spells["Wizard"].push([])
							let potentionalSpells = []
							if (characterInfo.wizardSpeciality !== "None" && document.getElementById("specialistWizardSafety").checked){
								let potentionalSpecialitySpells = []
								for (var i = 0; i < classData["Wizard"].spellList[1].length; i++){
									if (characterInfo.wizardSpeciality === spellData[classData["Wizard"].spellList[1][i]].college){
										potentionalSpecialitySpells.push(classData["Wizard"].spellList[1][i])
									}
								}
								characterInfo.spells["Wizard"][1].push(potentionalSpecialitySpells.splice(Math.floor(Math.random() * potentionalSpecialitySpells.length), 1)[0])
							}
							for (var i = 0; i < classData["Wizard"].spellList[1].length; i++){
								if ((characterInfo.wizardSpeciality === "None" || !characterInfo.barredWizardColleges.includes(spellData[classData["Wizard"].spellList[1][i]].college)) && !characterInfo.spells["Wizard"][1].includes(classData["Wizard"].spellList[1][i])){
									potentionalSpells.push(classData["Wizard"].spellList[1][i])
								}
							}

							for (var i = (characterInfo.wizardSpeciality !== "None" && document.getElementById("specialistWizardSafety").checked) ? 1 : 0; i < 3 + calculateModifier(characterInfo.intelligence); i++){
								characterInfo.spells["Wizard"][1].push(potentionalSpells.splice(Math.floor(Math.random() * potentionalSpells.length), 1)[0])
							}
						}
						addFeat(characterInfo, "Scribe Scroll")
					}
				}
			],
			spellsPerDay: [null,
				[3, 1, null, null, null, null, null, null, null, null]
			],
			generateMoney:function(){
				return (Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4)+ 3) * 1000
			},
			determineRacialWeight: function(race){
				let weight = 5;
				weight += Math.floor(raceData[race].attributeMods.Intelligence * 1.5)
				if (raceData[race].favoredClass === "Wizard"){
					weight += 5
				}
				else if (raceData[race].favoredClass === "Any"){
					weight += 2
				}
				if (race === "Half-Elf"){
					weight += 2
				}
				return Math.max(weight, 1)
			}
		}
	}
