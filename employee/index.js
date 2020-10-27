let employeeArray = [{
    employeeId: 789868,
    employeeName: 'Maria Anders',
    employeeSalary: 50000
},
{
    employeeId: 989876,
    employeeName: 'Francisco Chang',
    employeeSalary: 6000
},
{
    employeeId: 151424,
    employeeName: 'Roland Mendel',
    employeeSalary: 6000
}
]
const resetValue = () => {
    document.getElementById('employeeId').value = "";
    document.getElementById('employeeName').value = "";
    document.getElementById('employeeSalary').value = "";
}

const createInnerHtml = () => {
    var newhtml = "<tr><th>Employee Id</th><th>Employee Name</th><th>Employee Salary</th></tr>"
    // for...of loop of es6 
    for (const element of employeeArray) {
        // template literal es6 feature
        newhtml = `${newhtml}<tr>
        <td>${element.employeeId}</td>
        <td>${element.employeeName}</td>
        <td>${element.employeeSalary}</td>
    </tr>`
    }
    document.getElementById('display').innerHTML = newhtml
}
// call of display
createInnerHtml();

// arrow function es6 feature
const submit = () => {
    let employeeId = document.getElementById('employeeId').value;
    let employeeName = document.getElementById('employeeName').value;
    let employeeSalary = document.getElementById('employeeSalary').value;
    if (employeeId.trim().length == 0 || employeeName.trim().length == 0 || employeeSalary.trim().length == 0)
        return;
    console.log(employeeId, employeeName, employeeSalary);
    const temp = {
        employeeId: employeeId,
        employeeName: employeeName,
        employeeSalary: employeeSalary
    }
    // spread operator -> Spread syntax "expands" an array into its elements
    employeeArray = [...employeeArray, temp]
    createInnerHtml()
    resetValue();
}