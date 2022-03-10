module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define(
    'Patient',
    {
      patientId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fullname: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'Patients',
      underscored: true,
    }
  );

  Patient.associate = (models) => {
    Patient.belongsTo(models.Plan, {
      foreignKey: 'planId',
      as: 'plan',
    });
  };

  return Patient;
};
