exports.up = function(knex, Promise) {
    return knex.schema
      .createTable("users", column => {
        column.increments();
        column.string("fullName", 100);
        column.string("email", 100);
        column
          .string("username", 32)
          .notNullable()
          .unique();
        column.string("password", 32).notNullable();
      })
      .createTable("products", column => {
        column.increments();
        column.string("mealTime", 12);
        column
          .integer("userId")
          .unsigned()
          .references("id")
          .inTable("users")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      })
      .createTable("shipments", column => {
        column.increments();
        column.string("mealTime", 12);
        column.date("dateShipped", 24)
        column
          .integer("productId")
          .unsigned()
          .references("id")
          .inTable("products")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
      .dropTableIfExists("users")
      .dropTableIfExists("products")
      .dropTableIfExists("shipments")
  };