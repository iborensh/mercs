class DegreeSkills(object):
    
    degree_skills = {"software developer" :{
        "computer science": {"low level languages": 2, "algorithms": 4, "math": 4, "statistics": 3, "sw_general": 7},
        "mechanical engineering" : {"math": 3, "statistics": 1, "sw_general": 2},
        "electrical engineering" : {"low level languages": 1, "algorithms": 3, "math": 5, "statistics": 3, "sw_general": 2},
        "business": {"math": 1, "statistics": 1, "sw_general": 1},
        "information": {},
        "marketing": {},
        "logistics": {},
        "math": {},
        "physics" : {},
        "biology": {},
        "statistics": {},
        "finance": {},
        "architecture": {},
        "art": {},
        "design": {},
        "music": {},
        "media": {},
        "psychology": {},
        "accounting": {},
        "human resources" : {},
        "engineering": {},
        "technology": {},
        "law": {},
        "health": {}
    },
        "sw": {
            "computer science": {"low level languages": 2, "algorithms": 4, "math": 4, "statistics": 3,
                                 "sw_general": 7},
            "mechanical engineering": {"math": 3, "statistics": 1, "sw_general": 2},
            "electrical engineering": {"low level languages": 1, "algorithms": 3, "math": 5, "statistics": 3,
                                       "sw_general": 2},
            "business": {"math": 1, "statistics": 1, "sw_general": 1},
            "information": {},
            "marketing": {},
            "logistics": {},
            "math": {},
            "physics": {},
            "biology": {},
            "statistics": {},
            "finance": {},
            "architecture": {},
            "art": {},
            "design": {},
            "music": {},
            "media": {},
            "psychology": {},
            "accounting": {},
            "human resources": {},
            "engineering": {},
            "technology": {},
            "law": {},
            "health": {}
        },
    "hardware developer" :{
        "computer science": {},
        "mechanical engineering" : {},
        "electrical engineering" : {},
        "business": {},
        "information": {},
        "marketing": {},
        "logistics": {},
        "math": {},
        "physics" : {},
        "biology": {},
        "statistics": {},
        "finance": {},
        "architecture": {},
        "art": {},
        "design": {},
        "music": {},
        "media": {},
        "psychology": {},
        "accounting": {},
        "human resources" : {},
        "engineering": {},
        "technology": {},
        "law": {},
        "health": {}
    },
        "hw": {
            "computer science": {},
            "mechanical engineering": {},
            "electrical engineering": {},
            "business": {},
            "information": {},
            "marketing": {},
            "logistics": {},
            "math": {},
            "physics": {},
            "biology": {},
            "statistics": {},
            "finance": {},
            "architecture": {},
            "art": {},
            "design": {},
            "music": {},
            "media": {},
            "psychology": {},
            "accounting": {},
            "human resources": {},
            "engineering": {},
            "technology": {},
            "law": {},
            "health": {}
        },
    "analytics" :{
        "computer science": {},
        "mechanical engineering" : {},
        "electrical engineering" : {},
        "business": {},
        "information": {},
        "marketing": {},
        "logistics": {},
        "math": {},
        "physics" : {},
        "biology": {},
        "statistics": {},
        "finance": {},
        "architecture": {},
        "art": {},
        "design": {},
        "music": {},
        "media": {},
        "psychology": {},
        "accounting": {},
        "human resources" : {},
        "engineering": {},
        "technology": {},
        "law": {},
        "health": {}
    },
    "design" :{
        "computer science": {},
        "mechanical engineering" : {},
        "electrical engineering" : {},
        "business": {},
        "information": {},
        "marketing": {},
        "logistics": {},
        "math": {},
        "physics" : {},
        "biology": {},
        "statistics": {},
        "finance": {},
        "architecture": {},
        "art": {},
        "design": {},
        "music": {},
        "media": {},
        "psychology": {},
        "accounting": {},
        "human resources" : {},
        "engineering": {},
        "technology": {},
        "law": {},
        "health": {}
    },
    "marketing" :{
        "computer science": {},
        "mechanical engineering" : {},
        "electrical engineering" : {},
        "business": {},
        "information": {},
        "marketing": {},
        "logistics": {},
        "math": {},
        "physics" : {},
        "biology": {},
        "statistics": {},
        "finance": {},
        "architecture": {},
        "art": {},
        "design": {},
        "music": {},
        "media": {},
        "psychology": {},
        "accounting": {},
        "human resources" : {},
        "engineering": {},
        "technology": {},
        "law": {},
        "health": {}
    },
    "finance" :{
        "computer science": {},
        "mechanical engineering" : {},
        "electrical engineering" : {},
        "business": {},
        "information": {},
        "marketing": {},
        "logistics": {},
        "math": {},
        "physics" : {},
        "biology": {},
        "statistics": {},
        "finance": {},
        "architecture": {},
        "art": {},
        "design": {},
        "music": {},
        "media": {},
        "psychology": {},
        "accounting": {},
        "human resources" : {},
        "engineering": {},
        "technology": {},
        "law": {},
        "health": {}
    },
  
    }


    def __init__(self, usr_class, usr_degree, usr_degree_subject_binned, usr_avg):
        #usr_class: software developer, hardware developer, analytics, design etc..
        # degree: bechelor, master, phd, associate
        # degree subject: result from degree_binning
        self.usr_degree = usr_degree
        self.usr_degree_subject_binned = usr_degree_subject_binned
        self.usr_class = usr_class
        self.usr_avg = usr_avg

    def return_skills(self):
        for merc_class in self.degree_skills.keys():
            if self.usr_class == merc_class:
                for merc_degree_subject in self.degree_skills[merc_class]:
                    # if merc_degree_subject == self.usr_degree_subject_binned:
                    gained_skills_base = self.degree_skills[merc_class][merc_degree_subject]
                        
        # give factor for the level of usr degree:
        degree_factor = 1
        if self.usr_degree == "associate":
            degree_factor = 0.5
        if self.usr_degree == "master":
            degree_factor = 1.1
        if self.usr_degree == "phd":
            degree_factor = 1.5

        # add a factor for the user average:
        avg_factor = (float(self.usr_avg) / 100) + 0.3

        # modify the gained skills value based on the degree_factor:
        gained_skills = {}
        for k in gained_skills_base:
            gained_skills[k] = gained_skills_base[k] * degree_factor * avg_factor
            
        return gained_skills