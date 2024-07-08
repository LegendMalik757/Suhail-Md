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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_37_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA5NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDM2LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQwLFxuICAgICAgICAzMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODAsXG4gICAgICAgIDkzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTE4LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0LFxuICAgICAgICAzMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA2NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDM2LFxuICAgICAgICAyNixcbiAgICAgICAgNTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NyxcbiAgICAgICAgNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMixcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDU3LFxuICAgICAgICAxODAsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTczLFxuICAgICAgICAzMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDY2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjE2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgODQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMixcbiAgICAgICAgMTE2LFxuICAgICAgICA1NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY3LFxuICAgICAgICA5OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjksXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTksXG4gICAgICAgIDExMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzEsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDg0LFxuICAgICAgICAzMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDksXG4gICAgICAgIDI1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwdDFYdU5pOFJVQml6a2FOMXljN3VuNlFQS0tPS0RVMEhyWE5wd2ZJRzNnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAxMDQwNTY4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRUQ1NDE4NzFBMEUwMkJDNkY4OUVDNDIxREMzODI3QkZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNDI3ODM2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDEwNDA1Njg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3OTQ3OTM3Q0MyRTgzRUEyQTRGNzExMzBDRTVDNzZDMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA0Mjc4MzdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaWlxbW5pbGtRdXVqcERpS0R1OFhSZ1wiLFxuICBcInBob25lSWRcIjogXCJmYzRlZjc1ZS1iMWM5LTQ1OGUtOGE1Ny0zYjc1NjFhM2M4NWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDksXG4gICAgICA1OSxcbiAgICAgIDQwLFxuICAgICAgMTcwLFxuICAgICAgMjUzLFxuICAgICAgNzksXG4gICAgICAyMjgsXG4gICAgICAxMjIsXG4gICAgICAxMCxcbiAgICAgIDU1LFxuICAgICAgMjAxLFxuICAgICAgNyxcbiAgICAgIDE0LFxuICAgICAgNDcsXG4gICAgICAxOTIsXG4gICAgICAzNyxcbiAgICAgIDEyNSxcbiAgICAgIDE0NSxcbiAgICAgIDE4MSxcbiAgICAgIDI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI3LFxuICAgICAgMTUzLFxuICAgICAgNTAsXG4gICAgICA2MyxcbiAgICAgIDEzMCxcbiAgICAgIDEzMSxcbiAgICAgIDI0NyxcbiAgICAgIDU0LFxuICAgICAgMzcsXG4gICAgICAzMyxcbiAgICAgIDIzNCxcbiAgICAgIDIzMyxcbiAgICAgIDM2LFxuICAgICAgNDYsXG4gICAgICAyMDUsXG4gICAgICAxMjcsXG4gICAgICA3MSxcbiAgICAgIDE3NCxcbiAgICAgIDEwLFxuICAgICAgMjEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjMyNTRSUjVYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwMTA0MDU2ODg6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM5NTM1NjI2OTg1NDk5OjEwQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcInPhtJzJtMm0yo8g4bSN4bSAyp/JquG0i/CfmqzDl82cw5dcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNaWgwR2NRdU1xdXRBWVlCU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInlVejZ5NTJvRm5NUHpxVHlZOWN4b2Y0Q1NkL2N0VjNCdlFXcnJEVndtSHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRlpZYm5jUlIrSHJ1UkdjU0NNMmQ2UjVmK0dqTXZXellxaGtWSEYwcTZIcE9vc1dOaERxNExNS3Ztc1hsMitiRlUrcU5sYkxLVjZCSFJjMTBHT0k0Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOWNNTGxtTDdldFQ2b3o1VE1JS2RWS1p1V05UWUVoUTAvRnRDazNlbFhuend0YWN2Y1JQaTdzVklKUFY0Q1VCNFJLWGpzbHhYdEZCRytnOEpacG1nQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDEwNDA1Njg4OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDI3ODM1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSDFMXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIMUwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJdC9OcThxTXNEMDlaQnFIeWJiYloxQzBYQUNma3NKc0lFSGdicDU3ZkprPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxNzMyMTY3MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5ODEzOTc4MDc3XCJ9Igp9"  // PUT your SESSION_ID 


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
