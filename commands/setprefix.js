module.exports = {
name: "setprefix",
category: "Admin",
aliases: ["set-prefix", "prefix", "sp"],
code: `✅ Successfully set this server's prefix to \` $message \`
$setServerVar[prefix;$message]
$onlyIf[$message[1]!=$getServerVar[prefix];❌ \` $message[1] \` was already the prefix for this server.]
$onlyIf[$charCount[$message]<=10;❌ The server prefix must be 10 or fewer characters.]
$onlyIf[$message[1]!=;❌ Write the new prefix.]
$onlyPerms[manageserver;❌ You need \`manage_server\` permissions to run this command.]`
} 