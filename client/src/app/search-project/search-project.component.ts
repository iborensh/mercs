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
