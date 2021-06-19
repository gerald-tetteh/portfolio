// admin controllers

exports.getCsrf = (req, res, next) => res.json({ csrfToken: req.csrfToken() });
