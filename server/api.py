from flask import Flask, render_template, request, jsonify, send_file
import time, datetime, json, os, yaml
import sys
from db_handling import DbHandling
from mercenery import Mercenery
from new_mission_functions import Map2reward
from os import path
from flask_cors import CORS, cross_origin
import pprint
sys.path.append( path.dirname( path.dirname( path.abspath(__file__) ) ) )
app = Flask(__name__)

db_functions = DbHandling()


app.config['SECRET_KEY'] = 'this is secret key'
app.config['CORS_HEADERS'] = 'Content-Type'

cors = CORS(app, resources={r"/foo": {"origins": "http://localhost:port"}})
merc = Mercenery()

@app.route("/api/users", methods=['GET', 'POST', 'DELETE'])
@app.route("/api/users/<id>", methods=['GET', 'POST', 'PUT', 'DELETE'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def users(id=None):
    """
    handle user: get, put, post, delete
    :param id:
    :return:
    """
    if request.method == 'GET':
        if id == None:
            return jsonify(db_functions.get_all_projects('', True))
        else:
            return jsonify(db_functions.get_all_projects(id, True))
    elif request.method == 'POST':
        data = json.loads(request.data, strict=False)
        return db_functions.insert_user(data)
    elif request.method == 'PUT':
        data = json.loads(request.data, strict=False)
        return db_functions.update_user(id, data)
    elif request.method == 'DELETE':
        pass
    return jsonify({'id': id})

@app.route("/api/login", methods=['POST'])
def login():
    data = json.loads(request.data, strict=False)
    return jsonify(db_functions.login_user(data['name'], data['password']))

@app.route("/api/projects", methods=['GET', 'POST', 'DELETE'])
@app.route("/api/projects/<id>", methods=['GET', 'POST', 'PUT', 'DELETE'])
def projects(id=None):
    """
    project get, put, post, delete
    :param id:
    :return:
    """
    if request.method == 'GET':
        if id == None:
            return jsonify(db_functions.get_all_projects(None))
        else:
            return jsonify(db_functions.get_all_projects(id))
    elif request.method == 'POST':
        data = json.loads(request.data, strict=False)
        # if 'calculate' in data:
        calculate = Map2reward(data)
        require_skills = calculate.calculate()
        data.update(require_skills)
        content = data['content']
        description = 'Make {} on a {} in {} for {} purposes'.format(content['type'], content['attributes'],
                                                                     content['outcome'], content['field'])
        data.update({'description': description})
        return db_functions.insert_project(data)
    elif request.method == 'PUT':
        data = json.loads(request.data, strict=False)
        return db_functions.update_project(id, data)
    elif request.method == 'DELETE':
        if id:
            return db_functions.delete_project(id)
        else:
            db_functions.db_projects.remove({})
            return jsonify({'number_of_removed_projects': 5})
    return jsonify({'id': id})

@app.route("/api/bands", methods=['GET', 'POST', 'DELETE'])
@app.route("/api/bands/<id>", methods=['GET', 'POST', 'PUT', 'DELETE'])
def bands(id=None):
    """
    project get, put, post, delete
    :param id:
    :return:
    """
    if request.method == 'GET':
        if id == None:
            return jsonify(db_functions.get_band(None))
        else:
            return jsonify(db_functions.get_band(id))
    elif request.method == 'POST':
        data = json.loads(request.data, strict=False)
        return db_functions.insert_band(data)
    elif request.method == 'PUT':
        data = json.loads(request.data, strict=False)
        return db_functions.update_band(id, data)
    elif request.method == 'DELETE':
        if id:
            return db_functions.delete_band(id)
        else:
            db_functions.db_bands.remove({})
            return jsonify({'number_of_removed_projects': 5})
    return jsonify({'id': id})

@app.route("/api/user-bands/<user_id>", methods=['GET'])
def user_bands(user_id):
    """

    :param user_id:
    :return:
    """
    return jsonify(db_functions.get_bands_by_user_id(user_id))

@app.route("/api/band_with_users_data", methods=['GET'])
def band_with_users_data():
    """

    :return:
    """
    return jsonify(db_functions.get_band_with_users_data(None))

@app.route("/api/user-projects", methods=['GET', 'POST', 'PUT', 'DELETE'])
@app.route("/api/user-projects/<user_id>", methods=['GET', 'POST', 'PUT', 'DELETE'])
def user_projects(user_id=None):
    """
    project get, put, post, delete
    :param id:
    :return:
    """
    if request.method == 'GET':
        if user_id == None:
            return 'Please send user ID'
        else:
            return jsonify(db_functions.get_projects_by_user(user_id))

@app.route("/api/generate-project", methods=['POST'])
def generate_project_data_from_upload_project():
    """
    Shahar put your functions call here
    :return:
    """
    pass

@app.route("/api/merc-profile/<user_id>", methods=['GET', 'POST', 'PUT', 'DELETE'])
def merc_profile(user_id):
    if request.method == 'GET':
        return jsonify(list(db_functions.get_user_by_id(user_id))[0])
    elif request.method == 'POST':
        data = json.loads(request.data, strict=False)
        return db_functions.insert_band(data)
    elif request.method == 'PUT':
        data = json.loads(request.data, strict=False)
        data['chosen'] = [{'value': "usr_class", 'chosen': data['character']}] + data['chosen']
        ranking = getattr(merc, 'add_{}'.format(data['field']))(*[param['chosen'] for param in data['chosen']])
        data = {"profile":{"skills":[{data['field']: {param['value']: param['chosen'] for param in data['chosen']},
                                      "ranking": ranking, "approve": False, "status": "start"}],
                           "character": data["character"]}}
        user = db_functions.push_skill_to_user(user_id, data)
        return user
    elif request.method == 'DELETE':
        pass

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5002, debug=False, threaded=True)
