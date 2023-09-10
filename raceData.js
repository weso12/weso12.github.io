	const raceData = {
		"Human": {
			sourcebook: "Player's Handbook",
			size: "Medium",
			creatureType: "Humanoid",
			creatureSubtype: ["Human"],
			baseLandSpeed: 30,
			attributeMods: {
				Strength: 0,
				Dexterity: 0,
				Constitution: 0,
				Intelligence: 0,
				Wisdom: 0,
				Charisma: 0
			},
			assignRaceFeatures: function(characterInfo) {
				characterInfo.numberOfFeatstoLearn += 1;
				characterInfo.skillPoints += 4;
			},
			automaticLanguages: ["Common"],
			bonusLanguages: ["Any (Excluding Secret)"],
			favoredClass: "Any",
			hybridRace: false,
			adulthoodAge: 15,
			easyTrainingAge: function(){
				return Math.floor(Math.random() * 4) + 1
			},
			mediumTrainingAge: function(){
				return Math.floor(Math.random() * 6) + 1
			},
			hardTrainingAge: function(){
				return Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2
			},
			baseHeightMale: 58,
			baseHeightFemale: 53,
			heightModifierMale: function () {
				return Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + 2
			},
			heightModifierFemale: function () {
				return Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + 2
			},
			baseWeightMale: 120,
			baseWeightFemale: 85,
			weightModifierMale: function(){
				return Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + 2
			},
			weightModifierFemale: function(){
				return Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + 2
			},
			names: {
				maleNames: ["Aseir", "Bardied", "Haseid", "Khemed", "Mehmen", "Sudeiman", "Zasheir", "Darvin", "Dorn", "Evendur",
					"Gorstag", "Grim", "Helm", "Malark", "Morn", "Randal", "Steed", "Bor", "Fodel", "Glar", "Grigor", "Igan", "Ivor",
					"Kosef", "Mival", "Orel", "Pavel", "Sergor", "Ander", "Blath", "Bran", "Frath", "Geth", "Lander", "Luth", "Malcer",
					"Stor", "Taman", "Urth", "Aoth", "Barreris", "Ehput-Ki", "Kethoth", "Mumed", "Ramas", "So-Kehur", "Thazar-De",
					"Urhur", "Borivik", "Faurgar", "Jandar", "Kanithar", "Madislak", "Ralmevik", "Shaumar", "Vladislak", "An", "Chen",
					"Chi", "Fai", "Jiang", "Jun", "Lian", "Long", "Meng", "On", "Shan", "Shui", "Wen", "Anton", "Diero", "Marcon",
					"Pieron", "Romero", "Salazar", "Umbero"],
				femaleNames: ["Atala", "Ceidil", "Hama", "Jasmal", "Meilil", "Seipora", "Yasheira", "Zasheida", "Arveene", "Esvele",
					"Jhessail", "Kerri", "Lureene", "Miri", "Rowan", "Shandri", "Tessele", "Alethra", "Kara", "Katernin", "Mara",
					"Natali", "Olma", "Tana", "Zora", "Amafrey", "Betha", "Cefrey", "Kethra", "Mara", "Olga", "Silifrey", "Westra",
					"Arizima", "Chathi", "Nulara", "Murithi", "Sefris", "Thola", "Umara", "Zolis", "Fyevarra", "Hulmarra", "Immith",
					"Imzel", "Navarra", "Shevarra", "Tammith", "Yuldra", "Bai", "Chao", "Jia", "Lei", "Mei", "Qiao", "Shui", "Tai",
					"Balama", "Dona", "Faila", "Jalana", "Luisa", "Marta", "Quara", "Selise", "Vonda"],
				surname: ["Basha", "Dumein", "Jassan", "Khalid", "Mostana", "Pashar", "Rein", "Amblecrown", "Buckman", "Dundragon",
					"Evenwood", "Greycastle", "Tallstag", "Bersk", "Chernin", "Dotsk", "Kulenov", "Marsk", "Nemetsk", "Shemov",
					"Starag", "Brightwood", "Helder", "Hornraven", "Lackman", "Stormwind", "Windrivver", "Ankhalab", "Anskuld",
					"Fezim", "Hahpet", "Nathandem", "Sepret", "Uuthraki", "Chergoba", "Dyernina", "Iltazyara", "Murnyethara",
					"Stayanoga", "Ulmokina", "Chien", "Huang", "Kao", "Kung", "Lao", "Ling", "Mei", "Pin", "Shin", "Sum", "Tan",
					"Wan", "Agosto", "Astorio", "Calabra", "Domine", "Falone", "Marivaldi"]
			}
		},
		"Dwarf": {
			sourcebook: "Player's Handbook",
			size: "Medium",
			creatureType: "Humanoid",
			creatureSubtype: ["Dwarf"],
			baseLandSpeed: 20,
			attributeMods: {
				Strength: 0,
				Dexterity: 0,
				Constitution: 2,
				Intelligence: 0,
				Wisdom: 0,
				Charisma: -2
			},
			assignRaceFeatures: function(characterInfo){
				characterInfo.features.push("Can move at full speed in medium or heavy armor")
				characterInfo.features.push("Darkvision 60 feet")
				characterInfo.features.push("Stonecunning")
				characterInfo.features.push("Weapon Familiarity (Dwarven Waraxe)")
				characterInfo.features.push("Weapon Familiarity (Dwarven Urgrosh)")
				characterInfo.features.push("Stability")
				characterInfo.features.push("+2 racial bonus on saving throws against poison")
				characterInfo.features.push("+2 racial bonus on saving throws against spells and spell-like effects")
				characterInfo.features.push("+1 racial bonus on attack roll against Orcs and Goblinoids")
				characterInfo.features.push("+4 dodge bonus to Armor Class against giants")
				characterInfo.features.push("+2 racial bonus on Appraise checks related to stone or metal")
				characterInfo.features.push("+2 racial bonus on Craft checks that are related to stone or metal")
			},
			automaticLanguages: ["Common", "Dwarven"],
			bonusLanguages: ["Giant", "Gnome", "Goblin", "Orc", "Terran", "Undercommon"],
			favoredClass: "Fighter",
			hybridRace: false,
			adulthoodAge: 40,
			easyTrainingAge: function(){
				return Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 3
			},
			mediumTrainingAge: function(){
				return Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 5
			},
			hardTrainingAge: function(){
				return Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 7
			},
			baseHeightMale: 45,
			baseHeightFemale: 43,
			heightModifierMale: function () {
				return Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + 2
			},
			heightModifierFemale: function () {
				return Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + 2
			},
			baseWeightMale: 130,
			baseWeightFemale: 100,
			weightModifierMale: function(){
				return Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2
			},
			weightModifierFemale: function(){
				return Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2
			},
			names: {
				maleNames: ["Barendd", "Brottor", "Eberk", "Einkil", "Oskar", "Rurik", "Taklinn", "Ulfgar", "Veit"],
				femaleNames: ["Artin", "Audhild", "Dagnal", "Diesa", "Gunnloda", "Hlin", "Ilde", "Liftrasa", "Sannl", "Torgga"],
				surname: ["Balderk", "Dankil", "Gorunn", "Holderhek", "Loderr", "Lurgehr", "Rumnaheim", "Strakeln", "Torunn", "Ungart"]
			}
		},
		"Elf": {
			sourcebook: "Player's Handbook",
			size: "Medium",
			creatureType: "Humanoid",
			creatureSubtype: ["Elf"],
			baseLandSpeed: 30,
			attributeMods: {
				Strength: 0,
				Dexterity: 2,
				Constitution: -2,
				Intelligence: 0,
				Wisdom: 0,
				Charisma: 0
			},
			assignRaceFeatures: function(characterInfo){
				characterInfo.features.push("Immunity to magic sleep effects")
				characterInfo.features.push("+2 racial saving throw bonus against enchantment spells or effects")
				characterInfo.features.push("Low-Light Vision")
				if (!characterInfo.weaponProficiencies.allMartial){
					if (!characterInfo.weaponProficiencies["Longsword"]){
						characterInfo.weaponProficiencies["Longsword"] = true
					}
					if (!characterInfo.weaponProficiencies["Rapier"]){
						characterInfo.weaponProficiencies["Rapier"] = true
					}
					if (!characterInfo.weaponProficiencies["Longbow"]){
						characterInfo.weaponProficiencies["Longbow"] = true
					}
					if (!characterInfo.weaponProficiencies["Shortbow"]){
						characterInfo.weaponProficiencies["Shortbow"] = true
					}
				}
				if (!characterInfo.skillBonuses["Listen"]){
					characterInfo.skillBonuses["Listen"] = 2
				}
				else {
					characterInfo.skillBonuses["Listen"] += 2
				}
				if (!characterInfo.skillBonuses["Search"]){
					characterInfo.skillBonuses["Search"] = 2
				}
				else {
					characterInfo.skillBonuses["Search"] += 2
				}
				if (!characterInfo.skillBonuses["Spot"]){
					characterInfo.skillBonuses["Spot"] = 2
				}
				else {
					characterInfo.skillBonuses["Spot"] += 2
				}
				characterInfo.features.push("When passing within 5 feets of a secret or concealed entitled to a Search check to notice as if actively looking")
			},
			automaticLanguages: ["Common", "Elven"],
			bonusLanguages: ["Draconic", "Gnoll", "Gnome", "Goblin", "Orc", "Sylvan"],
			favoredClass: "Wizard",
			hybridRace: false,
			adulthoodAge: 110,
			easyTrainingAge: function(){
				return Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 4
			},
			mediumTrainingAge: function(){
				return Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 6
			},
			hardTrainingAge: function(){
				return Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 10
			},
			baseHeightMale: 53,
			baseHeightFemale: 53,
			heightModifierMale: function () {
				return Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2
			},
			heightModifierFemale: function () {
				return Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2
			},
			baseWeightMale: 85,
			baseWeightFemale: 80,
			weightModifierMale: function(){
				return Math.floor(Math.random() * 6) + 1
			},
			weightModifierFemale: function(){
				return Math.floor(Math.random() * 6) + 1
			},
			names: {
				maleNames: ["Aramil", "Aust", "Enailis", "Heian", "Himo", "Ivellios", "Laucian", "Quarion", "Soverliss", "Thamior", "Tharivol"],
				femaleNames: ["Anastrianna", "Antinua", "Drusilia", "Felosial", "Ielenia", "Lia", "Mialee", "Qillathe", "Siliqui", "Vanadia", "Valanthe", "Xanaphia"],
				surname: ["Amastacia", "Amakiir", "Galanodel", "Holimion", "Liadon", "Meliamne", "Nailo", "Siannodel", "Ilphukiir", "Xiloscient"]
			}
		},
		"Gnome": {
			sourcebook: "Player's Handbook",
			size: "Small",
			creatureType: "Humanoid",
			creatureSubtype: ["Gnome"],
			baseLandSpeed: 20,
			attributeMods: {
				Strength: -2,
				Dexterity: 0,
				Constitution: 2,
				Intelligence: 0,
				Wisdom: 0,
				Charisma: 0
			},
			assignRaceFeatures: function(characterInfo){
				characterInfo.features.push("Low-Light Vision")
				characterInfo.features.push("Weapon Familiarity (Gnome Hooked Hammer)")
				characterInfo.features.push("Racial Bonus against Illusion +2")
				characterInfo.features.push("+1 to Difficulty Class all saving throws cast")
				characterInfo.features.push("+1 Racial Bonus on attack rolls against Kobolds and Goblinoids")
				characterInfo.features.push("+4 dodge bonus to Armor Class against giants")
				grantSkillBonus(characterInfo, "Listen", 2)
				grantSkillBonus(characterInfo, "Hide", 4)
				grantSkillBonus(characterInfo, "Craft (Alchemy", 2)
				characterInfo.features.push("Spell-Like Ability: Speak with Animals (Burrowing Mammals), 1/day Duration 1 minute")
				if (characterInfo.charisma >= 10){
					characterInfo.features.push("Spell-Like Ability: Dancing Lights 1/day")
					characterInfo.features.push("Spell-Like Ability: Ghost Sound 1/day")
					characterInfo.features.push("Spell-Like Ability: Prestidigitation 1/day")
				}
			},
			automaticLanguages: ["Common", "Gnome"],
			bonusLanguages: ["Draconic","Dwarven", "Elven", "Giant", "Goblin", "Orc"],
			favoredClass: "Bard",
			hybridRace: false,
			adulthoodAge: 40,
			easyTrainingAge: function(){
				return Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 4
			},
			mediumTrainingAge: function(){
				return Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 6
			},
			hardTrainingAge: function(){
				return Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 9
			},
			baseHeightMale: 36,
			baseHeightFemale: 34,
			heightModifierMale: function () {
				return Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + 2
			},
			heightModifierFemale: function () {
				return Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + 2
			},
			baseWeightMale: 40,
			baseWeightFemale: 35,
			weightModifierMale: function(){
				return 1
			},
			weightModifierFemale: function(){
				return 1
			},
			names: {
				maleNames: ["Boddynock", "Dimble", "Fonkin", "Gimble", "Glim", "Gerbo", "Jebeddo", "Namfoodle", "Roondar", "Seebo", "Zook"],
				femaleNames: ["Bimpnottin", "Caramip", "Duvamil", "Ellywick", "Ellyjobell", "Loopmorrin", "Mardnab", "Roywyn", "Shamil", "Waywocker"],
				surname: ["Beren", "Daergel", "Folkor", "Garrick", "Nackle", "Murnig", "Ningel", "Raulnor", "Scheppen", "Turen"] 
			}
		},
		"Half-Elf": {
			sourcebook: "Player's Handbook",
			size: "Medium",
			creatureType: "Humanoid",
			creatureSubtype: ["Elf"],
			baseLandSpeed: 30,
			attributeMods: {
				Strength: 0,
				Dexterity: 0,
				Constitution: 0,
				Intelligence: 0,
				Wisdom: 0,
				Charisma: 0
			},
			assignRaceFeatures: function(characterInfo){
				characterInfo.features.push("Immunity to sleep spells")
				characterInfo.features.push("+2 racial saving throw bonus against enchantment spells or effects")
				characterInfo.features.push("Low-Light Vision")
				if (!characterInfo.skillBonuses["Listen"]){
					characterInfo.skillBonuses["Listen"] = 1
				}
				else {
					characterInfo.skillBonuses["Listen"] += 1
				}
				if (!characterInfo.skillBonuses["Search"]){
					characterInfo.skillBonuses["Search"] = 1
				}
				else {
					characterInfo.skillBonuses["Search"] += 1
				}
				if (!characterInfo.skillBonuses["Spot"]){
					characterInfo.skillBonuses["Spot"] = 1
				}
				else {
					characterInfo.skillBonuses["Spot"] += 1
				}
				if (!characterInfo.skillBonuses["Diplomacy"]){
					characterInfo.skillBonuses["Diplomacy"] = 2
				}
				else {
					characterInfo.skillBonuses["Diplomacy"] += 2
				}
				if (!characterInfo.skillBonuses["Gather Information"]){
					characterInfo.skillBonuses["Gather Information"] = 2
				}
				else {
					characterInfo.skillBonuses["Gather Information"] += 2
				}
			},
			automaticLanguages: ["Common", "Elven"],
			bonusLanguages: ["Any (Excluding Secret)"],
			favoredClass: "Any",
			hybridRace: true,
			parentRaces: ["Human", "Elf"],
			adulthoodAge: 20,
			easyTrainingAge: function(){
				return Math.floor(Math.random() * 6) + 1
			},
			mediumTrainingAge: function(){
				return Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2
			},
			hardTrainingAge: function(){
				return Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6)+ 3
			},
			baseHeightMale: 55,
			baseHeightFemale: 53,
			heightModifierMale: function () {
				return Math.floor(Math.random() * 8) + Math.floor(Math.random() * 8) + 2
			},
			heightModifierFemale: function () {
				return Math.floor(Math.random() * 8) + Math.floor(Math.random() * 8) + 2
			},
			baseWeightMale: 100,
			baseWeightFemale: 80,
			weightModifierMale: function(){
				return Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + 2
			},
			weightModifierFemale: function(){
				return Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + 2
			}
		},
		"Half-Orc": {
			sourcebook: "Player's Handbook",
			size: "Medium",
			creatureType: "Humanoid",
			creatureSubtype: ["Orc"],
			baseLandSpeed: 30,
			attributeMods: {
				Strength: 2,
				Dexterity: 0,
				Constitution: 0,
				Intelligence: -2,
				Wisdom: 0,
				Charisma: -2
			},
			assignRaceFeatures: function (characterInfo) {
				characterInfo.features.push("Darkvision")
			},
			automaticLanguages: ["Common", "Orc"],
			bonusLanguages: ["Draconic", "Giant", "Gnoll", "Goblin", "Abyssal"],
			favoredClass: "Barbarian",
			hybridRace: true,
			parentRaces: ["Human", "Orc"],
			adulthoodAge: 14,
			easyTrainingAge: function(){
				return Math.floor(Math.random() * 4) + 1
			},
			mediumTrainingAge: function(){
				return Math.floor(Math.random() * 6) + 1
			},
			hardTrainingAge: function(){
				return Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2
			},
			baseHeightMale: 58,
			baseHeightFemale: 53,
			heightModifierMale: function () {
				return Math.floor(Math.random() * 12) + Math.floor(Math.random() * 12) + 2
			},
			heightModifierFemale: function () {
				return Math.floor(Math.random() * 12) + Math.floor(Math.random() * 12) + 2
			},
			baseWeightMale: 150,
			baseWeightFemale: 110,
			weightModifierMale: function(){
				return Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2
			},
			weightModifierFemale: function(){
				return Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2
			}
		},
		"Halfling": {
			sourcebook: "Player's Handbook",
			size: "Small",
			creatureType: "Humanoid",
			creatureSubtype: ["Halfling"],
			baseLandSpeed: 20,
			attributeMods: {
				Strength: -2,
				Dexterity: 2,
				Constitution: 0,
				Intelligence: 0,
				Wisdom: 0,
				Charisma: 0
			},
			assignRaceFeatures: function (characterInfo) {
				if (!characterInfo.skillBonuses["Climb"]){
					characterInfo.skillBonuses["Climb"] = 2
				}
				else {
					characterInfo.skillBonuses["Climb"] += 2
				}
				if (!characterInfo.skillBonuses["Jump"]){
					characterInfo.skillBonuses["Jump"] = 2
				}
				else {
					characterInfo.skillBonuses["Jump"] += 2
				}
				if (!characterInfo.skillBonuses["Move Silently"]){
					characterInfo.skillBonuses["Move Silently"] = 2
				}
				else {
					characterInfo.skillBonuses["Move Silently"] += 2
				}
				grantSkillBonus(characterInfo, "Hide", 4)
				characterInfo.fortitude += 1
				characterInfo.reflex += 1
				characterInfo.will += 1
				characterInfo.features.push("+2 Morale Bonus on saving throws against fear")
				characterInfo.features.push("+1 racial bonus on attack rolls with thrown weapons and slings")
				if (characterInfo.skillBonuses["Listen"]){
					characterInfo.skillBonuses["Listen"] = 2
				}
				else {
					characterInfo.skillBonuses["Listen"] += 2
				}
			},
			automaticLanguages: ["Common", "Halfling"],
			bonusLanguages: ["Dwarven", "Elven", "Gnome", "Goblin", "Orc"],
			favoredClass: "Rogue",
			hybridRace: false,
			names: {
				maleNames: ["Alton", "Beau", "Cade", "Eldon", "Garret", "Lyle", "Milo", "Osborn", "Roscoe", "Wellby"],
				femaleNames: ["Amaryllis", "Charmaine", "Cora", "Euphemia", "Jillian", "Lavinia", "Lidda", "Merla", "Portia", "Seraphina", "Verna"],
				surname: ["Brushgather", "Goodbarrel", "Greenbottle", "Highhill", "Hilltopple", "Leagallow", "Tealeaf", "Thorngage", "Tosscobble", "Underbough"]
			},
			adulthoodAge: 20,
			easyTrainingAge: function(){
				return Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + 2
			},
			mediumTrainingAge: function(){
				return Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 3
			},
			hardTrainingAge: function(){
				return Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 4
			},
			baseHeightMale: 32,
			baseHeightFemale: 30,
			heightModifierMale: function () {
				return Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + 2
			},
			heightModifierFemale: function () {
				return Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + 2
			},
			baseWeightMale: 30,
			baseWeightFemale: 25,
			weightModifierMale: function(){
				return 1
			},
			weightModifierFemale: function(){
				return 1
			}
		},
		"Orc": {
			sourcebook: "Monster Manual",
			names: {
				maleNames: ["Dench", "Feng", "Gell", "Henk", "Holg", "Imsh", "Keth", "Krusk", "Ront", "Shump", "Thokk"],
				femaleNames: ["Baggi", "Emen", "Engong", "Myev", "Neega", "Ovak", "Ownka", "Shautha", "Vola", "Volen"],
				surname: []
			}
		}
	}
