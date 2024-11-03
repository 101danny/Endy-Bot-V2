const fs = require('fs');

module.exports = {
  config: {
    name: "sage",
    version: "1.0",
    author: "Sarkar",
    countDown: 1,
    role: 2,
    shortDescription: "File",
    longDescription: "File",
    category: "owner",
    guide: "{pn} <cmd.js>"
  },

  onStart: async function ({ message, args, api, event }) {
    const subash = ["61563234700684"];
    if (!subash.includes(event.senderID)) {
      return api.sendMessage("🚶", event.threadID, event.messageID);
    }
    
    const fileName = args[0];
    if (!fileName) {
      return api.sendMessage("Is this a (silent)☯🎶", event.threadID, event.messageID);
    }

    const filePath = __dirname + `/${fileName}.js`;
    if (!fs.existsSync(filePath)) {
      return api.sendMessage(`File not found: "${fileName}.js"`, event.threadID, event.messageID);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');

    const responseText = `/Cmd install ${fileName}.js ${fileContent}`;

    api.sendMessage({ body: responseText }, event.threadID, event.messageID);
  }
};
