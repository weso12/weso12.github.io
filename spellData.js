	const spellData =  {
		"Acid Splash": {
			college: "Conjuration",
			subschool: "Creation",
			descriptor: ["Acid"],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true
		},
		"Alarm": {
			college: "Abjuration",
			descriptor: [],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true,
			focusComponent: true,
			divineFocusComponent: true
		},
		"Animate Rope": {
			college: "Transmutation",
			descriptor: [],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true
		},
		"Arcane Mark": {
			college: "Universal",
			descriptor: [],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true
		},
		"Bane": {
			college: "Enchantment",
			subschool: "Compulsion",
			descriptor: ["Fear", "Mind-Affecting"],
			spellResistance: true,
			harmless: false,
			object: false,
			verbalComponent: true,
			somaticComponent: true,
			divineFocusComponent: true
		},
		"Bless": {
			college: "Enchantment",
			subschool: "Compulsion",
			descriptor: ["Mind-Affecting"],
			spellResistance: true,
			harmless: true,
			object: false,
			verbalComponent: true,
			somaticComponent: true,
			divineFocusComponent: true
		},
		"Bless Water": {
			college: "Transmutation",
			descriptor: ["Good"],
			spellResistance: true,
			harmless: false,
			object: true,
			verbalComponent: true,
			somaticComponent: true,
			materialComponent: true

		},
		"Burning Hands": {
			college: "Evocation",
			descriptor: ["Fire"],
			spellResistance: true,
			harmless: false,
			object: false,
			verbalComponent: true,
			somaticComponent: true
		},
		"Calm Animals": {
			college: "Enchantment",
			subschool: "Compulsion",
			descriptor: ["Mind-Affecting"],
			spellResistance: true,
			harmless: false,
			object: false,
			verbalComponent: true,
			somaticComponent: true
		},
		"Cause Fear": {
			college: "Necromacy",
			descriptor: ["Fear", "Mind-Affecting"],
			spellResistance: true,
			harmless: false,
			object: false,
			verbalComponent: true,
			somaticComponent: true
		},
		"Charm Animal": {
			college: "Enchantment",
			subschool: "Charm",
			descriptor: ["Mind-Affecting"],
			spellResistance: true,
			verbalComponent: true,
			somaticComponent: true
		},
		"Charm Person": {
			college: "Enchantment",
			subschool: "Charm",
			descriptor: ["Mind-Affecting"],
			spellResistance: true,
			verbalComponent: true,
			somaticComponent: true
		},
		"Chill Touch": {
			college: "Necromacy",
			descriptor: [],
			spellResistance: true,
			verbalComponent: true,
			somaticComponent: true
		},
		"Color Spray": {
			college: "Illusion",
			subschool: "Pattern",
			descriptor: ["Mind-Affecting"],
			spellResistance: true,
			verbalComponent: true,
			somaticComponent: true,
			materialComponent: true
		},
		"Command": {
			college: "Enchantment",
			subschool: "Compulsion",
			descriptor: ["Language-Dependent", "Mind-Affecting"],
			spellResistance: true,
			verbalComponent: true
		},
		"Comprehend Languages": {
			college: "Divination",
			descriptor: [],
			verbalComponent: true,
			somaticComponent: true,
			materialComponent: true,
			divineFocusComponent: true
		},
		"Create Water": {
			college: "Conjuration",
			subschool: "Creation",
			descriptor: ["Water"],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true
		},
		"Cure Light Wounds": {
			college: "Conjuration",
			subschool: "Healing",
			descriptor: [],
			spellResistance: true,
			harmless: true,
			verbalComponent: true,
			somaticComponent: true
		},
		"Cure Minor Wounds": {
			college: "Conjuration",
			subschool: "Healing",
			descriptor: [],
			spellResistance: true,
			harmless: true,
			verbalComponent: true,
			somaticComponent: true
		},
		"Curse Water": {
			college: "Necromacy",
			descriptor: ["Evil"],
			spellResistance: true,
			object: true,
			verbalComponent: true,
			somaticComponent: true,
			materialComponent: true
		},
		"Dancing Lights": {
			college: "Evocation",
			descriptor: ["Light"],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true
		},
		"Daze": {
			college: "Enchantment",
			subschool: "Compulsion",
			descriptor: ["Mind-Affecting"],
			spellResistance: true,
			verbalComponent: true,
			somaticComponent: true,
			materialComponent: true
		},
		"Deathwatch": {
			college: "Necromacy",
			descriptor: ["Evil"],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true
		},
		"Detect Animals or Plants": {
			college: "Divination",
			descriptor: [],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true
		},
		"Detect Chaos": {
			college: "Divination",
			descriptor: [],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true,
			divineFocusComponent: true
		},
		"Detect Evil": {
			college: "Divination",
			descriptor: [],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true,
			divineFocusComponent: true
		},
		"Detect Good": {
			college: "Divination",
			descriptor: [],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true,
			divineFocusComponent: true
		},
		"Detect Law": {
			college: "Divination",
			descriptor: [],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true,
			divineFocusComponent: true
		},
		"Detect Magic": {
			college: "Divination",
			descriptor: [],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true
		},
		"Detect Poison": {
			college: "Divination",
			descriptor: [],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true
		},
		"Detect Secret Doors": {
			college: "Divination",
			descriptor: [],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true
		},
		"Detect Snares and Pits": {
			college: "Divination",
			descriptor: [],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true
		},
		"Detect Undead": {
			college: "Divination",
			descriptor: [],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true,
			materialComponent: true,
			divineFocusComponent: true
		},
		"Disguise Self": {
			college: "Illusion",
			subschool: "Glamer",
			descriptor: [],
			verbalComponent: true,
			somaticComponent: true
		},
		"Disrupt Undead": {
			college: "Necromacy",
			descriptor: [],
			verbalComponent: true,
			somaticComponent: true
		},
		"Divine Favor": {
			college: "Evocation",
			descriptor: [],
			verbalComponent: true,
			somaticComponent: true,
			divineFocusComponent: true
		},
		"Doom": {
			college: "Necromacy",
			descriptor: ["Fear", "Mind-Affecting"],
			spellResistance: true,
			verbalComponent: true,
			somaticComponent: true,
			divineFocusComponent: true
		},
		"Endure Elements": {
			college: "Abjuration",
			descriptor: [],
			spellResistance: true,
			harmless: true,
			verbalComponent: true,
			somaticComponent: true,
		},
		"Enlarge Person": {
			college: "Transmutation",
			descriptor: [],
			spellResistance: true,
			verbalComponent: true,
			somaticComponent: true,
			materialComponent: true
		},
		"Entangle": {
			college: "Transmutation",
			descriptor: [],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true,
			divineFocusComponent: true
		},
		"Entropic Shield": {
			college: "Abjuration",
			descriptor: [],
			verbalComponent: true,
			somaticComponent: true
		},
		"Erase": {
			college: "Transmutation",
			descriptor: [],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true
		},
		"Expeditious Retreat": {
			college: "Transmutation",
			descriptor: [],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true
		},
		"Faerie Fire": {
			college: "Evocation",
			descriptor: ["Light"],
			spellResistance: true,
			verbalComponent: true,
			somaticComponent: true,
			divineFocusComponent: true
		},
		"Feather Fall": {
			college: "Transmutation",
			descriptor: [],
			spellResistance: true,
			object: true,
			verbalComponent: true
		},
		"Flare": {
			college: "Evocation",
			descriptor: ["Light"],
			spellResistance: true,
			verbalComponent: true
		},
		"Ghost Sound": {
			college: "Illusion",
			subschool: "Figment",
			descriptor: [],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true,
			materialComponent: true
		},
		"Goodberry": {
			college: "Transmutation",
			descriptor: [],
			spellResistance: true,
			verbalComponent: true,
			somaticComponent: true,
			divineFocusComponent: true
		},
		"Grease": {
			college: "Conjuration",
			subschool: "Creation",
			descriptor: [],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true,
			materialComponent: true
		},
		"Guidance": {
			college: "Divination",
			descriptor: [],
			spellResistance: true,
			verbalComponent: true,
			somaticComponent: true
		},
		"Hide from Animals": {
			college: "Abjuration",
			descriptor: [],
			spellResistance: true,
			somaticComponent: true,
			divineFocusComponent: true
		},
		"Hide from Undead": {
			college: "Abjuration",
			descriptor: [],
			spellResistance: true,
			verbalComponent: true,
			somaticComponent: true,
			divineFocusComponent: true
		},
		"Hold Portal": {
			college: "Abjuration",
			descriptor: [],
			spellResistance: false,
			verbalComponent: true
		},
		"Hypnotism": {
			college: "Enchantment",
			subschool: "Compulsion",
			descriptor: ["Mind-Affecting"],
			spellResistance: true,
			verbalComponent: true,
			somaticComponent: true
		},
		"Indentify": {
			college: "Divination",
			descriptor: [],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true,
			materialComponent: true,
			divineFocusComponent: true
		},
		"Inflict Light Wounds": {
			college: "Necromancy",
			descriptor: [],
			spellResistance: true,
			verbalComponent: true,
			somaticComponent: true
		},
		"Inflict Minor Wounds": {
			college: "Necromacy",
			descriptor: [],
			spellResistance: true,
			verbalComponent: true,
			somaticComponent: true
		},
		"Jump": {
			college: "Transmutation",
			descriptor: [],
			spellResistance: true,
			verbalComponent: true,
			somaticComponent: true,
			materialComponent: true
		},
		"Know Direction": {
			college: "Divination",
			descriptor: [],
			verbalComponent: true,
			somaticComponent: true
		},
		"Light": {
			college: "Evocation",
			descriptor: ["Light"],
			spellResistance: false,
			verbalComponent: true,
			materialComponent: true,
			divineFocusComponent: true
		},
		"Longstrider": {
			college: "Transmutation",
			descriptor: [],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true,
			materialComponent: true
		},
		"Lullaby": {
			college: "Enchantment",
			subschool: "Compulsion",
			descriptor: ["Mind-Affecting"],
			spellResistance: true,
			verbalComponent: true,
			somaticComponent: true
		},
		"Mage Armor": {
			college: "Conjuration",
			subschool: "Creation",
			descriptor: ["Force"],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true,
			focusComponent: true
		},
		"Mage Hand": {
			college: "Transmutation",
			descriptor: [],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true
		},
		"Magic Fang": {
			college: "Transmutation",
			descriptor: [],
			spellResistance: true,
			harmless: true,
			verbalComponent: true,
			somaticComponent: true,
			divineFocusComponent: true
		},
		"Magic Missile": {
			college: "Evocation",
			descriptor: "Force",
			spellResistance: true,
			verbalComponent: true,
			somaticComponent: true
		},
		"Magic Stone": {
			college: "Transmutation",
			descriptor: [],
			spellResistance: true,
			harmless: true,
			object: true,
			verbalComponent: true,
			somaticComponent: true,
			divineFocusComponent: true
		},
		"Magic Weapon": {
			college: "Transmutation",
			descriptor: [],
			spellResistance: true,
			harmless: true,
			object: true,
			verbalComponent: true,
			somaticComponent: true,
			divineFocusComponent: true
		},
		"Mending": {
			college: "Transmutation",
			descriptor: [],
			spellResistance: true,
			harmless: true,
			object: true,
			verbalComponent: true,
			somaticComponent: true
		},
		"Message": {
			college: "Transmutation",
			descriptor: ["Language-Dependent"],
			spellResistance: true,
			verbalComponent: true,
			somaticComponent: true,
			focusComponent: true
		},
		"Mount": {
			college: "Conjuration",
			subschool: "Summoning",
			descriptor: [],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true,
			materialComponent: true
		},
		"Nystul's Magic Aura": {
			college: "Illusion",
			subschool: "Glamer",
			descriptor: [],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true,
			focusComponent: true
		},
		"Obscuring Mist": {
			college: "Conjuration",
			subschool: "Creation",
			descriptor: [],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true,
		},
		"Open/Close": {
			college: "Transmutation",
			descriptor: [],
			spellResistance: true,
			object: true,
			verbalComponent: true,
			somaticComponent: true,
			focusComponent: true
		},
		"Pass without Trace": {
			college: "Transmutation",
			descriptor: [],
			spellResistance: true,
			harmless: true,
			verbalComponent: true,
			somaticComponent: true,
			divineFocusComponent: true
		},
		"Prestidigitation": {
			college: "Universal",
			descriptor: [],
			spellResistance: true,
			verbalComponent: true,
			somaticComponent: true
		},
		"Produce Flame": {
			college: "Evocation",
			descriptor: ["Fire"],
			spellResistance: true,
			verbalComponent: true,
			somaticComponent: true
		},
		"Protection from Chaos": {
			college: "Abjuration",
			descriptor: ["Lawful"],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true,
			materialComponent: true,
			divineFocusComponent: true
		},
		"Protection from Evil": {
			college: "Abjuration",
			descriptor: ["Good"],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true,
			materialComponent: true,
			divineFocusComponent: true
		},
		"Protection from Good": {
			college: "Abjuration",
			descriptor: ["Evil"],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true,
			materialComponent: true,
			divineFocusComponent: true
		},
		"Protection from Law": {
			college: "Abjuration",
			descriptor: ["Chaotic"],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true,
			materialComponent: true,
			divineFocusComponent: true
		},
		"Purify Food and Drink": {
			college: "Transmutation",
			descriptor: [],
			spellResistance: true,
			object: true,
			verbalComponent: true,
			somaticComponent: true
		},
		"Ray of Enfeeblement": {
			college: "Necromacy",
			descriptor: [],
			spellResistance: true,
			verbalComponent: true,
			somaticComponent: true
		},
		"Ray of Frost": {
			college: "Evocation",
			descriptor: ["Cold"],
			spellResistance: true,
			verbalComponent: true,
			somaticComponent: true
		},
		"Read Magic": {
			college: "Divination",
			descriptor: [],
			verbalComponent: true,
			somaticComponent: true,
			focusComponent: true
		},
		"Reduce Person": {
			college: "Transmutation",
			descriptor: [],
			spellResistance: true,
			verbalComponent: true,
			somaticComponent: true,
			materialComponent: true
		},
		"Remove Fear": {
			college: "Abjuration",
			descriptor: [],
			spellResistance: true,
			harmless: true,
			verbalComponent: true,
			somaticComponent: true
		},
		"Resistance": {
			college: "Abjuration",
			descriptor: [],
			spellResistance: true,
			harmless: true,
			verbalComponent: true,
			somaticComponent: true,
			materialComponent: true,
			divineFocusComponent: true
		},
		"Sanctuary": {
			college: "Abjuration",
			descriptor: [],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true,
			divineFocusComponent: true
		},
		"Shield": {
			college: "Abjuration",
			descriptor: ["Force"],
			verbalComponent: true,
			somaticComponent: true
		},
		"Shield of Faith": {
			college: "Abjuration",
			descriptor: [],
			spellResistance: true,
			harmless: true,
			verbalComponent: true,
			somaticComponent: true,
			materialComponent: true
		},
		"Shillelagh": {
			college: "Transmutation",
			descriptor: [],
			spellResistance: true,
			object: true,
			verbalComponent: true,
			somaticComponent: true,
			divineFocusComponent: true
		},
		"Shocking Grasp": {
			college: "Evocation",
			descriptor: ["Electricity"],
			spellResistance: true,
			verbalComponent: true,
			somaticComponent: true
		},
		"Silent Image": {
			college: "Illusion",
			descriptor: ["Figment"],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true,
			focusComponent: true
		},
		"Sleep": {
			college: "Enchantment",
			subschool: "Compulsion",
			descriptor: ["Mind-Affecting"],
			spellResistance: true,
			verbalComponent: true,
			somaticComponent: true,
			materialComponent: true
		},
		"Speak with Animals": {
			college: "Divination",
			descriptor: [],
			spellResistance: true,
			verbalComponent: true,
			somaticComponent: true,
		},
		"Summon Instrument": {
			college: "Conjuration",
			subschool: "Summoning",
			descriptor: [],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true
		},
		"Summon Monster I": {
			college: "Conjuration",
			subschool: "Summoning",
			descriptor: [],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true,
			focusComponent: true,
			divineFocusComponent: true
		},
		"Summon Nature's Ally I": {
			college: "Conjuration",
			subschool: "Summoning",
			descriptor: [],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true,
			divineFocusComponent: true
		},
		"Tenser's Floating Disk": {
			college: "Evocation",
			descriptor: ["Force"],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true,
			materialComponent: true
		},
		"Touch of Fatigue": {
			college: "Necromacy",
			descriptor: [],
			spellResistance: true,
			verbalComponent: true,
			somaticComponent: true,
			materialComponent: true
		},
		"True Strike": {
			college: "Divination",
			descriptor: [],
			verbalComponent: true,
			somaticComponent: true
		},
		"Unseen Servant": {
			college: "Conjuration",
			subschool: "Creation",
			descriptor: [],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true,
			materialComponent: true
		},
		"Ventriloquism": {
			college: "Illusion",
			subschool: "Figment",
			descriptor: [],
			spellResistance: false,
			verbalComponent: true,
			somaticComponent: true
		},
		"Virtue": {
			college: "Transmutation",
			descriptor:  [],
			spellResistance: true,
			harmless: true,
			verbalComponent: true,
			somaticComponent: true,
			divineFocusComponent: true
		}
	}
