const fs = require("fs");

const main = function () {
    const folderPath = process.argv[2];
    let fileNames = fs.readdirSync(folderPath);
    let usersHtml = fileNames.map(generateHtml.bind(null, folderPath));
    console.log(usersHtml.join("\n\n"));
}

const generateHtml = function (folderPath, fileName) {
    let userDetails = fs.readFileSync(folderPath + "/" + fileName);
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
    let imgHtml = "<img height=230 align=right src = " + avatar_url + " > ";
    let profileHtml = "<a href = " + html_url + " target=_blank > Go to profile </a>";
    let followersHtml = "<p>Followers:" + followers + "</p>";
    let followingHtml = "<p>Following: " + following + "</p><br>"
    let html = ["<div>", imgHtml,
        nameHtml, idHtml, profileHtml, followersHtml, followingHtml, "</div>"
    ].join("\n");
    return html;
}
main();