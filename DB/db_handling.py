import datetime
import json
import sys, os
from os import path
from bson.objectid import ObjectId
from flask import jsonify
from pymongo import MongoClient

sys.path.append( path.dirname( path.dirname( path.abspath(__file__) ) ) )



class DbHandling(object):
    def __init__(self):
        self.client = MongoClient()
        self.db_projects = self.client['grouplink']['projects']
        self.db_users = self.client['grouplink']['users']

    def get_all_projects(self, user, collection=None):
        """
        get all projects by user
        :param user:
        :param collection:
        :return:
        """
        if not collection:
            if user:
                p = self.db_projects.find({'user': user})
            else:
                p = self.db_projects.find({})
        else:
            if user:
                p = self.db_users.find({'name': user})
            else:
                p = self.db_users.find({})
        projects = [{k: str(v) if k == '_id' else v for k, v in i.iteritems()} for i in p]
        if not collection:
            return projects
        else:
            return projects

    def insert_project(self, json_settings):
        """
        insert new project
        :param json:
        :return:
        """
        user = json_settings['user']
        name = json_settings['project_name']
        if list(self.db_projects.find({'project_name': name})):
            return 'already exist'
        if 'settings' in json_settings:
            settings = json_settings['settings']
        else:
            with open('{}/static/yamls/settings.json'.format(os.getcwd())) as f:
                all_setting = json.load(f)
            settings = all_setting['default_general_settings']
        ans = self.db_projects.update({'user': user, 'project_name': name},
                                 {'$set': {'user': user, 'project_name': name, 'content': json_settings['content'],
                                           'start_on': datetime.datetime.utcnow(), 'status': 'started',
                                           'settings': settings, 'modified_on': datetime.datetime.utcnow(),
                                           'description': json_settings['description']}}, upsert=True)
        flag = True
        for k, v in ans.items():
            if k == 'upserted':
                id = str(v)
            if k == 'updatedExisting':
                flag = v
        if not flag:
            return self.get_project(id)
        return jsonify({'id': 'already_exist'})

    def insert_user(self, json):
        """
        insert new user
        :param json:
        :return:
        """
        name = json['name']
        json.update({'admin': 'no'})
        ans = self.db_users.update({'name': name},
                              {'$set': json}, upsert=True)
        flag = True
        for k, v in ans.items():
            if k == 'upserted':
                id = str(v)
            if k == 'updatedExisting':
                flag = v
        if not flag:
            return self.get_project(id, collection=True)
        return jsonify({'_id': 'already_exist'})

    def update_user(self, project_id, data):
        """
        update user by id
        :param project_id:
        :param data:
        :return:
        """
        data = json.loads(json.dumps(data))
        ans = self.db_users.update({'_id': ObjectId(project_id)}, {'$set': data}, False, True)
        return self.get_project(project_id, collection=True)

    def update_project(self, project_id, data):
        """
        update project by id
        :param project_id:
        :param data:
        :return:
        """
        data = json.loads(json.dumps(data))
        data['modified_on'] = datetime.datetime.utcnow()
        ans = self.db_projects.update({'_id': ObjectId(project_id)}, {'$set': data}, False, True)
        return self.get_project(project_id)

    def get_project(self, project_id, collection=None):
        """
        get project by id
        :param project_id:
        :param collection:
        :return:
        """
        if not collection:
            project = list(self.db_projects.find({'_id': ObjectId(project_id)}))[0]
        else:
            project = list(self.db_users.find({'_id': ObjectId(project_id)}))[0]
        del project['_id']
        project.update({'_id': project_id})
        return jsonify(project)

    def delete_project(self, project_id):
        """
        delete project by id
        :param id:
        :return:
        """
        self.db_projects.remove({'_id': ObjectId(project_id)})
        return jsonify({'id': project_id})