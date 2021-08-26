import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  id;
  doctor:any = null;
  constructor(private route:ActivatedRoute, private api:ApiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getDoctorInformations();
  }

  getDoctorInformations(){
    //  http
    this.api.getDoctorInformations(this.id).subscribe((data) => {
      console.log(data);
      
      this.doctor = data;
    });
  }

  prise(){
    //http
    this.api.prise().subscribe((data) => {
      console.log(data);

      this.doctor = data;

    {
      id:this.id,
      message:""
    }
  }

  }


