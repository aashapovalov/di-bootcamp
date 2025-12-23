import {db} from "../config/db.js";
import bcrypt from 'bcrypt';

//     updateUser

export const getUsers = async (req, res, next) => {
  try {
    const users = await db('users').
    select("id", "email", "username", "first_name", "last_name");
    return res.json(users);
  } catch (err) {
      console.error(err);
      return next(err);
  }
}

export const getSingleUser =  async (req, res, next ) => {
  const rawId = req.params.id;
  const id = Number(rawId);

  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "Valid numeric ID is required" });
  }

  try {
    const user = await db('users').
        select("id", "email", "username", "first_name", "last_name").
        where({ id }).
        first();
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json(user);
  } catch (err) {
    console.error(err);
    return next(err);
  }
}

export const hashPassword = async (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: "Password is required" });
  }

  try {
    req.body.password = await bcrypt.hash(password, 10);
    next();
  } catch (err) {
    next(err);
  }
};

export const createUser = async (req, res, next) => {
  const { email, username, first_name, last_name, password } = req.body;

  try {
    const result = await db.transaction(async (trx) => {
      const [user] = await trx("users")
          .insert({ email, username, first_name, last_name })
          .returning(["id", "email", "username", "first_name", "last_name"]);

      await trx("hashpwd").insert({
        username,
        password,
      });

      return user;
    });

    res.status(201).json(result);
  } catch (err) {
    console.error(err);

    if (err.code === "23505") {
      return res.status(409).json({ message: "User already exists" });
    }

    next(err);
  }
};

export const loginUser = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "username and password are required" });
  }

  try {
    const passwordEntry = await db('hashpwd').
          select('id', 'username', 'password').
          where({username: username}).
          first();

    const isValid = await bcrypt.compare(password, passwordEntry.password);
    if (!isValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({message: `User ${passwordEntry.username} has been successfully logged in`});
  } catch (err) {
    console.error(err);
    return next(err);
  }
}

export const updateUser = async (req, res, next) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "Valid numeric ID is required" });
  }

  const { email, username, first_name, last_name, password } = req.body;

  // If you truly want "all required" update:
  if (
      email === undefined ||
      username === undefined ||
      first_name === undefined ||
      last_name === undefined ||
      password === undefined
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const updatedUser = await db.transaction(async (trx) => {
      // 1) get current user (needed to know old username)
      const current = await trx("users")
          .select("username")
          .where({ id })
          .first();

      if (!current) {
        const err = new Error("User not found");
        err.status = 404;
        throw err;
      }

      // 2) update users + return updated row
      const [user] = await trx("users")
          .where({ id })
          .update(
              { email, username, first_name, last_name },
              ["id", "email", "username", "first_name", "last_name"]
          );

      // 3) update hashpwd by OLD username (important!)
      await trx("hashpwd")
          .where({ username: current.username })
          .update({ username, password });

      return user;
    });

    return res.status(200).json(updatedUser);
  } catch (err) {
    console.error(err);

    if (err.status === 404) {
      return res.status(404).json({ message: "User not found" });
    }

    return next(err);
  }
};


// export const updateBlogPost = async (req, res) => {
//   const { id } = req.params;
//   const { title, content } = req.body;
//   try {
//     const updatedPost = await db('posts').
//     where({ id: id}).
//     update({ title: title, content: content }, ['id', 'title', 'content']);
//     if (!updatedPost) {
//       res.status(500).send("Couldn't create a new post");
//     }
//     res.json(updatedPost);
//   } catch (err) {
//     console.log(err);
//   }
// }
//
// export const deleteBlogPost = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deletedPost = await db('posts').
//     where({ id: id }).
//     del(['id', 'title', 'content']);
//
//     if (!deletedPost) {
//       res.status(500).send("Couldn't delete post");
//     }
//     res.json(deletedPost);
//   } catch (err) {
//     console.log(err);
//   }
// }