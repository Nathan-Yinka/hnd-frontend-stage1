document.addEventListener("DOMContentLoaded", ()=> {

    const slackUserName = document.querySelector("[data-testid='slackUserName']");
    const currentDayOfTheWeek = document.querySelector("[data-testid='currentDayOfTheWeek']");
    const currentUTCTime = document.querySelector("[data-testid='currentUTCTime']");
    const slackDisplayImage = document.querySelector("[data-testid='slackDisplayImage']");
    const track = document.querySelector('[data-testid="myTrack"]')
    const git = document.querySelector('[data-testid="githubURL"]')

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    
    slackUserName.textContent = "Nathan-Yinka";
    slackDisplayImage.src = "IMG_6602.jpg";
    slackDisplayImage.alt = "Nathan-Yinka";

    currentDayOfTheWeek.textContent = `Current Day of the Week: ${dayOfWeek}`;
    git.textContent = "Github Link"
    git.href = 'https://github.com/Nathan-Yinka/hnd-frontend-stage1'

    function time(){
    const currentUTCTimed = Date.now()
    currentUTCTime.textContent = `Current UTC Time (Milliseconds): ${currentUTCTimed}`;
    }

    time()

    setInterval(time,1000)
    track.textContent = "Frontend"
});
