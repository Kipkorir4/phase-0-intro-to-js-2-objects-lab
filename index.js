const employee = {
    name: "Sam"
}

function updateEmployeeWithKeyAndValue() {
    let employee2 = {...employee}
    employee2["streetAddress"] = "11 Broadway";
    return employee2;
}

function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee["streetAddress"] = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let employee2 = {...employee}
    delete employee2["name"];
    return employee2;
    
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}



