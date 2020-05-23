const {Model,DataTypes} = require ('sequelize')


class Deliverer extends Model{
  static init(sequelize){
    super.init({
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      latitude: DataTypes.STRING,
      longitude: DataTypes.STRING,
      drivers_license: DataTypes.STRING,
      contract: DataTypes.STRING
    },{sequelize})
  }
}
module.exports= Deliverer
