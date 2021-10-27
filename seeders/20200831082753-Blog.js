'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //  Add seed commands here.
    await queryInterface.bulkInsert('blogs', [
      {
        title: 'Manchester United',
        image: 'https://images.unsplash.com/photo-1568194157720-8bbe7114ebe8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        body: 'Manchester United Football Club is a professional football club based in Old Trafford, Greater Manchester, England, that competes in the Premier League, the top flight of English football. Nicknamed "the Red Devils", the club was founded as Newton Heath LYR Football Club in 1878, changed its name to Manchester United in 1902 and moved to its current stadium, Old Trafford, in 1910.'
      },
      {
        title: 'Yoga',
        image: 'https://images.unsplash.com/photo-1573462239448-06b5cde9df64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        body: 'Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India. Yoga is one of the six Āstika (orthodox) schools of Hindu philosophical traditions. There is a broad variety of yoga schools, practices, and goals in Hinduism, Buddhism, and Jainism. The term "Yoga" in the Western world often denotes a modern form of hatha yoga and yoga as exercise, consisting largely of the postures or asanas.'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    //  Add commands to revert seed here.
    await queryInterface.bulkDelete('blogs', null, {});
  }
};
