import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import uuid from "uuid";
import jwt from "jsonwebtoken";

export const router = express.Router();
const users = [];
export const secretKey = 'secretKey';

router.use(bodyParser.json());
router.use(cookieParser());

router.post("/register", (req, res) => {
  const { username, password } = req.body;
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(409).json({message: `User already exists`});
  }
  const hashedPassword = bcrypt.hashSync(password, 12);
  const newUser = {id: uuid.random(), username, password: hashedPassword};
  users.push(newUser);

  const token = jwt.sign({id: newUser.id, username: user.username}, secretKey, {expiresIn: '1h'});

  res.cookie('token', token, { httpOnly: true });
  res.status(200).json({message: `User registered successfully.`});
})

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({message: `Invalid username or password`});
  }
  const accessToken = jwt.sign({id: user.id, username: user.username}, secretKey, {expiresIn: '1h'});
  const refreshToken = jwt.sign({id: user.id, username: user.username}, secretKey, {expiresIn: '7d'})

  res.cookie('token', accessToken, { httpOnly: true });
  res.cookie('refreshToken', refreshToken, { httpOnly: true });
  res.status(200).json({message: `User login successfully.`});
})

router.post("/refresh", (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(403).json({message: `Refresh token was not found`});
  }

  jwt.verify(refreshToken, secretKey, (err, user) => {
    if (err) {
      return res.status(401).json({message: `Invalid refresh token`});
    }

    const accessToken = jwt.sign({id: user.id, username: user.username}, secretKey, {expiresIn: '1h'});
    res.cookie('token', accessToken, { httpOnly: true });

    res.status(200).json({message: "Token refreshed successfully."});
  })
})

router.post("/logout", (req, res) => {
  res.clearCookie('token');
  res.status(200).json({message: `User logout successfully.`});
})