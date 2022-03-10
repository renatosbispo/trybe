const bodyParser = require('body-parser');
const express = require('express');
const { Patient, Plan } = require('./models');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/patients', async (_, res, next) => {
  try {
    const patients = await Patient.findAll();

    res.status(200).json(patients);
  } catch (error) {
    next(error);
  }
});

app.get('/plans', async (_, res, next) => {
  try {
    const plans = await Plan.findAll();

    res.status(200).json(plans);
  } catch (error) {
    next(error);
  }
});

app.get('/patientsplans', async (_, res, next) => {
  try {
    const patientsAndPlans = await Patient.findAll({
      include: { model: Plan, as: 'plan', },
    });

    res.status(200).json(patientsAndPlans);
  } catch (error) {
    next(error);
  }
});

app.use((error, _req, res, _next) => {
  res.status(500).json({ message: error.message });
});

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});
