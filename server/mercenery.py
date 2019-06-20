
from university_ranking import UniversityRanking
from degree_skills import DegreeSkills
from degree_binning import Degree
from companies_ranking import CompaniesRanking
from work_titles_binning import WorkTitlesBinning
from work_titles_skills import WorkTitlesSkills
import os, json, sys, time



class Mercenery(object):
    def __init__(self):
        self.rank_factor = 1
        

    # GET ACHIEVMENTS FROM MERC
    def add_education(self, usr_class, school, degree, degree_subject, average):
        average = float(average)
        if usr_class == 'a':
            usr_class = 'software developer'
        print school, degree, degree_subject, str(average)
        # calculate university ranking factor
        
        ranking = UniversityRanking()
        if school in ranking.universityList:
            usr_edu_rank = ranking.universityList.index(school)
        else: 
            print "not here"
            usr_edu_rank = 600

        # calculate the university ranking factor based on the usr education rank:
        if (usr_edu_rank > 0) and (usr_edu_rank <= 50):
            self.rank_factor = 2
        elif usr_edu_rank > 50 and usr_edu_rank <= 100:
            self.rank_factor = 1.7
        elif usr_edu_rank > 100 and usr_edu_rank <= 200:
            self.rank_factor = 1.5
        elif usr_edu_rank > 200 and usr_edu_rank <= 500:
            self.rank_factor = 1.3
        elif usr_edu_rank > 500 and usr_edu_rank <= 1000:
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

    def add_education_course(self, usr_class, usr_website, usr_course, certification_url, course_length, course_lvl):

    # usr_website: name of the course site
    # usr_course: name of the course (need to do fuzzy search here)
    # certification url: link to the certificate
    # course length: a matching factor in case there is no record of such course, in days
    # course lvl: beginner, intemidiate, advanced
        print os.getcwd()

        with open('{}/jsons/online_courses.json'.format(os.getcwd())) as s:
            courses = json.load(s)

        usr_gained_skills = {}

        print usr_website, usr_course, certification_url
        identified_class = 0
        for course_area in courses:
            for field_dict in course_area['options']:
                for course in field_dict['options']:
                    if (usr_course == course['value']) and (usr_website == course['website']):
                        identified_class = 1
                        #need to add url for validation
                        print usr_course, course['skills']
                        usr_gained_skills = course['skills']

        # handling of a case where the course is not listed in our course list
        if(not identified_class): # we do not have record of such course
            course_lvl_factor = 1
            if course_lvl == 'beginner':
                course_lvl_factor = 0.8
            if course_lvl == 'intermediate':
                course_lvl_factor = 1
            if course_lvl == 'advanced':
                course_lvl_factor = 1.1

            default_course_skills = {"software development": {"sw_general": 0.02},
                                    "hardware development": {"hw_general": 0.02},
                                    "analytics": {"analytics_general": 0.02},
                                    "design": {"design_general": 0.02}
                                    }
            usr_gained_skills[default_course_skills[usr_class].keys()[0]] = default_course_skills[usr_class].values()[0] * float(course_length) * course_lvl_factor

        # print usr_gained_skills
        return usr_gained_skills

    def add_patent(self, patent_name, patent_id):
        print "patent"

    def add_project(self, project_name, project_field):
        print "project"

    def add_work(self, usr_class, usr_company, usr_title, usr_seniority, years):
        # usr_class: software developer, hardware developer, designer etc
        # usr_company: company name
        # usr_title: work title name
        # usr_seniority: the seniority at the job - junior, senior, architect, tech lead, people manager
        years = float(years)

        company_factor = 1
        seniority_factor = 1
        usr_gained_skills={}

        # calculate the seniority factor
        seniority_factor_dict = {"junior": 1, "senior": 1.1, "tech lead": 1.2, "people manager": 1.1}
        seniority_factor = seniority_factor_dict[usr_seniority]

        # check if the company is in the top of the field, if yes - factorize
        companies = CompaniesRanking()
        if usr_company in companies.companiesList['company_types'][usr_class]:
            usr_company_rank = companies.companiesList['company_types'][usr_class].index(usr_company)
            if usr_company_rank > 0 and usr_company_rank <= 10:
                company_factor = 2
            elif usr_company_rank > 10 and usr_company_rank <= 100:
                company_factor = 1.5
            
            print usr_company, usr_company_rank, company_factor
        else:
            print "company not in the top"
        # check the correct title_bin for the usr_title
        usr_work_title_binned = WorkTitlesBinning(usr_class, usr_title).binning()

        # return the base_usr_gained_skilled
        base_usr_gained_skills = WorkTitlesSkills(usr_class=usr_class, usr_title_binned=usr_work_title_binned).return_skills()
        # factorize the base gained skills
        for k in base_usr_gained_skills:     
            usr_gained_skills[k] = base_usr_gained_skills[k] * company_factor * seniority_factor * years
        return usr_gained_skills

    def add_publication(self, journal, title, issue):
        print "publication"

    def add_award(self, competition, title, year):
        print "award"

    # ADD ACHIEVEMENTS TO Q
    def achievement2queue(self, usr_input_type, **kwargs):

        input_types = {"degree": self.add_education,
                          "course": self.add_education_course,
                          "patent": self.add_patent,
                          "project": self.add_project,
                          "work_experience": self.add_work,
                          "publication" : self.add_publication,
                          "award": self.add_award
                            }
        func2call = input_types[usr_input_type]
        func2call(kwargs)

    # TRANSLATE ACHIEVEMENT TO SKILL POINTS

# for testing:
# m = Mercenery()
# m.add_education(usr_class = "software developer", school="University College London", degree="bachelor", degree_subject="Computing", average=90)
# m.add_work(usr_class = "software developer", usr_company = "apple", usr_title = "full stack", usr_seniority="senior",  years=3)
# m.add_education_course(usr_class = "software development", usr_website = "coursera", usr_course = "algorithms", certification_url='www.', course_length=3, course_lvl='beginner')