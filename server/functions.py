import json, os
import pandas as pd

def find_similarity(a,b):
    print a









print os.getcwd()

with open('{}/jsons/online_courses.json'.format(os.getcwd())) as s:
    courses = json.load(s)

# with open('{}/jsons/json_test.json'.format(os.getcwd())) as p:
#     print p.read()
skills = pd.read_json('/Users/srosentr 1/mercs_vcs/server/jsons/skill_tree.json')
print skills.head()

find_similarity(skills, "yo")
