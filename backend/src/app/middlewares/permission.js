// middleware for doing role-based permissions
export default function permit(...allowed) {
  // const isAllowed = role => allowed.indexOf(role) > -1;
  // console.log(`=> ${allowed}`);

  // return a middleware
  return (req, res, next) => {
    for (let i = 0; i < req.roles.length; i += 1) {
      const role = req.roles[i];
      if (allowed.includes(role)) {
        // isAllowed = true;
        return next();
      }
    }

    return res.status(403).json({ message: 'Forbidden' }); // user is forbidden
  };
}
