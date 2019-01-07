class newMissionFunctions(object):
    def __init__(self):
        pass

    def map2goals(self, map_file):
        class Path:
            def __init__(self, m_type, field, outcome, attributes):
                self.m_type = m_type
                self.field = field
                self.outcome = outcome
                self.attributes = attributes

            def print_path(self):
                print "produce a ", self.field, self.outcome, "using ", self.attributes

        paths_list = []
        for m_type in map_file['content']['type']:
            for field in map_file['content']['field']:
                for outcome in map_file['content']['outcome']:
                    for attributes in map_file['content']['attributes']:
                        p = Path(m_type, field, outcome, attributes)
                        paths_list.append(p)

        return paths_list

    def goals2skills(self, goals, skill_list, debug_flag=0):
        rqr_skills_dict = {}
        skills_dict = {}

        # build a dict with skill_label, required_by, "base_cost"
        for merc_type in skill_list:
            merc_options = merc_type['options']
            for option in merc_options:
                sub_options = option['options']
                for sub_option in sub_options:
                    try:
                        if len(sub_option[
                                   'required_by']) == 0:  # if "required_by" = [], use the skill label as the "required_by"
                            required_by = [sub_option['label']]
                        else:
                            required_by = sub_option['required_by']
                        skills_dict[sub_option['label']] = {"required_by": required_by,
                                                            "base_cost": sub_option['base_cost']}
                    except:
                        ""
        # iterate over each path and check which skills are required for it
        for g in goals:
            if debug_flag == 1:
                print "------------------- path -----------------"
            for k in skills_dict.keys():
                required_by_list = skills_dict[k]['required_by']
                for itm in required_by_list:
                    if itm in g.path:
                        if debug_flag == 1:
                            print('***', k, "required in", g.path, 'because of', itm, "with cost:",
                                  skills_dict[k]['base_cost'])
                        rqr_skills_dict[k] = skills_dict[k]
                        break  # fount at least one required itm which is in the tested path - break to the next skill
                    else:
                        if debug_flag == 1:
                            print(k, "not required in", g.path)
                        continue  # the current skill itm is not in the required list. move to next itm of the list
        return rqr_skills_dict

    def skills2reward(self, skills, map_file, skills2days_ratio=10, reward_per_day=1000, debug_flag=0):
        from math import ceil
        skill_sum = 0

        # calculate: required_days = sum(required_skills/skills2days_ratio)
        for k in skills:
            if debug_flag == 1:
                print k, skills[k]['base_cost']
            skill_sum += skills[k]['base_cost']
        required_days = ceil(skill_sum / skills2days_ratio)

        # find the user input
        usr_options_dict = {'week': 5, 'two weeks': 10, 'three weeks': 15, 'month': 25, 'two months': 50,
                            'three months': 75, 'six months': 150}
        usr_time_input = usr_options_dict[map_file['content']['time'][0]]

        # calculate the factor between actually required to what the user wants:
        time_factor = required_days / usr_time_input

        # calculate reward
        if debug_flag == 1:
            print required_days, reward_per_day, time_factor, usr_time_input
        reward = required_days * reward_per_day * time_factor

        return reward


if __name__ == '__main__':
    a = newMissionFunctions()
    print a.map2goals({"content": {
        "type": ["design"],
        "attributes": ["autocad"],
        "field": ["commerce"],
        "language": ["frence"],
        "outcome": ["hw module"],
        "time": ["a month"]}})
