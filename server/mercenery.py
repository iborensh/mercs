
from university_ranking import UniversityRanking
from degree_skills import DegreeSkills
from degree_binning import Degree


class Mercenery(object):
    def __init__(self):
        self.rank_factor = 1
        

    # GET ACHIEVMENTS FROM MERC
    def add_education_degree(self, usr_class, school, degree, degree_subject, average):
        print school, degree, degree_subject, str(average)
        # calculate university ranking factor
        
        ranking = UniversityRanking()
        if school in ranking.universityList:
            usr_rank =  ranking.universityList.index(school)
        else: 
            print "not here"

        # calculate the university ranking factor based on the usr rank:
        if (usr_rank > 0) and (usr_rank <= 50):
            self.rank_factor = 2
        elif usr_rank > 50 and usr_rank <= 100:
            self.rank_factor = 1.7
        elif usr_rank > 100 and usr_rank <= 200:
            self.rank_factor = 1.5
        elif usr_rank > 200 and usr_rank <= 500:
            self.rank_factor = 1.3
        elif usr_rank > 500 and usr_rank <= 1000:
            self.rank_factor = 1.1
        # find degree (binned)
        usr_degree_subject_binned = Degree(degree, degree_subject).binning()

        # find gained skilles:
        usr_gained_skills = DegreeSkills(usr_class=usr_class, usr_degree=degree, usr_degree_subject_binned=usr_degree_subject_binned, usr_avg=average).return_skills()

        # add the factor for the university ranking:
        for k in usr_gained_skills:
            usr_gained_skills[k] = usr_gained_skills[k] * self.rank_factor
        print usr_gained_skills
        return usr_gained_skills

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

# for testing:
#m = Mercenery()
#m.add_education_degree(usr_class = "software developer", school="University College London", degree="bachelor", degree_subject="Computing", average=90)

