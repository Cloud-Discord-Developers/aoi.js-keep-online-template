module.exports = ({
    name: "ban",
category: "Admin",
    code: `
    $username[$message] has been banned from the guild.
    $ban[$message;$guildID;7;$noMentionMessage]
    $onlyIf[$hasPerms[$guildID;$authorID;ban]==true;You don't have \`Ban\` permisions]
    $onlyBotPerms[ban;I don't have \`Ban\` permissions]
    `
});