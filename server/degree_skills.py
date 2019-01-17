class DegreeSkills(object):
    
    degree_skills = {"software developer" :{
        "computer science": {"memory": 2, "compilers": 2, "c": 2, "java": 2, "test design": 2, "algorithms": 5, "math": 5, "statistics": 3, "sw_general": 5},
        "mechanical engineering" : {"math": 3, "statistics": 1, "sw_general": 2},
        "electrical engineering" : {"c": 1, "algorithms": 3, "math": 5, "statistics": 3, "sw_general": 2},
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


    def __init__(self, usr_class, usr_degree, usr_degree_subject):
        #usr_class: software developer, hardware developer, analytics, design etc..
        # degree: bechelor, master, phd, associate
        # degree subject: result from degree_binning
        self.usr_degree = usr_degree
        self.usr_degree_subject = usr_degree_subject
        self.usr_class = usr_class

    def return_skills(self):
        for merc_class in self.degree_skills.keys():
            if self.usr_class == merc_class:
                for merc_degree_subject in self.degree_skills[merc_class]:
                    if merc_degree_subject == self.usr_degree_subject:
                        gained_skills_base =  self.degree_skills[merc_class][merc_degree_subject]
                        
        # give factor for the level of usr degree:
        degree_factor = 1
        if self.usr_degree == "associate":
            degree_factor = 0.5
        if self.usr_degree == "master":
            degree_factor = 1.1
        if self.usr_degree == "phd":
            degree_factor = 1.5
            
        # modify the gained skills value based on the degree_factor:
        gained_skills = {}
        for k in gained_skills_base:
            gained_skills[k] = gained_skills_base[k] * degree_factor
            
        return gained_skills