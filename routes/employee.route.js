const express = require('express');
const router = express.Router();
const Employee = require('../model/employee.model');

// CREATE
router.post('/save-employees', async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).send({ employee: employee, message: "Employee created successfully" });
  } catch (err) {
    res.status(400).send(err);
  }
});

// READ ALL
router.get('/getemployees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).send(employees);
  } catch (err) {
    res.status(500).send(err);
  }
});

// READ ONE
router.get('/getemployeesbyid/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).send({ message: "Employee not found" });
    res.status(200).send(employee);
  } catch (err) {
    res.status(500).send(err);
  }
});

// UPDATE
router.put('/update-employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!employee) return res.status(404).send({ message: "Employee not found" });
    res.status(200).send({ employee: employee, message: "Employee updated successfully" });
  } catch (err) {
    res.status(400).send(err);
  }
});

// DELETE
router.delete('/delete-employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) return res.status(404).send({ message: "Employee not found" });
    res.status(200).send({ message: "Employee deleted successfully" });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
