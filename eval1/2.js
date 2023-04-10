let db;

db.assignment2.aggregate([
  {
    $sort: {
      pop: 1,
    },
  },
  {
    $group: {
      _id: "$state",
      pop: {
        $last: "$pop",
      },
      city: {
        $last: "$city",
      },
    },
  },
]);

db.assignment2.aggregate([
  {
    $group: {
      _id: { state: "$state", city: "$city" },
      pop: {
        $sum: "$pop",
      },
    },
  },
  {
    $group: {
      _id: "$_id.state",
      avg_pop: {
        $avg: "$pop",
      },
    },
  },
]);

db.assignment3.aggregate([
  { $unwind: "$orders" },
  {
    $group: {
      _id: "$name",
      avg_price: {
        $avg: "$orders.price",
      },
    },
  },
]);
