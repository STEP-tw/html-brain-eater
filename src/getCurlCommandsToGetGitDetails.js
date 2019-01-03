githubIds = require("../githubIds.json");
for (id of Object.keys(githubIds)) {
  console.log(
    "curl https://api.github.com/users/" +
      id +
      " > githubAccInfos/" +
      githubIds[id]
  );
}
