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
		[{"label": "Database", "value": "db", "options":
            [
                {"label": "SQL", "value": "sql", "max_rank": 100, "my_rank": 0, "base_cost": 3,  "explanation": "", "required_by":[]},
                {"label": "NO-SQL", "value": "No-sql", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Big Data", "value": "big data", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "SW_General", "value": "sw_general", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["server-side", "website", "application"]}
            ]},
        {"label": "Mobile", "value": "mobile", "options":
            [
                {"label": "IOS", "value": "ios" ,"max_rank": 100, "my_rank": 0, "base_cost": 3,"explanation": "","required_by":[]},
                {"label": "Android", "value": "android", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "SW_General", "value": "sw_general", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["application"]}
            ]},
        {"label": "Networks", "value": "networks", "options":
            [
                {"label": "Administration", "value": "administration", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Security", "value": "security", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Switches", "value": "switches", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Routers", "value": "routers", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "VPN", "value": "vpn", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Firewall", "value": "firewall", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "IP", "value": "ip", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "VoIP", "value": "voip", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Data centers", "value": "data centers", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "SW_General", "value": "sw_eneral", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["network", "website"]}
            ]},
        {"label": "Web", "value": "web", "options":
            [
                {"label": "CSS", "value": "css", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Javascript", "value": "javascript", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "PHP", "value": "php", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "HTML5", "value": "html5", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Node.js", "value": "node.js", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "React.js", "value": "react.js", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "SW_General", "value": "sw_general", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["web"]}
            ]},
        {"label": "UI" , "value": "UI", "options":
            [
                {"label": "Wireframes", "value": "wireframes", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Bootstrap", "value": "bootstrap", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Responsive", "value": "responsive", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "SW_General", "value": "sw_general", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["website", "application"]}
            ]},
        {"label": "OS", "value": "os", "options":
            [
                {"label": "Linux", "value": "linux", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Windows", "value": "windows", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "MacOs", "value": "macos", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Memory", "value": "memory", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Compilers", "value": "compilers", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "SW_General", "value": "sw_general", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["website", "application"]}
            ]},
        {"label": "Arch", "value": "arch", "options":
            [
                {"label": "Embedded", "value": "embedded", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "RealTime", "value": "realtime", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Containers", "value": "containers", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "MicroServices", "value": "microservices", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "BlockChain", "value": "blockchain", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Security", "value": "security", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "software design", "value": "software design", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "SW_General", "value": "sw_general", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["development"]}
            ]},
        {"label": "Coding", "value": "coding", "options":
            [
                {"label": "C", "value": "c", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Python", "value": "python", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Java", "value": "java", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "C++", "value": "c++", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Scala", "value": "scala", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Go", "value": "go", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "scripting", "value": "scripting","max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "low level languages", "value": "low level languages", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "SW_General", "value": "sw_general", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["development"]}
            ]},
            {"label": "Quanitative", "value": "quantitative", "options":
            [
                {"label": "Math", "value": "math", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Algorithms", "value": "algorithms", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Statistics", "value": "statistics", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "SW_General", "value": "sw_general", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["development"]}
            ]},
        {"label": "QA", "value": "qa", "options":
            [
            {"label": "Automation", "value": "automation", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
            {"label": "Manual", "value": "manual", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
            {"label": "CI frameworks", "value": "ci frameworks", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
            {"label": "Testing tools", "value": "testing tools", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
            {"label": "Test design", "value": "test design", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
            {"label": "SW_General", "value": "sw_eneral", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["application", "testing", "website", "game"]}
            ]}
    	]},
    {"label": "Hardware development", "value": "hd", "father":"", "options":
        [{"label": "Architectures", "value": "architectures", "options":
            [
                {"label": "Microcontrollers", "value": "microcontrollers", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Microprocessors", "value": "microprocessors", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "ASIC", "value": "asic", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "FPGA", "value": "fpga", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "SoC", "value": "soc", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "HW_General", "value": "hw_eneral", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["HW design"]}
            ]},
        {"label": "HW SW", "value": "hw design", "options":
            [
                {"label": "Simulations", "value": "simulations", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Verilog", "value": "verilog", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "RTL", "value": "RTL", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Firmware", "value": "firmware", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "HW_General", "value": "hw_general", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["chip design", "HW design", "testing"]}
            ]},
        {"label": "Sensors", "value": "sensors", "options":
            [
                {"label": "Imaging", "value": "imaging", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Sound", "value": "sound", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "DSP", "value": "dsp", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Motion", "value": "motion", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "HW_General", "value": "hw_general", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["sensor"]}
            ]},
        {"label": "Testing", "value": "testing", "options":
            [
                {"label": "Automation", "value": "automation", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Pre-silicon", "value": "pre-silicon", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Post-silicon", "value": "post-silicon", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Testing tools", "value": "testing tools", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Test design", "value": "test design", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "HW_General", "value": "hw_general", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["HW_module", "sensor"]}
            ]}
        ]},
    {"label": "Analytics","value":"analytics", "options":
        [{"label": "Quantitative", "value": "auantitative", "options":
            [
                {"label": "Statistics", "value": "statistics", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Math", "value": "math", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Modeling", "value": "modeling", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Finance", "value": "finance", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Risk", "value": "risk", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Analytics_General", "value": "analytics_general", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["blog", "publication", "report"]}
            ]},
        {"label": "Tools", "value": "tools", "options":
            [
                {"label": "R", "value": "r", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Python science", "value": "python science", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Deep learning", "value": "deep learning", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Matlab", "value": "matlab", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Machine learning", "value": "machine learning", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Analytics_General", "value": "analytics_general", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["blog", "publication", "report"]}
            ]},
        {"label": "Data science", "value": "data science", "options":
            [
                {"label": "Supervised", "value": "supervised", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Unsupervised", "value": "unsupervised", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "RNN", "value": "rnn", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "CNN", "value": "cnn", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "NLP", "value": "nlp", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Reinforced", "value": "reinforced", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":[]},
                {"label": "Analytics_General", "value": "analytics_general", "max_rank": 100, "my_rank": 0, "base_cost": 3, "explanation": "", "required_by":["blog", "publication", "report"]}
            ]}
        ]},
    {"label": "Design","value": "design", "options":
        [{"label": "Design", "value": "design", "options":
            [
            ]},
        {"label": "Art", "value": "art", "options":
            [

            ]},
        {"label": "Tools", "value": "tools", "options":
            [
                
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
