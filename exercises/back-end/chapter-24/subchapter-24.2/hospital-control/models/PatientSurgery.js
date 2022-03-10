module.exports = (sequelize, _) => {
  const PatientSurgery = sequelize.define(
    'PatientSurgery',
    {},
    {
      timestamps: false,
      tableName: 'Patient_surgeries',
      underscored: true,
    }
  );

  PatientSurgery.associate = (models) => {
    models.Patient.belongsToMany(models.Surgery, {
      as: 'surgeries',
      through: PatientSurgery,
      foreignKey: 'patientId',
      otherKey: 'surgeryId',
    });

    models.Surgery.belongsToMany(models.Patient, {
      as: 'patients',
      through: PatientSurgery,
      foreignKey: 'surgeryId',
      otherKey: 'patientId',
    });
  };

  return PatientSurgery;
};
