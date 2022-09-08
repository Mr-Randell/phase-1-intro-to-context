// Your code here
// first
function createEmployeeRecord(employeeArray) {
    let employeeObject = {
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeObject
}

// second
function createEmployeeRecords(employeeArrays) {
    return employeeArrays.map(data => createEmployeeRecord(data))
}

// third
function createTimeInEvent(employeeObject, dateStamp) {
    let timeData = dateStamp.split(" ")
    let date = timeData[0]
    let hour = parseInt(timeData[1])
    let time = {
        type: "TimeIn",
        hour: hour,
        date: date
    }
    employeeObject.timeInEvents.push(time)
    return employeeObject
}

// fourth
function createTimeOutEvent(employeeObject, dateStamp) {
    let timeData = dateStamp.split(" ")
    let date = timeData[0]
    let hour = parseInt(timeData[1])
    let time = {
        type: "TimeOut",
        hour: hour,
        date: date
    }
    employeeObject.timeOutEvents.push(time)
    return employeeObject
}

// fifth
function hoursWorkedOnDate(employee, dateForm) {
    let timeIn = employee.timeInEvents.find(function (e) {

        return dateForm === e.date
    })
    let timeOut = employee.timeOutEvents.find(function (e) {
        return dateForm === e.date
    })
    let clockInTime = parseInt(timeIn.hour)
    let clockOutTime = parseInt(timeOut.hour)
    return (clockOutTime - clockInTime) * .01
}

// sixth
function wagesEarnedOnDate(employee, dateform) {
    let pay = employee.payPerHour
    return hoursWorkedOnDate(employee, dateform) * pay
}

// seventh
function allWagesFor(employee) {
    let total = 0
    for (let i = 0; i < employee.timeInEvents.length; i++) {
        let wages = wagesEarnedOnDate(employee, employee.timeInEvents[i].date);
        total += wages;
    }
    return total
}

// eigth
const calculatePayroll = function(employeeArray){
    let payroll = [];

    employeeArray.forEach(employee => {
        payroll.push(allWagesFor(employee)) 
    });

    return payroll.reduce((previousValue, currentValue) => previousValue + currentValue)
}