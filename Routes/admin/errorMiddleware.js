const { validationResult } = require("express-validator");

module.exports = {
  handleErrors(templateFunc) {
    return (req, res, next) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        console.log(errors);
        
        return res.send(templateFunc({ errors }));
      }
      next();
    };
  },
};
