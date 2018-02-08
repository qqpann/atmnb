module.exports = function getAuthenticate(debug = false) {
  const auth = new Object();
  if (process.env.UTID_13 && process.env.UTID_PASS) {
    if (debug) { console.log('INFO: Using UTID_13'); }
    auth.username = process.env.UTID_13;
    auth.password = process.env.UTID_PASS;
  } else if (process.env.MANABA_USERNAME && process.env.MANABA_PASSWORD) {
    if (debug) { console.log('INFO: Using MANABA_USERNAME'); }
    auth.username = process.env.MANABA_USERNAME;
    auth.password = process.env.MANABA_PASSWORD;
  } else {
    console.log('NOTFOUND: Plsase setup env username and password.');
    auth.username = '';
    auth.password = '';
  }
  return auth;
};
