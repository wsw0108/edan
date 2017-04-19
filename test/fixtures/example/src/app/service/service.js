module.exports = app => {
  class Service extends app.Service {
    * method() {
      return 'method';
    }
  };
  return Service;
};
