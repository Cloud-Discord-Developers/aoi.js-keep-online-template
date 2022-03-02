const aoijs = require("aoi.js")
const fs = require('fs');
const bot = new aoijs.Bot({
    token: "process.env.token",
prefix: ["$getServerVar[prefix]"],
mobile: true,
sharding: false, //true or false
    shardAmount: 20,
fetchInvites: true, //True or false

intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"]
})
bot.joinCommand({ 
 channel:"$getServerVar[WelcomeChannel]", 
 code:`$title[1;$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[WelcomeTitle];{user};$username];{user.ping};<@$authorID>];{server};$serverName];{user.tag};$userTag[$authorID]]]
 $description[1;
 
 
 $replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[WelcomeMessage];{user};$username];{user.ping};<@$authorID>];{server};$serverName];{user.tag};$userTag[$authorID]]
 
 
 
 ]
 $color[1;RED]
 $footer[1;Now $serverName Has $membersCount Members!;$serverIcon]
 $addTimestamp[1]
 
 $thumbnail[1;$userAvatar[$authorID]]`}) 
bot.onJoin()

bot.onMessage() //Allows to execute Commands

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./commands/")

const files = fs.readdirSync('./events').filter(file => file.endsWith('.js'))
files.forEach(x => {
 require(`./events/${x}`)(bot)
});

bot.interactionCommand({
name: "meme", 
prototype : 'slash',
code: `$interactionReply[;{newEmbed:{title:$getObjectProperty[title]}{color:#FF0000}{image:$getObjectProperty[image]}{footer:👍 $getObjectProperty[upvotes] | 💬 $replaceText[$getObjectProperty[comments];;0;-1]}}]
$createObject[$jsonRequest[https://api.popcatdev.repl.co/meme;]]`
}) 

/*
bot.cmd is object of Collections where the command data will be stored
"./commands/" is the path of folder where all the commands' code will be present
*/

bot.status ({
 text: "+help",
 type: "LISTENING",
 time: 10
})

bot.status({
text: "$serverCount Servers!", 
type: "COMPETING",
time: "12"
})
bot.status({
    text: "$allMembersCount Members!",
    type: "WATCHING",
    time: 12
})

bot.readyCommand({
  channel: '',
  code: `$log[
  ╭─━━━━━━━━━━━━━━━━━━─╮
  Client: $userTag[$clientID]
  Ping: $ping ms
  Bot Creator: $username[$botOwnerID]#$discriminator[$botOwnerID]
  Commands loaded: $commandsCount
  ╰─━━━━━━━━━━━━━━━━━━─╯
  ]`
})

bot.variables ({
prefix: "+",
WelcomeChannel: "",
WelcomeMessage: "Welcome {user.ping} To {server}!",
 WelcomeTitle:"Welcome {user.ping}",
wallet: "0", //wallet money
  bank: "0", //bank money
  bio: "I am Just a Plain Human" //user bio for profile
});
