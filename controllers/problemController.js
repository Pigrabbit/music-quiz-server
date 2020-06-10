const Joi = require("@hapi/joi");
const problemService = require("../services/problemService");

const getProblemList = async (req, res) => {
  try {
    const fetchedProblem = await problemService.fetchRandomProblem();
    return res.status(200).send(JSON.stringify(fetchedProblem));
  } catch (err) {
    return res.status(400).send(err);
  }
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
    const problems = await problemService.createProblem(problemDTO);
    return res.status(201).send(problems);
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports = {
  getProblemList,
  postCreateProblem,
};
