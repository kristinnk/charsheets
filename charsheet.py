# -*- coding: utf-8 -*-
from flask import Flask, session, redirect, url_for, escape, request, render_template, jsonify
import os
import json
import hashlib
from sqlalchemy.engine import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.sql import select
import psycopg2 as db
from models import user_data, char_info
from forms import charForm
import wtforms_json
from wtforms import Form

wtforms_json.init()

app = Flask(__name__)
engine = create_engine(os.environ['DATABASE_URL'], echo=True)

DEBUG = True


@app.route('/')
def index():
    if 'username' in session:
        username = escape(session['username'])
        if 'userid' in session:
            uid = escape(session['userid'])
            return render_template( 'charlist.html', username = username, uid = uid)
    else:
        return redirect(url_for('login'))


@app.route('/login', methods=['GET','POST'])
def login():
    if request.method == 'POST':
        connection = engine.connect()
        dbQuery = "select id, user_name, password from user_data where user_name='" + request.form['username'] + "';"
        try:
            result = connection.execute( dbQuery )
            entries = [dict(id=row['id'], username=row['user_name'], password=row['password']) for row in result.fetchall()]
            user = str(entries[0]['username']).rstrip()
            passwd = str(entries[0]['password']).rstrip()
            if request.form['username'] == user and hashlib.md5(request.form['password']).hexdigest() == passwd:
                session['username'] = request.form['username']
                session['userid'] = str(entries[0]['id']).rstrip()
                connection.close()
                return redirect(url_for('index'))
        except:
            return render_template('login.html')
    return render_template('login.html')


@app.route('/adduser/', methods=['POST'])
def adduser():
    if request.form['password'] == request.form['confpass']:
        connection = engine.connect()
        dbQuery = "insert into user_data (user_name, password) values ( '" + request.form['username'] + "', '" + hashlib.md5(request.form['password']).hexdigest() + "');"
        connection.execute( dbQuery )
        connection.close()
        return redirect(url_for('index'))
    else:
        return redirect(url_for('newUser'))


@app.route('/add_character/<name>')
def addChar(name):
    connection = engine.connect()
    dbQuery = "insert into char_info (player_id, char_name, data) values (" + str(session['userid']) + ", '" + name + "', '" + '{"char_name": "' + name + '"}' + "');"
    connection.execute( dbQuery )
    connection.close()
    if 'username' in session:
        username = escape(session['username'])
        if 'userid' in session:
            uid = escape(session['userid'])
            return render_template( 'charlist.html', username = username, uid = uid)
    else:
        return redirect(url_for('login'))


@app.route('/removechar/<cid>')
def delChar(cid):
    connection = engine.connect()
    dbQuery = "delete from char_info where id=" + cid + ";"
    connection.execute( dbQuery )
    connection.close()
    if 'username' in session:
        username = escape(session['username'])
        if 'userid' in session:
            uid = escape(session['userid'])
            return render_template( 'charlist.html', username = username, uid = uid)
    else:
        return redirect(url_for('login'))


@app.route('/getcharacters/')
def getChars():
    connection = engine.connect()
    dbQuery = "select * from char_info where player_id=" + escape(session['userid']) + ";"
    result = connection.execute( dbQuery )
    charEntries = [dict(char_name=row['char_name'], char_id=row['id']) for row in result.fetchall()]
    connection.close()
    return jsonify(char=[item for item in charEntries])


@app.route('/viewchar/<char_id>')
def viewChar(char_id):
    connection = engine.connect()
    dbQuery = "select * from char_info where player_id=" + escape(session['userid']) + " AND id=" + char_id  +";"
    result = connection.execute( dbQuery )
    connection.close()
    if result.rowcount > 0:
	return render_template( 'base.html', cid = char_id, username = escape(session['username']))
    else:
	return redirect(url_for('index'))

@app.route('/publiclink/<char_id>')
def viewPubChar(char_id):
    return render_template( 'publicBase.html', cid = char_id, username = "public")

@app.route('/get_char_details/<char_id>')
def viewCharDetails(char_id):
    connection = engine.connect()
    dbQuery = "select * from char_info where id=" + char_id + ";"
    result = connection.execute( dbQuery )
    charEntries = [dict(char_name=row['char_name'], char_id=row['id'], data=json.loads(row['data'])) for row in result.fetchall()]
    connection.close()
    return jsonify(char=[charEntries])


@app.route('/updatecharacter/<char_id>', methods=["PUT"])
def updateChar(char_id):
    data = json.dumps(request.json)
    dbQuery = "update char_info set char_name='" + json.loads(data)['char_name'] + "', data='" + data + "' where id=" + char_id + ";"
    connection = engine.connect()
    connection.execute( dbQuery )
    connection.close()
    return "Success"


@app.route('/newuser/')
def newUser():
    return render_template( 'newuser.html')


@app.route('/logout')
def logout():
    session.pop('username', None)
    session.pop('userid', None)
    return redirect(url_for('index'))


app.secret_key = 'ThisIsASecretKey'

if __name__ == '__main__':
    app.debug = True
    app.run()
