import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private http: HttpClient) {
     this.showInfo();
  }
	 loginInf: string = 'Login';
     loginOrReg: boolean = true;
   loginInfo(){
	 //  this.http.post(   /* url */, /* object of info sent */).subscribe((res) => {
	  // })
	   
   }
   LoginOrRegister(e){
	   e.preventDefault();
	  if(this.loginOrReg == true){
		   this.loginOrReg = false;
		   this.loginInf =  'Register';
	   } else if (this.loginOrReg == false){
		   this.loginInf = 'Login';
		   this.loginOrReg = true;
		   
	   }
	   
   }
  
   showInfo(){ 
	  
	 this.http.post('https://webhook.site/1f9ca7a1-56c0-4c72-b9b7-10d384cad959',
	 {"user": "thisisthepass"}, httpOptions).subscribe((res) => {
		 
		 console.log(res);
	 });
   }
   
   showPost(){
	   
	   
   }
	  
  
  ngOnInit() {
	 
  }
  
 
  

}
