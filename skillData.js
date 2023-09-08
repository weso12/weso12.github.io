	const skillData = {
		"Appraise": {
			attribute: "Intelligence",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: true
		},
		"Balance": {
			attribute: "Dexterity",
			hasSubskills: false,
			armorCheckPenalty: true,
			doubleArmorCheckPenalty: false,
			allowedUntrained: true
		},
		"Bluff": {
			attribute: "Charisma",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: true
		},
		"Climb": {
			attribute: "Strength",
			hasSubskills: false,
			armorCheckPenalty: true,
			doubleArmorCheckPenalty: false,
			allowedUntrained: true
		},
		"Concentration": {
			attribute: "Constitution",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: true
		},
		"Craft": {
			attribute: "Intelligence",
			hasSubskills: true,
			subskills: ["Alchemy", "Armorsmithing", "Basketweaving", "Bookbinding", "Bowmaking", "Blacksmithing", "Calligraphy", "Carpentry", "Cobbling", "Gemcutting", "Leatherworking", "Locksmithing", "Painting", "Pottery", "Sculpting", "Shipmaking", "Stonemasonry", "Trapmaking", "Weaponsmithing", "Weaving"],
			armorCheckPenalty: false,
			allowedUntrained: true,
		},
		"Decipher Script": {
			attribute: "Intelligence",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false
		},
		"Diplomacy": {
			attribute: "Charisma",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: true
		},
		"Disable Device": {
			attribute: "Intelligence",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false
		},
		"Disguise": {
			attribute: "Charisma",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: true
		},
		"Escape Artist": {
			attribute: "Dexterity",
			hasSubskills: false,
			armorCheckPenalty: true,
			doubleArmorCheckPenalty: false,
			allowedUntrained: true
		},
		"Forgery": {
			attribute: "Intelligence",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: true
		},
		"Gather Information": {
			attribute: "Charisma",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: true
		},
		"Handle Animal":  {
			attribute: "Charisma",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false
		},
		"Heal": {
			attribute: "Wisdom",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: true
		},
		"Hide": {
			attribute: "Dexterity",
			hasSubskills: false,
			armorCheckPenalty: true,
			doubleArmorCheckPenalty: false,
			allowedUntrained: true
		},
		"Intimidate": {
			attribute: "Charisma",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: true
		},
		"Jump": {
			attribute: "Strength",
			hasSubskills: false,
			armorCheckPenalty: true,
			doubleArmorCheckPenalty: false,
			allowedUntrained: true
		},
		"Knowledge (Arcana)": {
			attribute: "Intelligence",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false,
			isSubskill: true,
			mainSkill: "Knowledge"
		},
		"Knowledge (Architecture and Engineering)": {
			attribute: "Intelligence",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false,
			isSubskill: true,
			mainSkill: "Knowledge"
		},
		"Knowledge (Dungeoneering)": {
			attribute: "Intelligence",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false,
			isSubskill: true,
			mainSkill: "Knowledge"
		},
		"Knowledge (Geography)": {
			attribute: "Intelligence",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false,
			isSubskill: true,
			mainSkill: "Knowledge"
		},
		"Knowledge (History)": {
			attribute: "Intelligence",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false,
			isSubskill: true,
			mainSkill: "Knowledge"
		},
		"Knowledge (Local)": {
			attribute: "Intelligence",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false,
			isSubskill: true,
			mainSkill: "Knowledge"
		},
		"Knowledge (Nature)": {
			attribute: "Intelligence",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false,
			isSubskill: true,
			mainSkill: "Knowledge"
		},
		"Knowledge (Nobility and Royalty)": {
			attribute: "Intelligence",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false,
			isSubskill: true,
			mainSkill: "Knowledge"
		},
		"Knowledge (Religion)": {
			attribute: "Intelligence",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false,
			isSubskill: true,
			mainSkill: "Knowledge"
		},
		"Knowledge (The Planes)": {
			attribute: "Intelligence",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false,
			isSubskill: true,
			mainSkill: "Knowledge"
		},
		"Listen": {
			attribute: "Wisdom",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: true
		},
		"Move Silently": {
			attribute: "Dexterity",
			hasSubskills: false,
			armorCheckPenalty: true,
			doubleArmorCheckPenalty: false,
			allowedUntrained: true
		},
		"Open Lock": {
			attribute: "Dexterity",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false
		},
		"Perform": {
			attribute: "Charisma",
			hasSubskills: true,
			subskills: ["Act", "Comedy", "Dance", "Keyboard Instruments", "Oratory", "Percussion Instrumens", "String Instruments", "Wind Instrument", "Sing"],
			armorCheckPenalty: false,
			allowedUntrained: true
		},
		"Profession": {
			attribute: "Wisdom",
			hasSubskills: true,
			subskills: ["Apothecary", "Boater", "Bookkeeper", "Brewer", "Cook", "Driver", "Farmer", "Fisher", "Guide", "Herbalist", "Herder", "Hunter", "Innkeeper", "Lumberjack", "Miller", "Miner", "Porter", "Rancher", "Sailor", "Scribe", "Siege Engineer", "Stablehand", "Tanner", "Teamster", "Woodcutter"],
			armorCheckPenalty: false,
			allowedUntrained: false
		},
		"Ride": {
			attribute: "Dexterity",
			hasSubskills: false,
			armorCheckPenalty: true,
			doubleArmorCheckPenalty: false,
			allowedUntrained: true
		},
		"Search": {
			attribute: "Intelligence",
			hasSubskills: false,
			armorCheckPenalty: false,
			doubleArmorCheckPenalty: false,
			allowedUntrained: true
		},
		"Sense Motive": {
			attribute: "Wisdom",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: true
		},
		"Sleight of Hand": {
			attribute: "Dexterity",
			hasSubskills: false,
			armorCheckPenalty: true,
			doubleArmorCheckPenalty: false,
			allowedUntrained: false
		},
		"Speak Languages": {
			attribute: "None",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false
		},
		"Spellcraft": {
			attribute: "Intelligence",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false
		},
		"Spot": {
			attribute: "Wisdom",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: true
		},
		"Survival": {
			attribute: "Wisdom",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: true
		},
		"Swim": {
			attribute: "Strength",
			hasSubskills: false,
			armorCheckPenalty: true,
			doubleArmorCheckPenalty: true,
			allowedUntrained: true
		},
		"Tumble": {
			attribute: "Dexterity",
			hasSubskills: false,
			armorCheckPenalty: true,
			doubleArmorCheckPenalty: true,
			allowedUntrained: false
		},
		"Use Magic Device": {
			attribute: "Charisma",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: false
		},
		"Use Rope": {
			attribute: "Dexterity",
			hasSubskills: false,
			armorCheckPenalty: false,
			allowedUntrained: true
		}
	}
