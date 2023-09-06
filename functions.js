	function roll4d6b3(){
		let array = []
		for (var i = 0; i < 4; i++){
			array.push(Math.floor(Math.random() * 6) + 1)
		}
		let smallest = Math.min(...array)
		let sum = 0;
		for (var i = 0; i < array.length; i++){
			sum += array[i]
		}
		return sum - smallest
	}
	function calculateModifer(number){
		return Math.floor((number - 10)/2)
	}
	function displayDraconicWizardReplacementOdds(){
		if (document.getElementById("DraconicWizardReplacement").checked){
			document.getElementById("WhereToAddDraconicReplacementOdds").innerHTML = ""
		}
		else {
			let number = document.createElement("INPUT")
			number.type = "number"
			number.min = "0"
			number.max = "100"
			number.value = "50"
			number.style.width = "35px"
			number.id = "DraconicWizardReplacementOdds"
			let label = document.createElement("LABEL")
			label.for = "DraconicWizardReplacementOdds"
			label.appendChild(document.createTextNode("% of Wizards who replace bonus language with Draconic"))
			let span = document.getElementById("WhereToAddDraconicReplacementOdds")
			span.appendChild(number)
			span.appendChild(label)
			span.appendChild(document.createElement("BR"))
		}
	}
	function displayAllowOverflowToIncludeSecretCheckBox(){
		if (document.getElementById("bonusLanguagesOverflow").checked){
			let checkbox = document.createElement("INPUT");
			checkbox.type = "checkbox";
			checkbox.id = "OverflowSecretLanguages";
			let label = document.createElement("LABEL");
			label.for = "OverflowSecretLanguages";
			label.appendChild(document.createTextNode("Allow extra bonus languages to be secret langauges"))
			let span = document.getElementById("WhereToAddOverflowIncludeSecretLanguages")
			span.appendChild(checkbox)
			span.appendChild(label)
			span.appendChild(document.createElement("BR"))
		}
		else {
			document.getElementById("WhereToAddOverflowIncludeSecretLanguages").innerHTML = ""
		}
	}
	function compareFunction(a, b){
		const nameA = a.toUpperCase()
		const nameB = b.toUpperCase()
		if (nameA < nameB){
			return -1;
		}
		else if (nameA > nameB){
			return 1;
		}
		else {
			return 0;
		}
	}
	function grantSkillBonus(characterInfo, skill, number) {
		if (characterInfo.skillBonuses[skill]){
			characterInfo.skillBonuses[skill] += number
		}
		else {
			characterInfo.skillBonuses[skill] = number
		}
	}
	function narrowAlignment(characterInfo, narrowedAlignments){
		for (var i = 0; i < characterInfo.elligbleAlignments.length; i++){
			if (!narrowedAlignments.includes(characterInfo.elligbleAlignments[i])){
				characterInfo.elligbleAlignments[i] = "Mark for Deletion"
			}
		}
		while (characterInfo.elligbleAlignments.includes("Mark for Deletion")){
			let index = characterInfo.elligbleAlignments.indexOf("Mark for Deletion")
			characterInfo.elligbleAlignments.splice(index, 1)
		}
	}
	function calculateMaximumSpellLevel(characterInfo){
		if (classData[characterInfo.class].fullCaster && characterInfo[classData[characterInfo.class].castingAttribute.toLowerCase()] >= 10){
			return characterInfo.spells[characterInfo.class].length
		}
		else {
			return -1
		}
	}
	function addFeat(characterInfo, feat, speciality){
		if (speciality === undefined){
			characterInfo.featsKnown.push(feat)
			featData[feat].uponLearning(characterInfo)
		}
		else {
			characterInfo.featsKnown.push(feat + " (" + speciality + ")")
			featData[feat].uponLearning(characterInfo, speciality)
		}
	}
	function canUseWeapon(characterInfo, weaponType) {
		if (characterInfo.weaponProficiencies[weaponType]){
			return true
		}
		else if (weaponData[weaponType].proficiencyType === "Simple" && characterInfo.weaponProficiencies.allSimple){
			return true
		}
		else if ((weaponData[weaponType].proficiencyType === "Martial" || characterInfo.features.includes("Weapon Familiarity (" + weaponType + ")")) && characterInfo.weaponProficiencies.allMartial){
			return true
		}
		else {
			return false
		}
	}
	function spellApprovedForCleric(characterInfo, spell){
		if (!spellData[spell].descriptor.includes("Chaotic") && !spellData[spell].descriptor.includes("Evil") && !spellData[spell].descriptor.includes("Good") && !spellData[spell].descriptor.includes("Lawful")){
			return true;
		}
		if (spellData[spell].descriptor.includes("Chaotic")){
			if (characterInfo.clericDomains.includes("Law")){
				return false
			}
			else if (characterInfo.godWorshiped !== "None" && (godData[characterInfo.godWorshiped].alignment === "Lawful Good" || godData[characterInfo.godWorshiped].alignment === "Lawful Neutral" || godData[characterInfo.godWorshiped].alignment === "Lawful Evil")){
				return false
			}
			else {
				return true
			}
		}
		if (spellData[spell].descriptor.includes("Evil")){
			if (characterInfo.clericDomains.includes("Good")){
				return false
			}
			else if (characterInfo.godWorshiped !== "None" && (godData[characterInfo.godWorshiped].alignment === "Lawful Good" || godData[characterInfo.godWorshiped].alignment === "Neutral Good" || godData[characterInfo.godWorshiped].alignment === "Choatic Good")){
				return false
			}
			else {
				return true
			}
		}

		if (spellData[spell].descriptor.includes("Good")){
			if (characterInfo.clericDomains.includes("Evil")){
				return false
			}
			else if (characterInfo.godWorshiped !== "None" && (godData[characterInfo.godWorshiped].alignment === "Lawful Evil" || godData[characterInfo.godWorshiped].alignment === "Neutral Evil" || godData[characterInfo.godWorshiped].alignment === "Lawful Evil")){
				return false
			}
			else {
				return true
			}
		}

		if (spellData[spell].descriptor.includes("Lawful")){
			if (characterInfo.clericDomains.includes("Chaos")){
				return false
			}
			else if (characterInfo.godWorshiped !== "None" && (godData[characterInfo.godWorshiped].alignment === "Chaotic Good" || godData[characterInfo.godWorshiped].alignment === "Chaotic Neutral" || godData[characterInfo.godWorshiped].alignment === "Chaotic Evil")){
				return false
			}
			else {
				return true
			}
		}

	}