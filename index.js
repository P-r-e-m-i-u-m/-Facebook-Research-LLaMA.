const jsonfile = require("jsonfile");
const simpleGit = require("simple-git");
const moment = require("moment");

const FILE_PATH = "./data.json";
const git = simpleGit();

// Helper: random number
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Last 1 year range
const END = moment();
const START = moment().subtract(1, "year");

// 🎯 Target Dark Day (June 25)
const DARK_DAY = moment("2025-06-25"); // change year if needed

async function makeNaturalGraph() {

  let day = START.clone();

  while (day.isSameOrBefore(END)) {

    // Skip some days (natural breaks) except dark day
    if (Math.random() < 0.35 && !day.isSame(DARK_DAY, "day")) {
      day.add(1, "day");
      continue;
    }

    // Default: light activity
    let commits = rand(1, 4);

    // If June 25 → dark green
    if (day.isSame(DARK_DAY, "day")) {
      commits = rand(8, 12); // more commits = dark
    }

    for (let i = 0; i < commits; i++) {

      const date = day
        .clone()
        .add(rand(9, 22), "hour")
        .add(rand(0, 59), "minute")
        .format();

      await jsonfile.writeFile(FILE_PATH, {
        date,
        v: Math.random()
      });

      await git.add(FILE_PATH);

      await git.commit("update", {
        "--date": date
      });
    }

    console.log("Filled:", day.format("YYYY-MM-DD"));

    day.add(1, "day");
  }

  await git.push();
  console.log("DONE. Refresh GitHub after 10 minutes.");
}

makeNaturalGraph();
