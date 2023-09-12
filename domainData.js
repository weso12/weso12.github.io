	const domainData = {
		"Air": {
			hasAlignmentRestrictions: false,
			incompatibleDomains: [],
			spells: [null,"Obscuring Mist"],
			uponLearning: function(characterInfo){
				if (calculateModifier(characterInfo.charisma) > -3){
					characterInfo.features.push("Turn Earth Creatures/Rebuke Air Creatures")
				}
			}
		},
		"Animal": {
			hasAlignmentRestrictions: false,
			incompatibleDomains: [],
			spells: [null, "Calm Animals"],
			uponLearning: function(characterInfo){
				characterInfo.features.push("Speak with Animals 1/day")
				characterInfo.classSkills.push("Knowledge (Nature)")
			}
		},
		"Chaos": {
			hasAlignmentRestrictions: true,
			allowedAlignments: ["Chaotic Good", "Chaotic Neutral", "Chaotic Evil"],
			incompatibleDomains: ["Law"],
			spells: [null, "Protection from Law"],
			uponLearning: function(characterInfo){	
				characterInfo.features.push("+1 Chaos Spells Caster Level")
			}
		},
		"Death": {
			hasAlignmentRestrictions: false,
			incompatibleDomains: [],
			spells: [null, "Cause Fear"],
			uponLearning: function(characterInfo) {
				characterInfo.features.push("Death Touch 1/day")
			}
		},
		"Destruction": {
			hasAlignmentRestrictions: false,
			incompatibleDomains: [],
			spells: [null, "Inflict Light Wounds"],
			uponLearning: function (characterInfo) {
				characterInfo.features.push("Smite 1/day")
			}
		},
		"Earth": {
			hasAlignmentRestrictions: false,
			incompatibleDomains: [],
			spells: [null, "Magic Stone"],
			uponLearning: function (characterInfo) {
				characterInfo.features.push("Turn Air Creatures/Rebuke Earth Creatures")
			}
		},
		"Evil": {
			hasAlignmentRestrictions: true,
			allowedAlignments: ["Lawful Evil", "Neutral Evil", "Chaotic Evil"],
			incompatibleDomains: ["Good"],
			spells: [null, "Protection from Good"],
			uponLearning: function(characterInfo){
				characterInfo.features.push("+1 Evil Spells Caster Level")
			}
		},
		"Fire": {
			hasAlignmentRestrictions: false,
			incompatibleDomains: [],
			spells: [null, "Burning Hands"],
			uponLearning: function (characterInfo) {
				if (calculateModifier(characterInfo.charisma) > -3){
					characterInfo.features.push("Turn Water Creatures/Rebuke Fire Creatures")
				}
			}

		},
		"Good": {
			hasAlignmentRestrictions: true,
			allowedAlignments: ["Lawful Good", "Neutral Good", "Chaotic Good"],
			incompatibleDomains: [],
			spells: [null, "Protection from Evil"],
			uponLearning: function(characterInfo){
				characterInfo.features.push("+1 Good Spells Caster Level")
			}

		},
		"Healing": {
			hasAlignmentRestrictions: false,
			incompatibleDomains: [],
			spells: [null, "Cure Light Wounds"],
			uponLearning: function(characterInfo){
				characterInfo.features.push("+1 Healing Spells Caster Level")
			}

		},
		"Knowledge": {
			hasAlignmentRestrictions: false,
			incompatibleDomains: [],
			spells: [null, "Detect Secret Doors"],
			uponLearning: function(characterInfo){
				characterInfo.features.push("+1 Divination Spells Caster Level")
				characterInfo.classSkills.push("Knowledge (Architecture and Engineering)")
				characterInfo.classSkills.push("Knowledge (Dungeoneering)")
				characterInfo.classSkills.push("Knowledge (Geography)")
				characterInfo.classSkills.push("Knowledge (Local)")
				characterInfo.classSkills.push("Knowledge (Nature)")
				characterInfo.classSkills.push("Knowledge (Nobility and Royalty)")
			}
		},
		"Law": {
			hasAlignmentRestrictions: true,
			allowedAlignments: ["Lawful Good", "Lawful Neutral", "Lawful Evil"],
			incompatibleDomains: ["Chaos"],
			spells: [null, "Protection from Chaos"],
			uponLearning: function(characterInfo){
				characterInfo.features.push("+1 Law Spells Caster Level")
			}
		},
		"Luck": {
			hasAlignmentRestrictions: false,
			incompatibleDomains: [],
			spells: [null, "Entropic Shield"],
			uponLearning: function(characterInfo){
				characterInfo.features.push("Good Fortune 1/day")
			}
		},
		"Magic": {
			hasAlignmentRestrictions: false,
			incompatibleDomains: [],
			spells: [null, "Nystul's Magic Aura"],
			uponLearning: function (characterInfo) {
				characterInfo.features.push("Magic Devices as Half Level Wizard")
			}
		},
		"Plant": {
			hasAlignmentRestrictions: false,
			incompatibleDomains: [],
			spells: [null, "Entangle"],
			uponLearning: function (characterInfo) {
				if (calculateModifier(characterInfo.charisma) > -3){
					characterInfo.features.push("Rebuke Plants")
				}
				characterInfo.classSkills.push("Knowledge (Nature)")
			}
		},
		"Protection": {
			hasAlignmentRestrictions: false,
			incompatibleDomains: [],
			spells: [null, "Sanctuary"],
			uponLearning: function(characterInfo){
				characterInfo.features.push("Protective Ward, Duration: 1 hour, 1/day")
			}
		},
		"Strength": {
			hasAlignmentRestrictions: false,
			incompatibleDomains: [],
			spells: [null, "Enlarge Person"],
			uponLearning: function(characterInfo){
				characterInfo.features.push("Strength Bonus for 1 round 1/day")
			}
		},
		"Sun": {
			hasAlignmentRestrictions: false,
			incompatibleDomains: [],
			spells: [null, "Endure Elements"],
			uponLearning: function (characterInfo) {
				characterInfo.features.push("Greater Turn Undead 1/day")
			}
		},
		"Travel": {
			hasAlignmentRestrictions: false,
			incompatibleDomains: [],
			spells: [null, "Longstrider"],
			uponLearning: function(characterInfo){
				characterInfo.features.push("Freedom of Movement 1/round per cleric level/day")
				characterInfo.classSkills.push("Survival")
			}
		},
		"Trickery": {
			hasAlignmentRestrictions: false,
			incompatibleDomains: [],
			spells: [null, "Disguise Self"],
			uponLearning: function(characterInfo){
				characterInfo.classSkills.push("Bluff")
				characterInfo.classSkills.push("Disguise")
				characterInfo.classSkills.push("Hide")
			}
		},
		"War": {
			hasAlignmentRestrictions: false,
			incompatibleDomains: [],
			spells: [null, "Magic Weapon"],
			uponLearning: function(characterInfo){
				let weapon = ""
				if (characterInfo.godWorshiped === "None"){
					characterInfo.alignment = characterInfo.elligbleAlignments[Math.floor(Math.random() * characterInfo.elligbleAlignments.length)]

					if (characterInfo.alignment === "Lawful Good"){
						let weaponRoll = Math.random() * 2
						if (weaponRoll === 0){
							weapon = "Warhammer"
						}
						else {
							weapon = "Longsword"
						}
					}
					else if (characterInfo.alignment === "Neutral Good"){
						 weapon = "Warhammer" 
					}
					else if (characterInfo.alignment === "Chaotic Good"){
						let weaponRoll = Math.random() * 2
						if (weaponRoll === 0){
							weapon = "Warhammer"
						}
						else {
							weapon = "Battleaxe"
						}
					}
					else if (characterInfo.alignment === "Lawful Neutral"){
						weapon = "Longsword"
					}
					else if (characterInfo.alignment === "Neutral"){
						let weaponArray = []
						for (var property in weaponData){
							if (weaponData[property].hasUniqueWeaponProficiency && (weaponData[property].proficiencyType === "Simple" || weaponData[property].proficiencyType === "Martial" || (weaponData[property].proficiencyType === "Exotic" && characterInfo.features.includes("Weapon Familiarity (" + property + ")")))){
								weaponArray.push(property)
							}
						}
						weapon = weaponArray[Math.floor(Math.random() * weaponArray.length)]
					}
					else if (characterInfo.alignment === "Chaotic Neutral"){
						weapon = "Battleaxe"
					}
					else if (characterInfo.alignment === "Lawful Evil"){
						if (Math.floor(Math.random() * 2) === 0){
							if (Math.floor(Math.random() * 2) === 0){
								weapon = "Flail"
							}
							else {
								weapon = "Heavy Flail"
							}
						} 
						else {
							weapon = "Longsword"
						}
					}
					else if (characterInfo.alignment === "Neutral Evil"){
						if (Math.floor(Math.random() * 2) === 0){
							weapon = "Flail"
						}
						else {
							weapon = "Heavy Flail"
						}
					}
					else if (characterInfo.alignment === "Chaotic Evil") {
						if (Math.floor(Math.random() * 2) === 0){
							if (Math.floor(Math.random() * 2) === 0){
								weapon = "Flail"
							}
							else {
								weapon = "Heavy Flail"
							}
						} 
						else {
							weapon = "Battleaxe"
						}
					}
				}
				else {
					weapon = godData[characterInfo.godWorshiped].favoredWeapon[Math.floor(Math.random() * godData[characterInfo.godWorshiped].favoredWeapon.length)]
				}
				if (weaponData[weapon].proficiencyType === "Martial" || (weaponData[weapon].proficiencyType === "Exotic" && characterInfo.features.includes("Weapon Familiarity (" + property + ")")) && (!characterInfo.weaponProficiencies.allMartial || !characterInfo.weaponProficiencies[weapon])){
					addFeat(characterInfo, "Martial Weapon Proficiency", weapon)
				}
				addFeat(characterInfo, "Weapon Focus", weapon)
				
			}
		},
		"Water":{
			hasAlignmentRestrictions: false,
			incompatibleDomains: [],
			spells: [null, "Obscuring Mist"],
			uponLearning: function (characterInfo) {
				if (calculateModifier(characterInfo.charisma) > -3){
					characterInfo.features.push("Turn Fire Creatures/Rebuke Water Creatures")
				}
			}
		}
	}
