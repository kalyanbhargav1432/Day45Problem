window.addEventListener('DOMContentLoaded',(event) => {
    createInnerHtml();
});
//Template literal Es6 feature
const createInnerHtml = () => {
    const headerHtml ="<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    const innerHtmlUc4 = `${headerHtml}
<tr>
    <td><img class="profile" alt="" src="../assets/profile-images/Ellipse -2.png"></td>
    <td>John</td>
    <td>Male</td>
    <td><div class='dept-lable'>HR</div>
       <div class='dept-lable'>Finance</div>
   </td>
   <td>3000000</td>
   <td>3 Dec 2020</td>
   <td>
       <img id="1" onclick="remove(this)" src="../assets/icons/delete-black-18dp.png" alt="delete">
       <img id="1" onclick="update(this)" src="../assets/icons/create-black-18dp.png" alt="edit">
   </td>
</tr>
`;
document.querySelector('#table-display').innerHTML = innerHtml;
}