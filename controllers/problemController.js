const models = require("../database/models");
const Joi = require("@hapi/joi");
const problemService = require("../services/problemService");

const getProblemList = (req, res) => {
  models.Problem.findAll({
    limit: 10,
  })
    .then((problems) => res.status(200).send(JSON.stringify(problems)))
    .catch((err) => res.status(400).send(err));
};

const postCreateProblem = async (req, res) => {
  const schema = Joi.object({
    videoID: Joi.string().pattern(new RegExp("^[a-zA-z0-9-]{11}$")).required(),
    track: Joi.string().required(),
    artist: Joi.string().required(),
    startSeconds: Joi.number().positive().required(),
    endSeconds: Joi.number().positive().required(),
  });

  const { err, problemDTO } = schema.validate(req.body);
  if (err) {
    return res.status(400).send(err);
  }

  try {
    const problem = await problemService.createProblem(problemDTO);
    return res.status(201).send(problem);
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports = {
  getProblemList,
  postCreateProblem,
};
