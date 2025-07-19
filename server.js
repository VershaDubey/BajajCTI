const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');


connectDB();

// initialize app
const app = express();

// middleware: parse json body
app.use(express.json());

//user  Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// auth Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// task Routes
const taskRoutes = require('./routes/taskRoutes');
app.use('/api/tasks', taskRoutes);

// dealership Routes
const dealershipRoutes = require('./routes/dealershipRoutes');
app.use('/api/dealership', dealershipRoutes);

// customer Routes
const customerRoutes = require('./routes/customerRoutes');
app.use('/api/customers', customerRoutes);

// call Log Routes
const callLogRoutes = require('./routes/call_logRoutes');
app.use('/api/calllogs', callLogRoutes);

//appointment Routes
const appointmentRoutes = require('./routes/appointmentRoutes');
app.use('/api/appointments', appointmentRoutes);

// whatsApp Message Routes
const whatsappMessageRoutes = require('./routes/whatsapp_messageRoute');
app.use('/api/whatsapp-messages', whatsappMessageRoutes);

// role Access Control Routes
const roleAccessControlRoutes = require('./routes/role_access_control');
app.use('/api/roles', roleAccessControlRoutes);




app.get('/', (req, res) => {
  res.send('THIS API IS WORKING')
});
// port
const PORT = process.env.PORT || 5000;

// start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
