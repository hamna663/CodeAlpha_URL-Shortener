import { nanoid } from "nanoid";
import { URL } from "../models/URL.model.js";
import validator from "validator";
import isURL from "validator/lib/isURL.js";

const shortURL = async (req, res) => {
  if (!req.body) {
    return res.status(400).send("Request body is missing");
  }
  const longURL = req.body.longURL;
  const isURL = validator.isURL(longURL);
  if (!isURL) {
    return res.status(400).send("Enter valid URL!");
  }
  const uniqueId = nanoid(8);
  const shortURL = `${process.env.URLSHORTENER}/${uniqueId}`;
  const url = await URL.create({ longURL, shortURL });
  if (!url) {
    return res.status(500).send("Error creating short URL");
  }
  return res.status(201).json({ shortURL: url.shortURL });
};

const redirectURL = async (req, res) => {
  const shortURL = req.params.shortURL;
  const url = await URL.findOne({
    shortURL: `${process.env.URLSHORTENER}/${shortURL}`,
  });
  return res.redirect(url.longURL);
};

const totalClicks = async (req, res) => {
  const shortURL = req.params.shortURL;
  const url = await URL.findOne({
    shortURL: `${process.env.URLSHORTENER}/${shortURL}`,
  });
  const clicks = url.history.length;
  return res.status(200).json({ totalClicks: clicks });
};

const clickHistory = async (req, res) => {
  const shortURL = req.params.shortURL;
  console.log(shortURL);
  const url = await URL.findOne({
    shortURL: `${process.env.URLSHORTENER}/${shortURL}`,
  });
  return res.status(200).json({ history: url.history });
};

export { shortURL, redirectURL, totalClicks, clickHistory };
