import { Component, OnInit } from '@angular/core';
import { HomeService } from './services/home.service';




@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  students: { id: number; name: string; deptids: number[] }[] = [

    { id: 1, name: 'John', deptids: [101, 201, 301] },

    { id: 2, name: 'Jane', deptids: [101, 201] }

  ];

  dept: { id: number; name: string }[] = [

    { id: 101, name: 'department one' },

    { id: 201, name: 'department two' },

    { id: 301, name: 'department three' }

  ];


  constructor(private homeService: HomeService) {


  }
  ngOnInit(): void {
    this.homeService.getUsers().subscribe(users => {
      console.log("Users", users)
    })

    this.getDepartmentNamesWithAtLeastTwoStudents(this.students, this.dept)
  }

  getDepartmentNamesWithAtLeastTwoStudents = (students: { id: number; name: string; deptids: number[] }[], dept: { id: number; name: string }[]) => {

    // we want departtment names of all the departments having at least 2 students
    // console.log(dept,students)
    const deptCount = {};
    // students.forEach(student => {
    //   student.deptids.forEach(deptId => {
    //     if (deptCount[deptId]) {
    //       deptCount[deptId]++;
    //     } else {
    //       deptCount[deptId] = 1;
    //     }
    //   });
    // });
    // students.map(student => {

    //   const dep = dept.filter(dept => student.deptids.length == 2)
    //   console.log("department", dep);
    // })

  };
  name = "hero Product"
  produts = [{
    "name": "hero Product",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "hero": "OMG This just came out today!",
    "image": "http://placehold.it/940x300/999/CCC"
  }, {
    "name": "Product 1",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "info": "This is the latest and greatest product from Derp corp.",
    "image": "http://placehold.it/300x300/999/CCC"
  }, {
    "name": "Product 2",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "offer": "BOGOF",
    "image": "http://placehold.it/300x300/999/CCC"
  }, {
    "name": "Product 3",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "image": "http://placehold.it/300x300/999/CCC"
  }, {
    "name": "Product 4",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "offer": "No srsly GTFO",
    "image": "http://placehold.it/300x300/999/CCC"
  }, {
    "name": "Product 5",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "image": "http://placehold.it/300x300/999/CCC"
  }, {
    "name": "Product 6",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "info": "This is the latest and greatest product from Derp corp.",
    "offer": "info with offer",
    "image": "http://placehold.it/300x300/999/CCC"
  }]

  filterProductsByName=(name)=>{
    

  }

}
