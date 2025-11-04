import { URL } from "../models/URL.model.js";

const saveClick = async (req, res, next) => {
  try {
    const shortURL = req.params.shortURL;
    const url = await URL.findOneAndUpdate(
      {
        shortURL: `${process.env.URLSHORTENER}/${shortURL}`,
      },
      { $push: { history: Date.now() } }
    );
    next();
  } catch (err) {
    console.error("Error saving click history:", err);
    throw new Error("Could not save click history");
  }
};


export{ saveClick };