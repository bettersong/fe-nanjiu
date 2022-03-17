const shell = require("shelljs");

const action = process.argv[2];

function buildtask(action) {
  const cmds = [];

  if (action === "build") {
    cmds.push("vue-cli-service build");
  } else if (action == "start") {
    cmds.push("vue-cli-service serve");
  } else if (action == "lint") {
    cmds.push("vue-cli-service lint");
  }

  const cmd = cmds.join("&&");
  const res = shell.exec(cmd);

  console.log(`[buildTask]  ${res.code == 0 ? "success" : "error"}`);

  res.code == 0
    ? shell.echo(`${action}: 成功😊～`)
    : shell.echo(`${action}: 失败😭...`);

  return res.code;
}

buildtask(action);
