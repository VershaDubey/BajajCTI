const WhatsAppMessage = require('../model/whatsapp_messagemodel');


exports.createWhatsapp_message = async (req, res) => {
  try {
    const { customer_Id, template_name , sent_at ,status, link_clicked} = req.body;

    const newWhatsapp_message = new WhatsAppMessage({ customer_Id, template_name , sent_at , status , link_clicked });
    await newWhatsapp_message.save();

    res.status(201).json(newWhatsapp_message);
  } catch (error) {
    res.status(500).json({ msg: 'Error creating whatsapp_message', error: error.message });
  }
};

exports.getAllWhatsAppMessage = async (req, res) => {
  try {
    const whatsapp_message = await WhatsAppMessage.find();
    res.json(whatsapp_message);
  } catch (error) {
    res.status(500).json({ msg: 'Error fetching whatsapp_message ', error: error.message });
  }
};

exports.getWhatsappMessageById = async (req, res) => {
  try {
    const whatsapp_message = await WhatsAppMessage.findById(req.params.id);
    if (!whatsapp_message) return res.status(404).json({ msg: 'Whatsapp Messsage not found' });

    res.json(whatsapp_message);
  } catch (error) {
    res.status(500).json({ msg: 'Error fetching whatsapp message', error: error.message });
  }
};

exports.updateWhatsappMessage  = async (req, res) => {
  try {
    const updatedWhatsappmessage = await WhatsAppMessage.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    if (!this.updatedWhatsappmessage) return res.status(404).json({ msg: 'whatsapp message not found' });

    res.json(updatedWhatsappmessage);
  } catch (error) {
    res.status(500).json({ msg: 'Error updating whatsappmessage', error: error.message });
  }
};

exports.deleteWhatsappMessage = async (req, res) => {
  try {
    const deletedWhatsappmessage = await WhatsAppMessage.findByIdAndDelete(req.params.id);

    if (!deletedWhatsappmessage) return res.status(404).json({ msg: 'whatsappmessage not found' });

    res.json({ msg: 'whatsappmessage deleted successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Error deleting whatsappmessage', error: error.message });
  }
};
