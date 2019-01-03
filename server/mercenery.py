class Mercenery(object):
    def __init__(self):
        pass

    def add_education_degree(self, degree):
        print "degree"
        from university_ranking import University_ranking

    def add_education_course(self, course):
        print "course"

    def add_patent(self, patent):
        print "patent"

    def add_project(self, project):
        print "project"

    def add_work_experience(self, work_experience):
        print "work_experience"

    def add_publication(self, publication):
        print "publication"

    def add_award(self, award):
        print "award"

    def add_to_validation_queue(self, usr_input_type, **kwargs):
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