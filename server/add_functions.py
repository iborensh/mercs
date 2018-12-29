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
            print
            "produce a ", self.field, self.outcome, "using ", self.attributes

    paths_list = []
    for m_type in json_input['content']['type']:
        for field in json_input['content']['field']:
            for outcome in json_input['content']['outcome']:
                for attributes in json_input['content']['attributes']:
                    p = Path(m_type, field, outcome, attributes)
                    paths_list.append(p)

    return paths_list

def goals2skills(goals_file):
    return "skills"

def skills2reward(sills_file):
    return "reward"
