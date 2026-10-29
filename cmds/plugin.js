/* External plugin installation is disabled until the plugin loader is audited. */
const { kord } = require("../core")
kord({ cmd: "plugin|install", desc: "External plugin installation disabled", fromMe: true, type: "plugins" }, async m => {
  await m.send("External plugin installation is disabled for security.")
})
