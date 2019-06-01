exports.up = function(knex, Promise) {
  return knex.schema.hasTable("actions").then(function(exists) {
    if (exists) {
      return knex.schema.table("actions", function(tbl) {
        tbl
          .integer("action_id")
          .references("id")
          .inTable("projects");
      });
    }
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
