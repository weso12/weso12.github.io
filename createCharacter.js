	function generateCharacter(){
		//Roll Abillity Scores
		while (true){
			var array = []
			var modifierSum = 0;
			for (var i = 0; i < 6; i++){
				array.push(roll4d6b3())
				modifierSum += calculateModifier(array[i])
			}
			if (modifierSum > 0 && Math.max(...array) > 13){
				break;
			}
		}
		var characterInfo = {};
		//Choose your Class and Race
		let ClassArray = Object.keys(classData)
		let RaceArray = []
		for (var property in raceData){
			if (raceData[property].sourcebook === "Player's Handbook"){
				RaceArray.push(property)
			}
		}
		characterInfo.class = ClassArray[Math.floor(Math.random() * ClassArray.length)]
		characterInfo.race = RaceArray[Math.floor(Math.random() * RaceArray.length)]
		//Assign and Adjust Ability Scores
		if (document.getElementById("weighattributes").checked){
			array.sort(function(a,b){return b-a})
			let attributeWeightArray = []
			for (var property in classData[characterInfo.class].attributeWeights){
				for (var i = 0; i < classData[characterInfo.class].attributeWeights[property]; i++){
					attributeWeightArray.push(property)
				}
			}
			for (var i = 0; i < 6; i++){
				let rolledAttribute = attributeWeightArray[Math.floor(Math.random() * attributeWeightArray.length)]
				characterInfo[rolledAttribute] = array[i]
				attributeWeightArray = attributeWeightArray.filter(a => a !== rolledAttribute)
			}
		}
		else {
			characterInfo.strength = array[0]
			characterInfo.dexterity = array[1]
			characterInfo.constitution = array[2]
			characterInfo.intelligence = array[3]
			characterInfo.wisdom = array[4]
			characterInfo.charisma = array[5]
		}
		characterInfo.numberOfFeatstoLearn = 1;
		characterInfo.fighterBonusFeatsToLearn = 0;
		characterInfo.alignment = ""
		characterInfo.features = [];
		characterInfo.skillBonuses = {};
		characterInfo.weaponProficiencies = {};
		characterInfo.armorProficiencies = {};
		characterInfo.featsKnown = [];
		characterInfo.equipment = []
		characterInfo.elligbleAlignments = ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"]
		//Raw Spells Known is used for like feat prerequistes and stuff to be easier to calculate.
		characterInfo.rawSpellsKnown = []
		for (var property in classData[characterInfo.class].weaponProficiency ){
			characterInfo.weaponProficiencies[property] = classData[characterInfo.class].weaponProficiency[property]
		}
		for (var property in classData[characterInfo.class].armorProficiency){
			characterInfo.armorProficiencies[property] = classData[characterInfo.class].armorProficiency[property]
		}
		characterInfo.strength += raceData[characterInfo.race].attributeMods.Strength
		characterInfo.dexterity += raceData[characterInfo.race].attributeMods.Dexterity
		characterInfo.constitution += raceData[characterInfo.race].attributeMods.Constitution
		characterInfo.intelligence += raceData[characterInfo.race].attributeMods.Intelligence
		if (characterInfo.intelligence < 3){
			characterInfo.intelligence = 3
		}
		characterInfo.wisdom += raceData[characterInfo.race].attributeMods.Wisdom
		characterInfo.charisma += raceData[characterInfo.race].attributeMods.Charisma
		while ((document.getElementById("basicfiltering").checked 
			&& classData[characterInfo.class].fullCaster && characterInfo[classData[characterInfo.class].castingAttribute.toLowerCase()] < 10) &&
			(characterInfo.class !== "Cleric" || !document.getElementById("basicfiltering").checked || calculateModifier(characterInfo.charisma) > -3)){
			var numbers = [0, 1, 2, 3, 4, 5]
			if (document.getElementById("weighattributes").checked){
				array.sort(function(a,b){return b-a})
				let attributeWeightArray = []
				for (var property in classData[characterInfo.class].attributeWeights){
					for (var i = 0; i < classData[characterInfo.class].attributeWeights[property]; i++){
						attributeWeightArray.push(property)
					}
				}
				for (var i = 0; i < 6; i++){
					let rolledAttribute = attributeWeightArray[Math.floor(Math.random() * attributeWeightArray.length)]
					characterInfo[rolledAttribute] = array[i]
					attributeWeightArray = attributeWeightArray.filter(a => a !== rolledAttribute)
				}
			}
			else {
				characterInfo.strength = array[numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0]]
				characterInfo.dexterity = array[numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0]]
				characterInfo.constitution = array[numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0]]
				characterInfo.intelligence = array[numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0]]
				characterInfo.wisdom = array[numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0]]
				characterInfo.charisma = array[numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0]]
			}
			characterInfo.strength += raceData[characterInfo.race].attributeMods.Strength
			characterInfo.dexterity += raceData[characterInfo.race].attributeMods.Dexterity
			characterInfo.constitution += raceData[characterInfo.race].attributeMods.Constitution
			characterInfo.intelligence += raceData[characterInfo.race].attributeMods.Intelligence
			if (characterInfo.intelligence < 3){
				characterInfo.intelligence = 3
			}
			characterInfo.wisdom += raceData[characterInfo.race].attributeMods.Wisdom
			characterInfo.charisma += raceData[characterInfo.race].attributeMods.Charisma
		}
		characterInfo.classSkills = []
		for (var i = 0; i < classData[characterInfo.class].classSkills.length; i++){
			characterInfo.classSkills.push(classData[characterInfo.class].classSkills[i])
		}
		characterInfo.hitPoints = Math.max(1, classData[characterInfo.class].hitDie + calculateModifier(characterInfo.constitution))
		characterInfo.initiative = calculateModifier(characterInfo.dexterity)
		characterInfo.skillPoints = classData[characterInfo.class].skillPoints + calculateModifier(characterInfo.intelligence);
		characterInfo.skillRanks = {}
		if (characterInfo.skillPoints < 1){
			characterInfo.skillPoints = 1
		}
		characterInfo.skillPoints *= 4
		//Record Racial and Class Features
		characterInfo.languagesKnown = []
		for (var i = 0; i < raceData[characterInfo.race].automaticLanguages.length; i++){
			characterInfo.languagesKnown.push(raceData[characterInfo.race].automaticLanguages[i])
		}
		characterInfo.potentionalLanguages = []
		if (raceData[characterInfo.race].bonusLanguages[0] === "Any (Excluding Secret)"){
			for (const property in languageData){
				if (!languageData[property].secretLanguage && !characterInfo.languagesKnown.includes(property)){
					characterInfo.potentionalLanguages.push(property)
				}
			}
		}
		else {
			for (var i = 0; i < raceData[characterInfo.race].bonusLanguages.length; i++){
				characterInfo.potentionalLanguages.push(raceData[characterInfo.race].bonusLanguages[i])
			}
		}
		if (classData[characterInfo.class].baseAttackBonus === "Good"){
			characterInfo.baseAttackBonus = 1
		}
		else {
			characterInfo.baseAttackBonus = 0
		}
		if (classData[characterInfo.class].fortitudeSave === "Poor"){
			characterInfo.fortitude = 0 + calculateModifier(characterInfo.constitution)
		}
		else {
			characterInfo.fortitude = 2 + calculateModifier(characterInfo.constitution)
		}
		if (classData[characterInfo.class].reflexSave === "Poor"){
			characterInfo.reflex = 0 + calculateModifier(characterInfo.dexterity)
		}
		else {
			characterInfo.reflex = 2 + calculateModifier(characterInfo.dexterity)
		}
		if (classData[characterInfo.class].willSave === "Poor"){
			characterInfo.will = 0 + calculateModifier(characterInfo.wisdom)
		}
		else {
			characterInfo.will = 2 + calculateModifier(characterInfo.wisdom)
		}
		raceData[characterInfo.race].assignRaceFeatures(characterInfo)
		classData[characterInfo.class].assignClassFeatures[1](characterInfo)
		//Select Skills
		//I'll do languages first because there is no clear step of where languages go and they are kind of skills
		for (var i = 0;	 i < calculateModifier(characterInfo.intelligence); i++){
			characterInfo.languagesKnown.push(characterInfo.potentionalLanguages.splice(Math.floor(Math.random() * characterInfo.potentionalLanguages.length), 1)[0])
			if (characterInfo.potentionalLanguages.length === 0){
				break;
			}
		}
		let skillRollArray = []
		for (var property in skillData){
			if (!characterInfo.features.includes("Illiteracy") || property !== "Forgery"){
				if (characterInfo.classSkills.includes(property)){
					for (var i = 0; i < parseInt(document.getElementById("classSkillWeight").value); i++){
						skillRollArray.push(property)
					}
				}
				else {
					for (var i = 0; i < parseInt(document.getElementById("crossClassSkillWeight").value); i++){
						skillRollArray.push(property)
					}
				}
			}
		}
		if (document.getElementById("maxlevel1skillranks").checked){
			while (characterInfo.skillPoints > 0){
				let rollResults = skillRollArray[Math.floor(Math.random() * skillRollArray.length)]
				if (rollResults === "Speak Languages"){
					let numberOfLanguagesToLearn;
					if (characterInfo.skillPoints === 1 && !characterInfo.classSkills.includes("Speak Languages")){
						while (skillRollArray.includes("Speak Languages")){
							let index = skillRollArray.indexOf("Speak Languages")
							skillRollArray.splice(index, 1)
						}
						continue;
					}
					else if (characterInfo.skillPoints < 4 && characterInfo.classSkills.includes("Speak Languages")){
						numberOfLanguagesToLearn = characterInfo.skillPoints
					}
					else if (characterInfo.skillPoints < 4){
						numberOfLanguagesToLearn = Math.floor(characterInfo.skillPoints/2)
					}
					else if (characterInfo.classSkills.includes("Speak Languages")){
						numberOfLanguagesToLearn = 4
					}
					else {
						numberOfLanguagesToLearn = 2
					}
					let languageArray = []
					for (var property in languageData){
						if (!languageData[property].secretLanguage && !characterInfo.languagesKnown.includes(property)) {
							languageArray.push(property)
						}
					}
					if (languageArray.length === 0){
						while (skillRollArray.includes("Speak Languages")){
							let index = skillRollArray.indexOf("Speak Languages")
							skillRollArray.splice(index, 1)
						}
					}
					else {
						for (var i = 0; i < numberOfLanguagesToLearn; i++){
							characterInfo.languagesKnown.push(languageArray.splice(Math.floor(Math.random() * languageArray.length), 1)[0])
							if (!characterInfo.skillRanks["Speak Languages"]){
								characterInfo.skillRanks["Speak Languages"] = 1;
							}
							else {
								characterInfo.skillRanks["Speak Languages"]++;
							}
							if (characterInfo.classSkills.includes("Speak Languages")){
								characterInfo.skillPoints -= 1;
							}
							else {
								characterInfo.skillPoints -= 2
							}
						}
						while (skillRollArray.includes("Speak Languages")){
							let index = skillRollArray.indexOf("Speak Languages")
							skillRollArray.splice(index, 1)
						}
					}
				}
				else if (skillData[rollResults].hasSubskills){
					let subskillArray = []
					for (var i = 0; i < skillData[rollResults].subskills.length; i++){
						if (!characterInfo.skillRanks[property + " (" + skillData[rollResults].subskills[i] + ")"]
							&& (!document.getElementById("basicfiltering").checked || 
							!(rollResults === "Craft" && skillData[rollResults].subskills[i] === "Alchemy") ||
							classData[characterInfo.class].fullCaster)){
							subskillArray.push(skillData[rollResults].subskills[i])
						}
					}
					if (subskillArray.length === 0){
						while (skillRollArray.includes(rollResults)){
							let index = skillRollArray.indexOf(rollResults)
							skillRollArray.splice(index, 1)
						}
					}
					let subskillRoll = subskillArray[Math.floor(Math.random() * subskillArray.length)]
					if (characterInfo.skillPoints < 4 && characterInfo.classSkills.includes(rollResults)){
						characterInfo.skillRanks[rollResults + " (" + subskillRoll + ")"] = characterInfo.skillPoints
						characterInfo.skillPoints = 0
					}
					else if (characterInfo.skillPoints < 4) {
						characterInfo.skillRanks[rollResults + " (" + subskillRoll + ")"] = characterInfo.skillPoints/2;
						characterInfo.skillPoints = 0
					}
					else if (characterInfo.classSkills.includes(rollResults)){
						characterInfo.skillRanks[rollResults + " (" + subskillRoll + ")"] = 4;
						characterInfo.skillPoints -= 4;
					}
					else {
						characterInfo.skillRanks[rollResults + " (" + subskillRoll + ")"] = 2;
						characterInfo.skillPoints -= 4;
					}
				}
				else {
					if (characterInfo.skillPoints < 4 && characterInfo.classSkills.includes(rollResults)){
						characterInfo.skillRanks[rollResults] = characterInfo.skillPoints
						characterInfo.skillPoints = 0
					}
					else if (characterInfo.skillPoints < 4) {
							characterInfo.skillPoints[rollResults] = characterInfo.skillPoints/2;
							characterInfo.skillPoints = 0
					}
					else if (characterInfo.classSkills.includes(rollResults)){
								characterInfo.skillRanks[rollResults] = 4;
								characterInfo.skillPoints -= 4;
							}
					else {
						characterInfo.skillRanks[rollResults] = 2;
						characterInfo.skillPoints -= 4;
					}
					while (skillRollArray.includes(rollResults)){
						let index = skillRollArray.indexOf(rollResults)
						skillRollArray.splice(index, 1)
					}
				}
			}
		} 
		else {
			while (characterInfo.skillPoints > 0){
				let rollResults = skillRollArray[Math.floor(Math.random() * skillRollArray.length)]
				if (rollResults === "Speak Languages"){
					if (characterInfo.skillPoints === 1 && !characterInfo.classSkills.includes("Speak Languages")){
						while (skillRollArray.includes(rollResults)){
							let index = skillRollArray.indexOf(rollResults)
							skillRollArray.splice(index, 1)
						}
					}
					else {
						let languageArray = []
						for (var property in languageData){
							if (!languageData[property].secretLanguage &&!characterInfo.languagesKnown.includes(property)) {
								languageArray.push(property)
							}
						}
						characterInfo.languagesKnown.push(languageArray.splice(Math.floor(Math.random() * languageArray.length), 1)[0])
						if (characterInfo.skillRanks["Speak Languages"]){
							characterInfo.skillRanks["Speak Languages"]++
						}
						else {
							characterInfo.skillRanks["Speak Languages"] = 1
						}
						if (characterInfo.classSkills.includes("Speak Languages")){
							characterInfo.skillPoints--;
						}
						else {
							characterInfo.skillPoints -= 2;
						}
						if (languageArray.length === 0 || (characterInfo.skillRanks["Speak Languages"] === 4 && characterInfo.classSkills.includes("Speak Languages")) || (characterInfo.skillRanks["Speak Languages"] === 2 & !characterInfo.classSkills.includes("Speak Languages"))){
							while (skillRollArray.includes(rollResults)){
								let index = skillRollArray.indexOf(rollResults)
								skillRollArray.splice(index, 1)
							}
						}
					}
				}
				else if (skillData[rollResults].hasSubskills){
					let subskillArray = []
					for (var i = 0; i < skillData[rollResults].subskills.length; i++){
						if ((!characterInfo.skillRanks[rollResults + " (" + skillData[rollResults].subskills[i] + ")"] || 
							characterInfo.skillRanks[rollResults + " (" + skillData[rollResults].subskills[i] + ")"] < 4)
							&& (!document.getElementById("basicfiltering").checked || 
							!(rollResults === "Craft" && skillData[rollResults].subskills[i] === "Alchemy") ||
							classData[characterInfo.class].fullCaster)){
							subskillArray.push(skillData[rollResults].subskills[i])
						}
					}
					if (subskillArray.length === 0){
						while (skillRollArray.includes(rollResults)){
							let index = skillRollArray.indexOf(rollResults)
							skillRollArray.splice(index, 1)
						}
					}
					else {
						let subskillRoll = subskillArray[Math.floor(Math.random() * subskillArray.length)]
						if (!characterInfo.skillRanks[rollResults + " (" + skillData[rollResults].subskills[i] + ")"] && characterInfo.classSkills.includes(rollResults)){
							characterInfo.skillRanks[rollResults + " (" + subskillRoll + ")"] = 1
						}
						else if (!characterInfo.skillRanks[rollResults + " (" + skillData[rollResults].subskills[i] + ")"]){
							characterInfo.skillRanks[rollResults + " (" + subskillRoll + ")"] = 0.5
						}
						else if (!document.getElementById("halfskillranks").checked) {
							characterInfo.skillRanks[rollResults + " (" + subskillRoll + ")"]++
						}
						else {
							characterInfo.skillRanks[rollResults + " (" + subskillRoll + ")"] += 0.5
						}
						characterInfo.skillPoints--;
					}
				}
				else {
					if (!characterInfo.skillRanks[rollResults] && characterInfo.classSkills.includes(rollResults)){
						characterInfo.skillRanks[rollResults] = 1
					}
					else if (!characterInfo.skillRanks[rollResults]){
						characterInfo.skillRanks[rollResults] = 0.5
					}
					else if (characterInfo.classSkills.includes(rollResults)) {
						characterInfo.skillRanks[rollResults]++
					}
					else {
						characterInfo.skillRanks[rollResults] += 0.5
					}
					characterInfo.skillPoints--;
					if ((characterInfo.skillRanks[rollResults] === 4 && ClassSkills.includes(rollResults)) || (characterInfo.skillRanks[rollResults] === 2 && characterInfo.classSkills.includes(rollResults))){
						while (skillRollArray.includes(rollResults)){
							let index = skillRollArray.indexOf(rollResults)
							skillRollArray.splice(index, 1)
						}
					}
				}
			}
		}

		if (characterInfo.class === "Bard" && !characterInfo.features.includes("Countersong")){
			for (var property in characterInfo.skillRanks){
				if (property.startsWith("Perform") && characterInfo.skillRanks[property] >= 3){
					characterInfo.features.push("Countersong")
					characterInfo.features.push("Fascinate")
					characterInfo.features.push("Inspire Courage +1")
					break;
				}
			}
		}
		//Select a Feat
		for (var i = 0; i < characterInfo.numberOfFeatstoLearn; i++){
			let featArray = []
			for (var property in featData){
				if (featData[property].hasSubfeats && !featData[property].stacking){
					var test = false
					let subfeatsToCheck = featData[property].generateSubfeats(characterInfo)
					for (var j = 0; j < subfeatsToCheck.length; j++){
						if (!characterInfo.featsKnown.includes(property + " (" + subfeatsToCheck[j] + ")")){
							test = true;
							break;
						}
					}
				}
				if (featData[property].canLearn(characterInfo) && (!document.getElementById("basicfiltering").checked || featData[property].commonSenseCheck(characterInfo)) &&
				(featData[property].stacking || featData[property].hasSubfeats || !characterInfo.featsKnown.includes(property)) &&
				((!featData[property].hasSubfeats || !featData[property].stacking) || test)){
					if (document.getElementById("weighfeats")){
						let weight = featData[property].determineWeight(characterInfo)
						for (var j = 0; j < weight; j++){
							featArray.push(property)
						}
					}
					else {
						featArray.push(property)
					}
				}
			}
			let featChosen = featArray[Math.floor(Math.random() * featArray.length)]
			if (featData[featChosen].hasSubfeats){
				let subfeatarray = []
				let subfeatsToCheck2 = featData[featChosen].generateSubfeats(characterInfo)
				for (var j = 0; j < subfeatsToCheck2.length; j++){
					if (!characterInfo.featsKnown.includes(property + " (" + subfeatsToCheck2[j] + ")") || featData[featChosen].stacking){
						if (document.getElementById("weighfeats").checked){

							let weight = featData[featChosen].determineSubfeatWeight(characterInfo, subfeatsToCheck2[j])
							for (var k = 0; k < weight; k++){
								subfeatarray.push(subfeatsToCheck2[j])
							}
						}
						else {
							subfeatarray.push(subfeatsToCheck2[j]);
						}
					}
				}
				let subfeatRolled = subfeatarray[Math.floor(Math.random() * subfeatarray.length)]
				addFeat(characterInfo, featChosen, subfeatRolled)
			}
			else {
				addFeat(characterInfo, featChosen)
			}
		}
		for (var i = 0; i < characterInfo.fighterBonusFeatsToLearn; i++){
			let featArray = []
				for (var property in featData){
				if (featData[property].hasSubfeats && !featData[property].stacking){
					var test = false
					let subfeatsToCheck = featData[property].generateSubfeats(characterInfo)
					for (var j = 0; j < subfeatsToCheck.length; j++){
						if (!characterInfo.featsKnown.includes(property + " (" + subfeatsToCheck[j] + ")")){
							test = true;
							break;
						}
					}
				}
				if (featData[property].canLearn(characterInfo) && (!document.getElementById("basicfiltering").checked || featData[property].commonSenseCheck(characterInfo)) &&
				(featData[property].stacking || featData[property].hasSubfeats || !characterInfo.featsKnown.includes(property)) &&
				((!featData[property].hasSubfeats && !featData[property].stacking) || test) &&
				featData[property].fighterBonusFeat){
					if (document.getElementById("weighfeats")){
						let weight = featData[property].determineWeight(characterInfo)
						for (var j = 0; j < weight; j++){
							featArray.push(property)
						}
					}
					else {
						featArray.push(property)
					}				}
			}
			let featChosen = featArray[Math.floor(Math.random() * featArray.length)]
			if (featData[featChosen].hasSubfeats){
				let subfeatarray = []
				let subfeatsToCheck2 = featData[featChosen].generateSubfeats(characterInfo)
				for (var j = 0; j < subfeatsToCheck2.length; j++){
					if (!characterInfo.featsKnown.includes(property + " (" + subfeatsToCheck2[j] + ")") || featData[featChosen].stacking){
						if (document.getElementById("weighfeats")){
							let weight = featData[featChosen].determineSubfeatWeight(characterInfo, subfeatsToCheck2[j])
							for (var k = 0; k < weight; k++){
								subfeatarray.push(subfeatsToCheck2[j])
							}
						}
						else {
							subfeatarray.push(subfeatsToCheck2[j]);
						}
					}
				}
				let subfeatRolled = subfeatarray[Math.floor(Math.random() * subfeatarray.length)]
				addFeat(characterInfo, featChosen, subfeatRolled)
			}
			else {
				addFeat(characterInfo, featChosen)
			}
		}
		//Detials, Detials, Detials
		characterInfo.isFemale = false
		if (Math.floor(Math.random() * 2) === 1){
			characterInfo.isFemale = true
		}
		let firstNameRace;
		let surnameRace;
		if (raceData[characterInfo.race].hybridRace){
			firstNameRace = raceData[characterInfo.race].parentRaces[Math.floor(Math.random() * raceData[characterInfo.race].parentRaces.length)]
			surnameRace = raceData[characterInfo.race].parentRaces[Math.floor(Math.random() * raceData[characterInfo.race].parentRaces.length)]
		}
		else {
			firstNameRace = characterInfo.race
			surnameRace = characterInfo.race
		}
		if (characterInfo.isFemale){
			characterInfo.name = raceData[firstNameRace].names.femaleNames[Math.floor(Math.random() * raceData[firstNameRace].names.femaleNames.length)]
		}
		else {
			characterInfo.name = raceData[firstNameRace].names.maleNames[Math.floor(Math.random() * raceData[firstNameRace].names.maleNames.length)]
		}
		if (raceData[surnameRace].names.surname.length > 0){
			characterInfo.name += " " + raceData[surnameRace].names.surname[Math.floor(Math.random() * raceData[surnameRace].names.surname.length)]
		}
		if (classData[characterInfo.class].trainingAge === "Easy"){
			characterInfo.age = raceData[characterInfo.race].adulthoodAge + raceData[characterInfo.race].easyTrainingAge()
		}
		else if (classData[characterInfo.class].trainingAge === "Medium"){
			characterInfo.age = raceData[characterInfo.race].adulthoodAge + raceData[characterInfo.race].mediumTrainingAge()
		}
		else if (classData[characterInfo.class].trainingAge === "Hard"){
			characterInfo.age = raceData[characterInfo.race].adulthoodAge + raceData[characterInfo.race].hardTrainingAge()
		}
		let heightRoll
		if (characterInfo.isFemale){
			heightRoll = raceData[characterInfo.race].heightModifierFemale()
			characterInfo.height = raceData[characterInfo.race].baseHeightFemale + heightRoll
			characterInfo.weight = raceData[characterInfo.race].baseWeightFemale + (heightRoll * raceData[characterInfo.race].weightModifierFemale())
		}
		else {
			heightRoll = raceData[characterInfo.race].heightModifierMale()
			characterInfo.height = raceData[characterInfo.race].baseHeightMale + heightRoll
			characterInfo.weight = raceData[characterInfo.race].baseWeightMale + (heightRoll * raceData[characterInfo.race].weightModifierMale())
		}
		if (classData[characterInfo.class].hasAlignmentRestrictions){
			narrowAlignment(characterInfo, classData[characterInfo.class].allowedAlignments)
		}
		if (characterInfo.alignment === ""){
			characterInfo.alignment = characterInfo.elligbleAlignments[Math.floor(Math.random() * characterInfo.elligbleAlignments.length)]
		}
		if (classData[characterInfo.class].fullCaster && classData[characterInfo.class].spellsAlignmentRestricted && characterInfo[classData[characterInfo.class].castingAttribute.toLowerCase()] >= 10){
			for (var i = 0; i < characterInfo.spells[characterInfo.class].length; i++){
				for (var j = 0; j < characterInfo.spells[characterInfo.class][i].length; j++){
					if ((characterInfo.alignment === "Lawful Good" && (spellData[characterInfo.spells[characterInfo.class][i][j]].descriptor.includes("Evil") || spellData[characterInfo.spells[characterInfo.class][i][j]].descriptor.includes("Chaotic"))) ||
						(characterInfo.alignment === "Neutral Good" && spellData[characterInfo.spells[characterInfo.class][i][j]].descriptor.includes("Evil")) ||
						(characterInfo.alignment === "Chaotic Good" &&(spellData[characterInfo.spells[characterInfo.class][i][j]].descriptor.includes("Evil") || spellData[characterInfo.spells[characterInfo.class][i][j]].descriptor.includes("Lawful"))) ||
						(characterInfo.alignment === "Lawful Neutral" && spellData[characterInfo.spells[characterInfo.class][i][j]].descriptor.includes("Chaos")) ||
						(characterInfo.alignment === "Chaotic Neutral" && spellData[characterInfo.spells[characterInfo.class][i][j]].descriptor.includes("Lawful")) ||
						(characterInfo.alignment === "Lawful Evil" && (spellData[characterInfo.spells[characterInfo.class][i][j]].descriptor.includes("Good") || spellData[characterInfo.spells[characterInfo.class][i][j]].descriptor.includes("Chaotic"))) ||
						(characterInfo.alignment === "Neutral Evil" && spellData[characterInfo.spells[characterInfo.class][i][j]].descriptor.includes("Good")) ||
						(characterInfo.alignment === "Chaotic Evil" && (spellData[characterInfo.spells[characterInfo.class][i][j]].descriptor.includes("Good") || spellData[characterInfo.spells[characterInfo.class][i][j]].descriptor.includes("Lawful")))){
						let index = characterInfo.rawSpellsKnown.indexOf(characterInfo.spells[characterInfo.class][i][j])
						if (index > -1){
							characterInfo.rawSpellsKnown.splice(index, 1)
						}
						characterInfo.spells[characterInfo.class][i][j] = "Mark for Delete"
					}
				}
				while (characterInfo.spells[characterInfo.class][i].includes("Mark for Delete")){
					let index = characterInfo.spells[characterInfo.class][i].indexOf("Mark for Delete")
					if (index > -1){
						characterInfo.spells[characterInfo.class][i].splice(index, 1)
					}
				}
			}
		}
		let span = document.getElementById("CharacterInfo")
		span.innerHTML = ""
		let table = document.createElement("TABLE")
		span.appendChild(table)
		let characterNameRow = document.createElement("TR")
		let characterNameCell = document.createElement("TD")
		characterNameCell.colSpan = "6"
		characterNameCell.style.width = "600 px"
		characterNameCell.appendChild(document.createTextNode("Name: " + characterInfo.name))
		characterNameRow.appendChild(characterNameCell)
		characterNameRow.style.border = "1px solid black"
		characterNameRow.style.borderCollapse = "collapse"
		characterNameCell.style.border = "1px solid black"
		characterNameCell.style.borderCollapse = "collapse"
		table.appendChild(characterNameRow)
		table.style.border = "2px solid black"
		table.style.borderCollapse = "collapse"
		table.style.tableLayout = "fixed"
		table.style.width = "702px"
		let coreInfoRow = document.createElement("TR")
		let classAndLevelCell = document.createElement("TD")
		coreInfoRow.style.border = "2px solid black"
		coreInfoRow.style.borderCollapse = "collapse"
		classAndLevelCell.appendChild(document.createTextNode("Class: " + characterInfo.class + " 1"))
		classAndLevelCell.style.border = "2px solid black"
		classAndLevelCell.style.borderCollapse = "collapse"
		classAndLevelCell.colSpan = "2"
		coreInfoRow.appendChild(classAndLevelCell)
		let raceCell = document.createElement("TD")
		raceCell.appendChild(document.createTextNode("Race: " + characterInfo.race))
		raceCell.style.border = "2px solid black"
		raceCell.style.borderCollapse = "collapse"
		if (characterInfo.class !== "Cleric"){
			raceCell.colSpan = "2"
		}
		coreInfoRow.appendChild(raceCell)
		let alignmentCell = document.createElement("TD")
		alignmentCell.appendChild(document.createTextNode("Alignment: " + characterInfo.alignment))
		alignmentCell.style.border = "2px solid black";
		alignmentCell.style.borderCollapse = "collapse";
		alignmentCell.colSpan = "2"
		alignmentCell.style.width = "200 px"
		coreInfoRow.appendChild(alignmentCell)
		if (characterInfo.class === "Cleric"){
			let dietyCell = document.createElement("TD")
			dietyCell.appendChild(document.createTextNode("Diety: " + characterInfo.godWorshiped))
			dietyCell.style.border = "2px solid black";
			dietyCell.style.borderCollapse = "collapse";
			dietyCell.style.width = "100 px"
			coreInfoRow.appendChild(dietyCell)
		}
		table.appendChild(coreInfoRow)
		let descriptionRow = document.createElement("TR")
		descriptionRow.style.border = "2px solid black"
		descriptionRow.style.borderCollapse = "collapse"
		let hitPointsCell = document.createElement("TD")
		hitPointsCell.appendChild(document.createTextNode("HP: " + characterInfo.hitPoints))
		hitPointsCell.style.border = "2px solid black"
		hitPointsCell.style.borderCollapse = "collapse"
		descriptionRow.appendChild(hitPointsCell)
		let initativeCell = document.createElement("TD")
		initativeCell.appendChild(document.createTextNode("Initiative: " + characterInfo.initiative))
		initativeCell.style.border = "2px solid black"
		initativeCell.style.borderCollapse = "collapse"
		descriptionRow.appendChild(initativeCell)
		let sizeCell = document.createElement("TD")
		sizeCell.appendChild(document.createTextNode("Size: " + raceData[characterInfo.race].size))
		sizeCell.style.border = "2px solid black"
		sizeCell.style.borderCollapse = "collapse"
		descriptionRow.appendChild(sizeCell)
		let ageCell = document.createElement("TD")
		ageCell.appendChild(document.createTextNode("Age: " + characterInfo.age))
		ageCell.style.border = "2px solid black"
		ageCell.style.borderCollapse = "collapse"
		descriptionRow.appendChild(ageCell)
		let heightCell = document.createElement("TD")
		heightCell.appendChild(document.createTextNode("Height: " + Math.floor(characterInfo.height /12) + "'" + characterInfo.height % 12 + '"'))
		heightCell.style.border = "2px solid black";
		heightCell.style.borderCollapse = "collapse"
		descriptionRow.appendChild(heightCell)
		let weightCell = document.createElement("TD")
		weightCell.appendChild(document.createTextNode("Weight: " + characterInfo.weight + " lbs."))
		weightCell.style.border = "2px solid black";
		weightCell.style.borderCollapse = "collapse"
		descriptionRow.appendChild(weightCell)
		table.appendChild(descriptionRow)
		let attributeRow = document.createElement("TR")
		attributeRow.style.border = "2px solid black"
		attributeRow.style.borderCollapse = "collapse"
		let attributeCell = document.createElement("TD")
		attributeCell.style.border = "2px solid black"
		attributeCell.style.borderCollapse = "collapse"
		if (calculateModifier(characterInfo.strength) >= 0){
			attributeCell.appendChild(document.createTextNode("Strength: " + characterInfo.strength + " (+" + calculateModifier(characterInfo.strength) + ")"))
		}
		else{
			attributeCell.appendChild(document.createTextNode("Strength: " + characterInfo.strength + " (" + calculateModifier(characterInfo.strength) + ")"))
		}
		attributeCell.appendChild(document.createElement("BR"))
		if (calculateModifier(characterInfo.dexterity) >= 0){
			attributeCell.appendChild(document.createTextNode("Dexterity: " + characterInfo.dexterity + " (+" + calculateModifier(characterInfo.dexterity) + ")"))
		}
		else {
			attributeCell.appendChild(document.createTextNode("Dexterity: " + characterInfo.dexterity + " (" + calculateModifier(characterInfo.dexterity) + ")"))
		}
		attributeCell.appendChild(document.createElement("BR"))
		if (calculateModifier(characterInfo.constitution) >= 0){
			attributeCell.appendChild(document.createTextNode("Constitution: " + characterInfo.constitution + " (+" + calculateModifier(characterInfo.constitution) + ")"))
		}
		else {
			attributeCell.appendChild(document.createTextNode("Constitution: " + characterInfo.constitution + " (" + calculateModifier(characterInfo.constitution) + ")"))
		}
		attributeCell.appendChild(document.createElement("BR"))
		if (calculateModifier(characterInfo.intelligence) >= 0){
			attributeCell.appendChild(document.createTextNode("Intelligence: " + characterInfo.intelligence + " (+" + calculateModifier(characterInfo.intelligence) + ")"))
		}
		else {
			attributeCell.appendChild(document.createTextNode("Intelligence: " + characterInfo.intelligence + " (" + calculateModifier(characterInfo.intelligence) + ")"))
		}
		attributeCell.appendChild(document.createElement("BR"))
		if (calculateModifier(characterInfo.wisdom) >= 0){
			attributeCell.appendChild(document.createTextNode("Wisdom: " + characterInfo.wisdom + " (+" + calculateModifier(characterInfo.wisdom) + ")"))
		}
		else {
			attributeCell.appendChild(document.createTextNode("Wisdom: " + characterInfo.wisdom + " (" + calculateModifier(characterInfo.wisdom) + ")"))
		}
		attributeCell.appendChild(document.createElement("BR"))
		if (calculateModifier(characterInfo.charisma) >= 0){
			attributeCell.appendChild(document.createTextNode("Charisma: " + characterInfo.charisma + " (+" + calculateModifier(characterInfo.charisma) + ")"))
		}
		else {
			attributeCell.appendChild(document.createTextNode("Charisma: " + characterInfo.charisma + " (" + calculateModifier(characterInfo.charisma) + ")"))
		}
		attributeCell.colSpan = "6"
		attributeRow.appendChild(attributeCell)
		table.appendChild(attributeRow)
		let savesRow = document.createElement("TR")
		savesRow.style.border = "2px solid black"
		savesRow.style.borderCollapse = "collapse"
		let savesCell = document.createElement("TD")
		savesCell.appendChild(document.createTextNode("Fortitude: " + characterInfo.fortitude))
		savesCell.appendChild(document.createElement("BR"))
		savesCell.appendChild(document.createTextNode("Reflex: " + characterInfo.reflex))
		savesCell.appendChild(document.createElement("BR"))
		savesCell.appendChild(document.createTextNode("Will: " + characterInfo.will))
		savesRow.appendChild(savesCell)
		table.appendChild(savesRow)
		let skillHeaderRow = document.createElement("TR")
		let classSkillMainCell = document.createElement("TD")
		classSkillMainCell.appendChild(document.createTextNode("Class Skill"))
		skillHeaderRow.appendChild(classSkillMainCell)
		let skillNameCell = document.createElement("TD")
		skillNameCell.appendChild(document.createTextNode("Skills"))
		skillNameCell.style.border = "1px solid black"
		skillNameCell.style.borderCollapse = "collapse"
		skillHeaderRow.appendChild(skillNameCell)
		let abilityCell = document.createElement("TD")
		abilityCell.appendChild(document.createTextNode("Ability Mod"))
		abilityCell.style.textAlign = "center"	
		abilityCell.style.border = "1px solid black"
		abilityCell.style.borderCollapse = "collapse"
		skillHeaderRow.appendChild(abilityCell)
		let ranksCell = document.createElement("TD")
		ranksCell.appendChild(document.createTextNode("Ranks"))
		ranksCell.style.textAlign = "center"	
		ranksCell.style.border = "1px solid black"
		ranksCell.style.borderCollapse = "collapse"
		skillHeaderRow.appendChild(ranksCell)
		let miscCell = document.createElement("TD")
		miscCell.appendChild(document.createTextNode("Misc. Mod"))
		miscCell.style.border = "1px solid black"
		miscCell.style.borderCollapse = "collapse"
		miscCell.style.textAlign = "center"
		skillHeaderRow.appendChild(miscCell)
		let bold = document.createElement("B")
		let skillModCell = document.createElement("TD")
		skillModCell.appendChild(document.createTextNode("Skill Mod"))
		skillModCell.style.border = "1px solid black"
		skillModCell.style.textAlign = "center"
		skillModCell.style.borderCollapse = "collapse"
		skillHeaderRow.appendChild(skillModCell)
		table.appendChild(skillHeaderRow)
		let knowledgeInclusionArray = []
		let knowledgeClassSkillsNoRanksOrBonuses = 0;
		let knowledgeCrossClassSkillsNoRanksOrBonuses = 0
		for (var property in skillData){
			if (property.startsWith("Knowledge") && ((characterInfo.skillRanks[property] && characterInfo.skillRanks[property] > 0) || (characterInfo.skillBonuses[property] && characterInfo.skillBonuses[property] !== 0))){
				knowledgeInclusionArray.push(property)
			}
			else if (property.startsWith("Knowledge") && characterInfo.classSkills.includes(property)){
				knowledgeClassSkillsNoRanksOrBonuses++
			}
			else if (property.startsWith("Knowledge")){
				knowledgeCrossClassSkillsNoRanksOrBonuses++
			}
		}
		if (knowledgeClassSkillsNoRanksOrBonuses < knowledgeCrossClassSkillsNoRanksOrBonuses){
			for (var property in skillData){
				if (property.startsWith("Knowledge") && characterInfo.classSkills.includes(property) && !knowledgeInclusionArray.includes(property)){
					knowledgeInclusionArray.push(property)
				}
			}
		}
		else {
			for (var property in skillData){
				if (property.startsWith("Knowledge") && !characterInfo.classSkills.includes(property) && !knowledgeInclusionArray.includes(property)){
					knowledgeInclusionArray.push(property)
				}
			}
		}
		//If their is only one class or cross-class skill that isn't included normally, their's no point in making an 'other' category so it gets included
		if (knowledgeClassSkillsNoRanksOrBonuses === 1){
			for (var property in skillData){
				if (property.startsWith("Knowledge") && characterInfo.classSkills.includes(property) && !knowledgeInclusionArray.includes(property)){
					knowledgeInclusionArray.push(property)
				}
			}
		}
		if (knowledgeCrossClassSkillsNoRanksOrBonuses === 1){
			for (var property in skillData){
				if (property.startsWith("Knowledge") && !characterInfo.classSkills.includes(property) && !knowledgeInclusionArray.includes(property)){
					knowledgeInclusionArray.push(property)
				}
			}
		}
		for (var property in skillData){
			if (property === "Listen" && knowledgeInclusionArray.length < 10){
				let knowledgeSkillRow = document.createElement("TR")
				knowledgeSkillRow.style.fontStyle = "italic"
				let knowledgeCheckbox = document.createElement("INPUT")
				knowledgeCheckbox.type = "checkbox"
				knowledgeCheckbox.disabled = true
				if (knowledgeClassSkillsNoRanksOrBonuses > knowledgeCrossClassSkillsNoRanksOrBonuses){
					knowledgeCheckbox.checked = true
				}
				let knowledgeCheckboxCell = document.createElement("TD")
				knowledgeCheckboxCell.appendChild(knowledgeCheckbox)
				knowledgeCheckboxCell.style.border = "1px solid black"
				knowledgeCheckboxCell.style.borderCollapse = "collapse"
				knowledgeCheckboxCell.style.textAlign = "center"
				knowledgeSkillRow.appendChild(knowledgeCheckboxCell)
				let knowledgeNameCell = document.createElement("TD")
				knowledgeNameCell.style.border = "1px solid black"
				knowledgeNameCell.style.borderCollapse = "collapse"
				if (knowledgeInclusionArray.length === 0){
					knowledgeNameCell.appendChild(document.createTextNode("Knowledge (all)"))
				}
				else {
					knowledgeNameCell.appendChild(document.createTextNode("Knowledge (all others)"))
				}
				knowledgeSkillRow.appendChild(knowledgeNameCell)
				let intellgienceModCell = document.createElement("TD")
				intellgienceModCell.style.border = "1px solid black"
				intellgienceModCell.style.borderCollapse = "collapse"
				if (characterInfo.intelligence >= 10){
					intellgienceModCell.appendChild(document.createTextNode("+"))
				}
				intellgienceModCell.style.textAlign = "center"
				intellgienceModCell.appendChild(document.createTextNode(calculateModifier(characterInfo.intelligence)))
				knowledgeSkillRow.appendChild(intellgienceModCell)
				let knowledgeRankCell = document.createElement("TD")
				knowledgeRankCell.style.border = "1px solid black"
				knowledgeRankCell.style.borderCollapse = "collapse"
				knowledgeRankCell.style.textAlign = "center"
				knowledgeRankCell.appendChild(document.createTextNode("0"))
				knowledgeSkillRow.appendChild(knowledgeRankCell)
				let knowledgeMiscModCell = document.createElement("TD")
				knowledgeMiscModCell.style.border = "1px solid black"
				knowledgeMiscModCell.style.borderCollapse = "collapse"
				knowledgeMiscModCell.style.textAlign = "center"
				knowledgeMiscModCell.appendChild(document.createTextNode("0"))
				knowledgeSkillRow.appendChild(knowledgeMiscModCell)
				let knowledgeTotalCell = document.createElement("TD")
				knowledgeTotalCell.appendChild(document.createTextNode(calculateModifier(characterInfo.intelligence)))
				knowledgeTotalCell.style.border = "1px solid black"
				knowledgeTotalCell.style.borderCollapse = "collapse"
				knowledgeTotalCell.style.textAlign = "center"
				knowledgeTotalCell.style.fontWeight = "bold"
				knowledgeSkillRow.appendChild(knowledgeTotalCell)
				table.appendChild(knowledgeSkillRow)
			}
			if (!skillData[property].hasSubskills && property !== "Speak Languages" &&(!property.startsWith("Knowledge") || knowledgeInclusionArray.includes(property))){
				let skillRow = document.createElement("TR")
				if (!skillData[property].allowedUntrained && (!characterInfo.skillRanks[property] || characterInfo.skillRanks[property] < 1)){
					skillRow.style.fontStyle = "italic"
				}
				let checkbox = document.createElement("INPUT")
				checkbox.type = "checkbox"
				checkbox.disabled = true
				if (characterInfo.classSkills.includes(property)){
					checkbox.checked = true
				}
				let classSkillCheckboxCell = document.createElement("TD")
				classSkillCheckboxCell.appendChild(checkbox)
				classSkillCheckboxCell.style.border = "1px solid black"
				classSkillCheckboxCell.style.borderCollapse = "collapse"
				classSkillCheckboxCell.style.textAlign = "center"
				skillRow.appendChild(classSkillCheckboxCell)
				let nameCell = document.createElement("TD")
				nameCell.style.border = "1px solid black"
				nameCell.style.borderCollapse = "collapse"
				nameCell.appendChild(document.createTextNode(property))
				skillRow.appendChild(nameCell)
				let abilityModCell = document.createElement("TD")
				abilityModCell.style.border = "1px solid black"
				abilityModCell.style.borderCollapse = "collapse"
				if (characterInfo[skillData[property].attribute.toLowerCase()] >= 10){
					abilityModCell.appendChild(document.createTextNode("+"))
				}
				abilityModCell.style.textAlign = "center"
				abilityModCell.appendChild(document.createTextNode(calculateModifier(characterInfo[skillData[property].attribute.toLowerCase()])))
				skillRow.appendChild(abilityModCell)
				let skillRankCell = document.createElement("TD")
				skillRankCell.style.border = "1px solid black"
				skillRankCell.style.borderCollapse = "collapse"
				skillRankCell.style.textAlign = "center"
				if (!characterInfo.skillRanks[property]){
					skillRankCell.appendChild(document.createTextNode("0"))
				}
				else {
					skillRankCell.appendChild(document.createTextNode(characterInfo.skillRanks[property]))
				}
				skillRow.appendChild(skillRankCell)
				let miscModCell = document.createElement("TD")
				miscModCell.style.border = "1px solid black"
				miscModCell.style.borderCollapse = "collapse"
				miscModCell.style.textAlign = "center"
				if (!characterInfo.skillBonuses[property]){
					miscModCell.appendChild(document.createTextNode("0"))
				}
				else {
					miscModCell.appendChild(document.createTextNode(characterInfo.skillBonuses[property]))
				}
				skillRow.appendChild(miscModCell)
				let skillModTotal = calculateModifier(characterInfo[skillData[property].attribute.toLowerCase()])
				if (characterInfo.skillRanks[property]){
					skillModTotal += characterInfo.skillRanks[property]
				}
				if (characterInfo.skillBonuses[property]){
					skillModTotal += characterInfo.skillBonuses[property]
				}
				let skillModTotalCell = document.createElement("TD")
				skillModTotalCell.style.border = "1px solid black"
				skillModTotalCell.style.borderCollapse = "collapse"
				skillModTotalCell.style.textAlign = "center"
				skillModTotalCell.style.fontWeight = "bold"
				skillModTotalCell.appendChild(document.createTextNode(skillModTotal))
				skillRow.appendChild(skillModTotalCell)
				table.appendChild(skillRow)
			}
			else if (skillData[property].hasSubskills) {
				let subskillswithBonusOrRanks = 0
				for (var i = 0; i < skillData[property].subskills.length; i++){
					if ((characterInfo.skillRanks[property + " (" + skillData[property].subskills[i] + ")"] && characterInfo.skillRanks[property + " (" + skillData[property].subskills[i] + ")"] > 0) ||
						characterInfo.skillBonuses[property + " (" + skillData[property].subskills[i] + ")"]){
						subskillswithBonusOrRanks++
						let subskillRow = document.createElement("TR")
						if ((!skillData[property].allowedUntrained && (!characterInfo.skillRanks[property + " (" + skillData[property].subskills[i] + ")"] || characterInfo.skillRanks[property + " (" + skillData[property].subskills[i] + ")"] < 1)) || (property === "Craft" && skillData[property].subskills[i] === "Alchemy" && !classData[characterInfo.class].fullCaster)){
							subskillRow.style.fontStyle = "italic"
						}
						let subSkillcheckbox = document.createElement("INPUT")
						subSkillcheckbox.type = "checkbox"
						subSkillcheckbox.disabled = true
						if (characterInfo.classSkills.includes(property)){
							subSkillcheckbox.checked = true
						}
						let classsubSkillCheckboxCell = document.createElement("TD")
						classsubSkillCheckboxCell.appendChild(subSkillcheckbox)
						classsubSkillCheckboxCell.style.border = "1px solid black"
						classsubSkillCheckboxCell.style.borderCollapse = "collapse"
						classsubSkillCheckboxCell.style.textAlign = "center"
						subskillRow.appendChild(classsubSkillCheckboxCell)
						let subskillnameCell = document.createElement("TD")
						subskillnameCell.style.width = "175px"
						subskillnameCell.style.border = "1px solid black"
						subskillnameCell.style.borderCollapse = "collapse"
						subskillnameCell.appendChild(document.createTextNode(property + " (" + skillData[property].subskills[i] + ")"))
						subskillRow.appendChild(subskillnameCell)
						let abilitysubskillModCell = document.createElement("TD")
						abilitysubskillModCell.style.border = "1px solid black"
						abilitysubskillModCell.style.borderCollapse = "collapse"
						if (characterInfo[skillData[property].attribute.toLowerCase()] >= 10){
							abilitysubskillModCell.appendChild(document.createTextNode("+"))
						}
						abilitysubskillModCell.style.textAlign = "center"
						abilitysubskillModCell.appendChild(document.createTextNode(calculateModifier(characterInfo[skillData[property].attribute.toLowerCase()])))
						subskillRow.appendChild(abilitysubskillModCell)
						let subskillRankCell = document.createElement("TD")
						subskillRankCell.style.border = "1px solid black"
						subskillRankCell.style.borderCollapse = "collapse"
						subskillRankCell.style.textAlign = "center"
						if (!characterInfo.skillRanks[property + " (" + skillData[property].subskills[i] + ")"]){
							subskillRankCell.appendChild(document.createTextNode("0"))
						}
						else {
							subskillRankCell.appendChild(document.createTextNode(characterInfo.skillRanks[property + " (" + skillData[property].subskills[i] + ")"]))
						}
						subskillRow.appendChild(subskillRankCell)
						let miscsubskillsModCell = document.createElement("TD")
						miscsubskillsModCell.style.border = "1px solid black"
						miscsubskillsModCell.style.borderCollapse = "collapse"
						miscsubskillsModCell.style.textAlign = "center"
						if (!characterInfo.skillBonuses[property + skillData]){
							miscsubskillsModCell.appendChild(document.createTextNode("0"))
						}
						else {
							miscsubskillsModCell.appendChild(document.createTextNode(characterInfo.skillBonuses[property]))
						}
						subskillRow.appendChild(miscsubskillsModCell)
						let subskillModTotal = calculateModifier(characterInfo[skillData[property].attribute.toLowerCase()])
						if (characterInfo.skillRanks[property + " (" + skillData[property].subskills[i] + ")"]){
							subskillModTotal += characterInfo.skillRanks[property + " (" + skillData[property].subskills[i] + ")"]
						}
						if (characterInfo.skillBonuses[property + " (" + skillData[property].subskills[i] + ")"]){
							subskillModTotal += characterInfo.skillBonuses[property + " (" + skillData[property].subskills[i] + ")"]
						}
						let subskillModTotalCell = document.createElement("TD")
						subskillModTotalCell.style.border = "1px solid black"
						subskillModTotalCell.style.borderCollapse = "collapse"
						subskillModTotalCell.style.textAlign = "center"
						subskillModTotalCell.style.fontWeight = "bold"
						subskillModTotalCell.appendChild(document.createTextNode(subskillModTotal))
						subskillRow.appendChild(subskillModTotalCell)
						table.appendChild(subskillRow)
					}
				}
				if (subskillswithBonusOrRanks < skillData[property].subskills.length){
					let skillRow = document.createElement("TR")
					if (!skillData[property].allowedUntrained){
						skillRow.style.fontStyle = "italic"
					}
					let checkbox = document.createElement("INPUT")
					checkbox.type = "checkbox"
					checkbox.disabled = true
					if (characterInfo.classSkills.includes(property)){
						checkbox.checked = true
					}
					let classSkillCheckboxCell = document.createElement("TD")
					classSkillCheckboxCell.appendChild(checkbox)
					classSkillCheckboxCell.style.border = "1px solid black"
					classSkillCheckboxCell.style.borderCollapse = "collapse"
					classSkillCheckboxCell.style.textAlign = "center"
					skillRow.appendChild(classSkillCheckboxCell)
					let nameCell = document.createElement("TD")
					nameCell.style.width = "175px"
					nameCell.style.border = "1px solid black"
					nameCell.style.borderCollapse = "collapse"
					nameCell.appendChild(document.createTextNode(property))
					if (subskillswithBonusOrRanks === 0){
						nameCell.appendChild(document.createTextNode(" (all)"))
					}
					else {
						nameCell.appendChild(document.createTextNode(" (all others)"))
					}
					skillRow.appendChild(nameCell)
					let abilityModCell = document.createElement("TD")
					abilityModCell.style.border = "1px solid black"
					abilityModCell.style.borderCollapse = "collapse"
					if (characterInfo[skillData[property].attribute.toLowerCase()] >= 10){
						abilityModCell.appendChild(document.createTextNode("+"))
					}
					abilityModCell.style.textAlign = "center"
					abilityModCell.appendChild(document.createTextNode(calculateModifier(characterInfo[skillData[property].attribute.toLowerCase()])))
					skillRow.appendChild(abilityModCell)
					let skillRankCell = document.createElement("TD")
					skillRankCell.style.border = "1px solid black"
					skillRankCell.style.borderCollapse = "collapse"
					skillRankCell.style.textAlign = "center"
					if (!characterInfo.skillRanks[property]){
						skillRankCell.appendChild(document.createTextNode("0"))
					}
					else {
						skillRankCell.appendChild(document.createTextNode(characterInfo.skillRanks[property]))
					}
					skillRow.appendChild(skillRankCell)
					let miscModCell = document.createElement("TD")
					miscModCell.style.border = "1px solid black"
					miscModCell.style.borderCollapse = "collapse"
					miscModCell.style.textAlign = "center"
					miscModCell.appendChild(document.createTextNode("0"))
					skillRow.appendChild(miscModCell)
					let skillModTotal = calculateModifier(characterInfo[skillData[property].attribute.toLowerCase()])
					let skillModTotalCell = document.createElement("TD")
					skillModTotalCell.style.border = "1px solid black"
					skillModTotalCell.style.borderCollapse = "collapse"
					skillModTotalCell.style.textAlign = "center"
					skillModTotalCell.style.fontWeight = "bold"
					skillModTotalCell.appendChild(document.createTextNode(skillModTotal))
					skillRow.appendChild(skillModTotalCell)
					table.appendChild(skillRow)
				}
			}
			else if (property === "Speak Languages"){
				let skillRow = document.createElement("TR")
				let checkbox = document.createElement("INPUT")
				checkbox.type = "checkbox"
				checkbox.disabled = true;
				if (characterInfo.classSkills.includes(property)){
					checkbox.checked = true
				}
				let classSkillCheckboxCell = document.createElement("TD")
				classSkillCheckboxCell.appendChild(checkbox)
				classSkillCheckboxCell.style.border = "1px solid black"
				classSkillCheckboxCell.style.borderCollapse = "collapse"
				classSkillCheckboxCell.style.textAlign = "center"
				skillRow.appendChild(classSkillCheckboxCell)
				let nameCell = document.createElement("TD")
				nameCell.style.border = "1px solid black"
				nameCell.style.borderCollapse = "collapse"
				nameCell.appendChild(document.createTextNode(property))
				skillRow.appendChild(nameCell)
				let abilityModCell = document.createElement("TD")
				abilityModCell.style.border = "1px solid black"
				abilityModCell.style.borderCollapse = "collapse"
				abilityModCell.style.textAlign = "center"
				abilityModCell.appendChild(document.createTextNode("N/A"))
				skillRow.appendChild(abilityModCell)
				let skillRankCell = document.createElement("TD")
				skillRankCell.style.border = "1px solid black"
				skillRankCell.style.borderCollapse = "collapse"
				skillRankCell.style.textAlign = "center"
				if (!characterInfo.skillRanks[property]){
					skillRankCell.appendChild(document.createTextNode("0"))
				}
				else {
					skillRankCell.appendChild(document.createTextNode(characterInfo.skillRanks[property]))
				}
				skillRow.appendChild(skillRankCell)
				let miscModCell = document.createElement("TD")
				miscModCell.style.border = "1px solid black"
				miscModCell.style.borderCollapse = "collapse"
				miscModCell.style.textAlign = "center"
				miscModCell.appendChild(document.createTextNode("N/A"))
				skillRow.appendChild(miscModCell)
				let skillModTotalCell = document.createElement("TD")
				skillModTotalCell.style.border = "1px solid black"
				skillModTotalCell.style.borderCollapse = "collapse"
				skillModTotalCell.style.textAlign = "center"
				skillModTotalCell.style.fontWeight = "bold"
				skillModTotalCell.appendChild(document.createTextNode("N/A"))
				skillRow.appendChild(skillModTotalCell)
				table.appendChild(skillRow)
			}
		}
		let featsAndFeaturesMainRow = document.createElement("TR")
		featsAndFeaturesMainRow.style.border = "2px solid black"
		featsAndFeaturesMainRow.style.borderCollapse = "collapse"
		featsAndFeaturesMainRow.style.textAlign = "center"
		featsAndFeaturesMainRow.style.borderBottomWidth = "1px"
		let featsMainCell = document.createElement("TD")
		featsMainCell.colSpan = "3"
		featsMainCell.style.borderRightStyle = "solid"
		featsMainCell.style.borderRightColor = "black"
		featsMainCell.style.borderRightWidth = "2px"
		featsMainCell.appendChild(document.createTextNode("Feats"))
		featsAndFeaturesMainRow.appendChild(featsMainCell)
		let featuresMainCell = document.createElement("TD")
		featuresMainCell.colSpan = "3"
		featuresMainCell.appendChild(document.createTextNode("Special Abilities"))
		featsAndFeaturesMainRow.appendChild(featuresMainCell)
		table.appendChild(featsAndFeaturesMainRow)
		for (var i = 0; i < characterInfo.featsKnown.length || i < characterInfo.features.length; i++){
			let featAndFeatureRow = document.createElement("TR")
			featAndFeatureRow.style.border = "2px solid black"
			featAndFeatureRow.style.borderCollapse = "collapse"
			featAndFeatureRow.style.borderTopWidth = "1px"
			featAndFeatureRow.style.borderBottomWidth = "1px"
			let featCell = document.createElement("TD")
			featCell.colSpan = "3"
			featCell.style.borderRightStyle = "solid"
			featCell.style.borderRightColor = "black"
			featCell.style.borderRightWidth = "2px"
			if (i < characterInfo.featsKnown.length){
				featCell.appendChild(document.createTextNode(characterInfo.featsKnown[i]))
			}
			featAndFeatureRow.appendChild(featCell)
			let featureCell = document.createElement("TD")
			featureCell.colSpan = "3"
			featureCell.style.width = "50%"
			if (i < characterInfo.features.length){
				featureCell.appendChild(document.createTextNode(characterInfo.features[i]))
			}
			featAndFeatureRow.appendChild(featureCell)
			table.appendChild(featAndFeatureRow)
		}
		let proficienciesAndLanguagesHeaderRow = document.createElement("TR")
		proficienciesAndLanguagesHeaderRow.style.border = "2px solid black"
		proficienciesAndLanguagesHeaderRow.style.borderCollapse = "collapse"
		proficienciesAndLanguagesHeaderRow.style.textAlign = "center"
		proficienciesAndLanguagesHeaderRow.style.borderBottomWidth = "1px"
		let weaponProficienciesMainCell = document.createElement("TD")
		weaponProficienciesMainCell.colSpan = "2"
		weaponProficienciesMainCell.style.borderRightStyle = "solid"
		weaponProficienciesMainCell.style.borderRightColor = "black"
		weaponProficienciesMainCell.style.borderRightWidth = "2px"
		weaponProficienciesMainCell.appendChild(document.createTextNode("Weapon Proficiencies"))
		proficienciesAndLanguagesHeaderRow.appendChild(weaponProficienciesMainCell)
		let armorProficienciesMainCell = document.createElement("TD")
		armorProficienciesMainCell.colSpan = "2"
		armorProficienciesMainCell.style.borderRightStyle = "solid"
		armorProficienciesMainCell.style.borderRightColor = "black"
		armorProficienciesMainCell.style.borderRightWidth = "2px"
		armorProficienciesMainCell.appendChild(document.createTextNode("Armor Proficiencies"))
		proficienciesAndLanguagesHeaderRow.appendChild(armorProficienciesMainCell)
		let languagesMainCell = document.createElement("TD")
		languagesMainCell.colSpan = "2"
		languagesMainCell.appendChild(document.createTextNode("Languages"))
		proficienciesAndLanguagesHeaderRow.appendChild(languagesMainCell)
		table.appendChild(proficienciesAndLanguagesHeaderRow)
		let armorProficienciesArray = []
		for (var property in characterInfo.armorProficiencies){
			if (characterInfo.armorProficiencies[property]){
				armorProficienciesArray.push(property)
			}
		}
		let weaponProficienciesArray = Object.keys(characterInfo.weaponProficiencies)
		for (var i = 0; i < characterInfo.languagesKnown.length || i < weaponProficienciesArray.length || i < armorProficienciesArray.length; i++){
			let proficienciesAndLanguagesRow = document.createElement("TR")
			proficienciesAndLanguagesRow.style.border = "2px solid black"
			proficienciesAndLanguagesRow.style.borderCollapse = "collapse"
			proficienciesAndLanguagesRow.style.borderTopWidth = "1px"
			proficienciesAndLanguagesRow.style.borderBottomWidth = "1px"
			let weaponProficienciesCell = document.createElement("TD")
			weaponProficienciesCell.colSpan = "2"
			weaponProficienciesCell.style.borderRightStyle = "solid"
			weaponProficienciesCell.style.borderRightColor = "black"
			weaponProficienciesCell.style.borderRightWidth = "2px"
			if (i < weaponProficienciesArray.length){
				if (weaponProficienciesArray[i] === "allSimple"){
					weaponProficienciesCell.appendChild(document.createTextNode("All Simple"))
				}
				else if (weaponProficienciesArray[i] === "allMartial"){
					weaponProficienciesCell.appendChild(document.createTextNode("All Martial"))
				}
				else {
					weaponProficienciesCell.appendChild(document.createTextNode(weaponProficienciesArray[i]))
				}
			}
			proficienciesAndLanguagesRow.appendChild(weaponProficienciesCell)
			let armorProficienciesCell = document.createElement("TD")
			armorProficienciesCell.colSpan = "2"
			armorProficienciesCell.style.borderRightStyle = "solid"
			armorProficienciesCell.style.borderRightColor = "black"
			armorProficienciesCell.style.borderRightWidth = "2px"
			if (i < armorProficienciesArray.length){
				switch (armorProficienciesArray[i]) {
					case "lightArmor":
						armorProficienciesCell.appendChild(document.createTextNode("Light Armor"))
						break;
					case "mediumArmor":
						armorProficienciesCell.appendChild(document.createTextNode("Medium Armor"))
						break
					case "heavyArmor":
						armorProficienciesCell.appendChild(document.createTextNode("Heavy Armor"))
						break
					case "shields":
						armorProficienciesCell.appendChild(document.createTextNode("Shields"))
						break
					case "towerShields":
						armorProficienciesCell.appendChild(document.createTextNode("Tower Shields"))
						break
				}
			}
			proficienciesAndLanguagesRow.appendChild(armorProficienciesCell)
			let languageCell = document.createElement("TD")
			languageCell.colSpan = "2"
			if (i < characterInfo.languagesKnown.length){
				languageCell.appendChild(document.createTextNode(characterInfo.languagesKnown[i]))
			}
			proficienciesAndLanguagesRow.appendChild(languageCell)
			table.appendChild(proficienciesAndLanguagesRow)
		}
		if (characterInfo.class === "Cleric"){
			let domainRow = document.createElement("TR")
			domainRow.style.borderTopWidth = "2px"
			domainRow.style.borderTopColor = "black"
			domainRow.style.borderTopStyle = "solid"
			let domainCell = document.createElement("TD")
			domainCell.colSpan = "6"
			domainCell.appendChild(document.createTextNode("Domains: " + characterInfo.clericDomains[0] + ", " + characterInfo.clericDomains[1]))
			domainRow.appendChild(domainCell)
			table.appendChild(domainRow)
		}
		if (characterInfo.class === "Wizard"){
			let specialityRow = document.createElement("TR")
			specialityRow.style.borderTopWidth = "2px"
			specialityRow.style.borderTopColor = "black"
			specialityRow.style.borderTopStyle = "solid"
			let specialityCell = document.createElement("TD")
			specialityCell.colSpan = "6"
			specialityCell.appendChild(document.createTextNode("Speciality: " + characterInfo.wizardSpeciality))
			if (characterInfo.wizardSpeciality === "Divination"){
				specialityCell.appendChild(document.createElement("BR"))
				specialityCell.appendChild(document.createTextNode("Barred College: " + characterInfo.barredWizardColleges[0]))
			}
			else if (characterInfo.wizardSpeciality !== "None") {
				specialityCell.appendChild(document.createElement("BR"))
				specialityCell.appendChild(document.createTextNode("Barred Colleges: " + characterInfo.barredWizardColleges[0] + ", " + characterInfo.barredWizardColleges[1]))

			}
			specialityRow.appendChild(specialityCell)
			table.appendChild(specialityRow)

		}
		if (classData[characterInfo.class].fullCaster){
			for (var i = 0; i < characterInfo.spells[characterInfo.class].length; i++){
				let spellsKnownRow = document.createElement("TR")
				if (i === 0 && characterInfo.class !== "Wizard" && characterInfo.class !== "Cleric"){
					spellsKnownRow.style.borderTopWidth = "2px"
				}
				else {
					spellsKnownRow.style.borderTopWidth = "1px"
				}
				spellsKnownRow.style.borderTopColor = "black"
				spellsKnownRow.style.borderTopStyle = "solid"
				let spellsKnownCell = document.createElement("TD")
				spellsKnownCell.colSpan = "6"
				spellsKnownCell.appendChild(document.createTextNode("Level " + i + " Spells ("))
				if (i === 0){
					spellsKnownCell.appendChild(document.createTextNode(classData[characterInfo.class].spellsPerDay[1][i]))
				}
				else {
					spellsKnownCell.appendChild(
						document.createTextNode((classData[characterInfo.class].spellsPerDay[1][i] + Math.ceil((calculateModifier(characterInfo[classData[characterInfo.class].castingAttribute.toLowerCase()]) + 1 - i)/4))))
				}
				spellsKnownCell.appendChild(document.createTextNode(" Spells per day"))
				if (characterInfo.class === "Wizard" && characterInfo.wizardSpeciality !== "None"){
					spellsKnownCell.appendChild(document.createTextNode(" + 1 " + characterInfo.wizardSpeciality + " spell per day"))
				}
				spellsKnownCell.appendChild(document.createTextNode("): "))
				for (var j = 0; j < characterInfo.spells[characterInfo.class][i].length; j++){
					spellsKnownCell.appendChild(document.createTextNode(characterInfo.spells[characterInfo.class][i][j]))
					if (j !== characterInfo.spells[characterInfo.class][i].length - 1){
						spellsKnownCell.appendChild(document.createTextNode(", "))
					}
				}
				if (i > 0 && characterInfo.class === "Cleric"){
					spellsKnownCell.appendChild(document.createElement("BR"))
					spellsKnownCell.appendChild(document.createTextNode("Level " + i + " Domain Spells (1 per day): " + characterInfo.spells["Cleric Domain Spells"][i][0] + ", " + characterInfo.spells["Cleric Domain Spells"][i][1]))
				}
				spellsKnownRow.appendChild(spellsKnownCell)
				table.appendChild(spellsKnownRow)
			}
		}
		characterInfo.startingGold = classData[characterInfo.class].generateMoney()
		let equipmentRow = document.createElement("TR")
		equipmentRow.style.borderTopWidth = "2px"
		equipmentRow.style.borderTopColor = "black"
		equipmentRow.style.borderTopStyle = "solid"
		let equipmentCell = document.createElement("TD")
		equipmentCell.colSpan = "6"
		equipmentCell.appendChild(document.createTextNode(characterInfo.startingGold/100 + " gp worth of money and equipment"))
		equipmentRow.appendChild(equipmentCell)
		table.appendChild(equipmentRow)
		if (characterInfo.featsKnown.includes("Spell Mastery")){
			let notesRow = document.createElement("TR")
			notesRow.style.borderTopWidth = "2px"
			notesRow.style.borderTopColor = "black"
			notesRow.style.borderTopStyle = "solid"
			let notesCell = document.createElement("TD")
			notesCell.colSpan = "6"
			let underline = document.createElement("U")
			underline.appendChild(document.createTextNode("Notes"))
			notesCell.appendChild(underline)
			notesCell.appendChild(document.createElement("BR"))
			notesCell.appendChild(document.createTextNode("Spell Mastery Spells: "))
			for (var i = 0; i < characterInfo.wizardSpellMasteryArray.length; i++){
				notesCell.appendChild(document.createTextNode(characterInfo.wizardSpellMasteryArray[i]))
				if (i < characterInfo.wizardSpellMasteryArray.length){
					notesCell.appendChild(document.createTextNode(", "))
				}
			}
			notesRow.appendChild(notesCell)
			table.appendChild(notesRow)
		}
	}
