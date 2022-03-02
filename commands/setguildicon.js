module.exports = ({
name: "setGuildIcon",
category: "Admin",
code: `Set the guild icon to $message
$setGuildIcon[$message;$guildID]
    $onlyIf[$hasPerms[$guildID;$authorID;MANAGE_SERVER]==true;You don't have \`MANAGE_SERVER\` permisions]`
})