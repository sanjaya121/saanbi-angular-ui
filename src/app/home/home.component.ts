import { Component, OnInit } from '@angular/core';
import { HomeService } from './services/home.service';




@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  
  constructor(private homeService: HomeService) {


  }
  ngOnInit(): void {
 
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
  

}
