class Mercenery(object):
    def __init__(self):
        pass
    self.def add_education_degree(degree):
        print "degree"
        from university_ranking import University_ranking

    self.def add_education_course(course):
        print "course"

    self.def add_patent(patent):
        print "patent"

    self.def add_project(project):
        print "project"

    self.def add_work_experience(work_experience):
        print "work_experience"

    selfdef add_publication(publication):
        print "publication"

    self.def add_award(award):
        print "award"

    self.def add_to_validation_queue(type_token, **kwargs):
        input_tokens = {"degree": add_education_degree,
                          "course": add_education_course,
                          "patent": add_patent,
                          "project": add_project,
                          "work_experience": add_work_experience,
                          "publication" : add_publication,
                          "award": add_award
                            }
        func2call = input_tokens[type_token]
        func2call(kwargs)