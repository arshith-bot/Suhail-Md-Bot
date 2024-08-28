const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_08_00_08_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA4LFxuICAgICAgICA5OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzksXG4gICAgICAgIDU0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODUsXG4gICAgICAgIDM5LFxuICAgICAgICAxODksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDgxLFxuICAgICAgICAwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDUwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzgsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk2LFxuICAgICAgICAyOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjksXG4gICAgICAgIDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMwLFxuICAgICAgICA0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjksXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5LFxuICAgICAgICA2NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjksXG4gICAgICAgIDExNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDMwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTM5LFxuICAgICAgICA0NixcbiAgICAgICAgMTI5LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU4LFxuICAgICAgICA2OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDkzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTYzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA5MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA0LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDU0LFxuICAgICAgICA5MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDUzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNixcbiAgICAgICAgMjI3LFxuICAgICAgICA0MixcbiAgICAgICAgMjQsXG4gICAgICAgIDQyLFxuICAgICAgICAxODgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc0LFxuICAgICAgICAzNixcbiAgICAgICAgMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiclU1dWZCUmVlVjdMOXpTb2hZcjl0RC9YdXVTQW95Qng3TmZxODhIVTZpTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWHpTSl9oWC1SOUdjUXVXU2dLcl9iUVwiLFxuICBcInBob25lSWRcIjogXCI1ZWExMTg0Yy1iYTVmLTQ3ZGUtYmI5Ni1iYjBlM2ZkNGUzMGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ3LFxuICAgICAgMTY1LFxuICAgICAgMzUsXG4gICAgICAxMzIsXG4gICAgICAzLFxuICAgICAgNzAsXG4gICAgICAxMTYsXG4gICAgICA2MyxcbiAgICAgIDY1LFxuICAgICAgMixcbiAgICAgIDU1LFxuICAgICAgMTIwLFxuICAgICAgMjgsXG4gICAgICA3NCxcbiAgICAgIDExMixcbiAgICAgIDQwLFxuICAgICAgMzcsXG4gICAgICAxMzYsXG4gICAgICA2MixcbiAgICAgIDI0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzEsXG4gICAgICAyNDksXG4gICAgICAxMSxcbiAgICAgIDEsXG4gICAgICAxOTUsXG4gICAgICAyMjgsXG4gICAgICAxODUsXG4gICAgICA2OCxcbiAgICAgIDE5MyxcbiAgICAgIDEzMixcbiAgICAgIDAsXG4gICAgICAyLFxuICAgICAgMTk3LFxuICAgICAgMTgwLFxuICAgICAgNzIsXG4gICAgICAyMDQsXG4gICAgICAyMjYsXG4gICAgICAxNDIsXG4gICAgICAxNzcsXG4gICAgICAxODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTUsyWlA4N0NcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxOTY0NTU4MzU0NzoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY2Mjk2MzY0NjQ4MToyNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPN2FtczhIRUlLeXU3WUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm9Za2thbjdrZ0tadnlrdzRiT04rNTBERVVrNXE1Ly9Ca2VMekdLeTNzSG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicjFBQjU4aUk5SUIrR2U0ZHEyVHFqdENJMU1xcnNSbWtzMU5GaTZVaU1GUUVka0E0YlFMRERJbk4zK05QcXZmNUozVC9TSXRkQVF1NU1CaGpkZjlXRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSnZVb3cvakN0S3hpdFVxdTNHaUhkQ2FFeE9wdTY2TWo2VkpTai9Sa1doYXE4eWQxQTF6QnFmcHMwd1RCMmRma1BBcE8zN1JiVEJlUnBKUFQzWTJBQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5NjQ1NTgzNTQ3OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjQ4MzIwMDYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHUVRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdRVC5qc29uIjogIntcImtleURhdGFcIjpcImlYMUo4UDhRODdvUVNPWk9BQzZvNWFzSFJ5d2M4Z0k4OC9PbWxnQ1ZPTXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA0NTE2MDgxNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIzODIwODEwNzQ5XCJ9Igp9" //PUT your SESSION_ID

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Arshith",
  packname: process.env.PACK_NAME || "🫠",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
