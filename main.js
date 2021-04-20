// Run dotenv
require('dotenv').config();
const { Member } = require('discord.io');
const Discord = require('discord.js');
var Embeds = require('./embeds.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    var content = msg.content;
    var prefix = content.substring(0,1);
    if(prefix=='_'){
        var args = content.substring(1).split(' ');
        var cmd = args[0];
        args = args.splice(1);

        switch(cmd){
            case 'role':

                if(!msg.member.hasPermission('MANAGE_ROLES')){
                    msg.reply("You don't have permissions for managing roles!");
                    break;
                } 

                // REMOVE FROM ALL -----------------------------------------------
                if(args[0] == 'removeFromAll'){
                    var role = msg.mentions.roles.first();
                    if(role == null) {
                        Embeds.removeFromAllNoRole(msg)
                        break;
                    }
                    let roleID = role.id;
                    const membersWithRole = msg.guild.members.cache.filter((member) => member.roles.cache.some((role) => role.id === roleID)).map(m => m)
                    membersWithRole.forEach(member => {
                        member.roles.remove(roleID)
                            .then(function() {
                                console.log(`Removed role from user ${member.user.tag}!`);
                        })
                    })
                    Embeds.removeFromAllFinished(msg)
                }

                // ADD -----------------------------------------------
                else if(args[0] == 'add'){
                    var member = msg.mentions.members.first();
                    var role = msg.mentions.roles.first();
                    if(member == null){
                        Embeds.addNoUser(msg)
                        break;
                    }
                    if(role == null) {
                        Embeds.addNorole(msg)
                        break;
                    }
                    let roleID = role.id;
                    member.roles.add(roleID).catch(console.error);
                    Embeds.addedRole(msg)
                }

                // REMOVE -----------------------------------------------
                else if(args[0] == 'remove'){
                    var member = msg.mentions.members.first();
                    var role = msg.mentions.roles.first();
                    if(member == null){
                        Embeds.removeNoUser(msg)
                        break;
                    }
                    if(role == null) {
                        Embeds.removeNoRole(msg)
                        break;
                    }
                    let roleID = role.id;
                    member.roles.remove(roleID).catch(console.error);
                    Embeds.removedRole(msg)
                }

                // TOGGLE -----------------------------------------------
                else if(args[0] == 'toggle'){
                    var user = msg.mentions.members.first();
                    var role = msg.mentions.roles.first();
                    if(user == null){
                        Embeds.toggleNoUser(msg)
                        break;
                    }
                    if(role == null) {
                        Embeds.toggleNoRole(msg)
                        break;
                    }
                    let roleID = role.id;
                    let roles = user.roles;
                    if(roles.cache.has(roleID)){
                        // Role found!
                        roles.remove(roleID).catch(console.error);
                        Embeds.removedRole(msg)
                    }
                    else{
                        // Role not found!
                        roles.add(roleID).catch(console.error);
                        Embeds.addedRole(msg)
                    }
                }
                break;
        }
    }


});

client.login(process.env.DISCORD_TOKEN);