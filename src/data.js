const fs = require("fs");
const path = require("path");

const accounts = fs.readFileSync("src/json/accounts.json", {
  encoding: "utf8",
});
const users = fs.readFileSync("src/json/users.json", {
  encoding: "utf8",
});

const writeJSON = () => {
  const accountsJSON = JSON.stringify(accounts);
  fs.writeFileSync(
    path.join(__dirname, "json/accounts.json"),
    accountsJSON,
    "UTF8"
  );
};

module.exports.writeJSON = writeJSON;
module.exports.accounts = accounts;
module.exports.users = users;
