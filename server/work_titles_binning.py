# coding=utf-8
class WorkTitlesBinning(object):
    workTitles = {  
        "software developer": {
            "general": ["full stack", "software developer", "software engineer"],
            "beckend": ["beckend", "server"],
            "frontend": ["frontend", "client"],
            "db": ["database", "db"],
            "automation": ["automation"],
            "mobile":["mobile"],
            "cloud":["cloud"]
        },
        "hardware developer": {

        },
        "design": {
            "ui": ["firmware specialist", "interaction design", "framework design"],
            "ux": ["ux strategist", "information architect"],
            "wordpress" :["wordpress designer", "wordpress developer"]
        },
        "finance": {},
        "marketing": {},
        "engineering": {},
        "telecommunication": {},
        "ecommerce": {},
        "cyber": {},
        "analytics": {}
    }

    def __init__(self, usr_class, usr_title):
        self.usr_class = usr_class
        self.usr_title = usr_title

    def binning(self):
        for class_type in self.workTitles:
            if self.usr_class == class_type:
                for binned_title in self.workTitles[class_type]:
                    if self.usr_title in self.workTitles[class_type][binned_title]:
                        return binned_title



