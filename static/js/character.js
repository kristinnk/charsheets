
function characterViewModel( cid ) {
    var self = this;
    // -----------
    // Observables
    // -----------


    function skillItem(skillName, keyAB, CS, rank, miscMod, context) {


        this.skillName = ko.observable(skillName);
        this.keyAb = ko.observable(keyAb);
        this.CS = ko.observable(CS);
        this.rank = ko.observable(rank);
        this.miscMod = ko.observable(miscMod);

        this.checkPen = ko.computed(function() { 
                if ( this.keyAb() == "dex" || this.keyAb() == "Dex" ) {
                    value = context.dexPen();
                    return value;
                };
        }, this);

        this.abMod = ko.computed(function() {
            var value = 0;
            switch(this.keyAb()) {
                case "str":
                case "Str": value = context.highest_str_mod();
                            break;
                case "dex":
                case "Dex": value = context.highest_dex_mod();
                            break;
                case "con":
                case "Con": value = context.highest_con_mod();
                            break;
                case "int":
                case "Int": value = context.highest_int_mod();
                            break;
                case "wis":
                case "Wis": value = context.highest_wis_mod();
                            break;
                case "chr":
                case "Chr": value = context.highest_chr_mod();
                            break;
                default: value =  0;
            }
            return value;
        }, this);


        this.total = ko.computed(function() {
            stat = 0;
                        if ( this.abMod() != "") {
                            stat = stat + parseInt(this.abMod());   
                        }

                        stat = stat + parseInt(this.rank) + parseInt(this.miscMod);

                        if ( parseInt(this.checkPen()) ) {
                            if ( parseInt(this.checkPen()) < 0 )
                                stat = stat + parseInt(this.checkPen());
                            else
                                stat = stat - parseInt(this.checkPen());
                        }


                        if ( this.CS() == true ) {
                            stat = parseInt(stat) + 3;
                        }

                        if ( isNaN(stat) ) {
                            return 0;
                        } else {
                            return parseInt(stat);
                        }
                    }, this);

        };


    ko.observable.fn.valueOf = function(){return this();}
    ko.observable.fn.toString = function(){return this();}


    // User config
    // --------------------

    self.showStats = ko.observable(true);
    self.showSkills = ko.observable(true);
    self.showEquipment = ko.observable(true);
    self.showSpells = ko.observable(true);
    self.showCompanions = ko.observable(true);
    self.showBackground = ko.observable(true);
    self.showBuffs = ko.observable(true); // Change to false when done

    // General information
    // --------------------
    self.char_name = ko.observable();
    self.char_class = ko.observable();
    self.char_race = ko.observable();
    self.curr_xp = ko.observable();
    self.next_level_xp = ko.observable();
    self.char_level = ko.observable();
    self.char_alignment = ko.observable();
    self.campaign = ko.observable();
    self.deity = ko.observable();
    self.char_size = ko.observable();
    self.char_age = ko.observable();
    self.char_gender = ko.observable();
    self.char_height = ko.observable();
    self.char_weight = ko.observable();
    self.char_eyes = ko.observable();
    self.char_hair = ko.observable();

    self.imageLink = ko.observable("http://charsheets.herokuapp.com/static/images/generic.jpg");

    self.language_list = ko.observableArray();
    self.backstory = ko.observable();
    self.events = ko.observableArray();
    self.notes = ko.observableArray();
    self.npcInfo = ko.observableArray([{name: "", notes: "", loc: ""}]);

    self.currency_Pp = ko.observable(0);
    self.currency_Gp = ko.observable(0);
    self.currency_Sp = ko.observable(0);
    self.currency_Cp = ko.observable(0);

    self.current_hitpoints = ko.observable();
    self.max_hitpoints = ko.observable();

    self.initiative = ko.observable();

    self.featList = ko.observableArray([{item: ""}]);
    self.featAbilitiesTraitsList = ko.observableArray([{item: ""}]);
    self.baseAttackBonus = ko.observable(0);

    self.fortSaveBase = ko.observable(0);
    self.fortSaveMagicMod = ko.observable(0);
    self.fortSaveMiscMod = ko.observable(0);
    self.fortSaveTempMod = ko.observable(0);

    self.refSaveBase = ko.observable(0);
    self.refSaveMagicMod = ko.observable(0);
    self.refSaveMiscMod = ko.observable(0);
    self.refSaveTempMod = ko.observable(0);
    
    self.willSaveBase = ko.observable(0);
    self.willSaveMagicMod = ko.observable(0);
    self.willSaveMiscMod = ko.observable(0);
    self.willSaveTempMod = ko.observable(0);
    
    self.miscMeleeMod = ko.observable(0);
    self.miscCMBMod = ko.observable(0);
    self.miscCMDMod = ko.observable(0);
    self.miscRangedMod = ko.observable(0);

    self.tempMeleeMod = ko.observable(0);
    self.tempCMBMod = ko.observable(0);
    self.tempCMDMod = ko.observable(0);
    self.tempRangedMod = ko.observable(0);

    self.MeleeMod = ko.observable(0);
    self.CMBMod = ko.observable(0);
    self.CMDMod = ko.observable(0);
    self.RangedMod = ko.observable(0);


    // resistances

    self.spellResist = ko.observable();
    self.acidResist = ko.observable();
    self.coldResist = ko.observable();
    self.electricityResist = ko.observable();
    self.fireResist = ko.observable();
    self.sonicResist = ko.observable();
    self.otherDefences = ko.observable();

    self.skillFilterText = ko.observable("");

    self.buffList = ko.observableArray();


    self.spells_0 = ko.observableArray([{ qty: "", used: "", spellName: "", description: "", spellComponent: "" }]);
    self.spells_1 = ko.observableArray([{ qty: "", used: "", spellName: "", description: "", spellComponent: "" }]);
    self.spells_2 = ko.observableArray([{ qty: "", used: "", spellName: "", description: "", spellComponent: "" }]);
    self.spells_3 = ko.observableArray([{ qty: "", used: "", spellName: "", description: "", spellComponent: "" }]);
    self.spells_4 = ko.observableArray([{ qty: "", used: "", spellName: "", description: "", spellComponent: "" }]);
    self.spells_5 = ko.observableArray([{ qty: "", used: "", spellName: "", description: "", spellComponent: "" }]);
    self.spells_6 = ko.observableArray([{ qty: "", used: "", spellName: "", description: "", spellComponent: "" }]);
    self.spells_7 = ko.observableArray([{ qty: "", used: "", spellName: "", description: "", spellComponent: "" }]);
    self.spells_8 = ko.observableArray([{ qty: "", used: "", spellName: "", description: "", spellComponent: "" }]);
    self.spells_9 = ko.observableArray([{ qty: "", used: "", spellName: "", description: "", spellComponent: "" }]);

    self.spellsPerDay0 = ko.observable();
    self.spellsPerDay1 = ko.observable();
    self.spellsPerDay2 = ko.observable();
    self.spellsPerDay3 = ko.observable();
    self.spellsPerDay4 = ko.observable();
    self.spellsPerDay5 = ko.observable();
    self.spellsPerDay6 = ko.observable();
    self.spellsPerDay7 = ko.observable();
    self.spellsPerDay8 = ko.observable();
    self.spellsPerDay9 = ko.observable();

    self.spellDC0 = ko.observable();
    self.spellDC1 = ko.observable();
    self.spellDC2 = ko.observable();
    self.spellDC3 = ko.observable();
    self.spellDC4 = ko.observable();
    self.spellDC5 = ko.observable();
    self.spellDC6 = ko.observable();
    self.spellDC7 = ko.observable();
    self.spellDC8 = ko.observable();
    self.spellDC9 = ko.observable();
    self.spellNotes = ko.observable();

    self.companion_list = ko.observableArray();

    self.skillList = ko.observableArray();

    self.weaponList = ko.observableArray([{ weaponName: "", 
                                            wielded: false, 
                                            carried: false,
                                            totalAB: "", 
                                            damage: "", 
                                            critical: "", 
                                            range: "",
                                            specialProperties: "", 
                                            ammunition: "", 
                                            weight: "", 
                                            size: "", 
                                            type: "" 
                                        }]);

    self.protectiveItemList = ko.observableArray([{ armorName: "",
                                                    wielded: false,
                                                    carried: false,
                                                    type: "",
                                                    acBonus: "",
                                                    checkPen: "",
                                                    specialProperties: "",
                                                    weight: "",
                                                    speed: "",
                                                    spellFail: "",
                                                    maxDex: ""
    }]);

    self.possessionList = ko.observableArray([{
                                            item: "",
                                            charges: "",
                                            weight: "",
                                            LOC: ""
                                        }]);

    
    // Abilities
    // --------------------

    // str
    self.attr_str = ko.observable( 10 );
    self.attr_str_temp = ko.observable("");

        this.attr_str_mod = ko.computed(function() {
            return Math.floor( ( this.attr_str()/2 ) - 5 );
        }, this);

        this.attr_str_temp_mod = ko.computed(function() {
            if ( this.attr_str_temp() == "")
                return "";
            else
                return Math.floor( ( this.attr_str_temp()/2 ) - 5 );
        }, this);

        this.highest_str_mod = ko.computed(function() {
            if ( self.attr_str_mod == 0 && self.attr_str_temp_mod == 0 ) {
                return 0;
                }
            if ( Math.abs(self.attr_str_mod()) > Math.abs(self.attr_str_temp_mod()) ) {
                return self.attr_str_mod().toString();
            } else {
                return self.attr_str_temp_mod().toString();
            }
        }, this);


    // dex
    self.attr_dex = ko.observable( 10 );
    self.attr_dex_temp = ko.observable("");

        this.attr_dex_mod = ko.computed(function() {
            return Math.floor( ( this.attr_dex()/2 ) - 5 );
        }, this);

        this.attr_dex_temp_mod = ko.computed(function() {
            if ( this.attr_dex_temp() == "")
                return "";
            else
                return Math.floor( ( this.attr_dex_temp()/2 ) - 5 );
        }, this);


        this.highest_dex_mod = ko.computed(function() {
            if ( self.attr_dex_mod == 0 && self.attr_dex_temp_mod == 0 ) {
                return 0;
                }
            if ( Math.abs(self.attr_dex_mod()) > Math.abs(self.attr_dex_temp_mod()) ) {
                return self.attr_dex_mod();
            } else {
                return self.attr_dex_temp_mod();
            }
        }, this);


    this.highest_armor_dex_mod = ko.computed(function() {
        var maxDex = self.highest_dex_mod();
        ko.utils.arrayForEach( self.protectiveItemList(), function( item ) {
            if ( item.maxDex < maxDex ) {
                if (item.wielded)
                    if ( item.maxDex )
                        maxDex = item.maxDex;
            }
        });

        var retValue = self.attr_dex_mod();
        if ( retValue < self.attr_dex_temp_mod() ) retValue = self.attr_dex_temp_mod();
        if ( retValue > maxDex ) retValue = maxDex;
        return parseInt(retValue);
    }, this);

    // con
    self.attr_con = ko.observable( 10 );
    self.attr_con_temp = ko.observable("");

        this.attr_con_mod = ko.computed(function() {
            return Math.floor( ( this.attr_con()/2 ) - 5 );
        }, this);

        this.attr_con_temp_mod = ko.computed(function() {
            if ( this.attr_con_temp() == "")
                return "";
            else
                return Math.floor( ( this.attr_con_temp()/2 ) - 5 );
        }, this);

        this.highest_con_mod = ko.computed(function() {
            if ( Math.abs(self.attr_con_mod()) > Math.abs(self.attr_con_temp_mod()) ) {
                return self.attr_con_mod();
            } else {
                return self.attr_con_temp_mod();
            }
        }, this);

    // int
    self.attr_int = ko.observable( 10 );
    self.attr_int_temp = ko.observable("");

        this.attr_int_mod = ko.computed(function() {
            return Math.floor( ( this.attr_int()/2 ) - 5 );
        }, this);

        this.attr_int_temp_mod = ko.computed(function() {
            if ( this.attr_int_temp() == "")
                return "";
            else
                return Math.floor( ( this.attr_int_temp()/2 ) - 5 );
        }, this);

        this.highest_int_mod = ko.computed(function() {
            if ( Math.abs(self.attr_int_mod()) > Math.abs(self.attr_int_temp_mod()) ) {
                return self.attr_int_mod();
            } else {
                return self.attr_int_temp_mod();
            }
        }, this);

    // wis
    self.attr_wis = ko.observable( 10 );
    self.attr_wis_temp = ko.observable("");

        this.attr_wis_mod = ko.computed(function() {
            return Math.floor( ( this.attr_wis()/2 ) - 5 );
        }, this);

        this.attr_wis_temp_mod = ko.computed(function() {
            if ( this.attr_wis_temp() == "")
                return "";
            else
                return Math.floor( ( this.attr_wis_temp()/2 ) - 5 );
        }, this);

        this.highest_wis_mod = ko.computed(function() {
            if ( Math.abs(self.attr_wis_mod()) > Math.abs(self.attr_wis_temp_mod()) ) {
                return self.attr_wis_mod();
            } else {
                return self.attr_wis_temp_mod();
            }
        }, this);

    // chr
    self.attr_chr = ko.observable( 10 );
    self.attr_chr_temp = ko.observable("");

        this.attr_chr_mod = ko.computed(function() {
            return Math.floor( ( this.attr_chr()/2 ) - 5 );
        }, this);

        this.attr_chr_temp_mod = ko.computed(function() {
            if ( this.attr_chr_temp() == "")
                return "";
            else
                return Math.floor( ( this.attr_chr_temp()/2 ) - 5 );
        }, this);

        this.highest_chr_mod = ko.computed(function() {
            if ( Math.abs(self.attr_chr_mod()) > Math.abs(self.attr_chr_temp_mod()) ) {
                return self.attr_chr_mod();
            } else {
                return self.attr_chr_temp_mod();
            }
        }, this);

    self.getAbility = function(ab) {
        switch(ab) {
            case "Str": return self.highest_str_mod;
                        break;
            case "Dex": return self.highest_dex_mod;
                        break;
            case "Con": return self.highest_con_mod;
                        break;
            case "Int": return self.highest_int_mod;
                        break;
            case "Wis": return self.highest_wis_mod;
                        break;
            case "Cha":
            case "Chr": return self.highest_chr_mod;
                        break;
            default: return 0;
        }
    };


    // Generic AC fields

    self.otherAC = ko.observable(0);
    self.classAC = ko.observable(0);

    // Buff calculations

    self.totalAcBuff = ko.observable(0);
    self.totalDmgBuff = ko.observable(0);
    self.totalAttackBuff = ko.observable(0);

    self.totalBuffCalculation = function() {
        // Sort by type

        var acValues = {};
        ko.utils.arrayForEach( self.buffList(), function( item ) {
            if (item.active) {
                if (item.acBonus != undefined) {
                    if (acValues[item.type] != undefined) {
                        if (parseInt(acValues[item.type]) < parseInt(item.acBonus)) {
                            acValues[item.type] = parseInt(item.acBonus);
                        }
                    } 
                    else {
                        acValues[item.type] = item.acBonus;
                    }
                }
            }
        });

        var attackValues = {};
        ko.utils.arrayForEach( self.buffList(), function( item ) {
            if (item.active) {
                if (item.attackBonus != undefined) {
                    if (attackValues[item.type] != undefined) {
                        if (parseInt(attackValues[item.type]) < parseInt(item.attackBonus)) {
                            attackValues[item.type] = parseInt(item.attackBonus);
                        }
                    } 
                    else {
                        attackValues[item.type] = item.attackBonus;
                    }
                }
            }
        });

        var dmgValues = {};
        ko.utils.arrayForEach( self.buffList(), function( item ) {
            if (item.active) {
                if (item.dmgBonus != undefined) {
                    if (dmgValues[item.type] != undefined) {
                        if (parseInt(dmgValues[item.type]) < parseInt(item.dmgBonus)) {
                            dmgValues[item.type] = parseInt(item.dmgBonus);
                        }
                    } 
                    else {
                        dmgValues[item.type] = item.dmgBonus;
                    }
                }
            }
        });

        // Calculate totals
        self.totalAttackBuff(0);
        self.totalAcBuff(0);
        self.totalDmgBuff(0);

        $.each(acValues, function(key, value) {
            self.totalAcBuff(self.totalAcBuff() + parseInt(value));
        });

        $.each(attackValues, function(key, value) {
            self.totalAttackBuff(self.totalAttackBuff() + parseInt(value));
        });

        $.each(dmgValues, function(key, value) {
            self.totalDmgBuff(self.totalDmgBuff() + parseInt(value));
        });

        return 0;
    }

    // Equipment based AC fields

    self.armorAC = ko.computed(function() {
        var totalAC = 0;
        ko.utils.arrayForEach( self.protectiveItemList(), function( item ) {
            if (item.wielded && item.type == "Armor" && item.acBonus > totalAC )
                totalAC = parseInt(item.acBonus);
        });
        return totalAC;
    }, this);    

    self.alchemicalAC = ko.computed(function() {
        var totalAC = 0;
        ko.utils.arrayForEach( self.protectiveItemList(), function( item ) {
            if (item.wielded && item.type == "Alchemical" && item.acBonus > totalAC )
                totalAC = parseInt(item.acBonus);
        });
        return totalAC;
    }, this);

    self.circumstanceAC = ko.computed(function() {
        var totalAC = 0;
        ko.utils.arrayForEach( self.protectiveItemList(), function( item ) {
            if (item.wielded && item.type == "Circumstance" && item.acBonus > totalAC )
                totalAC = parseInt(item.acBonus);
        });
        return totalAC;
    }, this);

    self.competenceAC = ko.computed(function() {
        var totalAC = 0;
        ko.utils.arrayForEach( self.protectiveItemList(), function( item ) {
            if (item.wielded && item.type == "Competence" && item.acBonus > totalAC )
                totalAC = parseInt(item.acBonus);
        });
        return totalAC;
    }, this);

    self.deflectAC = ko.computed(function() {
        var totalAC = 0;
        ko.utils.arrayForEach( self.protectiveItemList(), function( item ) {
            if (item.wielded && item.type == "Deflection" && item.acBonus > totalAC )
                totalAC = parseInt(item.acBonus);
        });
        return totalAC;
    }, this);

    self.dodgeAC = ko.computed(function() {
        var totalAC = 0;
        ko.utils.arrayForEach( self.protectiveItemList(), function( item ) {
            if (item.wielded && item.type == "Dodge" && item.acBonus > totalAC )
                totalAC = parseInt(item.acBonus);
        });
        return totalAC;
    }, this);

    self.EnhancementAC = ko.computed(function() {
        var totalAC = 0;
        ko.utils.arrayForEach( self.protectiveItemList(), function( item ) {
            if (item.wielded && item.type == "Enhancement" && item.acBonus > totalAC )
                totalAC = parseInt(item.acBonus);
        });
        return totalAC;
    }, this);

    self.insightAC = ko.computed(function() {
        var totalAC = 0;
        ko.utils.arrayForEach( self.protectiveItemList(), function( item ) {
            if (item.wielded && item.type == "Insight" && item.acBonus > totalAC )
                totalAC = parseInt(item.acBonus);
        });
        return totalAC;
    }, this);
    
    self.luckAC = ko.computed(function() {
        var totalAC = 0;
        ko.utils.arrayForEach( self.protectiveItemList(), function( item ) {
            if (item.wielded && item.type == "Luck" && item.acBonus > totalAC )
                totalAC = parseInt(item.acBonus);
        });
        return totalAC;
    }, this);
    
    self.moraleAC = ko.computed(function() {
        var totalAC = 0;
        ko.utils.arrayForEach( self.protectiveItemList(), function( item ) {
            if (item.wielded && item.type == "Morale" && item.acBonus > totalAC )
                totalAC = parseInt(item.acBonus);
        });
        return totalAC;
    }, this);

    self.naturalAC = ko.computed(function() {
        var totalAC = 0;
        ko.utils.arrayForEach( self.protectiveItemList(), function( item ) {
            if (item.wielded && item.type == "Natural" && item.acBonus > totalAC )
                totalAC = parseInt(item.acBonus);
        });
        return totalAC;
    }, this);

    self.profaneAC = ko.computed(function() {
        var totalAC = 0;
        ko.utils.arrayForEach( self.protectiveItemList(), function( item ) {
            if (item.wielded && item.type == "Profane" && item.acBonus > totalAC )
                totalAC = parseInt(item.acBonus);
        });
        return totalAC;
    }, this);

    self.racialAC = ko.computed(function() {
        var totalAC = 0;
        ko.utils.arrayForEach( self.protectiveItemList(), function( item ) {
            if (item.wielded && item.type == "Racial" && item.acBonus > totalAC )
                totalAC = parseInt(item.acBonus);
        });
        return totalAC;
    }, this);

    self.resistanceAC = ko.computed(function() {
        var totalAC = 0;
        ko.utils.arrayForEach( self.protectiveItemList(), function( item ) {
            if (item.wielded && item.type == "Resistance" && item.acBonus > totalAC )
                totalAC = parseInt(item.acBonus);
        });
        return totalAC;
    }, this);

    
    self.shieldAC = ko.computed(function() {
        var totalAC = 0;
        ko.utils.arrayForEach( self.protectiveItemList(), function( item ) {
            if (item.wielded && item.type == "Shield" && item.acBonus > totalAC )
                totalAC = parseInt(item.acBonus);
        });
        return totalAC;
    }, this);

    self.sizeAC = ko.computed(function() {
        var totalAC = 0;
        ko.utils.arrayForEach( self.protectiveItemList(), function( item ) {
            if (item.wielded && item.type == "Size" && item.acBonus > totalAC )
                totalAC = parseInt(item.acBonus);
        });
        return totalAC;
    }, this);

    self.traitAC = ko.computed(function() {
        var totalAC = 0;
        ko.utils.arrayForEach( self.protectiveItemList(), function( item ) {
            if (item.wielded && item.type == "Trait" && item.acBonus > totalAC )
                totalAC = parseInt(item.acBonus);
        });
        return totalAC;
    }, this);

    self.dexPen = ko.computed(function() {
        var basenum = 0;
        var dpList = [];
        dpList.push(basenum);
        var totalPen = basenum;
        ko.utils.arrayForEach( self.protectiveItemList(), function( item ) {
            if (item.wielded)
                dpList.push(item.checkPen);
        });
        dpList.sort(function(a,b){return a-b});
        return dpList[0];
    }, this);

    self.miscAC = ko.computed(function() {
        var totalAC = 0;
        totalAC += self.alchemicalAC();
        totalAC += self.circumstanceAC();
        totalAC += self.competenceAC();
        totalAC += self.dodgeAC();
        totalAC += self.EnhancementAC();
        totalAC += self.insightAC();
        totalAC += self.moraleAC();
        totalAC += self.luckAC();
        totalAC += self.profaneAC();
        totalAC += self.racialAC();
        totalAC += self.resistanceAC();
        totalAC += self.traitAC();
        return totalAC;
    }, this);
    

    self.getDexPen = function() {
        var totalPen = 0;
        ko.utils.arrayForEach( this.protectiveItemList(), function( item ) {
            if (item.wielded)
                if ( parseInt(item.checkPen) > totalPen )
                    totalPen = parseInt(item.checkPen);
        });
        return totalPen;
    }


    self.total_ac = ko.computed(function() {
        dac = self.highest_armor_dex_mod();
        if ( dac == "" ) dac = 0;

        var total = 10 + dac;

        if ( self.armorAC() != "" )
            total = total + parseInt(self.armorAC());

        // if ( self.shieldAC() == "" ) self.shieldAC( 0 );
        total = total + parseInt(self.shieldAC());

        if ( self.otherAC() == "" ) self.otherAC( 0 );
        total = total + parseInt(self.otherAC());

        // if ( self.sizeAC() == "" ) self.sizeAC( 0 );
        total = total + parseInt(self.sizeAC());

        // if ( self.naturalAC() == "" ) self.naturalAC( 0 );
        total = total + parseInt(self.naturalAC());

        // if ( self.deflectAC() == "" ) self.deflectAC( 0 );
        total = total + parseInt(self.deflectAC());

        // if ( self.miscAC() == "" ) self.miscAC( 0 );
        total = total + parseInt(self.miscAC());

        if ( self.classAC() == "" ) self.classAC( 0 );
        total = total + parseInt(self.classAC());

        return total;

    }, this);


    self.touch_ac = ko.computed(function() {
        dac = self.highest_dex_mod();
        if ( dac == "" ) dac = 0;
        var total = 10 + dac;

        if ( self.otherAC() == "" ) self.otherAC( 0 );
        total = total + parseInt(self.otherAC());

        // if ( self.sizeAC() == "" ) self.sizeAC( 0 );
        total = total + parseInt(self.sizeAC());

        //if ( self.deflectAC() == "" ) self.deflectAC( 0 );
        total = total + parseInt(self.deflectAC());
        
        if ( self.classAC() == "" ) self.classAC( 0 );
        total = total + parseInt(self.classAC());
        
        return total;
    }, this);


    self.flatfFooted_ac = ko.computed(function() {
        var total = 10 + parseInt(self.armorAC());
        total = total + parseInt(self.shieldAC());
        if ( self.otherAC() == "" ) self.otherAC( 0 );
        total = total + parseInt(self.otherAC());
        total = total + parseInt(self.sizeAC());
        total = total + parseInt(self.naturalAC());
        total = total + parseInt(self.deflectAC());
        total = total + parseInt(self.miscAC());

        if ( self.classAC() == "" ) self.classAC( 0 );
        total = total + parseInt(self.classAC());
        
        return total;
    }, this);


    // Skills
    self.populateInitialSkillList = function() {
        // skillmod and ability mod are filled in automatically
        // self.skillList.push(skillItem(skillName = "Acrobatics", keyAb = "Dex", CS = false, rank = 0, miscMod = 0, checkPen = 0 ));
        // self.skillList.push({skillName: "Acrobatics", keyAb: "Dex", CS: false, rank: 0, miscMod: 0, checkPen: 0 });
        
        self.skillList.push( new skillItem( skillName = "Acrobatics", keyAb = "Dex", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Appraise", keyAb = "Int", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Bluff", keyAb = "Chr", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Climb", keyAb = "Str", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Craft()", keyAb = "Int", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Diplomacy", keyAb = "Chr", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Disable Device", keyAb = "Dex", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Disguise", keyAb = "Chr", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Escape Artist", keyAb = "Dex", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Fly", keyAb = "Dex", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Handle Animal", keyAb = "Chr", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Heal", keyAb = "Wis", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Intimidate", keyAb = "Chr", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Knowledge = Arcana", keyAb = "Int", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Knowledge = Architecture", keyAb = "Int", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Knowledge = Dungeoneering", keyAb = "Int", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Knowledge = Geography", keyAb = "Int", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Knowledge = History", keyAb = "Int", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Knowledge = Local", keyAb = "Int", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Knowledge = Nature", keyAb = "Int", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Knowledge = Nobility", keyAb = "Int", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Knowledge = Religion", keyAb = "Int", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Knowledge = The Planes", keyAb = "Int", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Linguistics", keyAb = "Int", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Perception", keyAb = "Wis", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Perform", keyAb = "Chr", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Profession()", keyAb = "Wis", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Ride", keyAb = "Dex", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Sense Motive", keyAb = "Wis", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Sleight of Hand", keyAb = "Dex", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Spellcraft", keyAb = "Int", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Stealth", keyAb = "Dex", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Survival", keyAb = "Wis", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Swim", keyAb = "Str", CS = false, rank = 0, miscMod = 0, self ));
        self.skillList.push( new skillItem( skillName = "Use Magic Device", keyAb = "Cha", CS = false, rank = 0, miscMod = 0, self ));
        
    };


    self.filteredSkillList = ko.computed(function() {
        var filter = this.skillFilterText().toLowerCase();
        if (!filter) {
            return this.skillList();
        } else {
            return ko.utils.arrayFilter(this.skillList(), function(item) {
                
                return item.skillName().toLowerCase().indexOf(filter) !== -1

//                return ko.utils.stringStartsWith(item.skillName().toLowerCase(), filter);
            });
        }
    }, self);

    // Misc function
    self.add_spell = function(spellLevel) {
        switch (spellLevel) {
            case 0: self.spells_0.push({ qty: "", used: "", spellName: "", description: "", spellComponent: "" });
                break;
            case 1: self.spells_1.push({ qty: "", used: "", spellName: "", description: "", spellComponent: "" });
                break;
            case 2: self.spells_2.push({ qty: "", used: "", spellName: "", description: "", spellComponent: "" });
                break;
            case 3: self.spells_3.push({ qty: "", used: "", spellName: "", description: "", spellComponent: "" });
                break;
            case 4: self.spells_4.push({ qty: "", used: "", spellName: "", description: "", spellComponent: "" });
                break;
            case 5: self.spells_5.push({ qty: "", used: "", spellName: "", description: "", spellComponent: "" });
                break;
            case 6: self.spells_6.push({ qty: "", used: "", spellName: "", description: "", spellComponent: "" });
                break;
            case 7: self.spells_7.push({ qty: "", used: "", spellName: "", description: "", spellComponent: "" });
                break;
            case 8: self.spells_8.push({ qty: "", used: "", spellName: "", description: "", spellComponent: "" });
                break;
            case 9: self.spells_9.push({ qty: "", used: "", spellName: "", description: "", spellComponent: "" });
                break;
            default: console.log(spellLevel);
        }
    }


    self.calcTotal = function(x, y, z, p, CS) {
        stat = self.getAbility(x);
        numA = parseInt(y) + parseInt(z) - parseInt(p);

        if ( CS == true ) {
            numA = parseInt(numA) + 3;
        }
        return parseInt(numA) + stat;
    }

    self.add_skill = function() {
        self.skillList.push( new skillItem( skillName = "", keyAb = "Dex", CS = false, rank = 0, miscMod = 0, self ));
    }


    self.add_weapon = function() {
        self.weaponList.push({ weaponName: "", 
                                    wielded: false, 
                                    carried: false, 
                                    totalAB: "", 
                                    damage: "", 
                                    critical: "", 
                                    range: "",
                                    specialProperties: "",
                                    ammunition: "", 
                                    weight: "", 
                                    size: "", 
                                    type: "" 
                                });
    }

    self.add_item = function() {
        self.possessionList.push({ item: "", charges: "", weight: "", LOC: "" });
    }

    self.add_buff = function() {
        self.buffList.push({ buffName: "", active: false, acBonus: "0", attackBonus: "0", dmgBonus: "0", type: "Alchemical" });
    }


    self.add_companion = function() {
        self.companion_list.push({  name: "",
                                    type: "",
                                    hp: 0,
                                    hpMax: 0,
                                    fortSave: 0,
                                    refSave: 0,
                                    willSave: 0,
                                    size: "",
                                    speed: "",
                                    AC: "",
                                    attack: "",
                                    Str: "",
                                    Dex: "",
                                    Con: "",
                                    Int: "",
                                    Wis: "",
                                    Chr: "",
                                    special: "",
                                    note: ""
                                     });
    }

    self.add_feat = function() {
        self.featList.push({item: ""});   
    }

    self.add_language = function() {
        self.language_list.push({item: ""});   
    }

    self.add_event = function() {
        self.events.push({item: ""});   
    }

    self.add_note = function() {
        self.notes.push({item: ""});   
    }


    self.add_npc = function() {
        self.npcInfo.push({name: "", notes: "", loc: ""});
    }

    self.add_featAbilitiesTraitsList = function() {
        self.featAbilitiesTraitsList.push({item: ""});   
    }


    self.add_protectiveItem = function() {
        self.protectiveItemList.push({  armorName: "",
                                        wielded: false,
                                        carried: false,
                                        type: "Armor",
                                        acBonus: "",
                                        checkPen: "",
                                        specialProperties: "",
                                        weight: "",
                                        speed: "",
                                        spellFail: "",
                                        maxDex: ""
        });
    }


    self.save_char = function() {
    var d = ko.toJSON(self);
    var res = d.replace("'", "&quot");
    res = d.replace("%", "&percent");
    
    $.ajax({
      type: 'PUT',
      url: '/updatecharacter/'+cid,
      contentType: 'application/json',
      data: res,
      success: function(data) {
        $("#saveSuccess").show();
        console.log("Success, saving character.");
        window.setTimeout(function() { $("#saveSuccess").fadeTo(1000, 0).slideUp(1000, function(){
            $(this).remove();
        }); }, 2000);
      },
      error: function(data) {
        $("#saveError").show();
        console.log("Error, saving character")
        window.setTimeout(function() { $("#saveError").alert('close'); }, 2000);
      } 
    });
    }


    this.fortSaveTotal = ko.computed(function() {
        dcm = self.highest_con_mod();
        if ( dcm == "" ) dcm = 0;
        var total = 0 + dcm;

        if ( self.fortSaveBase() == "" ) self.fortSaveBase( 0 );
        total = total + parseInt(self.fortSaveBase());

        if ( self.fortSaveMagicMod() == "" ) self.fortSaveMagicMod( 0 );
        total = total + parseInt(self.fortSaveMagicMod());

        if ( self.fortSaveMiscMod() == "" ) self.fortSaveMiscMod( 0 );
        total = total + parseInt(self.fortSaveMiscMod());

        if ( self.fortSaveTempMod() == "" ) self.fortSaveTempMod( 0 );
        total = total + parseInt(self.fortSaveTempMod());

        return total;

    }, this);


    this.refSaveTotal = ko.computed(function() {
        dcm = self.highest_dex_mod();
        if ( dcm == "" ) dcm = 0;
        var total = 0 + dcm;

        if ( self.refSaveBase() == "" ) self.refSaveBase( 0 );
        total = total + parseInt(self.fortSaveBase());

        if ( self.refSaveMagicMod() == "" ) self.refSaveMagicMod( 0 );
        total = total + parseInt(self.refSaveMagicMod());

        if ( self.refSaveMiscMod() == "" ) self.refSaveMiscMod( 0 );
        total = total + parseInt(self.refSaveMiscMod());

        if ( self.refSaveTempMod() == "" ) self.refSaveTempMod( 0 );
        total = total + parseInt(self.refSaveTempMod());

        return total;
    }, this);


    this.willSaveTotal = ko.computed(function() {
        dcm = self.highest_wis_mod();
        if ( dcm == "" ) dcm = 0;
        var total = 0 + dcm;

        if ( self.willSaveBase() == "" ) self.willSaveBase( 0 );
        total = total + parseInt(self.willSaveBase());

        if ( self.willSaveMagicMod() == "" ) self.willSaveMagicMod( 0 );
        total = total + parseInt(self.willSaveMagicMod());

        if ( self.willSaveMiscMod() == "" ) self.willSaveMiscMod( 0 );
        total = total + parseInt(self.willSaveMiscMod());

        if ( self.willSaveTempMod() == "" ) self.willSaveTempMod( 0 );
        total = total + parseInt(self.willSaveTempMod());

        return total;
    }, this);


    this.meleeTotal = ko.computed(function() {
        dcm = self.highest_str_mod();
        if ( dcm == "" ) dcm = 0;
        var total = 0 + parseInt(dcm);

        if ( self.baseAttackBonus() == "" ) self.baseAttackBonus( 0 );
        total = total + parseInt(self.baseAttackBonus());

        if ( self.miscMeleeMod() == "" ) self.miscMeleeMod( 0 );
        total = total + parseInt(self.miscMeleeMod());

        if ( self.tempMeleeMod() == "" ) self.tempMeleeMod( 0 );
        total = total + parseInt(self.tempMeleeMod());

        return total;
    }, this);


   this.cmbTotal = ko.computed(function() {
        dcm = self.highest_str_mod();
        if ( dcm == "" ) dcm = 0;
        var total = 0 + parseInt(dcm);

        if ( self.baseAttackBonus() == "" ) self.baseAttackBonus( 0 );
        total = total + parseInt(self.baseAttackBonus());

        if ( self.miscCMBMod() == "" ) self.miscCMBMod( 0 );
        total = total + parseInt(self.miscCMBMod());

        if ( self.tempCMBMod() == "" ) self.tempCMBMod( 0 );
        total = total + parseInt(self.tempCMBMod());

        return total;
    }, this);


    this.cmdTotal = ko.computed(function() {
        stm = self.highest_str_mod();
        if ( stm == "" ) stm = 0;
        var total = 10 + parseInt(stm);

        dcm = self.highest_dex_mod();
        if ( dcm == "" ) dcm = 0;
        total = total + parseInt(dcm);

        if ( self.baseAttackBonus() == "" ) self.baseAttackBonus( 0 );
        total = total + parseInt(self.baseAttackBonus());

        if ( self.miscCMDMod() == "" ) self.miscCMDMod( 0 );
        total = total + parseInt(self.miscCMDMod());

        if ( self.tempCMDMod() == "" ) self.tempCMDMod( 0 );
        total = total + parseInt(self.tempCMDMod());

        return total;
    }, this);


    this.rangedTotal = ko.computed(function() {
        dcm = self.highest_dex_mod();
        if ( dcm == "" ) dcm = 0;
        var total = 0 + dcm;

        if ( self.baseAttackBonus() == "" ) self.baseAttackBonus( 0 );
        total = total + parseInt(self.baseAttackBonus());

        if ( self.miscRangedMod() == "" ) self.miscRangedMod( 0 );
        total = total + parseInt(self.miscRangedMod());

        if ( self.tempRangedMod() == "" ) self.tempRangedMod( 0 );
        total = total + parseInt(self.tempRangedMod());

        return total;
    }, this);


   


    // The current item will be passed as the first parameter, so we know which place to remove
    self.removePlace = function(place) {
        self.places.remove(place)
    }


    // System functions

    self.loadChar = function() {
        charObjJson = "";
        skillListAvailable = false;
        $.getJSON('/get_char_details/' + cid, function(data) {

            var json_string = JSON.stringify(data);
            var new_json_string = json_string.replace(/&quot/g, "'");
            new_json_string = new_json_string.replace(/&percent/g, "%");
            var newdata = JSON.parse(new_json_string);

            $.each( newdata.char, function( key, val ) {
                self.char_name(val[key].char_name.trim());
                charObjJson = val[key].data;
            });

            var charObj = eval(charObjJson);
            
            $.each( charObj, function( key, val ) {
                switch(key) {

                    case "showStats": self.showStats(val);
                        break;
                    case "showSkills": self.showSkills(val);
                        break;
                    case "showEquipment": self.showEquipment(val);
                        break;
                    case "showSpells": self.showSpells(val);
                        break;
                    case "showCompanions": self.showCompanions(val);
                        break;
                    case "showBackground" : self.showBackground(val);
                        break;
                    case "showBuffs" : self.showBuffs(val);
                        break;

                    case "attr_str": self.attr_str(val);
                        break;
                    case "attr_dex": self.attr_dex(val);
                        break;
                    case "attr_con": self.attr_con(val);
                        break;
                    case "attr_wis": self.attr_wis(val);
                        break;
                    case "attr_int": self.attr_int(val);
                        break;
                    case "attr_chr": self.attr_chr(val);
                        break;

                    case "attr_str_temp": self.attr_str_temp(val);
                        break;
                    case "attr_dex_temp": self.attr_dex_temp(val);
                        break;
                    case "attr_con_temp": self.attr_con_temp(val);
                        break;
                    case "attr_int_temp": self.attr_int_temp(val);
                        break;
                    case "attr_wis_temp": self.attr_wis_temp(val);
                        break;
                    case "attr_chr_temp": self.attr_chr_temp(val);
                        break;

                    case "current_hitpoints": self.current_hitpoints(val);
                        break;
                    case "max_hitpoints": self.max_hitpoints(val);
                        break;
                    case "campaign": self.campaign(val);
                        break;
                    case "char_class": self.char_class(val);
                        break;
                    case "char_race": self.char_race(val);
                        break;
                    case "char_class": self.char_class(val);
                        break;
                    case "next_level_xp": self.next_level_xp(val);
                        break;
                    case "curr_xp": self.curr_xp(val);
                        break;
                    case "char_alignment": self.char_alignment(val);
                        break;
                    case "deity": self.deity(val);
                        break;
                    case "char_level": self.char_level(val);
                        break;

                    case "char_size": self.char_size(val);
                        break;
                    case "char_gender": self.char_gender(val);
                        break;
                    case "char_age": self.char_age(val);
                        break;
                    case "char_height": self.char_height(val);
                        break;
                    case "char_weight": self.char_weight(val);
                        break;
                    case "char_eyes": self.char_eyes(val);
                        break;
                    case "char_hair": self.char_hair(val);
                        break;

                    case "language_list": self.language_list(val);
                        break;
                    case "events": self.events(val);
                        break;
                    case "notes": self.notes(val);
                        break;
                    case "npcInfo": self.npcInfo(val);
                        break;
                    case "backstory": self.backstory(val);
                        break;
                    case "imageLink": self.imageLink(val);
                        break;
                    case "buffList": self.buffList(val);
                                     self.totalBuffCalculation();
                        break;

//                    case "shieldAC": self.shieldAC(val);
//                        break;

                    case "otherAC": self.otherAC(val);
                        break;
//                    case "sizeAC": self.sizeAC(val);
//                        break;
//                    case "naturalAC": self.naturalAC(val);
//                        break;
//                    case "deflectAC": self.deflectAC(val);
//                        break;
//                    case "miscAC": self.miscAC(val);
//                        break;

                    case "initiative": self.initiative(val);
                        break;

                    case "baseAttackBonus": self.baseAttackBonus(val);
                        break;
                    case "miscMeleeMod": self.miscMeleeMod(val);
                        break;
                    case "miscCMBMod": self.miscCMBMod(val);
                        break;
                    case "miscCMDMod": self.miscCMDMod(val);
                        break;
                    case "miscRangedMod": self.miscRangedMod(val);
                        break;
                    case "tempMeleeMod": self.tempMeleeMod(val);
                        break;
                    case "tempCMBMod": self.tempCMBMod(val);
                        break;
                    case "tempCMDMod": self.tempCMDMod(val);
                        break;
                    case "tempRangedMod": self.tempRangedMod(val);
                        break;

                    case "fortSaveBase": self.fortSaveBase(val);
                        break;
                    case "fortSaveMagicMod": self.fortSaveMagicMod(val);
                        break;
                    case "fortSaveMiscMod": self.fortSaveMiscMod(val);
                        break;
                    case "fortSaveTempMod": self.fortSaveTempMod(val);
                        break;

                    case "refSaveBase": self.refSaveBase(val);
                        break;
                    case "refSaveMagicMod": self.refSaveMagicMod(val);
                        break;
                    case "refSaveMiscMod": self.refSaveMiscMod(val);
                        break;
                    case "refSaveTempMod": self.refSaveTempMod(val);
                        break;

                    case "willSaveBase": self.willSaveBase(val);
                        break;
                    case "willSaveMagicMod": self.willSaveMagicMod(val);
                        break;
                    case "willSaveMiscMod": self.willSaveMiscMod(val);
                        break;
                    case "willSaveTempMod": self.willSaveTempMod(val);
                        break;

                     case "MeleeMod": self.MeleeMod(val);
                        break;
                    case "CMBMod": self.CMBMod(val);
                        break;
                    case "CMDMod": self.CMDMod(val);
                        break;
                    case "RangedMod": self.RangedMod(val);
                        break;           

                    case "spellResist": self.spellResist(val);
                        break;

                    case "acidResist": self.acidResist(val);
                        break;

                    case "coldResist": self.coldResist(val);
                        break;

                    case "fireResist": self.fireResist(val);
                        break;

                    case "electricityResist": self.electricityResist(val);
                        break;

                    case "sonicResist": self.sonicResist(val);
                        break;

                    case "otherDefences": self.otherDefences(val);
                        break;


                    case "spells_0": self.spells_0(val);
                        break;
                    case "spells_1": self.spells_1(val);
                        break;
                    case "spells_2": self.spells_2(val);
                        break;
                    case "spells_3": self.spells_3(val);
                        break;
                    case "spells_4": self.spells_4(val);
                        break;
                    case "spells_5": self.spells_5(val);
                        break;
                    case "spells_6": self.spells_6(val);
                        break;
                    case "spells_7": self.spells_7(val);
                        break;
                    case "spells_8": self.spells_8(val);
                        break;
                    case "spells_9": self.spells_9(val);
                        break;
                    case "spellNotes": self.spellNotes(val);
                        break;

                    case "spellDC0": self.spellDC0(val);
                        break;
                    case "spellDC1": self.spellDC1(val);
                        break;
                    case "spellDC2": self.spellDC2(val);
                        break;
                    case "spellDC3": self.spellDC3(val);
                        break;
                    case "spellDC4": self.spellDC4(val);
                        break;
                    case "spellDC5": self.spellDC5(val);
                        break;
                    case "spellDC6": self.spellDC6(val);
                        break;
                    case "spellDC7": self.spellDC7(val);
                        break;
                    case "spellDC8": self.spellDC8(val);
                        break;
                    case "spellDC9": self.spellDC9(val);
                        break;

                    case "spellsPerDay0": self.spellsPerDay0(val);
                        break;
                    case "spellsPerDay1": self.spellsPerDay1(val);
                        break;
                    case "spellsPerDay2": self.spellsPerDay2(val);
                        break;
                    case "spellsPerDay3": self.spellsPerDay3(val);
                        break;
                    case "spellsPerDay4": self.spellsPerDay4(val);
                        break;
                    case "spellsPerDay5": self.spellsPerDay5(val);
                        break;
                    case "spellsPerDay6": self.spellsPerDay6(val);
                        break;
                    case "spellsPerDay7": self.spellsPerDay7(val);
                        break;
                    case "spellsPerDay8": self.spellsPerDay8(val);
                        break;
                    case "spellsPerDay9": self.spellsPerDay9(val);
                        break;

                    case "featList": self.featList(val);
                        break;
                    case "featAbilitiesTraitsList": self.featAbilitiesTraitsList(val);
                        break;
                    case "protectiveItemList": self.protectiveItemList(val);
                        break;

                    case "companion_list": 
                                        $.each(val, function(key, item) {
                                            if ( item.hp == undefined )
                                            {
                                                item.hp = 0;
                                            }
                                            if ( item.hpMax == undefined ) 
                                            {
                                                item.hpMax = 0;
                                            }
                                            if ( item.refSave == undefined)
                                            {
                                                item.refSave = 0;
                                            }
                                            if ( item.fortSave == undefined)
                                            {
                                                item.fortSave = 0;
                                            }
                                            if ( item.willSave == undefined)
                                            {
                                                item.willSave = 0;
                                            }
                                        });

                                        self.companion_list(val);
                        break;

                    case "skillList":   skillListAvailable = true;
                                        self.skillList([]);
                                        $.each(val, function(key, item) {
                                            self.skillList.push( new skillItem( skillName = item.skillName, keyAb = item.keyAb, CS = item.CS, rank = item.rank, miscMod = item.miscMod, self ));
                                        });
                        break;
                    case "weaponList": self.weaponList(val);
                        break;
                    case "possessionList": $.each(val, function(key, item) {
                                                // item.item = item.item.replace("&quot", "'");
                                                if ( !item.charges ) {
                                                    item.charges = "";
                                                }
                                            });
                                           self.possessionList(val);
                        break;

                    case "currency_Pp": self.currency_Pp(val);
                        break;
                    case "currency_Gp": self.currency_Gp(val);
                        break;
                    case "currency_Sp": self.currency_Sp(val);
                        break;
                    case "currency_Cp": self.currency_Cp(val);
                        break;                        

                    default: break;
                }
            });
        });
        if ( skillListAvailable == false ) {
            self.populateInitialSkillList();
        }
    };

    self.main = function () {
        var readyStateCheckInterval = setInterval(function() {
            if (document.readyState === "complete") {
                self.loadChar();
                clearInterval(readyStateCheckInterval);
            }
        }, 100)
    };

    $(window).scroll(function() {
        if ($(window).scrollTop() > 41) {
            $("#menuBar").css({"top": $(window).scrollTop() });
        }

        if ($(window).scrollTop() < 41) {
            $("#menuBar").css({"top": 41 });
        }
    });

  self.main();
 } 