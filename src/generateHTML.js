const fs = require("fs");

const main = function () {
    let fileNames = fs.readdirSync("./githubAccInfos");
    let usersHtml = fileNames.map(generateHtml);
    console.log(usersHtml.join("\n\n"));
}

const generateHtml = function (fileName) {
    let userDetails = fs.readFileSync("./githubAccInfos/" + fileName);
    userDetails = JSON.parse(userDetails);
    const {
        login,
        avatar_url,
        html_url,
        followers,
        following
    } = userDetails;

    let nameHtml = "<h2>" + fileName + "</h2>";
    let idHtml = "<p><b>UserId<b>:" + login + "</p>";
    let imgHtml = "< img src = " + avatar_url + " > <br>";
    let profileHtml = "< a href = " + html_url + "target = _blank > Go to profile < /a><br>";
    let followersHtml = "<p>Followers:" + followers + "<br>";
    let followingHtml = "Following: " + following + "</p><hr>"
    let html = [nameHtml, idHtml, imgHtml, profileHtml, followersHtml, followingHtml].join("\n");
    return html;
}
main();