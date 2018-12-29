let fs = require("fs");
let fileNames = fs.readdirSync("./githubAccInfos");
for (let name of fileNames) {
    let userDetails = fs.readFileSync("./githubAccInfos/" + name);
    userDetails = JSON.parse(userDetails)
    let id = userDetails.login
    let img = userDetails.avatar_url
    let pro = userDetails.html_url
    let {
        followers,
        following
    } = userDetails;
    console.log("<h2>", name, "</h2>\n<p><b>UserId<b>:", id, "</p>\n<img src=", img, "><br>\n<a href=", pro, " target=_blank>Go to profile</a><br>\n")
    console.log('<p>Followers:' + followers + '<br>\nFollowing:' + following + '\n</p><hr>');

}