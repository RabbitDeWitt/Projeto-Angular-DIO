import { Injectable } from "@angular/core";
import { Course } from "./course";

@Injectable({
  providedIn: 'root'
})

export class CourseServices{
  retrieveAll(): Course[] {
    return COURSES;
  } 

  retrieveById(id: number): Course {
    const result = COURSES.find((courseInterator: Course) => courseInterator.id === id);
    const course: Course ={
    id: 0,
    name: '',
    releaseDate: '',
    description: '',
    duration: 0,
    code: '',
    rating: 0,
    price: 0,
    imageUrl: '',
    }

    if(result !== undefined){
      course.id = result.id
      course.name = result.name
      course.releaseDate = result.releaseDate
      course.description = result.description
      course.duration = result.duration
      course.code = result.code
      course.rating = result.rating
      course.price = result.price
      course.imageUrl = result.imageUrl
    }
    
    return course
  }
}

var COURSES: Course[] = [
  {
      id: 1,
      name: 'Angular: CLI',
      releaseDate: 'Julho 2, 2022',
      description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
      duration: 120,
      code: 'XLF-1212',
      rating: 3,
      price: 12.99,
      imageUrl: '/assets/images/cli.png',
  },
  {
      id: 2,
      name: 'Angular: Forms',
      releaseDate: 'Julho 4, 2022',
      description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
      duration: 80,
      code: 'DWQ-3412',
      rating: 3.5,
      price: 24.99,
      imageUrl: '/assets/images/forms.png',
  },
  {
      id: 3,
      name: 'Angular: HTTP',
      releaseDate: 'Julho 8, 2022',
      description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
      duration: 80,
      code: 'QPL-0913',
      rating: 4.0,
      price: 36.99,
      imageUrl: '/assets/images/http.png',
  },
  {
      id: 4,
      name: 'Angular: Router',
      releaseDate: 'Julho 16, 2022',
      description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
      duration: 80,
      code: 'OHP-1095',
      rating: 4.5,
      price: 46.99,
      imageUrl: '/assets/images/router.png',
  },
  {
      id: 5,
      name: 'Angular: Animations',
      releaseDate: 'Julho 25, 2022',
      description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
      duration: 80,
      code: 'PWY-9381',
      rating: 5,
      price: 56.99,
      imageUrl: '/assets/images/animations.png',
  }
];