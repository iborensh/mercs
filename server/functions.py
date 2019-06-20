import json, os
import pandas as pd
from pandas.io.json import json_normalize

def find_bands_for_mission(mission_requirements):

    #generate a mission requirements df for joining with the bands df
    mission_requirements_df = json_normalize(mission_requirements).stack().reset_index().drop('level_0', axis=1)
    mission_requirements_df.columns = ['mission_skills', 'mission_skills_value']

    # open the skills json file
    with open('{}/jsons/skill_tree.json'.format(os.getcwd())) as f:
        d = json.load(f)

    # transfer the skills json file to a flat df
    skills_df = json_normalize(d, record_path=["options",'options'], meta=['label', 'value'], meta_prefix='meta_')










mission_requirements = {"sql": 5, "sw_general": 3}
find_bands_for_mission(mission_requirements)
