const itemData = {
	"Armor Spikes": {
		cost: 5000,
		weight: 10,
		smallSizeWeightMultiplier: 0.5
		requirements: function(characterInfo){
			for (var i = 0; i < characterInfo.equipment.length; i++){
				if (armorData[characterInfo.equipment[i]] && (armorData[characterInfo.equipment[i]].proficiencyType === "Light Armor" || armorData[characterInfo.equipment[i]].proficiencyType === "Medium Armor" || armorData[characterInfo.equipment[i]].proficiencyType === "Heavy Armor")){
					return true
				}
			}
			return false
		},
		uponPurchasing: function (characterInfo) {
			let index
			for (var i = 0; i < characterInfo.equipment.length){
				if (characterInfo.equipment[i].name === "Armor Spikes"){
					index = i;
					break;
				}
			}
			characterInfo.equipment.splice(index, i)
			let armorArray = []
			for (var i = 0; i < characterInfo.equipment.length; i++){
				if (armorData[characterInfo.equipment[i].name] && (armorData[characterInfo.equipment[i].name].proficiencyType === "Light Armor" || armorData[characterInfo.equipment[i].name].proficiencyType === "Medium Armor" || armorData[characterInfo.equipment[i].name].proficiencyType === "Heavy Armor")){
					armorArray.push(i)
				}
			}
			let armorRoll = Math.floor(Math.random() * armorArray.length)
			characterInfo.equipment[armorArray[armorRoll]].name = "Spiked " + characterInfo.equipment[armorArray[armorRoll]].name;
			if (raceData[characterInfo.race].size === "Medium"){
				characterInfo.equipment[armorArray[armorRoll]].weight += 10
			}
			else if (raceData[characterInfo.race].size === "Small"){
				characterInfo.equipment[armorArray[armorRoll]].weight += 5
			}
		}
	},
	"Locked Gauntlet": {
		cost: 800,
		weight: 8,
		smallSizeWeightMultiplier: 0.5,
		requirements: function(characterInfo){
			if (characterInfo.fullCaster && document.getElementById("basicfiltering").checked){
				return false
			}
			else {
				return true
			}
		},
		uponPurchasing: function (characterInfo) {
			for (var i = 0; i < characterInfo.equipment.length; i++){
				if (armorData[characterInfo.equipment[i]] && armorData[characterInfo.equipment[i]].hasGauntlets){
					for (var j = 0; j < characterInfo.equipment.length; j++){
						if (characterInfo.equipment[j].name === "Locked Gauntlet"){
							characterInfo.equipment[j].weight = 0
						}
					}
					return;
				}
			}
		}
	},
	"Shield Spikes": {
		cost: 1000,
		weight: 5,
		smallSizeWeightMultiplier: 0.5,
		requirements: function (characterInfo) {
			for (var i = 0; i < characterInfo.equipment.length; i++){
				if (armorData[characterInfo.equipment[i]] && (armorData[characterInfo.equipment[i]].proficiencyType === "Shield" || armorData[characterInfo.equipment[i]].proficiencyType === "Tower Shield")){
					return true
				}
			}
			return false
		},
		uponPurchasing: function (characterInfo) {
			let index
			for (var i = 0; i < characterInfo.equipment.length){
				if (characterInfo.equipment[i].name === "Sheild Spikes"){
					index = i;
					break;
				}
			}
			characterInfo.equipment.splice(index, i)
			let armorArray = []
			for (var i = 0; i < characterInfo.equipment.length; i++){
				if (armorData[characterInfo.equipment[i].name] && (armorData[characterInfo.equipment[i].name].proficiencyType === "Shield" || armorData[characterInfo.equipment[i].name].proficiencyType === "Tower Shield")){
					armorArray.push(i)
				}
			}
			let armorRoll = Math.floor(Math.random() * armorArray.length)
			characterInfo.equipment[armorArray[armorRoll]].name = "Spiked " + characterInfo.equipment[armorArray[armorRoll]].name;
			characterInfo.equipment[armorArray[armorRoll]].weight += 5
		}
	},
	"Backpack": {
		cost: 200,
		weight: 2,
		smallSizeWeightMultiplier: 
	}
}