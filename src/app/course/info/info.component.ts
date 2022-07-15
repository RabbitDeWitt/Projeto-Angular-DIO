import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "../course";
import { CourseServices } from "../course.service";

@Component({
  templateUrl: './info.component.html'
})

export class InfoComponent implements OnInit{
  
  course: Course ={
    id: 0,
    name: '',
    releaseDate: '',
    description: '',
    duration: 0,
    code: '',
    rating: 0,
    price: 0,
    imageUrl: '',
    
  };

  constructor(private router: ActivatedRoute, private courseService: CourseServices){}

  ngOnInit(): void {
      this.courseService.retrieveById(Number(this.router.snapshot.paramMap.get('id'))).subscribe({
        next: course => this.course = course,
        error: err => console.log('Error', err)
      });
  }

  save(): void{
    this.courseService.save(this.course).subscribe({
      next: () => console.log("Saved with success!!!"),
      error: err => console.log('Error', err)
    });
  }
}