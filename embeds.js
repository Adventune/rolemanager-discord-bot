const Discord = require('discord.js');

exports.removeFromAllNoRole = function(msg) {
    msg.channel.send(new Discord.MessageEmbed()
    .setTitle('Error')
    .addFields(
        { name: 'Error in message', value: 'You have to mention a role to use this command' },
        { name: 'Usage:', value: '_role removeFromAll @role', inline: true },
    )
    .setFooter("Use _help for command help"))
}

exports.removeFromAllFinished = function(msg) {
    var mentionedRole = msg.mentions.roles.first();
    msg.channel.send(new Discord.MessageEmbed()
    .setTitle('Success')
    .addFields(
        { name: 'Role removed from everyone', value: "Role <@&" + mentionedRole.id +"> was removed from everyone!" },
    ))

}

exports.removeFromAllFailed = function(msg) {
    var mentionedRole = msg.mentions.roles.first();
    msg.channel.send(new Discord.MessageEmbed()
    .setTitle('Error')
    .addFields(
        { name: 'Something went wrong!', value: "Role @" + mentionedRole.name + " was not removed from everyone!" },
    ))

}


exports.addNoRole = function(msg) {
    msg.channel.send(new Discord.MessageEmbed()
    .setTitle('Error')
    .addFields(
        { name: 'Error in message', value: 'You have to mention a role to use this command' },
        { name: 'Usage:', value: '_role add @role @user', inline: true },
    )
    .setFooter("Use _help for command help"))
}

exports.addNoUser = function(msg) {
    msg.channel.send(new Discord.MessageEmbed()
    .setTitle('Error')
    .addFields(
        { name: 'Error in message', value: 'You have to mention a user to use this command' },
        { name: 'Usage:', value: '_role add @role @user', inline: true },
    )
    .setFooter("Use _help for command help"))
}

exports.addedRole = function(msg) {
    var mentionedRole = msg.mentions.roles.first().id;
    var mentionedUser = msg.mentions.members.first().id;
    msg.channel.send(new Discord.MessageEmbed()
    .setTitle('Success')
    .addFields(
        { name: 'Role added to user', value: "Role: <@&"+mentionedRole +"> User: <@"+mentionedUser+ ">"},
    ))
}

exports.removeNoRole = function(msg) {
    msg.channel.send(new Discord.MessageEmbed()
    .setTitle('Error')
    .addFields(
        { name: 'Error in message', value: 'You have to mention a role to use this command' },
        { name: 'Usage:', value: '_role remove @role @user', inline: true },
    )
    .setFooter("Use _help for command help"))
}

exports.removeNoUser = function(msg) {
    msg.channel.send(new Discord.MessageEmbed()
    .setTitle('Error')
    .addFields(
        { name: 'Error in message', value: 'You have to mention a user to use this command' },
        { name: 'Usage:', value: '_role remove @role @user', inline: true },
    )
    .setFooter("Use _help for command help"))
}

exports.removedRole = function(msg) {
    var mentionedRole = msg.mentions.roles.first().id;
    var mentionedUser = msg.mentions.members.first().id;
    msg.channel.send(new Discord.MessageEmbed()
    .setTitle('Success')
    .addFields(
        { name: 'Role removed from user', value: "Role: <@&"+mentionedRole +"> User: <@"+mentionedUser+ ">"},
    ))
}

exports.toggleNoRole = function(msg) {
    msg.channel.send(new Discord.MessageEmbed()
    .setTitle('Error')
    .addFields(
        { name: 'Error in message', value: 'You have to mention a role to use this command' },
        { name: 'Usage:', value: '_role toggle @role @user', inline: true },
    )
    .setFooter("Use _help for command help"))
}

exports.toggleNoUser = function(msg) {
    msg.channel.send(new Discord.MessageEmbed()
    .setTitle('Error')
    .addFields(
        { name: 'Error in message', value: 'You have to mention a user to use this command' },
        { name: 'Usage:', value: '_role toggle @role @user', inline: true },
    )
    .setFooter("Use _help for command help"))
}