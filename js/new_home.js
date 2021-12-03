window.addEventListener('DOMContentLoaded',(event) => {
    createInnerHtml();
});
//Template literal Es6 feature
const createInnerHtml = () => {
    const headerHtml ="<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    let empPayrollData = createEmployeePayrollJSON()[0]
    const innerHtml = `${headerHtml}
<tr>
    <td><img class="profile" src="${empPayrollData._profilePic}" alt="" ></td>
    <td>${empPayrollData._name}</td>
    <td>${empPayrollData._gender}</td>
    <td><div class='dept-lable'>${empPayrollData._department[0]}</div>
       <div class='dept-lable'>${empPayrollData._department[1]}</div>
   </td>
   <td>${empPayrollData._salary}</td>
   <td>${empPayrollData._startDate}</td>
   <td>
       <img name="${empPayrollData._id}" onclick="remove(this)" src="../assets/icons/delete-black-18dp.png" alt="delete">
       <img name="${empPayrollData._id}" onclick="update(this)" src="../assets/icons/create-black-18dp.png" alt="edit">
   </td>
</tr>
`;
document.querySelector('#table-display').innerHTML = innerHtml;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for(const dept of deptList) {
        deptHtml = `${deptHtml} <div class ='dept-label'>${dept}</div>`
    }
    return deptHtml;
}
const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Kalyan',
            _gender:'male',
            _department: ['Engineering','Finance'],
            _salary:'500000',
            _startDate:'19 Nov 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/profile-images/Ellipse -9.png'
        },
        {
            _name: 'Bhargav',
            _gender:'male',
            _department: ['sales'],
            _salary:'400000',
            _startDate:'19 Nov 2018',
            _note: '',
            _id: new Date().getTime() +1,
            _profilePic: '../assets/profile-images/Ellipse -5.png'
        }
     ];
     return empPayrollListLocal;
}