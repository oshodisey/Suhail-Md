const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_47_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTIsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg4LFxuICAgICAgICA4NixcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMixcbiAgICAgICAgMTQzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDkwLFxuICAgICAgICAyNixcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY0LFxuICAgICAgICA5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE0LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyLFxuICAgICAgICA4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgOSxcbiAgICAgICAgMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMyxcbiAgICAgICAgMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDYzLFxuICAgICAgICA4MixcbiAgICAgICAgMTU0LFxuICAgICAgICA1MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDc0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDg2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyOCxcbiAgICAgICAgMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NixcbiAgICAgICAgMTAsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA0NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICAyNixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODAsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzLFxuICAgICAgICA0NixcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQzLFxuICAgICAgICA3OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAzNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUsXG4gICAgICAgIDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAyLFxuICAgICAgICA1OCxcbiAgICAgICAgOTksXG4gICAgICAgIDIzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODgsXG4gICAgICAgIDU2LFxuICAgICAgICAyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkpEVkdibVB6TisrMEhqQmpVNVhkbHVHZmhMNTNwZ3BNU1dBN2pyL3RTZW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIktkcFFDQXhmUzJ1MXFWWGtBOV8wRlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDhiNGM5ZGEtZTI3Ni00ODZlLWI4OWItY2VhYTQ2NmQzNzJlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMixcbiAgICAgIDgsXG4gICAgICAxOTgsXG4gICAgICAxMjYsXG4gICAgICAxNDIsXG4gICAgICAxMDUsXG4gICAgICA2OCxcbiAgICAgIDIsXG4gICAgICAxNzUsXG4gICAgICAyMDUsXG4gICAgICA1MyxcbiAgICAgIDE2NixcbiAgICAgIDE1OCxcbiAgICAgIDIwNixcbiAgICAgIDQ1LFxuICAgICAgMTEzLFxuICAgICAgMzIsXG4gICAgICAxNjAsXG4gICAgICAyMDksXG4gICAgICAxMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAwLFxuICAgICAgMTMxLFxuICAgICAgMjEwLFxuICAgICAgMjE3LFxuICAgICAgMTI0LFxuICAgICAgMTA4LFxuICAgICAgMjA5LFxuICAgICAgNDMsXG4gICAgICAxNzEsXG4gICAgICAyMzAsXG4gICAgICAyNTUsXG4gICAgICAxMDMsXG4gICAgICAyMDYsXG4gICAgICA4MCxcbiAgICAgIDEzMixcbiAgICAgIDEyMixcbiAgICAgIDEwOCxcbiAgICAgIDIzOSxcbiAgICAgIDQsXG4gICAgICAxODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiREVGWE0xQlFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMjUzNjkwMzY6OTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2NDY5MDgyMjk2MzI0Mjo5N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMS3JneVVRMEpHQXRRWVlGQ0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFvTHExd3dleDRPNWNqL1Q1Zlg2RU9LbS9oazRHekxULzEwa2g5NVJQaDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiT3hKc0EyNE5KNnluV1M3eHN2Z25xeVRtZnpVd28zWDJCc0tab0lwbVVWeFVtc0hNVjdYdWYycDFtcldCMlBsY3VWR0lSZE9pcE5abDdsN0lkUGt5Q3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMmlGd0xaenpmQXJiZlRvY0JjSFNsZjhFY2FWcDkrRCtkWVluemxiT2JKYjVzNGpqOTJ5NnVhSFJRRFJzWUpwVHFZT2cyaDE4Z2ZETmhqaFFHcGttaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAyNTM2OTAzNjo5N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3NjQwNTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPVzlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9XOS5qc29uIjogIntcImtleURhdGFcIjpcIjJJdUxIWm95d3dac0xCSGt6Rngvc3BCb1Npd092Rk1WZ2w2ajFZZXE3b0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Nzc2NDkzMzAsXCJjdXJyZW50SW5kZXhcIjoxMSxcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
