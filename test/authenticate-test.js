const assert = require('assert');
const getAuthenticate = require('../authenticate');

it('Login test', () => {
  process.env.UTID_13 = '';
  process.env.UTID_PASS = '';
  process.env.MANABA_USERNAME = '';
  process.env.MANABA_PASSWORD = '';

  const auth = getAuthenticate(debug=false);
  console.log(auth);

  assert(auth.username === '' && auth.password === '');
});

