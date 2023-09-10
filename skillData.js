	const skillData = {
		"Appraise": {
			attribute: "Intelligence",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: true,
			determineWeight: function(characterInfo){
				let weight = 5;
				if (characterInfo.features.includes("+2 racial bonus on Appraise checks related to stone or metal")){
					weight += 2
				}
				if (characterInfo.skillBonuses["Appraise"]){
					weight += characterInfo.skillBonuses["Appraise"]
				}
				weight += calculateModifier(characterInfo.intelligence)
				return Math.max(weight, 1)
			}
		},
		"Balance": {
			attribute: "Dexterity",
			hasSubskills: false,
			armorCheckPenalty: true,
			doubleArmorCheckPenalty: false,
			allowedUntrained: true,
			determineWeight: function(characterInfo){
				let weight = 5
				if (characterInfo.skillBonuses["Balance"]){
					weight += characterInfo.skillBonuses["Balance"]
				}
				weight += calculateModifier(characterInfo.dexterity)
				return Math.max(weight, 1)
			}
		},
		"Bluff": {
			attribute: "Charisma",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: true,
			determineWeight: function(characterInfo){
				let weight = 5;
				for (var i = 0; i < characterInfo.features.length; i++){
					if (characterInfo.features[i].startsWith("Favored Enemy")){
						weight++
					}
				}
				weight += calculateModifier(characterInfo.charisma)
				if (characterInfo.skillBonuses["Bluff"]){
					weight += characterInfo.skillBonuses["Bluff"]
				}
				return Math.max(weight, 1)
			}
		},
		"Climb": {
			attribute: "Strength",
			hasSubskills: false,
			armorCheckPenalty: true,
			doubleArmorCheckPenalty: false,
			allowedUntrained: true,
			determineWeight: function(characterInfo){
				let weight = 5;
				weight +=  calculateModifier(characterInfo.strength)
				if (characterInfo.skillBonuses["Climb"]){
					weight += characterInfo.skillBonuses["Climb"]
				}
				return Math.max(weight, 1)
			}
		},
		"Concentration": {
			attribute: "Constitution",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: true,
			determineWeight: function(characterInfo){
				let weight = 3
				if (classData[characterInfo.class].fullCaster){
					weight += 4
				}
				weight += calculateModifier(characterInfo.constitution)
				if (characterInfo.skillBonuses["Concentration"]){
					weight += characterInfo.skillBonuses["Concentration"]
				}
				return Math.max(weight, 1)
			}
		},
		"Craft": {
			attribute: "Intelligence",
			hasSubskills: true,
			subskills: ["Alchemy", "Armorsmithing", "Basketweaving", "Bookbinding", "Bowmaking", "Blacksmithing", "Calligraphy", "Carpentry", "Cobbling", "Gemcutting", "Leatherworking", "Locksmithing", "Painting", "Pottery", "Sculpting", "Shipmaking", "Stonemasonry", "Trapmaking", "Weaponsmithing", "Weaving"],
			armorCheckPenalty: false,
			allowedUntrained: true,
			determineWeight: function(characterInfo){
				let weight = 5
				let bonus = 0
				for (var property in characterInfo.skillBonuses){
					if (property.startsWith("Craft")){
						bonus += characterInfo.skillBonuses[property]
					}
				}
				weight += Math.floor(bonus/2)
				weight += calculateModifier(characterInfo.intelligence)
				if (characterInfo.features.includes("+2 racial bonus on Craft checks that are related to stone or metal")){
					weight += 2
				}
				return Math.max(weight, 1)
			},
			determineSubskillWeight: function(characterInfo, subskill){
				let weight = 5
				if (characterInfo.skillBonuses["Craft (" + subskill + ")"]){
					weight += characterInfo.skillBonuses["Craft (" + subskill + ")"]
				}
				if (characterInfo.features.includes("+2 racial bonus on Craft checks that are related to stone or metal") && (subskill === "Armorsmithing" || subskill === "Locksmithing" || subskill === "Stonemasonry" || subskill === "Weaponsmithing")){
					weight += 2
				}
				else if (characterInfo.features.includes("+2 racial bonus on Craft checks that are related to stone or metal") && subskill === "Sculpting"){
					weight++
				}
				return weight
			}
		},
		"Decipher Script": {
			attribute: "Intelligence",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false,
			determineWeight: function(characterInfo){
				let weight = 5
				weight += calculateModifier(characterInfo.intelligence)
				if (characterInfo.skillBonuses["Decipher Script"]){
					weight += characterInfo.skillBonuses["Decipher Script"]
				}
				return Math.max(weight, 1)
			}
		},
		"Diplomacy": {
			attribute: "Charisma",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: true,
			determineWeight: function(characterInfo){
				let weight = 5
				weight += calculateModifier(characterInfo.charisma)
				if (characterInfo.skillBonuses["Diplomacy"]){
					weight += characterInfo.skillBonuses["Diplomacy"]
				}
				return Math.max(weight, 1)
			}
		},
		"Disable Device": {
			attribute: "Intelligence",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false,
			determineWeight: function(characterInfo){
				let weight = 5
				weight += calculateModifier(characterInfo.intelligence)
				if (characterInfo.skillBonuses["Disable Device"]){
					weight += characterInfo.skillBonuses["Disable Device"]
				}
				if (characterInfo.features.includes("Trapfinding")){
					weight += 5
				}
				return Math.max(weight, 1)
			}
		},
		"Disguise": {
			attribute: "Charisma",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: true,
			determineWeight: function(characterInfo){
				let weight = 5
				weight += calculateModifier(characterInfo.charisma)
				if (characterInfo.skillBonuses["Disguise"]){
					weight += characterInfo.skillBonuses["Disguise"]
				}
				return Math.max(weight, 1)
			}
		},
		"Escape Artist": {
			attribute: "Dexterity",
			hasSubskills: false,
			armorCheckPenalty: true,
			doubleArmorCheckPenalty: false,
			allowedUntrained: true,
			determineWeight: function(characterInfo){
				let weight = 5
				weight += calculateModifier(characterInfo.dexterity)
				if (characterInfo.skillBonuses["Escape Artist"]){
					weight += characterInfo.skillBonuses["Escape Artist"]
				}
				return Math.max(weight, 1)
			}
		},
		"Forgery": {
			attribute: "Intelligence",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: true,
			determineWeight: function(characterInfo){
				if (characterInfo.features.includes("Illiteracy")){
					return 0
				}
				let weight = 5
				weight += calculateModifier(characterInfo.intelligence)
				if (characterInfo.skillBonuses["Forgery"]){
					weight += characterInfo.skillBonuses["Forgery"]
				}
				return Math.max(weight, 1)
			}
		},
		"Gather Information": {
			attribute: "Charisma",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: true,
			determineWeight: function (characterInfo){
				let weight = 5;
				weight += calculateModifier(characterInfo.charisma)
				if (characterInfo.skillBonuses["Gather Information"]){
					weight += characterInfo.skillBonuses["Gather Information"]
				}
				return Math.max(weight, 1)
			}
		},
		"Handle Animal":  {
			attribute: "Charisma",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false,
			determineWeight: function(characterInfo){
				let weight = 5;
				weight += calculateModifier(characterInfo.charisma)
				if (characterInfo.skillBonuses["Handle Animal"]){
					weight += characterInfo.skillBonuses["Handle Animal"]
				}
				for (var i = 0; i < characterInfo.features.length; i++){
					if (characterInfo.features[i].startsWith("Animal Companion")){
						weight += 4
					}
				}
				weight += calculateSkillRanksAndBunuses(characterInfo, "Ride")
				return Math.max(weight, 1)
			}
		},
		"Heal": {
			attribute: "Wisdom",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: true,
			determineWeight: function(characterInfo){
				let weight = 5
				weight += calculateModifier(characterInfo.wisdom)
				if (characterInfo.skillBonuses["Heal"]){
					weight += characterInfo.skillBonuses["Heal"]
				}
				return Math.max(weight, 1)
			}
		},
		"Hide": {
			attribute: "Dexterity",
			hasSubskills: false,
			armorCheckPenalty: true,
			doubleArmorCheckPenalty: false,
			allowedUntrained: true,
			determineWeight: function(characterInfo){
				let weight = 5;
				weight += calculateModifier(characterInfo.dexterity)
				if (characterInfo.skillBonuses["Hide"]){
					weight += characterInfo.skillBonuses["Hide"]
				}
				return Math.max(weight, 1)
			}
		},
		"Intimidate": {
			attribute: "Charisma",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: true,
			determineWeight: function(characterInfo){
				let weight = 5
				weight += calculateModifier(characterInfo.charisma)
				if (characterInfo.skillBonuses["Intimidate"]){
					weight += characterInfo.skillBonuses["Intimidate"]
				}
				return Math.max(weight, 1)
			}
		},
		"Jump": {
			attribute: "Strength",
			hasSubskills: false,
			armorCheckPenalty: true,
			doubleArmorCheckPenalty: false,
			allowedUntrained: true,
			determineWeight: function(characterInfo){
				let weight = 5
				weight += calculateModifier(characterInfo.strength)
				if (characterInfo.skillBonuses["Jump"]){
					weight += characterInfo.skillBonuses["Jump"]
				}
				return Math.max(weight, 1)
			}
		},
		"Knowledge (Arcana)": {
			attribute: "Intelligence",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false,
			isSubskill: true,
			mainSkill: "Knowledge",
			determineWeight: function(characterInfo){
				let weight = 5
				weight += calculateModifier(characterInfo.intelligence)
				if (characterInfo.skillBonuses["Knowledge (Arcana)"]){
					weight += characterInfo.skillBonuses["Knowledge (Arcana)"]
				}
				if (classData[characterInfo.class].fullCaster && classData[characterInfo.class].castingType === "Arcane"){
					weight += 5
				}
				return Math.max(weight, 1)
			}
		},
		"Knowledge (Architecture and Engineering)": {
			attribute: "Intelligence",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false,
			isSubskill: true,
			mainSkill: "Knowledge",
			determineWeight: function(characterInfo){
				let weight = 5
				weight += calculateModifier(characterInfo.intelligence)
				if (characterInfo.skillBonuses["Knowledge (Architecture and Engineering)"]){
					weight += characterInfo.skillBonuses["Knowledge (Architecture and Engineering)"]
				}
				return Math.max(weight, 1)
			}
		},
		"Knowledge (Dungeoneering)": {
			attribute: "Intelligence",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false,
			isSubskill: true,
			mainSkill: "Knowledge",
			determineWeight: function(characterInfo){
				let weight = 5
				weight += calculateModifier(characterInfo.intelligence)
				if (characterInfo.skillBonuses["Knowledge (Dungeoneering)"]){
					weight += characterInfo.skillBonuses["Knowledge (Dungeoneering)"]
				}
				return Math.max(weight, 1)
			}
		},
		"Knowledge (Geography)": {
			attribute: "Intelligence",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false,
			isSubskill: true,
			mainSkill: "Knowledge",
			determineWeight: function(characterInfo){
				let weight = 5
				weight += calculateModifier(characterInfo.intelligence)
				if (characterInfo.skillBonuses["Knowledge (Geography)"]){
					weight += characterInfo.skillBonuses["Knowledge (Geography)"]
				}
				return Math.max(weight, 1)
			}

		},
		"Knowledge (History)": {
			attribute: "Intelligence",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false,
			isSubskill: true,
			mainSkill: "Knowledge",
			determineWeight: function(characterInfo){
				let weight = 5
				weight += calculateModifier(characterInfo.intelligence)
				if (characterInfo.skillBonuses["Knowledge (History)"]){
					weight += characterInfo.skillBonuses["Knowledge (History)"]
				}
				return Math.max(weight, 1)
			}

		},
		"Knowledge (Local)": {
			attribute: "Intelligence",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false,
			isSubskill: true,
			mainSkill: "Knowledge",
			determineWeight: function(characterInfo){
				let weight = 5
				weight += calculateModifier(characterInfo.intelligence)
				if (characterInfo.skillBonuses["Knowledge (Local)"]){
					weight += characterInfo.skillBonuses["Knowledge (Local)"]
				}
				return Math.max(weight, 1)
			}

		},
		"Knowledge (Nature)": {
			attribute: "Intelligence",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false,
			isSubskill: true,
			mainSkill: "Knowledge",
			determineWeight: function(characterInfo){
				let weight = 5
				weight += calculateModifier(characterInfo.intelligence)
				if (characterInfo.skillBonuses["Knowledge (Nature)"]){
					weight += characterInfo.skillBonuses["Knowledge (Nature)"]
				}
				if (characterInfo.class === "Druid"){
					weight += 5
				}
				return Math.max(weight, 1)
			}

		},
		"Knowledge (Nobility and Royalty)": {
			attribute: "Intelligence",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false,
			isSubskill: true,
			mainSkill: "Knowledge",
			determineWeight: function(characterInfo){
				let weight = 5
				weight += calculateModifier(characterInfo.intelligence)
				if (characterInfo.skillBonuses["Knowledge (Nobility and Royalty)"]){
					weight += characterInfo.skillBonuses["Knowledge (Nobility and Royalty)"]
				}
				return Math.max(weight, 1)
			}
		},
		"Knowledge (Religion)": {
			attribute: "Intelligence",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false,
			isSubskill: true,
			mainSkill: "Knowledge",
			determineWeight: function(characterInfo){
				let weight = 5
				weight += calculateModifier(characterInfo.intelligence)
				if (characterInfo.skillBonuses["Knowledge (Religion)"]){
					weight += characterInfo.skillBonuses["Knowledge (Religion)"]
				}
				if (characterInfo.class === "Cleric"){
					weight += 5
				}
				return Math.max(weight, 1)
			}
		},
		"Knowledge (The Planes)": {
			attribute: "Intelligence",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false,
			isSubskill: true,
			mainSkill: "Knowledge",
			determineWeight: function(characterInfo){
				let weight = 5
				weight += calculateModifier(characterInfo.intelligence)
				if (characterInfo.skillBonuses["Knowledge (The Planes)"]){
					weight += characterInfo.skillBonuses["Knowledge (The Planes)"]
				}
				return Math.max(weight, 1)
			}
		},
		"Listen": {
			attribute: "Wisdom",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: true,
			determineWeight: function(characterInfo){
				let weight = 5
				weight += calculateModifier(characterInfo.wisdom)
				if (characterInfo.skillBonuses["Listen"]){
					weight += characterInfo.skillBonuses["Listen"]
				}
				for (var i = 0; i < characterInfo.features.length; i++){
					if (characterInfo.features[i].startsWith("Favored Enemy")){
						weight++
					}
				}
				return Math.max(weight, 1)
			}
		},
		"Move Silently": {
			attribute: "Dexterity",
			hasSubskills: false,
			armorCheckPenalty: true,
			doubleArmorCheckPenalty: false,
			allowedUntrained: true,
			determineWeight: function(characterInfo){
				let weight = 5
				weight += calculateModifier(characterInfo.dexterity)
				if (characterInfo.skillBonuses["Move Silently"]){
					weight += characterInfo.skillBonuses["Move Silently"]
				}
				return Math.max(weight, 1)
			}
		},
		"Open Lock": {
			attribute: "Dexterity",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false,
			determineWeight: function(characterInfo){
				let weight = 5
				weight += calculateModifier(characterInfo.dexterity)
				if (characterInfo.skillBonuses["Open Lock"]){
					weight += characterInfo.skillBonuses["Open Lock"]
				}
				return Math.max(weight, 1)
			}
		},
		"Perform": {
			attribute: "Charisma",
			hasSubskills: true,
			subskills: ["Act", "Comedy", "Dance", "Keyboard Instruments", "Oratory", "Percussion Instruments", "String Instruments", "Wind Instrument", "Sing"],
			armorCheckPenalty: false,
			allowedUntrained: true,
			determineWeight: function(characterInfo){
				let weight = 5
				let bonus = 0
				weight += calculateModifier(characterInfo.Charimsa)
				for (var property in characterInfo.skillBonuses){
					if (property.startsWith("Perform")){
						bonus += characterInfo.skillBonuses[property]
					}
				}
				weight += Math.floor(bonus/2)
				if (characterInfo.class === "Bard"){
					weight += 5
				}
				return Math.max(weight, 1)
			},
			determineSubskillWeight: function(characterInfo, subskill){
				let weight = 5
				if (characterInfo.skillBonuses["Perform (" + subskill + ")"]){
					weight += characterInfo.skillBonuses["Perform (" + subskill + ")"]
				}
				if (characterInfo.class === "Bard" && (subskill === "Keyboard Instruments" || subskill === "Percussion Instruments" || subskill === "String Instruments" || subskill === "Wind Instruments" || subskill === "Sing")){
					weight += 5
				}
				return Math.max(weight, 1)
			}
		},
		"Profession": {
			attribute: "Wisdom",
			hasSubskills: true,
			subskills: ["Apothecary", "Boater", "Bookkeeper", "Brewer", "Cook", "Driver", "Farmer", "Fisher", "Guide", "Herbalist", "Herder", "Hunter", "Innkeeper", "Lumberjack", "Miller", "Miner", "Porter", "Rancher", "Sailor", "Scribe", "Siege Engineer", "Stablehand", "Tanner", "Teamster", "Woodcutter"],
			armorCheckPenalty: false,
			allowedUntrained: false,
			determineWeight: function(characterInfo){
				let weight = 5
				let bonus = 0
				weight += calculateModifier(characterInfo.Wisdom)
				for (var property in characterInfo.skillBonuses){
					if (property.startsWith("Profession")){
						bonus += characterInfo.skillBonuses[property]
					}
				}
				weight += Math.floor(bonus/2)
				return weight
			},
			determineSubskillWeight: function(characterInfo, subskill){
				let weight = 5
				if (characterInfo.skillBonuses["Profession (" + subskill + ")"]){
					weight += characterInfo.skillBonuses["Profession (" + subskill + ")"]
				}
				if (subskill === "Miner" && characterInfo.race === "Dwarf"){
					weight += 5
				}
				return weight
			}
		},
		"Ride": {
			attribute: "Dexterity",
			hasSubskills: false,
			armorCheckPenalty: true,
			doubleArmorCheckPenalty: false,
			allowedUntrained: true,
			determineWeight: function(characterInfo){
				let weight = 5
				weight += calculateModifier(characterInfo.dexterity)
				if (characterInfo.skillBonuses["Ride"]){
					weight += characterInfo.skillBonuses["Ride"]
				}
				if (characterInfo.features.includes("Animal Companion: Light Horse") || characterInfo.features.includes("Animal Companion: Heavy Horse")){
					weight += 5
				}
				return Math.max(weight, 1)
			}
		},
		"Search": {
			attribute: "Intelligence",
			hasSubskills: false,
			armorCheckPenalty: false,
			doubleArmorCheckPenalty: false,
			allowedUntrained: true,
			determineWeight: function(characterInfo){
				let weight = 5
				if (characterInfo.features.includes("Trapfinding")){
					weight += 5
				}
				else if (characterInfo.features.includes("Stonecunning")){
					weight += 3
				}
				weight += calculateModifier(characterInfo.intelligence)
				if (characterInfo.skillBonuses["Search"]){
					weight += characterInfo.skillBonuses["Search"]
				}
				return Math.max(weight, 1)
			}
		},
		"Sense Motive": {
			attribute: "Wisdom",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: true,
			determineWeight: function(characterInfo){
				let weight = 5
				if (characterInfo.skillBonuses["Sense Motive"]){
					weight += characterInfo.skillBonuses["Sense Motive"]
				}
				weight += calculateModifier(characterInfo.wisdom)
				return Math.max(weight, 1)
			}
		},
		"Sleight of Hand": {
			attribute: "Dexterity",
			hasSubskills: false,
			armorCheckPenalty: true,
			doubleArmorCheckPenalty: false,
			allowedUntrained: false,
			determineWeight: function(characterInfo){
				let weight = 5;
				if (characterInfo.skillBonuses["Sleight of Hand"]){
					weight += characterInfo.skillBonuses["Sleight of Hand"]
				}
				weight += calculateModifier(characterInfo.dexterity)
				return Math.max(weight, 1)
			}
		},
		"Speak Languages": {
			attribute: "None",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false,
			determineWeight: function(characterInfo){
				return 5
			}
		},
		"Spellcraft": {
			attribute: "Intelligence",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false,
			determineWeight: function(characterInfo){
				let weight = 5
				if (classData[characterInfo.class].fullCaster){
					weight += 5
				}
				if (characterInfo.skillBonuses["Spellcraft"]){
					weight += characterInfo.skillBonuses["Spellcraft"]
				}
				weight += calculateModifier(characterInfo.intelligence)
				return Math.max(weight, 1)
			}
		},
		"Spot": {
			attribute: "Wisdom",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: true,
			determineWeight: function(characterInfo){
				let weight = 5
				if (characterInfo.skillBonuses["Spot"]){
					weight += characterInfo.skillBonuses["Spot"]
				}
				for (var i = 0; i < characterInfo.features.length; i++){
					if (characterInfo.features[i].startsWith("Favored Enemy")){
						weight++
					}
				}
				weight += calculateModifier(characterInfo.wisdom)
				return Math.max(weight, 1)
			}
		},
		"Survival": {
			attribute: "Wisdom",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: true,
			determineWeight: function(characterInfo){
				let weight = 5
				if (characterInfo.skillBonuses["Survival"]){
					weight += characterInfo.skillBonuses["Survival"]
				}
				if (characterInfo.featsKnown.includes("Track")){
					weight += 5
				}
				weight += calculateModifier(characterInfo.wisdom)
				return Math.max(weight, 1)
			}
		},
		"Swim": {
			attribute: "Strength",
			hasSubskills: false,
			armorCheckPenalty: true,
			doubleArmorCheckPenalty: true,
			allowedUntrained: true,
			determineWeight: function(characterInfo){
				let weight = 5;
				if (characterInfo.skillBonuses["Swim"]){
					weight += characterInfo.skillBonuses["Swim"]
				}
				weight += calculateModifier(characterInfo.strength)
				return Math.max(weight, 1)
			}
		},
		"Tumble": {
			attribute: "Dexterity",
			hasSubskills: false,
			armorCheckPenalty: true,
			doubleArmorCheckPenalty: true,
			allowedUntrained: false,
			determineWeight: function(characterInfo){
				let weight = 5;
				if (characterInfo.skillBonuses["Tumble"]){
					weight += characterInfo.skillBonuses["Tumble"]
				}
				weight += calculateModifier(characterInfo.dexterity)
				return Math.max(weight, 1)
			}
		},
		"Use Magic Device": {
			attribute: "Charisma",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false,
			determineWeight: function(characterInfo){
				let weight = 5
				if (characterInfo.skillBonuses["Use Magic Device"]){
					weight += characterInfo.skillBonuses["Use Magic Device"]
				}
				weight += calculateModifier(characterInfo.charisma)
				return Math.max(weight, 1)
			}
		},
		"Use Rope": {
			attribute: "Dexterity",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: true,
			determineWeight: function(characterInfo){
				let weight = 5
				if (characterInfo.skillBonuses["Use Rope"]){
					weight += characterInfo.skillBonuses["Use Rope"]
				}
				weight += calculateModifier(characterInfo.dexterity)
				return Math.max(weight, 1)
			}
		}
	}
