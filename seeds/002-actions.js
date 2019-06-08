exports.seed = function(knex, Promise) {
  return knex("actions").insert([
    {
      id: 1,
      description: "Description 1",
      notes: "Note 1",
      completed: false,
      action_id: 1
    },
    {
      id: 2,
      description: "Description 2",
      notes: "Note 2",
      completed: false,
      action_id: 2
    },
    {
      id: 3,
      description: "Description 3",
      notes: "Note 3",
      completed: false,
      action_id: 3
    }
  ]);
};
