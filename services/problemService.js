const models = require("../database/models");
const db = require("../database/models/index");
const Sequelize = db.Sequelize;

const fetchRandomProblem = async () => {
  const fetchedProblem = await models.Problem.findAll({
    limit: 10,
    order: [[Sequelize.fn("RAND")]],
  });

  return { problem: fetchedProblem };
};

const createProblem = async (problem) => {
  const { videoID, track, artist, startSeconds, endSeconds } = problem;

  const createdProblem = await models.Problem.create({
    videoID,
    track,
    artist,
    startSeconds,
    endSeconds,
  });

  return { problem: createdProblem };
};

module.exports = {
  fetchRandomProblem,
  createProblem,
};
