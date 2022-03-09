module.exports = (sequelize, _) => {
  const PatientSurgery = sequelize.define(
    'PatientSurgery',
    {},
    {
      timestamps: false,
      tableName: 'Patient_surgeries',
      underscore: true,
    }
  );

  PatientSurgery.associate = (models) => {
    models.Patient.belongsToMany(models.Surgery, {
      as: 'surgeries',
      through: PatientSurgery,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
    });

    models.Surgery.belongsToMany(models.Patient, {
      as: 'patients',
      through: PatientSurgery,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
    });
  };

  return PatientSurgery;
};
