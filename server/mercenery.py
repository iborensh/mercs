from university_ranking import UniversityRanking

class Mercenery(object):
    def __init__(self):
        pass

    # GET ACHIEVMENTS FROM MERC
    def add_education_degree(self, school, degree, degree_subject, average):
        print school, degree, degree_subject, str(average)
        # calculate university ranking factor
        ranking = UniversityRanking()
        if school in ranking.universityList:
            print "found it!"
        else: 
            print "not here"
        # find degree 

    def add_education_course(self, website, course, certification_url):
        print "course"

    def add_patent(self, patent_name, patent_id):
        print "patent"

    def add_project(self, project_name, project_field):
        print "project"

    def add_work_experience(self, company, title, start_date, end_date):
        print "work_experience"

    def add_publication(self, journal, title, issue):
        print "publication"

    def add_award(self, competition, title, year):
        print "award"

    # ADD ACHIEVEMENTS TO Q
    def achievment2queue(self, usr_input_type, **kwargs):
        input_types = {"degree": self.add_education_degree,
                          "course": self.add_education_course,
                          "patent": self.add_patent,
                          "project": self.add_project,
                          "work_experience": self.add_work_experience,
                          "publication" : self.add_publication,
                          "award": self.add_award
                            }
        func2call = input_types[usr_input_type]
        func2call(kwargs)

    # TRANSLATE ACHIEVEMENT TO SKILL POINTS


m = Mercenery()
m.add_education_degree(school="University College London", degree="b", degree_subject="c", average=90)
