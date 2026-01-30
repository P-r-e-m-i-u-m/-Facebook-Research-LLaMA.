const jsonfile = require("jsonfile");
const moment = require("moment");
const simpleGit = require("simple-git");

const FILE_PATH = "./data.json";
const git = simpleGit();

const funMessages = [
  "Coding magic ✨",
  "Bug squashed 🐛",
  "Deploying dreams 🚀",
  "Debugging the matrix 🧠",
  "Committing chaos 🌀",
  "Refactored with love 💖",
  "Optimizing pixels 🎨",
  "Writing history 📜",
  "Automating awesomeness 🤖"
];

async function makeCommit() {
  // Today's date (India time)
  const date = moment();

  const now = date.utcOffset("+05:30").format("YYYY-MM-DDTHH:mm:ssZ");

  const message =
    funMessages[Math.floor(Math.random() * funMessages.length)] +
    " | " +
    date.format("YYYY-MM-DD");

  const data = {
    date: now
  };

  console.log("Commit:", message);

  await jsonfile.writeFile(FILE_PATH, data, { spaces: 2 });

  await git.add(FILE_PATH);

  await git.commit(message, {
    "--date": now
  });

  await git.push();

  console.log("Today's commit done ✅");
}

makeCommit();