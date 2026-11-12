import { User } from "../models/user.model.js";

 export const getCurrentUser = async (req, res) => {
  try {
    let userId = req.userId;
    if (!userId) {
      return res.status(400).json({ message: "User id is not found" });
    }

    let user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(400).json({ message: "User is not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
   return res.status(500).json({message:`current user error ${error} `})
  }
};
