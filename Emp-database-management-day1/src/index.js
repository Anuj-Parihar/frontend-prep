(async function (){
    const data = await fetch("./src/data.json"); // fetch the json data but not in the correct format (json object format)
    
    const res  = await data.json(); //noe we convert the fetched data into json object format.
    let employees = res;
    let selectedEmployeeId = employees[0].id;
    let selectedEmployee = employees[0];

    const  employeeList= document.querySelector(".employee__names--list");
    const employeeInfo = document.querySelector(".employee__single--list");

    //Add employee Logic

    //Select employee Logic
    const  renderEmployees  = () =>{
            employeeList.innerHTML = "";
            employees.forEach((emp) =>{
                const employee = document.createElement("span");
                employee.classList.add("employee__name--item");
                if(parseInt(selectedEmployeeId,10) === emp.id){
                    employee.classList.add("selected");
                    selectedEmployee = emp;
                }
                employee.setAttribute("id",emp.id);
                employee.innerHTML = `${emp.firstName} ${emp.lastName} <i class = "employeeDelete">X</i>`;
                employeeList.append(employee);
            } )

    }

    //Render single employee
    renderEmployees();
})()
