const mongoose = require('../db');

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  department: { type: String, required: true },
  salary: { type: Number, required: true }
});

// Specify the exact collection name as 'employee'
const Employee = mongoose.model('Employee', EmployeeSchema, 'employee');

module.exports = Employee;
