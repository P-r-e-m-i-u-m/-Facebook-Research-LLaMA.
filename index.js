const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const FILE_PATH = './data.json';
const git = simpleGit();

// Targeting Jan 21, 2026
const DATE = "2026-01-21T12:00:00"; 

const makeCommits = async (date) => {
    const data = { date: date };

    try {
        console.log(`Starting commits for ${date}...`);
        
        // This loop makes 10 commits for this single day
        for (let i = 0; i < 10; i++) {
            await jsonfile.writeFile(FILE_PATH, { ...data, count: i });
            await git.add([FILE_PATH]).commit(`Commit ${i} for ${date}`, { '--date': date });
            console.log(`Commit ${i+1}/10 created.`);
        }

        console.log("Pushing to GitHub...");
        await git.push();
        console.log("SUCCESS! Refresh your GitHub profile in 5 minutes.");
    } catch (err) {
        console.error("Error:", err);
    }
};

makeCommits(DATE);