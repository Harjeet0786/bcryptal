const bcrypt = require("bcrypt");

async function securepassword(password) {
  const salt = await bcrypt.genSalt(10);
  try {
    return bcrypt.hash(password, salt);
  } catch (error) {
    throw error;
  }
}
// var bcrypt=require('bcryptjs');
// var salt=bcrypt.genSaltSync(10);

// module.exports.hashEncrypt = async(password) => {
//     var hash = bcrypt.hashSync(password, salt);
//     return hash;
// }
// module.exports.hashDecrypt = async(password, hash) => {
//     var hash = bcrypt.compareSync(password, hash);
//     return hash;
// }

module.exports = {
  securepassword,
};
