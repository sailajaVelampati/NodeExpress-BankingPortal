const fs = require("fs");
const path = require("path");

const accountData = fs.readFileSync("src/json/accounts.json", {
  encoding: "utf8",
});
const userData = fs.readFileSync("src/json/users.json", {
  encoding: "utf8",
});

const writeJSON = () => {
  const accountsJSON = JSON.stringify(accountData);
  fs.writeFileSync(
    path.join(__dirname, "json/accounts.json"),
    accountsJSON,
    "UTF8"
  );
};

module.exports.writeJSON = writeJSON;
module.exports.accounts = accountData;
module.exports.users = userData;
