import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-goalsubmit',
  templateUrl: './goalsubmit.component.html',
  styleUrls: ['./goalsubmit.component.css']
})
export class GoalsubmitComponent implements OnInit {

  constructor(public http: HttpClient) { 
  }
   httpOptions: any  = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
  };
  goal: String;
  mood: String;
  comment: String;
  ngOnInit() {
  }
  
 
	submitGoal(){
		  this.http.post("http://localhost:3000/goalnum" , {goal:this.goal, mood: this.mood, comment: this.comment}, this.httpOptions).subscribe( res => { console.log(res)
  		window.location.href = "/login";

		  },
	  response => {
})
	}
}
