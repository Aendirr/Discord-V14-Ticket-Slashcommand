const { EmbedBuilder, Client, CommandInteraction } = require('discord.js');

module.exports = {
    name: 'ip',
    description: 'İp adresi almak için:',
    // ownerOnly: true, -> Optional
    /**
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    run: async (client, interaction, args) => {
        const embed = new EmbedBuilder()
            .setDescription(`👨‍💻 İP: https://cfx.re/join/rkblpg `)
            .setColor('Red')
        interaction.reply({
            embeds: [embed]
        })
    }
}