const jsonfile = require("jsonfile");
const simpleGit = require("simple-git");
const moment = require("moment");

const FILE_PATH = "./data.json";
const git = simpleGit();

async function makeOneDayCommit() {

  // Change date here ($2026-02-24$)
  const day = moment("$2026-02-24$");

  // 3 commits = dark green
  const commits = 3;

  for (let i = 0; i < commits; i++) {

    const date = day
      .clone()
      .add(10 + i, "hour")
      .add(i * 3, "minute")
      .format();

    await jsonfile.writeFile(FILE_PATH, {
      date,
      v: Math.random()
    });

    await git.add(FILE_PATH);

    await git.commit("dark green day", {
      "--date": date
    });
  }

  await git.push();

  console.log("✅ Done:(dark green)");
}

makeOneDayCommit();
