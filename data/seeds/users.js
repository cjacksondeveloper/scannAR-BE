
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: "jacob", password: "$2a$10$aGyHHUoDh6dJeMoKgbgp.u8kBtwXzlczFh6cC6757iocDOeo5kvcm"},
        {id: 2, username: "ian", password: "$2a$10$EiSVN3ydlAi98ENW6bt3c.PxFIVMv4qRzPp.H41xQfVn4/I5EL86a"},
        {id: 3, username: "randy", password: "$2a$10$oWkChRLA4CEyM8IXX0.bxe2P6x3rwDz9LrYSl2U9Say4AAYb0HEXW"},
        {id: 4, username: "ben", password: "$2a$10$7zOXTe4R6cjTb239WeL8MeKxCk1ex9tcohrX5oPsL89f5Ary8dPvq"},
        {id: 5, username: "joshua", password: "$2a$10$uh3ULkTSIYe6.g3pXFcQVOYKRLA8Hw7zVJgHQInXZoOkf7A8omXha"},
      ]);
    });
};