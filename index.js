const jsonfile = require("jsonfile");
const simpleGit = require("simple-git");
const moment = require("moment");
const random = require("random"); // Make sure 'npm install random' was run

const FILE_PATH = "./data.json";
const git = simpleGit();

// 1. Fixed Range: Goes from 1 year ago today up until today
const START = moment().subtract(1, "year"); 
const END = moment();

async function makeNaturalGraph() {
  let day = START.clone();

  while (day.isSameOrBefore(END)) {
    const dayOfWeek = day.day(); 
    
    // Weekend skip logic (0 = Sunday, 6 = Saturday)
    const skipChance = (dayOfWeek === 0 || dayOfWeek === 6) ? 0.6 : 0.15;

    if (Math.random() > skipChance) {
      let commits;
      const roll = Math.random();
      
      // 2. Fixed 'random.int' access
      if (roll > 0.90) {
        commits = random.default.int(7, 12); // High intensity (Dark Green)
      } else if (roll > 0.60) {
        commits = random.default.int(4, 6);  // Medium intensity
      } else {
        commits = random.default.int(1, 3);  // Low intensity
      }

      for (let i = 0; i < commits; i++) {
        const date = day
          .clone()
          .add(random.default.int(9, 21), "hour") 
          .add(random.default.int(0, 59), "minute")
          .format();

        const data = { date, commitNum: i };
        await jsonfile.writeFile(FILE_PATH, data);

        await git.add(FILE_PATH);
        await git.commit("chore: update data", { "--date": date });
      }
      console.log(`Committed ${commits} times for ${day.format("YYYY-MM-DD")}`);
    }
    day.add(1, "day");
  }

  console.log("Pushing to remote...");
  // 3. Force push is added here to fix the 'rejected' errors from your previous attempts
  try {
    await git.push('origin', 'main', {'--force': null});
    console.log("Done! Check your GitHub profile in a few minutes.");
  } catch (e) {
    console.error("Push failed. Try running 'git push origin main --force' in terminal.");
  }
}

makeNaturalGraph();