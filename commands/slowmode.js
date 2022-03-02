module.exports = {
    name: "slowmode",
    $if: "v4",
    aliases: ['sm', 'slow-mode'],
category: "Admin",
    code: `
$if[$replaceText[$replaceText[$replaceText[$message[1];s;];m;];h;]==$getChannelSlowmode]
$author[1;$userTag;$authorAvatar;]
$title[1;Slowmode Already Set To $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];s; seconds];m; minutes];h; hours];1 seconds;1 second];1 minutes;1 minute];1 hours;1 hour]]
$description[1;The message value that you sent had already been the same and was not changed before.]
$color[1;ORANGE]
$footer[1;Date;https://emoji.gg/assets/emoji/2226-calendar.png]
$addTimeStamp[1]
$onlyIf[$message[2]!=;A]
$onlyIf[$isNumber[$message[1]]!=true;B]

$elseIf[$message[2]!=]
$author[1;$userTag;$authorAvatar;]
$title[1;Slowmode]
$description[1;Members will be restricted to sending one message and creating one thread per this interval, unless they have Manage Channel or Manage Messages permissions.

> Slowmode successfully changed to **$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];s; seconds];m; minutes];h; hours];1 seconds;1 second];1 minutes;1 minute];1 hours;1 hour]** at **<#$findChannel[$message[2];no]>**]
$color[1;BLUE]
$footer[1;Date;https://emoji.gg/assets/emoji/2226-calendar.png]
$addTimeStamp[1]
$slowMode[$message[1];$findChannel[$message[2];no]]
$onlyIf[$serverChannelExists[$findChannel[$message[2];no]]==true;{newEmbed:{author:$userTag:$authorAvatar}{title:Invalid Channel}{description:It seems like that channel doesn't exist in this server. You could try mentioning the channel, type the channel ID, or type the channel name.}{color:RED}{footer:Date:https://emoji.gg/assets/emoji/2226-calendar.png}{addTimeStamp}}]
$onlyIf[$replaceText[$message[1];s;]<=21600;You cannot put more than 21600 seconds!]
$onlyIf[$replaceText[$message[1];m;]<=360;You cannot put more than 360 minutes!]
$onlyIf[$replaceText[$message[1];h;]<=6;You cannot put more than 6 hours!]
$onlyIf[$checkContains[$message[1];s;m;h]!=false;]
$onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$message[1];s;];m;];h;]]!=false;]
$endelseIf

$elseIf[$message[1]!=]
$author[1;$userTag;$authorAvatar;]
$title[1;Slowmode]
$description[1;Members will be restricted to sending one message and creating one thread per this interval, unless they have Manage Channel or Manage Messages permissions.

> Slowmode successfully changed to **$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];s; seconds];m; minutes];h; hours];1 seconds;1 second];1 minutes;1 minute];1 hours;1 hour]**]
$color[1;BLUE]
$footer[1;Date;https://emoji.gg/assets/emoji/2226-calendar.png]
$addTimeStamp[1]
$slowMode[$message[1];$channelID]
$onlyIf[$message[2]==;]
$onlyIf[$replaceText[$message[1];s;]<=21600;You cannot put more than 21600 seconds!]
$onlyIf[$replaceText[$message[1];m;]<=360;You cannot put more than 360 minutes!]
$onlyIf[$replaceText[$message[1];h;]<=6;You cannot put more than 6 hours!]
$onlyIf[$checkContains[$message[1];s;m;h]!=false;]
$onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$message[1];s;];m;];h;]]!=false;]
$endelseIf

$elseIf[$getChannelSlowmode==0]
$author[1;$userTag;$authorAvatar;]
$title[1;Slowmode Already Disabled]
$description[1;The function value has already been set to 0/none already.]
$color[1;BLUE]
$footer[1;Date;https://emoji.gg/assets/emoji/2226-calendar.png]
$addTimeStamp[1]
$endelseIf

$elseIf[$message==]
$author[1;$userTag;$authorAvatar;]
$title[1;Slowmode Disabled]
$description[1;This function sets a cooldown to the given channel ID. 0 will set the cooldown to none, and if set to none it will set the cooldown to 0.]
$color[1;BLUE]
$footer[1;Date;https://emoji.gg/assets/emoji/2226-calendar.png]
$addTimeStamp[1]
$slowMode[0;$channelID]
$endelseIf

$endIf


`
}