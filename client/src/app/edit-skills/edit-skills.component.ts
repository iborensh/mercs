import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import {forEach} from "@angular/router/src/utils/collection";
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.scss']
})
export class EditSkillsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  v0 = [
	{"label": "Software development", "value": "SD", "options":
		[{"label": "Database", "value": "DB", "options":
            [
                {"label": "SQL", "value": "SQL", "max_rank": 5, "my_rank": 0, "base_cost": 3,  "explanation": "", "required_by":[]},
                {"label": "NO-SQL", "value": "No-SQL", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Big Data", "value": "Big Data", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "SW_General", "value": "SW_General", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["server-side", "website", "application"]}
            ]},
        {"label": "Mobile", "value": "Mobile", "options":
            [
                {"label": "IOS", "value": "IOS" ,"max_rank": 5, "my_rank": 0, "base_cost": 3,"explanation": "","required_by":[]},
                {"label": "Android", "value": "Android", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "SW_General", "value": "SW_General", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["application"]}
            ]},
        {"label": "Networks", "value": "Networks", "options":
            [
                {"label": "Administration", "value": "Administration", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Security", "value": "Security", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Switches", "value": "Switches", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Routers", "value": "Routers", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "VPNs", "value": "VPNs", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Firewall", "value": "Firewall", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "IP", "value": "IP", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "VoIP", "value": "VoiP", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Data centers", "value": "Data centers", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "SW_General", "value": "SW_General", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["network", "website"]}
            ]},
        {"label": "Web", "value": "Web", "options":
            [
                {"label": "CSS", "value": "CSS", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Javascript", "value": "Javascript", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "PHP", "value": "PHP", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "HTML5", "value": "HTML5", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Node.js", "value": "Node.js", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "React.js", "value": "React.js", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "SW_General", "value": "SW_General", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["web"]}
            ]},
        {"label": "UI" , "value": "UI", "options":
            [
                {"label": "Wireframes", "value": "Wireframes", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Bootstrap", "value": "Bootstrap", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Responsive", "value": "Responsive", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "SW_General", "value": "SW_General", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["website", "application"]}
            ]},
        {"label": "OS", "value": "OS", "options":
            [
                {"label": "Linux", "value": "Linux", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Windows", "value": "Window", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "MacOs", "value": "MacOs", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Memory", "value": "Memory", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Compilers", "value": "Compilers", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "SW_General", "value": "SW_General", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["website", "application"]}
            ]},
        {"label": "Arch", "value": "Arch", "options":
            [
                {"label": "Embedded", "value": "Embedded", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "RealTime", "value": "RealTime", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Containers", "value": "Containers", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "MicroServices", "value": "Microservices", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "BlockChain", "value": "Blockchain", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Security", "value": "Security", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "SW_General", "value": "SW_General", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["development"]}
            ]},
        {"label": "Coding", "value": "Coding", "options":
            [
                {"label": "Python", "value": "Python", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Java", "value": "Java", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "C++", "value": "C++", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Scala", "value": "Scala", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Go", "value": "Go", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "SW_General", "value": "SW_General", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["development"]}
            ]},
        {"label": "QA", "value": "QA", "options":
            [
            {"label": "Automation", "value": "Automation", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
            {"label": "Manual", "value": "Manual", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
            {"label": "CI frameworks", "value": "CI frameworks", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
            {"label": "Testing tools", "value": "Testing tools", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
            {"label": "Test design", "value": "Test design", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
            {"label": "SW_General", "value": "SW_General", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["application", "testing", "website", "game"]}
            ]}
    	]},
    {"label": "Hardware development", "value": "HD", "father":"", "options":
        [{"label": "Architectures", "value": "Architectures", "options":
            [
                {"label": "Microcontrollers", "value": "microcontrollers", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Microprocessors", "value": "microprocessors", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "ASIC", "value": "ASIC", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "FPGA", "value": "FPGA", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "SoC", "value": "SoC", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "HW_General", "value": "HW_General", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["HW design"]}
            ]},
        {"label": "HW SW", "value": "HW design", "options":
            [
                {"label": "Simulations", "value": "simulations", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Verilog", "value": "verilog", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "RTL", "value": "RTL", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Firmware", "value": "firmware", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "HW_General", "value": "HW_General", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["chip design", "HW design", "testing"]}
            ]},
        {"label": "Sensors", "value": "sensors", "options":
            [
                {"label": "Imaging", "value": "imaging", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Sound", "value": "sound", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "DSP", "value": "DSP", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Motion", "value": "motion", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "HW_General", "value": "HW_General", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["sensor"]}
            ]},
        {"label": "Testing", "value": "testing", "options":
            [
                {"label": "Automation", "value": "Automation", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Pre-silicon", "value": "pre-silicon", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Post-silicon", "value": "post-silicon", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Testing tools", "value": "Testing tools", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Test design", "value": "Test design", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "HW_General", "value": "HW_General", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["HW_module", "sensor"]}
            ]}
        ]},
    {"label": "Analytics","value":"Analytics", "options":
        [{"label": "Quantitative", "value": "Quantitative", "options":
            [
                {"label": "Statistics", "value": "statistics", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Math", "value": "math", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Modeling", "value": "modeling", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Finance", "value": "", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Risk", "value": "", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Analytics_General", "value": "Analytics_General", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["blog", "publication", "report"]}
            ]},
        {"label": "Tools", "value": "tools", "options":
            [
                {"label": "R", "value": "R", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Python science", "value": "python science", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Deep learning", "value": "", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Matlab", "value": "Matlab", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Machine learning", "value": "machine learning", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Analytics_General", "value": "Analytics_General", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["blog", "publication", "report"]}
            ]},
        {"label": "Data science", "value": "data science", "options":
            [
                {"label": "Supervised", "value": "supervised", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Unsupervised", "value": "unsupervised", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "RNN", "value": "RNN", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "CNN", "value": "CNN", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "NLP", "value": "NLP", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Reinforced", "value": "Reinforced", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Analytics_General", "value": "Analytics_General", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["blog", "publication", "report"]}
            ]}
	    ]}
    ]

  route = "app-edit-skills";
  titleChoose = '';
  options = [];

  ngOnInit() {
      this.titleChoose = 'DB';
      this.options = _.find(this.v0[0].options, { 'value':this.titleChoose }).options;
  }

  intToArray(num){
      return _.fill(Array(num), null);
  }

  currentTitle(titleChoose){
      this.titleChoose = titleChoose;
      this.options = _.find(this.v0[0].options, { 'value':this.titleChoose }).options;
  }

}
