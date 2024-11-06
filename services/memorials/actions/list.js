const Memorial = require('../models/memorialsSchema');

module.exports = {
  params: {},

  async handler(context) {
    try {
      const { params } = context.meta;

      const memorials = await Memorial.find(params); 

      console.log(memorials);

      return Promise.resolve(memorials);
      
    } catch (error) {
      console.log('error', error);
      return Promise.reject(error);
    }
  }
}