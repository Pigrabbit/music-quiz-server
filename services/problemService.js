const models = require("../database/models");

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
  createProblem,
};
