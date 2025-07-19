const Customer = require('../model/customermodel');
exports.createCustomer = async (req, res) => {
    try{
        const {name , phone , email , whatsapp_opt_in , lead_status , service_type , last_service_date } = req.body;
        const newCustomer = new Customer({ name, phone, email, whatsapp_opt_in, lead_status, service_type, last_service_date});
        await newCustomer.save();
        res.status(201).json(newCustomer);
    }catch(error){
        res.status(500).json({msg:'Error creating Customer', error: error.message});
    }};


exports.getAllCustomer = async (req,res) => {
    try{
        const customer = await Customer.find();
        res.json(customer);
    }catch(error){
        res.status(500).json({msg: 'Error  fetching Customer', error:error.message });
    }
};


exports.getCustomerById = async (req,res) => {
    try{
const customer = await Customer.findById(req.params.id);
if(!customer) return res.status(404).json({msg:'Customer not found'});
res.json(customer);
    }catch(error){
        res.status(500).json({msg:'Error fetching customer',error:error.message});     
    }
};

exports.updateCustomer = async (req,res) =>{
    try{
        const updateCustomer = await Customer.findByIdAndDelete(req.params.id, req.body,{
    new:true
});
if(!updateCustomer) return res.status(404).json({msg: ' Customer not found '});
res.json(this.updateCustomer);
} catch (error){
    res.status(500).json({msg: 'Error updating customer', error:error.message});
}
};


exports.deleteCustomer = async (req, res) => {
  try {
    const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);
    if (!deletedCustomer) {
      return res.status(404).json({ msg: 'Customer not found' });
    }
    res.status(200).json({ msg: 'Customer deleted successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Error deleting customer', error: error.message });
  }
};
