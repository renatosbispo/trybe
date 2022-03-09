module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define(
    'Plan',
    {
      planId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      coverage: DataTypes.STRING,
      price: DataTypes.DOUBLE,
    },
    {
      timestamps: false,
      tableName: 'Plan',
      underscored: true,
    }
  );

  Plan.associate = (models) => {
    Plan.belongsTo(models.Patient, {
      foreignKey: 'plan_id',
      as: 'plan',
    });
  };

  return Plan;
};
