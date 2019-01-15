class Degree(object):

    degree_bins = {"bachelor": [
        "computer science": ["Computer Science","BCompSc", "Computing","BComp", "Computer Applications","BCA"],
        "mechanical engineering" : [],
        "electrical engineering" : [],
        "business": ["Science in Business","BSBA", "Business Administration","BBA", "Management Studies","BMS","Business","BBus", "Management and Organizational Studies","BMOS", "Business Science","BBusSc" ],
        "information": ["Applied Science in Information Technology","BAppScIT", "Science in Information Technology","BScIT", "Business Information Systems","BBIS"],
        "marketing": [],
        "logistics": [],
        "math": ["Mathematics","BMath", "Mathematical Sciences","BMathSc"],
        "physics" : [],
        "biology": ["Human Biology"],
        "statistics": [],
        "finance": ["Economics","BIBE", "International Business Economics","BIBE", "Commerce","BCom","BComm", "Economics","BEc","BEconSc","BAEcon","BScEcon"],
        "architecture": ["Architecture","BArch", "Landscape Architecture","BLArch"],
        "art": ["Arts","BA","AB","BS","SB","ScB", "Applied Arts","BAA", "Applied Arts and Science","BAAS", "Fine Arts","BFA", "Arts in Organizational Management","BAOM", "Arts for Teaching","BAT", "Liberal Arts","BLA"],
        "design": ["Design","BDes"],
        "music": ["Music","BM","BMus", "Music Education","BME"],
        "media": ["Film and Television","BFTV", "Journalism","BJ","BAJ","BSJ","BJourn"]
        "psychology": [],
        "accounting": ["Accountancy","BAcy","BAcc","BAccty"],
        "human resources" : []
        "engineering": ["Engineering","BEng","BE","BSE","BESc","BSEng","BASc","BTech","BScEng","AMIE", "GradIETE", "Engineering Technology","BSET", "Aviation","BAvn"],
        "technology": ["Technology","BTech"],
        "law": ["Law","BSL"]
        "health": ["Medical Science","BMedSci", "Medical Biology","BMedBiol", "Science in Public Health","BSPH", "Science in Nursing","BN","BNSc","BScN","BSN","BNurs","BSN","BHSc", "Health Science","BHS","BHSc"]
    ],
    "master": [
        "computer science": [],
        "mechanical engineering" : [],
        "electrical engineering" : [],
        "business admin": [],
        "information": [],
        "marketing": [],
        "logistics": [],
        "math": [],
        "physics" : [],
        "biology": [],
        "statistics": [],
        "finance": [],
        "architecture": [],
        "art": [],
        "design": [],
        "law": [],
        "music": [],
        "psychology": [],
        "accounting": [],
        "human resources" : []
    ],
    "phd": [
        "computer science": [],
        "mechanical engineering" : [],
        "electrical engineering" : [],
        "business admin": [],
        "information": [],
        "marketing": [],
        "logistics": [],
        "math": [],
        "physics" : [],
        "biology": [],
        "statistics": [],
        "finance": [],
        "architecture": [],
        "art": [],
        "design": [],
        "law": [],
        "music": [],
        "psychology": [],
        "accounting": [],
        "human resources" : []
    ],
    "associate": [
        "science": ["science", "AS", "applied science", "AAS"],
        "technology" : ["technology", "AT", "Industrial Technology", "AIT"],
        "engineering" : ["engineering", "electronics engineering", "AE", "Engineering Science", "AES", "Engineering Technology", "AET", "APE", "Pre-Engineering"],
        "business admin": ["applied business", "AAB" , "business administration", "ABA"],
        "information": [],
        "marketing": [],
        "logistics": [],
        "math": [],
        "physics" : [],
        "biology": [],
        "statistics": [],
        "finance": [],
        "architecture": [],
        "art": ["arts", "applied arts", "arts in teaching", "AA", "AAA", "AAT", "Fine Arts", "AFA"],
        "design": [],
        "law": [],
        "music": [],
        "psychology": [],
        "accounting": [],
        "human resources" : []
    ]  
    }

    def __init__(self, degree, degree_subject):
        _degree = self.degree
        _degree_subject = self.degree_subject

    
    def binning(self, degree):
        
