class WorkTitlesSkills(object):
    binnedWorkTitles = {  
        "software developer": {
            "general": {"sw_general": 3, "software design": 1, "test_design": 1},
            "beckend": {"sw_general": 1, "software design": 1, "test_design": 1},
            "frontend": {"wireframes": 1, "javascript": 2, "css": 2, "software design": 1, "sw_general": 1},
            "db": {"sw_general": 1, "software design": 1, "test_design": 1, "SQL": 2, "no-sql": 2, "big_data": 2},
            "automation": {"sw_general": 1, "software design": 1, "test_design": 1},
            "mobile":{"ios": 2, "android": 2, "software design": 1, "responsive": 1, "sw_general": 1}, 
            "cloud":{"sw_general": 1, "software design": 1, "test_design": 1}
        },
        "hardware developer": {

        },
        "design": {
            "ui": {},
            "ux": {},
            "wordpress" :{}
        },
        "finance": {

        },
        "marketing": {

        },
        "engineering": {

        },
        "telecommunication": {

        },
        "ecommerce": {

        },
        "cyber": {

        },
        "analytics": {

        }
    }

    def __init__(self, usr_class, usr_title_binned):
        self.usr_class = usr_class
        self.usr_title_binned = usr_title_binned

    def return_skills(self):
        for merc_class in self.binnedWorkTitles.keys():
            if self.usr_class == merc_class:
                for merc_work_title_binned in self.binnedWorkTitles[merc_class]:
                    if self.usr_title_binned == merc_work_title_binned:
                        gained_skills_base =  self.binnedWorkTitles[merc_class][merc_work_title_binned]
        return gained_skills_base