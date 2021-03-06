from wtforms import (BooleanField, DateTimeField, DecimalField,
                     HiddenField, IntegerField, PasswordField,
                     TextField)
from wtforms.validators import (Email, EqualTo, Length, NumberRange,
                                Optional, Regexp, Required)

import wtforms_json
from wtforms import Form

wtforms_json.init()

class charForm(Form):
    player_id = TextField("player_id", validators=[Optional()])
    char_name = TextField("char_name", validators=[Optional()])
    char_class = TextField("char_class", validators=[Optional()])
    char_race = TextField("char_race", validators=[Optional()])
    curr_xp = TextField("curr_xp", validators=[Optional()])
    next_level_xp = TextField("next_level_xp", validators=[Optional()])
    char_level = TextField("char_level", validators=[Optional()])
    char_alignment = TextField("char_alignment", validators=[Optional()])
    campaign = TextField("campaign", validators=[Optional()])
    deity = TextField("deity", validators=[Optional()])
    char_size = TextField("char_size", validators=[Optional()])
    char_age = TextField("char_age", validators=[Optional()])
    char_gender = TextField("char_gender", validators=[Optional()])
    char_height = TextField("char_height", validators=[Optional()])
    char_weight = TextField("char_weight", validators=[Optional()])
    char_eyes = TextField("char_eyes", validators=[Optional()])
    attr_str  = TextField("attr_str", validators=[Optional()])
    attr_str_temp = TextField("attr_str_temp", validators=[Optional()])
    attr_dex = TextField("attr_dex", validators=[Optional()])
    attr_dex_temp = TextField("attr_dex_temp", validators=[Optional()])
    attr_con = TextField("attr_con", validators=[Optional()])
    attr_con_temp = TextField("attr_con_temp", validators=[Optional()])
    attr_int = TextField("attr_int", validators=[Optional()])
    attr_int_temp = TextField("attr_int_temp", validators=[Optional()])
    attr_wis = TextField("attr_wis", validators=[Optional()])
    attr_wis_temp = TextField("attr_wis_temp", validators=[Optional()])
    attr_chr = TextField("attr_chr", validators=[Optional()])
    attr_chr_temp = TextField("attr_chr_temp", validators=[Optional()])
    currency_pp = TextField("currency_pp", validators=[Optional()])
    currency_Gp = TextField("currency_Gp", validators=[Optional()])
    currency_Sp = TextField("currency_Sp", validators=[Optional()])
    currency_Cp = TextField("currency_Cp", validators=[Optional()])
    current_hitpoints = TextField("current_hitpoints", validators=[Optional()])
    max_hitpoints = TextField("max_hitpoints", validators=[Optional()])
    featList = TextField("featList", validators=[Optional()])
    featAbilitiesTraitsList = TextField("featAbilitiesTraitsList", validators=[Optional()])
    spells_0 = TextField("spells_0", validators=[Optional()])
    spells_1 = TextField("spells_1", validators=[Optional()])
    spells_2 = TextField("spells_2", validators=[Optional()])
    spells_3 = TextField("spells_3", validators=[Optional()])
    spells_4 = TextField("spells_4", validators=[Optional()])
    spells_5 = TextField("spells_5", validators=[Optional()])
    spells_6 = TextField("spells_6", validators=[Optional()])
    spells_7 = TextField("spells_7", validators=[Optional()])
    spells_8 = TextField("spells_8", validators=[Optional()])
    spells_9 = TextField("spells_9", validators=[Optional()])
    skillList = TextField("skillList", validators=[Optional()])
    weaponList = TextField("weaponList", validators=[Optional()])
    protectiveItemList = TextField("protectiveItemList", validators=[Optional()])
    possessionList = TextField("possessionList", validators=[Optional()])