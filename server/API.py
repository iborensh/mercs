from flask import Flask, render_template, request, jsonify, send_file
import time, datetime, json, os, yaml
import sys
from db_handling import DbHandling
from os import path
from flask_cors import CORS, cross_origin

sys.path.append( path.dirname( path.dirname( path.abspath(__file__) ) ) )
app = Flask(__name__)

db_functions = DbHandling()


app.config['SECRET_KEY'] = 'this is secret key'
app.config['CORS_HEADERS'] = 'Content-Type'

cors = CORS(app, resources={r"/foo": {"origins": "http://localhost:port"}})

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


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5002, debug=False, threaded=True)