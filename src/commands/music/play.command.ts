import { SlashCommandBuilder } from '@discordjs/builders';
import { Interaction } from 'discord.js';
import { MusicPlayer } from '../../utils';

module.exports = {
  data: new SlashCommandBuilder()
    .setName('play')
    .setDescription('Plays a song.')
    .addStringOption((option) =>
      option.setName('song').setDescription('YouTube URL or search query.'),
    ),
  async execute(interaction: Interaction) {
    if (!interaction.isCommand()) return;

    const track: string = await interaction.options.getString('song');

    await MusicPlayer.play(interaction, track);
  },
};