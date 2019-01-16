class DegreeSkills(object):
    
    degree_bins = {"bachelor": {
        "computer science": [],
        "mechanical engineering" : [],
        "electrical engineering" : [],
        "business": [],
        "information": [],
        "marketing": [],
        "logistics": ["logistics"],
        "math": [],
        "physics" : [],
        "biology": [[],
        "statistics": ["statistics"],
        "finance": [],
        "architecture": [],
        "art": []
        "design": [],
        "music": [],
        "media": [],
        "psychology": [],
        "accounting": [],
        "human resources" : [],
        "engineering": [],
        "technology": [],
        "law": [],
        "health": []
    },
    "master": {
        "computer science": [],
        "mechanical engineering" : [],
        "electrical engineering" : [],
        "business": [],
        "information": [],
        "marketing": [],
        "logistics": ["logistics"],
        "math": [],
        "physics" : [],
        "biology": [[],
        "statistics": ["statistics"],
        "finance": [],
        "architecture": [],
        "art": []
        "design": [],
        "music": [],
        "media": [],
        "psychology": [],
        "accounting": [],
        "human resources" : [],
        "engineering": [],
        "technology": [],
        "law": [],
        "health": []
    },
    "phd": {
        "computer science": [],
        "mechanical engineering" : [],
        "electrical engineering" : [],
        "business": [],
        "information": [],
        "marketing": [],
        "logistics": ["logistics"],
        "math": [],
        "physics" : [],
        "biology": [[],
        "statistics": ["statistics"],
        "finance": [],
        "architecture": [],
        "art": []
        "design": [],
        "music": [],
        "media": [],
        "psychology": [],
        "accounting": [],
        "human resources" : [],
        "engineering": [],
        "technology": [],
        "law": [],
        "health": []
    },
    "associate": {
        "computer science": [],
        "mechanical engineering" : [],
        "electrical engineering" : [],
        "business": [],
        "information": [],
        "marketing": [],
        "logistics": ["logistics"],
        "math": [],
        "physics" : [],
        "biology": [[],
        "statistics": ["statistics"],
        "finance": [],
        "architecture": [],
        "art": []
        "design": [],
        "music": [],
        "media": [],
        "psychology": [],
        "accounting": [],
        "human resources" : [],
        "engineering": [],
        "technology": [],
        "law": [],
        "health": []
    } 
    }


    def __init__(self):
        # degree - bechelor, master, phd, associate
        # degree subject - result from degree_binning
        self.degree = degree
        self.degree_subject = degree_subject

    def return_skills(self):
        for d in self.degree_bins.keys():
            if self.degree == d:
