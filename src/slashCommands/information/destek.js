const { EmbedBuilder, Client, CommandInteraction } = require('discord.js');

module.exports = {
    name: 'destek',
    description: 'Destek Talebi İçin:',
    // ownerOnly: true, -> Optional
    /**
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    run: async (client, interaction, args) => {
        const embed = new EmbedBuilder()
            .setDescription(`👨‍💻 Destek Talebi İçin Ticket Oluşturabilirsin. Daha Hızlı Yanıt Almanı Sağlar. `)
            .setColor('Red')
        interaction.reply({
            embeds: [embed]
        })
    }
}