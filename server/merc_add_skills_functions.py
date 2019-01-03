

def add_education_degree(degree):
    print "degree"

def add_education_course(course):
    print "course"

def add_patent(patent):
    print "patent"

def add_project(project):
    print "project"

def add_work_experience(work_experience):
    print "work_experience"

def add_publication(publication):
    print "publication"

def add_award(award):
    print "award"

def add_to_validation_queue(type_token, **kwargs):
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

