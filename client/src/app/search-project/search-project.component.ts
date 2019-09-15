import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search-project',
  templateUrl: './search-project.component.html',
  styleUrls: ['./search-project.component.scss']
})
export class SearchProjectComponent implements OnInit {

  constructor(private http: HttpClient) { }
    projects;
  colors = {0: 'project-default', 1: 'project-danger', 2: 'project-success', 3: 'project-primary', 4: 'project-info', 5: 'project-warning'};

  ngOnInit() {
      this.http.get('/api/projects').subscribe(data => {
          this.projects = data;

            },
            error => {
                console.log("Error", error);
            }
        );
  }

}
