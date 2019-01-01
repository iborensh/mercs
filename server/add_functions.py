json_input = {
"_id" : ObjectId("5c24a0911814972bf2ee10e8"),
"status" : "started",
"name" : "mosh",
"content" : {
"language" : [
"german"
],
"field" : [
"commerce",
"entertainment"
],
"time" : [
"two weeks",
"a month"
],
"attributes" : [
"statistics",
"physics"
],
"outcome" : [
"blog"
],
"type" : [
"research"
]
},
"start_on" : ISODate("2018-12-27T09:51:13.725Z"),
"user" : "5c24a06adabd5472ba0de28c",
"modified_on" : ISODate("2018-12-27T09:51:13.725Z")
}


def map2goals(map_json):
    class Path:
        def __init__(self, m_type, field, outcome, attributes):
            self.m_type = m_type
            self.field = field
            self.outcome = outcome
            self.attributes = attributes

        def print_path(self):
            print "produce a ", self.field, self.outcome, "using ", self.attributes

    paths_list = []
    for m_type in json_input['content']['type']:
        for field in json_input['content']['field']:
            for outcome in json_input['content']['outcome']:
                for attributes in json_input['content']['attributes']:
                    p = Path(m_type, field, outcome, attributes)
                    paths_list.append(p)

    return paths_list

def goals2skills(goals,skill_list):
    #comment
    rqr_skills_dict = {}
    skills_dict = {}
    for merc_type in skill_list:
        merc_options = merc_type['options']
        for option in merc_options:
            sub_options = option['options']
            for sub_option in sub_options:
                try:
                    skills_dict[sub_option['label']]= {"required_by" : sub_option['requirements'] , "base_cost" :sub_option['base_cost']}
                except:
                    ""
    for g in goals:
        for k in skills_dict:
            for itm in skills_dict[k]['required_by']:
                if set(itm) < set(g.path):
                    print('***',k, "required in", g.path , 'because of', skills_dict[k]['required_by'], "with cost:", skills_dict[k]['base_cost'])
                    rqr_skills_dict[k] = skills_dict[k]
                else:
                    print(k, "not required in", g.path)
    return rqr_skills_dict

def skills2reward(sills_file):
    return "reward"
