# -*- coding: utf-8 -*-
from sqlalchemy import Boolean, Column
from sqlalchemy import DateTime, Integer, String, Text
from sqlalchemy.ext.declarative import declarative_base
from flask.ext.sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class user_data(db.Model):
    __tablename__ = 'user_data'
    id = Column(db.Integer, primary_key=True)
    user_name = Column(db.String(255))
    passwd = Column(db.String(255))

    def __init__(self, name, email):
        self.player_name = name
        self.passwd = email

class char_info(db.Model):
    __tablename__ = 'char_info'
    id = Column(db.Integer, primary_key=True)
    player_id = Column(db.Integer)
    char_name = Column(db.String(255))
    char_class = Column(db.Text)
    char_race = Column(db.Text)
    curr_xp = Column(db.Text)
    next_level_xp = Column(db.Text)
    char_level = Column(db.Text)
    char_alignment = Column(db.Text)
    campaign = Column(db.Text)
    deity = Column(db.Text)
    char_size = Column(db.Text)
    char_age = Column(db.Text)
    char_gender = Column(db.Text)
    char_height = Column(db.Text)
    char_weight = Column(db.Text)
    char_eyes = Column(db.Text)
    attr_str  = Column(db.Integer)
    attr_str_temp = Column(db.Integer)
    attr_dex = Column(db.Integer)
    attr_dex_temp = Column(db.Integer)
    attr_con = Column(db.Integer)
    attr_con_temp = Column(db.Integer)
    attr_int = Column(db.Integer)
    attr_int_temp = Column(db.Integer)
    attr_wis = Column(db.Integer)
    attr_wis_temp = Column(db.Integer)
    attr_chr = Column(db.Integer)
    attr_chr_temp = Column(db.Integer)
    currency_pp = Column(db.Text)
    currency_Gp = Column(db.Text)
    currency_Sp = Column(db.Text)
    currency_Cp = Column(db.Text)
    current_hitpoints = Column(db.Text)
    max_hitpoints = Column(db.Text)
    featList = Column(db.Text)
    featAbilitiesTraitsList = Column(db.Text)
    spells_0 = Column(db.Text)
    spells_1 = Column(db.Text)
    spells_2 = Column(db.Text)
    spells_3 = Column(db.Text)
    spells_4 = Column(db.Text)
    spells_5 = Column(db.Text)
    spells_6 = Column(db.Text)
    spells_7 = Column(db.Text)
    spells_8 = Column(db.Text)
    spells_9 = Column(db.Text)
    skillList = Column(db.Text)
    weaponList = Column(db.Text)
    protectiveItemList = Column(db.Text)
    possessionList = Column(db.Text)

    @property
    def serialize(self):
        return dict(id=self.id,
                    player_id=self.player_id,
                    char_name=self.char_name,
                    char_class=self.char_class,
                    char_race=self.char_race,
                    curr_xp=self.curr_xp,
                    next_level_xp=self.next_level_xp,
                    char_level=self.char_level,
                    char_alignment=self.char_alignment,
                    campaign=self.campaign,
                    deity=self.deity,
                    char_size=self.char_size,
                    char_age=self.char_age,
                    char_gender=self.char_gender,
                    char_height=self.char_height,
                    char_weight=self.char_weight,
                    char_eyes=self.char_eyes,
                    attr_str=self.attr_str,
                    attr_str_temp=self.attr_str_temp,
                    attr_dex=self.attr_dex,
                    attr_dex_temp=self.attr_dex_temp,
                    attr_con=self.attr_con,
                    attr_con_temp=self.attr_con_temp,
                    attr_int=self.attr_int,
                    attr_int_temp=self.attr_int_temp,
                    attr_wis=self.attr_wis,
                    attr_wis_temp=self.attr_wis_temp,
                    attr_chr=self.attr_chr,
                    attr_chr_temp=self.attr_chr_temp,
                    currency_pp=self.currency_pp,
                    currency_Gp=self.currency_Gp,
                    currency_Sp=self.currency_Sp,
                    currency_Cp=self.currency_Cp,
                    current_hitpoints=self.current_hitpoints,
                    max_hitpoints=self.max_hitpoints,
                    featList=self.featList,
                    featAbilitiesTraitsList=self.featAbilitiesTraitsList,
                    spells_0=self.spells_0,
                    spells_1=self.spells_1,
                    spells_2=self.spells_2,
                    spells_3=self.spells_3,
                    spells_4=self.spells_4,
                    spells_5=self.spells_5,
                    spells_6=self.spells_6,
                    spells_7=self.spells_7,
                    spells_8=self.spells_8,
                    spells_9=self.spells_9,
                    skillList=self.skillList,
                    weaponList=self.weaponList,
                    protectiveItemList=self.protectiveItemList,
                    possessionList=self.possessionList)