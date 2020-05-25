module.exports = async () => {
  const Problem = require("./models/Problem");

  const errHandeler = err => {
      console.log(`Error: ${err}`)
  }

  const problem = await Problem.create({
    videoID: "IHNzOHi8sJs",
    track: "DDU-DU DDU-DU",
    artist: "BlackPink",
    startSeconds: 2,
    endSeconds: 9,
  }).catch(errHandeler);
};
