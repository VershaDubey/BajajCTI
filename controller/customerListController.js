const CustomerList = require('../model/customerListmodel');

// Create
exports.createCustomer = async (req, res) => {
  try {
    const newCustomer = new CustomerList(req.body);
    await newCustomer.save();
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(500).json({ msg: 'Error creating customer', error: error.message });
  }
};

// Read All
exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await CustomerList.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ msg: 'Error fetching customers', error: error.message });
  }
};

// Read by ID
exports.getCustomerById = async (req, res) => {
  try {
    const customer = await CustomerList.findById(req.params.id);
    if (!customer) return res.status(404).json({ msg: 'Customer not found' });
    res.json(customer);
  } catch (error) {
    res.status(500).json({ msg: 'Error fetching customer', error: error.message });
  }
};

// Update
exports.updateCustomer = async (req, res) => {
  try {
    const updated = await CustomerList.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ msg: 'Customer not found' });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ msg: 'Error updating customer', error: error.message });
  }
};

// Delete
exports.deleteCustomer = async (req, res) => {
  try {
    const deleted = await CustomerList.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ msg: 'Customer not found' });
    res.json({ msg: 'Customer deleted successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Error deleting customer', error: error.message });
  }
};
