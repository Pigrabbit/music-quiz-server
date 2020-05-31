const models = require("../database/models");
const Joi = require("@hapi/joi");

exports.problemList = (req, res) => {
  models.Problem.findAll({
    limit: 10,
  })
    .then((problems) => res.status(200).send(JSON.stringify(problems)))
    .catch((err) => res.status(400).send(err));
};

exports.problemCreatePost = async (req, res) => {
  const schema = Joi.object({
    videoID: Joi.string().pattern(new RegExp("^[a-zA-z0-9-]{11}$")).required(),
    track: Joi.string().required(),
    artist: Joi.string().required(),
    startSeconds: Joi.number().positive().required(),
    endSeconds: Joi.number().positive().required(),
  });

  try {
    const value = await schema.validateAsync(req.body);
  } catch (err) {
    res.status(400).send(err.details[0].message);
    return;
  }

  let { videoID, track, artist, startSeconds, endSeconds } = req.body;

  models.Problem.create({
    videoID,
    track,
    artist,
    startSeconds,
    endSeconds,
  })
    .then((Problem) => res.status(200).redirect("/api/problems"))
    .catch((err) => res.status(400).send(err));
};
