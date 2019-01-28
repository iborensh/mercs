
from university_ranking import UniversityRanking
from degree_skills import DegreeSkills
from degree_binning import Degree
from companies_ranking import CompaniesRanking
from work_titles_binning import WorkTitlesBinning
from work_titles_skills import WorkTitlesSkills



class Mercenery(object):
    def __init__(self):
        self.rank_factor = 1
        

    # GET ACHIEVMENTS FROM MERC
    def add_education_degree(self, usr_class, school, degree, degree_subject, average):
        print school, degree, degree_subject, str(average)
        # calculate university ranking factor
        
        ranking = UniversityRanking()
        if school in ranking.universityList:
            usr_edu_rank =  ranking.universityList.index(school)
        else: 
            print "not here"

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

    def add_education_course(self, website, course, certification_url):
        print "course"

    def add_patent(self, patent_name, patent_id):
        print "patent"

    def add_project(self, project_name, project_field):
        print "project"

    def add_work_experience(self, usr_class, usr_company, usr_title, usr_seniority, years):
        # usr_class: software developer, hardware developer, designer etc
        # usr_company: company name
        # usr_title: work title name
        # usr_seniority: the seniority at the job - junior, senior, architect, tech lead, people manager

        print usr_company, usr_title, years, usr_seniority

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
m = Mercenery()
#m.add_education_degree(usr_class = "software developer", school="University College London", degree="bachelor", degree_subject="Computing", average=90)
m.add_work_experience(usr_class = "software developer", usr_company = "apple", usr_title = "full stack", usr_seniority="senior",  years=3)
