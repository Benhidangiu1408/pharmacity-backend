const db = require('./db');

// Implementation of the `GetUser` gRPC method
const fetchUsers = async (call, callback) => {
  const userId = call.request.id;

  try {
    const [results] = await db.query('SELECT * FROM cho WHERE id = ?', [userId]);

    if (results.length === 0) {
      callback({
        code: 5, // NOT_FOUND
        details: 'User not found',
      });
    } else {
      const user = results[0];
      callback(null, {
        id: user.id,
        sdt: user.sdt,
        email: user.email,
      });
    }
  } catch (error) {
    console.error('Database error:', error);
    callback({
      code: 13, // INTERNAL
      details: 'Database error',
    });
  }
};
// async function fetchUsers() {
//     try {
//       const [rows] = await db.query('SELECT * FROM cho');
//       console.log(rows);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   }

module.exports = { fetchUsers };
