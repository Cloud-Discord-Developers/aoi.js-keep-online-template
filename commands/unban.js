module.exports = ({
    name: "unban",
category: "Admin",
    code: `
    $username[$message] has been unbanned from the guild.
    $unban[$message;$guildID;7;$noMentionMessage]
    $argsCheck[1;Just enter the User ID of who you want to unbanned.]
    `
});