// api-routes.js
// Initialize express router
let router = require("express").Router();
// Set default API response
router.get("/", function(req, res) {
  res.json({
    status: "API Its Working",
    message: "Welcome to RESTHub crafted with love!"
  });
});
// Import employee controller
var employeeController = require("./employeeController");

// employee routes

// example : /api/employee/438975
router.route("/employee/:emp_no").get(employeeController.requetes1);

//example : /api/employees/d005
router.route("/employees/:dept_no").get(employeeController.requetes2);

//example : /api/mean_salary
router.route("/mean_salary").get(employeeController.requetes3);

//example : /api/no_employees
router.route("/no_employees").get(employeeController.requetes4);

//example : /api/mean_time
router.route("/mean_time").get(employeeController.requetes5);

//example : /api/mean_salary_by_dept
router.route("/mean_salary_by_dept").get(employeeController.requetes6);

//example : /api/longest_standing_employees
router.route("/longest_standing_employees").get(employeeController.requetes7);

// Export API routes
module.exports = router;
