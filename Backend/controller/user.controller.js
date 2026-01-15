import User from "../model/user.model.js";

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
