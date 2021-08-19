const { Plugin } = require('powercord/entities')

const { getModule, constants } = require("powercord/webpack");
const { inject, uninject } = require('powercord/injector');
const getChannelPermissions = getModule(["getChannelPermissions"], false);

module.exports = class NOPTT extends Plugin {

   startPlugin() {
      inject('no-ptt', getChannelPermissions, 'can', (args, res) => {
	 if (args[0] == constants.Permissions.USE_VAD) {
		return true;
	 }
         	return res;
      	 });
   }

  pluginWillUnload () {
    uninject('no-ptt');
  }

};