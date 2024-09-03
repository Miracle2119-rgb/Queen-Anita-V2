//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://Wa.me/2349042566473?text=Boss%20ＫＩＮＧ🍀Ｍ-ＣＲＯＳＳ%20my%20name%20is___%20and%20I've%20saved%20your%20contact%20you%20should%20please%20save%20mine%20too%20%20✅";
global.website = process.env.GURL || "https://Wa.me/2349042566473?text=Boss%20ＫＩＮＧ🍀Ｍ-ＣＲＯＳＳ%20my%20name%20is___%20and%20I've%20saved%20your%20contact%20you%20should%20please%20save%20mine%20too%20%20✅";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/94e26f3caea127264a50c.jpg";
global.devs = "2349042566473";
global.sudo = process.env.SUDO || "2349042566473";
global.owner = process.env.OWNER_NUMBER || "2349042566473";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/94e26f3caea127264a50c.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU5BY3JaZk50VUVyd3Y3Wm8rZVRYOEFkT3Y1RWlxTk9aUVlFZWRBUGcwVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnZqUHBPVUVHbkRzc1BLNi82UEhIa3htaWxsN2RodWpFdklyTFlzeHduZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTlU1MlAxWWdsWUVDRHp6L21YajZINURiTU51eXVwYWZ0K2VZakRUWWtZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoLyt6aXh2WkFtMVFQbXo5clNFNmpGRmhLcWlZSEFPZmliemtxYkNMeXprPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldIeXVQVFQyNjE5dGJBY0hzMndDNmxJR0ZNN1BaVlZBNlpBS1lmMC9iMzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlgrQjMxcU05bldkQUVhTW14eWpBKzRGdzNoRVladFUxVHFBTjVEWHg5Rk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0VvVmlDd0tyekR5WkpUN0hUNXg1azZsNmhFQmFucENJVGJuVEhacmswdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU9JUFVUaDVhL2dnNmk5bGFWWlNzMTUvbnIzdEFLcExCamp0Rk1Ic2pWRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InM0U1hRN210cEFXSlZJVVE3YkJMcmk2Q0JmUzk1d3JlSmR3bFJpTzNpMWdKWXVHSHJ3ajhCY25XZEozaUFTSmJjQVBtZXhpNWZtWmdIb1YwODZCNmh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIsImFkdlNlY3JldEtleSI6InJUT2xFUzVIK0NQNHlueXl2d3pzWGkzd1JZeElOd2o4WUYyU0ltMm5PMVE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik04a1YydHgwUjgtLXpvM0k1YTFUWWciLCJwaG9uZUlkIjoiNGRiNWU3ZWItZTk3Ny00NjM2LTgzMjktMGE5MzcxNTYzZDRmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFadlJMQlgweHRKVEhOd1FWbEJlT1BEaEVnST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhajFOOUtuTG15S1E1eUZMMEpEQUlvRmVIRHc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTDJaM1BaWUEiLCJtZSI6eyJpZCI6IjIzNDkwNjgwNzYyNzg6MTlAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ04zdi92TUJFTVByM2JZR0dBa2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjRpSndqdFhsd3ZOKzJHendQZTFTclJIYUNUT05SU3RMaExITkx3aVV5RlU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlFBYVlNb0tCbXIrbUE2S1pjVlNsSS91eG1TYTRDdE5VUXBRUUw2UTlQOVVhUVJBRFkrVVRjaHJlRlZkYjYvVFRacW9oSFJiTDhDVTUxQTFzV1doTUNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJWN3dMRWduNUllUCtxRGxpWXExYWpsTXpuQk5zMjE0Z3piR0lzSFM4aUNUNU1BaGtpNE8yZ1BUSUUyQjdJTi9HWVVjSWhnNC8zVFcxaHhuV3lqY0Rpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwNjgwNzYyNzg6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZUlpY0k3VjVjTHpmdGhzOEQzdFVxMFIyZ2t6alVVclM0U3h6UzhJbE1oViJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTM5NjQzM30="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`𝐃𝐄𝐌𝐎𝐍 𝐌-𝐂𝐑𝐎𝐒𝐒™`",
  author: process.env.PACK_AUTHER || "𝐃𝐄𝐌𝐎𝐍 𝐌-𝐂𝐑𝐎𝐒𝐒",
  packname: process.env.PACK_NAME || "𝐃𝐄𝐌𝐎𝐍 𝐌-𝐂𝐑𝐎𝐒𝐒",
  botname: process.env.BOT_NAME || "𝐃𝐄𝐌𝐎𝐍 𝐌-𝐂𝐑𝐎𝐒𝐒",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐌𝐎𝐍 𝐌-𝐂𝐑𝐎𝐒𝐒",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
