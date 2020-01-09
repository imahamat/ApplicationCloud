// employeeModel.js
const mongoose = require("mongoose");
// Setup schema

var titleSchema = mongoose.Schema({
  title: String,
  from_date: Date,
  to_date: Date
});

var salarySchema = mongoose.Schema({
  salary: Number,
  from_date: Date,
  to_date: Date
});

var departmentSchema = mongoose.Schema({
  dept_no: String,
  name: String,
  from_date: Date,
  to_date: Date
});

var managerDepartmentSchema = mongoose.Schema({
  dept_no: String,
  dept_name: String,
  from_date: Date,
  to_date: Date
});

var employeeSchema = mongoose.Schema(
  {
    emp_no: String,
    birth_date: Date,
    first_name: String,
    last_name: String,
    gender: String,
    hire_date: Date,
    titles: [titleSchema],
    salaries: [salarySchema],
    dept_emp: [departmentSchema],
    dept_manager: [managerDepartmentSchema]
  },
  { collection: "employee" }
);
// Export employee model
var employee = (module.exports = mongoose.model("employee", employeeSchema));
module.exports.get = function(callback, limit) {
  employee.find(callback).limit(limit);
};
