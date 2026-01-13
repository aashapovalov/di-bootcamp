import jwt from "jsonwebtoken";
import {secretKey} from "./router.js";

export function authenticateJWT(req, res, next) {
  const accessToken = req.cookies.token;
  const refreshToken = req.cookies.refreshToken;

  if (!accessToken) {
    return res.status(401).send('No access token provided');
  }

  jwt.verify(accessToken, secretKey, (err, user) => {
    if (err) {
      if (!refreshToken) {
        return res.status(401).send('Token verification failed');
      }
      jwt.verify(refreshToken, secretKey, (err, user) => {
        if (err) {
          return res.status(401).send('Refresh token verification failed');
        }
        const newAccessToken = jwt.sign({id: user.id, username: user.username}, secretKey, {expiresIn: '1h' });
        res.cookie('token', newAccessToken, { httpOnly: true });
        req.user = user;
        next();
      });
    } else {
      req.user = user;
      next();
    }
  });
}