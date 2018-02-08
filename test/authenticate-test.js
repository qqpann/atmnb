const assert = require('assert');
const getAuthenticate = require('../authenticate');

it('Login test: No auth', () => {
  process.env.UTID_13 = '';
  process.env.UTID_PASS = '';
  process.env.MANABA_USERNAME = '';
  process.env.MANABA_PASSWORD = '';

  const auth = getAuthenticate(debug=false);
  console.log(auth);

  assert(auth.username === '' && auth.password === '');
});

it('Login test: Manaba only', () => {
  process.env.UTID_13 = '';
  process.env.UTID_PASS = 'not enough';
  process.env.MANABA_USERNAME = 'mn-n';
  process.env.MANABA_PASSWORD = 'mn-p';

  const auth = getAuthenticate(debug=false);
  console.log(auth);

  assert(auth.username === 'mn-n' && auth.password === 'mn-p');
});

it('Login test: UTID surpasses', () => {
  process.env.UTID_13 = 'ut-n';
  process.env.UTID_PASS = 'ut-p';
  process.env.MANABA_USERNAME = 'aaa';
  process.env.MANABA_PASSWORD = 'bbb';

  const auth = getAuthenticate(debug=false);
  console.log(auth);

  assert(auth.username === 'ut-n' && auth.password === 'ut-p');
});
