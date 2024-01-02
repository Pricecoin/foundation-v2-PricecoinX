// Mock Daemon GetBlockTemplate Data
exports.getBlockTemplate = function() {
  return 
  20:36:16
  ￼
  {
    "capabilities": [
      "proposal"
    ],
    "version": 536870912,
    "rules": [
      "csv",
      "!segwit"
    ],
    "vbavailable": {
    },
    "vbrequired": 0,
    "previousblockhash": "f68f5e34600f2c2504dd30aa9628546b0a22544b5e2041383549c7907d6e57c4",
    "transactions": [
      {
        "data": "02000000000101d874926724c38a1cf15086289d0c3d96ea258bf1dae2671d1e76d50d8a8fda9900000000171600145b6a9270eb2133b8e98472f3ade9baabe81fcd9cfeffffff020010a5d4e80000001976a914859a9553a769d09ed88d60d977228270a405e67888ac51e809701818000017a91470af957cf2ba564e7b5f27c9f3b4132165238703870247304402202e9a7ea56168b3d38e5bd2e2e4dfbd1d3ca79113fd175a60cb29825f692435800220218cd73410c9fdfad93264877ebd3366f01c2bf656c3d8718bdff12e4c2cb0eb0121039d5d2e4fdcae969b11cf27234be200d47283afec6e537f88e0018289d3f5779bbf5e3900",
        "txid": "12a955ce56d036466dc1d7e1b7b84ef3c9909bac949c78aba2a4b7bdb9e8d889",
        "hash": "a8ad1280e47ca6c2d01c9103e03f1a9b473f7909a553f618b484edab01dadbdf",
        "depends": [
        ],
        "fee": 1604400,
        "sigops": 5,
        "weight": 669
      },
      {
        "data": "0200000000010158e69e87e44b1d7373f9ddb6d810cf7a904dbe3562eaa3542944e8b6044f9ffa0000000017160014e23d012ba8a4b772ce81c84aade2c87ef507a139feffffff0200c2eb0b0000000017a91419ba13b1f53277bb53ce32270161f8e787b43b1a8730e0df050000000017a914171256c67708013982063eccd4a5f9c48f8a9108870247304402203065c33c8222a990db3e7380b62d1777416be773647ffff17829007e4e92149f02200dad1a2421663580b6a26f67c34dec2caca3a8244695ac4224fbd19dd7caf7b00121037485cfe2ad79e5fc14e4e267c01e57814666bd9c5800f2f2b1af43ce5d4ae7189c5b3900",
        "txid": "4749dcefe2cf55d1d2a41b903ce5470fb17882b09ba3d0a866d3b31c6cba13cc",
        "hash": "42b3e1b84d6638637a39e9911e53761a72415fc3744268a007c3eb417e884cb9",
        "depends": [
        ],
        "fee": 332000,
        "sigops": 1,
        "weight": 661
      }
    ],
    "coinbaseaux": {
    },
    "coinbasevalue": 314436400,
    "longpollid": "f68f5e34600f2c2504dd30aa9628546b0a22544b5e2041383549c7907d6e57c480",
    "target": "00000001cab50000000000000000000000000000000000000000000000000000",
    "mintime": 1704162787,
    "mutable": [
      "time",
      "transactions",
      "prevblock"
    ],
    "noncerange": "00000000ffffffff",
    "sigoplimit": 80000,
    "sizelimit": 4000000,
    "weightlimit": 4000000,
    "curtime": 1704162976,
    "bits": "1d01cab5",
    "height": 3787702,
    "default_witness_commitment": "6a24aa21a9ed079f92ca4b685d1245bb01aed136e26f24e5ab77faba2abd696f4bdcc1c6181d"
  };
};

// Mock Daemon GetAuxBlock Data
exports.getAuxBlock = function() {
  return {
    'chainid': 1,
    'height': 3787022,
    'hash': '8719aefb83ef6583bd4c808bbe7d49b629a60b375fc6e36bee039530bc7727e2',
    'target': Buffer.from('00000002ffee0000000000000000000000000000000000000000000000000000', 'hex'),
  };
};

// Mock Daemon GetBlockchainInfo Data
exports.getBlockchainInfo = function() {
  return {
    "chain": "main",
    "blocks": 3787707,
    "headers": 3787707,
    "bestblockhash": "f6ba29fbfdc019b180af2bb285a6fc46ee20ee08fb9ba985554736b9122d5dd5",
    "difficulty": 0.5243555071930358,
    "mediantime": 1704162928,
    "verificationprogress": 0.04606436511302998,
    "initialblockdownload": false,
    "chainwork": "0000000000000000000000000000000000000000000000000008d93c54b3eeea",
    "size_on_disk": 1615183079,
    "pruned": false,
    "softforks": {
      "bip34": {
        "type": "buried",
        "active": true,
        "height": 100
      },
      "bip66": {
        "type": "buried",
        "active": true,
        "height": 100
      },
      "bip65": {
        "type": "buried",
        "active": true,
        "height": 100
      },
      "csv": {
        "type": "buried",
        "active": true,
        "height": 137088
      },
      "segwit": {
        "type": "buried",
        "active": true,
        "height": 137088
      },
      "testdummy": {
        "type": "bip9",
        "bip9": {
          "status": "defined",
          "start_time": 1709971200,
          "timeout": 1709459200,
          "since": 0
        },
        "active": false
      },
      "taproot": {
        "type": "bip8",
        "bip8": {
          "status": "defined",
          "start_height": 1709971200,
          "timeout_height": 1709459200,
          "since": 0
        },
        "active": false
      },
      "mweb": {
        "type": "bip8",
        "bip8": {
          "status": "defined",
          "start_height": 1709971200,
          "timeout_height": 1709459200,
          "since": 0
        },
        "active": false
      }
    },
    "warnings": "Warning: unknown new rules activated (versionbit 1)"
  };
};

// Mock Daemon GetInfo Data
exports.getInfo = function() {
  return {
    'version' : 89900,
    'protocolversion' : 70002,
    'walletversion' : 60000,
    'balance' : 0.00000000,
    'blocks' : 1,
    'timeoffset' : -2,
    'connections' : 8,
    'proxy' : '',
    'difficulty' : 510929738.01615179,
    'testnet' : false,
    'keypoololdest' : 1386220819,
    'keypoolsize' : 101,
    'paytxfee' : 0.00000000,
    'errors' : 'This is a pre-release test build - use at your own risk - do not use for mining or merchant applications'
  };
};

// Mock Daemon GetPeerInfo Data
exports.getPeerInfo = function() {
  return [{
    "id": 0,
    "addr": "[2600:1008:a101:5fed:3dbc:5b74:8d68:41ef]:2333",
    "addrbind": "[2600:1008:a101:5fed:615f:2728:a6b0:2c27]:36950",
    "addrlocal": "[2600:1008:a101:5fed:615f:2728:a6b0:2c27]:36950",
    "network": "ipv6",
    "services": "0000000001000409",
    "servicesnames": [
      "NETWORK",
      "WITNESS",
      "NETWORK_LIMITED",
      "MWEB"
    ],
    "relaytxes": true,
    "lastsend": 1704163319,
    "lastrecv": 1704163288,
    "last_transaction": 1704161227,
    "last_block": 1704163181,
    "bytessent": 9412,
    "bytesrecv": 17002,
    "conntime": 1704161007,
    "timeoffset": 1,
    "pingtime": 0.005402,
    "minping": 0.002325,
    "version": 70016,
    "subver": "/PricecoinXCore:0.21.2.3/",
    "inbound": false,
    "startingheight": 3787626,
    "synced_headers": 3787705,
    "synced_blocks": 3787705,
    "inflight": [
    ],
    "addr_processed": 12,
    "addr_rate_limited": 0,
    "permissions": [
    ],
    "minfeefilter": 0.00001000,
    "bytessent_per_msg": {
      "addrv2": 54,
      "cmpctblock": 6183,
      "feefilter": 32,
      "getaddr": 24,
      "getdata": 122,
      "getheaders": 1117,
      "headers": 237,
      "ping": 640,
      "pong": 640,
      "sendaddrv2": 24,
      "sendcmpct": 132,
      "sendheaders": 24,
      "verack": 24,
      "version": 135,
      "wtxidrelay": 24
    },
    "bytesrecv_per_msg": {
      "addrv2": 310,
      "cmpctblock": 13282,
      "feefilter": 32,
      "getdata": 61,
      "getheaders": 1117,
      "headers": 187,
      "inv": 97,
      "ping": 640,
      "pong": 640,
      "sendaddrv2": 24,
      "sendcmpct": 132,
      "sendheaders": 24,
      "tx": 273,
      "verack": 24,
      "version": 135,
      "wtxidrelay": 24
    },
    "connection_type": "outbound-full-relay"
  },
  {
    "id": 1,
    "addr": "51.159.160.29:2333",
    "addrbind": "192.168.1.157:47962",
    "addrlocal": "75.250.247.210:47962",
    "network": "ipv4",
    "services": "0000000001000409",
    "servicesnames": [
      "NETWORK",
      "WITNESS",
      "NETWORK_LIMITED",
      "MWEB"
    ],
    "relaytxes": true,
    "lastsend": 1704163301,
    "lastrecv": 1704163319,
    "last_transaction": 0,
    "last_block": 1704163319,
    "bytessent": 4973,
    "bytesrecv": 22753,
    "conntime": 1704161017,
    "timeoffset": -1,
    "pingtime": 0.137248,
    "minping": 0.125539,
    "version": 70016,
    "subver": "/PricecoinXCore:0.21.2.3/",
    "inbound": false,
    "startingheight": 3787626,
    "synced_headers": 3787709,
    "synced_blocks": 3787709,
    "inflight": [
    ],
    "addr_processed": 19,
    "addr_rate_limited": 0,
    "permissions": [
    ],
    "minfeefilter": 0.00001000,
    "bytessent_per_msg": {
      "addrv2": 54,
      "feefilter": 32,
      "getaddr": 24,
      "getdata": 1830,
      "getheaders": 1117,
      "headers": 212,
      "inv": 61,
      "ping": 640,
      "pong": 640,
      "sendaddrv2": 24,
      "sendcmpct": 132,
      "sendheaders": 24,
      "verack": 24,
      "version": 135,
      "wtxidrelay": 24
    },
    "bytesrecv_per_msg": {
      "addrv2": 407,
      "cmpctblock": 13969,
      "feefilter": 32,
      "getheaders": 1117,
      "headers": 5618,
      "ping": 640,
      "pong": 640,
      "sendaddrv2": 24,
      "sendcmpct": 99,
      "sendheaders": 24,
      "verack": 24,
      "version": 135,
      "wtxidrelay": 24
    },
    "connection_type": "outbound-full-relay"
  }];
};

// Mock Daemon GetTransaction Data
exports.getTransaction = function() {
  return {
    "amount": 3.00000000,
    "confirmations": 11983,
    "blockhash": "5b1919135942aa5549baf89dfc76457401623c72a50c675d2bfcf4c6cfea4042",
    "blockheight": 3775728,
    "blockindex": 1,
    "blocktime": 1703787101,
    "txid": "ca08fd0ca6f76fd887c35490279943717f346f0368bc023613daa946339487b4",
    "walletconflicts": [
    ],
    "time": 1703787089,
    "timereceived": 1703787089,
    "bip125-replaceable": "no",
    "details": [
      {
        "address": "MTaa8FMTg2acg5iZZZKQLLBVMZomUJbC3E",
        "category": "receive",
        "amount": 3.00000000,
        "label": "",
        "vout": 1
      }
    ],
    "hex": "0200000001148a0b0f52012b61baa21e0a3759609974a66e92965459d7768e72d6e916384d000000006a47304402204d0efbe155cc32da404e71367697bcfbf65421e10ccd2ecf65bd8081d44540f50220617817bcd2c12c0412069623399443f6f1c6018eeaad80bda72b437c327a4f2e0121034258b278f47caad3c306f09b8be7e22feee9cc608f296c3eda5f18f1961cad1afeffffff02ca879e000000000017a9143f42ce54fd59f9120022db4e71622ba26bba28648700a3e1110000000017a914d7de8ec033689ef1ea097d3b272305c1caa9c9f187ef9c3900"
  };
};

// Mock Daemon ListUnspent Data
exports.listUnspent = function() {
  return [{
    "txid": "7852a60a0c18363f5bd5564a9e55ce5ffaf97ffd9803dcc35c169e8a13baae50",
    "amount": 3.00000000,
    "confirmations": 11990,
    "spendable": true,
    "address": "MRMyAuzaUwyThV6aoVAcbKSKM4gB5J2J7r",
    "label": "",
    "vout": 1,
    "scriptPubKey": "a914bf8c22e8337a48863f8a8d20762b88ab0e91311187",
    "solvable": true,
    "desc": "sh(wpkh([c79df610/0'/0'/3']023bc7da115b6a3640dcf9d1c39ed4ad022f516da2b272450f2dcf266a274fe69d))#rejftwjp",
    "safe": true,
    "redeemScript": "0014a25b13c0594993a4bdec72067e13b9d7896d07b6"
  },
  {
    "txid": "781b493df9634e206ae413a84f539f57de8c492f42691e9008110dfd5e343e62",
    "amount": 12.00000000,
    "confirmations": 28650,
    "spendable": true,
    "address": "MRMyAuzaUwyThV6aoVAcbKSKM4gB5J2J7r",
    "label": "",
    "vout": 0,
    "scriptPubKey": "a914bf8c22e8337a48863f8a8d20762b88ab0e91311187",
    "solvable": true,
    "desc": "sh(wpkh([c79df610/0'/0'/3']023bc7da115b6a3640dcf9d1c39ed4ad022f516da2b272450f2dcf266a274fe69d))#rejftwjp",
    "safe": true,
    "redeemScript": "0014a25b13c0594993a4bdec72067e13b9d7896d07b6"
  },
  {
    "txid": "ca08fd0ca6f76fd887c35490279943717f346f0368bc023613daa946339487b4",
    "amount": 3.00000000,
    "confirmations": 11983,
    "spendable": true,
    "address": "MTaa8FMTg2acg5iZZZKQLLBVMZomUJbC3E",
    "label": "",
    "vout": 1,
    "scriptPubKey": "a914d7de8ec033689ef1ea097d3b272305c1caa9c9f187",
    "solvable": true,
    "desc": "sh(wpkh([c79df610/0'/0'/4']02ebba7bc5db122fc02ad0ddb2e724dfcf8553ad46f536ff5e04936c068293afa8))#chqk9htx",
    "safe": true,
    "redeemScript": "0014526f6b0171777c841e05b76949411520f469b155"
  }];
};
