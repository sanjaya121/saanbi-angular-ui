const students: { id: number; name: string; deptids: number[] }[] = [

    { id: 1, name: 'John', deptids: [101, 201, 301] },
   
    { id: 2, name: 'Jane', deptids: [101, 201] }
   
   ];
   
   let dept: { id: number; name: string }[] = [
   
    { id: 101, name: 'department one' },
   
    { id: 201, name: 'department two' },
   
    { id: 301, name: 'department three' }
   
   ];
   
   
   const getDepartmentNamesWithAtLeastTwoStudents = (students: { id: number; name: string; deptids: number[] }[], dept: { id: number; name: string }[]): string[] => {
   
    // we want departtment names of all the departments having at least 2 students
   students.map(student=>{
    console.log(student.deptids);
   })
   
   };
   
//    const result: string[] = getDepartmentNamesWithAtLeastTwoStudents(students, dept);
    