import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-prise-rendez-vous',
  templateUrl: './prise-rendez-vous.component.html',
  styleUrls: ['./prise-rendez-vous.component.css']
})
export class PriseRendezVousComponent implements OnInit {
 
  menu:[]
  AllDoctors: any = [];
  newDoctor =[]
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getAllDoctors(1).subscribe((data: any) => {
      console.log(data);



      this.AllDoctors = data;
    })
  }


  details(id){
    this.router.navigateByUrl('/dashboard/home/doctor/'+id)
  }
  
  }
