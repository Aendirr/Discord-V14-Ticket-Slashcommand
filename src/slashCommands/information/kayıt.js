const { EmbedBuilder, Client, CommandInteraction } = require('discord.js');

module.exports = {
    name: 'kayıt',
    description: 'Kayıt Talebi İçin:',
    // ownerOnly: true, -> Optional
    /**
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    run: async (client, interaction, args) => {
        const embed = new EmbedBuilder()
            .setDescription(`👨‍💻 Kayıt Talebi İçin Başvurun Oluşturuldu. `)
            .setColor('Red')
        interaction.reply({
            embeds: [embed]
        })
    }
}
