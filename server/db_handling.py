import datetime
import bcrypt
import json
import sys, os
from os import path
from bson.objectid import ObjectId
from flask import jsonify
from pymongo import MongoClient

sys.path.append(path.dirname(path.dirname(path.abspath(__file__))))


class DbHandling(object):
    def __init__(self):
        self.client = MongoClient()
        print 'open new connection'
        self.db_projects = self.client['grouplink']['projects']
        self.db_users = self.client['grouplink']['users']
        self.db_bands = self.client['grouplink']['bands']

    def get_all_projects(self, user, collection=None):
        """
        get all projects by user
        :param user:
        :param collection:
        :return:
        """
        if not collection:
            if user:
                proj = self.db_projects.find({'user': user})
            else:
                proj = self.db_projects.find({})
        else:
            if user:
                proj = self.db_users.find({'name': user})
            else:
                proj = self.db_users.find({})
        projects = [{k: str(v) if k == '_id' else v for k, v in i.iteritems()} for i in proj]
        return projects


    def login_user(self, name, password):
        user = self.db_users.find({'name': name})
        users = [{k: str(v) if k == '_id' else v for k, v in i.iteritems()} for i in user]
        if len(users) > 0:
            if password == users[0]['password']:
                users[0]['password'] = True
                return users[0]
            else:
                return {'password': False}
        else:
            return []


    def get_user_by_id(self, user_id):
        user = self.db_users.find({'_id': ObjectId(user_id)}, {'_id': False})
        return user

    def insert_project(self, json_settings):
        """
        insert new project
        :param json:
        :return:
        """
        json_settings['name'] = json_settings['project_name']
        json_settings['start_on'] = datetime.datetime.utcnow()
        json_settings['modified_on'] = datetime.datetime.utcnow()
        json_settings['status'] = 'started'
        ans = self.db_projects.insert(json_settings)
        return self.get_project(str(ans))

    def insert_user(self, user_json):
        """
        insert new user
        :param json:
        :return:
        """
        name = user_json['name']
        user_json.update({'admin': False})
        ans = self.db_users.update({'name': name},
                                   {'$set': user_json}, upsert=True)
        flag = True
        for k, v in ans.items():
            if k == 'upserted':
                user_id = str(v)
            if k == 'updatedExisting':
                flag = v
        if not flag:
            return self.get_project(user_id, collection=True)
        return jsonify({'_id': 'already_exist'})

    def update_user(self, user_id, data):
        """
        update user by id
        :param project_id:
        :param data:
        :return:
        """
        data = json.loads(json.dumps(data))
        ans = self.db_users.update({'_id': ObjectId(user_id)}, {'$set': data}, False, True)
        return self.get_project(user_id, collection=True)

    def push_skill_to_user(self, user_id, data):
        """
        update user by id
        :param project_id:
        :param data:
        :return:
        """
        # data = json.loads(json.dumps(data))
        ans = self.db_users.update({'_id': ObjectId(user_id)}, {'$push': {'profile.skills': data['profile']['skills'][0]}})
        user = self.get_project(user_id, collection=True, jsonilize=False)
        aggr_ranking = {}
        for skill in user['profile']['skills']:
            for title, rank in skill['ranking'].iteritems():
                if title in aggr_ranking:
                    aggr_ranking[title] += rank
                else:
                    aggr_ranking[title] = rank
        self.db_users.update({'_id': ObjectId(user_id)}, {'$set': {'profile.aggr_ranking': aggr_ranking}})
        self.db_users.update({'_id': ObjectId(user_id)}, {'$set': {'profile.character': data['profile']['character']}})
        return self.get_project(user_id, collection=True)

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

    def get_project(self, project_id, collection=None, jsonilize=True):
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
        if not jsonilize:
            return project
        return jsonify(project)

    def delete_project(self, project_id):
        """
        delete project by id
        :param id:
        :return:
        """
        self.db_projects.remove({'_id': ObjectId(project_id)})
        return jsonify({'id': project_id})

    def insert_band(self, data):
        """
        update project by id
        :param project_id:
        :param data:
        :return:
        """
        data = json.loads(json.dumps(data))
        data['start_on'] = datetime.datetime.utcnow()
        ans = self.db_bands.insert(data)
        return str(ans)

    def update_band(self, band_id, data):
        """
        update project by id
        :param project_id:
        :param data:
        :return:
        """
        data = json.loads(json.dumps(data))
        data['modified_on'] = datetime.datetime.utcnow()
        ans = self.db_bands.update({'_id': ObjectId(band_id)}, {'$set': data}, False, True)
        return self.get_band(band_id)

    def get_band(self, band_id):
        """
        get band by id
        :param project_id:
        :param collection:
        :return:
        """
        if not band_id:
            band = self.db_bands.find({})
        else:
            band = list(self.db_bands.find({'_id': ObjectId(band_id)}))[0]
        bands = [{k: str(v) if k == '_id' else v for k, v in i.iteritems()} for i in band]
        return bands

    def get_bands_by_user_id(self, user_id, with_users=True):
        """

        :param user_id:
        :return:
        """
        return [self.get_band_with_users_data('', ready_band=[band])[0] for band in
                self.db_bands.find({"users_id":{"$in": [user_id]}}, {'_id': False})] if with_users else \
            list(self.db_bands.find({"users_id":{"$in": [user_id]}}, {'_id': False}))


    def get_band_with_users_data(self, band_id, ready_band=None):
        """
        return band with user data - can pass band id or the band data
        :param band_id:
        :param ready_band:
        :return:
        """

        bands = ready_band if ready_band else self.get_band(band_id)
        for i, band in enumerate(bands):
            users = []
            for user_id in band['users_id']:
                try:
                    users.append(list(self.get_user_by_id(user_id))[0])
                except:
                    continue
            bands[i].update({"users_data": users})
        return bands

    def delete_band(self, band_id):
        """
        delete project by id
        :param id:
        :return:
        """
        self.db_bands.remove({'_id': ObjectId(band_id)})
        return jsonify({'id': band_id})
