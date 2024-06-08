import sequelize from '../config/db.js';
import Photo from './photoModel.js';

const initModels = async () => {
  await sequelize.sync();
  console.log('All models were synchronized successfully.');
};

initModels();

export { Photo };
