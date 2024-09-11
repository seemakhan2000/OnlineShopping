// controller/controller.js
const OnlineShopping = require('../model/schema.js');

exports.createData = async (req, res) => {
  try {
    const formData = req.body;
    const savedFormData = await OnlineShopping.create(formData);
    console.log('Received Form Data:', formData);
    console.log('Saved Form Data:', savedFormData);
    res.json({ message: 'Form data submitted successfully', data: savedFormData });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ message: 'Error saving form data', error });
  }
};
