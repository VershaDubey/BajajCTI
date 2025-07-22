const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Auth Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// User Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Admin Routes
const adminRoutes = require('./routes/adminRoutes');
app.use('/api/admins', adminRoutes);

// Dealer Routes
const dealerRoutes = require('./routes/dealerRoutes');
app.use('/api/dealers', dealerRoutes);

// CRE Routes
const creRoutes = require('./routes/creRoutes');
app.use('/api/cres', creRoutes);

// Task Routes
const taskRoutes = require('./routes/taskRoutes');
app.use('/api/tasks', taskRoutes);

// Dealership Routes
const dealershipRoutes = require('./routes/dealershipRoutes');
app.use('/api/dealership', dealershipRoutes);

// Customer Routes
const customerRoutes = require('./routes/customerRoutes');
app.use('/api/customers', customerRoutes);

// Call Log Routes
const callLogRoutes = require('./routes/call_logRoutes');
app.use('/api/calllogs', callLogRoutes);

// Appointment Routes
const appointmentRoutes = require('./routes/appointmentRoutes');
app.use('/api/appointments', appointmentRoutes);

// WhatsApp Message Routes
const whatsappMessageRoutes = require('./routes/whatsapp_messageRoute');
app.use('/api/whatsapp-messages', whatsappMessageRoutes);

// Role Access Control Routes
const roleAccessControlRoutes = require('./routes/role_access_control');
app.use('/api/roles', roleAccessControlRoutes);

// Customer List Routes
const customerListRoutes = require('./routes/customerListRoutes');
app.use('/api/customerlist', customerListRoutes);

// Followup Routes
const followupRoutes = require('./routes/followupRoutes');
app.use('/api/followups', followupRoutes);

// Root Test Endpoint
app.get('/', (req, res) => {
  res.send(' API is working!');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
