const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user-controller");

router.post("/add", async (req, res) => {
  try {
    await UserController.addUser(req.body);

    return res.status(200).json({
      message: "POST /api/v1/users/add: Successfully entered document",
    });
  } catch {
    return res.status(500).json({
      message: "POST /api/v1/users/add: Unsuccessful on entering document",
    });
  }
});

router.get("/info", async (req, res) => {
  try {
    const { email } = req.body;
    const [data] = await UserController.findUserByEmail(email);

    return res.status(200).json({
      data,
      message: `GET /api/v1/users/info: Successfully queried user with email ${email}`,
    });
  } catch {
    return res.status(500).json({
      message: `GET /api/v1/users/info: Failed to fetch data with email ${email}`,
    });
  }
});

module.exports = router;
