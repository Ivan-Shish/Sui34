window.BENCHMARK_DATA = {
  "lastUpdate": 1687453719479,
  "repoUrl": "https://github.com/MystenLabs/sui",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "distinct": true,
          "id": "6c921a0cc0f86f82c114cfd21b5b24afa67f07e0",
          "message": "Fix release build",
          "timestamp": "2023-04-25T13:42:31-07:00",
          "tree_id": "e1deae07393a28388c87f4863aa4a2b1a94ba5ac",
          "url": "https://github.com/MystenLabs/sui/commit/6c921a0cc0f86f82c114cfd21b5b24afa67f07e0"
        },
        "date": 1682456001641,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 143989111,
            "range": "± 4682497",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 325357,
            "range": "± 27396",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "571e4ca89892cd8bfed2324e56161c0e6f9ea01c",
          "message": "Write full_checkpoint_content and checkpoint_content atomically (#11330)\n\n## Description \r\n\r\nfixes a race condition which can lead to a crash.\r\n\r\n## Test Plan \r\n\r\ncargo simtest\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\nfixes a race condition which can lead to a crash.",
          "timestamp": "2023-04-25T21:38:55Z",
          "tree_id": "d4bc1cdb9cefae653d5df2564ebfd7f949a7cf70",
          "url": "https://github.com/MystenLabs/sui/commit/571e4ca89892cd8bfed2324e56161c0e6f9ea01c"
        },
        "date": 1682459298456,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 144386936,
            "range": "± 5085723",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 364996,
            "range": "± 79768",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andrey@mystenlabs.com",
            "name": "Andrey Chursin",
            "username": "andll"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b52e54d98319b754deac442c17f29d97e02515c9",
          "message": "[execution_driver] Avoid dispatching thread when permit is available immediately (#11269)\n\nUnder high load we see that execution queue has a lot of certificates,\r\nwhile execution tasks are not fully utilized. It is possible that we are\r\nmaxing out on execution dispatch task throughput, this change avoids it\r\nby spawning tasks directly when possible",
          "timestamp": "2023-04-25T22:10:09Z",
          "tree_id": "bcfbb7802e03f88c4106310cc7498e1ec5d8ab71",
          "url": "https://github.com/MystenLabs/sui/commit/b52e54d98319b754deac442c17f29d97e02515c9"
        },
        "date": 1682461357910,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 148372077,
            "range": "± 4740664",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 338701,
            "range": "± 41589",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andrey@mystenlabs.com",
            "name": "Andrey Chursin",
            "username": "andll"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37632af5a1d95d1932dfbe3275abaea312cee468",
          "message": "[sui-node] Stop and wait sui node runtimes on SIGINT (#11323)\n\nThis change makes sure we stop all sui node runtimes upon receiving\r\nSIGINT. This is needed to make sure rocks db databases are properly\r\nclosed before existing sui node",
          "timestamp": "2023-04-25T22:40:41Z",
          "tree_id": "b1327e54cdcfafec802ce7a17f500a298f367d8a",
          "url": "https://github.com/MystenLabs/sui/commit/37632af5a1d95d1932dfbe3275abaea312cee468"
        },
        "date": 1682463031785,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 150324602,
            "range": "± 5002036",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308570,
            "range": "± 22250",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andrey@mystenlabs.com",
            "name": "Andrey Chursin",
            "username": "andll"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1b52e5db66c774030b05384bbe47d4e17d8b6f0c",
          "message": "[sui-node] Capture SIGTERM as well as SIGINT (#11335)\n\nThis PR listens for SIGTERM in addition to SIGINT. This is needed so tha\r\nwe can properly stop and wait background RocksDB threads, to avoid\r\nRocksDB corruption when run inside supervisor (like docker, systemd,\r\netc).\r\n\r\nSee also: https://github.com/MystenLabs/sui/pull/11323",
          "timestamp": "2023-04-25T23:11:41Z",
          "tree_id": "6de11587d3523ef4bcddb5141aeb8838bc724b79",
          "url": "https://github.com/MystenLabs/sui/commit/1b52e5db66c774030b05384bbe47d4e17d8b6f0c"
        },
        "date": 1682464886124,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 156611120,
            "range": "± 6245688",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 382511,
            "range": "± 39454",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "distinct": true,
          "id": "514246ccdcae845ee8e81ac1640cb1c096ffc1fd",
          "message": "Re-enable snapshot tests",
          "timestamp": "2023-04-25T16:15:06-07:00",
          "tree_id": "42fb4918491299b72b09ee638b268925d36f4d3f",
          "url": "https://github.com/MystenLabs/sui/commit/514246ccdcae845ee8e81ac1640cb1c096ffc1fd"
        },
        "date": 1682465095788,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 144531284,
            "range": "± 5244749",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 307620,
            "range": "± 32442",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "630f446c48719c44357f472203acd180f596bb40",
          "message": "Concurrent replay and Epoch replay support (#11272)\n\n## Description \r\n\r\nSetting the stage for higher speed replays and replaying batch from FN\r\nlocal state.\r\nAdded support for replaying checkpoints concurrently.\r\nAdded support for replaying whole epochs.\r\nSimplified code.\r\n\r\n## Test Plan \r\n\r\nManual testing\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-25T19:48:54-04:00",
          "tree_id": "082dd7f83a8b0ee20d486ee4eaca149c20771cef",
          "url": "https://github.com/MystenLabs/sui/commit/630f446c48719c44357f472203acd180f596bb40"
        },
        "date": 1682467223735,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145900883,
            "range": "± 5338099",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 331179,
            "range": "± 90792",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe6ae8484d2df34f7a3b94f3f17ac83deb52fa64",
          "message": "Verify accumulator behavior in sui transactional tests (#11205)\n\nUnfortunately, the transactional tests don't use AuthorityStore, so we\r\nhave to duplicate some logic here, but I think this is well worth it for\r\nthe increased coverage.",
          "timestamp": "2023-04-25T20:41:30-07:00",
          "tree_id": "0dec68d93c43a0a835869d647a919dde2272c9c0",
          "url": "https://github.com/MystenLabs/sui/commit/fe6ae8484d2df34f7a3b94f3f17ac83deb52fa64"
        },
        "date": 1682481245512,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 150811391,
            "range": "± 5056657",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 307561,
            "range": "± 16415",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akihidis@gmail.com",
            "name": "Anastasios Kichidis",
            "username": "akichidis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6429ee94d16af23aa6a92d2dd3a4f5607288f38",
          "message": "[fix] fixing failing randomized tests (#11331)\n\n## Description \r\n\r\nThis PR is fixing an issue on the behaviour of\r\n`this_cert_parents_with_slow_nodes` which is used in randomized tests -\r\nand in other consensus unit tests as well. The method is picking the\r\nparents of a certificate supporting some failure modes (slow nodes). So\r\nbasically , it does pick a subset of the given parents when slow nodes\r\nexist. However, it does not verifying that the parents honour the `2f +\r\n1` requirement by stake. This is now fixed.\r\n\r\nNow the randomized tests [should not\r\nfail](https://github.com/MystenLabs/sui/actions/runs/4793242232) anymore\r\n\r\n## Test Plan \r\n\r\nExisting randomized_tests should not fail.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-26T09:32:10-07:00",
          "tree_id": "b55d7e1f378d7476645406ef27deca6d652507ff",
          "url": "https://github.com/MystenLabs/sui/commit/d6429ee94d16af23aa6a92d2dd3a4f5607288f38"
        },
        "date": 1682527534734,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 152928711,
            "range": "± 4747697",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 345162,
            "range": "± 52445",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1c9f2eb767841ac6248dee0275b74b71f0bb452c",
          "message": "Sui surfer (#11268)\n\nThis PR adds a sui-surfer tool that:\r\n1. It starts a network locally\r\n2. Publishes a package to the network. I wrote a package that contains a\r\nbunch of object related building block entry functions. This is what it\r\npublishes. But we could publish any number of packages to the network.\r\n3. It starts 20 (configurable) independent account threads. Each thread\r\nmanages its gas and owned objects. All threads share an immutable/shared\r\nobject pool (each will contribute to it when new objects are generated).\r\n3. Each thread crawl all entry functions in the network in a random\r\norder, and for each function argument, it attempts to see if it could\r\nmatch an object in the pool, and if so use them. For non-object\r\nprimitive arguments it just generates a random value for it.\r\n4. Uses a strategy pattern, which means that one can plug in a different\r\npattern to decide what functions to call during surfing.",
          "timestamp": "2023-04-26T10:04:16-07:00",
          "tree_id": "59e8ed1919697c915fb0e6695b3fd4b5150161f1",
          "url": "https://github.com/MystenLabs/sui/commit/1c9f2eb767841ac6248dee0275b74b71f0bb452c"
        },
        "date": 1682529269409,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 152050152,
            "range": "± 4661490",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 338786,
            "range": "± 48482",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "51927076+phoenix-o@users.noreply.github.com",
            "name": "phoenix",
            "username": "phoenix-o"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bb28ddd604e4c252b5e7ebc54c4249f3c352d472",
          "message": "[pruner] max transactions in batch (#11348)\n\nreturn back pruner limiting by maximum transactions in a batch",
          "timestamp": "2023-04-26T17:31:46Z",
          "tree_id": "0910c6be6ea2ba00235845151dc9fc24799cabcd",
          "url": "https://github.com/MystenLabs/sui/commit/bb28ddd604e4c252b5e7ebc54c4249f3c352d472"
        },
        "date": 1682530918176,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 149315182,
            "range": "± 8213538",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 313006,
            "range": "± 21584",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106645797+sadhansood@users.noreply.github.com",
            "name": "Sadhan Sood",
            "username": "sadhansood"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "877a3544fdb8a46ac47df81dd8a860d972155323",
          "message": "Start tracking skipped keys during iteration (#11329)\n\n## Description \r\n\r\nRocksDB can tell us the number of tombstones it had to skip during an\r\niteration. A high number of skipped keys is a cause of concern for\r\nperformance and probably requires compaction.\r\n \r\n## Test Plan \r\n\r\nExisting tests",
          "timestamp": "2023-04-26T10:56:15-07:00",
          "tree_id": "4cd92f53db683d451213b24f6ffbc57c25b40b7d",
          "url": "https://github.com/MystenLabs/sui/commit/877a3544fdb8a46ac47df81dd8a860d972155323"
        },
        "date": 1682532368344,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145792703,
            "range": "± 4747049",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308194,
            "range": "± 8036",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "81660174+mwtian@users.noreply.github.com",
            "name": "mwtian",
            "username": "mwtian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "564007c0676aa0da80922480314976a04b656eb2",
          "message": "Add more logs to Narwhal worker startup (#11365)\n\n## Description \r\n\r\nWe have observed validators crashing on restart, because Narwhal worker\r\ndid not finished starting up in 30s. Adding a bit more logs to help\r\nlocate the root cause.\r\n\r\n## Test Plan \r\n\r\nCI\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-26T11:05:51-07:00",
          "tree_id": "214e97bbb02c709997cf4a7821294c5b354102f3",
          "url": "https://github.com/MystenLabs/sui/commit/564007c0676aa0da80922480314976a04b656eb2"
        },
        "date": 1682532969980,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147859664,
            "range": "± 6604319",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 320789,
            "range": "± 23326",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andrey@mystenlabs.com",
            "name": "Andrey Chursin",
            "username": "andll"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca19d3594c7cb8decca1f781df60267221b72cdf",
          "message": "[mysten-common] Introduce AsyncOnceCell (#11366)\n\nThis is somewhat similar to tokio::sync::watch, see doc for\r\n`AsyncOnceCell` for differences.",
          "timestamp": "2023-04-26T11:33:05-07:00",
          "tree_id": "965e6906248281a46e0cf36550a94c0aa0a1d990",
          "url": "https://github.com/MystenLabs/sui/commit/ca19d3594c7cb8decca1f781df60267221b72cdf"
        },
        "date": 1682534570795,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 144016538,
            "range": "± 4749673",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 314344,
            "range": "± 25391",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "2895723+tzakian@users.noreply.github.com",
            "name": "Tim Zakian",
            "username": "tzakian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec85b4a46b4a9c74155aef18ffd99dd4c0bc3cfe",
          "message": "[transaction fuzzer] Fuzz with valid type tags (#11339)\n\nAdds a fuzzer generating random valid type tags, one that uses valid\r\ntype tags but an invalid number of type arguments, and another that\r\ngenerates almost wholly-correct typetags but possibly with some invalid\r\ntype tags.",
          "timestamp": "2023-04-26T11:41:52-07:00",
          "tree_id": "f70e41b60ebcdb50320f936038c1a24376c8514d",
          "url": "https://github.com/MystenLabs/sui/commit/ec85b4a46b4a9c74155aef18ffd99dd4c0bc3cfe"
        },
        "date": 1682535135361,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 155310929,
            "range": "± 4434362",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 384307,
            "range": "± 67550",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andrey@mystenlabs.com",
            "name": "Andrey Chursin",
            "username": "andll"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "879310599dc5733dc296f28458b9170e5d0f451a",
          "message": "[metrics] Measure HistogramReporter::report (#11368)\n\nWe now have quite a few usages of precise histogram (and adding more).\r\nMake sense to keep an eye on how much time we spend on calculations.",
          "timestamp": "2023-04-26T19:03:29Z",
          "tree_id": "316089d70cc28ad7f83ba520a50813f2cba866cb",
          "url": "https://github.com/MystenLabs/sui/commit/879310599dc5733dc296f28458b9170e5d0f451a"
        },
        "date": 1682536458460,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 153788193,
            "range": "± 6726579",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 316058,
            "range": "± 17532",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "2895723+tzakian@users.noreply.github.com",
            "name": "Tim Zakian",
            "username": "tzakian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1dce15b59d28e3882accc3660c6d7976261218be",
          "message": "[package upgrades] change upgrade criteria for struct type params (#11369)",
          "timestamp": "2023-04-26T20:39:18Z",
          "tree_id": "8f3123f283eeb649bb3d67df606a85be58fbb4a6",
          "url": "https://github.com/MystenLabs/sui/commit/1dce15b59d28e3882accc3660c6d7976261218be"
        },
        "date": 1682542113475,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 109054976,
            "range": "± 4225688",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 303540,
            "range": "± 17432",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff3b6bcb85d43421ad98f4827926d788169ffa81",
          "message": "use mystem histogram for some metrics (#11367)\n\n## Description \r\n\r\nas title\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-26T13:49:20-07:00",
          "tree_id": "b6a44df6828514ca7de3d0b60a003683f0a9aa99",
          "url": "https://github.com/MystenLabs/sui/commit/ff3b6bcb85d43421ad98f4827926d788169ffa81"
        },
        "date": 1682542737335,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146510769,
            "range": "± 4927605",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 305978,
            "range": "± 98059",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9e65acce8da236743426c1ece029ffa4667a9a4f",
          "message": "indexer stability: fix package population (#11338)\n\n## Description \r\n\r\nAfter the split, `package` data is actually only available when objects\r\nare fetched, thus we need to index package together with objects rather\r\nthan tx.\r\n\r\n## Test Plan \r\n\r\ntested locally and make sure packages can be populated properly\r\nIn production, I will \r\n```\r\nTRUNCATE objects;\r\n```\r\nand then run with a binary with this fix, it will start backfilling for\r\nboth objects and packages.",
          "timestamp": "2023-04-26T14:01:04-07:00",
          "tree_id": "66d5fb052136c7af016627f732969d68a230e41b",
          "url": "https://github.com/MystenLabs/sui/commit/9e65acce8da236743426c1ece029ffa4667a9a4f"
        },
        "date": 1682543464838,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146651198,
            "range": "± 5158120",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 311922,
            "range": "± 13450",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patrickkuo@me.com",
            "name": "Patrick Kuo",
            "username": "patrickkuo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9c23e8d55c56692319fef39c4cdd6ee6c6ac0dcd",
          "message": "pass in tokio runtime and handle drop correctly (#11357)",
          "timestamp": "2023-04-26T14:07:50-07:00",
          "tree_id": "6c20894844023d9cbab9d48e74193f3b3f7ddd84",
          "url": "https://github.com/MystenLabs/sui/commit/9c23e8d55c56692319fef39c4cdd6ee6c6ac0dcd"
        },
        "date": 1682543873524,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 150444607,
            "range": "± 5853057",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 312600,
            "range": "± 21187",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b586653b88bc54c9befc4ff3f1db03f57f83335",
          "message": "log rpc error code (#11377)\n\n## Description \r\n\r\nTo reduce cardinality.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-26T14:21:33-07:00",
          "tree_id": "fb930d8a7b00227ebf854cb479df351d4a09afb7",
          "url": "https://github.com/MystenLabs/sui/commit/6b586653b88bc54c9befc4ff3f1db03f57f83335"
        },
        "date": 1682544686926,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147251675,
            "range": "± 4575482",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 319838,
            "range": "± 20560",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5be6d99f1a17cb67a86db87b7426096850128f8",
          "message": "add network identifier and send to telemetry (#11346)\n\n## Description \r\n\r\nDescribe the changes or additions included in this PR.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-26T22:07:17Z",
          "tree_id": "dd1bad739a24cc3b2b68a840ec26be95add0a6c2",
          "url": "https://github.com/MystenLabs/sui/commit/f5be6d99f1a17cb67a86db87b7426096850128f8"
        },
        "date": 1682547406320,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147035924,
            "range": "± 4208168",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 327649,
            "range": "± 88511",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "81660174+mwtian@users.noreply.github.com",
            "name": "mwtian",
            "username": "mwtian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "53a427908a26c4ea309d14cc20b92781d6068abe",
          "message": "Upgrade Rust docker image version (#11387)\n\n## Description \r\n\r\nDocker image version was not updated.\r\n\r\n## Test Plan \r\n\r\nCI\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-26T22:18:48Z",
          "tree_id": "09c067135847cbbbe44e0e68c6f2432f1ebe4b0c",
          "url": "https://github.com/MystenLabs/sui/commit/53a427908a26c4ea309d14cc20b92781d6068abe"
        },
        "date": 1682548141702,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 148792216,
            "range": "± 4620663",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 311885,
            "range": "± 16930",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8c037734e417a3269ef2d94f2e05582b89d8b853",
          "message": "rpc: add ref gas price to epoch (#11388)\n\n## Description \r\n\r\nPer request from FE team, add gas price field to Epoch data rpc type\r\n\r\n## Test Plan \r\n\r\nlocal run to make sure that rpc call of get_epochs will return gas price\r\nas well.\r\n```\r\ncurl --location --request POST http://127.0.0.1:3030 \\\r\n--header 'Content-Type: application/json' \\\r\n--data-raw '{\r\n    \"jsonrpc\": \"2.0\",\r\n    \"id\": 1,\r\n    \"method\": \"suix_getEpochs\",\r\n    \"params\": []\r\n}' | jq\r\n...\r\n        \"epochTotalTransactions\": \"0\",\r\n        \"firstCheckpointId\": \"9770\",\r\n        \"epochStartTimestamp\": \"1682528442321\",\r\n        \"endOfEpochInfo\": null,\r\n        \"referenceGasPrice\": null\r\n```",
          "timestamp": "2023-04-26T15:49:33-07:00",
          "tree_id": "e328f28be5f885b34f86f1789086e8ef8e4031a7",
          "url": "https://github.com/MystenLabs/sui/commit/8c037734e417a3269ef2d94f2e05582b89d8b853"
        },
        "date": 1682549869008,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 105961133,
            "range": "± 4592442",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 304140,
            "range": "± 32331",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90a1c044b8e1da767e4cea449556738a936dcc94",
          "message": "indexer stability: re-enable move call population (#11384)\n\n## Description \r\n\r\nmove calls are still used by Explorer move call metrics\r\n\r\n## Test Plan \r\n\r\nTest locally and make sure that only move calls can be populated while\r\nothers are not.",
          "timestamp": "2023-04-26T15:49:53-07:00",
          "tree_id": "28af6fbcf4950ecdebe125309b4ce7655c1a8f0e",
          "url": "https://github.com/MystenLabs/sui/commit/90a1c044b8e1da767e4cea449556738a936dcc94"
        },
        "date": 1682549972636,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 153335854,
            "range": "± 5084349",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 337444,
            "range": "± 41998",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8f648f0bb22828b92761387a65d2296b9ad0242c",
          "message": "Shut down the sim node when SuiNodeHandle is dropped.  (#11383)\n\nFixes memory leak in multi-iteration tests\r\n\r\n## Description \r\n\r\nDescribe the changes or additions included in this PR.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-26T22:51:01Z",
          "tree_id": "54d201dbd17780e85ac6f050853dce6c3aed3419",
          "url": "https://github.com/MystenLabs/sui/commit/8f648f0bb22828b92761387a65d2296b9ad0242c"
        },
        "date": 1682550034298,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 149240404,
            "range": "± 5135984",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 307511,
            "range": "± 10763",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "williamprincesmith@gmail.com",
            "name": "William Smith",
            "username": "williampsmith"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05f0b9d72c7547154fe41d252958b23728f0359f",
          "message": "Log running consistency checks (#11385)\n\n## Description \r\n\r\n## Test Plan \r\n\r\n👀 + 🧪 \r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-26T16:00:07-07:00",
          "tree_id": "188218f56d39c55179a5481a93246ff2f062e87e",
          "url": "https://github.com/MystenLabs/sui/commit/05f0b9d72c7547154fe41d252958b23728f0359f"
        },
        "date": 1682550612280,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 155459909,
            "range": "± 4791859",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 378793,
            "range": "± 74069",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emma@mystenlabs.com",
            "name": "Emma Zhong",
            "username": "emmazzz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a31938134082d918b15d511da40997d66971b8f4",
          "message": "fix flaky safe mode reconfig test (#11391)\n\n## Description \r\n\r\nChange the override to take in a start and end epoch instead.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-27T00:22:08Z",
          "tree_id": "19ee97e10177bbfa267b368955c8f83ec91c2d26",
          "url": "https://github.com/MystenLabs/sui/commit/a31938134082d918b15d511da40997d66971b8f4"
        },
        "date": 1682555510053,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147709915,
            "range": "± 4403907",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 392970,
            "range": "± 65985",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "2895723+tzakian@users.noreply.github.com",
            "name": "Tim Zakian",
            "username": "tzakian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3c5d52b5e182440760c2fce8a7e16695a08b7cb8",
          "message": "[transaction fuzzer] Add bounds testing within programmable transactions (#11394)",
          "timestamp": "2023-04-26T18:40:39-07:00",
          "tree_id": "8e0e26a64e8030fc872cbb201f5f948414d20e30",
          "url": "https://github.com/MystenLabs/sui/commit/3c5d52b5e182440760c2fce8a7e16695a08b7cb8"
        },
        "date": 1682560245955,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 160704045,
            "range": "± 5033535",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 379366,
            "range": "± 43811",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "127570466+wlmyng@users.noreply.github.com",
            "name": "wlmyng",
            "username": "wlmyng"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9c416d4557e42e8ac16be17e93430a636ac5310e",
          "message": "with_tracing to instrument info or error logs (#11324)\n\n## Description \r\n\r\nWrapper function to help instrument info or error logs. info logs are\r\nstill subject to sampling, but error logs will always log.\r\n\r\n```\r\ncurl --location 'http://127.0.0.1:9000' \\\r\n--header 'Content-Type: application/json' \\\r\n--data '{\r\n    \"method\": \"suix_getDynamicFieldObject\",\r\n    \"jsonrpc\": \"2.0\",\r\n    \"params\": [\r\n        \"0x7d1237b9f8ab28ce64322b1f7b09d18909205a55c0f301f36838abbbfb234516\",\r\n        {\r\n            \"type\": \"address\",\r\n            \"value\": \"0x82d7715ff1213dbfd740b5761133c6b7b19d5a5d1e1854d74ba6be53b36a9ca0\"\r\n        }\r\n    ],\r\n    \"id\": 1\r\n}'\r\n```\r\n```\r\n2023-04-25T19:55:34.558917Z ERROR connection{remote_addr=127.0.0.1:63470 conn_id=6}:get_dynamic_field_object{parent_object_id=0x7d1237b9f8ab28ce64322b1f7b09d18909205a55c0f301f36838abbbfb234516 name=DynamicFieldName { type_: Address, value: String(\"0x82d7715ff1213dbfd740b5761133c6b7b19d5a5d1e1854d74ba6be53b36a9ca0\") }}: sui_json_rpc::indexer_api: get_dynamic_field_object failed: Call(Failed(Cannot find dynamic field [DynamicFieldName { type_: Address, value: String(\"0x82d7715ff1213dbfd740b5761133c6b7b19d5a5d1e1854d74ba6be53b36a9ca0\") }] for object [0x7d1237b9f8ab28ce64322b1f7b09d18909205a55c0f301f36838abbbfb234516].))\r\n```\r\n\r\n\r\n```\r\ncurl --location 'http://127.0.0.1:9000' \\\r\n--header 'Content-Type: application/json' \\\r\n--data '{\r\n    \"jsonrpc\": \"2.0\",\r\n    \"method\": \"suix_getOwnedObjects\",\r\n    \"params\": [\r\n        \"0xadfb89b000e97a30bd485bffbff80f883096a8a98cdce33641ec924393d8fbe8\",\r\n        {\r\n            \"options\": {\r\n                \"showType\": true,\r\n                \"showOwner\": false,\r\n                \"showPreviousTransaction\": false,\r\n                \"showDisplay\": false,\r\n                \"showContent\": true,\r\n                \"showBcs\": false,\r\n                \"showStorageRebate\": false\r\n            }\r\n        }\r\n    ],\r\n    \"id\": 1\r\n}'\r\n```\r\n\r\n```\r\n2023-04-25T19:56:01.066520Z  INFO connection{remote_addr=127.0.0.1:63477 conn_id=12}:get_owned_objects{address=0xadfb89b000e97a30bd485bffbff80f883096a8a98cdce33641ec924393d8fbe8 query=Some(SuiObjectResponseQuery { filter: None, options: Some(SuiObjectDataOptions { show_type: true, show_owner: false, show_previous_transaction: false, show_display: false, show_content: true, show_bcs: false, show_storage_rebate: false }) }) cursor=None limit=None}:multi_get_objects{object_ids=[] options=Some(SuiObjectDataOptions { show_type: true, show_owner: false, show_previous_transaction: false, show_display: false, show_content: true, show_bcs: false, show_storage_rebate: false })}: sui_json_rpc::read_api: multi_get_objects\r\n```\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-26T21:19:49-07:00",
          "tree_id": "4a8f0e00c1e69e1fbfb57b37b7407322af5d8c0f",
          "url": "https://github.com/MystenLabs/sui/commit/9c416d4557e42e8ac16be17e93430a636ac5310e"
        },
        "date": 1682569774762,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 148640330,
            "range": "± 4720566",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 320377,
            "range": "± 73488",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "127570466+wlmyng@users.noreply.github.com",
            "name": "wlmyng",
            "username": "wlmyng"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "39b55e8bfd503bf2e46604bb2c0117b97767138a",
          "message": "new DynamicFieldNotFound error (#11356)\n\n## Description \r\nIf a DynamicFieldName is not found on a parent object, return\r\nSuiObjectResponse error response instead of stock RpcResult error\r\nPreviously:\r\n```\r\ncurl --location 'http://127.0.0.1:9000' \\\r\n--header 'Content-Type: application/json' \\\r\n--data '{\r\n    \"method\": \"suix_getDynamicFieldObject\",\r\n    \"jsonrpc\": \"2.0\",\r\n    \"params\": [\r\n        \"0x12d392ea9753ca2313e3f954fe2deadca0eda906e158e0901bacca21501b0398\",\r\n        {\r\n            \"type\": \"address\",\r\n            \"value\": \"0x672ed3533decef3721c463b599f934cce4d13c894dd9f14d2f65d773ce604f21\"\r\n        }\r\n    ],\r\n    \"id\": 1\r\n}'\r\n{\"jsonrpc\":\"2.0\",\"error\":{\"code\":-32000,\"message\":\"Cannot find dynamic field [DynamicFieldName { type_: Address, value: String(\\\"0x672ed3533decef3721c463b599f934cce4d13c894dd9f14d2f65d773ce604f21\\\") }] for object [0x12d392ea9753ca2313e3f954fe2deadca0eda906e158e0901bacca21501b0398].\"},\"id\":1}%    \r\n```\r\nNow:\r\n```\r\ncurl --location 'http://127.0.0.1:9000' \\\r\n--header 'Content-Type: application/json' \\\r\n--data '{\r\n    \"method\": \"suix_getDynamicFieldObject\",\r\n    \"jsonrpc\": \"2.0\",\r\n    \"params\": [\r\n        \"0x12d392ea9753ca2313e3f954fe2deadca0eda906e158e0901bacca21501b0398\",\r\n        {\r\n            \"type\": \"address\",\r\n            \"value\": \"0x672ed3533decef3721c463b599f934cce4d13c894dd9f14d2f65d773ce604f21\"\r\n        }\r\n    ],\r\n    \"id\": 1\r\n}'\r\n{\"jsonrpc\":\"2.0\",\"result\":{\"error\":{\"code\":\"dynamicFieldNotFound\",\"parent_object_id\":\"0x12d392ea9753ca2313e3f954fe2deadca0eda906e158e0901bacca21501b0398\"}},\"id\":1}%  \r\n```\r\n\r\nNote: chose not to include the dynamicFieldName itself as\r\nDynamicFieldName.value is a serde_json object that does not appear to\r\n`#[derive(Hash)]` which is required by `SuiObjectResponseError`. And\r\nit's in the client call anyways.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-26T22:14:33-07:00",
          "tree_id": "8f4795d69cc5bad45b8e148adb946312f8730e8c",
          "url": "https://github.com/MystenLabs/sui/commit/39b55e8bfd503bf2e46604bb2c0117b97767138a"
        },
        "date": 1682573122396,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 110401512,
            "range": "± 5600324",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 349917,
            "range": "± 26021",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emma@mystenlabs.com",
            "name": "Emma Zhong",
            "username": "emmazzz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e5379b521f20824ca528e18d311d8e63b3af851",
          "message": "[tx fuzzer] add rgp tests (#11325)\n\n## Description \r\n\r\nAdd fuzzing tests that start up an authority state with random reference\r\ngas price values and process transactions.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-27T07:07:49Z",
          "tree_id": "0009ceb190d31f4a342f26f1b25b5c1b98030f31",
          "url": "https://github.com/MystenLabs/sui/commit/5e5379b521f20824ca528e18d311d8e63b3af851"
        },
        "date": 1682579836736,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146591526,
            "range": "± 4486719",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 313839,
            "range": "± 13781",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "51927076+phoenix-o@users.noreply.github.com",
            "name": "phoenix",
            "username": "phoenix-o"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "081cd51e76f3d930b4147b36cded71b2bf4c0b37",
          "message": "[pruner] revert 9ae7afbf6a20466b23cd7d90a46280d284ef9f2f (#11397)\n\nthis PR:\r\n* reverts\r\nhttps://github.com/MystenLabs/sui/commit/9ae7afbf6a20466b23cd7d90a46280d284ef9f2f\r\n* disables multi_get objects call in environments that do not have\r\nindirect objects",
          "timestamp": "2023-04-27T07:52:04-07:00",
          "tree_id": "8d5384581b87859b728d6b1d44265b32c944405b",
          "url": "https://github.com/MystenLabs/sui/commit/081cd51e76f3d930b4147b36cded71b2bf4c0b37"
        },
        "date": 1682607682153,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 109527796,
            "range": "± 6736483",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 310634,
            "range": "± 8056",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "51927076+phoenix-o@users.noreply.github.com",
            "name": "phoenix",
            "username": "phoenix-o"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "524c109514650662ba19f62e304306a758f28048",
          "message": "[pruner] delay first execution (#11415)",
          "timestamp": "2023-04-27T10:19:56-07:00",
          "tree_id": "cd55d039d22cf122a2a608a3327a484a431df727",
          "url": "https://github.com/MystenLabs/sui/commit/524c109514650662ba19f62e304306a758f28048"
        },
        "date": 1682616708527,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145547311,
            "range": "± 6588881",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 309316,
            "range": "± 21759",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "maria@mystenlabs.com",
            "name": "Maria Siopi",
            "username": "siomari"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aa6f9faf895b4ad1726d488f03a59588f467f893",
          "message": "Add conversions keytool (#11250)\n\n## Description \r\n\r\nAdd conversions:\r\n-hex<>base64\r\n-base64<>bytearray\r\n-hex<>bytearray\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-27T20:27:28+03:00",
          "tree_id": "6ad6fd82712c282080f53758a2d45b314741ebd3",
          "url": "https://github.com/MystenLabs/sui/commit/aa6f9faf895b4ad1726d488f03a59588f467f893"
        },
        "date": 1682617043062,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 149648337,
            "range": "± 5058403",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 371771,
            "range": "± 47126",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "76067158+666lcz@users.noreply.github.com",
            "name": "Chris Li",
            "username": "666lcz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "334a7f1e19bbf81548e1a61aaa4728f9afe408a4",
          "message": "[rpc] wrap multi_get_transaction_blocks with spawn async (#11414)\n\n## Description \r\n\r\nLoad testing shows that there's some perf regression in\r\n`multi_get_transaction_blocks` after\r\nhttps://github.com/MystenLabs/sui/pull/10913 because some of the\r\nblocking queries such as computing object/balance changes are not\r\nwrapped in spawn_async. This also impacts the perf for\r\n`query_transaction_blocks` which also uses\r\n`multi_get_transaction_blocks` under the hood.\r\n\r\n## Next steps\r\nAudit rest of the codebase and make sure all blocking calls are wrapped\r\nin spawn_async\r\n\r\n## Test Plan \r\n\r\nTested against loadgen client and observed that performance regression\r\nis gone\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-27T17:55:14Z",
          "tree_id": "24ee1ff2fc45d6ed127b8b7190f23f14c1936a04",
          "url": "https://github.com/MystenLabs/sui/commit/334a7f1e19bbf81548e1a61aaa4728f9afe408a4"
        },
        "date": 1682618687944,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 153694870,
            "range": "± 4779345",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 317552,
            "range": "± 32131",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106645797+sadhansood@users.noreply.github.com",
            "name": "Sadhan Sood",
            "username": "sadhansood"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "95463a9ff22da72feb0fc850341966cd39b0cad2",
          "message": "Prune and compact checkpoints before upload (#11343)\n\n## Description \r\n\r\nAs title says, we are enabling a config which allows us to prune objects\r\nand invoke compaction on the objects table before uploading the snapshot\r\nto s3.\r\n## Test Plan \r\n\r\nEnhanced current unit tests.",
          "timestamp": "2023-04-27T20:07:29Z",
          "tree_id": "ab21bb09eeea0e18e4b7ab87da2392d9f3218300",
          "url": "https://github.com/MystenLabs/sui/commit/95463a9ff22da72feb0fc850341966cd39b0cad2"
        },
        "date": 1682626773308,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 105725177,
            "range": "± 3717455",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 343045,
            "range": "± 21611",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "distinct": true,
          "id": "f88e450c28ddabe0d0686cb70f6f291d12028430",
          "message": "[TestInfra] Consolidate WalletContext gas code (#11392)\n\nThis PR moves all the gas object read code using wallet context into\r\nWalletContext.",
          "timestamp": "2023-04-27T13:32:58-07:00",
          "tree_id": "395db168b6317d9b85f46a7d52320bf52c3ece7d",
          "url": "https://github.com/MystenLabs/sui/commit/f88e450c28ddabe0d0686cb70f6f291d12028430"
        },
        "date": 1682628164222,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 148567786,
            "range": "± 4218436",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 319165,
            "range": "± 55819",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abd46dbf0c6b0aa1c9f3c3fb1bc62bfe3786c8c7",
          "message": "Limit Move identifier length (#11413)\n\n## Description \r\n\r\nLimits lengths of Move identifiers to 128.\r\nBumps protocol config to 9.\r\n\r\n## Test Plan \r\n\r\nUnit tests\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-27T21:39:46Z",
          "tree_id": "9d126b6a215f68420106b4a7de22277f24b9b4a5",
          "url": "https://github.com/MystenLabs/sui/commit/abd46dbf0c6b0aa1c9f3c3fb1bc62bfe3786c8c7"
        },
        "date": 1682632244347,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 140608310,
            "range": "± 5007916",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 318799,
            "range": "± 18980",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106645797+sadhansood@users.noreply.github.com",
            "name": "Sadhan Sood",
            "username": "sadhansood"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d394f8f67ca74dd557fdba972c25fab18965ba4",
          "message": "Fix checkpoint store used in db checkpoint handler (#11434)\n\n## Description \r\n\r\nAs title says\r\n## Test Plan \r\n\r\nExisting",
          "timestamp": "2023-04-27T22:38:42Z",
          "tree_id": "abda2fd6f3b4be2b679ec8bf7d61caf44c05bd40",
          "url": "https://github.com/MystenLabs/sui/commit/4d394f8f67ca74dd557fdba972c25fab18965ba4"
        },
        "date": 1682635716600,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146444313,
            "range": "± 4694172",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 365770,
            "range": "± 54763",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "118224482+ronny-mysten@users.noreply.github.com",
            "name": "ronny-mysten",
            "username": "ronny-mysten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "081776165193a623895b01c97287a467f51a26ef",
          "message": "Examples for API ref (#11281)\n\n## Description \r\n\r\nExamples for rpc api ref. Resubmitting PR to capture updates made to Sui\r\nrepo since previous submission. A few additional examples added since\r\nthen, too.\r\n\r\n## Test Plan \r\n\r\nLocally\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-27T17:21:29-06:00",
          "tree_id": "69fb4b699b184027471685da630e1740f31e3a03",
          "url": "https://github.com/MystenLabs/sui/commit/081776165193a623895b01c97287a467f51a26ef"
        },
        "date": 1682638221159,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 108171576,
            "range": "± 3332580",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 325544,
            "range": "± 24746",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0aacca3192f9e17016dae4e38171f35e4fa7f215",
          "message": "Split out ExecutionStatus from messages.rs (#11431)\n\nmessages.rs is growing too much. It's time to split it into smaller\r\nfiles.\r\nThere is no functional change but to move ExecutionStatus related types\r\nto a separate fle.",
          "timestamp": "2023-04-27T17:00:59-07:00",
          "tree_id": "b9e9ecb7abc8f29c4c45a568614c9e7826acc4da",
          "url": "https://github.com/MystenLabs/sui/commit/0aacca3192f9e17016dae4e38171f35e4fa7f215"
        },
        "date": 1682640879921,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147584210,
            "range": "± 4691947",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 315898,
            "range": "± 18493",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tmn@mystenlabs.com",
            "name": "Todd Nowacki",
            "username": "tnowacki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eaed49f03e22c680ee39094392f3147585144801",
          "message": "[move] Ban extraneous module bytes and metadata (#11393)\n\n## Description \r\n\r\n- Ban extraneous module bytes\r\n- Ban metadata\r\n\r\n## Test Plan \r\n\r\n- New tests \r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-28T00:48:07Z",
          "tree_id": "94e33074c23bfe3fbadc5b3b73624ebfb2eba3f3",
          "url": "https://github.com/MystenLabs/sui/commit/eaed49f03e22c680ee39094392f3147585144801"
        },
        "date": 1682643492363,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146370101,
            "range": "± 4566426",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 327274,
            "range": "± 17995",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ashok@mystenlabs.com",
            "name": "Ashok Menon",
            "username": "amnn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7915de5319955de4f87c908a445c5f4076a98190",
          "message": "[sui-transaction-builder] Remove dependency on sui-adapter (#11163)\n\n## Description\r\n\r\nRemove logic in the transaction builder that relies on the execution\r\nlayer, namely:\r\n\r\n- Type checking move call parameters, which other SDKs do not do, and is\r\ncomplicated by execution versioning.\r\n- Preventing calls to non-entry functions in `Normal` execution mode\r\n(which is not longer a restriction with the introduction of programmable\r\ntransactions).\r\n\r\nThis removes the dependency on `sui-adapter` from `sui-json` and\r\n`sui-sdk`.\r\n\r\n## Test Plan\r\n\r\n```\r\n$ cargo simtest\r\n$ env SUI_SKIP_SIMTESTS=1 cargo nextest run\r\n```\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [x] user-visible impact\r\n- [x] breaking change for a client SDKs\r\n- [x] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n- `unsafe_moveCall` and `unsafe_batchTransaction` now ignore their\r\n`execution_mode` parameter, and always allow calls to non-entry\r\nprogrammable transactions.\r\n- Rust SDK no longer performs type resolution and checks (matching\r\nbehaviour with TypeScript SDK).",
          "timestamp": "2023-04-27T19:13:27-07:00",
          "tree_id": "36ba6e75b5d83fc39c7e4380e3a3ec57e02eb160",
          "url": "https://github.com/MystenLabs/sui/commit/7915de5319955de4f87c908a445c5f4076a98190"
        },
        "date": 1682648590452,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146299831,
            "range": "± 5159403",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 324684,
            "range": "± 20745",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "damirka.ru@gmail.com",
            "name": "Damir Shamanaev",
            "username": "damirka"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d2ef9071d8bda02d624b3892f759e1d297e3007",
          "message": "[kiosk] Adds delist function to kiosk + security patches (#11378)\n\n## Description \r\n\r\nAdds missing `delist` function to the Kiosk.\r\n\r\n## Test Plan \r\n\r\nIncludes tests for the delist function + type checking.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\n- adds `kiosk::delist` function to remove a listing\r\n- adds `kiosk::has_item_with_type<T>` to check if an item exists and its\r\ntype T\r\n- fixes the issue allowing tx sender to choose arbitrary `T` in some\r\nfunctions",
          "timestamp": "2023-04-28T08:39:31Z",
          "tree_id": "db281d5ecc8a9324205971bd001ae9481b918694",
          "url": "https://github.com/MystenLabs/sui/commit/4d2ef9071d8bda02d624b3892f759e1d297e3007"
        },
        "date": 1682671960453,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 150422791,
            "range": "± 5118757",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 579905,
            "range": "± 51214",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "105368040+xydas97@users.noreply.github.com",
            "name": "xydas97",
            "username": "xydas97"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "699c8f7c7382b800af0eff187ddc6831d4d7c229",
          "message": "[Sui-sdk] Expose get_checkpoints method to rust sdk (#11419)\n\n## Description \r\n\r\nExpose get_checkpoints method to rust sdk\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-28T17:04:44+03:00",
          "tree_id": "970f1ad882a1c1b8384cbf737a747b8cc6e51b9a",
          "url": "https://github.com/MystenLabs/sui/commit/699c8f7c7382b800af0eff187ddc6831d4d7c229"
        },
        "date": 1682691346301,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 104289275,
            "range": "± 8072276",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 309017,
            "range": "± 24368",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aschran@mystenlabs.com",
            "name": "Andrew Schran",
            "username": "aschran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f7f2c57e99324790c84ebe165017cd1f20cb05b3",
          "message": "Bump narwhal network's max_idle_timeout. (#11463)",
          "timestamp": "2023-04-28T17:42:51Z",
          "tree_id": "799e01975c199d32d5eb77597eeea7c096de917a",
          "url": "https://github.com/MystenLabs/sui/commit/f7f2c57e99324790c84ebe165017cd1f20cb05b3"
        },
        "date": 1682704350915,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145891584,
            "range": "± 4926197",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 337082,
            "range": "± 83111",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8916d0ff4dcb08c6278d216ebc1466ceb87f82f",
          "message": "Move advance_to_highest_supported_protocol_version to version 9 to track release branch mishap (#11445)",
          "timestamp": "2023-04-28T11:01:40-07:00",
          "tree_id": "25b9efd05872ee2b7d6c85c2342979074c2157f8",
          "url": "https://github.com/MystenLabs/sui/commit/e8916d0ff4dcb08c6278d216ebc1466ceb87f82f"
        },
        "date": 1682705486282,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 149340843,
            "range": "± 4643003",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 382550,
            "range": "± 38343",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jonas-lj@users.noreply.github.com",
            "name": "Jonas Lindstrøm",
            "username": "jonas-lj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "16d1b6fa6260f0f7d5a4f367ec0c92e6aa54fec6",
          "message": "Optimise ecdsa over secp256r1 (#11410)",
          "timestamp": "2023-04-28T14:29:07-04:00",
          "tree_id": "cd6f6164899f7a1eba34d3863b3e0c4e96d6df63",
          "url": "https://github.com/MystenLabs/sui/commit/16d1b6fa6260f0f7d5a4f367ec0c92e6aa54fec6"
        },
        "date": 1682707166379,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 148366220,
            "range": "± 4781278",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 372425,
            "range": "± 33505",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd7418c65f9775e8cec08848eb3401613ba612b7",
          "message": "indexer stability: epoch commit fix (#11465)\n\n## Description \r\n\r\n- move epoch commit from tx to obj commit\r\n- move epoch tx count from checkpoint handling to obj\r\n\r\n## Test Plan \r\n\r\nThis has been used to backfill mainnnet data and worked well;\r\nAlso tested locally",
          "timestamp": "2023-04-28T12:28:58-07:00",
          "tree_id": "ff19def84b5532995ad2cbbba2cbaabb6aa99dfd",
          "url": "https://github.com/MystenLabs/sui/commit/bd7418c65f9775e8cec08848eb3401613ba612b7"
        },
        "date": 1682710756764,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 156380813,
            "range": "± 5247166",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 478079,
            "range": "± 43798",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "123408603+healthydeve@users.noreply.github.com",
            "name": "Jian Lu",
            "username": "healthydeve"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "188d24981fb3771798d84fa8606d8dc56430f3fa",
          "message": "[node] adding error handling and also piping length from config (#11337)\n\n## Description \r\n\r\nMoved from constant length to new length allowed in protocol verifier\r\n\r\n## Test Plan \r\n\r\nLocally,\r\n\r\nTODO: check on write\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-28T15:33:04-04:00",
          "tree_id": "9a0dacdbb716c5b29ffb0e81eb4698791aec4107",
          "url": "https://github.com/MystenLabs/sui/commit/188d24981fb3771798d84fa8606d8dc56430f3fa"
        },
        "date": 1682710984936,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147913326,
            "range": "± 4927591",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 315087,
            "range": "± 24990",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patrickkuo@me.com",
            "name": "Patrick Kuo",
            "username": "patrickkuo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec34d4b84ba3766650391e6181084d1c762f966b",
          "message": "[bugfix] - do not return balance and object change if local execution failed (#11466)\n\n## Description \r\n\r\ndo not return balance and object change if local execution failed",
          "timestamp": "2023-04-28T12:34:17-07:00",
          "tree_id": "2b4c62b2ed9c8f3dace1fc12600226256813a7e4",
          "url": "https://github.com/MystenLabs/sui/commit/ec34d4b84ba3766650391e6181084d1c762f966b"
        },
        "date": 1682711048840,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145622453,
            "range": "± 5655755",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 310623,
            "range": "± 10918",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patrickkuo@me.com",
            "name": "Patrick Kuo",
            "username": "patrickkuo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e5f6d393d6060cff92e9aa67d8ed3f094a6eb196",
          "message": "add get validators apy endpoint (#11293)\n\n## Description \r\n\r\nAdded a new endpoint `suix_getValidatorsApy` to get the list of APY for\r\nall active validators.\r\nthe APY is calculated using the current staking pool and 30 days staking\r\npool exchange rate\r\n\r\nthis PR also added cache for validator exchange rate, which will be\r\nrepopulated when epoch change, `get_states` method will be using this\r\ncache instead of resolving the rate from move tables to improve the read\r\nperformance.\r\n\r\n## Test Plan \r\n\r\nTested manually on testnet\r\n```\r\n{\r\n    \"jsonrpc\": \"2.0\",\r\n    \"result\": {\r\n        \"apys\": [\r\n            {\r\n                \"address\": \"0x44b1b319e23495995fc837dafd28fc6af8b645edddff0fc1467f1ad631362c23\",\r\n                \"apy\": 0.03927171044129407\r\n            },\r\n            {\r\n                \"address\": \"0x3d618b03660f4e8b4ec99c52af08a814f5248154937782d22b5a8f2e44ba15fc\",\r\n                \"apy\": 0.03927182250212513\r\n            },\r\n            {\r\n                \"address\": \"0x24e8511a01aa7ab06eb8ce61d6c002ac5b8b7e0fde809554ca3662fb184ce257\",\r\n                \"apy\": 0.03927171891132608\r\n            },\r\n            {\r\n                \"address\": \"0x4ce8d9d329879f3b361c9515f48acc0f91b283a7305f6c9c789b0c8d1ebf43f2\",\r\n                \"apy\": 0.039271936185637735\r\n            },\r\n            {\r\n                \"address\": \"0x4c05f4f76ed81d210e9a29ac0756c7a3129e4b9ecacbbb9fc1579505947630cf\",\r\n                \"apy\": 0.039272011483796776\r\n            },\r\n            {\r\n                \"address\": \"0x6881875df60daf5528d66a62b66dc5710bf06b220fa9266ffdfeeb9cd8d6ed94\",\r\n                \"apy\": 0.039271851914000955\r\n            },\r\n            {\r\n                \"address\": \"0xab4fb3eeaa7b0ab4f91eedab33adf140c6750e60ca5e44b3df82491937d7bab4\",\r\n                \"apy\": 0.039271687290090895\r\n            },\r\n            {\r\n                \"address\": \"0x2079cb58f32c868deb0f4f20f509b7f034c7bea84c964cb1316f77fc987445b8\",\r\n                \"apy\": 0.03927190475122777\r\n            },\r\n            {\r\n                \"address\": \"0xaaec0462f9286f2aa9db25143eaa428cc6527b1ef669772b40b011983837de77\",\r\n                \"apy\": 0.03927179016703497\r\n            },\r\n            {\r\n                \"address\": \"0xf941ae3cbe5645dccc15da8346b533f7f91f202089a5521653c062b2ff10b304\",\r\n                \"apy\": 0.03927192198581797\r\n            },\r\n            {\r\n                \"address\": \"0x2622b55585033f26b0a86b378de1a6284c2dda531e52ef30ea87a8df81f4630a\",\r\n                \"apy\": 0.03927168099244316\r\n            },\r\n            {\r\n                \"address\": \"0x43ff72d09170ab4712d7bf26f0475d7f94f60f7076d5da9ebcfe7dde87faf2a7\",\r\n                \"apy\": 0.039271755979213285\r\n            },\r\n            {\r\n                \"address\": \"0x9062fc51d91056246dc31f2b818a4ddb113a044ec22c8dd0674616bbe56f7192\",\r\n                \"apy\": 0.039271682672775476\r\n            },\r\n...\r\n```",
          "timestamp": "2023-04-28T12:33:56-07:00",
          "tree_id": "415cfb91e80a65356aed00f8e59c527700d21191",
          "url": "https://github.com/MystenLabs/sui/commit/e5f6d393d6060cff92e9aa67d8ed3f094a6eb196"
        },
        "date": 1682711055218,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 150986019,
            "range": "± 4523398",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 328390,
            "range": "± 23221",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aschran@mystenlabs.com",
            "name": "Andrew Schran",
            "username": "aschran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d6fd7126051771231c74ebe70f18c255fafa583",
          "message": "Refactor checkpoint contents download flow in state sync (#11433)\n\n## Description \r\n\r\n- Adds tx concurrency limit to complement checkpoint count concurrency\r\nlimit.\r\n- Continuously starts new `GetCheckpointContents` requests up to the\r\nlimit instead of doing this in chunked batches.\r\n\r\n## Test Plan \r\n\r\nUnit tests",
          "timestamp": "2023-04-28T20:36:06Z",
          "tree_id": "f058386f1e71627fe0c9ba77ccfc6b5dc84b957a",
          "url": "https://github.com/MystenLabs/sui/commit/9d6fd7126051771231c74ebe70f18c255fafa583"
        },
        "date": 1682714675302,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 102226602,
            "range": "± 3078774",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 305211,
            "range": "± 9771",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106645797+sadhansood@users.noreply.github.com",
            "name": "Sadhan Sood",
            "username": "sadhansood"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "452f3c3358612acdbac50967d1fba83ec11dfb01",
          "message": "Filter empty log files during snapshot upload (#11470)\n\n## Description \r\n\r\nRocksDB leaves empty .log files after compaction which fails during\r\nupload to S3 with errors like:\r\n```\r\n Generic S3 error: Error performing put request epoch_0/store/perpetual/000059.log: response error \\\"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\n<Error><Code>MissingContentLength</Code><Message>You must provide the Content-Length HTTP header.</Message><RequestId>PHNPR5VQNTY0GW4Y</RequestId><HostId>D08UaQcJIVUVKFwpo3MrwLAYYqHWNM1FQxHSZfcNiCwkU0cTN0PPN+x+2ot6g1Q+hQ+cuVIsrTw=</HostId></Error>\\\r\n```\r\nAdding a filter for such files, as they are also unused during restore.\r\nAlso updated the deletion of old checkpoints to directly invoke delete\r\non the directory vs doing it file by file earlier by using object store\r\ndelete functionality.\r\n\r\n## Test Plan \r\n\r\nVerified with a restore.",
          "timestamp": "2023-04-28T13:49:09-07:00",
          "tree_id": "e2f55d6d494bc34dd4aecb3d361f80dba01921bd",
          "url": "https://github.com/MystenLabs/sui/commit/452f3c3358612acdbac50967d1fba83ec11dfb01"
        },
        "date": 1682715548311,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 141213950,
            "range": "± 5974533",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 375056,
            "range": "± 58551",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patrickkuo@me.com",
            "name": "Patrick Kuo",
            "username": "patrickkuo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "750655cac733de21d95afee01fc33f35ce85c4ec",
          "message": "[rpc] - improve get_states performance  (#11334)\n\nuse multi get instead of using get object read in a loop to reduce\r\nget_stakes latency.\r\nalso added extra metrics",
          "timestamp": "2023-04-28T14:04:49-07:00",
          "tree_id": "71d7b2cc5f0cfb882f406d043c17742e93d81f49",
          "url": "https://github.com/MystenLabs/sui/commit/750655cac733de21d95afee01fc33f35ce85c4ec"
        },
        "date": 1682716474483,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 142201257,
            "range": "± 4978235",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 475702,
            "range": "± 82411",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "108701016+joyqvq@users.noreply.github.com",
            "name": "Joy Wang",
            "username": "joyqvq"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f8b5ad9aaecc3c4b30a060ec5e00bdad9ba75a93",
          "message": "doc: Add page for signatures and crypto agility (#11347)\n\n## Description \r\n\r\nadd more docs. i find the signature requirement is hard to find (the\r\noffline signing page is more of a practical and concrete example) so i\r\ncreated a new page for sui-signatures. it fits well to discuss crypto\r\nagility as well.\r\n\r\n## Test Plan \r\n\r\nn/a\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-28T15:02:38-07:00",
          "tree_id": "9293432ce6a413a26f4296f95970c286d16610f3",
          "url": "https://github.com/MystenLabs/sui/commit/f8b5ad9aaecc3c4b30a060ec5e00bdad9ba75a93"
        },
        "date": 1682720020454,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 102278689,
            "range": "± 5733882",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308588,
            "range": "± 17346",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patrickkuo@me.com",
            "name": "Patrick Kuo",
            "username": "patrickkuo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "deb8d58f5faa2a745e086c04699d97a47c08f62e",
          "message": "do not fail the request if objects are pruned for object and balance change (#11476)\n\n## Description \r\n\r\nas titled.\r\n\r\nTested on testnet:\r\n\r\nrequest\r\n```\r\n{\r\n  \"jsonrpc\": \"2.0\",\r\n  \"id\": 1,\r\n  \"method\": \"sui_getTransactionBlock\",\r\n  \"params\": [\"Cgww1sn7XViCPSdDcAPmVcARueWuexJ8af8zD842Ff43\", {\"showBalanceChanges\": true, \"showObjectChanges\":true}]\r\n}\r\n```\r\n\r\nresponse:\r\n```\r\n{\r\n    \"jsonrpc\": \"2.0\",\r\n    \"result\": {\r\n        \"digest\": \"Cgww1sn7XViCPSdDcAPmVcARueWuexJ8af8zD842Ff43\",\r\n        \"timestampMs\": \"1679936400000\",\r\n        \"checkpoint\": \"0\",\r\n        \"errors\": [\r\n            \"Cannot retrieve balance changes: Error checking transaction input objects: ObjectNotFound { object_id: 0x0000000000000000000000000000000000000000000000000000000000000002, version: Some(SequenceNumber(1)) }\",\r\n            \"Cannot retrieve object changes: Error checking transaction input objects: ObjectNotFound { object_id: 0x0000000000000000000000000000000000000000000000000000000000000002, version: Some(SequenceNumber(1)) }\"\r\n        ]\r\n    },\r\n    \"id\": 1\r\n}\r\n```",
          "timestamp": "2023-04-28T15:18:24-07:00",
          "tree_id": "9aeb2b1a2f2a2758dbb52d8e4cfafa90f15c1c00",
          "url": "https://github.com/MystenLabs/sui/commit/deb8d58f5faa2a745e086c04699d97a47c08f62e"
        },
        "date": 1682720873200,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 141035582,
            "range": "± 5170530",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 311619,
            "range": "± 20269",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "damirka.ru@gmail.com",
            "name": "Damir Shamanaev",
            "username": "damirka"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "313c3701bbb07e8aeb5b027b96a68bd6073de662",
          "message": "[framework] Deprecate CurrencyCreated event (#11480)\n\n## Description \r\n\r\nDeprecates CurrencyCreated event - it's no longer emitted.\r\n\r\n## Test Plan \r\n\r\nTests pass, change is minor.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\n- coin::CurrencyCreated event is no longer emitted, CoinMetadata can be\r\nused instead\r\n\r\n---------\r\n\r\nCo-authored-by: Brandon Williams <brandon@mystenlabs.com>",
          "timestamp": "2023-04-28T22:49:42Z",
          "tree_id": "c4d530ae9116ab429c369866d6c498c2cbcd2e6a",
          "url": "https://github.com/MystenLabs/sui/commit/313c3701bbb07e8aeb5b027b96a68bd6073de662"
        },
        "date": 1682722776872,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147089113,
            "range": "± 5410396",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 333271,
            "range": "± 35462",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tmn@mystenlabs.com",
            "name": "Todd Nowacki",
            "username": "tnowacki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "411fd70107ae3f997105351abdd2fcb1e25799d0",
          "message": "[move][test] Fix test code counting (#11488)\n\n## Description \r\n\r\n- Add counting to test only function\r\n- Hardening in the future if it is used outside of tests\r\n\r\n## Test Plan \r\n\r\n\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-28T17:08:56-07:00",
          "tree_id": "320ab8ff098397c1ac7caf9c1c7a05ef07467c9e",
          "url": "https://github.com/MystenLabs/sui/commit/411fd70107ae3f997105351abdd2fcb1e25799d0"
        },
        "date": 1682727534905,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 105394424,
            "range": "± 6426267",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 296096,
            "range": "± 26773",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c5fbb89d0a53f6f18a42e6ad0f195154142a7bf6",
          "message": "HandleCertificateV2 (#11423)\n\n## Description \r\n\r\nDescribe the changes or additions included in this PR.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\n---------\r\n\r\nCo-authored-by: Lu Zhang <8418040+longbowlu@users.noreply.github.com>",
          "timestamp": "2023-04-28T17:16:22-07:00",
          "tree_id": "c0e6cd147eb38e8085fb30c2d4a12a7abc696745",
          "url": "https://github.com/MystenLabs/sui/commit/c5fbb89d0a53f6f18a42e6ad0f195154142a7bf6"
        },
        "date": 1682727983976,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 139326094,
            "range": "± 4419917",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 305959,
            "range": "± 28853",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eugene@mystenlabs.com",
            "name": "Eugene Boguslavsky",
            "username": "ebmifa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e038e62caaabcac4b1f1bd3d64730e0f14c95dd1",
          "message": "Sui v1.0.0 version change (#11468)\n\n## Description \r\nSui v1.0.0 version change\r\n\r\n## Test Plan \r\n👀",
          "timestamp": "2023-04-29T00:33:31Z",
          "tree_id": "d460d71dba3ba129d2a2fdb9958922300a7761b1",
          "url": "https://github.com/MystenLabs/sui/commit/e038e62caaabcac4b1f1bd3d64730e0f14c95dd1"
        },
        "date": 1682728881865,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 107593737,
            "range": "± 7778001",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 346541,
            "range": "± 22176",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106645797+sadhansood@users.noreply.github.com",
            "name": "Sadhan Sood",
            "username": "sadhansood"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8440912aa60c6965ba07266a81ea756a8ad3e635",
          "message": "Fix race in db checkpoints (#11490)\n\n## Description \r\n\r\nAs title says, we can otherwise run into this race which throws an\r\nerror:\r\n\r\nT0 -> Take perpetual snapshot\r\nT1 -> Insert effects\r\nT2 -> Insert checkpoints\r\nT3 -> Take checkpoints snapshot\r\n\r\nLonger term plan is to prune extra effects and checkpoints which are not\r\na part of the current epoch from the snapshot.\r\n \r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-29T01:20:02Z",
          "tree_id": "ada6cf7bda8e9bf235791c05508d1eecc0fadb1c",
          "url": "https://github.com/MystenLabs/sui/commit/8440912aa60c6965ba07266a81ea756a8ad3e635"
        },
        "date": 1682731830155,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 108284974,
            "range": "± 13167948",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 348016,
            "range": "± 25794",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09b2081498366df936abae26eea4b2d5cafb2788",
          "message": "Split out effects from messages.rs (#11479)\n\nmessages.rs is growing too much. Split out TransactionEffects and\r\nrelated structures.\r\nThere are a few more that I would want to split out latter.\r\n\r\n---------\r\n\r\nCo-authored-by: ade <ade@mystenlabs.com>",
          "timestamp": "2023-04-29T04:50:26Z",
          "tree_id": "2670c1bc6e3402c8e1900dd90518d69e92772317",
          "url": "https://github.com/MystenLabs/sui/commit/09b2081498366df936abae26eea4b2d5cafb2788"
        },
        "date": 1682744304520,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 105453049,
            "range": "± 4582723",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308793,
            "range": "± 7911",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "williamprincesmith@gmail.com",
            "name": "William Smith",
            "username": "williampsmith"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9bbbc81537813e335ed0dbba16b2f5e86ff14e40",
          "message": "[CheckpointExecutor] Better logging for missing tx effects (#11482)\n\n## Description \r\n\r\nAs in title \r\n\r\n## Test Plan \r\n\r\nSimtests\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-29T07:56:07-07:00",
          "tree_id": "85cf55a95a6eaec2f3cf35f32e0bb8a8df544f45",
          "url": "https://github.com/MystenLabs/sui/commit/9bbbc81537813e335ed0dbba16b2f5e86ff14e40"
        },
        "date": 1682780767058,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 153455519,
            "range": "± 4791611",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308757,
            "range": "± 75583",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d05b26c372f90b42776554e3046e3f7431cc3582",
          "message": "Add certificate deny config (#11462)\n\nAdd ability for validators to immediately execute a cert to execution\r\nerror without actually executing it, based on either a config or a\r\nhardcoded list.",
          "timestamp": "2023-04-29T18:37:58Z",
          "tree_id": "0f93e0cf5c9c137c100d053156b1263aebbb5bdb",
          "url": "https://github.com/MystenLabs/sui/commit/d05b26c372f90b42776554e3046e3f7431cc3582"
        },
        "date": 1682794257600,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 157839269,
            "range": "± 5029797",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 325724,
            "range": "± 64050",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tmn@mystenlabs.com",
            "name": "Todd Nowacki",
            "username": "tnowacki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e78f315e178fccc40bdf7761c808cb712d6e0aba",
          "message": "[transactional tests] Add support for PT Publish and Upgrade commands  (#11206)\n\n## Description \r\n\r\n- Factored out some shared publishing/upgrading logic\r\n- Added a \"staging\" command for publish to compile a package but use it\r\nin a later command\r\n- Added a set-address command that sets the address via a value or an\r\nobject ID\r\n- Added support for `Publish` and `Upgrade` commands\r\n\r\n## Test Plan \r\n\r\n- Example tests\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-29T11:54:39-07:00",
          "tree_id": "dacd5cb55af4b640f936aedad382b1779f14fb5c",
          "url": "https://github.com/MystenLabs/sui/commit/e78f315e178fccc40bdf7761c808cb712d6e0aba"
        },
        "date": 1682794976442,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 105781783,
            "range": "± 3912643",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 306951,
            "range": "± 22804",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3191244b2b4c3e2440e706d19b1fe79e95aaa0cf",
          "message": "Add node config metrics (#11495)\n\nReport a few metrics based on the NodeConfig, just to give more insights\r\ninto what goes into the node config.",
          "timestamp": "2023-04-29T17:31:07-07:00",
          "tree_id": "f56514f29663017c8e0d3b6bf941d8302b6f110e",
          "url": "https://github.com/MystenLabs/sui/commit/3191244b2b4c3e2440e706d19b1fe79e95aaa0cf"
        },
        "date": 1682815341458,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 106143464,
            "range": "± 5038588",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 260269,
            "range": "± 29352",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7ad12b7436507ddf4e607a165494a31b6b2ef63c",
          "message": "debug log for notify_read_effects (#11512)",
          "timestamp": "2023-04-30T01:50:25Z",
          "tree_id": "54f42bdc4e926ffe6963471353e1ae7d76224b2d",
          "url": "https://github.com/MystenLabs/sui/commit/7ad12b7436507ddf4e607a165494a31b6b2ef63c"
        },
        "date": 1682820014757,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 144534202,
            "range": "± 5157786",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 313014,
            "range": "± 15436",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "81660174+mwtian@users.noreply.github.com",
            "name": "mwtian",
            "username": "mwtian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4300278a2e1dadd846b4c393a670591048dc351b",
          "message": "[CI] reserve additional disk as swap space (#11516)\n\n## Description \r\n\r\nIncrease swap space to accommodate high memory usage during linking.\r\nOther strategies are removing debug info from build artifacts, or\r\nreducing build and test parallelism which are less ideal.\r\n\r\nIt is mentioned that github large runners have\r\n[2040GB](https://docs.github.com/en/actions/using-github-hosted-runners/using-larger-runners)\r\nof disk space but reserving 512GB of swap failed.\r\n\r\n## Test Plan \r\n\r\nBuild passing at\r\nhttps://github.com/MystenLabs/sui/actions/runs/4842516246/jobs/8629516910#step:7:1719\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-29T22:21:19-07:00",
          "tree_id": "17808014a49ef872fe96e50ae7fc07de03fd6f2c",
          "url": "https://github.com/MystenLabs/sui/commit/4300278a2e1dadd846b4c393a670591048dc351b"
        },
        "date": 1682832718248,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 141333621,
            "range": "± 5156004",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 315413,
            "range": "± 13120",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2596ff65c97d611ff2d4c87f6688291744b3305e",
          "message": "Fix checkpoint builder tx sequence wait logging (#11514)\n\nLogging and scope around the actual wait",
          "timestamp": "2023-04-30T05:38:19Z",
          "tree_id": "37fd734a4742635fc10f018b5b4af0aaba7c85de",
          "url": "https://github.com/MystenLabs/sui/commit/2596ff65c97d611ff2d4c87f6688291744b3305e"
        },
        "date": 1682833579720,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 105920489,
            "range": "± 10523779",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 332219,
            "range": "± 32971",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "250221a6defc2fee77dc745b2f7b32a39693208d",
          "message": "Enable expensive checks by default in default network config (#11326)\n\nToday expensive checks are already enabled by default in tests. But not\r\nif say, we are running a release version of sui swarm locally.\r\nThis change enables it by default whenever we use network config builder\r\n(which is either tests or local tools)",
          "timestamp": "2023-04-30T11:54:44-07:00",
          "tree_id": "6c86af6f1003ceb7ee0ce99585e1de5a4ef9aa40",
          "url": "https://github.com/MystenLabs/sui/commit/250221a6defc2fee77dc745b2f7b32a39693208d"
        },
        "date": 1682881647280,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146888850,
            "range": "± 6246845",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 312564,
            "range": "± 17664",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akihidis@gmail.com",
            "name": "Anastasios Kichidis",
            "username": "akichidis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a5a0fa8a8f7680e3bbe7468eb0a08570aa13abe2",
          "message": "[refactor] validator to submit with configurable position and delay step (#11517)\n\n## Description \r\n\r\nProviding the ability to configure the maximum position\r\n(`max_submit_position`) of a validator to submit to consensus. Provided\r\na max position `N`, we guarantee that a validator even if is elected to\r\nsubmit to position `M` , where `M > N`, it will submit on position `N`.\r\n\r\nSimilar, if the `submit_delay_step_millis` property is set, then we\r\nensure that on the consensus adapter the delay step will get overwritten\r\nwith this constant value instead of using the latency observer logic.\r\n\r\n## Test Plan \r\n\r\nAdded unit tests.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-30T20:47:08-07:00",
          "tree_id": "f9e484607727774c5a11bc8d2b58ea677cc449e2",
          "url": "https://github.com/MystenLabs/sui/commit/a5a0fa8a8f7680e3bbe7468eb0a08570aa13abe2"
        },
        "date": 1682913603519,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 143413485,
            "range": "± 4616116",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 309736,
            "range": "± 16243",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "81660174+mwtian@users.noreply.github.com",
            "name": "mwtian",
            "username": "mwtian"
          },
          "distinct": true,
          "id": "cdd4607a546c00aa937302ec06819d28be36cb45",
          "message": "Bump baptiste0928/cargo-install from 1 to 2\n\nBumps [baptiste0928/cargo-install](https://github.com/baptiste0928/cargo-install) from 1 to 2.\n- [Release notes](https://github.com/baptiste0928/cargo-install/releases)\n- [Changelog](https://github.com/baptiste0928/cargo-install/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/baptiste0928/cargo-install/compare/v1...48c92f3d491efa23daace9891498a14c5aaa1afd)\n\n---\nupdated-dependencies:\n- dependency-name: baptiste0928/cargo-install\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-04-30T21:29:51-07:00",
          "tree_id": "269fe768e5160f6a3e2b4ced71ccc5c1bc8f7f7a",
          "url": "https://github.com/MystenLabs/sui/commit/cdd4607a546c00aa937302ec06819d28be36cb45"
        },
        "date": 1682915956820,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146946774,
            "range": "± 4477017",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 359732,
            "range": "± 80716",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b9d2a61b317534e5c504d2981980b5e65e025410",
          "message": "add an admin endpoint to print node config (#11549)\n\n## Description \r\n\r\nAs title \r\n\r\n## Test Plan \r\n\r\ntested locally\r\n\r\n```\r\ncurl 127.0.0.1:49932/node-config | grep package_deny_list\r\n```\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-01T05:21:28Z",
          "tree_id": "f648edb41137bffabe25fe7b2c95a9b10184786e",
          "url": "https://github.com/MystenLabs/sui/commit/b9d2a61b317534e5c504d2981980b5e65e025410"
        },
        "date": 1682918978351,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 106630971,
            "range": "± 3072146",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 350087,
            "range": "± 19712",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "387e72c805c1d8dbd0e337de6fefc881a2b16869",
          "message": "best efforts post quorum cert broadcasting (#11548)\n\n## Description \r\n\r\nWe use best efforts to send tx certs to validators post quorum, with the\r\nhope that this could reduce the chance of slow validators miss their\r\nslot to submit to consensus.\r\n\r\nmeat is https://github.com/MystenLabs/sui/pull/11548/files#r1181387700\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-01T08:50:59Z",
          "tree_id": "09b6c9621471b184344b21e20c9a60b3d193a4b6",
          "url": "https://github.com/MystenLabs/sui/commit/387e72c805c1d8dbd0e337de6fefc881a2b16869"
        },
        "date": 1682931698699,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 152260231,
            "range": "± 5735247",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308215,
            "range": "± 87778",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "damirka.ru@gmail.com",
            "name": "Damir Shamanaev",
            "username": "damirka"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b78962fc6d2e9f09ae3e0a5d06ec940ef9230b0",
          "message": "[deepbook] Deepbook snapshots patch (#11562)\n\n## Description \r\n\r\nReplaces #11550, adds snapshots.\r\n\r\n## Test Plan \r\n\r\n-\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\n---------\r\nCo-authored-by: wiggins-dev <zlnju@outlook.com>",
          "timestamp": "2023-05-01T10:36:53Z",
          "tree_id": "d3b010aca59cd9f5d46ffd291983f4da7a27c311",
          "url": "https://github.com/MystenLabs/sui/commit/6b78962fc6d2e9f09ae3e0a5d06ec940ef9230b0"
        },
        "date": 1682938156181,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 144483479,
            "range": "± 4439987",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 319866,
            "range": "± 18478",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a3559766a161fee531b414384b5e88e5be26b37d",
          "message": "Improve logging when loading epoch start config (#11524)",
          "timestamp": "2023-05-01T07:09:15-07:00",
          "tree_id": "d9b7a42689c968f830f4b027ecf3053d900ea93b",
          "url": "https://github.com/MystenLabs/sui/commit/a3559766a161fee531b414384b5e88e5be26b37d"
        },
        "date": 1682950941999,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 142638731,
            "range": "± 5126475",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 317386,
            "range": "± 22392",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "afff076c09ef3bd0906cce065ecdfe8f0eb3ba17",
          "message": "use mysten histogram in consensus adapter (#11553)\n\n## Description \r\n\r\nTo avoid another metrics disruption, we add new metrics and will delete\r\nold ones later.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-01T09:50:18-07:00",
          "tree_id": "29d46dbae646eb055070926846e20daeb66e4a69",
          "url": "https://github.com/MystenLabs/sui/commit/afff076c09ef3bd0906cce065ecdfe8f0eb3ba17"
        },
        "date": 1682960338320,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 110338170,
            "range": "± 6826894",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 348329,
            "range": "± 29055",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "81660174+mwtian@users.noreply.github.com",
            "name": "mwtian",
            "username": "mwtian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a5d33b4b2c075cd0b16c0ba6f987516f68a771d",
          "message": "[ConsensusAdapter] reduce the min expected consensus latency (#11547)\n\n## Description \r\n\r\np50 consensus latency is < 2s on testnet, so min resubmission latency\r\nshould be lower, e.g. 2s * 1.5 ~ 3s, instead of 5s * 1.5 ~ 7.5s. If the\r\np50 latency increases for various reasons, we rely on `LatencyObserver`\r\nto provide a more accurate value.\r\n\r\n## Test Plan \r\n\r\nCI. Private testnet.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-01T10:10:00-07:00",
          "tree_id": "3314f8c1859164f80679189e523b7d00e9c09a27",
          "url": "https://github.com/MystenLabs/sui/commit/6a5d33b4b2c075cd0b16c0ba6f987516f68a771d"
        },
        "date": 1682961625361,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 158703814,
            "range": "± 5700449",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 343904,
            "range": "± 49444",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "damirka.ru@gmail.com",
            "name": "Damir Shamanaev",
            "username": "damirka"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bbcf24fc2fc543080e18bd05ce1ea29a196bed5d",
          "message": "[deepbook] Adds paranoid checks for quantity (#11571)\n\n## Description \r\n\r\nDescribe the changes or additions included in this PR.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-01T20:12:56+03:00",
          "tree_id": "0ce5d90c886f6e05e0ce27abd2f3fe649fa88cb8",
          "url": "https://github.com/MystenLabs/sui/commit/bbcf24fc2fc543080e18bd05ce1ea29a196bed5d"
        },
        "date": 1682961830354,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 136393786,
            "range": "± 4682659",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 320809,
            "range": "± 31079",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emma@mystenlabs.com",
            "name": "Emma Zhong",
            "username": "emmazzz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d7f7e68ad144cf480f6af6200b9f0ce30dd062d2",
          "message": "[sui-system] add constant for max gas price a validator can set (#11577)\n\n## Description \r\n\r\nRight now the reference gas price can be set to whatever the validators\r\nwant. If it's higher than the `max_gas_price` than no transaction will\r\ngo through. This PR adds asserts to make sure the gas price set by\r\nvalidators is not greater than the max gas price.\r\n\r\n## Test Plan \r\n\r\nAdded a test.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-01T13:06:24-07:00",
          "tree_id": "c7008aa31e95718f91005383e155687ad97348cd",
          "url": "https://github.com/MystenLabs/sui/commit/d7f7e68ad144cf480f6af6200b9f0ce30dd062d2"
        },
        "date": 1682972175366,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 149804030,
            "range": "± 4997397",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 497469,
            "range": "± 32491",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andrey@mystenlabs.com",
            "name": "Andrey Chursin",
            "username": "andll"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f9e72894e27ce13834bcdf717092ab64392e683f",
          "message": "[checkpoints] typo: rename casual->causal (#11595)",
          "timestamp": "2023-05-01T20:56:42Z",
          "tree_id": "97583ff138be472108e6d0ddf9ca90b47faf24b4",
          "url": "https://github.com/MystenLabs/sui/commit/f9e72894e27ce13834bcdf717092ab64392e683f"
        },
        "date": 1682975075591,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 98773051,
            "range": "± 7715162",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 254217,
            "range": "± 21194",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "81660174+mwtian@users.noreply.github.com",
            "name": "mwtian",
            "username": "mwtian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "44773a5ac5b7f5f19a276b218e04792f9332bef0",
          "message": "[ConsensusAdapter] monitor observed latency and submission interval separately (#11584)\n\n## Description \r\n\r\nIt seems currently observed latency is < 5s most of the time, so their\r\nactual values are not exposed via metrics. Re-using the\r\n`sequencing_estimated_latency` metric to expose the observed latency, so\r\nwe can tune the threshold for resubmission better.\r\n\r\n## Test Plan \r\n\r\nCI.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-01T14:24:01-07:00",
          "tree_id": "86263c94198d5a2832bc67274cc08d381b4e34b7",
          "url": "https://github.com/MystenLabs/sui/commit/44773a5ac5b7f5f19a276b218e04792f9332bef0"
        },
        "date": 1682976746761,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 102508953,
            "range": "± 6279413",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 305898,
            "range": "± 41457",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eugene@mystenlabs.com",
            "name": "Eugene Boguslavsky",
            "username": "ebmifa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8cbee8cb15ccac3a6ec265863b0851458926230a",
          "message": "Sui version bump `v1.1.0` (#11594)\n\n## Description \r\nSui version bump to `v1.1.0`\r\n\r\n## Test Plan \r\n👀",
          "timestamp": "2023-05-01T22:29:14Z",
          "tree_id": "a8bbfd3c5f2255d4ce9bf48cdef512975fe9857d",
          "url": "https://github.com/MystenLabs/sui/commit/8cbee8cb15ccac3a6ec265863b0851458926230a"
        },
        "date": 1682980830635,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 155273276,
            "range": "± 4651641",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 453003,
            "range": "± 83990",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ashok@mystenlabs.com",
            "name": "Ashok Menon",
            "username": "amnn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec53be069aa10b669526b9d311f4b865f9653466",
          "message": "[sui-replay] Remove extra newline in diff output (#11607)\n\n## Description\r\n\r\nRemove the extra newline being added after each line in the diff output.\r\n\r\n## Test Plan\r\n\r\nOutput from this command (which forks due to lack of historical objects)\r\nis no longer output on every other line:\r\n\r\n```\r\ncrates/sui-tool$ cargo run replay            \\\r\n  --rpc https://fullnode.testnet.sui.io:443  \\\r\n  tx -t Fr9hm2fYGAz7tTxTVUrbDPR1esH9NUzijoQA2DhHKj9q\r\n```\r\n\r\nOutputs:\r\n\r\n```\r\nOn-chain vs local diff\r\nEffectsForked: Effects for digest Fr9hm2fYGAz7tTxTVUrbDPR1esH9NUzijoQA2DhHKj9q forked with diff\r\n   SuiTransactionBlockEffectsV1 {\r\n       status: Success,\r\n       executed_epoch: 767,\r\n       gas_used: GasCostSummary {\r\n           computation_cost: 1000000,\r\n           storage_cost: 4218000,\r\n...[snip]...\r\n```\r\n\r\nAnd not:\r\n\r\n```\r\nOn-chain vs local diff\r\nEffectsForked: Effects for digest Fr9hm2fYGAz7tTxTVUrbDPR1esH9NUzijoQA2DhHKj9q forked with diff\r\n   SuiTransactionBlockEffectsV1 {\r\n\r\n       status: Success,\r\n\r\n       executed_epoch: 767,\r\n\r\n       gas_used: GasCostSummary {\r\n\r\n           computation_cost: 1000000,\r\n\r\n           storage_cost: 4218000,\r\n\r\n...[snip]...\r\n```",
          "timestamp": "2023-05-01T17:20:11-07:00",
          "tree_id": "fa7c000de8c911c024b5b911b8b29a41c209cc54",
          "url": "https://github.com/MystenLabs/sui/commit/ec53be069aa10b669526b9d311f4b865f9653466"
        },
        "date": 1682987295540,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 104293093,
            "range": "± 4736828",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 302362,
            "range": "± 25844",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patrickkuo@me.com",
            "name": "Patrick Kuo",
            "username": "patrickkuo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2f6abf97636794aece8adcadba68af9c2f59add4",
          "message": "[rpc doc] - fix get_events example bug (#11608)\n\n## Description \r\n\r\n* fix get_events example bug\r\n* added examples for multi_get_objects, multi_get_transaction and\r\nget_validators_apy\r\n\r\nthe following methods example are missing, will be adding them in a few\r\nsubsequence PRs\r\n```\r\nsui_devInspectTransactionBlock\r\nsui_dryRunTransactionBlock\r\nsui_getLoadedChildObjects\r\nsui_getMoveFunctionArgTypes\r\nsui_getNormalizedMoveFunction\r\nsui_getNormalizedMoveModule\r\nsui_getNormalizedMoveModulesByPackage\r\nsui_getNormalizedMoveStruct\r\nsui_tryMultiGetPastObjects\r\nsuix_getDynamicFieldObject\r\nsuix_getDynamicFields\r\nsuix_getLatestSuiSystemState\r\nsuix_getOwnedObjects\r\nsuix_getStakes\r\nsuix_getStakesByIds\r\nsuix_queryEvents\r\nsuix_resolveNameServiceAddress\r\nsuix_resolveNameServiceNames\r\nsuix_subscribeEvent\r\nsuix_subscribeTransaction\r\nunsafe_batchTransaction\r\nunsafe_mergeCoins\r\nunsafe_moveCall\r\nunsafe_pay\r\nunsafe_payAllSui\r\nunsafe_paySui\r\nunsafe_publish\r\nunsafe_requestAddStake\r\nunsafe_requestWithdrawStake\r\nunsafe_splitCoin\r\nunsafe_splitCoinEqual\r\nunsafe_transferObject\r\nunsafe_transferSui\r\n```",
          "timestamp": "2023-05-01T17:21:54-07:00",
          "tree_id": "c2febd5c2032a91788a0f2cf5a1eb1dde9c3b9b1",
          "url": "https://github.com/MystenLabs/sui/commit/2f6abf97636794aece8adcadba68af9c2f59add4"
        },
        "date": 1682987521181,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 155518768,
            "range": "± 7161590",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 474530,
            "range": "± 39377",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4f397e2bcd4faf7bb58f72f4b8e07e21b1cbe042",
          "message": "Protocol upgrade compatibility test mainnet (#11581)",
          "timestamp": "2023-05-02T00:28:56Z",
          "tree_id": "aae6cc945399b96a2b75dc460c86c3f5c8182630",
          "url": "https://github.com/MystenLabs/sui/commit/4f397e2bcd4faf7bb58f72f4b8e07e21b1cbe042"
        },
        "date": 1682987826542,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 106154541,
            "range": "± 8779027",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 306550,
            "range": "± 29889",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ashok@mystenlabs.com",
            "name": "Ashok Menon",
            "username": "amnn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca973e1e32582c0d8a0eb597c6a8dbdc458986f0",
          "message": "[framework] Expose transaction digest to Move (#11606)\n\n## Description\r\n\r\nAs in title\r\n\r\n## Test Plan\r\n\r\n```\r\n$ cargo simtest\r\n$ env SUI_SKIP_SIMTEST=1 cargo nextest run\r\n```\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [x] breaking change for FNs (FN binary must upgrade)\r\n- [x] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\nExpose Transaction Digest to move via `tx_context::digest`",
          "timestamp": "2023-05-01T18:43:47-07:00",
          "tree_id": "317a4ac7f96c97abe711ff55892b829bff633670",
          "url": "https://github.com/MystenLabs/sui/commit/ca973e1e32582c0d8a0eb597c6a8dbdc458986f0"
        },
        "date": 1682992645963,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145504676,
            "range": "± 5367540",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 355981,
            "range": "± 63164",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "123987499+suiwombat@users.noreply.github.com",
            "name": "Joe Hrbek",
            "username": "suiwombat"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "78d738540cf96c537b6d6104d0230c7f2aedb4d9",
          "message": "[sui-proxy/ remove remote_host label] (#11603)\n\nSummary:\r\n\r\n* this causes undesirable behavior with some of our queries when we add\r\nmultiple proxy backends.\r\n* we don't need this data so, lets remove it. It should fall out of\r\nscope from the tsdb in time, without issue.\r\n\r\nTest Plan:\r\n\r\ncargo build\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-01T21:58:12-05:00",
          "tree_id": "84e24bf65807f02b5e0f7d496c525436077b88e0",
          "url": "https://github.com/MystenLabs/sui/commit/78d738540cf96c537b6d6104d0230c7f2aedb4d9"
        },
        "date": 1682996993252,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 152078923,
            "range": "± 5107922",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 396949,
            "range": "± 57823",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f26163beb8f9188764605717b37688e4bd9a9d53",
          "message": "Replay from authority state (#11591)\n\n## Description \r\n\r\n* Previously the entrypoint for replays was in the execution engine at\r\n`sui_adapter::execution_engine::execute_transaction_to_effects_impl`\r\n\r\n* This PR allows replaying from a much earlier point in transaction\r\nexecution `sui_core::authority::AuthorityState::try_execute_immediately`\r\nwhich examines the cert, etc\r\n\r\nThis will allow for more coverage during replays.\r\nOne can specify if the replay tool should use authority with the\r\n`--authority` flag\r\n\r\n```\r\n./target/debug/sui-tool replay --authority  --rpc   https://fullnode.testnet.sui.io:443  tx -t 8SB4pnHhJmUtEq1QvmN6efed9RZ78D8V3mCoMNkxRCwP \r\n2023-05-01T19:43:14.378355Z  INFO sui_replay: Executing tx: 8SB4pnHhJmUtEq1QvmN6efed9RZ78D8V3mCoMNkxRCwP\r\n2023-05-01T19:43:27.543915Z  WARN sui_replay::replay: Object 0x0000000000000000000000000000000000000000000000000000000000000002 at version 0x2 does not exist on RPC server. This might be due to pruning. Historical replays might not work\r\n2023-05-01T19:43:33.068368Z  INFO sui_config::genesis_config: Creating accounts and token allocations...\r\n2023-05-01T19:43:33.802197Z  INFO sui_core::authority::authority_store: Starting SUI conservation check. This may take a while..\r\n2023-05-01T19:43:33.858056Z  INFO sui_core::authority::authority_store: Scanned 37 live objects, took 55.819584ms\r\n2023-05-01T19:43:33.858371Z  INFO sui_core::authority::authority_store: Total SUI amount in the network: 10000000000000000000, storage fund balance: 0, total storage rebate: 0 at beginning of epoch 0\r\n2023-05-01T19:43:33.859483Z  INFO sui_protocol_config: restoring override fn\r\n2023-05-01T19:43:34.302349Z  INFO sui_core::authority::authority_per_epoch_store: in_memory_checkpoint_roots = true\r\n2023-05-01T19:43:34.582598Z  INFO sui_core::authority: current protocol version is now ProtocolVersion(9)\r\n2023-05-01T19:43:34.582630Z  INFO sui_core::authority: supported versions are: SupportedProtocolVersions { min: ProtocolVersion(1), max: ProtocolVersion(9) }\r\n2023-05-01T19:43:34.583724Z  INFO sui_core::execution_driver: Starting pending certificates execution process.\r\n2023-05-01T19:43:35.073419Z  INFO sui_core::authority::authority_per_epoch_store: in_memory_checkpoint_roots = true\r\n2023-05-01T19:43:35.399887Z  WARN sui_core::transaction_manager: Ignoring committed certificate from wrong epoch. Expected=0 Actual=774 CertificateDigest=TransactionDigest(8SB4pnHhJmUtEq1QvmN6efed9RZ78D8V3mCoMNkxRCwP)\r\n2023-05-01T19:43:35.429747Z  INFO typed_store::rocks: Returning the cf metric logging task for DBMap: transaction_cert_signatures\r\n2023-05-01T19:43:35.429740Z  INFO typed_store::rocks: Returning the cf metric logging task for DBMap: effects_signatures\r\n```\r\n\r\n## Test Plan \r\n\r\nUsual random sampling.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-02T03:55:31Z",
          "tree_id": "38bc0c44ae835f31814bb94ded50609c6d47d881",
          "url": "https://github.com/MystenLabs/sui/commit/f26163beb8f9188764605717b37688e4bd9a9d53"
        },
        "date": 1683000302346,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147030644,
            "range": "± 4650293",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 316924,
            "range": "± 14571",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8cf7c05c095cfedf993321cfe1dff86edb9c4075",
          "message": "Split more types out of messages.rs (#11556)\n\nThis PR moves around the following types:\r\n1. Move all quorum driver related types out of messages.rs to\r\nquorum_driver_types.rs\r\n2. Move all grpc request and response types to a new file\r\nmessages_grpc.rs\r\n3. Move all consensus messages to a new file messages_consensus.rs\r\n4. Merge ExecutableTransaction and CertificateProof to the same file\r\n\r\nAfter this PR, messages.rs only contains transaction related types.\r\n\r\nNo functional changes. Pure refactoring moving types around.",
          "timestamp": "2023-05-01T21:32:21-07:00",
          "tree_id": "7d9e0ea2a57a2cb12b489f89d6e2fcb1e8dfbef6",
          "url": "https://github.com/MystenLabs/sui/commit/8cf7c05c095cfedf993321cfe1dff86edb9c4075"
        },
        "date": 1683002598453,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 109278613,
            "range": "± 4931339",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308458,
            "range": "± 16225",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kostas@mystenlabs.com",
            "name": "Konstantinos Chalkias",
            "username": "kchalkias"
          },
          "committer": {
            "email": "chalkiaskostas@gmail.com",
            "name": "Kostas Chalkias",
            "username": "kchalkias"
          },
          "distinct": true,
          "id": "10759481d1e3dbb22cc6c51342e76bcebd5c3e94",
          "message": "prefer using individual return statements",
          "timestamp": "2023-05-02T08:57:06-07:00",
          "tree_id": "efc83adfdc99f771bc8ef8d19516d4c4e7e9cc8b",
          "url": "https://github.com/MystenLabs/sui/commit/10759481d1e3dbb22cc6c51342e76bcebd5c3e94"
        },
        "date": 1683043643901,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 144054496,
            "range": "± 4165901",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 315683,
            "range": "± 31644",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "damirka.ru@gmail.com",
            "name": "Damir Shamanaev",
            "username": "damirka"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "63c1966168b07797cdd954c52ce3fa9553a2b090",
          "message": "[framework] Adds vec_set::keys() method (#11623)",
          "timestamp": "2023-05-02T19:58:56+03:00",
          "tree_id": "0ce06d62f638ad9c66c35e80151401bdae02465c",
          "url": "https://github.com/MystenLabs/sui/commit/63c1966168b07797cdd954c52ce3fa9553a2b090"
        },
        "date": 1683047471192,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 152760838,
            "range": "± 37589456",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 522318,
            "range": "± 229166",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "123987499+suiwombat@users.noreply.github.com",
            "name": "Joe Hrbek",
            "username": "suiwombat"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "942876e3670d0296091761dbeee5815109cfc230",
          "message": "[sui-proxy/ use string instead of socketaddr] (#11637)\n\nSummary:\r\n\r\n* we'll convert the string to a tcplistener after serde.\r\n\r\nTest Plan:\r\n\r\ntests\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-02T10:17:44-07:00",
          "tree_id": "42b05cf0efd40e4402610b31fca7666d7799050c",
          "url": "https://github.com/MystenLabs/sui/commit/942876e3670d0296091761dbeee5815109cfc230"
        },
        "date": 1683048478560,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 151941090,
            "range": "± 5215680",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 310811,
            "range": "± 17543",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "81660174+mwtian@users.noreply.github.com",
            "name": "mwtian",
            "username": "mwtian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d7ac39e54534ea687efe8e3a4806ed2a26d123f1",
          "message": "[Checkpoint] add latency metric and read less effects for creation (#11599)\n\n## Description \r\n\r\nAdd a metric to track the latency from Narwhal certificate to finishing\r\ncheckpoint creation.\r\nAlso, try to avoid reading duplicated effects when the effects are\r\nalready roots previously.\r\n\r\n## Test Plan \r\n\r\nCI.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-02T18:05:54Z",
          "tree_id": "53e7630f9bca4e8e4b8fcbecd6e7f3ef7457d8a1",
          "url": "https://github.com/MystenLabs/sui/commit/d7ac39e54534ea687efe8e3a4806ed2a26d123f1"
        },
        "date": 1683051400391,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 142646689,
            "range": "± 4812579",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 318046,
            "range": "± 23771",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ashok@mystenlabs.com",
            "name": "Ashok Menon",
            "username": "amnn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d8535a24d3e4b5926a67496a266afd7a421c799e",
          "message": "[move-cli] Update framework branch in sui move new template (#11614)\n\n## Description\r\n\r\nDifferentiate the branch that node operators build their software off of\r\n(e.g. `mainnet`) from the branch that Move package developers depend on\r\nthe framework at (e.g. `framework/mainnet`).\r\n\r\nThis is to account for the fact that when a protocol version/binary\r\nupgrade includes a framework change, there is a period of time between\r\nwhen the tracking branch for node operators (e.g. `mainnet`) is updated\r\nand when the network performs the protocol upgrade where an attempt to\r\npublish a package that depends on a system package will fail because of\r\ndependency source validation.\r\n\r\nThis PR also introduces some other minor changes to the new package\r\ntemplate:\r\n\r\n- Remove an extraneous space in the `addresses` output.\r\n- Don't include the address for `sui` because it will be inherited from\r\nthe `Sui` dependency automatically.\r\n\r\n## Test Plan\r\n\r\nTest output from `sui move new`\r\n\r\n```\r\ncrates/sui$ cargo run -- --path /tmp/example example\r\ncrates/sui$ cat /tmp/example/Move.toml\r\n[package]\r\nname = \"example\"\r\nversion = \"0.0.1\"\r\n\r\n[dependencies]\r\nSui = { git = \"https://github.com/MystenLabs/sui.git\", subdir = \"crates/sui-framework/packages/sui-framework\", rev = \"framework/testnet\" }\r\n\r\n[addresses]\r\nexample = \"0x0\"\r\n```\r\n\r\nTest script that checks compatibility against localnet:\r\n\r\n```\r\ncrates/sui$ cargo build\r\nsui$ export SUI=$(git rev-parse --show-toplevel)/target/debug/sui\r\nsui$ $SUI genesis -f && $SUI start\r\n\r\n     # In a new terminal session\r\nsui$ export SUI=$(git rev-parse --show-toplevel)/target/debug/sui\r\nsui$ $SUI client switch --env localnet\r\nsui$ ./scripts/check-framework-compat.sh\r\n```\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\nThe revision that the framework used by `$NETWORK` is found it is now\r\n`framework/$NETWORK` and not just `$NETWORK`.",
          "timestamp": "2023-05-02T11:55:03-07:00",
          "tree_id": "cc3b2c8a40c1f4c7280f8f129d2ea82841fcc2ad",
          "url": "https://github.com/MystenLabs/sui/commit/d8535a24d3e4b5926a67496a266afd7a421c799e"
        },
        "date": 1683054502196,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 142704632,
            "range": "± 4975766",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 338832,
            "range": "± 79844",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "81660174+mwtian@users.noreply.github.com",
            "name": "mwtian",
            "username": "mwtian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3f19f40e3a1881364ebb97def58f948249bb5057",
          "message": "[rocksdb] specify blob size threshold per column family (#11428)\n\n## Description \r\n\r\nAllow specifying different blob size threshold per column family. Column\r\nfamilies in per-epoch databases have less worry about size overhead and\r\ncan use a lower blob size threshold.\r\n\r\nAlso increase the write buffer size inside the\r\n`optimize_for_large_values_no_scan()` function as well, so the function\r\ndoes not require calling `optimize_for_write_throughput()` before.\r\n\r\n(not urgent)\r\n\r\n## Test Plan \r\n\r\nCI. Deployed to private testnet.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-02T12:07:16-07:00",
          "tree_id": "d063504070add84ef5b82ff28b31fb98a0cabbad",
          "url": "https://github.com/MystenLabs/sui/commit/3f19f40e3a1881364ebb97def58f948249bb5057"
        },
        "date": 1683055042733,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 139906169,
            "range": "± 5643357",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 311118,
            "range": "± 15592",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tmn@mystenlabs.com",
            "name": "Todd Nowacki",
            "username": "tnowacki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7e198fd9bb41077d0a8bb2f210972953d79721e3",
          "message": "[fmt] Fix checked_arithmetic suppressed fmt and clippy (#11648)\n\n## Description \r\n\r\n- Fixed formatting and clippy hidden by checked_arithmetic\r\n- Additional if-let-else hardening\r\n\r\n## Test Plan \r\n\r\n- nfc\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-02T20:04:04Z",
          "tree_id": "6d983453edef4fb83d21fec3499328c4d26fcd3b",
          "url": "https://github.com/MystenLabs/sui/commit/7e198fd9bb41077d0a8bb2f210972953d79721e3"
        },
        "date": 1683058437783,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 144378659,
            "range": "± 7631431",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 313222,
            "range": "± 17932",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patrickkuo@me.com",
            "name": "Patrick Kuo",
            "username": "patrickkuo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f01da71c43a4f5bb4f295be65350f3c06a1830ad",
          "message": "change APY calculation to include stake_subsidy_start_epoch (#11646)\n\n## Description \r\n\r\nchange APY calculation to use 30 days average of daily APY, also exclude\r\ndata point before `stake_subsidy_start_epoch`\r\n\r\n## Test Plan \r\n\r\nManual testing on testnet\r\n\r\n\r\n```\r\n{\r\n    \"jsonrpc\": \"2.0\",\r\n    \"result\": {\r\n        \"apys\": [\r\n            {\r\n                \"address\": \"0x44b1b319e23495995fc837dafd28fc6af8b645edddff0fc1467f1ad631362c23\",\r\n                \"apy\": 0.06367719923107278\r\n            },\r\n            {\r\n                \"address\": \"0x3d618b03660f4e8b4ec99c52af08a814f5248154937782d22b5a8f2e44ba15fc\",\r\n                \"apy\": 0.0644859486532715\r\n            },\r\n            {\r\n                \"address\": \"0x24e8511a01aa7ab06eb8ce61d6c002ac5b8b7e0fde809554ca3662fb184ce257\",\r\n                \"apy\": 0.06389054258577678\r\n            },\r\n            {\r\n                \"address\": \"0x4c05f4f76ed81d210e9a29ac0756c7a3129e4b9ecacbbb9fc1579505947630cf\",\r\n                \"apy\": 0.06450673689670251\r\n            },\r\n            {\r\n                \"address\": \"0x6881875df60daf5528d66a62b66dc5710bf06b220fa9266ffdfeeb9cd8d6ed94\",\r\n                \"apy\": 0.06450271281790321\r\n            },\r\n            {\r\n                \"address\": \"0xab4fb3eeaa7b0ab4f91eedab33adf140c6750e60ca5e44b3df82491937d7bab4\",\r\n                \"apy\": 0.06389171441107323\r\n            },\r\n            {\r\n                \"address\": \"0x2079cb58f32c868deb0f4f20f509b7f034c7bea84c964cb1316f77fc987445b8\",\r\n                \"apy\": 0.06435875500691252\r\n            },\r\n            {\r\n                \"address\": \"0xaaec0462f9286f2aa9db25143eaa428cc6527b1ef669772b40b011983837de77\",\r\n                \"apy\": 0.0644953761240235\r\n            },\r\n            {\r\n                \"address\": \"0xf941ae3cbe5645dccc15da8346b533f7f91f202089a5521653c062b2ff10b304\",\r\n                \"apy\": 0.06426658468803233\r\n            },\r\n            {\r\n                \"address\": \"0x2622b55585033f26b0a86b378de1a6284c2dda531e52ef30ea87a8df81f4630a\",\r\n                \"apy\": 0.06388688803532751\r\n            },\r\n            {\r\n                \"address\": \"0x43ff72d09170ab4712d7bf26f0475d7f94f60f7076d5da9ebcfe7dde87faf2a7\",\r\n                \"apy\": 0.06433257912493434\r\n            },\r\n            {\r\n                \"address\": \"0x9062fc51d91056246dc31f2b818a4ddb113a044ec22c8dd0674616bbe56f7192\",\r\n                \"apy\": 0.06389736912122047\r\n            },\r\n            {\r\n                \"address\": \"0xc397477d8b445e6295bc34e593b9a95d5d233cec1a8fe3740d0ab86012a460f6\",\r\n                \"apy\": 0.06389143306049831\r\n            },\r\n            {\r\n                \"address\": \"0xae1af1a8f2ab31a01c4552f08e07d6bb01722a0fc3932ef3c1b4cd2e00efdb39\",\r\n                \"apy\": 0.0636996581664304\r\n            },\r\n            {\r\n                \"address\": \"0x22b35a7481fb136e5585c43421cf8ab49d0e219e902dedc40c2778acdcc7bc9c\",\r\n                \"apy\": 0.06369987497328876\r\n            },\r\n            {\r\n                \"address\": \"0xd32da9c87c1164f7c686067067e37cc3bdd8ad3fc7ef62d5f24c5dc908bb5fcb\",\r\n                \"apy\": 0.06429543790329038\r\n            },\r\n            {\r\n                \"address\": \"0x407f2bd2d36f40e57e4b725e7b80d4afc588fd2deb746ad62ccc6ed086798e48\",\r\n                \"apy\": 0.06438211710029564\r\n            },\r\n            {\r\n                \"address\": \"0x2b761dda04b324c8f2aaf8429c0e160aa3772df37d00a37e6ec948aa1efebd1a\",\r\n                \"apy\": 0.06429566198073071\r\n            },\r\n            {\r\n                \"address\": \"0xbc1c3a11c476169457fd4b57b62e0ea17c3f87864d13d2ab2470a12b817e5e93\",\r\n                \"apy\": 0.06445673315770278\r\n            },\r\n            {\r\n                \"address\": \"0x58baf5de9454ce6e6d17ebcf7d31513d700d012f304b16ef02e4a5b187cd9c13\",\r\n                \"apy\": 0.06420046807086355\r\n            },\r\n            {\r\n                \"address\": \"0x51c0c51634393f904cbeed910714943a30a47a6dafaab99c59bdcac2521ba733\",\r\n                \"apy\": 0.06268428814559913\r\n            },\r\n            {\r\n                \"address\": \"0xcd65f892b2cf35c64864151b5f268f627294768fa74f445b30553edfbe50bcd6\",\r\n                \"apy\": 0.06415466449375312\r\n            },\r\n            {\r\n                \"address\": \"0x6d6e9f9d3d81562a0f9b767594286c69c21fea741b1c2303c5b7696d6c63618a\",\r\n                \"apy\": 0.05029878640536349\r\n            },\r\n            {\r\n                \"address\": \"0x88c0bb8c1ceefe9ebba35296cb1d4ef43189e1b66c3fb84bba85321ca414420c\",\r\n                \"apy\": 0.0642935026561264\r\n            },\r\n            {\r\n                \"address\": \"0x155d5e5f1904db5f3a16924d0211b4c34cfcc947f345a1deff1452fc5373fed4\",\r\n                \"apy\": 0.06389261295985307\r\n            },\r\n            {\r\n                \"address\": \"0x3b04afb1540fc9661aaaad152d4b63c5f59807a3da1ee432b3635bd92614d87c\",\r\n                \"apy\": 0.06389702268311954\r\n            },\r\n            {\r\n                \"address\": \"0x884515e99dab69c4c28662149db81ca563ed4c36e0c8ce44a58e40e25a0a64a1\",\r\n                \"apy\": 0.06449947208256572\r\n            },\r\n            {\r\n                \"address\": \"0x3cea1fe33a40499de25d10770da9cdc9fe67122bf11fbe2b5a1133b1e56021d6\",\r\n                \"apy\": 0.06419217807990049\r\n            },\r\n            {\r\n                \"address\": \"0xb750411294aeaf85851623aae6d58f91d057ee1ee14c7954ce29ea2323f79814\",\r\n                \"apy\": 0.06429268425232637\r\n            },\r\n            {\r\n                \"address\": \"0x0a9a3eaa26bfc6f66e47d136f288fa2174d2c43623479896148c94b22ff0c8b5\",\r\n                \"apy\": 0.06370437504593317\r\n            },\r\n            {\r\n                \"address\": \"0xf61e2528ce519e0644703f4da66cacc5180aba728fa76705021b1337c363741d\",\r\n                \"apy\": 0.06419037447310942\r\n            },\r\n            {\r\n                \"address\": \"0x6c21eaf4812308dd6ade04693a75453eeba8da61cce4900e5a6b35e58dbf3557\",\r\n                \"apy\": 0.06456196228372404\r\n            },\r\n            {\r\n                \"address\": \"0xe1fb42ed4790a5f61067ebe63d32dd4189531d619c043929463e9f135dba0afa\",\r\n                \"apy\": 0.06417158230098827\r\n            },\r\n            {\r\n                \"address\": \"0x788fc51bd21e0898e68c106306a9357a7e37416e9b2bfd6a416e56e11393cba6\",\r\n                \"apy\": 0.06428304356313551\r\n            },\r\n            {\r\n                \"address\": \"0xd07503d1bbe8c4dc2b905c70d379ace08e02f809eab131dc9c675cc146246b0c\",\r\n                \"apy\": 0.06420696487430567\r\n            },\r\n            {\r\n                \"address\": \"0x10052a36a52989971951f741b8497e7d93a5ce1a621dd30e0ae7dbef80e6f982\",\r\n                \"apy\": 0.06383863718052575\r\n            },\r\n            {\r\n                \"address\": \"0x1f446cc6caa6dff121d1540568e91e89b7e0d36f6e009522c59265c627ed0361\",\r\n                \"apy\": 0.06446069121202148\r\n            },\r\n            {\r\n                \"address\": \"0xb60d557602fc1913d9e1de30df280a2ab5e4cf9d0ae47ab151972e6f01017866\",\r\n                \"apy\": 0.06416045248586905\r\n            },\r\n            {\r\n                \"address\": \"0xd7601c6697b7eb561b0122708b76b0e74da9fd6d7b66a88527e563783b710004\",\r\n                \"apy\": 0.06420243487216196\r\n            },\r\n            {\r\n                \"address\": \"0xbc3d9f492df168d1f30a2a03c39b3a0f3875d81c4ff34b17c9a732f21b328653\",\r\n                \"apy\": 0.06421517754272452\r\n            },\r\n            {\r\n                \"address\": \"0xce2039cd80188004f995cdfe1360b31d4118bd4257febee958b6c6dcd861131d\",\r\n                \"apy\": 0.06420341519600596\r\n            },\r\n            {\r\n                \"address\": \"0xca5804bfb7e04282122dabc3a20157e2002e539dbab9a8ca6cb1b0f22a5254a2\",\r\n                \"apy\": 0.06420759860924162\r\n            },\r\n            {\r\n                \"address\": \"0xf72a0dc5295a03f8d39ce2b38e050053380ea8c3e1f3be21160ea3bb74b3d784\",\r\n                \"apy\": 0.06419843198507366\r\n            },\r\n            {\r\n                \"address\": \"0x77c2e69f6a03354c2e685a0d5bf49b26cd7efbb61f6b13582a3b3979760a5b23\",\r\n                \"apy\": 0.06420799599544474\r\n            },\r\n            {\r\n                \"address\": \"0x88127002d43aac4a92422b4b35d41e17d72b62d0336751ec52e341c8b8d10ba7\",\r\n                \"apy\": 0.0641921590521337\r\n            },\r\n            {\r\n                \"address\": \"0x531fc96d6a471d5dfe0d8f48a74f8c636af0f9f15900ac1a928a4cac34f1aa0f\",\r\n                \"apy\": 0.06419020900754725\r\n            },\r\n            {\r\n                \"address\": \"0x51653766eaeadac58fef860a588ad34d97e1ed3dd0f7703abd91b8c48fd5f714\",\r\n                \"apy\": 0.063881540853694\r\n            },\r\n            {\r\n                \"address\": \"0x605a355de6d115d4c6d0a4e0386b430581a86eb175bb734a170198c243c7c165\",\r\n                \"apy\": 0.06464032126616373\r\n            },\r\n            {\r\n                \"address\": \"0xf5ce4d13da3c011655b02fa28880b88aa68e1373eb22e385bcfd21cb7c541e56\",\r\n                \"apy\": 0.06454367996660385\r\n            },\r\n            {\r\n                \"address\": \"0x8933942921bd522d69d7af12f875ba4f4963ad01431df8403597dfa8692f417d\",\r\n                \"apy\": 0.06426812133066645\r\n            },\r\n            {\r\n                \"address\": \"0x10d435282b483abb93487d946f18239e445ae81a15fa4b93761160b3ae508a3a\",\r\n                \"apy\": 0.06389549562784066\r\n            },\r\n            {\r\n                \"address\": \"0x5d6c4b01c92fd7d76273e4b818c0dbd16f8ae5e3a46f03910ec847fc8e935073\",\r\n                \"apy\": 0.06429296146215063\r\n            },\r\n            {\r\n                \"address\": \"0x9c4155f9e901324198fc9c737e15e6b14da5b9d2f38243213f115a7d45f3d048\",\r\n                \"apy\": 0.0642451744893266\r\n            },\r\n            {\r\n                \"address\": \"0x0a392298244ca2694098d015b00cf49ae1168118b28d13cb0baafd5884e5559a\",\r\n                \"apy\": 0.06696864976070477\r\n            },\r\n            {\r\n                \"address\": \"0x764c9ed72c944d314290a257b4a88211c8e529257fc2fd00d3cb0b5b5666d8a7\",\r\n                \"apy\": 0.06408637170122725\r\n            },\r\n            {\r\n                \"address\": \"0xd42927d7a446332d9593d359cd1f9a63a719723568f514e65a3f2d0c6d2c6308\",\r\n                \"apy\": 0.0642095865813636\r\n            },\r\n            {\r\n                \"address\": \"0x9336c4c9d891e263cfac99adc397853a7392e5cf84cbd5df92207a57c7fbdadc\",\r\n                \"apy\": 0.06381626353709163\r\n            },\r\n            {\r\n                \"address\": \"0xe228873333285a6c34279c1a0c1b9e00b9b27cb1a803dde6c524f52dfae320ed\",\r\n                \"apy\": 0.0686803060051965\r\n            },\r\n            {\r\n                \"address\": \"0xe70aaff920dd38013abff4469c0632fdae96ee43d8451e767c1bce1201471b9d\",\r\n                \"apy\": 0.06430776536274536\r\n            },\r\n            {\r\n                \"address\": \"0xc64c306856aa14ad8a281e2b54a9a02b742d4485cd677527c377f48a9d12b332\",\r\n                \"apy\": 0.06419273028211317\r\n            },\r\n            {\r\n                \"address\": \"0x85d33c89396aa2fa606b214e8b7804a8f8d254283db7aed7c87ebca2f898462a\",\r\n                \"apy\": 0.06442428833485356\r\n            },\r\n            {\r\n                \"address\": \"0x18fed7071bb90b5f2093f7ded14874b5fabe7e32b8ac01f353ebfc002ba4fedf\",\r\n                \"apy\": 0.0642598000174871\r\n            },\r\n            {\r\n                \"address\": \"0xe0ecd8bb71c889b1bb6de0d1ce31fb4b8ee4f5de93a4f24c84e1f0af46a80f5a\",\r\n                \"apy\": 0.06389680571663087\r\n            },\r\n            {\r\n                \"address\": \"0xa020639deea73801fd9e7227a91d959446553c5f3c703f97ea6d57122bee9868\",\r\n                \"apy\": 0.06381579483648374\r\n            },\r\n            {\r\n                \"address\": \"0x986e642d1aef8a8174ee2da51a629383e8d807a1dd6417d1c7df58185d28f734\",\r\n                \"apy\": 0.0642096444926484\r\n            },\r\n            {\r\n                \"address\": \"0x9275c6e27c1ce98b08edb3d88e71880520aa114fbf3745d333252f7a47672882\",\r\n                \"apy\": 0.06370258106229555\r\n            },\r\n            {\r\n                \"address\": \"0x5de0810e785b33127446f752b00a67c04b834fbc375aba3037274fadf4c9ba46\",\r\n                \"apy\": 0.06388608616695013\r\n            },\r\n            {\r\n                \"address\": \"0x163f66f793f03ac3f309fc97058f5997283ccbdf92e4d4fa3323d290801375d8\",\r\n                \"apy\": 0.06420223290706073\r\n            },\r\n            {\r\n                \"address\": \"0x520289e77c838bae8501ae92b151b99a54407288fdd20dee6e5416bfe943eb7a\",\r\n                \"apy\": 0.030894384587994806\r\n            },\r\n            {\r\n                \"address\": \"0x1522781514015f10f4d4d98b77204f04a79f7a7f7d2c23ecb81eba99f39e4b60\",\r\n                \"apy\": 0.06421236539303407\r\n            },\r\n            {\r\n                \"address\": \"0x0cf761fee0542dbdad239aacd91a868ee9eadd3f68dc9aaa9554e5a653f9fe2d\",\r\n                \"apy\": 0.06421431903774306\r\n            },\r\n            {\r\n                \"address\": \"0xdf2dda5c0d8f86a950bd9aeed1ef68a13048505298e0031ae867c1445299f050\",\r\n                \"apy\": 0.06519410478251837\r\n            },\r\n            {\r\n                \"address\": \"0xba4d20899c7fd438d50b2de2486d08e03f34beb78a679142629a6baacb88b013\",\r\n                \"apy\": 0.06870470441210123\r\n            },\r\n            {\r\n                \"address\": \"0x6ac8c08225b9d54e32d314056e20d9da2283289236b6fa1f06a8c801b4957171\",\r\n                \"apy\": 0.06420343713694031\r\n            },\r\n            {\r\n                \"address\": \"0x70977fada000eb0da05483191f19de7cda9a9aa63db18d17bb55c69756b8454e\",\r\n                \"apy\": 0.06421947500058987\r\n            },\r\n            {\r\n                \"address\": \"0xf95ef0315cdf53688337437622fda6f854389d898c02ce9423be393cdde063de\",\r\n                \"apy\": 0.06389784041176003\r\n            },\r\n            {\r\n                \"address\": \"0xec2f944506291b18f7c7143317df63b738581894a12695daab6af35358174655\",\r\n                \"apy\": 0.06388881050623908\r\n            },\r\n            {\r\n                \"address\": \"0x9370070960e294f92c1427ed0a814605476155fa6452d59de16ed5c38c4746f9\",\r\n                \"apy\": 0.06421520839599339\r\n            },\r\n            {\r\n                \"address\": \"0x2ade594485fb795616b74156c91097ec517a05ac488364dd3ad1ec5f536db3f4\",\r\n                \"apy\": 0.06644187738546438\r\n            },\r\n            {\r\n                \"address\": \"0x07fffa5cb91c8522b6a5d57b8fda97deb803238b23dc3b0a3b3b723546483098\",\r\n                \"apy\": 0.06421324246893255\r\n            },\r\n            {\r\n                \"address\": \"0xc304e3d55fee31e7612a135ab4f3c48ca71ae332c0081afcf546d4e92bcfde34\",\r\n                \"apy\": 0.06370677080281482\r\n            },\r\n            {\r\n                \"address\": \"0x07466289c5f00ce745b24336a0efac170d8811379a62b2b87458126a9636bc3e\",\r\n                \"apy\": 0.0638892129318431\r\n            },\r\n            {\r\n                \"address\": \"0x72169c90b7ea87f8101285c849c09cacced9968f83aa30786dad546bb94c78ab\",\r\n                \"apy\": 0.06429211775242547\r\n            },\r\n            {\r\n                \"address\": \"0xbfaf08e600526abe628f4f5351278de290268c81c8ccd0217d6bd302e9645617\",\r\n                \"apy\": 0.06437915882806111\r\n            },\r\n            {\r\n                \"address\": \"0x4f9791d5c689306862b4eb9a25914c5433b7dfd5cb4827b461f7dfc813f28a7c\",\r\n                \"apy\": 0.06421800884365342\r\n            },\r\n            {\r\n                \"address\": \"0x1d451f7dd59b0ed8bdfbdcb8a0307a1e7285ba2ae7efaee45baffa2a1ee3b47f\",\r\n                \"apy\": 0.06370534150355646\r\n            },\r\n            {\r\n                \"address\": \"0x5c1b16b520fccd546b21e67d4e457bbf9579010f2f7090409561a011c8d15c05\",\r\n                \"apy\": 0.0645868705039813\r\n            },\r\n            {\r\n                \"address\": \"0xef2576680cb79c981db9a1e78484461cc3871ac1314bb434ab99cb982a6c6fc2\",\r\n                \"apy\": 0.06421884247389681\r\n            },\r\n            {\r\n                \"address\": \"0x1877ffe212141e1b59c71e80a12fea8150590495ddb67b5154c10a998731f393\",\r\n                \"apy\": 0.06383651175390241\r\n            },\r\n            {\r\n                \"address\": \"0x7293d297ac499c7c7d2e4db00015f7c2a9dfe51385368d869e7c8cf727b2febf\",\r\n                \"apy\": 0.06765317329938855\r\n            },\r\n            {\r\n                \"address\": \"0x9e0f392d794c167a8745d14e0aad21e4900865d59e669bebf18fc654349833fc\",\r\n                \"apy\": 0.07241679895645393\r\n            },\r\n            {\r\n                \"address\": \"0x2081a93bcf642f5964e1f5c4b84e2a22801a62d0137e03d0311ee317163cd27a\",\r\n                \"apy\": 0.06862313871797839\r\n            },\r\n            {\r\n                \"address\": \"0x89afed39dde1ce7d5f1c78f8c832e254b75e7c13ddf5158fa460e46416bd8f00\",\r\n                \"apy\": 0.06006170948281884\r\n            },\r\n            {\r\n                \"address\": \"0x8ffaea5d47a38291e5dd390b6d4c40fd3b1f17864aec217a2f808d8f1ca9b26b\",\r\n                \"apy\": 0.06465441506135745\r\n            },\r\n            {\r\n                \"address\": \"0x8c2feb7de11ec9ca97bdede1c0f8018d4564cc7e015cc57ef863708bbb6bb031\",\r\n                \"apy\": 0.06580730869094088\r\n            },\r\n            {\r\n                \"address\": \"0xb88d7b5d8a48a2d37438fc3eaf1170541880c9b3070e87d9a6dcbfc1ef991dfc\",\r\n                \"apy\": 0.06441475068669297\r\n            },\r\n            {\r\n                \"address\": \"0x421b21543d1c8aba69deb9ba4bf1cf7e5313ebe0e3ad606339378bb8a33ff7da\",\r\n                \"apy\": 0.06440442954348491\r\n            }\r\n        ],\r\n        \"epoch\": \"772\"\r\n    },\r\n    \"id\": 10\r\n}\r\n```",
          "timestamp": "2023-05-02T13:18:26-07:00",
          "tree_id": "3eb466369e1a413b3068fb00275e0875ea8e36ea",
          "url": "https://github.com/MystenLabs/sui/commit/f01da71c43a4f5bb4f295be65350f3c06a1830ad"
        },
        "date": 1683059353665,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 148529480,
            "range": "± 5131827",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 327695,
            "range": "± 78413",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "81660174+mwtian@users.noreply.github.com",
            "name": "mwtian",
            "username": "mwtian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "84bf6e399caaecff91fd716f2e5d58d27737df3f",
          "message": "Add additional monitored scopes to time executions (#11660)\n\n## Description \r\n\r\nThese monitored scopes provide more information on execution, e.g. time\r\nspent on reading input and actual executions, vs committing the results.\r\n\r\n## Test Plan \r\n\r\nCI. Deployed a more detailed version to private testnet.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-02T16:35:35-07:00",
          "tree_id": "6db358673a89a233931aeeeea2edc5f65b2ec99f",
          "url": "https://github.com/MystenLabs/sui/commit/84bf6e399caaecff91fd716f2e5d58d27737df3f"
        },
        "date": 1683071058561,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 109754626,
            "range": "± 6167506",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 257981,
            "range": "± 15523",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "108701016+joyqvq@users.noreply.github.com",
            "name": "Joy Wang",
            "username": "joyqvq"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b12ae273ea82e75005217e2133d0025a1e0b0ab2",
          "message": "keytool: show phrase in command output (#11699)\n\n## Description \r\n\r\nshow output in keytool command to match `sui client new-address`\r\n\r\n## Test Plan \r\n\r\ntarget/debug/sui keytool generate ed25519\r\n\r\nCreated new keypair for address wrote to file path\r\n\"0x26526b4396bb01cf6762c3f9d756bb19692e1b30dbd8779579848a5eaf92e9d5.key\"\r\nwith scheme ED25519:\r\n[0x26526b4396bb01cf6762c3f9d756bb19692e1b30dbd8779579848a5eaf92e9d5]\r\nSecret Recovery Phrase : [visa enact radio buzz dial helmet enlist speak\r\nweapon census million leaf]\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-03T13:56:41-04:00",
          "tree_id": "9a55e61b9152f3979eb4a5c41eacd69c14e16086",
          "url": "https://github.com/MystenLabs/sui/commit/b12ae273ea82e75005217e2133d0025a1e0b0ab2"
        },
        "date": 1683137262222,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 139971898,
            "range": "± 5387608",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308594,
            "range": "± 16290",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106645797+sadhansood@users.noreply.github.com",
            "name": "Sadhan Sood",
            "username": "sadhansood"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dad2a431bfa2cf19d9e967d3067b5f7b54040005",
          "message": "Take db snapshot after epoch start config is added to db (#11700)\n\n## Description \r\n\r\nBefore this PR, we would snapshot before epoch start config is added for\r\nthe next epoch. Which would mean a restored snapshot would start in the\r\ncurrent epoch and then reconfigure (and run accumulator again which\r\nbreaks with aggressive snapshot because we also aggressively prune the\r\nsnapshots).\r\n\r\n## Test Plan \r\n\r\nUpdated integration test to use aggressive pruning.",
          "timestamp": "2023-05-03T11:46:29-07:00",
          "tree_id": "15a10846ebc812678571cf2d905db3e2f5951f9c",
          "url": "https://github.com/MystenLabs/sui/commit/dad2a431bfa2cf19d9e967d3067b5f7b54040005"
        },
        "date": 1683140194864,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145516813,
            "range": "± 4443002",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 310598,
            "range": "± 21734",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "202954621793b112d9d70bc7f033e1fe04f406ee",
          "message": "Increase move verifier timeout & add metrics (#11714)\n\n## Description \r\n\r\nIncreases the verifier timeout limits, adds test\r\nAdds metrics and metrics tests\r\n\r\n## Test Plan \r\n\r\nUnit tests\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\n---------\r\n\r\nCo-authored-by: Ashok Menon <ashok@mystenlabs.com>",
          "timestamp": "2023-05-03T17:15:34-04:00",
          "tree_id": "317e7c2936f68e4344745d97918b0442f42064e2",
          "url": "https://github.com/MystenLabs/sui/commit/202954621793b112d9d70bc7f033e1fe04f406ee"
        },
        "date": 1683149399880,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 155828007,
            "range": "± 4564697",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 390131,
            "range": "± 23150",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "123987499+suiwombat@users.noreply.github.com",
            "name": "Joe Hrbek",
            "username": "suiwombat"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1c5968e1f466b5dffa647e742f1c5b232df13243",
          "message": "[sui-proxy/add debug logging] (#11716)\n\nDescription\r\n* add debug logging for the inventory_hostname so we can, if we wish,\r\nlog what host is hitting what proxy.\r\n* this was previously in the metric labels but caused too many\r\ndimensions\r\n\r\nTest Plan \r\n* cargo build/test/fmt/clippy\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-03T22:43:14Z",
          "tree_id": "32c259a51e9a6ed89cc86cb2ef5b1aefb4ea7632",
          "url": "https://github.com/MystenLabs/sui/commit/1c5968e1f466b5dffa647e742f1c5b232df13243"
        },
        "date": 1683154655043,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146121716,
            "range": "± 4768286",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 322394,
            "range": "± 41855",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "laura@mystenlabs.com",
            "name": "Laura Makdah",
            "username": "laura-makdah"
          },
          "committer": {
            "email": "51134415+laura-makdah@users.noreply.github.com",
            "name": "laura",
            "username": "laura-makdah"
          },
          "distinct": true,
          "id": "b31970a06b75b7dd49941d3e4e023c6c58581505",
          "message": "refine buckets and split out tags into separate histograms",
          "timestamp": "2023-05-03T15:46:06-07:00",
          "tree_id": "e58e127b3d17a58dfba01849fe9d87f2e1c85feb",
          "url": "https://github.com/MystenLabs/sui/commit/b31970a06b75b7dd49941d3e4e023c6c58581505"
        },
        "date": 1683154716127,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 137508056,
            "range": "± 5652157",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 323159,
            "range": "± 19213",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ashok@mystenlabs.com",
            "name": "Ashok Menon",
            "username": "amnn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "216a6a9f4a753cc173d7798d88c75fd67aa9109d",
          "message": "[sui-verifier] Additional tests (#11715)\n\n## Description\r\n\r\nAs in title\r\n\r\n## Test Plan\r\n\r\n```\r\ncrates/sui-verifier-transactional-tests$ cargo nextest run -- id_leak/infinite_loop.mvir\r\n```",
          "timestamp": "2023-05-03T16:29:06-07:00",
          "tree_id": "3a1870fd5859cbc5dea94b8e2c8d32905c804f85",
          "url": "https://github.com/MystenLabs/sui/commit/216a6a9f4a753cc173d7798d88c75fd67aa9109d"
        },
        "date": 1683157155152,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146827341,
            "range": "± 5206894",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 309404,
            "range": "± 12102",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "da7a1dc2ee1bd63eef2ba798532d87fd8fa9789f",
          "message": "use validator display name in metrics reporting (#11663)\n\n## Description \r\n\r\nas title.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-03T20:45:47-07:00",
          "tree_id": "ad0cf53cb169c3d3c5572c6477468079bda14e94",
          "url": "https://github.com/MystenLabs/sui/commit/da7a1dc2ee1bd63eef2ba798532d87fd8fa9789f"
        },
        "date": 1683172762643,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 137390648,
            "range": "± 4502936",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 323424,
            "range": "± 17840",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "123408603+healthydeve@users.noreply.github.com",
            "name": "Jian Lu",
            "username": "healthydeve"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2518eb6d1590cd4b93f045f6632691e89ce88258",
          "message": "[Faucet] changing max concurrency option in faucet build (#11712)\n\n## Description \r\n\r\nAdding max_concurrency as a client option on the faucet.\r\n\r\n## Test Plan \r\n\r\nCI/CD\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-04T09:25:50-04:00",
          "tree_id": "e0740d7f16042c576b8d9416dc7204c23ef47d81",
          "url": "https://github.com/MystenLabs/sui/commit/2518eb6d1590cd4b93f045f6632691e89ce88258"
        },
        "date": 1683207374546,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 151741745,
            "range": "± 4554642",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 309932,
            "range": "± 9321",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emma@mystenlabs.com",
            "name": "Emma Zhong",
            "username": "emmazzz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba31e3757f28aa7c71b3fbf72e2d3cd802708c29",
          "message": "[sui-system] update max commission rate cap (#11720)\n\n## Description \r\n\r\nChange the max commission rate to 20%.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-04T11:00:20-07:00",
          "tree_id": "dfdb7a9ebcafc4c96dd26fee6541ec6926113f39",
          "url": "https://github.com/MystenLabs/sui/commit/ba31e3757f28aa7c71b3fbf72e2d3cd802708c29"
        },
        "date": 1683223979786,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146117858,
            "range": "± 5043572",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 381769,
            "range": "± 64483",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "891b17a60284e7e22d2cad2184e37ef8c09359e6",
          "message": "lock down fast path object insertion to clock object (#11654)\n\n## Description \r\n\r\nas title\r\n\r\n## Test Plan \r\n\r\nCI\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\nlock down fast path object insertion to clock object.",
          "timestamp": "2023-05-04T11:42:33-07:00",
          "tree_id": "d27ed0b5cdbd1273c57b2f11deb58937e22084ff",
          "url": "https://github.com/MystenLabs/sui/commit/891b17a60284e7e22d2cad2184e37ef8c09359e6"
        },
        "date": 1683226354999,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 136946965,
            "range": "± 4370641",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 311909,
            "range": "± 12918",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patrickkuo@me.com",
            "name": "Patrick Kuo",
            "username": "patrickkuo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "458a16cba90677d4c052e3db89de38ed98039679",
          "message": "[bug fix] - struct tag serialization should not trim leading zeros (#11732)\n\n## Description \r\n\r\nstruct tag serialization should not trim leading zeros\r\n\r\n## Test Plan \r\n\r\nadded unit test",
          "timestamp": "2023-05-04T13:31:00-07:00",
          "tree_id": "878a065602bd420964b7220f4321efa7c1e58db2",
          "url": "https://github.com/MystenLabs/sui/commit/458a16cba90677d4c052e3db89de38ed98039679"
        },
        "date": 1683233030743,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 138455824,
            "range": "± 4719982",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 314844,
            "range": "± 17157",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ced4a537e8d1eba3d8e2fa83f4c45f1a5cd94ce2",
          "message": "[Part 2/2] Delete test utils messages (#11738)\n\nThis PR fully deletes test-utils/messages.rs",
          "timestamp": "2023-05-04T22:45:03Z",
          "tree_id": "08555d33ea0dca7795721815a2c1f2f573187651",
          "url": "https://github.com/MystenLabs/sui/commit/ced4a537e8d1eba3d8e2fa83f4c45f1a5cd94ce2"
        },
        "date": 1683241085413,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 143408991,
            "range": "± 4809882",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 305444,
            "range": "± 19885",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f4fc1428a6c92f8fc8c9594608a50bea29ce3e7",
          "message": "fix resolution issue (#11747)\n\n## Description \r\n\r\nFixes replay issue due to not being able to find objects at some protocol\r\nversions\r\n\r\n## Test Plan \r\n\r\nRegression\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-04T23:41:26Z",
          "tree_id": "25a5caa775733cdcd1a029c031fdd1001f61dd8a",
          "url": "https://github.com/MystenLabs/sui/commit/1f4fc1428a6c92f8fc8c9594608a50bea29ce3e7"
        },
        "date": 1683244298387,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 157081004,
            "range": "± 6183100",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 445549,
            "range": "± 62692",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25bccaf496d2ff099ba0d0fcaec4bed8ce789159",
          "message": "distinguish consensus/non consensus in certificate execution latency (#11749)\n\n## Description \r\n\r\nas title, and add more points in the buckets.\r\n\r\n## Test Plan \r\n\r\nCI\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-05T18:16:18Z",
          "tree_id": "a8be1323bece452c117cfa3f0006606624c2e0ba",
          "url": "https://github.com/MystenLabs/sui/commit/25bccaf496d2ff099ba0d0fcaec4bed8ce789159"
        },
        "date": 1683311179922,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 149961967,
            "range": "± 5180714",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 359277,
            "range": "± 40144",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akihidis@gmail.com",
            "name": "Anastasios Kichidis",
            "username": "akichidis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d18e012d99b0979414a87e4fe1ad12e0d97a2532",
          "message": "[refactor] add transaction type to consensus_adapter metrics (#11708)\n\n## Description \r\n\r\nGetting better visibility to the type of transactions send via consensus\r\nadapter. Currently we can't differentiate the volume which in some cases\r\nis helpful.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-05T11:31:27-07:00",
          "tree_id": "551b7388a1faf5aa4c77c6bd8ba811134d40c439",
          "url": "https://github.com/MystenLabs/sui/commit/d18e012d99b0979414a87e4fe1ad12e0d97a2532"
        },
        "date": 1683312102926,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 151577857,
            "range": "± 6768727",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 331099,
            "range": "± 66456",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8f5fcfaf118f95898c47ffd72fee015b114bbd83",
          "message": "[rpc] Get protocol config endpoint(#11510)\n\n## Description \r\n\r\n### Adds RPC support to get protocol config.\r\nIf the protocol config is not specified, the node returns the config for\r\nthe epoch its currently processing.\r\n\r\nExamples\r\n**1. Valid protocol version (9) specified**\r\n```\r\ncurl --location --request POST 0.0.0.0:9000  \\\r\n--header 'Content-Type: application/json' \\\r\n--data-raw '{\r\n    \"jsonrpc\":\"2.0\",\r\n    \"id\":1,\r\n    \"method\":\"sui_getProtocolConfig\",\r\n    \"params\":[\"9\"]\r\n}'| jq\r\n  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\r\n                                 Dload  Upload   Total   Spent    Left  Speed\r\n100  8546  100  8453  100    93   547k   6169 --:--:-- --:--:-- --:--:-- 1043k\r\n{\r\n  \"jsonrpc\": \"2.0\",\r\n  \"result\": {\r\n    \"minSupportedProtocolVersion\": \"1\",\r\n    \"maxSupportedProtocolVersion\": \"10\",\r\n    \"protocolVersion\": \"9\",\r\n    \"featureFlags\": {\r\n      \"advance_epoch_start_time_in_safe_mode\": true,\r\n      \"advance_to_highest_supported_protocol_version\": true,\r\n      \"ban_entry_init\": true,\r\n      \"commit_root_state_digest\": false,\r\n      .............[truncated]................... \r\n    },\r\n    \"attributes\": {\r\n      \"address_from_bytes_cost_base\": {\r\n        \"u64\": \"52\"\r\n      },\r\n      \"address_from_u256_cost_base\": {\r\n        \"u64\": \"52\"\r\n      },\r\n      \"address_to_u256_cost_base\": {\r\n        \"u64\": \"52\"\r\n      },      \r\n     .............[truncated]................... \r\n```\r\n**2. Invalid protocol version specified**\r\n```\r\ncurl --location --request POST 0.0.0.0:9000  \\\r\n--header 'Content-Type: application/json' \\\r\n--data-raw '{\r\n    \"jsonrpc\":\"2.0\",\r\n    \"id\":1,\r\n    \"method\":\"sui_getProtocolConfig\",\r\n    \"params\":[\"19\"]\r\n}'| jq\r\n  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\r\n                                 Dload  Upload   Total   Spent    Left  Speed\r\n100   230  100   136  100    94   9841   6802 --:--:-- --:--:-- --:--:--  224k\r\n{\r\n  \"jsonrpc\": \"2.0\",\r\n  \"error\": {\r\n    \"code\": -32000,\r\n    \"message\": \"Unsupported protocol version requested. Min supported: 1, max supported: 10\"\r\n  },\r\n  \"id\": 1\r\n}\r\n```\r\n**3. No protocol version specified**\r\nAlthough this node supports protocol version 1-10, it is currently\r\nsyncing TXs at version 1, so it returns 1 as thats the highest it can\r\nprocess currently given its objects state.\r\n```\r\ncurl --location --request POST 0.0.0.0:9000  \\\r\n--header 'Content-Type: application/json' \\\r\n--data-raw '{\r\n    \"jsonrpc\":\"2.0\",\r\n    \"id\":1,\r\n    \"method\":\"sui_getProtocolConfig\" \r\n}'| jq\r\n  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\r\n                                 Dload  Upload   Total   Spent    Left  Speed\r\n100  8469  100  8396  100    73  1022k   9107 --:--:-- --:--:-- --:--:-- 4135k\r\n{\r\n  \"jsonrpc\": \"2.0\",\r\n  \"result\": {\r\n    \"minSupportedProtocolVersion\": \"1\",\r\n    \"maxSupportedProtocolVersion\": \"10\",\r\n    \"protocolVersion\": \"1\",\r\n    \"featureFlags\": {\r\n      \"advance_epoch_start_time_in_safe_mode\": false,\r\n      \"advance_to_highest_supported_protocol_version\": false,\r\n      \"ban_entry_init\": false,\r\n      \"commit_root_state_digest\": false,\r\n      .............[truncated]................... \r\n    },\r\n    \"attributes\": {\r\n      \"address_from_bytes_cost_base\": {\r\n        \"u64\": \"52\"\r\n      },\r\n      \"address_from_u256_cost_base\": {\r\n        \"u64\": \"52\"\r\n      },\r\n      \"address_to_u256_cost_base\": {\r\n     .............[truncated]................... \r\n```\r\n\r\n\r\n### Other utilities\r\nAdds some utilities useful for CLI and protocol config attr discovery.\r\nNeeded to support RPC queries of protocol config info.\r\n\r\nFirst a wrapper enum is introduced since config value types are\r\nheterogenous.\r\nThe wrapper will automatically pick up the type for all config\r\nattributes and add it to the enum variant\r\n```\r\npub enum ProtocolConfigValue {\r\n    u32(u32),\r\n    u64(u64),\r\n    ....\r\n}\r\n```\r\n\r\n**1. Logic to lookup protocol config attributes by string repr**\r\n`lookup_attr(&self, attr_as_string) -> Option<ProtocolConfigValue>`\r\n```\r\n  let prot: ProtocolConfig = ProtocolConfig::get_for_version(ProtocolVersion::new(9));\r\n\r\n  // Result should be Some(128)\r\n  assert!(\r\n      prot.lookup_attr(\"max_move_identifier_len\".to_string())\r\n          == Some(ProtocolConfigValue::u64(prot.max_move_identifier_len()))\r\n  );\r\n```\r\n**2. Logic to return a BTreeMap of config attrs to their values**\r\n`attr_map(&self) -> BTreeMap<String, Option<ProtocolConfigValue>>`\r\nThis is equivalent to looping over all entries of `lookup_attr(value)`\r\nand putting them in a map\r\n```\r\n    // attr_map() returns BTreeMap<String, Option<ProtocolConfigValue>>\r\n    // where each key is the string repr of the attribute\r\n  assert!(\r\n    prot.attr_map().get(\"max_arguments\").unwrap()\r\n        == &Some(ProtocolConfigValue::u32(prot.max_arguments()))\r\n     );\r\n```\r\n\r\n## Test Plan \r\n\r\nUnit tests\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-05T18:46:56Z",
          "tree_id": "f4f01169d321872a9ab11a4318b0496b0c462720",
          "url": "https://github.com/MystenLabs/sui/commit/8f5fcfaf118f95898c47ffd72fee015b114bbd83"
        },
        "date": 1683313106081,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147776602,
            "range": "± 7617232",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 342347,
            "range": "± 49031",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6fc4b05ddff31e1c943e79dd6d37c7ecfced4dd6",
          "message": "[easy] allow short commands for db dump (#11765)\n\n## Description \r\n\r\nEnables short form of options to make commands less verbose.\r\n```\r\nUsage: sui-tool db-tool --db-path <DB_PATH> dump [OPTIONS] --store <STORE_NAME> --table-name <TABLE_NAME> --page-size <PAGE_SIZE> --page-num <PAGE_NUMBER>\r\n\r\nOptions:\r\n  -s, --store <STORE_NAME>       The type of store to dump [possible values: validator, index, epoch]\r\n  -t, --table-name <TABLE_NAME>  The name of the table to dump\r\n  -p, --page-size <PAGE_SIZE>    The size of page to dump. This is a u16\r\n  -n, --page-num <PAGE_NUMBER>   The page number to dump\r\n  -e, --epoch <EPOCH>            The epoch to use when loading AuthorityEpochTables\r\n  -h, --help                     Print help\r\n\r\n```\r\n\r\n## Test Plan \r\n\r\nManual test\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-05T13:01:22-07:00",
          "tree_id": "ad84e436e3c232bc88ea1ab04dc85a2618384305",
          "url": "https://github.com/MystenLabs/sui/commit/6fc4b05ddff31e1c943e79dd6d37c7ecfced4dd6"
        },
        "date": 1683317365707,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 105708459,
            "range": "± 4718428",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 255927,
            "range": "± 22771",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aschran@mystenlabs.com",
            "name": "Andrew Schran",
            "username": "aschran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6cfae5c18b1c999d321b4375eb9e469e0c3465eb",
          "message": "Update sui to current anemo (#11487)\n\nMigrates codecs to the modified anemo codec interface",
          "timestamp": "2023-05-05T21:56:26Z",
          "tree_id": "97fba4c6f3b686a9da2696a00e87f082a11d635b",
          "url": "https://github.com/MystenLabs/sui/commit/6cfae5c18b1c999d321b4375eb9e469e0c3465eb"
        },
        "date": 1683324679067,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 99558032,
            "range": "± 3373746",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 335052,
            "range": "± 21832",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "81660174+mwtian@users.noreply.github.com",
            "name": "mwtian",
            "username": "mwtian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "15d8fcbb1e9a810622226d2113bc6878b230beaf",
          "message": "[Narwhal] enhance latency metrics for certificate handler (#11774)\n\n## Description \r\n\r\nAdd more metrics to help locate certificate handler latency spikes.\r\n\r\n## Test Plan \r\n\r\nCI. Private testnet.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-05T23:41:28Z",
          "tree_id": "6226d1c8ef2ef94170fd84282c31b222631879c2",
          "url": "https://github.com/MystenLabs/sui/commit/15d8fcbb1e9a810622226d2113bc6878b230beaf"
        },
        "date": 1683330726143,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145025439,
            "range": "± 7744282",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 304470,
            "range": "± 23890",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "123987499+suiwombat@users.noreply.github.com",
            "name": "Joe Hrbek",
            "username": "suiwombat"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d71f55ada8505d3ed358476fd23414be1c32372f",
          "message": "[sui-proxy/add metrics to middleware] (#11770)\n\nSummary:\r\n\r\n* missed the middleware for metrics\r\n* instrument some basic counters for visibility in these layers\r\n\r\nTest Plan:\r\n\r\ncargo test/build\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-05T17:24:07-07:00",
          "tree_id": "7a3a248cd5c4557d379d750393e615b2bf535c8b",
          "url": "https://github.com/MystenLabs/sui/commit/d71f55ada8505d3ed358476fd23414be1c32372f"
        },
        "date": 1683333150046,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 105807470,
            "range": "± 7810387",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308155,
            "range": "± 26638",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d56e02c5b170a55261921e7c163d477b0bde3f3d",
          "message": "[verifier] add prom histogram metrics for verifier (#11757)\n\n## Description \r\n\r\nAdds timer histogram metrics for success and timeout scenarios, for both\r\nPTB level and module level verificaiton.\r\n[do we want package level too?] \r\n\r\n## Test Plan \r\n\r\nUnit tests\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-06T01:12:47Z",
          "tree_id": "122732cc14606d03d74927b19f10375554c8b426",
          "url": "https://github.com/MystenLabs/sui/commit/d56e02c5b170a55261921e7c163d477b0bde3f3d"
        },
        "date": 1683336058884,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 103093546,
            "range": "± 3826607",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 298860,
            "range": "± 24600",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7bca94c3ad1436c3c8f9256e74c43d9a1a4c9b0d",
          "message": "Add sign-transaction to sui-tool (#11605)\n\nThis PR adds two features:\r\n1. In sui client, extend the ability to serialize a transaction to\r\nsupport both unsigned and signed transaction.\r\n2. In sui-tool, add a new command sign-transaction that would ask all\r\nvalidators to sign a transaction, but not execute the cert.",
          "timestamp": "2023-05-06T17:26:31Z",
          "tree_id": "9767ff2372f66c2513039e2f342b3991d89a3df9",
          "url": "https://github.com/MystenLabs/sui/commit/7bca94c3ad1436c3c8f9256e74c43d9a1a4c9b0d"
        },
        "date": 1683394671815,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 140805252,
            "range": "± 4391905",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 318280,
            "range": "± 16223",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8346d95f592946032f6d370096b83f98aa4efa72",
          "message": "Rename messages.rs to transaction.rs (#11645)\n\nmessages.rs now only contains Transaction related types. Rename it to\r\nreflect this.",
          "timestamp": "2023-05-06T22:29:13Z",
          "tree_id": "7ac90ce3c428bc8668df11cfe17f242ff95e1341",
          "url": "https://github.com/MystenLabs/sui/commit/8346d95f592946032f6d370096b83f98aa4efa72"
        },
        "date": 1683412842054,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 148116679,
            "range": "± 4960230",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 313755,
            "range": "± 26714",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f8f63d20c45c03e76c535801b875823871659b3c",
          "message": "Fix Dynamic Field Cursor Index Bug (#11789)\n\n## Description \r\n\r\nFixes dynamic field pagination/cursor issue: https://github.com/MystenLabs/sui/issues/7686\r\n\r\n## Test Plan \r\n\r\nManual testing\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-07T01:42:03Z",
          "tree_id": "de491429daa752be65325a17a8a4ca007c5d731b",
          "url": "https://github.com/MystenLabs/sui/commit/f8f63d20c45c03e76c535801b875823871659b3c"
        },
        "date": 1683424328096,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 154486717,
            "range": "± 4793792",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 526009,
            "range": "± 45435",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zlnju@outlook.com",
            "name": "wiggins-dev",
            "username": "wiggins-dev"
          },
          "committer": {
            "email": "sam@mystenlabs.com",
            "name": "Sam Blackshear",
            "username": "sblackshear"
          },
          "distinct": true,
          "id": "fed58ad1334c06e5003cb97f8b47fa7a92d175e5",
          "message": "[Deepbook] Enhancement (#11624)\n\nDescription\n\n- enhance overflow check for mathematical calculations\n- explain why underflow is permitted code clean in test code\n- add test to cover corner case in match_bid\n- add test to cover corner case in match_bid\n- add test to successfully place a limit order of type POST OR ABORT\n- add test to place limit order of type invalid restrictions\n- add test to cover ask side in batch cancel order\n- add test to get single  order status on bid side\n- add test to get level2 book status when time expired\n\nTest Plan\n\ncd to deeobook dir and run \"sui move test\"\n\n---\nIf your changes are not user-facing and not a breaking change, you can\nskip the following section. Otherwise, please indicate what changed, and\nthen add to the Release Notes section as highlighted during the release\nprocess.\n\n- [ ] user-visible impact\n- [ ] breaking change for a client SDKs\n- [ ] breaking change for FNs (FN binary must upgrade)\n- [ ] breaking change for validators or node operators (must upgrade\nbinaries)\n- [ ] breaking change for on-chain data layout\n- [ ] necessitate either a data wipe or data migration",
          "timestamp": "2023-05-08T07:29:35-07:00",
          "tree_id": "9af39d4a8869a6ee204f8e296588f6c6537aaf7b",
          "url": "https://github.com/MystenLabs/sui/commit/fed58ad1334c06e5003cb97f8b47fa7a92d175e5"
        },
        "date": 1683556825791,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 144590970,
            "range": "± 4223981",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 443285,
            "range": "± 32507",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "51927076+phoenix-o@users.noreply.github.com",
            "name": "phoenix",
            "username": "phoenix-o"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "73c5c8eae35cfbc4ad9dada1cc5368d74c63199f",
          "message": "[pruner] remove open iterator between await points (#11808)",
          "timestamp": "2023-05-08T18:23:47+02:00",
          "tree_id": "4563c7a671461d6b4f1303a3ce97205962fd5af7",
          "url": "https://github.com/MystenLabs/sui/commit/73c5c8eae35cfbc4ad9dada1cc5368d74c63199f"
        },
        "date": 1683563683225,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145697094,
            "range": "± 4521401",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 355790,
            "range": "± 36164",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119884990+chargarlic@users.noreply.github.com",
            "name": "Rahul Nair",
            "username": "chargarlic"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5b4437e10272692c6e649d7a62786f4c740c0677",
          "message": "Extend Keytool for Signing with AWS KMS (#11283)\n\n## Description \r\n\r\nExtends the sui keytool to sign a transaction with a AWS KMS (only for\r\nsecp256k1)\r\n- Sets up the KMS Client\r\n- Constructs signing request with AWS, normalizes the signature and\r\ncompacts it\r\n- Converts 64byte sig to RecoverableSignature and Recovers the PublicKey\r\nby trying all 4 recovery ids.\r\n- Prints Address for Corresponding PublicKey and Serialized Signature\r\n\r\n## Test Plan \r\n\r\nMock Unit Tests are a fast follow; tried with a test KMS key and\r\nexecuted corresponding transaction.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\nExtend Sui Keytool to sign with AWS KMS (secp256k1)\r\n\r\n---------\r\n\r\nCo-authored-by: Joy Wang <108701016+joyqvq@users.noreply.github.com>",
          "timestamp": "2023-05-08T10:00:09-07:00",
          "tree_id": "2ee2ac7d56a0dc12623b6ce57f859f576f64cc52",
          "url": "https://github.com/MystenLabs/sui/commit/5b4437e10272692c6e649d7a62786f4c740c0677"
        },
        "date": 1683566074936,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146808600,
            "range": "± 4609085",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308529,
            "range": "± 19268",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "108701016+joyqvq@users.noreply.github.com",
            "name": "Joy Wang",
            "username": "joyqvq"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21da01373deb48912759bd832bbb0e01c319e49e",
          "message": "crypto: Use pubkey as bytes (#11596)\n\n## Description \r\n\r\nCloses https://github.com/MystenLabs/sui/issues/10402\r\nCloses https://github.com/MystenLabs/sui/issues/9994\r\n\r\nDepends on https://github.com/MystenLabs/fastcrypto/pull/577\r\n## Test Plan \r\n\r\nExisting tests \r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-08T18:07:18Z",
          "tree_id": "ec9a004900f8ad932e733defb68a046a0d893ce4",
          "url": "https://github.com/MystenLabs/sui/commit/21da01373deb48912759bd832bbb0e01c319e49e"
        },
        "date": 1683570018478,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146285897,
            "range": "± 5376149",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 317436,
            "range": "± 10194",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90c374071fb33bdfee5ade976cbd10ced5cb2e13",
          "message": "Fix wait for local execution bug in sdk (#11811)\n\nThis PR fixes a bug in the SDK where it doesn't properly wait for tx\r\nexecution on fullnodes. Specifically, it returns when it sees the\r\ntransaction, but that doesn't guarantee that the transaction was\r\nactually executed.\r\nIn the fix we simply use retry instead of timeout because fullnode local\r\nexecution already uses a timeout to wait.\r\nThis fixes a flaky test in sui-surfer.",
          "timestamp": "2023-05-08T12:27:45-07:00",
          "tree_id": "97b3a82d68a3d1cc37be977a9bb1c7637cd0c601",
          "url": "https://github.com/MystenLabs/sui/commit/90c374071fb33bdfee5ade976cbd10ced5cb2e13"
        },
        "date": 1683574951455,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145152542,
            "range": "± 4483887",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 311194,
            "range": "± 23670",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "123408603+healthydeve@users.noreply.github.com",
            "name": "Jian Lu",
            "username": "healthydeve"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6811ecba9a0957070c024325cc5ea833322d26f6",
          "message": "[docs] dynamic object documentation (#11711)\n\n## Description \r\n\r\nAdding some of the documentation for dynamic fields apis\r\n```\r\nNo example found for method: sui_getLoadedChildObjects\r\nNo example found for method: sui_getMoveFunctionArgTypes\r\nNo example found for method: sui_getNormalizedMoveFunction\r\nNo example found for method: sui_getNormalizedMoveModule\r\nNo example found for method: sui_getNormalizedMoveModulesByPackage\r\nNo example found for method: sui_getNormalizedMoveStruct\r\nNo example found for method: sui_tryMultiGetPastObjects\r\nNo example found for method: suix_getStakes\r\nNo example found for method: suix_getStakesByIds\r\nNo example found for method: suix_resolveNameServiceAddress\r\nNo example found for method: suix_resolveNameServiceNames\r\nNo example found for method: suix_subscribeEvent\r\nNo example found for method: suix_subscribeTransaction\r\nNo example found for method: unsafe_batchTransaction\r\nNo example found for method: unsafe_mergeCoins\r\nNo example found for method: unsafe_moveCall\r\nNo example found for method: unsafe_pay\r\nNo example found for method: unsafe_payAllSui\r\nNo example found for method: unsafe_paySui\r\nNo example found for method: unsafe_publish\r\nNo example found for method: unsafe_requestAddStake\r\nNo example found for method: unsafe_requestWithdrawStake\r\nNo example found for method: unsafe_splitCoin\r\nNo example found for method: unsafe_splitCoinEqual\r\nNo example found for method: unsafe_transferObject\r\nNo example found for method: unsafe_transferSui\r\n```\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-08T16:08:50-04:00",
          "tree_id": "7966842bdb925958761ec7d36d9a3f3f58f6bbce",
          "url": "https://github.com/MystenLabs/sui/commit/6811ecba9a0957070c024325cc5ea833322d26f6"
        },
        "date": 1683577202134,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 149232724,
            "range": "± 5863656",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 402582,
            "range": "± 55484",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "123408603+healthydeve@users.noreply.github.com",
            "name": "Jian Lu",
            "username": "healthydeve"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d4b98e83af30f69ff8d16a3422451223d7ed7f2",
          "message": "[Faucet] Adding merge/ split coin functions from rust script (#11814)\n\n## Description \r\n\r\nAdded a script to do merge/split coins instead of having to use CLI\r\n\r\n## Test Plan \r\n\r\n\r\n![](https://media2.giphy.com/media/x0npYExCGOZeo/giphy.gif?cid=ecf05e47ds44alb30295vmyjy8xcvl84ozjsv51qfv0rmhnp&rid=giphy.gif&ct=g)\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-08T16:47:54-04:00",
          "tree_id": "9d0862a63cb175e2d6e024b18a31eb0aaade827e",
          "url": "https://github.com/MystenLabs/sui/commit/6d4b98e83af30f69ff8d16a3422451223d7ed7f2"
        },
        "date": 1683579588278,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146760927,
            "range": "± 5154165",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 312515,
            "range": "± 18563",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eugene@mystenlabs.com",
            "name": "Eugene Boguslavsky",
            "username": "ebmifa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "89992738566dda77895d34252e15760c05b97ce9",
          "message": "Sui `v1.2.0` version bump (#11812)\n\n## Description \r\nSui `v1.2.0` version bump\r\n\r\n## Test Plan \r\n👀",
          "timestamp": "2023-05-08T16:07:03-05:00",
          "tree_id": "d2f0b4ff261d8dade73591234e1007546cb8b1b9",
          "url": "https://github.com/MystenLabs/sui/commit/89992738566dda77895d34252e15760c05b97ce9"
        },
        "date": 1683580764006,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147104588,
            "range": "± 4339684",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 321394,
            "range": "± 28891",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akihidis@gmail.com",
            "name": "Anastasios Kichidis",
            "username": "akichidis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8255f8e14b69d0754d9e82e09cb95c1160970fef",
          "message": "[fix] failing build due to missing import (#11815)\n\n## Description \r\n\r\n\r\n## Test Plan \r\n\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-08T15:56:42-07:00",
          "tree_id": "fce4c70bbd12bbfea901a636cdc70e0b56584ae6",
          "url": "https://github.com/MystenLabs/sui/commit/8255f8e14b69d0754d9e82e09cb95c1160970fef"
        },
        "date": 1683587294020,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 107723537,
            "range": "± 3264847",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 269888,
            "range": "± 14529",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3a1b15707df8d109a91259c6f5a1adf0bc7d0e0d",
          "message": "record last executed timestamp age v.s. the timestamp itself (#11801)\n\n## Description \r\n\r\nas title\r\n\r\n## Test Plan \r\n\r\nCI\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\nEecord last executed timestamp age v.s. the timestamp itself",
          "timestamp": "2023-05-08T23:27:15Z",
          "tree_id": "00a9a1290a797aad03f98c7516191966efdebea9",
          "url": "https://github.com/MystenLabs/sui/commit/3a1b15707df8d109a91259c6f5a1adf0bc7d0e0d"
        },
        "date": 1683589016826,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 105565992,
            "range": "± 3108278",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 270780,
            "range": "± 50978",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cab47118fafdf2f3c186c08e0066e6b2a97994d2",
          "message": "Replay based fuzzer simple (#11798)\n\n## Description \r\n\r\nReplay based fuzzer using a simple transaction mutation scheme.\r\n\r\n## Test Plan \r\n\r\nManual, unit\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-08T19:52:10-04:00",
          "tree_id": "ecdad3460489ed2b1946ad9c352fe6d0e14411e8",
          "url": "https://github.com/MystenLabs/sui/commit/cab47118fafdf2f3c186c08e0066e6b2a97994d2"
        },
        "date": 1683590582851,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 148250141,
            "range": "± 5888361",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 343378,
            "range": "± 79246",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e7e1c7eb2a350d822c819fefbfc733ddd6a2bb49",
          "message": "disable test (#11825)\n\n## Description \r\n\r\nDisable test for now.\r\nSeems to be connecting to flaky FN\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-09T01:37:55Z",
          "tree_id": "ac159e3fb69d21758fb786b25cabcee0d7a03106",
          "url": "https://github.com/MystenLabs/sui/commit/e7e1c7eb2a350d822c819fefbfc733ddd6a2bb49"
        },
        "date": 1683596880438,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 143906484,
            "range": "± 4941302",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 441480,
            "range": "± 88660",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25ce5ccc5b42fa0ef678a9eeec07bebc22759696",
          "message": "fix for devnet (#11831)\n\n## Description \r\n\r\nThis allows tool work for devnet\r\n\r\n## Test Plan \r\n\r\nmanual\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-09T04:30:00Z",
          "tree_id": "b6eb055a73655021cb26f7fa28056380604021d9",
          "url": "https://github.com/MystenLabs/sui/commit/25ce5ccc5b42fa0ef678a9eeec07bebc22759696"
        },
        "date": 1683607115111,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 107847022,
            "range": "± 5650132",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 303078,
            "range": "± 13263",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2491d4582904a906637c28d92a1acc0f6eb3d325",
          "message": "metered bytecode verifier cli check (#11817)\n\n## Description \r\nAs requested, users want to be able to quickly check if their packages\r\nwill pass metered verification.\r\nSample usage\r\n``` \r\n./target/debug/sui client verify-bytecode crates/sui-framework/packages/sui-framework \r\nBytecode verification succeeded!\r\n```\r\n## Test Plan \r\n\r\nManual\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-09T14:18:42Z",
          "tree_id": "de326905e28162be733a875818bd35ef9bd2087b",
          "url": "https://github.com/MystenLabs/sui/commit/2491d4582904a906637c28d92a1acc0f6eb3d325"
        },
        "date": 1683642853833,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 148590590,
            "range": "± 4728601",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 324928,
            "range": "± 33158",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "123987499+suiwombat@users.noreply.github.com",
            "name": "Joe Hrbek",
            "username": "suiwombat"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "60bbef8c447669b3cd0dffb3a09c0e3c710d120b",
          "message": "[sui-proxy/increase post body limit to 5 MB] (#11832)\n\nSummary:\r\n\r\n* raise the metrics post limit to 5 MB from 2 MB.\r\n* added instrumentation and also an additional header check for\r\ncontent-length\r\n* move the mimir decode/encode to a dedicated spawn blocking pool to\r\nprevent (potentially) blocking the async runtime\r\n\r\nTest Plan:\r\n\r\nlocal testing and testnet\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-09T11:19:19-05:00",
          "tree_id": "815303c3ac511c3cf01903aa094e571f92762ed1",
          "url": "https://github.com/MystenLabs/sui/commit/60bbef8c447669b3cd0dffb3a09c0e3c710d120b"
        },
        "date": 1683649923543,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 141254217,
            "range": "± 4673471",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 314718,
            "range": "± 10011",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "84862080feb6b3e29e405f2a609836a64cf613e3",
          "message": "Clean up system object CallArg (#10388)\n\nChange all direct init of the system object CallArg using CallArg\r\nconstant.\r\nSimilar for clock. Non-functional change.",
          "timestamp": "2023-05-09T16:23:22Z",
          "tree_id": "8e0f780f8610538b2c5b9af0492b54f11dc7abe4",
          "url": "https://github.com/MystenLabs/sui/commit/84862080feb6b3e29e405f2a609836a64cf613e3"
        },
        "date": 1683649953950,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 106720945,
            "range": "± 4095191",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 303890,
            "range": "± 17282",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "123987499+suiwombat@users.noreply.github.com",
            "name": "Joe Hrbek",
            "username": "suiwombat"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "53210d36bc187ff5431e6d051962b402d66551bf",
          "message": "[sui-proxy/increase mimir timeout] (#11845)\n\nSummary:\r\n\r\n* mimir is getting close to 15 seconds for posting in the p95 graphs.\r\n* bump this timeout to 30 to buy us time to root cause\r\n\r\nTest Plan:\r\n\r\nlocally & cargo build\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-09T16:22:26Z",
          "tree_id": "b6a4837cf99bfaaa9a3c4b128e1a7900c36dafab",
          "url": "https://github.com/MystenLabs/sui/commit/53210d36bc187ff5431e6d051962b402d66551bf"
        },
        "date": 1683650128632,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 151330848,
            "range": "± 4836850",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 344606,
            "range": "± 42007",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "81660174+mwtian@users.noreply.github.com",
            "name": "mwtian",
            "username": "mwtian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ba704b55eaee72f664ef94947085860360b7ba2",
          "message": "[Narwhal] deduplicate missing parents in vote requests (#11835)\n\n## Description \r\n\r\nWe have observed correlations among spikes in certificates in votes,\r\nsend certificate handler p95 latency, and observed average latency when\r\nsubmitting to consensus. This issue can be observed in many validators\r\non testnet and private-testnet too. It seems the logic to request\r\nmissing parent certificates from header proposer is problematic, where\r\nit is easy to cause a surge of certificates and overwhelm Narwhal, e.g.\r\nwith requests to certificate stores.\r\n\r\nIn this PR, a limit is added to request a missing parent certificate\r\nonly from one header proposer. Additional protections against byzantine\r\nprimaries sending unrequested parent certificates and overwhelming the\r\nsystem have also been added.\r\n\r\nThis change weakens the guarantee of certificate propagation via header\r\nproposal and voting. A missing parent certificate may never get sent by\r\nthe header proposer because it is down. So to maintain liveness\r\nguarantee, certificate fetching is triggered 30s after no consensus\r\ncommit happens.\r\n\r\n## Test Plan \r\n\r\nCI. Deploy to private testnet.\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-09T16:26:08Z",
          "tree_id": "81cf44770611ae78b851019d5a24fd9dc5c0cbf3",
          "url": "https://github.com/MystenLabs/sui/commit/8ba704b55eaee72f664ef94947085860360b7ba2"
        },
        "date": 1683650454929,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 148638213,
            "range": "± 5268661",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 465267,
            "range": "± 86289",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patrickkuo@me.com",
            "name": "Patrick Kuo",
            "username": "patrickkuo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "79330b43a62a823e0ef6b9b593e29eaa0a2c3dcb",
          "message": "enable rosetta ci (#11836)",
          "timestamp": "2023-05-09T17:33:16+01:00",
          "tree_id": "af071b0d8ac6307992e55275923ce01dada4d2a7",
          "url": "https://github.com/MystenLabs/sui/commit/79330b43a62a823e0ef6b9b593e29eaa0a2c3dcb"
        },
        "date": 1683650696709,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 144529084,
            "range": "± 6925959",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 315152,
            "range": "± 11463",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119884990+chargarlic@users.noreply.github.com",
            "name": "Rahul Nair",
            "username": "chargarlic"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "82c162e7755d05377e8bead5df847b8dfe5d0c6f",
          "message": "Simply Signing With KMS (#11822)\n\n## Description \r\n\r\nFollow up to #11283 This PR simplifies the SignKMS function by adding an\r\noption to pass the sui secp256k1 publickey in base64 as a parameter.\r\nPreviously we were signing a digest with AWS KMS and recovered the\r\npublic key from the signature but leads to unwanted side effects such as\r\noccasionally recovering the wrong public key/ incorrect\r\nserialized_signature.\r\nThe pem pubkey from aws can be converted with this helper\r\n[program](https://github.com/MystenLabs/base64pemkey).\r\n\r\nSince the user has to know their publickey/address in order to figure\r\nout the object_id it would be best to pass the publickey as a parameter\r\nand leverage it rather than going down the path of ecrecover.\r\n\r\nIdeal usage would be \r\n`sui keytool sign-kms --data $TX_BYTES --keyid $KMS_KEY_ID --base64pk\r\n$pubkey_b64`\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\nRemove SignatureRecovery to Obtain PubKey for AWS KMS Signing.",
          "timestamp": "2023-05-09T09:38:17-07:00",
          "tree_id": "d2edb77f38db9b918ec431ddd8132b1de558b6d2",
          "url": "https://github.com/MystenLabs/sui/commit/82c162e7755d05377e8bead5df847b8dfe5d0c6f"
        },
        "date": 1683650991472,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 151211613,
            "range": "± 4418949",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 382678,
            "range": "± 34963",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "127570466+wlmyng@users.noreply.github.com",
            "name": "wlmyng",
            "username": "wlmyng"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bac24f75b4ddb900b3720ce43a0bbecd65dd5f5f",
          "message": "1/n improve sui-json-rpc error codes and handling (#11736)\n\n## Description \r\nMost of the errors we return in `sui-json-rpc` are `anyhow::Error`s that\r\nthen get converted to `RpcError`. Or, if we keep things in\r\n`sui_json_rpc::Error`, there is a catch-all `From` implementation that\r\nconverts all variants to `CallError::Failed`.\r\n\r\nIn this PR, the `From` implementation is expanded to map some variants\r\nto `RpcError::Call(CallError::InvalidParams` instead, so that we can\r\nreturn different error codes rather than defaulting to `-32000` for\r\neverything.\r\n\r\nThis will help w/ differentiating server from client errors, and we can\r\nmake use of this for alerting on error logs.\r\nStart with `UserInputErrors`, which now map to error code `-32602`. Also\r\nlog error code if available.\r\n\r\nIn terms of performance, there shouldn't be any impact since we do the\r\nsame number of conversions. Only, instead of `JoinError` ->\r\n`anyhow::Error` -> `RpcError`, or `anyhow::Error` -> `anyhow::Error` ->\r\n`RpcError`, we now do `error from inner call` -> `sui_json_rpc::Error`\r\n-> `RpcError`.\r\n\r\n```\r\ncurl --location '127.0.0.1:9000' \\\r\n--header 'Content-Type: application/json' \\\r\n--data '{\r\n  \"jsonrpc\": \"2.0\",\r\n  \"id\": 1,\r\n  \"method\": \"sui_getTransactionBlock\",\r\n  \"params\": [\r\n    [\r\n      \"DwRWCvrkfauz95wTrfJxi3VSWdMZWCEtdPCiaZhcanZh\"\r\n    ],\r\n    {\r\n      \"showInput\": true,\r\n      \"showRawInput\": false,\r\n      \"showEffects\": true,\r\n      \"showEvents\": true,\r\n      \"showObjectChanges\": false,\r\n      \"showBalanceChanges\": false\r\n    }\r\n  ]\r\n}'\r\n{\"jsonrpc\":\"2.0\",\"error\":{\"code\":-32602,\"message\":\"invalid type: sequence, expected a string at line 2 column 4\"},\"id\":1}%       \r\n```\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-09T09:41:46-07:00",
          "tree_id": "1e3b4659a92bb24d57aabe84bbea9c9e4ef3aee1",
          "url": "https://github.com/MystenLabs/sui/commit/bac24f75b4ddb900b3720ce43a0bbecd65dd5f5f"
        },
        "date": 1683651454790,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 149929364,
            "range": "± 5042065",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308866,
            "range": "± 19160",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6786ccfb71a2a3077a1f65d01f302974af340324",
          "message": "indexer: revert data trimming on obj & tx data (#11848)\n\n## Description \r\n\r\nBefore mainnet, I trimmed obj & tx data to temp. reduce storage\r\nconsumption, but these are needed for new features of address & active\r\naddress count, thus this PR resumed that.\r\nAlso per [DB size\r\ndash](https://metrics.sui.io/d/4P9w6d14z/sui-indexer?orgId=1&refresh=1m&from=1683606004118&to=1683649204118&viewPanel=55),\r\ncurrent storage is 20GB after a week, and we can at least do 2.5TiB, so\r\nthis move should be safe.\r\n\r\n## Test Plan \r\n\r\nLocal run to make sure that tx and object data are indeed populated with\r\nfull contents.",
          "timestamp": "2023-05-09T12:54:23-04:00",
          "tree_id": "6943b1d905abce4410681cbb965976ea60b288af",
          "url": "https://github.com/MystenLabs/sui/commit/6786ccfb71a2a3077a1f65d01f302974af340324"
        },
        "date": 1683651953134,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 154259248,
            "range": "± 4956978",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 405175,
            "range": "± 24043",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5615a786492845b8df7cfda1be11483809d6ddcd",
          "message": "fix meter assignment (#11819)\n\n## Description \r\n\r\nFixes wrong assignment\r\n\r\n## Test Plan \r\n\r\nExisting\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-09T10:39:38-07:00",
          "tree_id": "cdf65ff62f87dd464fd3e3e224319f255db36837",
          "url": "https://github.com/MystenLabs/sui/commit/5615a786492845b8df7cfda1be11483809d6ddcd"
        },
        "date": 1683654829657,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145180056,
            "range": "± 5594024",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 315252,
            "range": "± 17240",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "118224482+ronny-mysten@users.noreply.github.com",
            "name": "ronny-mysten",
            "username": "ronny-mysten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ecfbb609205108285028b9c47a14beddc6dff55b",
          "message": "Adding examples to RPC API ref (#11827)\n\n## Description \r\n\r\nAdding examples to JSON RPC reference. Changing suix_getownedobjects to\r\nreturn an objectspage.\r\n\r\n## Test Plan \r\n\r\nLocally\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-09T18:03:35Z",
          "tree_id": "f6a0221dce22d83c6fc71abde0868be2db071d1f",
          "url": "https://github.com/MystenLabs/sui/commit/ecfbb609205108285028b9c47a14beddc6dff55b"
        },
        "date": 1683656111739,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 152560153,
            "range": "± 4617416",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 424734,
            "range": "± 58583",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patrickkuo@me.com",
            "name": "Patrick Kuo",
            "username": "patrickkuo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ca220526bcf669d08dfa63417c9ba8ce8bedc82",
          "message": "[rosetta] - dryrun using mock coin instead of guessing the rough cost of transaction. (#11838)\n\n* dryrun using mock coin to get the gas estimation instead of guessing\r\nthe rough budget.\r\n* increase the mock coin size to 1B, to avoid dry run failing when try\r\nto transfer > 100M SUI",
          "timestamp": "2023-05-09T18:53:16Z",
          "tree_id": "64180692816862e880adbbd1803fa1361922530a",
          "url": "https://github.com/MystenLabs/sui/commit/8ca220526bcf669d08dfa63417c9ba8ce8bedc82"
        },
        "date": 1683659175636,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 141209815,
            "range": "± 4355148",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 324963,
            "range": "± 21925",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "653c3a0287f9c28889f4cd6185681c01da4645f4",
          "message": "Index store search debug util (#11856)\n\n## Description \r\n\r\nEnables searching DB by key and range\r\nExample\r\nThis searches the `transactions_from_addr` index for 3 items starting\r\nfrom key `(0x0, 0)`\r\n```\r\nsui-tool db-tool --db-path $INDEX_STORE_PATH index-search-count -t \"transactions_from_addr\" -s \" 0x0000000000000000000000000000000000000000000000000000000000000000  , 0 \"  -c 3\r\n\r\n(0x0000000000000000000000000000000000000000000000000000000000000000, 0): TransactionDigest(Cgww1sn7XViCPSdDcAPmVcARueWuexJ8af8zD842Ff43)\r\n(0x0000000000000000000000000000000000000000000000000000000000000000, 1): TransactionDigest(ENSA1UVsdNfa66Hifs8YmELAPMUraTkMLnb5vBma7yjG)\r\n(0x0000000000000000000000000000000000000000000000000000000000000000, 2): TransactionDigest(6JrvQmai4CfoepqArnJYa4sRQbRAY4bSXc5tY7ub4HzJ)\r\n```\r\n\r\nWhile this searches the `transactions_from_addr` index for all keys in\r\nrange [start, end)\r\nwhere\r\nstart =\r\n`(0x0000002a71724c656e54172366d1496adc7e7a96e7703f8eba56c771334f1652 ,\r\n0)`\r\nend =\r\n`(0x000008c4eeb482d337eabdce6d8d362c930d2778cb6169c5ed5bbf6359e49cc0,\r\n0)`\r\n```\r\nsui-tool db-tool --db-path $INDEX_STORE_PATH index-search-key-range -t \"transactions_from_addr\" -s \" 0x0000002a71724c656e54172366d1496adc7e7a96e7703f8eba56c771334f1652 , 0 \"  -e \"0x000008c4eeb482d337eabdce6d8d362c930d2778cb6169c5ed5bbf6359e49cc0, 0\"\r\n\r\n(0x0000002a71724c656e54172366d1496adc7e7a96e7703f8eba56c771334f1652, 199901503): TransactionDigest(p6pdecwK6xFV94gW3hEDJC7nXiEMkXT7qBcLmwa4zqt)\r\n(0x000001ec0b8dc49b0554336403df1e2ada04fdb57419b771c8eb630e9b3ca04b, 178533636): TransactionDigest(2y6CdZ6a2vgXgN47VUwPnR38dyg7uF6VJYChUyEiCqiA)\r\n(0x000001ec0b8dc49b0554336403df1e2ada04fdb57419b771c8eb630e9b3ca04b, 179965983): TransactionDigest(GNUZ9RdVcwqR3UB6B1CAZt54szrbxB9ibTqZNuqgz93z)\r\n(0x000001ec0b8dc49b0554336403df1e2ada04fdb57419b771c8eb630e9b3ca04b, 211941432): TransactionDigest(52BvMgFVfTPmNHZLUKxvAW7aBCyMnLT6tLFvQAiKBhz7)\r\n(0x000001ec0b8dc49b0554336403df1e2ada04fdb57419b771c8eb630e9b3ca04b, 226460529): TransactionDigest(aSHK7cDyRScPXkQCsjYa3yHqvLMA9yejwTWcwQLcC5o)\r\n(0x000001ec0b8dc49b0554336403df1e2ada04fdb57419b771c8eb630e9b3ca04b, 229949905): TransactionDigest(napYj2jRXURtDFPWMqMhFMGhD7ZyY3mRT4z95MtU9mj)\r\n(0x000001ec0b8dc49b0554336403df1e2ada04fdb57419b771c8eb630e9b3ca04b, 241586260): TransactionDigest(3exq8i5CnkFng8tdkPD7SkfUTHSEQyaty3BR6fjNgzSV)\r\n(0x000001ec0b8dc49b0554336403df1e2ada04fdb57419b771c8eb630e9b3ca04b, 247068758): TransactionDigest(BFdWNnkunrDL6tzCcyFKSauvMs4z7Kb4gNuxytbRaVkE)\r\n(0x000001ec0b8dc49b0554336403df1e2ada04fdb57419b771c8eb630e9b3ca04b, 262296597): TransactionDigest(9JcoEYnLEXhig9VfZAJJVwTYKnukd1H66wYL3trtdJee)\r\n(0x000001ec0b8dc49b0554336403df1e2ada04fdb57419b771c8eb630e9b3ca04b, 267627735): TransactionDigest(8xNDcr1AwbrEqb2u23itmifTgqMrgPtvfAhVh18AsXRZ)\r\n(0x000001ec0b8dc49b0554336403df1e2ada04fdb57419b771c8eb630e9b3ca04b, 271524485): TransactionDigest(3DrULVDahoZBzDQgPzLQYXnDTwLQQgqxoEvhPMxxtQo2)\r\n(0x000001ec0b8dc49b0554336403df1e2ada04fdb57419b771c8eb630e9b3ca04b, 314070917): TransactionDigest(J2YDEhftnRRPhVCjQd5i8DEC2bFPXUeTHpkAC7Nm7Dvp)\r\n(0x000006711d82cfef20f556c7f70ed9fbd90802934831f32c5dddd1dd428477ec, 113151128): TransactionDigest(5UEyecqJBqsmpxpxmjycty6ZZSS2aj2ryYLUL5CuSCpS)\r\n(0x000006711d82cfef20f556c7f70ed9fbd90802934831f32c5dddd1dd428477ec, 140330634): TransactionDigest(9EE8xVh78HKn6R99vPg8sV9Bw1HKw1nbrvmu2Ff4gPNo)\r\n(0x000006711d82cfef20f556c7f70ed9fbd90802934831f32c5dddd1dd428477ec, 183838323): TransactionDigest(5qvFw1xwfpejf5kLzs5ecrqFDsF3AecwhbdiCztVJJ1L)\r\n(0x000006711d82cfef20f556c7f70ed9fbd90802934831f32c5dddd1dd428477ec, 183856691): TransactionDigest(EnzmKUKhMH7Q2HmxJfPkkJD4vvR72UndmXerxQhw1k5T)\r\n(0x000006711d82cfef20f556c7f70ed9fbd90802934831f32c5dddd1dd428477ec, 237505827): TransactionDigest(BXGYqePT88AvvN7ZvbN1Etb3Q1Wabjc9c9tdqEY1ohND)\r\n\r\n\r\n```\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-09T19:52:07Z",
          "tree_id": "71c333042f4172234cdda96c3d7f711d5a03ff62",
          "url": "https://github.com/MystenLabs/sui/commit/653c3a0287f9c28889f4cd6185681c01da4645f4"
        },
        "date": 1683662497677,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 103409924,
            "range": "± 4571210",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 302929,
            "range": "± 7809",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zlnju@outlook.com",
            "name": "wiggins-dev",
            "username": "wiggins-dev"
          },
          "committer": {
            "email": "sam@mystenlabs.com",
            "name": "Sam Blackshear",
            "username": "sblackshear"
          },
          "distinct": true,
          "id": "732007aa6a921ca4b4fe457765e5957adb9a3127",
          "message": "leave 0 as the invaild order id",
          "timestamp": "2023-05-09T13:51:27-07:00",
          "tree_id": "60c1df8e0134ddb07aac90e7261ff4348438b6ea",
          "url": "https://github.com/MystenLabs/sui/commit/732007aa6a921ca4b4fe457765e5957adb9a3127"
        },
        "date": 1683666301283,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 149676997,
            "range": "± 5994751",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 315722,
            "range": "± 34199",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "108701016+joyqvq@users.noreply.github.com",
            "name": "Joy Wang",
            "username": "joyqvq"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d98a7ee724f8f4f06c66372debf685eb37bf668c",
          "message": "crypto: multisig keytool (#11854)\n\n## Description \r\n\r\nadd useful keytool commands for multisig debugging.\r\n\r\n## Test Plan \r\n\r\ntarget/debug/sui keytool decode-multi-sig --multisig $MULTISIG\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-09T16:53:14-04:00",
          "tree_id": "a6affb2a807bdd36896e579f97c41fc6782436e9",
          "url": "https://github.com/MystenLabs/sui/commit/d98a7ee724f8f4f06c66372debf685eb37bf668c"
        },
        "date": 1683666340952,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 148171988,
            "range": "± 4408280",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 467493,
            "range": "± 43073",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "909f3519f3aad0bedae81551a43197259a6d7e20",
          "message": "expose chain identifier as a metric (#11823)\n\n## Description \r\n\r\nAs title. This will be a useful thing to watch during testnet wipe\r\n\r\n## Test Plan \r\n\r\ntested locally\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\nExpose chain identifier as a metric",
          "timestamp": "2023-05-09T15:04:04-07:00",
          "tree_id": "7af331d9faac9c5920abce4422846f963f8499ec",
          "url": "https://github.com/MystenLabs/sui/commit/909f3519f3aad0bedae81551a43197259a6d7e20"
        },
        "date": 1683670623042,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 141462710,
            "range": "± 6527552",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 312264,
            "range": "± 19736",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "55d459d7f07663914684c5d9aedb6e4fe01e0098",
          "message": "allow some sui tool commands to take a fullnode-rpc arg and use the latest committee (#11824)\n\n## Description \r\n\r\nAs title. Also remove some stale implementations and use concise keys.\r\n\r\nExample:\r\n```\r\n./sui-tool fetch-object --id 0xa577f89fcadd5805f2a9ae0b12670d3051d938e34c702484d2a5b15dd92bc057   --fullnode-rpc https://rpc.mainnet.sui.io:443\r\n```\r\n\r\n## Test Plan \r\n\r\nlocally tested sui-tool\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\nAllow some sui tool commands to take a fullnode-rpc arg and use the\r\nlatest committee. Also remove some stale implementations and use concise\r\nkeys.",
          "timestamp": "2023-05-09T22:39:37Z",
          "tree_id": "152fc01acc9f8b0903226d7d94375b98e8a19af1",
          "url": "https://github.com/MystenLabs/sui/commit/55d459d7f07663914684c5d9aedb6e4fe01e0098"
        },
        "date": 1683672845047,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 140942822,
            "range": "± 4626756",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 303694,
            "range": "± 21384",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emma@mystenlabs.com",
            "name": "Emma Zhong",
            "username": "emmazzz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d2ae28091e9533d60ebefda672e713eaa620ef68",
          "message": "[1/x] move some test util functions to wallet context (#11821)\n\n## Description \r\n\r\nFirst step towards moving functions in `test-utils/transaction` to\r\nplaces where they belong better. This PR deals with some of functions\r\nthat take in a `WalletContext`. Some of them are moved to\r\n`wallet_context.rs` and a few are moved to the caller site. More wallet\r\ncontext functions will be moved in following PRs.\r\n\r\n## Test Plan \r\n\r\nIt's all tests.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-09T23:03:03Z",
          "tree_id": "f3f544ec2b1ed0fe957f6001a6e22d084ec29847",
          "url": "https://github.com/MystenLabs/sui/commit/d2ae28091e9533d60ebefda672e713eaa620ef68"
        },
        "date": 1683674052922,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 142311446,
            "range": "± 4515490",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 355404,
            "range": "± 39597",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "caogc@users.noreply.github.com",
            "name": "caogc",
            "username": "caogc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d76537d7f1f290eb653b24575a85be50f67a91b7",
          "message": "Change SUI rosetta from statefull server to stateless (#11855)\n\n## Description \r\nDue to get transactions api has a high latency, rosetta can't sync to\r\ntip.\r\nWe are changing SUI rosetta from statefull server to stateless, this way\r\nwe don't need to sync rosetta anymore.\r\n\r\n## Test Plan \r\nThis has been tested in our testnet and mainnet, works as expected.\r\nwe tested our indexer syncing, it can sync to tip with a good syncing\r\nspeed.\r\nwe tested send/receive, works well.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\n---------\r\n\r\nCo-authored-by: Madhur Shrimal <madhur.shrimal@gmail.com>\r\nCo-authored-by: jacques.cao <jacques.cao@coinbase.com>\r\nCo-authored-by: patrick <patrickkuo@me.com>",
          "timestamp": "2023-05-10T01:14:19+01:00",
          "tree_id": "9bb3628ed7136e26101c74c864a213f461d8a79f",
          "url": "https://github.com/MystenLabs/sui/commit/d76537d7f1f290eb653b24575a85be50f67a91b7"
        },
        "date": 1683678336235,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 141340001,
            "range": "± 4674045",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 392268,
            "range": "± 48387",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1415a38d5840c97af27354654e27502098768d81",
          "message": "Fix uptime metrics (#11870)\n\n## Description \r\n\r\nFix uptime metrics by providing the right label names.\r\n\r\n## Test Plan \r\n\r\nTested locally by starting a node and see it not crash.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\nFix uptime metrics by providing the right label names.",
          "timestamp": "2023-05-10T02:09:04Z",
          "tree_id": "7be9fb9da6c069346b43eb51671f1f13bb675296",
          "url": "https://github.com/MystenLabs/sui/commit/1415a38d5840c97af27354654e27502098768d81"
        },
        "date": 1683685231201,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 143118242,
            "range": "± 4327193",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 424955,
            "range": "± 71416",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aschran@mystenlabs.com",
            "name": "Andrew Schran",
            "username": "aschran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff6c213d21f691880bff7514f1a550668c2d4330",
          "message": "Use RTT-based peer selection for state sync (#11863)",
          "timestamp": "2023-05-09T19:53:46-07:00",
          "tree_id": "533b5673b8c483a399a4708591dcd11bfe9990b1",
          "url": "https://github.com/MystenLabs/sui/commit/ff6c213d21f691880bff7514f1a550668c2d4330"
        },
        "date": 1683687881268,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 108248419,
            "range": "± 3638326",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 256237,
            "range": "± 10797",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8359729aba22d81f3ff8f2abad59bf6a99231a0a",
          "message": "Check for any changes to protocol config snapshots relative to deployed commits (#11869)\n\nUsage:\r\n\r\n```\r\n$ API_USER=incoming_metrics API_KEY=xxxxxxxx ./scripts/compatibility/check-protocol-compatibility.sh mainnet\r\nFound following versions on mainnet:\r\n  87 1.0.0-ae1212baf\r\n  10 1.0.0-ae1212baf8\r\n   1 1.0.0-ae1212baf-dirty\r\n   1 1.0.0-ae1212b\r\n   1 1.0.0-92d2c16dc\r\n\r\nUsing most frequent version 1.0.0-ae1212baf for compatibility check\r\nChecking protocol compatibility with mainnet (ae1212baf)\r\nChecking out mainnet snapshot files\r\nChecking for changes to snapshot files\r\nRunning snapshot tests...\r\n    Finished test [unoptimized + debuginfo] target(s) in 0.61s\r\nwarning: the following packages contain code that will be rejected by a future version of Rust: nom v5.1.2\r\nnote: to see what the problems were, use the option `--future-incompat-report`, or run `cargo report future-incompatibilities --id 459`\r\n     Running unittests src/lib.rs (target/debug/deps/sui_protocol_config-aa6de2cd5cfddab5)\r\n\r\nrunning 1 test\r\ntest test::snapshot_tests ... ok\r\n\r\ntest result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 2 filtered out; finished in 0.36s\r\n```",
          "timestamp": "2023-05-09T22:11:00-07:00",
          "tree_id": "75412c0c36736137633248b60c54d149c0709041",
          "url": "https://github.com/MystenLabs/sui/commit/8359729aba22d81f3ff8f2abad59bf6a99231a0a"
        },
        "date": 1683696156653,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 109750006,
            "range": "± 3401253",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 301884,
            "range": "± 4193",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "81660174+mwtian@users.noreply.github.com",
            "name": "mwtian",
            "username": "mwtian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b134868df506ecd674e032fd01882d50c95163c6",
          "message": "[Rust] use toml format for toolchain file (#11873)\n\n## Description \r\n\r\nOtherwise, it seems dependabot is unable to parse the file:\r\nhttps://github.com/MystenLabs/sui/network/updates/660546308\r\n\r\n## Test Plan \r\n\r\nCI\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-10T06:22:38Z",
          "tree_id": "aea4a18de7be7a62b983dab434f8e368b0326b47",
          "url": "https://github.com/MystenLabs/sui/commit/b134868df506ecd674e032fd01882d50c95163c6"
        },
        "date": 1683700450947,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145963533,
            "range": "± 11909130",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 392868,
            "range": "± 76511",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patrickkuo@me.com",
            "name": "Patrick Kuo",
            "username": "patrickkuo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18f149d0343054f46b13507d7023138ee961ad80",
          "message": "[bugfix] - remove outliers from APY calculation (#11867)\n\n## Description \r\n\r\nremove outliers from APY calculation\r\n\r\n## Test Plan \r\n\r\nTested locally using mainnet data\r\n\r\n```\r\n{\r\n    \"jsonrpc\": \"2.0\",\r\n    \"result\": {\r\n        \"apys\": [\r\n            {\r\n                \"address\": \"0x11ec7353e9e08ed4ca13b935ad930a2f937112736aec5eedd08c95cc5cd4c264\",\r\n                \"apy\": 0.0767903236026177\r\n            },\r\n            {\r\n                \"address\": \"0x8f8ea04f3b751533db8b8da0a40eba1ca8332a92680f058d83b9459d061aaa54\",\r\n                \"apy\": 0.07951951637709039\r\n            },\r\n            {\r\n                \"address\": \"0xdead0072f3a00a250cc8dd90315e92822130258105a494f831ee9bb1576fd71f\",\r\n                \"apy\": 0.0763476531184526\r\n            },\r\n            {\r\n                \"address\": \"0xf4da1d0d8eba4aed89542daa6d720fed039012f36a2ec42563c9adb50726a09c\",\r\n                \"apy\": 0.08415307387484125\r\n            },\r\n            {\r\n                \"address\": \"0x4ce8d9d329879f3b361c9515f48acc0f91b283a7305f6c9c789b0c8d1ebf43f2\",\r\n                \"apy\": 0.07635222774745001\r\n            },\r\n            {\r\n                \"address\": \"0x633344069731c08d06212beb1c2fd2f9d87e53295335733c3e4bb059950513d6\",\r\n                \"apy\": 0.07833910221708192\r\n            },\r\n            {\r\n                \"address\": \"0x054f9044e0fd71c2ff621981c332ba41d686fb705143d1dfd3a3b69a46e8f66e\",\r\n                \"apy\": 0.08340897002262472\r\n            },\r\n            {\r\n                \"address\": \"0xdfc9709adae2917a9be213c8d651b150517fbc8b99106bbd3020e618335ccf18\",\r\n                \"apy\": 0.08340712205702847\r\n            },\r\n            {\r\n                \"address\": \"0x184fbf9d6c2d2d3f27e27fe3ca2d3b4080bd406221e345e2d36633e638e988e1\",\r\n                \"apy\": 0.08368151355129208\r\n            },\r\n            {\r\n                \"address\": \"0x68cf08c4ef8b0462d8c3879f4e26cc371fbddd844650d0c41a9c3badc8104609\",\r\n                \"apy\": 0.08362019043509814\r\n            },\r\n            {\r\n                \"address\": \"0x876e2ad4ba0375c7752d24ca47c69e7096e6dbfd82a215612a08f47cffebcfbc\",\r\n                \"apy\": 0.08439628964583548\r\n            },\r\n            {\r\n                \"address\": \"0xa608b66f7ae2201286f7dd07a8b073cde7955b35056629636a6c9b3f5275f384\",\r\n                \"apy\": 0.08357650776665738\r\n            },\r\n            {\r\n                \"address\": \"0xbc7e7537564bd939b62e5b24477ac00ba8cef33ccec72d63090a080a1253b725\",\r\n                \"apy\": 0.08101583328630199\r\n            },\r\n            {\r\n                \"address\": \"0xe85738f9cb22cf80f77b861a9e9aca13c0a297cf0f1c075d35a9b3fb94bf6f89\",\r\n                \"apy\": 0.08340550638821245\r\n            },\r\n            {\r\n                \"address\": \"0x9062fc51d91056246dc31f2b818a4ddb113a044ec22c8dd0674616bbe56f7192\",\r\n                \"apy\": 0.07775822593332585\r\n            },\r\n            {\r\n                \"address\": \"0x970f9006836b3eead979bbb97d2ae8f8f331a0834209f2bc878ed142fa9ad1ee\",\r\n                \"apy\": 0.07948272358000133\r\n            },\r\n            {\r\n                \"address\": \"0x0c1bebfe4c2258f16282f3ab186151c91f4349c5b2956e831a8f670a71709b90\",\r\n                \"apy\": 0.0834002857486982\r\n            },\r\n            {\r\n                \"address\": \"0x2761e3db0abe9a2029291980ebad551b7c68dd53d1150adfa9f9ed8a2368458e\",\r\n                \"apy\": 0.08227432929877608\r\n            },\r\n            {\r\n                \"address\": \"0x43b8f743162704af85214b0d0159fbef11aae0e996a8e9eac7fafda7fc5bd5f2\",\r\n                \"apy\": 0.08228113337322121\r\n            },\r\n            {\r\n                \"address\": \"0x1ea86ae398023fb87b522673020b1709640221566de33585acfcf6a865f6f467\",\r\n                \"apy\": 0.08341019005597021\r\n            },\r\n            {\r\n                \"address\": \"0xbba318294a51ddeafa50c335c8e77202170e1f272599a2edc40592100863f638\",\r\n                \"apy\": 0.081195130242627\r\n            },\r\n            {\r\n                \"address\": \"0x1e1985024aafe50a8e4eafc5a89eb7ecd58ba08c39f37688bee00bd55c8b2059\",\r\n                \"apy\": 0.08339787490829798\r\n            },\r\n            {\r\n                \"address\": \"0x1290ab8bca1c136d2b86967674a43a0f5cb30b352f90233cc37ebf7452b96787\",\r\n                \"apy\": 0.07785527377775672\r\n            },\r\n            {\r\n                \"address\": \"0x91b3d7211dbe057d02e2aa06f1cd678f1408438d494d2e783e0b67a77cca4599\",\r\n                \"apy\": 0.08271898434137988\r\n            },\r\n            {\r\n                \"address\": \"0xc3af1f2ca3dc69a70616fa3707f67a9367f8d01d4b75a40520b931d42241695e\",\r\n                \"apy\": 0.08132147223871973\r\n            },\r\n            {\r\n                \"address\": \"0x27002933548d3c8a5d8e2fbddc541e1e66aeeaff1b60465c2df52974f96ad3d0\",\r\n                \"apy\": 0.0769049641915051\r\n            },\r\n            {\r\n                \"address\": \"0x92c7bf9914897e8878e559c19a6cffd22e6a569a6dd4d26f8e82e0f2ad1873d6\",\r\n                \"apy\": 0.07903361624174741\r\n            },\r\n            {\r\n                \"address\": \"0x9782704c86b40c55e709fb866865c507c732fa0af5b87246feabfef4423f4f90\",\r\n                \"apy\": 0.083619918619497\r\n            },\r\n            {\r\n                \"address\": \"0x0350925241ae8d4083fe4b1104e14dd28d2ffeced9d7575551c50c41b99995fb\",\r\n                \"apy\": 0.08706517677142459\r\n            },\r\n            {\r\n                \"address\": \"0x96c01291eb1d4f02aacc1e466d2980a8fdfbea96661ad8da4f8569af49b619a1\",\r\n                \"apy\": 0.07829338652970093\r\n            },\r\n            {\r\n                \"address\": \"0xd01cb1b0c196042fde8af58e9b3208fe5e64d920bb3f9ace9064c4b7d8c64cf5\",\r\n                \"apy\": 0.08227901886465176\r\n            },\r\n            {\r\n                \"address\": \"0x4f9791d5c689306862b4eb9a25914c5433b7dfd5cb4827b461f7dfc813f28a7c\",\r\n                \"apy\": 0.08279856076223709\r\n            },\r\n            {\r\n                \"address\": \"0xceb2b8c295ee322cd299e4bdc3d3d0dce1dc9c85eb683f7d82ea2e4f8f4e259f\",\r\n                \"apy\": 0.07732411415768306\r\n            },\r\n            {\r\n                \"address\": \"0xec73ec4d6b2a9403937b12ca625f7b3124c4459ff4e3caae6cf6376edefb9f3a\",\r\n                \"apy\": 0.0827376078484503\r\n            },\r\n            {\r\n                \"address\": \"0x9c7376a3f903cbe1f467a4edbefb54bb5a2f10886496c591ca955c22f0ae10c9\",\r\n                \"apy\": 0.0830607147116446\r\n            },\r\n            {\r\n                \"address\": \"0x641c736d38b329dae7879d5164566e9256825c5fc82b2565b50d45e6a6522c1d\",\r\n                \"apy\": 0.07920385432559618\r\n            },\r\n            {\r\n                \"address\": \"0xe0e042d1aacba8abf6f32be86c555a08eae5ba2b7972c912f7451104391e8c57\",\r\n                \"apy\": 0.08059594462616228\r\n            },\r\n            {\r\n                \"address\": \"0x885c0345bbf4441f39b98caf2295640a4dc3696ee9e8bc68f2101ca5e6f9bbf1\",\r\n                \"apy\": 0.08615125632724542\r\n            },\r\n            {\r\n                \"address\": \"0xd1d00bcc9661120fc6b0f233a2f6810f39e71b39fc637cb1b9e5635edb3b0c40\",\r\n                \"apy\": 0.08339685470901416\r\n            },\r\n            {\r\n                \"address\": \"0xa987c410fa047b973d479555894c85208c4450ef65fd1d8d5911b46fbca83365\",\r\n                \"apy\": 0.07857924154467437\r\n            },\r\n            {\r\n                \"address\": \"0xd6edebcfa598dcb6e71037b34f09ddc6a20dd874edca1d89d5ccd11ec070d040\",\r\n                \"apy\": 0.144855545841425\r\n            },\r\n            {\r\n                \"address\": \"0x61953ea72709eed72f4441dd944eec49a11b4acabfc8e04015e89c63be81b6ab\",\r\n                \"apy\": 0.07845494509031511\r\n            },\r\n            {\r\n                \"address\": \"0x333b6f2a08d138e8c98d84258859b701a4215e2fabb2aee69300f9f4604cda92\",\r\n                \"apy\": 0.07634698842180662\r\n            },\r\n            {\r\n                \"address\": \"0x262d556ae0d627450a91a353ddc3aaeb9ff0549172daf4d94ffb3a4401e6f930\",\r\n                \"apy\": 0.08340640725716462\r\n            },\r\n            {\r\n                \"address\": \"0x5d6ee8465b31200131242fa79e84893518f6e3929d995f385ca9eda74db2361d\",\r\n                \"apy\": 0.07740255807264153\r\n            },\r\n            {\r\n                \"address\": \"0x55d2bd7e02c0863914c3af925188c6947e9209b39eb304c630525d69294c3be0\",\r\n                \"apy\": 0.08308721039435422\r\n            },\r\n            {\r\n                \"address\": \"0xa528acf0c239c28985da3170870629eb58dd9fb2683548317ce0a218427abb8d\",\r\n                \"apy\": 0.08340884738773623\r\n            },\r\n            {\r\n                \"address\": \"0x9b8b11c9b2336d35f2db8d5318ff32de51b85857f0e53a5c31242cf3797f4be4\",\r\n                \"apy\": 0.07739267560157075\r\n            },\r\n            {\r\n                \"address\": \"0x0ae4b2b4ed34dd551a01a946e51c0c431726faf5568659560f76b31642588468\",\r\n                \"apy\": 0.08269233824954789\r\n            },\r\n            {\r\n                \"address\": \"0xefa5f0435f230579dc95f219a1a8929f91b98cba727d7c1de8b10738be431ade\",\r\n                \"apy\": 0.08377835465743202\r\n            },\r\n            {\r\n                \"address\": \"0xe719405821d7bd32ded86a2aed34f06f3dacd09c91241ec3f34b219ebeddc6f0\",\r\n                \"apy\": 0.08419423240838812\r\n            },\r\n            {\r\n                \"address\": \"0x02189430bd03a05813f0b5998dd6e400d21e831d31f609bb0142b869e0fa020b\",\r\n                \"apy\": 0.08296219328761227\r\n            },\r\n            {\r\n                \"address\": \"0xc21c40c94c712f17244d8518688dbaaa81ba232c15cb13dbba138ead55451e43\",\r\n                \"apy\": 0.08555569126109819\r\n            },\r\n            {\r\n                \"address\": \"0x4430b86069d8850d9bee199739e5fc90bb0f323a5a7735f431ec7a5fb5409e6b\",\r\n                \"apy\": 0.08227630686883229\r\n            },\r\n            {\r\n                \"address\": \"0xcb7efe4253a0fe58df608d8a2d3c0eea94b4b40a8738c8daae4eb77830c16cd7\",\r\n                \"apy\": 0.08437811037186428\r\n            },\r\n            {\r\n                \"address\": \"0xf9c6994c28a882fc87c0e69a44d0bf29796ff8256621d26eea49f3d776c6133e\",\r\n                \"apy\": 0.0842026091205063\r\n            },\r\n            {\r\n                \"address\": \"0x3047b5258a4ba6d7a6bea9ada69cb336ecfb24fe1c3cea83094396665eba0de5\",\r\n                \"apy\": 0.08445492617999843\r\n            },\r\n            {\r\n                \"address\": \"0x25afdbeaa4d530119cb464715cead11e0a1ef86256f3020128fbd7013954a99d\",\r\n                \"apy\": 0.08239582729681746\r\n            },\r\n            {\r\n                \"address\": \"0xe08d75c562928f58bdbe697e7e35de4802535722337d88305669286e649a104c\",\r\n                \"apy\": 0.08238433802466145\r\n            },\r\n            {\r\n                \"address\": \"0x6f4e73ee97bfae95e054d31dff1361a839aaadf2cfdb873ad2b07d479507905a\",\r\n                \"apy\": 0.08321106327999342\r\n            },\r\n            {\r\n                \"address\": \"0xf7abab51fdf9b4626ce706a5dfbb3da13a715700149bc816dfbee2ae73d61be5\",\r\n                \"apy\": 0.0779734008396977\r\n            },\r\n            {\r\n                \"address\": \"0x22a4a737eb86d98a62336dd4cf6b957321884dda7446b7c4c720f2c9090aa7c3\",\r\n                \"apy\": 0.08183699947979421\r\n            },\r\n            {\r\n                \"address\": \"0xc6b70330451f4c163ce75625510bf99a8c782a5c5b1dd400a08fc20b2086dc00\",\r\n                \"apy\": 0.07953985856109057\r\n            },\r\n            {\r\n                \"address\": \"0xd939e3fe7ea4d503f84767dca0c58b7ec1c71f085638a4c0611aa64aa71b5fcf\",\r\n                \"apy\": 0.07853804606325254\r\n            },\r\n            {\r\n                \"address\": \"0x574c1625635f7311eb6df2f5aa2f0482c33e83498063942c0585f2363fc0ee02\",\r\n                \"apy\": 0.08378586885547401\r\n            },\r\n            {\r\n                \"address\": \"0x9d0438098adf019a8c5a8708c7fc0075f6f19fcd251bf3eaabe0c7f74036ce5a\",\r\n                \"apy\": 0.07590478018537901\r\n            },\r\n            {\r\n                \"address\": \"0x0de5a09a0b029b0c4f1017a58dc78a2341511a7f6ba4925287aa836c1166dbbe\",\r\n                \"apy\": 0.07797567427519454\r\n            },\r\n            {\r\n                \"address\": \"0xd30018ec3f5ff1a3c75656abf927a87d7f0529e6dc89c7ddd1bd27ecb05e3db2\",\r\n                \"apy\": 0.08400912768879297\r\n            },\r\n            {\r\n                \"address\": \"0xfdac6c544f156578adb6adfa351bb4d1fc85f9025af67818ffef87ce868b1644\",\r\n                \"apy\": 0.07791522891671364\r\n            },\r\n            {\r\n                \"address\": \"0x2622b55585033f26b0a86b378de1a6284c2dda531e52ef30ea87a8df81f4630a\",\r\n                \"apy\": 0.08164891237343322\r\n            },\r\n            {\r\n                \"address\": \"0xee6e1f8e2726e6bc2bf36ab7dd5736afff076704b12271a332f49f8e7d0bf756\",\r\n                \"apy\": 0.08031695384381976\r\n            },\r\n            {\r\n                \"address\": \"0xa92837bac51949cd6bac41dcec57d2a769f3c2cd2e8c0512f3eea0a2a2102b94\",\r\n                \"apy\": 0.08567578454512367\r\n            },\r\n            {\r\n                \"address\": \"0x8ecaf4b95b3c82c712d3ddb22e7da88d2286c4653f3753a86b6f7a216a3ca518\",\r\n                \"apy\": 0.06775186008972557\r\n            },\r\n            {\r\n                \"address\": \"0xb7847468db546ba85acb9dcdc0c5190b3ca6427d713ff52a4f8183c81f8a39e1\",\r\n                \"apy\": 0.0773993543026319\r\n            },\r\n            {\r\n                \"address\": \"0xa2ae7af4173722d07df5096a52f305f5d94578f4b78d301056a4b3b05e636488\",\r\n                \"apy\": 0.084183259418137\r\n            },\r\n            {\r\n                \"address\": \"0x8a0907e2990baebbbb87c12821db4845b034e45f937167e68b4925ac3465335a\",\r\n                \"apy\": 0.07590736285553394\r\n            },\r\n            {\r\n                \"address\": \"0x60ce054d9dc5771fcbeb9a52a1881a97d3092efc8eb29befc3e60281dbe80ca0\",\r\n                \"apy\": 0.08267801290660629\r\n            },\r\n            {\r\n                \"address\": \"0xb788ef0e41bc4105cd4c90ff269d07ccf0c8c62552b981c38966f338f69e0e09\",\r\n                \"apy\": 0.07797215547531865\r\n            },\r\n            {\r\n                \"address\": \"0xe05098c2049b9e4c37be7a3be42214498603b981d514a581ef741dc628651b1a\",\r\n                \"apy\": 0.08378719916868484\r\n            },\r\n            {\r\n                \"address\": \"0x7e254f0f55e24b8a6995567241618f750d0d94f2cf49b36703869779d2ee4327\",\r\n                \"apy\": 0.08016627059490415\r\n            },\r\n            {\r\n                \"address\": \"0xf72816357f8e5638c90ec5b0f7eecee362bac0ef7e64822ea6d686730251a7a0\",\r\n                \"apy\": 0.07844010843999379\r\n            },\r\n            {\r\n                \"address\": \"0x3b5664bb0f8bb4a8be77f108180a9603e154711ab866de83c8344ae1f3ed4695\",\r\n                \"apy\": 0.07797552190031744\r\n            },\r\n            {\r\n                \"address\": \"0xc64e58562d424e248abce5b886b264209c23d05b7b75bc5a1a5e137700f0ddf8\",\r\n                \"apy\": 0.08327935606924466\r\n            },\r\n            {\r\n                \"address\": \"0xa36a0602be0fcbc59f7864c76238e5e502a1e13150090aab3c2063d34dde1d8a\",\r\n                \"apy\": 0.08151377535907785\r\n            },\r\n            {\r\n                \"address\": \"0x59031a8ba47e04dade3eea9dba0c7ccf8ed3ab9d51d7561add640f687add04ed\",\r\n                \"apy\": 0.07797147664134545\r\n            },\r\n            {\r\n                \"address\": \"0x51ff201c85824151a1c4f80637f39032788b0f00de88e97a6f7deb56d2e38f49\",\r\n                \"apy\": 0.08265888612853813\r\n            },\r\n            {\r\n                \"address\": \"0x00ae78d3e5ba5d6b8de32455474f52811b95617cbad39ebf4f9e2daf67187407\",\r\n                \"apy\": 0.08459118501349115\r\n            },\r\n            {\r\n                \"address\": \"0xa2bf32db91ad54684cfd8a4e1d85f7672875d62421d40a8d993f601cff9b61ff\",\r\n                \"apy\": 0.083259164729933\r\n            },\r\n            {\r\n                \"address\": \"0xad1ca3844353d0c1b86fea2d848fda0c62439168c29e132ef17f9964a19a551f\",\r\n                \"apy\": 0.08364301180763246\r\n            },\r\n            {\r\n                \"address\": \"0xfcb6007ef5f253d4e8ad894a4278bd780a1e1b7b5a17ffbf47f10e73b2508e66\",\r\n                \"apy\": 0.08011117499960137\r\n            },\r\n            {\r\n                \"address\": \"0x4fffd0005522be4bc029724c7f0f6ed7093a6bf3a09b90e62f61dc15181e1a3e\",\r\n                \"apy\": 0.08438166321956832\r\n            },\r\n            {\r\n                \"address\": \"0xdac37b139f9376a45bf6fda1dd691962008ac9647f59086c90a6ad2777f27336\",\r\n                \"apy\": 0.079952557862968\r\n            },\r\n            {\r\n                \"address\": \"0x24f61ae027301ee5ea68559b6d5f96de1c4879e1c85586044e08132d6af6ffd3\",\r\n                \"apy\": 0.08339198519151103\r\n            },\r\n            {\r\n                \"address\": \"0x16c48b033a860c39905842eb52178d612c323e4418d5a90b29dba4ebc5895b00\",\r\n                \"apy\": 0.08231893261904848\r\n            },\r\n            {\r\n                \"address\": \"0xcda5da2f66fae9abe9620900c4e91d5b72e514b01fc17fbb27587e6c3f3b9f36\",\r\n                \"apy\": 0.07730140354262642\r\n            },\r\n            {\r\n                \"address\": \"0xdd7330643eed25139d9fed288361e4cd3db54c7e0e8daecf26de4f99bbd71352\",\r\n                \"apy\": 0.07821979200256017\r\n            },\r\n            {\r\n                \"address\": \"0xc77c9ba2f86fe51cefb7aa340c6956f5c0818f999004389ab95330ba839dfb0c\",\r\n                \"apy\": 0.08328426732029927\r\n            },\r\n            {\r\n                \"address\": \"0xd1dbb08191b4ae8e227935669c1862ba75a41cd7df5970002eafb2f365c32ed8\",\r\n                \"apy\": 0.08220524085078099\r\n            },\r\n            {\r\n                \"address\": \"0xefc45ee5de49f376b66b73f6bab9fbc0c452b18e1cfc5035c268c6786dd8bb63\",\r\n                \"apy\": 0.09569840106361724\r\n            },\r\n            {\r\n                \"address\": \"0xc1b37fe62cf632c4447af7cd8342297400735fcb849aca29c89f061a619aca44\",\r\n                \"apy\": 0.09348722082442944\r\n            }\r\n        ],\r\n        \"epoch\": \"27\"\r\n    },\r\n    \"id\": 1\r\n}\r\n```",
          "timestamp": "2023-05-10T08:15:18+01:00",
          "tree_id": "8da612cf0d21889446199d85000969358c977eed",
          "url": "https://github.com/MystenLabs/sui/commit/18f149d0343054f46b13507d7023138ee961ad80"
        },
        "date": 1683703530071,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145393182,
            "range": "± 5050140",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 313030,
            "range": "± 31517",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zlnju@outlook.com",
            "name": "wiggins-dev",
            "username": "wiggins-dev"
          },
          "committer": {
            "email": "sam@mystenlabs.com",
            "name": "Sam Blackshear",
            "username": "sblackshear"
          },
          "distinct": true,
          "id": "dc13855aef7744dbc377c117ae29871792ba8d6c",
          "message": "[Deepbook] Upgrade account_balance #11837\n\n## Description\nUpgrade the logic of query function of account balance\nReturn asset available and locked as (0, 0) when account capacity is absent\n\n## Test Plan\n\ncd to deepbook dir and run \"sui move test\"\n\n---\nIf your changes are not user-facing and not a breaking change, you can\nskip the following section. Otherwise, please indicate what changed, and\nthen add to the Release Notes section as highlighted during the release\nprocess.\n\n### Type of Change (Check all that apply)\n\n- [ ] user-visible impact\n- [ ] breaking change for a client SDKs\n- [ ] breaking change for FNs (FN binary must upgrade)\n- [ ] breaking change for validators or node operators (must upgrade\nbinaries)\n- [ ] breaking change for on-chain data layout\n- [ ] necessitate either a data wipe or data migration\n\n### Release notes\n\n---------",
          "timestamp": "2023-05-10T08:27:31-07:00",
          "tree_id": "a9f4258a16f02296ae66e7b4c14e2b3d924580bf",
          "url": "https://github.com/MystenLabs/sui/commit/dc13855aef7744dbc377c117ae29871792ba8d6c"
        },
        "date": 1683733469064,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 105936411,
            "range": "± 4450246",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 255141,
            "range": "± 19537",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e17e9cd4628ebecc14b63aea33f4f4dae9206490",
          "message": "[Part 1/3] Use TestCluster universally in sui tests (#11816)\n\nA lot of tests spawn authority nodes individually. This is redundant to\r\nthe functionality of TestCluster.\r\nThis PR replaces a large number of those tests to use TestCluster\r\ninsdead.\r\n\r\nThere are two categories that are not update in this PR:\r\n1. Dynamic committee change tests: these types of tests requires some\r\ncareful crafting of validator set and their keys. I need to figure out a\r\nsystematic way for integrating them into TestCluster.\r\n2. Many of the shared object tests heavily depend on transactions.rs,\r\nwhich is currently being cleaned up. Leaving that part along to avoid\r\nmerge conflicts.",
          "timestamp": "2023-05-10T08:49:46-07:00",
          "tree_id": "a108e4bc0509f7b4d038cc40e34a95bfc82fc9fc",
          "url": "https://github.com/MystenLabs/sui/commit/e17e9cd4628ebecc14b63aea33f4f4dae9206490"
        },
        "date": 1683734528813,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146464703,
            "range": "± 4788941",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 338668,
            "range": "± 23792",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "123987499+suiwombat@users.noreply.github.com",
            "name": "Joe Hrbek",
            "username": "suiwombat"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aaa1afb95ffddf32d1f0503de89fdbd455f8cd37",
          "message": "[metrics/add snappy compression to sui-node/sui-proxy] (#11866)\n\nSummary:\r\n\r\n* add snappy encoding to the sui-node/proxy\r\n\r\nTest Plan:\r\n\r\ndata suggests that it would be worthwhile compressing this for transport\r\nbetween the sui-node and sui-proxy\r\n\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-10T11:42:47-05:00",
          "tree_id": "1ffa0db0c80c7914f2c7246767942a4fd58a001b",
          "url": "https://github.com/MystenLabs/sui/commit/aaa1afb95ffddf32d1f0503de89fdbd455f8cd37"
        },
        "date": 1683737661921,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 151469249,
            "range": "± 6165795",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 364273,
            "range": "± 54596",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "13f90cf0ef3d81b826cd2e78b56ea9061e28ead2",
          "message": "Fix cluster test (#11878)\n\nThis is a walk around to lower the gas budget used by publish.\r\nWe need to properly fix tests by using the right constant budget in\r\ngeneral.",
          "timestamp": "2023-05-10T10:35:18-07:00",
          "tree_id": "e5ed280cb2e27ded1b4e2355ee244e4541c23aee",
          "url": "https://github.com/MystenLabs/sui/commit/13f90cf0ef3d81b826cd2e78b56ea9061e28ead2"
        },
        "date": 1683740852366,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 141656463,
            "range": "± 4869178",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 314879,
            "range": "± 27855",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a1aa56dd99761466166bca3d602996a62137facd",
          "message": "Rename OBJECT_ID to PACKAGE_ID for framework (#11846)\n\nTo reduce confusion",
          "timestamp": "2023-05-10T12:06:49-07:00",
          "tree_id": "e62c64cd2ce821ec505ce68633864f5944598cb1",
          "url": "https://github.com/MystenLabs/sui/commit/a1aa56dd99761466166bca3d602996a62137facd"
        },
        "date": 1683746395446,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147580673,
            "range": "± 5005899",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 617483,
            "range": "± 66266",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "118224482+ronny-mysten@users.noreply.github.com",
            "name": "ronny-mysten",
            "username": "ronny-mysten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8af9ec1cc412c946c95b173655ee90f968f5c168",
          "message": "Added examples and made verbs singular  (#11871)\n\n## Description \r\n\r\nAdded examples for RPC API. Changed verbs to match singular subject (the\r\nexample request) based on agreement with @healthydeve previous\r\nsuggestion.\r\n\r\n## Test Plan \r\n\r\nLocal\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-10T13:25:18-06:00",
          "tree_id": "ac2289cbea983bd74d62d3f28cdc1c0ef099daff",
          "url": "https://github.com/MystenLabs/sui/commit/8af9ec1cc412c946c95b173655ee90f968f5c168"
        },
        "date": 1683747314943,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 105941489,
            "range": "± 4220667",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 309964,
            "range": "± 21800",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "123987499+suiwombat@users.noreply.github.com",
            "name": "Joe Hrbek",
            "username": "suiwombat"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a2ed5a93771b71ebe2ad94c231c245696d558ae9",
          "message": "[sui-proxy/ add more buckets for consumer ops] (#11886)\n\nSummary:\r\n\r\n* add more buckets for consumer ops duration histogram\r\n\r\nTest Plan:\r\ncargo build\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-10T13:25:03-07:00",
          "tree_id": "fc671d3b64a61631de55b112ddb2c1a51bb991c2",
          "url": "https://github.com/MystenLabs/sui/commit/a2ed5a93771b71ebe2ad94c231c245696d558ae9"
        },
        "date": 1683751129259,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146876894,
            "range": "± 4782152",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 310890,
            "range": "± 22332",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emma@mystenlabs.com",
            "name": "Emma Zhong",
            "username": "emmazzz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a0c330cd7236e15479596963987c34a27c8e7d6a",
          "message": "update default stake subsidy parameters to match testnet (#11826)\n\n## Description \r\n\r\nChange the decrease rate to actually 10% and period length to 10 epochs.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-10T13:38:12-07:00",
          "tree_id": "02e1d21c8357fb211e78c2961ce54173b8b7a67f",
          "url": "https://github.com/MystenLabs/sui/commit/a0c330cd7236e15479596963987c34a27c8e7d6a"
        },
        "date": 1683751612747,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 103849283,
            "range": "± 5435543",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 307497,
            "range": "± 35099",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rvantonder@gmail.com",
            "name": "Rijnard van Tonder",
            "username": "rvantonder"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c636b85c941e90a303aaff70c9ce1093a1724fb4",
          "message": "move: improve upgrade transactional test setup for dependencies (#11128)",
          "timestamp": "2023-05-10T13:42:07-07:00",
          "tree_id": "4ad47068da2fe1cdf105610dbb932be1aea5a53d",
          "url": "https://github.com/MystenLabs/sui/commit/c636b85c941e90a303aaff70c9ce1093a1724fb4"
        },
        "date": 1683751943264,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 148696695,
            "range": "± 5765973",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 321215,
            "range": "± 30148",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "23a212db97f6b8a5395dc8d7bbbf90bc26e8e106",
          "message": "indexer: address & active address tables (#11864)\n\nFor feature requests of `addresses` and `active_addresses` tables, also\r\nlogging he first and last tx & timestamp for daily active address later.\r\n\r\n## Test\r\n\r\nrun locally to make sure that \r\n- addresses table and active_addresses table can be populated properly\r\n- last_appearance_tx|time is updated but first_appearance_tx|time is\r\nstatic",
          "timestamp": "2023-05-10T17:17:34-04:00",
          "tree_id": "54438c76ef31fe0f78f201f5fe049ff1396f075e",
          "url": "https://github.com/MystenLabs/sui/commit/23a212db97f6b8a5395dc8d7bbbf90bc26e8e106"
        },
        "date": 1683753965133,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 106615251,
            "range": "± 4665853",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 345805,
            "range": "± 27265",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3f576a0ea21c90ff2ad58e21e00d31db79f5826c",
          "message": "Replay from dead/forked node: Introduce `NodeStateDump` (#11880)\n\n## Description \r\n\r\nThis introduces `NodeStateDump` which is the set of objects and info\r\nrequired to reproduce a fork in replay.\r\nThe created state is a few MB, so not too concerning. Json was so the\r\ndata is human readable.\r\n\r\nMost of the logic in this PR is in getting the replay system to load\r\nfrom state dump.\r\n\r\nSample config\r\n```\r\nstate-debug-dump-config:\r\n  dump-file-directory: /tmp/\r\n```\r\n\r\n## Test Plan \r\n\r\nTested by simulating forks and replaying from dumps.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-10T21:23:24Z",
          "tree_id": "c3864f6eaf45514b48556498ed67564d3edb14f8",
          "url": "https://github.com/MystenLabs/sui/commit/3f576a0ea21c90ff2ad58e21e00d31db79f5826c"
        },
        "date": 1683754478847,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 155622038,
            "range": "± 6858508",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 522475,
            "range": "± 40071",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andrey@mystenlabs.com",
            "name": "Andrey Chursin",
            "username": "andll"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fb592035977cefa9efc9f1a9bccf167bfe4d2f47",
          "message": "[checkpoints] Remove legacy code before InMemoryCheckpointRoots feature (#11894)\n\nLatest mainnet epoch has this flag\r\n[on](https://metrics.sui.io/explore?left=%7B%22datasource%22:%22e6b9ae38-5a18-477b-bd96-c67b655dd4aa%22,%22queries%22:%5B%7B%22datasource%22:%7B%22type%22:%22prometheus%22,%22uid%22:%22e6b9ae38-5a18-477b-bd96-c67b655dd4aa%22%7D,%22editorMode%22:%22code%22,%22expr%22:%22epoch_flags%7Bnetwork%3D%5C%22mainnet%5C%22%7D%22,%22hide%22:false,%22interval%22:%2260s%22,%22range%22:true,%22refId%22:%22C%22%7D%5D,%22range%22:%7B%22from%22:%22now-6h%22,%22to%22:%22now%22%7D%7D&orgId=1)\r\n(and it has been for a while now)",
          "timestamp": "2023-05-10T14:26:29-07:00",
          "tree_id": "0edd684c213e43b25a6c8f06d7c33ee4045870e5",
          "url": "https://github.com/MystenLabs/sui/commit/fb592035977cefa9efc9f1a9bccf167bfe4d2f47"
        },
        "date": 1683754501325,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 106545378,
            "range": "± 10594771",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 313032,
            "range": "± 25126",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "113150618+dariorussi@users.noreply.github.com",
            "name": "Dario Russi",
            "username": "dariorussi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7c6accabbb5d57c7cfbf0c4b27c574ebeea5469e",
          "message": "Create a LayoutResolver to compute layout from VM types (#11529)\n\n## Description \r\n\r\n- Move expensive_check_sui_conservation to node init\r\n- Expose a layout resolver based on a VM session\r\n- Decouple MoveResolver traits from Storage traits\r\n\r\nIn some of the places where we want to use the layout resolver, we\r\ndon't have access to all the information to implement `StorageView`,\r\nbut we only need to use the `BackingPackageStore`.\r\n\r\nTo support these cases, we need to provide a state view to\r\n`LinkageView` that can serve packages, and then shim the Module and\r\nResource resolution functions.\r\n\r\nThis requires that `LinkageView` no longer accept a reference\r\nparameter, but a value (so we can inject state into it) -- similar to\r\nthe trick we pulled to allow `Session` to own a `LinkageView`.  Then\r\nimplementors (like `TemporaryStore`) that only need to be passed by\r\nreference can be passed by explicit reference,\r\n\r\ni.e. `LinkageView<'state, TemporaryStore>` becomes\r\n`LinkageView<&'state TemporaryStore>`.\r\n\r\nHowever, we cannot impose a `&'state S: StorageView` bound, because\r\nsome APIs in `StorageView` require a mutable reference, so we needed\r\nto decouple the resolution traits (now `SuiResolver`) and the storage\r\ntraits, to impose twin constraints:\r\n\r\n```\r\nfn ...<'state, S>\r\nwhere\r\n  S: StorageView\r\n  &'state S: SuiResolver\r\n```\r\n\r\n- Logging improvements\r\n- Bring `invariant_violation!` macro into `sui-types`.\r\n- Create a variant of it -- `make_invariant_violation!` -- that\r\n  creates the error, but does not wrap it in a result of return it.\r\n- Add `format!` string support to these macros\r\n- Use this macro for invariant violations within conservation checking\r\n  with extra context on what is failing (what stage, what type is\r\n  involved)\r\n- Enable telemetry_subscription in the `move_package_upgrade_tests` to\r\n  see the logs from authorities during tests.\r\n- (Temporary) Print the IDs of published/upgraded packages in the\r\n  failing test, for context.\r\n\r\n## Test Plan \r\n\r\nExisting tests\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-10T17:42:01-05:00",
          "tree_id": "286ef222404121bde90666b369821ff26fa4f360",
          "url": "https://github.com/MystenLabs/sui/commit/7c6accabbb5d57c7cfbf0c4b27c574ebeea5469e"
        },
        "date": 1683759280933,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 149846040,
            "range": "± 4498837",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 336563,
            "range": "± 40108",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "118224482+ronny-mysten@users.noreply.github.com",
            "name": "ronny-mysten",
            "username": "ronny-mysten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e032060cc4796574270980231c2952f07e1d6b10",
          "message": "Updating RPC spec description to include url (#11892)\n\n## Description \r\n\r\nUpdating RPC openapi spec description.\r\n\r\n## Test Plan \r\n\r\nLocal\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-10T23:37:39Z",
          "tree_id": "ca9090d4d90b20d8e9ecb6af949dbe168caa3965",
          "url": "https://github.com/MystenLabs/sui/commit/e032060cc4796574270980231c2952f07e1d6b10"
        },
        "date": 1683762705374,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 144558002,
            "range": "± 4350312",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 312581,
            "range": "± 69422",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "95b318b5166670045592f381e85e49fe04509be1",
          "message": "fn: remove object IDs from transactions_to_addr index (#11314)\n\n## Description \r\n\r\ntransactions_to_addr now includes both address and object IDs.\r\nRelated posts are \r\nhttps://mysten-labs.slack.com/archives/C04FG4Q7YJ3/p1682369162080879\r\nhttps://mysten-labs.slack.com/archives/C04HS54LHUM/p1682039873458439\r\n\r\n## Test Plan \r\n\r\nCI test\r\nrun local FN + Explorer and make sure 0x5 is not showing as address any\r\nmore.",
          "timestamp": "2023-05-11T10:51:34-04:00",
          "tree_id": "2ad085f65be8c8666399ae5e4548d7be635f23e0",
          "url": "https://github.com/MystenLabs/sui/commit/95b318b5166670045592f381e85e49fe04509be1"
        },
        "date": 1683817509207,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146491997,
            "range": "± 4519011",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 316613,
            "range": "± 20711",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akihidis@gmail.com",
            "name": "Anastasios Kichidis",
            "username": "akichidis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3909214ebae213d9fa51325f2abf834b169fa762",
          "message": "[chore] clippy to run with all features enabled (#11912)\n\n## Description \r\n\r\nclippy seems to be ignoring files when those depend on features that\r\naren't enabled when it runs. This is leading to build failures (ex\r\n[this](https://github.com/MystenLabs/sui/actions/runs/4942463072/jobs/8836005749)\r\nand [this](https://github.com/MystenLabs/sui/actions/runs/4910003494))\r\nfrequently as our rust CI is passing but when it comes to build CI it\r\nfails and mostly goes undetected.\r\n\r\nThe PR is enabling `--all-features` so we align the rust & build CI. It\r\nis also fixing some linter failures.\r\n\r\n\r\n## Test Plan \r\n\r\nDid run locally\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-11T17:40:39+01:00",
          "tree_id": "82a8ffbc4cce92d24471f20a90cc605aa3476912",
          "url": "https://github.com/MystenLabs/sui/commit/3909214ebae213d9fa51325f2abf834b169fa762"
        },
        "date": 1683823871866,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 143632838,
            "range": "± 4645758",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 312062,
            "range": "± 20252",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1a3420933e88a983a9537318b1027d1d1d73015b",
          "message": "Fix flaky safe mode reconfig test (#11918)",
          "timestamp": "2023-05-11T18:09:42Z",
          "tree_id": "935a8a0a91ea4e88e5f156c05199548c150879c3",
          "url": "https://github.com/MystenLabs/sui/commit/1a3420933e88a983a9537318b1027d1d1d73015b"
        },
        "date": 1683829304427,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 158329858,
            "range": "± 9700346",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 345790,
            "range": "± 53869",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "123408603+healthydeve@users.noreply.github.com",
            "name": "Jian Lu",
            "username": "healthydeve"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f8477e811c1f6e1f26814ad16888748e10f0060f",
          "message": "[Sui-test-validator] adding persisted state option (#11389)\n\n## Description \r\n\r\nAdding a persisted state on the ./sui-test-validator if we choose to\r\npass in a network config\r\n\r\nThe current configuration will save a file in the\r\n.sui/.sui_config/.sui_cluster_test_config/ path of your local directory.\r\nWe are able to run locally and have a saved state with this.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\nLocal runs\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-11T15:27:48-04:00",
          "tree_id": "ed53a97cc0d9b2271768bf6e0aa7b31b565b4f76",
          "url": "https://github.com/MystenLabs/sui/commit/f8477e811c1f6e1f26814ad16888748e10f0060f"
        },
        "date": 1683834101214,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 149155670,
            "range": "± 5894377",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 313994,
            "range": "± 23696",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e0e0e7eb52b8463c2dabd1292ee047e532afac3b",
          "message": "indexer: handle failed tx block in TPS (#11922)\n\n## Description \r\n\r\nWe want to remove failed tx from real-time TPS and peak TPS.\r\nHere is a related thread:\r\nhttps://mysten-labs.slack.com/archives/C051ZP9CBEE/p1683825255033459?thread_ts=1683823673.339839&cid=C051ZP9CBEE\r\n\r\n## Test Plan \r\n\r\nrun indexer locally agains mainnet, starting from checkpoint 2,255,000\r\nand verify.",
          "timestamp": "2023-05-11T16:44:31-04:00",
          "tree_id": "8d2283aabf807cfb2af11b4a902d75cf053ea776",
          "url": "https://github.com/MystenLabs/sui/commit/e0e0e7eb52b8463c2dabd1292ee047e532afac3b"
        },
        "date": 1683838401627,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 105180632,
            "range": "± 2985279",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 310039,
            "range": "± 7899",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ashok@mystenlabs.com",
            "name": "Ashok Menon",
            "username": "amnn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe33cf4b58169a2729dfa0734ad99c49eb0e1707",
          "message": "[sui-execution] Move `sui` execution crates into their own directory (#11192)\n\n## Description\r\n\r\nCreate the sub-directory containing the \"latest\" version of `sui-`\r\ncrates in the execution layer. API to access multiple versions of an\r\nexecution crate to follow. This commit just moves code to its new home,\r\nto minimise the chance for a merge conflict.\r\n\r\n## Test Plan\r\n\r\n```\r\n$ cargo simtest\r\n$ env SUI_SKIP_SIMTESTS=1 cargo nextest run\r\n```",
          "timestamp": "2023-05-11T15:05:40-07:00",
          "tree_id": "9958080b14bd3eeafaf9e66358d2ec96e0bb27b2",
          "url": "https://github.com/MystenLabs/sui/commit/fe33cf4b58169a2729dfa0734ad99c49eb0e1707"
        },
        "date": 1683843366854,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 141342624,
            "range": "± 5224702",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 434463,
            "range": "± 92667",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ashok@mystenlabs.com",
            "name": "Ashok Menon",
            "username": "amnn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7f3e1bbfb365ff253c5e9c0c95362efe5649447b",
          "message": "[sui-json] Spans for fullnode write paths (#11930)\n\n## Description\r\n\r\nAdd `error_span!`s to the fullnode write paths to distinguish error\r\nmessages due to execution, dev-inspect and dry-run.\r\n\r\n## Test Plan\r\n\r\nDry run a transaction that would cause an invariant violation, and note\r\nthat the error that is produced by the fullnode mentions\r\n`dev_inspect_transaction_block` in its span:\r\n\r\nTest move package:\r\n\r\n```move\r\nmodule example::example {\r\n    use sui::dynamic_object_field as ofield;\r\n    use sui::object::{Self, UID};\r\n    use sui::transfer;\r\n    use sui::tx_context::TxContext;\r\n\r\n    struct S has key, store { id: UID  }\r\n\r\n    fun init(ctx: &mut TxContext) {\r\n        let parent = S { id: object::new(ctx) };\r\n        let child  = S { id: object::new(ctx) };\r\n\r\n        ofield::add(&mut parent.id, 0, child);\r\n        transfer::share_object(parent);\r\n    }\r\n\r\n    entry fun f(_s: &S) {}\r\n}\r\n```\r\n\r\nJS to dry-run the transaction:\r\n\r\n```js\r\nconst PACKAGE_ID = /* ... */;\r\nconst CHILD = /* ... */;\r\n\r\nconst tx = new TransactionBlock();\r\ntx.moveCall({\r\n    target: `${PACKAGE_ID}::example::f`,\r\n    arguments: [tx.pure(CHILD)],\r\n});\r\n\r\nconst provider = new JsonRpcProvider(localnetConnection);\r\nconst signer = new RawSigner(keyPair, provider);\r\n\r\nconst result = await signer.devInspectTransactionBlock({\r\n    transactionBlock: tx,\r\n    options: {\r\n        showEffects: true,\r\n        showObjectChanges: true,\r\n    }\r\n});\r\n\r\nconsole.log(result)\r\n```\r\n\r\nNote that the error output from the Sui Node contains the expected error\r\nmessage\r\n\r\n```\r\n     # Need to build release because debug builds will panic\r\nsui$ cargo build --bin sui --release\r\nsui$ ~/sui/target/release/sui genesis -f \\\r\n  && ~/sui/target/release sui start      \\\r\n  |  grep 'INVARIANT VIOLATION!'\r\n2023-05-11T23:30:55.916719Z ERROR node{name=k#84343e5b..}:connection{remote_addr=127.0.0.1:56988 conn_id=4}:dev_inspect_transaction_block: sui_adapter::execution_engine: INVARIANT VIOLATION! Source: Some(\"ObjectOwner objects cannot be input\") kind=InvariantViolation tx_digest=TransactionDigest(5rpcPM1TKWYYLzKDgMq8JCxdYngbMV2uLUWKXVchaMC7)\r\n```",
          "timestamp": "2023-05-11T17:26:49-07:00",
          "tree_id": "ee0965bf9c4380d0c6d8885259fc294bcb2fbf0a",
          "url": "https://github.com/MystenLabs/sui/commit/7f3e1bbfb365ff253c5e9c0c95362efe5649447b"
        },
        "date": 1683851843604,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 142958506,
            "range": "± 4708680",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 303131,
            "range": "± 12386",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andrey@mystenlabs.com",
            "name": "Andrey Chursin",
            "username": "andll"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6dd16a1b94344f049bca0b5dc8445557a40d4c8a",
          "message": "[checkpoints] do not assert InMemoryCheckpointRoots on full nodes (#11934)\n\nFull node might restore from some old snapshot - this is fine and does\r\nnot need to check for InMemoryCheckpointRoots flags",
          "timestamp": "2023-05-12T00:31:59Z",
          "tree_id": "8bb87764dddaf42a1f0a22662e3d3d1861cd9893",
          "url": "https://github.com/MystenLabs/sui/commit/6dd16a1b94344f049bca0b5dc8445557a40d4c8a"
        },
        "date": 1683852156564,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 158115265,
            "range": "± 4446168",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 366868,
            "range": "± 65043",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zlnju@outlook.com",
            "name": "wiggins-dev",
            "username": "wiggins-dev"
          },
          "committer": {
            "email": "sam@mystenlabs.com",
            "name": "Sam Blackshear",
            "username": "sblackshear"
          },
          "distinct": true,
          "id": "03f3a044674f6ec79a5c272875d63f4c6fc1e0c6",
          "message": "[Deepbook] Add commission and rebates into event of OrderFilled #11903\n\n## Description\n\nAdd taker_commission and maker_rebate into OrderFilled events\n\n## Test Plan\n\ncd to deepbook dir and run \"sui move test\"\n\n---\nIf your changes are not user-facing and not a breaking change, you can\nskip the following section. Otherwise, please indicate what changed, and\nthen add to the Release Notes section as highlighted during the release\nprocess.\n\n### Type of Change (Check all that apply)\n\n- [ ] user-visible impact\n- [ ] breaking change for a client SDKs\n- [ ] breaking change for FNs (FN binary must upgrade)\n- [ ] breaking change for validators or node operators (must upgrade\nbinaries)\n- [ ] breaking change for on-chain data layout\n- [ ] necessitate either a data wipe or data migration\n\n### Release notes\n\n---------",
          "timestamp": "2023-05-11T20:51:57-07:00",
          "tree_id": "57aa6eee39771919e7775268cc846ab5e143d03c",
          "url": "https://github.com/MystenLabs/sui/commit/03f3a044674f6ec79a5c272875d63f4c6fc1e0c6"
        },
        "date": 1683864348755,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 156142007,
            "range": "± 5335949",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 364319,
            "range": "± 77210",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "127570466+wlmyng@users.noreply.github.com",
            "name": "wlmyng",
            "username": "wlmyng"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b7625b65114d57377d1ad755c2ee22a3f47d0578",
          "message": "2/n improve sui-json-rpc error codes and handling (#11833)",
          "timestamp": "2023-05-11T21:29:17-07:00",
          "tree_id": "bb4ae68f079fc69fc4ff1e0964416ebf843c6c2a",
          "url": "https://github.com/MystenLabs/sui/commit/b7625b65114d57377d1ad755c2ee22a3f47d0578"
        },
        "date": 1683866377794,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146006457,
            "range": "± 5985495",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 310890,
            "range": "± 16035",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patrickkuo@me.com",
            "name": "Patrick Kuo",
            "username": "patrickkuo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4dc8b91430a1467f198a994808d0cb743277b4de",
          "message": "add event module id index and new EventFilter for filter by event module id (#11913)\n\n## Description \r\n\r\nadd event module id index and new EventFilter for filter by event module\r\nid\r\n\r\n## Test Plan \r\n\r\nadded integration test",
          "timestamp": "2023-05-12T08:34:54Z",
          "tree_id": "5ec5847d0a4ee74eeda367b5c4d6d7799a3e5d9a",
          "url": "https://github.com/MystenLabs/sui/commit/4dc8b91430a1467f198a994808d0cb743277b4de"
        },
        "date": 1683881085345,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145923698,
            "range": "± 6073564",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 312845,
            "range": "± 26943",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "51927076+phoenix-o@users.noreply.github.com",
            "name": "phoenix",
            "username": "phoenix-o"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b45fade801ca12db9c734ca6fedf6ab3e2b2d327",
          "message": "periodic compaction of sst files (#11876)\n\nPR adds an option to enable periodic background compactions for the\r\nobjects table, ensuring that all SST files periodically go through the\r\ncompaction process. This feature helps address the issue where we\r\nobserve a large number of L4 SST files consisting mostly of range\r\ndeletes but not undergoing the compaction process due to internal\r\nRocksDB heuristics.\r\n\r\nThis approach is intended to be used as a complement to aggressive\r\npruning and is disabled by default.\r\nIt is somewhat equivalent to RocksDB's `periodic_compaction_seconds`\r\nsetting, but the latter is not very flexible and can cause dramatic\r\nresource consumption once enabled. The approach implemented in the PR\r\nprocesses one SST file at a time",
          "timestamp": "2023-05-12T11:03:42+02:00",
          "tree_id": "94610a7ed4cb2f1dda7248843f19192083baa00c",
          "url": "https://github.com/MystenLabs/sui/commit/b45fade801ca12db9c734ca6fedf6ab3e2b2d327"
        },
        "date": 1683882896715,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 148824745,
            "range": "± 4617455",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 403314,
            "range": "± 65074",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f8636a58b6e8eb7e0cba214ae83618af8272abbc",
          "message": "Remove testnet specific logic in replay (#11939)\n\n## Description \r\n\r\nSince we reset testnet, no need for testnet-specific logic we had to get\r\naround the epoch speedrun during safemode.\r\n\r\n## Test Plan \r\n\r\nManual\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-12T06:15:03-07:00",
          "tree_id": "a7402e423b2ac3f141962be7a2910c63b78a83eb",
          "url": "https://github.com/MystenLabs/sui/commit/f8636a58b6e8eb7e0cba214ae83618af8272abbc"
        },
        "date": 1683897997484,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 108029467,
            "range": "± 4258731",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 309365,
            "range": "± 16581",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patrickkuo@me.com",
            "name": "Patrick Kuo",
            "username": "patrickkuo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ed434235139d453ce806f78b7429ab5fecc007c8",
          "message": "[bugfix] - object type should not trim leading zero (#11887)\n\n## Description \r\n\r\nObject type in get_object api is trimming leading zero. This PR fixes\r\nthat.\r\n\r\n## Test Plan \r\n\r\nAdded unit test",
          "timestamp": "2023-05-12T10:14:00-04:00",
          "tree_id": "b31793f223a7ce43199a4893b61d08be7c0405e5",
          "url": "https://github.com/MystenLabs/sui/commit/ed434235139d453ce806f78b7429ab5fecc007c8"
        },
        "date": 1683901494634,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147149932,
            "range": "± 5215105",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 385835,
            "range": "± 51253",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ashok@mystenlabs.com",
            "name": "Ashok Menon",
            "username": "amnn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "581bd7ecfcdc5e59392dfdc99e09cfaa6525c30c",
          "message": "[docker] Add sui-execution top-level directory (#11948)\n\n## Description\r\n\r\nThis directory now contains the execution-specific crates.\r\n\r\n## Test Plan\r\n\r\nRun actions in CI.",
          "timestamp": "2023-05-12T08:14:27-07:00",
          "tree_id": "985dfb82ac3835f05533e19419e14d16e0c873f1",
          "url": "https://github.com/MystenLabs/sui/commit/581bd7ecfcdc5e59392dfdc99e09cfaa6525c30c"
        },
        "date": 1683904972844,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 104714440,
            "range": "± 5167608",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 310692,
            "range": "± 3136",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7ce58ebb9d13e8e99e5e0a5e58dda58cbbf4f79a",
          "message": "indexer: re-populate input objects & recipients (#11951)\n\n## Description \r\n\r\nThe was turned off temp. in case mainnet traffic went crazily high,\r\nwhich turns out not necessary, also these tables are useful to serve tx\r\nqueries;\r\nAlso requested by partner here\r\nhttps://mysten-labs.slack.com/archives/C047ZSH8KV5/p1683882143957239\r\n\r\n## Test Plan \r\n\r\nlocal run and to make sure that `input_objects` and `recipients`\r\npopulation are back on",
          "timestamp": "2023-05-12T12:26:41-04:00",
          "tree_id": "2f53c43fb523f4ee24a19741f2389818f13b02a5",
          "url": "https://github.com/MystenLabs/sui/commit/7ce58ebb9d13e8e99e5e0a5e58dda58cbbf4f79a"
        },
        "date": 1683909431561,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 150560931,
            "range": "± 4679467",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 309499,
            "range": "± 80441",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e4bb7099b5574105068d5008acb67ab27beb1245",
          "message": "Add tx, package scope. Use Sui meter for verifier (#11937)\n\n## Description \r\n\r\n* Add `Package` and `Transaction` metering scope. Not used yet though to\r\nkeep functionality same. Will iterate on this in subsequent PR.\r\n* Implement our own meter in Sui so we can fine-tune, log, etc as\r\nneeded.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-12T09:59:05-07:00",
          "tree_id": "b406a3cb69bf2ac13065f33cd0d1a3fa17bfcd69",
          "url": "https://github.com/MystenLabs/sui/commit/e4bb7099b5574105068d5008acb67ab27beb1245"
        },
        "date": 1683911388134,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 151788075,
            "range": "± 4613178",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 481751,
            "range": "± 54180",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "14996e3d6284a91d62c36226eee8afb733e8a518",
          "message": "remove dead code: gas calibration logic (#11953)\n\n## Description \r\n\r\nWith the new gas model where instruction costs are normalized, and tiers\r\nblur the contributions of individual unit costs, we don't need all the\r\ncalibration logic.\r\n\r\n## Test Plan \r\n\r\nN/A\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-12T13:04:28-04:00",
          "tree_id": "f050bded025521dd0da79452d29754c79475acfc",
          "url": "https://github.com/MystenLabs/sui/commit/14996e3d6284a91d62c36226eee8afb733e8a518"
        },
        "date": 1683911708441,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 143950341,
            "range": "± 4368504",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 451043,
            "range": "± 31952",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "13286704966a0f10fbf1f8fb8a625d7f6a1f453c",
          "message": "Merge bytecode snapshots (#11955)\n\n## Description \r\n\r\nThis PR simplifies the framework snapshot flow:\r\n1. Merges the snapsnot between mainnet and testnet. This will require us\r\nto always ship unique protocol version bytecode globally.\r\n2. Move the GIT_REVISION related code to a shared file in sui-types so\r\nthat all files can use it directly.\r\n3. Remove the need to pass any arguments to sui-framework-snapshot\r\n\r\n## Test Plan \r\nCI\r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-12T10:17:56-07:00",
          "tree_id": "0edc5f4a04643540c2354d78b174d468f4ed15fd",
          "url": "https://github.com/MystenLabs/sui/commit/13286704966a0f10fbf1f8fb8a625d7f6a1f453c"
        },
        "date": 1683912379710,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 105723181,
            "range": "± 3658404",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 278217,
            "range": "± 23782",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fefc9f7bfa7b6c54c0fbebd498b3df88bb966550",
          "message": "Some cleanups in GenesisConfig (#11941)\n\nThis PR makes the following clean ups in genesis configs:\r\n1. Removes grpc related fields from genesis config because they are\r\nnever set differently other than the default value\r\n2. Remove committee_size from genesis config because it's never used.\r\n3. Merge ValidatorConfigInfo and ValidatorGenesisInfo, rename to\r\nValidatorGenesisConfig.\r\n4. Move some initializers into constructors, for clarity",
          "timestamp": "2023-05-12T10:23:43-07:00",
          "tree_id": "7c766cb1eae9d86b5dea6b9861d6c24bf81dbbed",
          "url": "https://github.com/MystenLabs/sui/commit/fefc9f7bfa7b6c54c0fbebd498b3df88bb966550"
        },
        "date": 1683912732896,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 105621002,
            "range": "± 6775102",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 331753,
            "range": "± 19617",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0939c055aa916b68e2d75a851710062152a02125",
          "message": "Update to tokio-1.28.1 (#11957)",
          "timestamp": "2023-05-12T18:41:19Z",
          "tree_id": "2e8dadeb050bb463b685526bfa7e02cb68c293d4",
          "url": "https://github.com/MystenLabs/sui/commit/0939c055aa916b68e2d75a851710062152a02125"
        },
        "date": 1683917462262,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 107784062,
            "range": "± 4316541",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 304519,
            "range": "± 4163",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106645797+sadhansood@users.noreply.github.com",
            "name": "Sadhan Sood",
            "username": "sadhansood"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5ec0adc3b669e2e8e4f44f14c86963c2e11db522",
          "message": "Add metrics for db snapshots (#11963)\n\n## Description \r\n\r\nAdd metrics to track the first epoch with missing db snapshot so we can\r\nalert on it.\r\n## Test Plan \r\n\r\nAdded unit tests",
          "timestamp": "2023-05-12T13:42:09-07:00",
          "tree_id": "30e457fb1c3214dc9bc94edf151f5fc0a823d554",
          "url": "https://github.com/MystenLabs/sui/commit/5ec0adc3b669e2e8e4f44f14c86963c2e11db522"
        },
        "date": 1683924794926,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 155048360,
            "range": "± 6944906",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 335860,
            "range": "± 36550",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "81660174+mwtian@users.noreply.github.com",
            "name": "mwtian",
            "username": "mwtian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bdb80817f2b5dc0118148211631d79ad9ab363c6",
          "message": "[DbTool] add a few commands to modify database with minimal safety checks (#11612)\n\n## Description \r\n\r\nThere are needs to repair corrupted databases sometimes. Adding a few\r\ncommands to remove transaction and its outputs, and remove lock.\r\n\r\n## Test Plan \r\n\r\nTested on fullnodes.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-12T14:44:35-07:00",
          "tree_id": "ec23ef924039a7a33044e02da8f67b99e685a818",
          "url": "https://github.com/MystenLabs/sui/commit/bdb80817f2b5dc0118148211631d79ad9ab363c6"
        },
        "date": 1683928484946,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 139574904,
            "range": "± 6997980",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 311548,
            "range": "± 14728",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f08c87f8b3b2ce60c666628b6580434fd9e9b0a5",
          "message": "indexer doc: update README (#11970)",
          "timestamp": "2023-05-12T22:05:53Z",
          "tree_id": "cab47d5cc3f9445636ccbf2c96c4bc531dd69c97",
          "url": "https://github.com/MystenLabs/sui/commit/f08c87f8b3b2ce60c666628b6580434fd9e9b0a5"
        },
        "date": 1683929800751,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 159982822,
            "range": "± 4617548",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 365395,
            "range": "± 52576",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106645797+sadhansood@users.noreply.github.com",
            "name": "Sadhan Sood",
            "username": "sadhansood"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "36045411796dc18a5cc3369d1b03f5698f77fc31",
          "message": "StateSnapshot writer for writing state snapshot (#11851)\n\n## Description \r\n\r\nThis PR adds the ability to start producing state snapshots in our own\r\nstorage format. Next PR is going to add the ability to read this format.\r\n\r\n## Test Plan \r\n\r\nAdded some basic sanity tests. Next PR adds more tests.",
          "timestamp": "2023-05-12T16:39:32-07:00",
          "tree_id": "cadeb18586088c396224b4952d999dd9a2d3c1da",
          "url": "https://github.com/MystenLabs/sui/commit/36045411796dc18a5cc3369d1b03f5698f77fc31"
        },
        "date": 1683935391531,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 148314798,
            "range": "± 4445711",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 306758,
            "range": "± 18201",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ashok@mystenlabs.com",
            "name": "Ashok Menon",
            "username": "amnn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "934a0557d90e6978f1343108a3a57bc0f4f015b7",
          "message": "[move/fuzz] Fix up verifier fuzz targets after metering changes (#11950)\n\n## Description\r\n\r\n`verify_module` no longer exists -- fixing the build by using\r\n`verify_module_unmetered`, or supplying a meter for tests\r\nof metering.\r\n\r\n## Test Plan\r\n\r\nThe following would fail before this change, and now does not:\r\n\r\n```\r\nexternal-crates/move/move-bytecode-verifier/fuzz$ cargo build\r\nexternal-crates/move/move-bytecode-verifier/bytecode-verifier-tests$ cargo nextest run\r\nexternal-crates/move/move-vm/integration-tests$ cargo nextest run\r\n```",
          "timestamp": "2023-05-12T18:36:38-07:00",
          "tree_id": "9b687e65a2521a866a6e4c02a8d7979eb68fc17e",
          "url": "https://github.com/MystenLabs/sui/commit/934a0557d90e6978f1343108a3a57bc0f4f015b7"
        },
        "date": 1683942390202,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 106327464,
            "range": "± 3310345",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 302416,
            "range": "± 15691",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0f9a3047879f600bc61c94e519ad91bd6a8f0cd",
          "message": "verifier: CLI show meter ticks used (#11974)",
          "timestamp": "2023-05-13T00:55:07-04:00",
          "tree_id": "33ec43be480cc9171dc4d945f28a689c010c2111",
          "url": "https://github.com/MystenLabs/sui/commit/d0f9a3047879f600bc61c94e519ad91bd6a8f0cd"
        },
        "date": 1683954318757,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 140974189,
            "range": "± 4387863",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 305866,
            "range": "± 24891",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emma@mystenlabs.com",
            "name": "Emma Zhong",
            "username": "emmazzz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f6494ee216e7fdc6de8ddc21d9a7cae86e3255c9",
          "message": "move more functions from test util to wallet context (#11973)\n\n## Description \r\n\r\nThis PR moves all the tests in test-utils/transaction that use\r\n`WalletContext` to elsewhere.\r\n\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-13T12:29:57-07:00",
          "tree_id": "485d5648b9e78e2af963de2311f2fe23e9b3e3c5",
          "url": "https://github.com/MystenLabs/sui/commit/f6494ee216e7fdc6de8ddc21d9a7cae86e3255c9"
        },
        "date": 1684007027854,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 153480815,
            "range": "± 5662322",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 307139,
            "range": "± 67948",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ashok@mystenlabs.com",
            "name": "Ashok Menon",
            "username": "amnn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e53091157d1c913291aecadcaa7e6b04003a78f9",
          "message": "[sui] Fix version output by CLI (#11984)\n\n## Description\r\n\r\nThe `VERSION` constant that populates the output from `sui -V` was\r\nrecently moved to crate `sui-types` (with fixed version `0.1.0`), from\r\ncrate `sui` which inherited its version from the workspace (which gets\r\nbumped to match the release version).\r\n\r\nHave `sui-types` inherit version from workspace as well, to fix the\r\nversion output.\r\n\r\n## Test Plan\r\n\r\n```\r\nsui$ cargo run --bin sui -- -V\r\nsui 1.2.0-f6494ee216-dirty\r\n```\r\n\r\nWhere previously it was:\r\n\r\n```\r\nsui 0.1.0-f6494ee216\r\n```\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [X] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\nFix the output from `sui -V`, which was incorrectly reporting version\r\n`0.1.0`.",
          "timestamp": "2023-05-14T18:24:51Z",
          "tree_id": "485eeb6d973bd0032511403d5045e076ad5575ce",
          "url": "https://github.com/MystenLabs/sui/commit/e53091157d1c913291aecadcaa7e6b04003a78f9"
        },
        "date": 1684089251037,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 109381388,
            "range": "± 4996251",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 307034,
            "range": "± 25349",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "76067158+666lcz@users.noreply.github.com",
            "name": "Chris Li",
            "username": "666lcz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3df29ff96350f794294a24916b4d21f9b2252b5b",
          "message": "[rpc][bugfix] Remove the usage of get_past_object_read from get_coin_metadata (#11971)\n\n## Description \r\n\r\nThe current implementation of `get_coin_metadata` relies on\r\n`get_past_object_read`, which stops working if the fullnode has pruning\r\nenabled. This is unnecessary because we only need the latest version of\r\nthe coinmetada object(if it is wrapped, then it's okay to return null).\r\n\r\n## Test Plan \r\n\r\ntested locally\r\n\r\n```\r\ncurl --location 'https://mainnet.sui.rpcpool.com' \\\r\n--header 'Content-Type: application/json' \\\r\n--data '{\r\n    \"jsonrpc\":\"2.0\",\r\n    \"id\":1,\r\n    \"method\":\"suix_getCoinMetadata\",\r\n    \"params\":[\"0x2::sui::SUI\"]\r\n}'\r\n```\r\n\r\n```\r\n{\r\n    \"jsonrpc\": \"2.0\",\r\n    \"result\": {\r\n        \"decimals\": 9,\r\n        \"name\": \"Sui\",\r\n        \"symbol\": \"SUI\",\r\n        \"description\": \"\",\r\n        \"iconUrl\": null,\r\n        \"id\": \"0x9258181f5ceac8dbffb7030890243caed69a9599d2886d957a9cb7656af3bdb3\"\r\n    },\r\n    \"id\": 1\r\n}\r\n```\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\nFixed a bug for `get_coin_metadata` which can return null when the\r\nfullnode is pruned",
          "timestamp": "2023-05-15T14:38:24Z",
          "tree_id": "240096dd180887522cf22959492a11ed7d19cb8d",
          "url": "https://github.com/MystenLabs/sui/commit/3df29ff96350f794294a24916b4d21f9b2252b5b"
        },
        "date": 1684162148403,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 151431109,
            "range": "± 5051251",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 328643,
            "range": "± 31777",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "brandon@mystenlabs.com",
            "name": "Brandon Williams",
            "username": "bmwill"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "966ed4f6f4fe9f010a3272caddb1493849ea744d",
          "message": "rpc: add name-service registry types (#11898)\n\n## Description \r\n\r\nDescribe the changes or additions included in this PR.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-15T11:04:38-04:00",
          "tree_id": "94075afe7240b810de34b61bc5fd449980ca2cd2",
          "url": "https://github.com/MystenLabs/sui/commit/966ed4f6f4fe9f010a3272caddb1493849ea744d"
        },
        "date": 1684163700998,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 105613474,
            "range": "± 7299909",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 341351,
            "range": "± 19886",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patrickkuo@me.com",
            "name": "Patrick Kuo",
            "username": "patrickkuo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c3eb2f833db77d80435316012c9e9d3686e15b25",
          "message": "[bugfix] - fix incorrect string vec json -> bcs conversion (#11990)\n\n## Description \r\n\r\nfix incorrect string vec json -> bcs conversion\r\n\r\n## Test Plan \r\n\r\nadded unit tests",
          "timestamp": "2023-05-15T16:03:07+01:00",
          "tree_id": "b199c9ea29337770ae356397499bedf9a1d136fb",
          "url": "https://github.com/MystenLabs/sui/commit/c3eb2f833db77d80435316012c9e9d3686e15b25"
        },
        "date": 1684163730645,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 151501854,
            "range": "± 5239244",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 311312,
            "range": "± 12265",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4728caa3d5ea2a7db452c22d800d1719589e3255",
          "message": "Split sui-config crate (#11968)\n\nsui-config crate started as a crate for the NodeConfig.\r\nHowever it has grown too much and no longer at the bottom of the\r\ndependency chain.\r\nThis PR splits some modules out of it:\r\n1. Split out sui-genesis-builder. This contains all the code to build a\r\ngenesis, which depends on the execution component. After this PR,\r\nsui-config no longer depends on the execution component, which means we\r\ncan now pass NodeConfig around even into the execution component, which\r\nwe have wanted to do for a while.\r\n2. Split out sui-swarm-config. This contains all the configs and\r\nbuilders to create a NetworkConfig for the swarm. It makes it clear now\r\nthat this is used for swarm, not for production.\r\n3. Renamed swarm.rs into network_config.rs for clarity.\r\n4. Renamed builder.rs into network_config_builder.rs for clarity.\r\n5. Moved FullnodeConfigBuilder out of node.rs into\r\nnetwork_config_builder.rs.",
          "timestamp": "2023-05-15T17:38:30Z",
          "tree_id": "4eda71df1c097014d44071eeff02a0305ad0731d",
          "url": "https://github.com/MystenLabs/sui/commit/4728caa3d5ea2a7db452c22d800d1719589e3255"
        },
        "date": 1684173147313,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 161587857,
            "range": "± 7867066",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 448456,
            "range": "± 26968",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "141e417d822b62bd7be21211072831302e4b78d1",
          "message": "Remove test-utils dep from sui-types and sui-move (#12002)\n\nWe have refactored enough code such that we can get rid of the\r\ndependency to test-utils in sui-types.\r\nRemoving it here will significantly speed up our builds, because for\r\narbitrary changes we don't have to always rebuild sui-types and\r\nsui-framework.\r\nThe last bit of the circular dependency is in sui-core, which isn't yet\r\nready to be removed.",
          "timestamp": "2023-05-15T18:12:37Z",
          "tree_id": "9a72199f40de7b39681c03571287f514d41ca9ed",
          "url": "https://github.com/MystenLabs/sui/commit/141e417d822b62bd7be21211072831302e4b78d1"
        },
        "date": 1684174890904,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 107303079,
            "range": "± 3040671",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 298509,
            "range": "± 18929",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "127570466+wlmyng@users.noreply.github.com",
            "name": "wlmyng",
            "username": "wlmyng"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1e616960b0735cac7a756cffcfabbf0300096808",
          "message": "for errors that consist of vectors of errors, return all errors as an object array so downstream clients can handle as desired (#11962)",
          "timestamp": "2023-05-15T11:56:24-07:00",
          "tree_id": "6604d8be945c6b9f639733bbb5e3a3a9744d7423",
          "url": "https://github.com/MystenLabs/sui/commit/1e616960b0735cac7a756cffcfabbf0300096808"
        },
        "date": 1684177633208,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 144842239,
            "range": "± 4555094",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 326948,
            "range": "± 27592",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2aedc50ae589de50303377b8d4d570bdd84794a8",
          "message": "In verifier metering, use PROGRAM_TOO_COMPLEX status code over CONSTRAINT_NOT_SATISFIED (#11961)\n\n## Description \r\n\r\n`CONSTRAINT_NOT_SATISFIED` is overloaded and not explicit enough for\r\nverifier timeouts.\r\nThere was a previous conversation between Move stakeholders to use\r\n`PROGRAM_TOO_COMPLEX`, which is what this PR adds.\r\n\r\n## Test Plan \r\n\r\nTypical tests\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-15T20:45:03Z",
          "tree_id": "9a53f2bdcaa3c524c7588d27cb0f4b9f22e16204",
          "url": "https://github.com/MystenLabs/sui/commit/2aedc50ae589de50303377b8d4d570bdd84794a8"
        },
        "date": 1684184125385,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 152311059,
            "range": "± 5780832",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 466690,
            "range": "± 27801",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "127570466+wlmyng@users.noreply.github.com",
            "name": "wlmyng",
            "username": "wlmyng"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "375d3ec9630512ff0b9810dd8c44aa290ee161e3",
          "message": "add `instrument` and `with_tracing` to remaining apis (#12000)\n\n## Description \r\n\r\n1. `#[instrument` to provide fn params in the span\r\n2. `with_tracing` to print span info to logs\r\n3. remove `method_name` from `with_tracing`, as it already exists in the\r\nspan\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-16T09:11:25-04:00",
          "tree_id": "3c2901868914e2f066ca5a15c590fa15865f04df",
          "url": "https://github.com/MystenLabs/sui/commit/375d3ec9630512ff0b9810dd8c44aa290ee161e3"
        },
        "date": 1684243593039,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145683932,
            "range": "± 5546273",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 321859,
            "range": "± 28729",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "123408603+healthydeve@users.noreply.github.com",
            "name": "Jian Lu",
            "username": "healthydeve"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0952f9586aef9e432452f04f8d0652d629c81229",
          "message": "[faucet] Adding recursive async call so that faucet auto selects next coin (#11923)\n\n## Description \r\n\r\nFix for https://mysten.atlassian.net/browse/SUI-1731\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\nlocally, and will use staging to bake\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-16T12:22:11-04:00",
          "tree_id": "0539ab3b77dc01932e66fe8a90ac50d3e3b14e5c",
          "url": "https://github.com/MystenLabs/sui/commit/0952f9586aef9e432452f04f8d0652d629c81229"
        },
        "date": 1684254775766,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 154416987,
            "range": "± 4427394",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 317932,
            "range": "± 16438",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emma@mystenlabs.com",
            "name": "Emma Zhong",
            "username": "emmazzz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c9feb2c5055712bc2f2e2165e2adff2a2a5e0bc7",
          "message": "[sui-json-rpc] fix getter for move object bcs (#12010)\n\n## Description \r\n\r\nRight now `move_object_bcs` ignores the bcs bytes and just always\r\nreturns `None`. This PR fixes that.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-16T09:31:09-07:00",
          "tree_id": "02ca89e3977fd05482ed47073a6faf2ce98c3f1e",
          "url": "https://github.com/MystenLabs/sui/commit/c9feb2c5055712bc2f2e2165e2adff2a2a5e0bc7"
        },
        "date": 1684255210169,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 106372756,
            "range": "± 4156676",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 259036,
            "range": "± 18280",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ashok@mystenlabs.com",
            "name": "Ashok Menon",
            "username": "amnn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "731ed9724145d417f69122177bde44f497c05b41",
          "message": "[sui-framework/package] `Publisher` checks recognise upgrades (#12026)\n\n## Description\r\n\r\nChange the behaviour of functions like:\r\n\r\n```\r\nsui::package::from_package<T>(self: &Publisher): bool\r\nsui::package::from_module<T>(self: &Publisher): bool\r\n```\r\n\r\nto return `true` when `T` is from an upgraded version of the package\r\nassociated with `Publisher`. Previously it was impossible to check the\r\npackage ownership of a type introduced in an upgraded package (the\r\nupgraded type's type name didn't match the original package's\r\n`Publisher` and it was impossible to create a `Publisher` for the\r\nupgraded package, because it requires an OTW which we can't create for\r\nupgraded packages).\r\n\r\nThis support was added by introducing a new stdlib function:\r\n`std::typename::get_original`, as of protocol version 11, which produces\r\na runtime representation of the type that uses original (aka runtime)\r\npackage IDs instead of defining package IDs (the default behaviour for\r\n`std::typename::get` and any other case where a runtime representation\r\nof the type is converted into an on-chain or storage representation of a\r\ntype).\r\n\r\n## Test Plan\r\n\r\nNew transactional test cases for `std::type_name::get_original` and\r\n`sui::package::from_package`:\r\n\r\n```\r\n$ cargo nextest run -- upgrade/type_names.move\r\n$ cargo nextest run -- upgrade/publisher.move\r\n```\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [x] breaking change for FNs (FN binary must upgrade)\r\n- [x] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\nAs of protocol version 11:\r\n\r\n- `sui::package::from_package<T>(self: &Publisher)` and\r\n`sui::package::from_module<T>(self: &Publisher)` return `true` when `T`\r\nis a type introduced at any upgraded version of the package associated\r\nwith `self: &Publisher` (rather than just the types originally present\r\nwhen that package was published).\r\n- `std::type_name::get_original` is introduced as a new stdlib function\r\nto return a representation of the type where package IDs have all been\r\nnormalized to \"original\" IDs (the ID of the first version of a package)\r\nin contrast to the default behaviour of `std::type_name::get` which\r\ndistinguishes types introduced at different versions of a package by\r\nassigning them the ID of the package that introduced them.",
          "timestamp": "2023-05-16T12:01:58-07:00",
          "tree_id": "88f0aca9888463779cc950348561f4e262ecb066",
          "url": "https://github.com/MystenLabs/sui/commit/731ed9724145d417f69122177bde44f497c05b41"
        },
        "date": 1684264227920,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 105370631,
            "range": "± 5560703",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 259957,
            "range": "± 19031",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "127570466+wlmyng@users.noreply.github.com",
            "name": "wlmyng",
            "username": "wlmyng"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c3d9cc87f34fbe4b83a5898eaa1a72b5e9f24f14",
          "message": "3/n improve sui-json-rpc error codes and handling (#11928)\n\n## Description \r\n\r\nReplace anyhow errors with Error enum on sui-json-rpc where possible\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n[API behavioral changes] - rpc methods that result in errors of variant\r\n`UserInputError`, `SuiRpcInputError`, `SuiError::TransactionNotFound` or\r\n`SuiError::TransactionsNotFound` now return error code `-32602` instead\r\nof `-32000`.",
          "timestamp": "2023-05-16T15:56:52-04:00",
          "tree_id": "837a2495ffd5acf2236594a07c3884b14c32d952",
          "url": "https://github.com/MystenLabs/sui/commit/c3d9cc87f34fbe4b83a5898eaa1a72b5e9f24f14"
        },
        "date": 1684267640936,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 155817609,
            "range": "± 4487327",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 504266,
            "range": "± 41496",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d932db90bc86d5d811949fac2ef194fa2877b282",
          "message": "Improve replay fuzzing (#12028)\n\n## Description \r\n\r\nAdds CLI to tail the network in replay fuzzing among other smaller\r\nfeatures.\r\nExample usage: starts at checkpoint 2013829 and runs the fuzzer on 2\r\nmutations for each the next 300 TXs from that point.\r\nIf we want to tail the network, we just have to set b to u64::MAX.\r\n\r\n`./target/debug/sui-tool replay --rpc\r\nhttps://fullnode.mainnet.sui.io:443 fz -s 2013829 -n 2 -b 300`\r\n\r\n## Test Plan \r\n\r\nManual\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-16T18:20:51-04:00",
          "tree_id": "24bfea67c03fcabd75255abe9f24072f0e56d360",
          "url": "https://github.com/MystenLabs/sui/commit/d932db90bc86d5d811949fac2ef194fa2877b282"
        },
        "date": 1684276299057,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 143198845,
            "range": "± 5692758",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 343845,
            "range": "± 84648",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5955553635c4961b26718afbb1e0334ccd3e595e",
          "message": "add explicit iter range specifications (#12012)\n\n## Description \r\n\r\nSpecify iter range keys with `std::ops::RangeBounds`\r\nNext PR cleans up parts of the code that could use more constrained\r\nbounds\r\n\r\n## Test Plan \r\n\r\nUnit tests\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-16T20:26:33-04:00",
          "tree_id": "8e4b566577bde2bf07eb3c75a2573d97505a79e5",
          "url": "https://github.com/MystenLabs/sui/commit/5955553635c4961b26718afbb1e0334ccd3e595e"
        },
        "date": 1684283837936,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 143698469,
            "range": "± 5020711",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308331,
            "range": "± 23634",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "807d2b00645d6c7b12867c319515595427a4c59d",
          "message": "only block sui verifier on timeouts (#12030)",
          "timestamp": "2023-05-17T00:32:42Z",
          "tree_id": "b08ff9684d66072dae966c39744e193a771e7c58",
          "url": "https://github.com/MystenLabs/sui/commit/807d2b00645d6c7b12867c319515595427a4c59d"
        },
        "date": 1684284169148,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145329710,
            "range": "± 4123580",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 311566,
            "range": "± 13022",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ashok@mystenlabs.com",
            "name": "Ashok Menon",
            "username": "amnn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "73e9fc28f1915ce85f76d83170ddebaab24ffc88",
          "message": "[sui-framework] Add deepbook tests (#12046)\n\n## Description\r\n\r\nRun deepbook test among other `sui-framework-tests`. Also separate\r\nframework tests each into their own test so that it's possible to run\r\nthe tests for just one package.\r\n\r\n## Test Plan\r\n\r\n```\r\nsui/crates/sui-framework-tests$ cargo nextest run -- run_deepbook_tests\r\n```",
          "timestamp": "2023-05-17T13:29:07Z",
          "tree_id": "bd0989c8c273fe2362661118b9ddcd0a46ea8798",
          "url": "https://github.com/MystenLabs/sui/commit/73e9fc28f1915ce85f76d83170ddebaab24ffc88"
        },
        "date": 1684330865490,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 148630757,
            "range": "± 4422891",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 554714,
            "range": "± 47199",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "113150618+dariorussi@users.noreply.github.com",
            "name": "Dario Russi",
            "username": "dariorussi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c1d4218ba3114533d1e782ff0a6c7e61c8c5e6bd",
          "message": "Push types to type stack when calling a native (#12013)\n\n## Description \r\n\r\nMake paranoid mode for native calls work correctly.\r\nWe may or may not enable paranoid mode but the change seems safe\r\n\r\n## Test Plan \r\nAdded test\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-17T09:40:51-05:00",
          "tree_id": "d17915945a5e671ecc185adc4be138c778cc4d1e",
          "url": "https://github.com/MystenLabs/sui/commit/c1d4218ba3114533d1e782ff0a6c7e61c8c5e6bd"
        },
        "date": 1684335254512,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 142681735,
            "range": "± 5338668",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 310281,
            "range": "± 17309",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "da81dd1fbddc16a0d1efa87bbfdda7376f6bc79a",
          "message": "indexer easy: fix checkpoint overflow (#12048)\n\n## Description \r\n\r\ncheckpoint total gas cost can be negative, which means rebate is greater\r\nthan cost.\r\n#12032 \r\n\r\n## Test Plan \r\nlocal run\r\n\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-17T11:55:22-04:00",
          "tree_id": "35bdf97f33b9d135f68532714bfbd964acaf03ce",
          "url": "https://github.com/MystenLabs/sui/commit/da81dd1fbddc16a0d1efa87bbfdda7376f6bc79a"
        },
        "date": 1684339528127,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 137293602,
            "range": "± 4761499",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 312243,
            "range": "± 17751",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emma@mystenlabs.com",
            "name": "Emma Zhong",
            "username": "emmazzz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba5d6b1c4e146110065ff05196233f0386a231c9",
          "message": "[sui cli] add validator command to print out raw gas price setting txn (#12034)\n\n## Description \r\n\r\nThis PR adds a validator command that prints out the base64\r\nrepresentation of a transaction that updates a validator's gas price\r\nquote to a new value. I considered making this part of the original\r\n`UpdateGasPrice` command but decided it's different enough to be its own\r\ncommand, primarily because the active address of the wallet context can\r\nbe someone other than the transaction sender in the case of the new\r\ncommand.\r\n \r\n## Test Plan \r\n\r\nAdded a test.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-17T09:50:38-07:00",
          "tree_id": "8bd8e914bdf20d942e41b6730cfda16abfb5eb5a",
          "url": "https://github.com/MystenLabs/sui/commit/ba5d6b1c4e146110065ff05196233f0386a231c9"
        },
        "date": 1684342764288,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 107180104,
            "range": "± 4780414",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 305653,
            "range": "± 23135",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2633885b0889d1e3dc5796c837b7adca0ef51924",
          "message": "[hardening] enforce enum order for `ExecutionFailureStatus` for SDK backward compat (#12036)\n\n## Description \r\n\r\nFor some enums we require that variants are appended to the end of an\r\nenum to ensure backward compat for SDK etc.\r\nWe currently use comments like\r\n[this](https://github.com/MystenLabs/sui/blob/25678de7f57438f7b9a6af8f908e3051d1505205/crates/sui-types/src/execution_status.rs#L180-L181)\r\n```\r\n    // NOTE: if you want to add a new enum,\r\n    // please add it at the end for Rust SDK backward compatibility.\r\n```\r\n to inform folks to append but we dont actually enforce it.\r\n\r\nThis PR adds enforcement test on `ExecutionFailureStatus` and will add\r\nfor other types as I discover them.\r\nExample test failure from swapping variants\r\n```\r\npanicked at 'Enum variant SuiMoveVerificationTimedout has been swapped with SuiMoveVerificationTimedoutNew at position 30. Not allowed: enum must be backward compatible.', crates/sui-types/src/execution_status.rs:380:17\r\n```\r\n\r\n\r\n\r\n## Test Plan \r\n\r\nManual testing of adding, swapping, removing variants.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-17T12:59:54-04:00",
          "tree_id": "a070e2725ccf9b982fb2c0a159ff1586e0f68fc6",
          "url": "https://github.com/MystenLabs/sui/commit/2633885b0889d1e3dc5796c837b7adca0ef51924"
        },
        "date": 1684343435611,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 151534919,
            "range": "± 4263948",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 352747,
            "range": "± 78381",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a94b4d928869b7496667df97f758ed66a89fd10",
          "message": "indexer easy: better err msg for checkpoing download (#12049)\n\n## Description \r\n\r\nRT\r\n\r\n## Test Plan \r\n\r\nrun with public end point which has rate limiting and verify err msg\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-17T13:39:36-04:00",
          "tree_id": "4ee77be0d9242497d87c15594328b5ff308d40bf",
          "url": "https://github.com/MystenLabs/sui/commit/7a94b4d928869b7496667df97f758ed66a89fd10"
        },
        "date": 1684345781654,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 136578214,
            "range": "± 5336838",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 312262,
            "range": "± 15761",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tmn@mystenlabs.com",
            "name": "Todd Nowacki",
            "username": "tnowacki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "975320eabc37ecabef6c2bf3d5ea8d9d2353e50c",
          "message": "[tests] Fix reference gas price for sui-core tests (#10918)\n\n## Description \r\n\r\n- Fixed sui-core tests with RGP of 1\r\n\r\n## Test Plan \r\n\r\n- Updated tests \r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-17T18:20:30Z",
          "tree_id": "cfa030ae18eeb292b11ea8dd5340f440d5e266f7",
          "url": "https://github.com/MystenLabs/sui/commit/975320eabc37ecabef6c2bf3d5ea8d9d2353e50c"
        },
        "date": 1684348269769,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145957044,
            "range": "± 4470374",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 420294,
            "range": "± 14408",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "461348f49612b58dc852f210d841d5f757eddeb1",
          "message": "add LRU cache for fuzzing (#12050)\n\n## Description \r\n\r\nUse LRU cache for objects and epoch info used in replay fuzzing to\r\nreduce rpc calls.\r\n\r\n## Test Plan \r\n\r\nManual\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-17T11:47:21-07:00",
          "tree_id": "7b883af7e75009aec999cd34f3d64e97875cc9a3",
          "url": "https://github.com/MystenLabs/sui/commit/461348f49612b58dc852f210d841d5f757eddeb1"
        },
        "date": 1684350017261,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 138265679,
            "range": "± 5064605",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308459,
            "range": "± 7839",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adam@mystenlabs.com",
            "name": "Adam Welc",
            "username": "awelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1c604c2b574a7b76141681692e5a27617c32232c",
          "message": "[tests] Added additional programmable transactions fuzz tests (#12011)\n\n## Description \r\n\r\nThe idea here is to move the needle in terms of fuzz-testing\r\nprogrammable transactions - exercise at least some logic throughout the\r\nentire transaction block. Currently we measure \"success\" as getting to\r\nthe end of transaction block and hitting the error message about\r\n\"un-droppable\" values being present at the end of the block.\r\n\r\n## Test Plan \r\n\r\nThis is the actual test.",
          "timestamp": "2023-05-17T12:28:44-07:00",
          "tree_id": "b696c66f5e98fee37b5d39e3586a8af1be3ab040",
          "url": "https://github.com/MystenLabs/sui/commit/1c604c2b574a7b76141681692e5a27617c32232c"
        },
        "date": 1684352443654,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 105294801,
            "range": "± 2919392",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 285067,
            "range": "± 18919",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "127570466+wlmyng@users.noreply.github.com",
            "name": "wlmyng",
            "username": "wlmyng"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd75bebae6d30174a92824e589ae678ce41bc802",
          "message": "[1/n] [sui-json-rpc] unit testing (#12053)\n\n## Description \r\n\r\nGiven the recent changes to error handling and error response codes on\r\nrpc, adding some unit tests so we can expect behavior without having to\r\nreproduce potentially difficult error states through integration/ e2e\r\ntests.\r\n\r\n1. `MoveUtils` previously took `AuthorityState`, now has field\r\n`MoveUtilsInternalTrait` trait object. Moved most implementation of\r\nMoveUtils input the trait object so we can mock various states and\r\nexpect the correct success or error response.\r\n2. Two unit tests for `get_normalized_move_module` for success and error\r\nresponses.\r\n\r\n## Test Plan \r\nExisting tests + new unit tests\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-17T17:10:13-04:00",
          "tree_id": "cae9b7613ddacc919f50513e9f3e19d02a834922",
          "url": "https://github.com/MystenLabs/sui/commit/bd75bebae6d30174a92824e589ae678ce41bc802"
        },
        "date": 1684358338919,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 109707301,
            "range": "± 3183114",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 341459,
            "range": "± 22163",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2597a813338a9b4bcb483c557091b3c495e5630c",
          "message": "sui ns: rpc with updated spec (#12006)\n\n## Description \r\n\r\nUpdate JSON RPC with new spec\r\n\r\n## Test Plan \r\n\r\nlocal testing, similar to \r\nhttps://github.com/MystenLabs/sui/pull/10684",
          "timestamp": "2023-05-17T22:30:25Z",
          "tree_id": "2ecde526b2d2b4be5271725e04210a2a025c048e",
          "url": "https://github.com/MystenLabs/sui/commit/2597a813338a9b4bcb483c557091b3c495e5630c"
        },
        "date": 1684363235733,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145742250,
            "range": "± 4948761",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 309599,
            "range": "± 22416",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "10fc5691cf0da32e9c742043d62e005c168bb0a8",
          "message": "Revert git revision refactoring (#12025)\n\nMoves the git revision/version back to each main.rs",
          "timestamp": "2023-05-17T16:01:31-07:00",
          "tree_id": "69126d600a1780ff552f60c4b083a689b55def9f",
          "url": "https://github.com/MystenLabs/sui/commit/10fc5691cf0da32e9c742043d62e005c168bb0a8"
        },
        "date": 1684365119840,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 144409457,
            "range": "± 4712895",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 503203,
            "range": "± 104315",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ashok@mystenlabs.com",
            "name": "Ashok Menon",
            "username": "amnn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "df35c084ed7399e18450adee2b6d1f8c2910b750",
          "message": "[move-stdlib/type_name] rename get_original to get_with_original_ids (#12047)\n\n## Description\r\n\r\nAddress follow-ups from #12026, related to a typo in a doc comment, and\r\nan improvement to the function name.\r\n\r\n## Test Plan:\r\n\r\n```\r\nsui$ cargo simtest\r\nsui$ env SUI_SKIP_SIMTESTS=1 cargo nextest run\r\n```\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [x] breaking change for FNs (FN binary must upgrade)\r\n- [x] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\nRenaming `std::type_name::get_original` (introduced to the framework as\r\nprotocol version 11) to `std::type_name::get_with_original_ids`.",
          "timestamp": "2023-05-18T03:28:27-07:00",
          "tree_id": "fb07de56e4254fb03fb9522693bb04fe40190e52",
          "url": "https://github.com/MystenLabs/sui/commit/df35c084ed7399e18450adee2b6d1f8c2910b750"
        },
        "date": 1684406226626,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 108122720,
            "range": "± 6561450",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 261642,
            "range": "± 30742",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "416a980749ba8208917bae37a1ec1d43e50037b7",
          "message": "Add enum snapshot tests to `SuiMoveValue` and `SuiMoveStruct` (#12056)\n\n## Description \r\n\r\nSeparates the test util for enum order checking into its own crate so it\r\ncan be shared\r\nAdds tests to enforce enum ord is preserved for backward compat.\r\n\r\n## Test Plan \r\n\r\nManual.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-18T16:32:04Z",
          "tree_id": "e536b9bda4862b924dcd924f54a95fbd30dc7a5d",
          "url": "https://github.com/MystenLabs/sui/commit/416a980749ba8208917bae37a1ec1d43e50037b7"
        },
        "date": 1684428369447,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 148955437,
            "range": "± 7094167",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 318239,
            "range": "± 14136",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2530be799092fe135f71e6f7056ce24bc0e392fa",
          "message": "rpc: address metrics (#12071)\n\n## Description \r\n\r\nAdd address metrics to extended RPC\r\n\r\n## Test Plan \r\n\r\nlocal run indexer as rpc server and verify that the new endpoints can\r\nreturn expected response\r\n```\r\ncargo run --bin sui-indexer -- --db-url \"postgres://postgres:postgres@localhost/gegao\" --rpc-client-url   http://ord-exp-val-01.experiments.sui.io:9000 --rpc-server-worker --rpc-server-url 127.0.0.1 --rpc-server-port 3030\r\n\r\ncurl --location --request POST http://127.0.0.1:3030 \\\r\n--header 'Content-Type: application/json' \\\r\n--data-raw '{\r\n\"jsonrpc\": \"2.0\",\r\n\"id\": 1,\r\n\"method\": \"suix_getLatestAddressMetrics\",\r\n\"params\": []\r\n}'\r\n{\"jsonrpc\":\"2.0\",\"result\":{\"checkpoint\":9199,\"epoch\":1,\"timestampMs\":1683821111335,\"cumulativeAddresses\":16086,\"cumulativeActiveAddresses\":104,\"dailyActiveAddresses\":104},\"id\":1}% \r\n\r\n\r\ncurl --location --request POST http://127.0.0.1:3030 \\\r\n--header 'Content-Type: application/json' \\\r\n--data-raw '{\r\n\"jsonrpc\": \"2.0\",\r\n\"id\": 1,\r\n\"method\": \"suix_getCheckpointAddressMetrics\",\r\n\"params\": [4999]\r\n}'\r\n{\"jsonrpc\":\"2.0\",\"result\":{\"checkpoint\":4999,\"epoch\":0,\"timestampMs\":1683816628422,\"cumulativeAddresses\":604,\"cumulativeActiveAddresses\":5,\"dailyActiveAddresses\":5},\"id\":1}%     \r\n\r\n```\r\n\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-18T14:16:24-04:00",
          "tree_id": "cf13429829b35f78bb67c8e5895002980705db77",
          "url": "https://github.com/MystenLabs/sui/commit/2530be799092fe135f71e6f7056ce24bc0e392fa"
        },
        "date": 1684434492623,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147215154,
            "range": "± 5634477",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 311900,
            "range": "± 13692",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "113150618+dariorussi@users.noreply.github.com",
            "name": "Dario Russi",
            "username": "dariorussi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de22ef1d5ccf63ec3d1720aa4bc86e543ada7df3",
          "message": "Make checks for RPG more consistent (#12073)\n\n## Description \r\n\r\nMake dev inspect honor RGP and gas price to be more consistent and also\r\nremove as much as possible `RGP = 1` in testing\r\n\r\n## Test Plan \r\n\r\nAdded a test for gas price and see what tests fail\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [x] user-visible impact\r\n- [x] breaking change for a client SDKs\r\n- [x] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-18T16:29:04-05:00",
          "tree_id": "fc65a4c5c0ac4e4fb5894185ca60cacd6d95582d",
          "url": "https://github.com/MystenLabs/sui/commit/de22ef1d5ccf63ec3d1720aa4bc86e543ada7df3"
        },
        "date": 1684446139692,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 142949230,
            "range": "± 4893265",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308774,
            "range": "± 29223",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "79d7d218e7d53ceba64808204ec33b2127ab4701",
          "message": "fix fuzz loop (#12083)\n\n## Description \r\n\r\nFix issue where if there’s nothing to fuzz, the kind doesnt get updated so it uses the old kind\r\n\r\n## Test Plan \r\n\r\nManual\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-18T23:21:37Z",
          "tree_id": "1c9fcf5a5079b6c3aec00eb12b73beefbb1c9e0a",
          "url": "https://github.com/MystenLabs/sui/commit/79d7d218e7d53ceba64808204ec33b2127ab4701"
        },
        "date": 1684452742196,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 144753195,
            "range": "± 6905302",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308754,
            "range": "± 43400",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5231444c0a0b8eea4538c765cd4bded0918a94f4",
          "message": "expose chain identifier in rpc (#12064)\n\n## Description \r\n\r\nSometimes it's easy to mistake two networks (testnet v.s. mainnet), this\r\nadds a way to query the rpc to see which network the node is in. Also\r\nadd a CLI option.\r\n\r\n## Test Plan \r\n\r\ntested locally.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-18T23:17:33-07:00",
          "tree_id": "aaededcc66b8f9a3f3028d4b879fdfd5698dccaa",
          "url": "https://github.com/MystenLabs/sui/commit/5231444c0a0b8eea4538c765cd4bded0918a94f4"
        },
        "date": 1684477904463,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 142373335,
            "range": "± 11852281",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 364068,
            "range": "± 78106",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "03d202cfa20e9a5cdac2dc45d7b256e892a4f49f",
          "message": "Fix transaction filter check ordering (#12072)\n\nRuns tx filter before verifier.",
          "timestamp": "2023-05-19T08:33:58-07:00",
          "tree_id": "27590cfae59c0e3bbd9a549fc87eff58757b8cc3",
          "url": "https://github.com/MystenLabs/sui/commit/03d202cfa20e9a5cdac2dc45d7b256e892a4f49f"
        },
        "date": 1684511148042,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 156526732,
            "range": "± 7800084",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 323940,
            "range": "± 72877",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alberto@sonnino.com",
            "name": "Alberto Sonnino",
            "username": "asonnino"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e4126658642914b610f600104243c0eff2bf2f18",
          "message": "Remove Tusk (#12093)\n\nRemove support for tusk and support for an asynchronous Narwhal\r\nproposer.",
          "timestamp": "2023-05-19T17:08:46Z",
          "tree_id": "f2478938e4a50bc9d4422f06560adea1ce145d2e",
          "url": "https://github.com/MystenLabs/sui/commit/e4126658642914b610f600104243c0eff2bf2f18"
        },
        "date": 1684516731362,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 136777726,
            "range": "± 4084355",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 309976,
            "range": "± 16898",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "125720153cb58bb3f3cb55d6391d719e6fb66765",
          "message": "easy nit: remove unwrap, improve replay error (#12074)\n\n## Description \r\n\r\nSmall PR to cleanup some of the unwraps\r\n\r\n## Test Plan \r\n\r\nNormal tests.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-19T13:17:28-04:00",
          "tree_id": "913f39ada453c98046fecb082df309963a63bef4",
          "url": "https://github.com/MystenLabs/sui/commit/125720153cb58bb3f3cb55d6391d719e6fb66765"
        },
        "date": 1684517258244,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 140058970,
            "range": "± 5105617",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 310418,
            "range": "± 20857",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "71b540195167c3e33cf92ab3715b5d396ecd6c3a",
          "message": "add sticky network config for replay system (#12082)\n\n## Description \r\n\r\nAllows for loading and writing default configs for replay to\r\n`~/.sui-replay/network-config.yaml`\r\nThis way we can omit specifying the RPC endpoint on each operation.\r\nAlso adds a command for generating a default file\r\n\r\nExample\r\n```\r\n./target/debug/sui-tool replay  tx -t jgE26bo5ZWhGJbEq8brC8TrmFu8W4d2UDvyhdATvFwq\r\n2023-05-18T22:45:26.858972Z  INFO sui_replay: Executing tx: jgE26bo5ZWhGJbEq8brC8TrmFu8W4d2UDvyhdATvFwq\r\n2023-05-18T22:45:26.859350Z  INFO sui_replay::replay: Attempting to replay with network rpc:  https://fullnode.testnet.sui.io:443/\r\n2023-05-18T22:45:28.992366Z  INFO sui_replay: Execution finished successfully. Local and on-chain effects match.\r\n```\r\n\r\nFile generated\r\n```\r\nbase-network-configs:\r\n  - name: testnet\r\n    epoch-zero-start-timestamp: 0\r\n    epoch-zero-rgp: 0\r\n    public-full-node: \"https://fullnode.testnet.sui.io:443/\"\r\n  - name: devnet\r\n    epoch-zero-start-timestamp: 0\r\n    epoch-zero-rgp: 0\r\n    public-full-node: \"https://fullnode.devnet.sui.io:443/\"\r\n  - name: mainnet\r\n    epoch-zero-start-timestamp: 0\r\n    epoch-zero-rgp: 0\r\n    public-full-node: \"https://fullnode.mainnet.sui.io:443/\"\r\n```\r\n\r\n## Test Plan \r\n\r\nManual, unit test.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-19T13:17:15-04:00",
          "tree_id": "27a9bdf52682872df98bc48403b2c870fcbcd952",
          "url": "https://github.com/MystenLabs/sui/commit/71b540195167c3e33cf92ab3715b5d396ecd6c3a"
        },
        "date": 1684517289467,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145246534,
            "range": "± 5894952",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 312613,
            "range": "± 86385",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ff1005df0a6c093905d0dc7c903442ef9488a90",
          "message": "make sui CLI log file gated by env flag (#12095)\n\n## Description \r\n\r\nEnable or disable logging to file with env `SUI_CLI_LOG_FILE_ENABLE=1`\r\nDefault is 0 (off) when var is unset.\r\n\r\n## Test Plan \r\n\r\nManual\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-19T18:00:31Z",
          "tree_id": "f6aa045220ab3f349ef36f3c80f8e5701bac970b",
          "url": "https://github.com/MystenLabs/sui/commit/8ff1005df0a6c093905d0dc7c903442ef9488a90"
        },
        "date": 1684520028101,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 144194948,
            "range": "± 4367059",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308418,
            "range": "± 13058",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "123408603+healthydeve@users.noreply.github.com",
            "name": "Jian Lu",
            "username": "healthydeve"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2c4774c5fd4ee5268ab88ff8ef802ccecaa74bc1",
          "message": "[faucet] Adding Retry Logic for WAL (#11964)\n\n## Description \r\n\r\nTurning back on WAL retry logic with a flag that checks that its already\r\nan in_flight request. This way the separate worker thread will never\r\nattempt to try the same requests that are already inflight and resulting\r\nin a corrupted WAL.\r\n\r\nProof: \r\n<img width=\"1128\" alt=\"image\"\r\nsrc=\"https://github.com/MystenLabs/sui/assets/123408603/57f6a2ba-daca-4ff4-80d3-7366d679aa91\">\r\n\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\nUnit testing + CI/CD\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-19T15:17:05-04:00",
          "tree_id": "3d0daf86a1e229826ad187e4bc1d795c55e07bf6",
          "url": "https://github.com/MystenLabs/sui/commit/2c4774c5fd4ee5268ab88ff8ef802ccecaa74bc1"
        },
        "date": 1684524719499,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 139951976,
            "range": "± 4091960",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 315705,
            "range": "± 13842",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff79fb6386a455240b5c1e82d295cf33d24cfa5c",
          "message": "add option getters (#12031)\n\n## Description \r\n\r\nEach field `X` will now have getter `X_as_option` which returns\r\n`Option<T>` instead of panicking when `T` is `None`.\r\n\r\n## Test Plan \r\n\r\nUnit test\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-19T15:25:03-04:00",
          "tree_id": "4562811666f5bbc8925e69b2c3f14f50708af0ce",
          "url": "https://github.com/MystenLabs/sui/commit/ff79fb6386a455240b5c1e82d295cf33d24cfa5c"
        },
        "date": 1684524918066,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 142043215,
            "range": "± 4322666",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 306683,
            "range": "± 14153",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "86d736433d04d115c4356151d034f71fb968869c",
          "message": "[fuzz] replay fuzz from tx digest start (#12103)\n\n## Description \r\n\r\nAllows specifying start of fuzz as either checkpoint or tx digest\r\n\r\n## Test Plan \r\n\r\nManual\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-19T19:31:08-04:00",
          "tree_id": "168c70f1f84e98d9c1940ef0c68a101e3846f746",
          "url": "https://github.com/MystenLabs/sui/commit/86d736433d04d115c4356151d034f71fb968869c"
        },
        "date": 1684539884395,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 139921600,
            "range": "± 5623989",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 617821,
            "range": "± 82045",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "97870774+arun-koshy@users.noreply.github.com",
            "name": "Arun Koshy",
            "username": "arun-koshy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0a6f4ddaeb2d6cda659e7e8ef54aebd99c28f39a",
          "message": "Pipe Protocol Config into NW & Update protocol version to 11 for new NW VersionedMetadata field (#11519)\n\n## Description \r\n\r\nEnsure all latencies of steps in NW are logged from batch creation to\r\nbatch being fetched for execution, so we can spot check some digests\r\nfrom start to finish. Additionally update how batch execution latency is\r\ncalculated. Whenever we receive a batch from other workers we update the\r\nmetadata to the current time signifying the time we received the batch.\r\nWe will now have two metrics one calculating the overall latency using\r\nthe original created at timestamp from a remote worker and one that only\r\ncalculate latency from the time a batch was created/received locally.\r\n\r\nTo do this the protocol config also had to be passed in from Sui and\r\npiped through NW. The decision was made that all NW tests will be\r\ncompatible with the latest protocol version and any previous versions\r\nwould need to be explicitly tested. Also this PR adds protocol version\r\n11 so that the new `VersionedMetadata` field can be used in NW code.\r\n\r\n## Test Plan \r\n\r\nExisting Unit Tests\r\n\r\n---------\r\n\r\nCo-authored-by: Mingwei Tian <mingwei@mystenlabs.com>",
          "timestamp": "2023-05-19T18:50:13-07:00",
          "tree_id": "fcc2560922ed05793748bca7cdd2b4aa5bf0e647",
          "url": "https://github.com/MystenLabs/sui/commit/0a6f4ddaeb2d6cda659e7e8ef54aebd99c28f39a"
        },
        "date": 1684548225325,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145520439,
            "range": "± 4245019",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 319330,
            "range": "± 31204",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eugene@mystenlabs.com",
            "name": "Eugene Boguslavsky",
            "username": "ebmifa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9b150efbe18f5d9759f4bd5819ad4fd164564dcd",
          "message": "Framework Snapshot v1.2.0 (#12104)\n\n## Description \r\nFramework Snapshot v1.2.0\r\n`cargo run --bin sui-framework-snapshot`\r\n\r\n## Test Plan \r\n👀",
          "timestamp": "2023-05-20T03:26:18Z",
          "tree_id": "005c95cdb54672572b3e46aa1cb4c4321ccc36ec",
          "url": "https://github.com/MystenLabs/sui/commit/9b150efbe18f5d9759f4bd5819ad4fd164564dcd"
        },
        "date": 1684554004694,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 149184326,
            "range": "± 8084983",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 451120,
            "range": "± 25227",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eugene@mystenlabs.com",
            "name": "Eugene Boguslavsky",
            "username": "ebmifa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "833e69347a8e466a3da38c6757d53e7c6caf2f8a",
          "message": "Sui v1.3.0 version bump (#12109)\n\n## Description \r\nSui v1.3.0 version bump\r\n\r\n## Test Plan \r\n👀",
          "timestamp": "2023-05-20T08:13:07-07:00",
          "tree_id": "40b8da7581351fbea485f3227c74a2ea67eb11af",
          "url": "https://github.com/MystenLabs/sui/commit/833e69347a8e466a3da38c6757d53e7c6caf2f8a"
        },
        "date": 1684596215845,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147838035,
            "range": "± 5123537",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 318896,
            "range": "± 102558",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "127570466+wlmyng@users.noreply.github.com",
            "name": "wlmyng",
            "username": "wlmyng"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "16ce98552ef47412624abbddd2f263c4eba6600d",
          "message": "Point jsonrpsee to forked version to support error metrics by error code (#12106)",
          "timestamp": "2023-05-21T14:07:53-04:00",
          "tree_id": "2fd59abb0e4c60413319414ecca71bf099a1839a",
          "url": "https://github.com/MystenLabs/sui/commit/16ce98552ef47412624abbddd2f263c4eba6600d"
        },
        "date": 1684693106377,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 151008426,
            "range": "± 5032942",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 309345,
            "range": "± 69827",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zlnju@outlook.com",
            "name": "wiggins-dev",
            "username": "wiggins-dev"
          },
          "committer": {
            "email": "sam@mystenlabs.com",
            "name": "Sam Blackshear",
            "username": "sblackshear"
          },
          "distinct": true,
          "id": "485a8981bc472a35a84851791dadb83578b33944",
          "message": "[Deepbook] Add api for query market price #12088\n## Description\n\nAdd api for query market price of the order book\n\n## Test Plan\n\ncd to deepbook dir and run \"sui move test\"\n\n---\nIf your changes are not user-facing and not a breaking change, you can\nskip the following section. Otherwise, please indicate what changed, and\nthen add to the Release Notes section as highlighted during the release\nprocess.\n\n### Type of Change (Check all that apply)\n\n- [ ] user-visible impact\n- [ ] breaking change for a client SDKs\n- [ ] breaking change for FNs (FN binary must upgrade)\n- [ ] breaking change for validators or node operators (must upgrade\nbinaries)\n- [ ] breaking change for on-chain data layout\n- [ ] necessitate either a data wipe or data migration",
          "timestamp": "2023-05-21T14:15:47-07:00",
          "tree_id": "d19e732b60c377d13cb8222afb8a91573ecb5ccc",
          "url": "https://github.com/MystenLabs/sui/commit/485a8981bc472a35a84851791dadb83578b33944"
        },
        "date": 1684704349161,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 141043385,
            "range": "± 4498398",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308108,
            "range": "± 74052",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d7efe011a9f9fa50cd0ff6cfcd50a49b0d68e13",
          "message": "Fix tests (#12107)\n\n## Description \r\n\r\nFix Move tests and enable all\r\n\r\n## Test Plan \r\n\r\nManual, unit, CI\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-22T15:48:09-04:00",
          "tree_id": "241d9e87067632bd49dc24589de2eaa48fdf48b9",
          "url": "https://github.com/MystenLabs/sui/commit/9d7efe011a9f9fa50cd0ff6cfcd50a49b0d68e13"
        },
        "date": 1684785596209,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 106157677,
            "range": "± 3602562",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 259562,
            "range": "± 21750",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ashok@mystenlabs.com",
            "name": "Ashok Menon",
            "username": "amnn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e4eb1756e52c14b07047ff00646784cf96a1b3a8",
          "message": "[protocol-config] Bump protocol version to 12 (#12142)\n\n## Description\r\n\r\nTo fix protocol config snapshot test which is (correctly) complaining\r\nthat the framework bytes being packaged in the binary no longer matches\r\nthe snapshot for the max protocol version, after #12088.\r\n\r\n## Test Plan\r\n\r\n```\r\ncargo nextest run -- check_framework_change_with_protocol_upgrade\r\n```",
          "timestamp": "2023-05-22T20:55:27Z",
          "tree_id": "238143b3af352468b552c50b0e52c3ad4da527d4",
          "url": "https://github.com/MystenLabs/sui/commit/e4eb1756e52c14b07047ff00646784cf96a1b3a8"
        },
        "date": 1684789750496,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 137730529,
            "range": "± 6074658",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 311209,
            "range": "± 13926",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f661640c73d3a3cb48338eceef343f6a88dd8548",
          "message": "Remove sampling for batch write size (#12144)",
          "timestamp": "2023-05-22T21:35:31Z",
          "tree_id": "aebf3ff7cd4d335e5702bae5968486c8c611d450",
          "url": "https://github.com/MystenLabs/sui/commit/f661640c73d3a3cb48338eceef343f6a88dd8548"
        },
        "date": 1684791946721,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 151827658,
            "range": "± 4613742",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 318898,
            "range": "± 76178",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "123408603+healthydeve@users.noreply.github.com",
            "name": "Jian Lu",
            "username": "healthydeve"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5490fee04ce7f8f29a71500cb728efcdea84130a",
          "message": "Revert \"[Sui-test-validator] adding persisted state option (#11389)\" (#12100)\n\nThis reverts commit f8477e811c1f6e1f26814ad16888748e10f0060f.\r\n\r\n## Description \r\n\r\nDescribe the changes or additions included in this PR.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-22T21:49:14Z",
          "tree_id": "8090bec07a26cb3290767e3cc4926219943323c5",
          "url": "https://github.com/MystenLabs/sui/commit/5490fee04ce7f8f29a71500cb728efcdea84130a"
        },
        "date": 1684792764559,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 140409199,
            "range": "± 5651193",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 544215,
            "range": "± 70391",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "97870774+arun-koshy@users.noreply.github.com",
            "name": "Arun Koshy",
            "username": "arun-koshy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "63e51d17baf02a26dc3ac2ee8124ccf6aba87720",
          "message": "Revert \"Pipe Protocol Config into NW & Update protocol version to 11 for new NW VersionedMetadata field\" (#12146)\n\nThere is an issue where previous Batch versions can be fetched despite\r\nthe protocol version upgrade. Will need to add some additional checks +\r\ntests before submitting this change.",
          "timestamp": "2023-05-22T21:52:07Z",
          "tree_id": "c19a9a3001af4898fa9daed1fa5e6d1cc2abf3e5",
          "url": "https://github.com/MystenLabs/sui/commit/63e51d17baf02a26dc3ac2ee8124ccf6aba87720"
        },
        "date": 1684792839761,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 108101691,
            "range": "± 4161421",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 300655,
            "range": "± 11437",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "127570466+wlmyng@users.noreply.github.com",
            "name": "wlmyng",
            "username": "wlmyng"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "036914c92dbed1b29047d813531bd97b54b5624f",
          "message": "remove println (#12123)\n\n## Description \r\n\r\nDescribe the changes or additions included in this PR.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-22T16:05:07-07:00",
          "tree_id": "df9d4ee65ff35a7cd78e3abcda32570566c572c9",
          "url": "https://github.com/MystenLabs/sui/commit/036914c92dbed1b29047d813531bd97b54b5624f"
        },
        "date": 1684797316534,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 105181312,
            "range": "± 3004167",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 260239,
            "range": "± 21254",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "80852846d2da457725512c907296d481dc2908b0",
          "message": "use miliescond to avoid underflow when setting up pruner (#12149)\n\n## Description \r\n\r\nwhen `epoch_duration_ms` < 2000, `tick_duration` may be `0` which makes\r\n`tokio::time::interval_at` panic. The fix is to use\r\n`Duration::from_millis(`\r\n\r\n## Test Plan \r\n\r\n`cargo nextest run test_passive_reconfig` passes now which fails\r\notherwise\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-22T23:32:54Z",
          "tree_id": "d054107e2dcb432fe0834f33125df5f41922c6bb",
          "url": "https://github.com/MystenLabs/sui/commit/80852846d2da457725512c907296d481dc2908b0"
        },
        "date": 1684799195650,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 140549575,
            "range": "± 4638535",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 316914,
            "range": "± 21647",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "76f9491f703690e058c8bf69155f6d8f49b471d7",
          "message": "print concise pubkey bytes for dump-validators (#12075)",
          "timestamp": "2023-05-22T16:53:55-07:00",
          "tree_id": "c556e9a7bc20fc82e7069d9916b720e2e8bbc2df",
          "url": "https://github.com/MystenLabs/sui/commit/76f9491f703690e058c8bf69155f6d8f49b471d7"
        },
        "date": 1684800256148,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 149349199,
            "range": "± 4645428",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 307746,
            "range": "± 19695",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5fd9a2e73c6505e4d51a488b0c587580c1a50e1d",
          "message": "move metered-channel to mysten-metrics (#12156)\n\n## Description \r\n\r\nThis PR moves metered-channel from narwhal to mysten-metrics and uses it\r\non `streamer` to monitor the channel size.\r\n\r\n## Test Plan \r\n\r\nTested it locally and see the metrics appeared.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\nMoves metered-channel from narwhal to mysten-metrics and uses it on\r\n`streamer` to monitor the channel size.",
          "timestamp": "2023-05-23T04:13:07Z",
          "tree_id": "e7beb820279f0d439552699037df20259c1e7f2c",
          "url": "https://github.com/MystenLabs/sui/commit/5fd9a2e73c6505e4d51a488b0c587580c1a50e1d"
        },
        "date": 1684816002615,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146607214,
            "range": "± 4258745",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 325977,
            "range": "± 19434",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "95379755+losman0s@users.noreply.github.com",
            "name": "man0s",
            "username": "losman0s"
          },
          "committer": {
            "email": "sam@mystenlabs.com",
            "name": "Sam Blackshear",
            "username": "sblackshear"
          },
          "distinct": true,
          "id": "f340fc129948944014a82688aa20b233b634aa53",
          "message": "fix(move-cli): ignore_compile_warnings test flag ignored",
          "timestamp": "2023-05-23T08:17:57-07:00",
          "tree_id": "3ec4310579205f43440ed737ac851521b65d2afe",
          "url": "https://github.com/MystenLabs/sui/commit/f340fc129948944014a82688aa20b233b634aa53"
        },
        "date": 1684855700354,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 144207590,
            "range": "± 5142790",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 352957,
            "range": "± 34823",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c27aad16f02992178916b7d972343f943b530bd3",
          "message": "[ci] reduce test time: run external-crates tests concurrently with Sui tests (#12159)\n\n## Description \r\n\r\nSince external crates tests + prover tests and Sui tests are\r\nindependent, we can run them in parallel and save time.\r\nThis reduces test time from ~27 mins to ~22 mins\r\n\r\nOnce this goes in I'll work with @ebmifa to make the new tests required\r\nin CI\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-23T17:33:01-04:00",
          "tree_id": "359c5f7681b9427b324abb1da5816c723b1818f8",
          "url": "https://github.com/MystenLabs/sui/commit/c27aad16f02992178916b7d972343f943b530bd3"
        },
        "date": 1684878268954,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 139941655,
            "range": "± 4589894",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 387344,
            "range": "± 32176",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akihidis@gmail.com",
            "name": "Anastasios Kichidis",
            "username": "akichidis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d2ee08baa533dfd0d94854152499dc4bcb074166",
          "message": "[narwhal] synchronizer avoid joinset leaks (#12094)\n\n## Description \r\n\r\ntokio::JoinSet should be consumed to ensure that the list is not keep\r\nbuilding up leading to a potential \"leak\". In the Synchronizer we use\r\nthem both for the `batch_tasks` and the `certificate_senders` . For the\r\n`certificate_senders` is less of a concern as we only spawn a specific\r\nnumber of tasks which is the number of validators. It's more of a\r\nconcern for the `batch_tasks` where we constantly spawn new tasks. Every\r\nwork around that I thought with the current approach would require some\r\nadditional locking and timeout as `batch_tasks` are behind a mutex.\r\nInstead I used an internal channel to avoid this. The end goal is still\r\nserved - abording any inflight tasks when shutting down the component,\r\nas this will happen when the `tx_batch_tasks` closes.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-24T14:08:38+01:00",
          "tree_id": "c3471ce20363ea60651d6bef5d6d6d366224c020",
          "url": "https://github.com/MystenLabs/sui/commit/d2ee08baa533dfd0d94854152499dc4bcb074166"
        },
        "date": 1684934367105,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 141546022,
            "range": "± 5281136",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 394773,
            "range": "± 59318",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akihidis@gmail.com",
            "name": "Anastasios Kichidis",
            "username": "akichidis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "39497992ff495ab2bb56c557a57bc3799ebb0515",
          "message": "[refactor] exit early on certificate processing when already processed (#12137)\n\n## Description \r\n\r\nLooking over on some mainnet logs (before the recent improvements on the\r\nproposer certificate requests) it seems that nodes were re-processing\r\nsame certificate after this has been enqueued for processing in the\r\n`rx_certificate_acceptor` channel. Ex:\r\n\r\n```\r\n2023-05-09T20:52:32.430427Z DEBUG narwhal_consensus::bullshark: Processing KCS+7qgt4aRBk05R: C27294(24, KCS+7qgt4aRBk05R, E27)\r\n2023-05-09T20:52:32.432573Z DEBUG request{route=/narwhal.PrimaryToPrimary/RequestVote remote_peer_id=e1b69e22 direction=inbound}: narwhal_primary::synchronizer: Processing certificate KCS+7qgt4aRBk05R: C27294(24, KCS+7qgt4aRBk05R, E27) round:27294\r\n2023-05-09T20:52:32.449009Z DEBUG request{route=/narwhal.PrimaryToPrimary/RequestVote remote_peer_id=f6dee950 direction=inbound}: narwhal_primary::synchronizer: Processing certificate KCS+7qgt4aRBk05R: C27294(24, KCS+7qgt4aRBk05R, E27) round:27294\r\n2023-05-09T20:52:32.453237Z DEBUG request{route=/narwhal.PrimaryToPrimary/RequestVote remote_peer_id=476f689c direction=inbound}: narwhal_primary::synchronizer: Processing certificate KCS+7qgt4aRBk05R: C27294(24, KCS+7qgt4aRBk05R, E27) round:27294\r\n2023-05-09T20:52:37.339802Z DEBUG process_certificate_with_lock: narwhal_primary::synchronizer: Processing certificate KCS+7qgt4aRBk05R: C27294(24, KCS+7qgt4aRBk05R, E27)\r\n2023-05-09T20:52:37.552668Z DEBUG process_certificate_with_lock:accept_certificate_internal: narwhal_primary::synchronizer: Processing certificate KCS+7qgt4aRBk05R: C27294(24, KCS+7qgt4aRBk05R, E27)\r\n2023-05-09T20:52:37.552839Z DEBUG narwhal_consensus::bullshark: Processing KCS+7qgt4aRBk05R: C27294(24, KCS+7qgt4aRBk05R, E27)\r\n2023-05-09T20:52:53.634274Z DEBUG process_certificate_with_lock: narwhal_primary::synchronizer: Processing certificate KCS+7qgt4aRBk05R: C27294(24, KCS+7qgt4aRBk05R, E27)\r\n2023-05-09T20:52:53.825338Z DEBUG process_certificate_with_lock:accept_certificate_internal: narwhal_primary::synchronizer: Processing certificate KCS+7qgt4aRBk05R: C27294(24, KCS+7qgt4aRBk05R, E27)\r\n2023-05-09T20:52:53.825588Z DEBUG narwhal_consensus::bullshark: Processing KCS+7qgt4aRBk05R: C27294(24, KCS+7qgt4aRBk05R, E27)\r\n2023-05-09T20:52:55.546217Z DEBUG process_certificate_with_lock: narwhal_primary::synchronizer: Processing certificate KCS+7qgt4aRBk05R: C27294(24, KCS+7qgt4aRBk05R, E27)\r\n2023-05-09T20:52:55.855896Z DEBUG process_certificate_with_lock:accept_certificate_internal: narwhal_primary::synchronizer: Processing certificate KCS+7qgt4aRBk05R: C27294(24, KCS+7qgt4aRBk05R, E27)\r\n2023-05-09T20:52:55.856105Z DEBUG narwhal_consensus::bullshark: Processing KCS+7qgt4aRBk05R: C27294(24, KCS+7qgt4aRBk05R, E27)\r\n2023-05-09T20:52:56.119861Z DEBUG process_certificate_with_lock: narwhal_primary::synchronizer: Processing certificate KCS+7qgt4aRBk05R: C27294(24, KCS+7qgt4aRBk05R, E27)\r\n2023-05-09T20:52:56.361722Z DEBUG process_certificate_with_lock:accept_certificate_internal: narwhal_primary::synchronizer: Processing certificate KCS+7qgt4aRBk05R: C27294(24, KCS+7qgt4aRBk05R, E27)\r\n2023-05-09T20:52:56.361919Z DEBUG narwhal_consensus::bullshark: Processing KCS+7qgt4aRBk05R: C27294(24, KCS+7qgt4aRBk05R, E27)\r\n2023-05-09T20:53:08.279937Z DEBUG narwhal_consensus::utils: Sequencing KCS+7qgt4aRBk05R: C27294(24, KCS+7qgt4aRBk05R, E27)\r\n2023-05-09T20:53:08.281682Z DEBUG narwhal_consensus::consensus: Certificate KCS+7qgt4aRBk05RWqzoY8AVcIth6tl6m1Z59Q+eccY= took 36.2 seconds to be committed at round 27294\r\n2023-05-09T20:53:08.302452Z DEBUG narwhal_executor::subscriber: Adding fetched batch MD1H+em9MjxzBoWi from certificate KCS+7qgt4aRBk05R to consensus output\r\n```\r\n\r\nnow, [since those changes](https://github.com/MystenLabs/sui/pull/11835)\r\nI don't expect to see this happening frequently, but still it worth\r\nmaking this check before processing without cost - as we'll most\r\nprobably hit certificate store's memory cache.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-24T14:10:15+01:00",
          "tree_id": "f08b51609e37b76aad4480518a12ca44a35c4a90",
          "url": "https://github.com/MystenLabs/sui/commit/39497992ff495ab2bb56c557a57bc3799ebb0515"
        },
        "date": 1684934589249,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 150404948,
            "range": "± 5663136",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 366609,
            "range": "± 68288",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d349dd24c599e5e6e63f0d215ab4f1e66e4b6ad7",
          "message": "indexer: epoch population with local object store (#12181)\n\n## Description \r\n\r\nPrev. b/c indexer temp. disabled object content population, it had to\r\nfetch FN for epoch data, however FN does not keep historic system state\r\ndata, indexer would always skip old epochs and started from latest.\r\n\r\nAfter recent PRs, indexer now re-populates local object store, thus\r\nindexer epoch processing can use the local epoch store now.\r\n\r\n## Test Plan \r\n\r\n\r\nTested locally and make sure that even following a FN that has been\r\nupdated, indexer populates epoch starting from 0\r\n```\r\ncargo run --bin sui-indexer -- --db-url \"postgres://postgres:postgres@localhost/gegao\" --rpc-client-url http://lax-mnt-rpc-12.mainnet.sui.io:9000 --fullnode-sync-worker --rpc-server-url 127.0.0.1 --rpc-server-port 3030 --reset-db\r\n```\r\n\r\n![Screenshot 2023-05-24 at 8 45 36\r\nAM](https://github.com/MystenLabs/sui/assets/106119108/8bfb233e-ebdc-4e40-b096-9c9d1572ca96)\r\n\r\n\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-24T11:48:52-04:00",
          "tree_id": "ccf2abcedb3810569046891487d0cba2da3734e0",
          "url": "https://github.com/MystenLabs/sui/commit/d349dd24c599e5e6e63f0d215ab4f1e66e4b6ad7"
        },
        "date": 1684943993253,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146500964,
            "range": "± 7670850",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 324839,
            "range": "± 26395",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "228ca35596d9e452d839ee84ecf092951353c1ea",
          "message": "indexer: merge tx and object in checkpoint handler (#12182)\n\n## Description \r\n\r\nIt was split before mainnet for better backfill speed on testnet, it's\r\nno longer urgent b/c TPS is not super high today, but this split is very\r\nerror-prune and caused issues and affected reliability in the past, thus\r\n\r\nTo improve peak TPS handling capability, it's planned to rewrite object\r\ncommit via replacing upsert with append-only.\r\n\r\n## Test Plan \r\n\r\nrunning locally agains both testnet and mainnet to make sure \r\n- all obj handler related tables are all populated as expected including\r\n`objects`, `epochs`, `packages`, `input_objects`, `move_calls` and\r\n`recipients`.\r\n- compared commit speeds over first 10k checkpoints and the obj is still\r\nthe bottle-neck and it's not any faster\r\n- testnet with change: 650s <> testnet without changes: 1) tx: 510s 2)\r\nobj: 670s\r\n- mainnet with change: 150s <> mainnet without changes: 1) tx: 110s 2)\r\nobj: 145s\r\n  \r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-24T12:56:09-04:00",
          "tree_id": "0c7f04b9dfd2d225d00a99afc2f231aa5044bd2b",
          "url": "https://github.com/MystenLabs/sui/commit/228ca35596d9e452d839ee84ecf092951353c1ea"
        },
        "date": 1684948018041,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147743450,
            "range": "± 6317094",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 361956,
            "range": "± 61447",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "damirka.ru@gmail.com",
            "name": "Damir Shamanaev",
            "username": "damirka"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "177ae2c6293b23d5253d059bcec7bbd12ef78436",
          "message": "[kiosk] Adds 'default' entry function to Kiosk (#12043)\n\n## Description \r\n\r\nFor an easy CLI setup (it does not support PTBs yet), adds an entry\r\nfunction which shares the Kiosk and transfers the KioskOwnerCap to the\r\ntx sender. This is the most common setup for the Kiosk.\r\n\r\n## Test Plan \r\n\r\n---\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\n- adds `sui::kiosk::default()` function for an easy Kiosk setup\r\n- adds `sui::transfer_policy::default()` function for an easy TP setup",
          "timestamp": "2023-05-24T20:13:16+03:00",
          "tree_id": "7f64d30e89b9b251563477cba25a203726ec4927",
          "url": "https://github.com/MystenLabs/sui/commit/177ae2c6293b23d5253d059bcec7bbd12ef78436"
        },
        "date": 1684949025171,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 150083458,
            "range": "± 4677276",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 317353,
            "range": "± 22213",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e08f1a080b300efc3b7158ff429ec76464fd4d71",
          "message": "set alt server name for anemo (#12171)\n\n## Description \r\n\r\nupdate anemo to\r\nhttps://github.com/MystenLabs/anemo/commit/1bfa7842f66a85d35345b5ada358df90c3efd579\r\nwhich includes the `alternate_server_name` change. Set primary server\r\nname as `sui-{chain-id}`.\r\n\r\n## Test Plan \r\n\r\ntested in labnet.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [x] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\nupdate anemo to\r\nhttps://github.com/MystenLabs/anemo/commit/1bfa7842f66a85d35345b5ada358df90c3efd579\r\nwhich includes the `alternate_server_name` change. Set primary server\r\nname as `sui-{chain-id}`. Note that if node starts to run this version\r\nin testnet/mainnet before the update is officially rolled out, it's\r\nlikely the node won't be able to state sync.",
          "timestamp": "2023-05-25T02:47:30Z",
          "tree_id": "bd31f32681f456408079b88f6d031d8f649b7841",
          "url": "https://github.com/MystenLabs/sui/commit/e08f1a080b300efc3b7158ff429ec76464fd4d71"
        },
        "date": 1684983620323,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147144569,
            "range": "± 6977580",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 315748,
            "range": "± 86845",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd6bbe0682fa7c115aca5633b78e172573835794",
          "message": "Swarm config refactoring (#12117)\n\nThis PR does a series of refactoring on how we construct node config and\r\nswarm configs to make it cleaner:\r\n1. Renames utils.rs in sui-config/ to local_ip_utils.rs, and moved all\r\nthe IP and port management port into it. Now it contains a manager to\r\ngenerate new IPs and new ports for simtest; for non-simtest it always\r\nuse localhost and new available port.\r\n2. Previously we start fullnode inside TestCluster, which runs on the\r\nclient node in simtest. This created a lot of tech debt. This PR moves\r\nall fullnode creation into Swarm. Now we can start arbitrary number of\r\nfullnodes in a Swarm. When starting TestCluster, it uses Swarm to launch\r\na fullnode, and keep a copy of the fullnode handle locally for rpc\r\naccess.\r\n3. Also added the ability to start more fullnodes after a test cluster\r\nstarted running, inside swarm. This means we could also run those\r\nfullnodes in a container, managed by the swarm.\r\n4. Heavy use of the builder pattern: added ValidatorGenesisConfigBuilder\r\nto build a ValidatorGenesisConfig; added ValidatorConfigBuilder and\r\nFullnodeConfigBuilder to build their node configs.\r\n5. Removed a number of unused fields in ConfigBuilder and SwarmBuilder.\r\n\r\nThis this PR, we should be able to start removing all the code that\r\nspawns individual nodes instead of inside a container.",
          "timestamp": "2023-05-25T04:10:36Z",
          "tree_id": "ff8aebe91adc2063d58adaaaae2e59d5333718e6",
          "url": "https://github.com/MystenLabs/sui/commit/cd6bbe0682fa7c115aca5633b78e172573835794"
        },
        "date": 1684988480601,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145066270,
            "range": "± 5304801",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 309090,
            "range": "± 27774",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "51927076+phoenix-o@users.noreply.github.com",
            "name": "phoenix",
            "username": "phoenix-o"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d88eb07d0c0a1d386b8a78ab3004150d950656a5",
          "message": "update rust rocksdb to 0.21.0 (#12185)\n\nupdates rust rocksdb dependency to 0.21.0\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-25T16:59:53+02:00",
          "tree_id": "6fcb6d3d33fa8a25927b278f765de318f4b46a64",
          "url": "https://github.com/MystenLabs/sui/commit/d88eb07d0c0a1d386b8a78ab3004150d950656a5"
        },
        "date": 1685027315661,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 109121430,
            "range": "± 9302168",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 259246,
            "range": "± 25645",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akihidis@gmail.com",
            "name": "Anastasios Kichidis",
            "username": "akichidis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "11856dffc71a9308e6bb077f5083ad1806d86ac1",
          "message": "[refactor] remove references to Tusk (#12201)\n\n## Description \r\n\r\nFollow up clean up to the Tusk code and references that don't make sense\r\nanymore.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-25T16:40:52Z",
          "tree_id": "0f9cad7706eba616b0f639c40b47500ddf769f89",
          "url": "https://github.com/MystenLabs/sui/commit/11856dffc71a9308e6bb077f5083ad1806d86ac1"
        },
        "date": 1685033527542,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 142330482,
            "range": "± 4871667",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 311223,
            "range": "± 13293",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a19ad3e25893cea3fad6f82367d80d9ef549de66",
          "message": "update self.checkpoint_sequence_by_contents_digest atomically along with other cfs (#12192)\n\n## Description \r\n\r\nIt's not causing any problems today but in case in the future we\r\nmistakenly assume these inserts happen atomically.\r\n\r\n## Test Plan \r\n\r\nCI\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\nupdate self.checkpoint_sequence_by_contents_digest atomically along with\r\nother cfs",
          "timestamp": "2023-05-25T14:35:24-07:00",
          "tree_id": "84967f4236f7294ad5838e63336658693bec348a",
          "url": "https://github.com/MystenLabs/sui/commit/a19ad3e25893cea3fad6f82367d80d9ef549de66"
        },
        "date": 1685051172085,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146167309,
            "range": "± 4589537",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 311597,
            "range": "± 19897",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "distinct": true,
          "id": "827f1138a09190975172ec99389751ca95cce5df",
          "message": "move data from unit test to integration test",
          "timestamp": "2023-05-25T14:38:18-07:00",
          "tree_id": "7e6e6654b4515391d763933dd026f226f578bbdc",
          "url": "https://github.com/MystenLabs/sui/commit/827f1138a09190975172ec99389751ca95cce5df"
        },
        "date": 1685051472619,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 141291979,
            "range": "± 4464758",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 388051,
            "range": "± 76441",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "01cbe46bcaaa23e99e0b471e73fdd1a577a2ce7c",
          "message": "Remove unnecessary workspace versions (#12211)\n\n## Description \r\n\r\nA few crates don't/shouldn't inherit workspace version. Give them\r\nindividual versions.\r\nAlso the open-json-rpc is generating version using sui-core's version,\r\nwhich is always the workspace version. This is wrong to me. This PR is a\r\nshort-term fix to just use workspace version directly in open-json-rpc,\r\nbut we should make it a real version.\r\n\r\n## Test Plan \r\n\r\ncargo build\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-25T16:34:52-07:00",
          "tree_id": "5b6da37e50aa5f80779bc20c59e4d3fa9aaf18c5",
          "url": "https://github.com/MystenLabs/sui/commit/01cbe46bcaaa23e99e0b471e73fdd1a577a2ce7c"
        },
        "date": 1685058418568,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 109327386,
            "range": "± 11069902",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 261766,
            "range": "± 22083",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "81660174+mwtian@users.noreply.github.com",
            "name": "mwtian",
            "username": "mwtian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c853f8dba8825d7029ec22dd20d97cb733ff6f2b",
          "message": "[Narwhal] cleanup logs and comments (#12218)\n\n## Description \r\n\r\nRemove or reduce spamminess of a few log statements.\r\n\r\nClean up comments in proposer.rs a bit.\r\n\r\n## Test Plan \r\n\r\nCI.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-26T08:19:55-07:00",
          "tree_id": "92062d78f895e24b0acdc20f7f8657f0309dbc22",
          "url": "https://github.com/MystenLabs/sui/commit/c853f8dba8825d7029ec22dd20d97cb733ff6f2b"
        },
        "date": 1685115248988,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145774232,
            "range": "± 7541810",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 314697,
            "range": "± 32057",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff3a33206b85cc8686c0063392d60b154d836438",
          "message": "sui ns: add default configs (#12239)\n\n## Description \r\n\r\nbefore this PR, FN config is required to make sui NS work, this PR added\r\ndefault mainnet sui ns config so that\r\n- without extra setup, sui ns on mainnet should just work\r\n- if RPC provider wants to override with custom ones, they still can\r\n- on other *nets, overriding is still required.\r\n\r\n## Test Plan \r\n\r\nTest on testnet with & without overriding.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-27T11:21:17-07:00",
          "tree_id": "e44e93b60073b5e6fe5ce2d6132470f9c3866f7f",
          "url": "https://github.com/MystenLabs/sui/commit/ff3a33206b85cc8686c0063392d60b154d836438"
        },
        "date": 1685212507247,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 141276604,
            "range": "± 8811500",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 318753,
            "range": "± 35692",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "adb00542eff61a0ca5434e33ff5cbdc8e6b72e7e",
          "message": "Use a single db batch per narwhal commit in consensus task. (#10360)\n\nThis has seen considerable testing in private testnet at this point. The\r\none major issue identified (degrading narwhal performance) appears to\r\nhave been caused by the insufficient udp socket buffers identified by\r\n@aschran - i test this code with his fix and there is no longer any\r\ndegradation caused by this change, and the improvement in consensus\r\nhandler utilization appears to be close to 2x.",
          "timestamp": "2023-05-28T08:11:23-07:00",
          "tree_id": "4ac202b416c05fed7248f00df6146d8b7c10fc88",
          "url": "https://github.com/MystenLabs/sui/commit/adb00542eff61a0ca5434e33ff5cbdc8e6b72e7e"
        },
        "date": 1685287526813,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 137810051,
            "range": "± 4853442",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 316679,
            "range": "± 20691",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "2895723+tzakian@users.noreply.github.com",
            "name": "Tim Zakian",
            "username": "tzakian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9977d222f858db75958e57029b0731579f8b3bbf",
          "message": "Update Move command-line parser (#12243)",
          "timestamp": "2023-05-29T18:30:55Z",
          "tree_id": "caa7336cff211b10b7697c36184dc2ce8e322f1a",
          "url": "https://github.com/MystenLabs/sui/commit/9977d222f858db75958e57029b0731579f8b3bbf"
        },
        "date": 1685385756125,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 144530100,
            "range": "± 5844856",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 347286,
            "range": "± 77620",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "35a815b0b818c308d2b6e863b26c90366a2a542e",
          "message": "Fix transaction orchestrator test (#12253)\n\n## Description \r\n\r\nAdd a timeout to make it more reliable. I think there was a sleep\r\npreviously, which got removed accidentally in a refactoring.\r\n\r\n## Test Plan \r\n\r\ncargo simtest\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-30T09:43:44-07:00",
          "tree_id": "7c14b7cf8491c726a6e268be62cec28e6c94685c",
          "url": "https://github.com/MystenLabs/sui/commit/35a815b0b818c308d2b6e863b26c90366a2a542e"
        },
        "date": 1685465564489,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 108216194,
            "range": "± 3643286",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 331751,
            "range": "± 19754",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0190e28fb5ec99540a2de3f3194d8df2a5f7c3c1",
          "message": "Fix test_onsite_reconfig_observer_basic (#12262)\n\n## Description \r\n\r\nAs described in the comment\r\n\r\n## Test Plan \r\n\r\ncargo simtest\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-30T19:31:40Z",
          "tree_id": "f32c52a64672df67cb6e2770d52c9aeffc86d5c4",
          "url": "https://github.com/MystenLabs/sui/commit/0190e28fb5ec99540a2de3f3194d8df2a5f7c3c1"
        },
        "date": 1685475744772,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145783196,
            "range": "± 6631364",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 514200,
            "range": "± 74476",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9b5606125b3d04ab6553bd39754d2a1697c3990c",
          "message": "sui ns: null if valid address or name is not set (#12258)\n\n## Description \r\n\r\nsee title.\r\n\r\n## Test Plan \r\n\r\ntested on testnet FN:\r\n\r\nto make sure that success lookups still return values\r\n```\r\ncurl --location --request POST http://ord-exp-val-01.experiments.sui.io:9000 \\\r\n--header 'Content-Type: application/json' \\\r\n--data-raw '{\r\n\"jsonrpc\": \"2.0\",\r\n\"id\": 1,\r\n\"method\": \"suix_resolveNameServiceAddress\",\r\n\"params\": [\"manos2.sui\"]\r\n}'\r\n{\"jsonrpc\":\"2.0\",\"result\":\"0xe0b97bff42fcef320b5f148db69033b9f689555348b2e90f1da72b0644fa37d0\",\"id\":1}%                                                 \r\ncurl --location --request POST http://ord-exp-val-01.experiments.sui.io:9000 \\\r\n--header 'Content-Type: application/json' \\\r\n--data-raw '{\r\n\"jsonrpc\": \"2.0\",\r\n\"id\": 1,\r\n\"method\": \"suix_resolveNameServiceNames\",\r\n\"params\": [\"0xe0b97bff42fcef320b5f148db69033b9f689555348b2e90f1da72b0644fa37d0\"]\r\n}'\r\n{\"jsonrpc\":\"2.0\",\"result\":{\"data\":[\"manos2.sui\"],\"nextCursor\":\"0x50197be085d892f02d3179405e8a8ae62e60c7946d487e3e7bfbb54ed85acb3e\",\"hasNextPage\":false},\"id\":1}%     \r\n\r\n```\r\n\r\n`app.sui` is reserved but has not valid addr\r\n```\r\ncurl --location --request POST http://ord-exp-val-01.experiments.sui.io:9000 \\\r\n--header 'Content-Type: application/json' \\\r\n--data-raw '{\r\n\"jsonrpc\": \"2.0\",\r\n\"id\": 1,\r\n\"method\": \"suix_resolveNameServiceAddress\",\r\n\"params\": [\"app.sui\"]\r\n}'\r\n{\"jsonrpc\":\"2.0\",\"result\":null,\"id\":1}%      \r\n```\r\n\r\n`0x0b1763f73f457a764b7dca9ebb6383f789480fd80e3007dfa961db738d8a7524` has\r\nnot corresponding name\r\n```\r\ncurl --location --request POST http://ord-exp-val-01.experiments.sui.io:9000 \\\r\n--header 'Content-Type: application/json' \\\r\n--data-raw '{\r\n\"jsonrpc\": \"2.0\",\r\n\"id\": 1,\r\n\"method\": \"suix_resolveNameServiceNames\",\r\n\"params\": [\"0x0b1763f73f457a764b7dca9ebb6383f789480fd80e3007dfa961db738d8a7524\"]\r\n}'\r\n{\"jsonrpc\":\"2.0\",\"result\":{\"data\":[],\"nextCursor\":null,\"hasNextPage\":false},\"id\":1}%\r\n```\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-30T15:54:57-04:00",
          "tree_id": "010f908f446d0940b2b8f2015117e92ab98249ba",
          "url": "https://github.com/MystenLabs/sui/commit/9b5606125b3d04ab6553bd39754d2a1697c3990c"
        },
        "date": 1685477121769,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 144716910,
            "range": "± 5140692",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308610,
            "range": "± 75873",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "308bb5536ef4455ad70e1a572d4d8e1bf1421307",
          "message": "indexer: move address to async processor (#12204)\n\n## Description \r\n\r\nMove processing of `addresses` table and `active_addresses` table to\r\nasync processor.\r\n\r\nThe motivations are:\r\n- address stats were not accurate, b/c both `addresses` and\r\n`active_addresses` are updated each checkpoint before this change and\r\nwill not wait for `address_stats`; this is especially bad when we\r\nbackfill `address_stats` with populated address tables\r\n- updating `addresses` and `active_addresses` each checkpoint oftentimes\r\ncaused concurrent writes and sometimes even dead_lock on PG commit; the\r\ndeadlock is not end of world b/c PG can somehow recover from it.\r\n\r\nAfter this change:\r\n- the addresses and active_addresses tables are updated each 100\r\ncheckpoints, and wait for address_stats to update before moving for next\r\n100 checkpoints\r\n- such that it solves both problems above, we can adjust the batch size\r\nif better latency is needed.\r\n\r\n## Test Plan \r\n\r\nlocal run and compare `addresses`, `active_addresses` & `address_stats`\r\nwith and without the change.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-30T15:59:37-04:00",
          "tree_id": "bcad8bfa3340d7d6a6bcc8537cd74ca6f363f339",
          "url": "https://github.com/MystenLabs/sui/commit/308bb5536ef4455ad70e1a572d4d8e1bf1421307"
        },
        "date": 1685477444737,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 138720788,
            "range": "± 4569725",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308511,
            "range": "± 11701",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emma@mystenlabs.com",
            "name": "Emma Zhong",
            "username": "emmazzz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec0610274b81c62ec3679bcfc0bba7b625b9a458",
          "message": "add PTB friendly staking funs (#12092)\n\n## Description \r\n\r\nAdd a non-entry version of the unstaking function that returns the\r\nwithdrawn SUI instead of sending it to the sender. This way we can\r\nbetter compose in PTBs.\r\n\r\n## Test Plan \r\n\r\nExisting tests.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [x] breaking change for FNs (FN binary must upgrade)\r\n- [x] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\nAdded a version of stake withdraw function that returns the withdrawn\r\nSUI tokens, for better composability.",
          "timestamp": "2023-05-30T20:01:08Z",
          "tree_id": "07720cce207b9e887cd9b5caccb772b242c5a5e8",
          "url": "https://github.com/MystenLabs/sui/commit/ec0610274b81c62ec3679bcfc0bba7b625b9a458"
        },
        "date": 1685477564595,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 149689491,
            "range": "± 5010099",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 310195,
            "range": "± 65390",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ae9c95d47b299b341048cbe96d091cda682c87e6",
          "message": "Cancel submission waits after close of epoch (#12223)\n\nA node that is trying to send end-of-publish, but is waiting for locally\r\nexecuted transactions to be sequenced, may end up waiting a long time if\r\nthe elected submitter of that cert has failed to submit. Instead, at\r\nreconfig time, we should immediately submit everything we are waiting\r\nfor.\r\n\r\nThis greatly reduced reconfig pauses while testing my problematic PR\r\n#10360, and it may provide some benefit even during normal operation.\r\nThere were no obvious problems caused by the temporary increase in\r\namplification even though we were above 4K tps, so the inflight\r\nsubmission limit appears to be doing the right thing.",
          "timestamp": "2023-05-30T20:06:01Z",
          "tree_id": "d21fe328ed6d3c0cb04871a7b603aa18ca2b53bf",
          "url": "https://github.com/MystenLabs/sui/commit/ae9c95d47b299b341048cbe96d091cda682c87e6"
        },
        "date": 1685477684810,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 106466115,
            "range": "± 4887185",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 306831,
            "range": "± 18742",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106645797+sadhansood@users.noreply.github.com",
            "name": "Sadhan Sood",
            "username": "sadhansood"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ac410ee27a0562dc230a4d7c530592cae5b1d80f",
          "message": "Add state archival writer and uploader (#12077)\n\n## Description \r\n\r\nPR adds archival writer and uploader code. Will add some tests to this\r\nsoon.",
          "timestamp": "2023-05-30T22:14:50-07:00",
          "tree_id": "7f100ec44413ed28a7061a483ebee4de0b253350",
          "url": "https://github.com/MystenLabs/sui/commit/ac410ee27a0562dc230a4d7c530592cae5b1d80f"
        },
        "date": 1685510723682,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146958778,
            "range": "± 5218467",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 599166,
            "range": "± 79804",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7907ff5917fed47b6f740e12eca46167095172d9",
          "message": "indexer: forward suins requests (#12268)\n\n## Description \r\n\r\nrefer title\r\n\r\n## Test Plan \r\n\r\ntest locally with http://ewr-mnt-rpc-03.mainnet.sui.io:9000/ as\r\nunderlying FN and make sure SuiNS endpoints work\r\n\r\n```\r\ncurl --location --request POST http://127.0.0.1:3030 \\\r\n--header 'Content-Type: application/json' \\\r\n--data-raw '{\r\n\"jsonrpc\": \"2.0\",\r\n\"id\": 1,\r\n\"method\": \"suix_resolveNameServiceAddress\",\r\n\"params\": [\"seanmikha.sui\"]\r\n}'\r\n{\"jsonrpc\":\"2.0\",\"result\":\"0xe0b97bff42fcef320b5f148db69033b9f689555348b2e90f1da72b0644fa37d0\",\"id\":1}%                                                 \r\ncurl --location --request POST http://127.0.0.1:3030 \\\r\n--header 'Content-Type: application/json' \\\r\n--data-raw '{\r\n\"jsonrpc\": \"2.0\",\r\n\"id\": 1,\r\n\"method\": \"suix_resolveNameServiceNames\",\r\n\"params\": [\"0xe0b97bff42fcef320b5f148db69033b9f689555348b2e90f1da72b0644fa37d0\"]\r\n}'\r\n{\"jsonrpc\":\"2.0\",\"result\":{\"data\":[\"seanmikha.sui\"],\"nextCursor\":\"0xce63acd667fb227282c32eeef8d63e543996df9617715649d2a68436a31161b0\",\"hasNextPage\":false},\"id\":1}%       \r\n```\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-31T13:05:33-04:00",
          "tree_id": "52f25925979473552ceae7db60afa1bbf842145b",
          "url": "https://github.com/MystenLabs/sui/commit/7907ff5917fed47b6f740e12eca46167095172d9"
        },
        "date": 1685553573827,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 136804213,
            "range": "± 4973926",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 319586,
            "range": "± 19490",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aschran@mystenlabs.com",
            "name": "Andrew Schran",
            "username": "aschran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "27c31b7df54ff0cbb59e9d4e34f369bbf074b58d",
          "message": "Increase UDP socket buffer sizes for Anemo networks (#12230)\n\n## Description \r\n\r\nIncreases size of UDP socket buffers for sui, primary, and worker Anemo\r\nnetworks. This improves performance under high load.\r\n\r\n## Test Plan \r\n\r\nManual benchmarks & testing on private-testnet.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\nIncreases size of UDP socket buffers for sui, primary, and worker Anemo\r\nnetworks. This improves performance under high load.\r\n\r\n**NOTE:** the buffer sizes requested after this change are larger than\r\nthe default maximum buffer allowed by many operating systems. If the sui\r\nnode binary logs errors about failure to set UDP socket buffer size, you\r\nmay need to increase the maximum allowed by your OS.\r\n\r\nSome examples:\r\n* Linux: `sudo sysctl -w net.core.rmem_max=104857600; sudo sysctl -w\r\nnet.core.wmem_max=104857600`\r\n* MacOS: `sudo sysctl -w kern.ipc.maxsockbuf=104857600`",
          "timestamp": "2023-05-31T20:39:00Z",
          "tree_id": "89814d4c2d3dba7f0a74c2fdf0365dfb2976b5c9",
          "url": "https://github.com/MystenLabs/sui/commit/27c31b7df54ff0cbb59e9d4e34f369bbf074b58d"
        },
        "date": 1685566221841,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 158030450,
            "range": "± 4721976",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 339495,
            "range": "± 24270",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "108701016+joyqvq@users.noreply.github.com",
            "name": "Joy Wang",
            "username": "joyqvq"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "588ab09c5b06f147e31d7a23d4616cb6208acde4",
          "message": "authority: inject google jwk bytes global value (#12273)\n\n## Description \r\n\r\nstore google jwk as a global value for envelope to access during sig\r\nverify. spawn a task in sui node to update it every 1 hour.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-31T16:44:28-04:00",
          "tree_id": "03380f55b92822c2de4cbc1cc42023c19989ffe1",
          "url": "https://github.com/MystenLabs/sui/commit/588ab09c5b06f147e31d7a23d4616cb6208acde4"
        },
        "date": 1685566512555,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 143691503,
            "range": "± 4891614",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 342465,
            "range": "± 81839",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "williamprincesmith@gmail.com",
            "name": "William Smith",
            "username": "williampsmith"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8a351ecf791793eb00f5e986b8a0eb35df532d6",
          "message": "[Core] Add support for chain-specific configs (#12183)\n\n## Description \r\n\r\nThe goal is to be able to roll out features for certain chains and not\r\nothers.\r\n\r\nTo accomplish this, we introduce a `Chain` enum, with a getter function\r\nto map the hard coded checkpoint identifier (i.e. the digest of the\r\ngenesis checkpoint) to the `Chain`, and have all callsites where the\r\nprotocol config is materialized to provide the chain identifier.\r\n\r\nWith the `Chain` being available in the\r\n`ProtocolConfig::get_for_version`, we can then make use of this in the\r\nprotocol version map.\r\n\r\n## Test Plan \r\n\r\nTested against a Mainnet node to ensure that the chain is correctly\r\nidentified. Also locally enabled a feature for all chains but mainnet in\r\nthe highest protocol version, and saw that the feature was active.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-31T19:30:41-07:00",
          "tree_id": "4a7dc7ff2a791624507af477b7bdeaea93e4d71b",
          "url": "https://github.com/MystenLabs/sui/commit/e8a351ecf791793eb00f5e986b8a0eb35df532d6"
        },
        "date": 1685587478916,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 138345315,
            "range": "± 4669759",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 314421,
            "range": "± 20936",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "brandon@mystenlabs.com",
            "name": "Brandon Williams",
            "username": "bmwill"
          },
          "committer": {
            "email": "bwilliams.eng@gmail.com",
            "name": "Brandon Williams",
            "username": "bmwill"
          },
          "distinct": true,
          "id": "8cda4863d432050b4a096681bc0b04c7ccb18eab",
          "message": "sui-proxy: fix build script to only rerun when needed",
          "timestamp": "2023-06-01T08:58:26-05:00",
          "tree_id": "bb5892cd07a18e15ba29c82e56952f5903a253bc",
          "url": "https://github.com/MystenLabs/sui/commit/8cda4863d432050b4a096681bc0b04c7ccb18eab"
        },
        "date": 1685628637034,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 109386037,
            "range": "± 4926854",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 309038,
            "range": "± 24943",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "williamprincesmith@gmail.com",
            "name": "William Smith",
            "username": "williampsmith"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ccf95f0d3682dd27cd5576dbff5a598ade8fe63b",
          "message": "[StateAccumulator] Commit root state digest on non-mainnet chains (#12288)\n\n## Description \r\n\r\nAs in title\r\n\r\n## Test Plan \r\n\r\n`test_passive_reconfig` simtest exercises the enabled feature. \r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-01T12:37:32-07:00",
          "tree_id": "4bb2229944355861c0378e0ceb486b5883a4f6cd",
          "url": "https://github.com/MystenLabs/sui/commit/ccf95f0d3682dd27cd5576dbff5a598ade8fe63b"
        },
        "date": 1685648889924,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 141980018,
            "range": "± 7016010",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 314429,
            "range": "± 17273",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "113150618+dariorussi@users.noreply.github.com",
            "name": "Dario Russi",
            "username": "dariorussi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "74b031fb4a40b939600a3e4dca0a973401611736",
          "message": "Move values cleanup (#12295)\n\n## Description \r\n\r\nas titled\r\n\r\n## Test Plan \r\n\r\nexisting tests and some more\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-01T20:26:54Z",
          "tree_id": "3aa27880e5a4965ea8cd648626bd1568d49c0d2e",
          "url": "https://github.com/MystenLabs/sui/commit/74b031fb4a40b939600a3e4dca0a973401611736"
        },
        "date": 1685651850970,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 139662363,
            "range": "± 5298627",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 383952,
            "range": "± 57911",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "108701016+joyqvq@users.noreply.github.com",
            "name": "Joy Wang",
            "username": "joyqvq"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7b53bf161551204f5d981fdbbf7363cdf81d65d5",
          "message": "crypto: implement zk login authenticator (#12210)\n\n## Description \r\nadd a zk login authenticator that can verify and execute the tx if all\r\nchecks passes. jwk is retrieved from global value.\r\n\r\n## Test Plan \r\n\r\nunit test + localnet\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-01T16:27:57-04:00",
          "tree_id": "3c93c67b4d7a2067f5601b2337c7a0e0594daf74",
          "url": "https://github.com/MystenLabs/sui/commit/7b53bf161551204f5d981fdbbf7363cdf81d65d5"
        },
        "date": 1685652121981,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 143114603,
            "range": "± 4639996",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 361927,
            "range": "± 66133",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b44f3c390d370b23f177c9f304ba71098e16126",
          "message": "indexer: FromOrTo tx filter (#12251)\n\n## Description \r\n\r\nThis PR added a tx filter\r\n```\r\n    /// Query txs that have a given address as sender or recipient.\r\n    FromOrToAddress { addr: SuiAddress },\r\n```\r\nsuch that on Explorer etc. the address page could fetch \"related txs\"\r\nefficiently.\r\n\r\n## Test Plan \r\n\r\nLocal run network + indexer, query tx with new filter.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-01T16:55:11-04:00",
          "tree_id": "612674fc4a36650bcc05df609d124b64ab514b47",
          "url": "https://github.com/MystenLabs/sui/commit/8b44f3c390d370b23f177c9f304ba71098e16126"
        },
        "date": 1685653811369,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 136683517,
            "range": "± 4316570",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 311965,
            "range": "± 17524",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a290023e55dfc4611688d6b439069daafc77bbb0",
          "message": "indexer: remove diesel async (#12297)\n\n## Description \r\n\r\nDiesel async was introduced to optimize indexer throughput but did not\r\nsee significant improvement, also saw some issues on building like\r\nhttps://mysten-labs.slack.com/archives/C04FG4Q7YJ3/p1685265857488579\r\n\r\n## Test Plan \r\n\r\nCI\r\n\r\nlocal run to make sure indexer reader & writer can both work.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-01T17:51:31-04:00",
          "tree_id": "c73c99fa32c7a42d5aada3cf8294148434ca0d25",
          "url": "https://github.com/MystenLabs/sui/commit/a290023e55dfc4611688d6b439069daafc77bbb0"
        },
        "date": 1685657260700,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 155715923,
            "range": "± 4111987",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 370320,
            "range": "± 74307",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2982516a6cd5bb06531f3024e4f8f35382f8e18",
          "message": "Simplify `handle_checkpoint_from_consensus` (#12212)\n\n## Description\r\n\r\nBased on feedback, now this PR simplifies\r\n`handle_checkpoint_from_consensus`. Previously there is a branch to\r\nhandle when the checkpoint is too new (newer than the\r\nhighest_verified_checkpoint). I think this case wouldn't happen because\r\nconsensus sends checkpoint in order. So we consolidate the two cases\r\ninto one, which is, whenever consensus sends a checkpoint, we do the\r\nfollowing things:\r\n1. check the previous digest matches. This is to ensure state sync and\r\nconsensus do not brain-split.\r\n2. if the checkpoint is older, ignore and exit\r\n3. update metrics and bump watermark\r\n4. notify others\r\n\r\n--------------------------\r\n# Old\r\n\r\n## Description \r\n\r\nWhen consensus sends checkpoint y, it means all prior checkpoints are\r\nverified and sent, so `highest_verified_checkpoint` can be safely\r\nupdated without looking at the checkpoint store. However it's a bit\r\ntricky for `highest_synced_checkpoint`, because there are a few cfs\r\n(e.g. `full_checkpoint_contents`) that could only be updated in state\r\nsync checkpoint contents. If we bump this watermarks, those cfs may not\r\nbe filled at all.\r\n\r\n## Test Plan \r\n\r\nCI\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\nDo not update highest_synced_checkpoint when consensus sends a too new\r\ncheckpoint",
          "timestamp": "2023-06-01T15:16:50-07:00",
          "tree_id": "f79fe43b4784d8fb3af4fbad50a009f4b736e437",
          "url": "https://github.com/MystenLabs/sui/commit/f2982516a6cd5bb06531f3024e4f8f35382f8e18"
        },
        "date": 1685658561455,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 139613852,
            "range": "± 4199853",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 312847,
            "range": "± 18964",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aschran@mystenlabs.com",
            "name": "Andrew Schran",
            "username": "aschran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c43bc7efbfd8941d339553e554aca4f871a02795",
          "message": "Advance anemo version (#12303)",
          "timestamp": "2023-06-01T16:08:43-07:00",
          "tree_id": "a6892664afdc28b0d34b26961c0f0c7c4e19c8c3",
          "url": "https://github.com/MystenLabs/sui/commit/c43bc7efbfd8941d339553e554aca4f871a02795"
        },
        "date": 1685661536927,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 105501057,
            "range": "± 3050452",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 312776,
            "range": "± 25103",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2e1d1d636b42ced93cd0e7066bce59c11988dcbc",
          "message": "config gating for zklogin (#12301)",
          "timestamp": "2023-06-01T23:13:04Z",
          "tree_id": "e3d40963337eeb8eb566cfeedcbfd702faf7ea94",
          "url": "https://github.com/MystenLabs/sui/commit/2e1d1d636b42ced93cd0e7066bce59c11988dcbc"
        },
        "date": 1685662012673,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 137814506,
            "range": "± 6388311",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 309801,
            "range": "± 31026",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "11cad55665325f738a499e50099a61c1b2999070",
          "message": "Test cluster/WalletContext always check execution result (#12296)\n\n## Description \r\n\r\nAlways check transaction execution result in TestCluster and\r\nWalletContext.\r\nFor cases where we expect the transaction may fail (typically\r\nnon-testing cases), we add another API explicitly for it.\r\n\r\n## Test Plan \r\n\r\nCI\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-02T00:06:36Z",
          "tree_id": "6b6319d4e3c5d57b4149539b3579ea8e8ba76632",
          "url": "https://github.com/MystenLabs/sui/commit/11cad55665325f738a499e50099a61c1b2999070"
        },
        "date": 1685665330640,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145950392,
            "range": "± 5761517",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 336263,
            "range": "± 85627",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e52af128605b4328695eebc4c3e51b635457712c",
          "message": "Do not notify about ignored certificates (#12291)\n\nFixes a bug where txns that are ignored due to end of epoch are not\r\nreverted during reconfig",
          "timestamp": "2023-06-02T16:31:04Z",
          "tree_id": "f30e506225f7f9db0be985fd7e89016430cfb5da",
          "url": "https://github.com/MystenLabs/sui/commit/e52af128605b4328695eebc4c3e51b635457712c"
        },
        "date": 1685724455959,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 150415561,
            "range": "± 5176124",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 338775,
            "range": "± 33113",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "99f9e234a4745735fa88e37fe73c53568f7eca6d",
          "message": "Remove unused variable in simtest (#12314)\n\n## Description \r\n\r\nnit\r\n\r\n## Test Plan \r\n\r\ncargo simtest\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-02T17:41:40Z",
          "tree_id": "466a9816aea86a1a3afe07eab0bee4db13b9d06d",
          "url": "https://github.com/MystenLabs/sui/commit/99f9e234a4745735fa88e37fe73c53568f7eca6d"
        },
        "date": 1685728313581,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 110554424,
            "range": "± 3716686",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 335019,
            "range": "± 17512",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "108701016+joyqvq@users.noreply.github.com",
            "name": "Joy Wang",
            "username": "joyqvq"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59df130be440efef23cd45d8570c8dac063776dc",
          "message": "chore: update fastcrypto (#12318)\n\n## Description \r\n\r\nDescribe the changes or additions included in this PR.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-02T21:56:24Z",
          "tree_id": "4be381e12b9456a64e2830034bf681a16da1babe",
          "url": "https://github.com/MystenLabs/sui/commit/59df130be440efef23cd45d8570c8dac063776dc"
        },
        "date": 1685743724508,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 106981975,
            "range": "± 5271643",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 301878,
            "range": "± 38958",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emma@mystenlabs.com",
            "name": "Emma Zhong",
            "username": "emmazzz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "709f856943024cc67e74038e923646ac565abb2a",
          "message": "[sui-system] remove unused code and correct variable naming (#12321)\n\n## Description \r\n\r\n- `request_withdraw_stake_preactive` was never used so it's removed.\r\n- In `derive_reference_gas_price` we are using voting power, not stake.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [x] breaking change for FNs (FN binary must upgrade)\r\n- [x] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-02T17:07:21-07:00",
          "tree_id": "ef4a652da1f73132e5c86532c426a0ab9d156b9c",
          "url": "https://github.com/MystenLabs/sui/commit/709f856943024cc67e74038e923646ac565abb2a"
        },
        "date": 1685751506702,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146639800,
            "range": "± 5367381",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 332352,
            "range": "± 35026",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "81660174+mwtian@users.noreply.github.com",
            "name": "mwtian",
            "username": "mwtian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ce7f3433dfa4895bbf23a06c238dd884887d695d",
          "message": "[rocksdb] allow setting sync to disk on WriteOptions (#12323)\n\n## Description \r\n\r\nThere have been reports of fullnode operators seeing data corruptions,\r\nwhere fullnodes are running in evictable pods. Add an option to ensure\r\nrocksdb writes are flushed to disk, so operators can experiment with its\r\neffectiveness.\r\n\r\nEventually we want to make sync to disk the default behavior, but right\r\nnow this slows down maximum write throughput a bit too much.\r\n\r\n## Test Plan \r\n\r\nCI. Private testnet.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-02T17:16:43-07:00",
          "tree_id": "385d8b7a9a54cab4f4fb27a915f46f1df970f3fc",
          "url": "https://github.com/MystenLabs/sui/commit/ce7f3433dfa4895bbf23a06c238dd884887d695d"
        },
        "date": 1685752078017,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 155108362,
            "range": "± 5326161",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 380162,
            "range": "± 50982",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1ddfea7a0f813bc75ff22e22f5b3475af9484034",
          "message": "insert committee when handling checkpoint from consensus (#12324)\n\n## Description \r\n\r\nIn https://github.com/MystenLabs/sui/pull/12212, we refactored\r\n`handle_checkpoint_from_consensus`. The PR missed one thing: when a last\r\ncheckpoint of an epoch is certified in consensus and sent to state sync,\r\nwe do not update the committee store. This is problematic because state\r\nsync does not reconfig. It means if a validator is slow in\r\nreconfiguration (where committee store would also be updated) and gets\r\ncheckpoints in the next epoch from peers, it will panic in that it\r\ncouldn't find the committee. This PR fixes it.\r\n\r\n\r\n## Test Plan \r\n\r\n```\r\nfor f in `seq 1 20`; do MSIM_TEST_NUM=5 MSIM_TEST_SEED=98$f RUST_LOG=off simt test_simulated_load_reconfig_restarts --no-capture > log-$f 2>&1 &; done\r\n```\r\n\r\n```\r\ngrep FAIL log-*\r\n```\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\nInsert committee when handling checkpoint from consensus.",
          "timestamp": "2023-06-03T00:37:27Z",
          "tree_id": "74ea3569650619f3f9cf9da8212208c28bf91f41",
          "url": "https://github.com/MystenLabs/sui/commit/1ddfea7a0f813bc75ff22e22f5b3475af9484034"
        },
        "date": 1685753290358,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 150767150,
            "range": "± 6452294",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 320279,
            "range": "± 54159",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "942b49865e1de1c8a69a40d999d06d53657034c6",
          "message": "add checkpoint low watermark for state sync (#12231)\n\n## Description \r\n\r\nThis PR adds the checkpoint low watermark for state sync. This lets a\r\nnode to know who to query checkpoint contents according to the\r\nwatermarks, once checkpoint pruning is enabled.\r\n\r\n* It adds a new state sync method `get_peer_latest_checkpoint_info`.\r\nThis call will eventually replace `GetCheckpointSummaryRequest::Latest`\r\nrequest and is called between every tick in `get_latest_from_peer`. The\r\nresponse include the highest synced checkpoint summary and the lowest\r\navailable checkpoint content watermark.\r\n* To deal with the upgrade, we first query\r\n`get_peer_latest_checkpoint_info`, if it's 404 then we query\r\n`get_checkpoint_summary` and set the low watermark to 0 (if the node\r\nhasn't upgraded, they will have all the checkpoint content up to\r\ngenesis).\r\n* this low watermark is then updated in `PeerHeights`. When a node\r\nqueries peer for checkpoint content, it will only contact peers who has\r\nlow-watermark lower than the requested checkpoint.\r\n* currently all nodes has low-watermark set to 0, once\r\nhttps://github.com/MystenLabs/sui/pull/12067 lands, we will use the\r\nwatermark set there.\r\n\r\n## Test Plan \r\n\r\nTests in `state_sync/tests/rs`\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [x] breaking change for FNs (FN binary must upgrade)\r\n- [x] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\nAdds the checkpoint low watermark for state sync. This lets a node to\r\nknow who to query checkpoint contents according to the watermarks, once\r\ncheckpoint pruning is enabled.",
          "timestamp": "2023-06-03T01:37:08Z",
          "tree_id": "45f3ce57b7dc80e2039c3b6fd426f8575209c07e",
          "url": "https://github.com/MystenLabs/sui/commit/942b49865e1de1c8a69a40d999d06d53657034c6"
        },
        "date": 1685756854925,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 141152930,
            "range": "± 4521572",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 371521,
            "range": "± 98623",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "81660174+mwtian@users.noreply.github.com",
            "name": "mwtian",
            "username": "mwtian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7ae8fffc3833bd59c29df40ba15cb36351a3320a",
          "message": "[Narwhal] measure batch broadcast quorum latency (#12277)\n\n## Description \r\n\r\nThis is going to be compared against `header_to_certificate_latency` to\r\nunderstand the quorum latencies of each validator.\r\n\r\n## Test Plan \r\n\r\nCI. Private testnet.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-03T01:40:05Z",
          "tree_id": "f0dbf81813c258fbf6ed0f3916d684f63b6475db",
          "url": "https://github.com/MystenLabs/sui/commit/7ae8fffc3833bd59c29df40ba15cb36351a3320a"
        },
        "date": 1685757102568,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147702739,
            "range": "± 5276638",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 307011,
            "range": "± 18611",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eugene@mystenlabs.com",
            "name": "Eugene Boguslavsky",
            "username": "ebmifa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c18b3399b13d8d56d895d784e3f38dfa8119407a",
          "message": "Sui `v1.4.0` version bump (#12327)\n\n## Description \r\nSui `v1.4.0` version bump\r\n\r\n## Test Plan \r\n👀",
          "timestamp": "2023-06-03T14:10:20-07:00",
          "tree_id": "52a60241ec7a6a02ec1b94253695dd0f72aa12e3",
          "url": "https://github.com/MystenLabs/sui/commit/c18b3399b13d8d56d895d784e3f38dfa8119407a"
        },
        "date": 1685827435312,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 138939830,
            "range": "± 4555771",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 322671,
            "range": "± 24039",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "51927076+phoenix-o@users.noreply.github.com",
            "name": "phoenix",
            "username": "phoenix-o"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d04d499667c054c2a707561eaab9fa4b079ef666",
          "message": "[pruner] initial version of checkpoints pruner (#12067)\n\nInitial version of the checkpoint pruner:\r\nSimilar to the existing objects pruner (i.e., tails checkpoints from the\r\npast epochs and removes relevant data).\r\nNotes:\r\n* current approach employs rocksdb's `delete_range` API. Point-delete\r\ntombstones have a negative performance impact on reads. It may still\r\nsuffer from the same issue where deleted data occupies space in SST\r\nfiles, so alternative solutions like FIFO compaction style should be\r\nconsidered in the future\r\n* each pruning batch affects both the perpetual DB and the checkpoint\r\nDB. We can't have an atomic batch between those two, so ordering is\r\nimportant. The perpetual DB batch must be committed first. Its changes\r\nare idempotent. Because of this, the pruning watermark is stored in the\r\ncheckpoint DB\r\n* the checkpoint pruner is blocked by the objects pruner watermark. It's\r\nnecessary because once the checkpoint is gone, there's no way to delete\r\nthe corresponding objects\r\n* objects and checkpoints pruning are two separate routines. That's\r\nbecause a node can have different pruning policies for them, and objects\r\npruning is not idempotent in general. In the future, a new Universal\r\npruning mode can be added that aligns the two if pruning settings are\r\nsimilar. That should help with resource consumption on the node so that\r\nthe same data won't be read twice during two different time windows",
          "timestamp": "2023-06-05T12:54:42+02:00",
          "tree_id": "fd7f79e7d812f46fcd23a91e3a80574ea6cec070",
          "url": "https://github.com/MystenLabs/sui/commit/d04d499667c054c2a707561eaab9fa4b079ef666"
        },
        "date": 1685963106017,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 138477420,
            "range": "± 5326479",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 315507,
            "range": "± 16957",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f652942f12587fb4af21441c2b943c8b887db03e",
          "message": "rpc: DAU chart endpoint (#12313)\n\n## Description \r\n\r\nAdd endpoints for DAU over epochs.\r\n\r\n## Test Plan \r\n\r\n```\r\ncurl --location --request POST http://127.0.0.1:3030 \\\r\n--header 'Content-Type: application/json' \\\r\n--data-raw '{\r\n\"jsonrpc\": \"2.0\",\r\n\"id\": 1,\r\n\"method\": \"suix_getAllEpochAddressMetrics\",\r\n\"params\": [true]\r\n}'\r\n{\"jsonrpc\":\"2.0\",\"result\":[{\"checkpoint\":36799,\"epoch\":1,\"timestampMs\":1683849325183,\"cumulativeAddresses\":84280,\"cumulativeActiveAddresses\":1218,\"dailyActiveAddresses\":1218},{\"checkpoint\":5499,\"epoch\":0,\"timestampMs\":1683817158611,\"cumulativeAddresses\":690,\"cumulativeActiveAddresses\":5,\"dailyActiveAddresses\":5}],\"id\":1}%             \r\ncurl --location --request POST http://127.0.0.1:3030 \\\r\n--header 'Content-Type: application/json' \\\r\n--data-raw '{\r\n\"jsonrpc\": \"2.0\",\r\n\"id\": 1,\r\n\"method\": \"suix_getAllEpochAddressMetrics\",\r\n\"params\": []\r\n}'\r\n{\"jsonrpc\":\"2.0\",\"result\":[{\"checkpoint\":5499,\"epoch\":0,\"timestampMs\":1683817158611,\"cumulativeAddresses\":690,\"cumulativeActiveAddresses\":5,\"dailyActiveAddresses\":5},{\"checkpoint\":36799,\"epoch\":1,\"timestampMs\":1683849325183,\"cumulativeAddresses\":84280,\"cumulativeActiveAddresses\":1218,\"dailyActiveAddresses\":1218}],\"id\":1}% \r\n```\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-05T10:34:20-04:00",
          "tree_id": "da32fa1fccd90749ff21cb79b4f70eec985897a4",
          "url": "https://github.com/MystenLabs/sui/commit/f652942f12587fb4af21441c2b943c8b887db03e"
        },
        "date": 1685976502514,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 144808295,
            "range": "± 6109377",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 384574,
            "range": "± 66656",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dbf13492a6760ffc28b24c12ef9ec2b9a87da525",
          "message": "Do not ship zklogin to testnet yet (#12322)",
          "timestamp": "2023-06-05T08:48:55-07:00",
          "tree_id": "c801ab8ed49b3a3e8c6210a606c12439d202c64c",
          "url": "https://github.com/MystenLabs/sui/commit/dbf13492a6760ffc28b24c12ef9ec2b9a87da525"
        },
        "date": 1685980827068,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 154602942,
            "range": "± 4435618",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 535495,
            "range": "± 51170",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eugene@mystenlabs.com",
            "name": "Eugene Boguslavsky",
            "username": "ebmifa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bbbe114543d64dcd8fd06c90cefdad5fdb846cc8",
          "message": "v1.3.0 Framework Bytecode Snapshot for branch cut (#12341)\n\n## Description \r\nFramework Bytecode Snapshot updates for `v1.30.0` branch cut\r\n\r\n## Test Plan \r\n👀",
          "timestamp": "2023-06-05T16:04:28Z",
          "tree_id": "9bbf969b9af04dd6f91298f4fc0be0da937c4933",
          "url": "https://github.com/MystenLabs/sui/commit/bbbe114543d64dcd8fd06c90cefdad5fdb846cc8"
        },
        "date": 1685981693163,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 152597420,
            "range": "± 4834696",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 332049,
            "range": "± 22733",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "81660174+mwtian@users.noreply.github.com",
            "name": "mwtian",
            "username": "mwtian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "14c6f2019b62f689dd54a5e7f5c933a40e7b590b",
          "message": "[TestAuthorityClient] execute via TransactionManager (#12316)\n\n## Description \r\n\r\nRefactor the test `handle_certificate()` implementation to become closer to the actual\r\nimplementation.\r\n\r\n## Test Plan \r\n\r\nCI\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-05T13:42:17-07:00",
          "tree_id": "f679644d1351766a9f0ae4476055b6d989e65457",
          "url": "https://github.com/MystenLabs/sui/commit/14c6f2019b62f689dd54a5e7f5c933a40e7b590b"
        },
        "date": 1685998578088,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 143712591,
            "range": "± 4619802",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308789,
            "range": "± 20644",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "118224482+ronny-mysten@users.noreply.github.com",
            "name": "ronny-mysten",
            "username": "ronny-mysten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "53d850bc5caf7efcec43d4e17cb044230cc8e8c5",
          "message": "Rpc api examples 3 (#12331)\n\n## Description \r\n\r\nAdding examples to RPC ref\r\n\r\n## Test Plan \r\n\r\nLocal\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-05T17:42:44-06:00",
          "tree_id": "6d00fbdba49b73287b9eec19f0435c906fd8dab8",
          "url": "https://github.com/MystenLabs/sui/commit/53d850bc5caf7efcec43d4e17cb044230cc8e8c5"
        },
        "date": 1686009192940,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 144260920,
            "range": "± 5484516",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 321531,
            "range": "± 98804",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "distinct": true,
          "id": "c93b957593ec62e6986697267d53883f27085551",
          "message": "[TestCluster] Add validator management (#12354)\n\n## Description \r\n\r\nThis PR makes it easy to introduce new validators and remove validators\r\nfrom a test cluster:\r\n1. Added `with_validator_candidates` function in TestCluster to make\r\nsure we give enough tokens to them in genesis.\r\n2. Added a few functions in TestTransactionBuilder to generate validator\r\nmanagement related transactions, such as validator candidate, activating\r\ncandidate, staking, leaving and etc.\r\n3. Some cleanups in validator genesis config to make config construction\r\neasier.\r\n\r\nUpdate all dynamic committee change tests in reconfiguration_tests to\r\nuse the new way.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-05T17:40:48-07:00",
          "tree_id": "cf18955e5c461dbca303a6cb199a0e671cec8cf4",
          "url": "https://github.com/MystenLabs/sui/commit/c93b957593ec62e6986697267d53883f27085551"
        },
        "date": 1686012702488,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 149551317,
            "range": "± 5439705",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 373707,
            "range": "± 52888",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d482b2f74743157381a52071d53d8391e0fea71",
          "message": "indexer: update TPS calculation to be checkpoint based (#12355)\n\n## Description \r\n\r\nBefore this change, the TPS was calculated over time window of 10\r\nseconds, which was not able to catch spike of one checkpoint with many\r\ntx.\r\n\r\nChanging this to be checkpoint based, which will catch a spike\r\ncheckpoint and also the max consistent TPS we can get.\r\n\r\nMore details can be found in thread:\r\nhttps://mysten-labs.slack.com/archives/C032676BWGN/p1685996135421019?thread_ts=1685996115.167529&cid=C032676BWGN\r\n\r\n## Test Plan \r\n\r\nThis change has been on production mainnet. \r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-05T21:08:38-04:00",
          "tree_id": "e95e30e1107a7ae223b2c7c7d9746fe260750557",
          "url": "https://github.com/MystenLabs/sui/commit/0d482b2f74743157381a52071d53d8391e0fea71"
        },
        "date": 1686014384627,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 151235372,
            "range": "± 6087011",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 314391,
            "range": "± 75802",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ashok@mystenlabs.com",
            "name": "Ashok Menon",
            "username": "amnn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "531f01125c814ea0004a59ed69483cb1a3212b8a",
          "message": "[sui-execution] Introduce Executor interface (#12264)\n\n## Description\r\n\r\nThis will be the uniform interface through which requests are made to\r\nthe MoveVM within nodes. It allows us to easily bundle multiple versions\r\nof the VM, adapter, natives and verifier into node software, and switch\r\nbetween them according to protocol config.\r\n\r\n### Dynamic Interfaces\r\n\r\nThis change requires making previously static generics into trait\r\nobjects, or shifting where the dynamism/ownership lies.\r\n\r\n- Access to execution will be via the new `Executor` trait object.\r\n- `TemporaryStore`'s access to the backing store (now via the\r\n`BackingStore` grouping trait).\r\n- `ObjectRuntime` previously took a `Box<dyn ChildObjectResolver>`, now\r\nit's just a `&dyn ChildObjectResolver`.\r\n- Execution engine's access to the store (now via the `ExecutionState`\r\ngrouping trait).\r\n- Type layout resolver's access to modules/packages etc (now via the\r\n`TypeLayoutStore` grouping trait).\r\n- `LinkageView`'s access to the sui resolver traits is now via a trait\r\nobject.\r\n\r\nSome of these traits group multiple other traits, so extra functions\r\nhave been added to do explicit conversion (e.g. from the vtable for an\r\n`A + B` trait object to the vtable for an `A` or a `B` trait object).\r\n\r\n### Other Changes\r\n\r\n- `InMemoryStorage::new` returns `Arc`\r\n- Don't save native functions in `ExecutionComponents` -- create fresh,\r\neach time (hides native function related types in execution layer)\r\n- Re-order function parameters for execution functions (only in newly\r\nintroduced execution layer, will push this change down into execution\r\nimplementations in a follow-up PR) to group together similar parameters.\r\n-  genesis-related crates fully ported over to execution crate.\r\n- `sui-replay` fully ported over to execution crate.\r\n- De-nested implementation of `get_object_read` and\r\n`get_past_object_read` on `AuthorityState`.\r\n- `sui-move/src/unit_test` creates a lazy `TEST_STORE` instead of\r\nrelying on the `ObjectRuntime` to keep the store alive.\r\n- `sui-replay`'s `LocalExec` implementation of all the various backing\r\nstore traits return `SuiError` instead of `LocalExecError` (now that we\r\nuse dynamic dispatch, the error type needs to be standardised).\r\n- `get_package_objects` and `get_packages` helper functions on\r\n`BackingPackageStore` were previously default implemented trait\r\nfunctions, but they have turned into free functions. This is because\r\nthey are lifetime generic, and this interfered with the ability to use\r\nthis trait (or any trait derived from it) as the basis of a trait\r\nobject.\r\n- Removed `temporary_store::empty_for_testing` and\r\n`::with_input_objects_for_testing` as unused, rather than port them\r\n(which would have been complicated and messy).\r\n- Replaced `execute_transaction_to_effects` with\r\n`execute_transaction_to_effects_impl`, to avoid doubling up the number\r\nof functions in the new `Executor` interface.\r\n\r\n## Test Plan\r\n\r\n```\r\nsui$ cargo simtest\r\nsui$ env SUI_SKIP_SIMTESTS=1 cargo nextest run\r\n```\r\n\r\nAlso manually test replay tool on a recent transaction digest:\r\n\r\n```\r\nsui/crates/sui-tool$ cargo run replay --rpc https://fullnode.testnet.sui.io:443 tx -t <digest>\r\n```",
          "timestamp": "2023-06-06T02:37:56-07:00",
          "tree_id": "b8d77b9ea838d9fd25eccd198e112e5d1d46acda",
          "url": "https://github.com/MystenLabs/sui/commit/531f01125c814ea0004a59ed69483cb1a3212b8a"
        },
        "date": 1686044974015,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 170897785,
            "range": "± 5060248",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 427102,
            "range": "± 60876",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "95379755+losman0s@users.noreply.github.com",
            "name": "man0s",
            "username": "losman0s"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "273a91f65159c38486b9819005399c6d42c6262f",
          "message": "feat(rust-sdk): support `dev_inspect_transaction_block` in the read API (#12233)\n\n## Description \r\n\r\nExpose `dev_inspect_transaction_block` next to\r\n`dry_run_transaction_block` in the read API of the rust SDK. Necessary\r\nsince the underlying `HttpClient` packing the relevant trait is private.\r\n\r\nNote: I'd be interested to know why the rust SDK breaks away from the\r\nJSON-RPC spec in its terminology / hierarchy, i.e. introducing a\r\n`quorum_driver_api` for `execute_transaction_block`, instead of slotting\r\nit in the write API, and slotting `dry_run_transaction_block` under read\r\nAPI. I can see how that can make sense logically, it's just a bit of a\r\nthrow-off initially.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n## Release Notes\r\n\r\nIntroduce `ReadApi::dev_inspect_transaction_block` to Rust SDK. External\r\ncontribution by @losman0s.",
          "timestamp": "2023-06-06T02:41:43-07:00",
          "tree_id": "2b6e54eb63f3de8ae462a349bac325f954b7cbd6",
          "url": "https://github.com/MystenLabs/sui/commit/273a91f65159c38486b9819005399c6d42c6262f"
        },
        "date": 1686045180067,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 149836452,
            "range": "± 4587079",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 309386,
            "range": "± 11704",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ashok@mystenlabs.com",
            "name": "Ashok Menon",
            "username": "amnn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49657dd789290a54aab206e3ee8e227449ae12e2",
          "message": "Revert \"make sui CLI log file gated by env flag (#12095)\" (#12363)\n\n## Description \r\n\r\nThis reverts commit 8ff1005df0a6c093905d0dc7c903442ef9488a90.\r\n\r\nFollowing the previous fix, logs were showing up in terminal output even\r\nwhen `RUST_LOG` was not enabled.\r\n\r\n## Test Plan \r\n\r\n```\r\nsui$ cargo build --bin sui\r\nsui$ ./target/debug/sui client active-address\r\nsui/crates/sui$ cargo nextest run \r\n```\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\nRevert behaviour where log output was controlled by an env flag, because\r\nwhen it was gated off, logs started showing up in command-line output.\r\nCLI now behaves as it did before: Producing a log file in the current\r\nworking directory, but not displaying logs in line under normal\r\noperation.",
          "timestamp": "2023-06-06T11:32:27-04:00",
          "tree_id": "4e9c403a6341877d0868ea059d17d7ab6c9f12fc",
          "url": "https://github.com/MystenLabs/sui/commit/49657dd789290a54aab206e3ee8e227449ae12e2"
        },
        "date": 1686066097294,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 109097961,
            "range": "± 6049939",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 301618,
            "range": "± 15242",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akihidis@gmail.com",
            "name": "Anastasios Kichidis",
            "username": "akichidis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "13023af20f6a9020e002b9f3b082297a827a8a76",
          "message": "[fix] fix failing test in the long running suite (#12361)\n\n## Description \r\n\r\n`test_loss_of_liveness_without_recovery` test has been failing lately in\r\nthe Narwhal nightly\r\nhttps://github.com/MystenLabs/sui/actions/runs/5184155035 . I've added\r\nsome extra threshold in the acceptable commits as some node might be a\r\nlittle bit faster than the others - still valid though.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-06T18:01:40+01:00",
          "tree_id": "28cc00d7c243dc4c7c36302972fcae89008ae874",
          "url": "https://github.com/MystenLabs/sui/commit/13023af20f6a9020e002b9f3b082297a827a8a76"
        },
        "date": 1686071563801,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 149473728,
            "range": "± 5911942",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 344582,
            "range": "± 33175",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "44470b3eb19b83db48381d0e48d262f428a68e15",
          "message": "Separate snapshot tests for mainnet and testnet (#12350)",
          "timestamp": "2023-06-06T12:00:25-07:00",
          "tree_id": "0eca11a3783e8a84be1e2d442735ad13bcf4bff7",
          "url": "https://github.com/MystenLabs/sui/commit/44470b3eb19b83db48381d0e48d262f428a68e15"
        },
        "date": 1686078797049,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 156209076,
            "range": "± 6635384",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 322135,
            "range": "± 58090",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106645797+sadhansood@users.noreply.github.com",
            "name": "Sadhan Sood",
            "username": "sadhansood"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30a0b56e47ca38a224a2293dcb3e38e8fd953db9",
          "message": "Add storage format enum to file metadata in archive manifest (#12325)\n\n## Description \r\n\r\nRight now we always assume the underlying storage format is blob. This\r\nallows us to migrate to with other storage formats in the future without\r\nneeding to migrate older data to newer format. We would be able to just\r\nadd a new enum value and start writing newer checkpoints with newer\r\nstorage format.\r\n\r\n## Test Plan \r\n\r\nExisting tests",
          "timestamp": "2023-06-06T12:52:07-07:00",
          "tree_id": "2fc0272ad5ef41a3184375dc52f0acf49e7037e9",
          "url": "https://github.com/MystenLabs/sui/commit/30a0b56e47ca38a224a2293dcb3e38e8fd953db9"
        },
        "date": 1686081863246,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 109133854,
            "range": "± 4415188",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 257091,
            "range": "± 5250",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106645797+sadhansood@users.noreply.github.com",
            "name": "Sadhan Sood",
            "username": "sadhansood"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d41072797247850771ed17d01ff1a300c986fc0d",
          "message": "[easy] Flush write buffer when writing manifest before computing checksum (#12294)\n\n## Description \r\n\r\nWithout manually flushing the buffer, we may not be guaranteed to read\r\nthe right data. Also, fix the manifest read/write api and make it\r\nsimpler\r\n## Test Plan \r\n\r\nAdded unit test",
          "timestamp": "2023-06-06T14:36:35-07:00",
          "tree_id": "c2d3b9f3b8de0d0b9300b53227fdb54cd558834e",
          "url": "https://github.com/MystenLabs/sui/commit/d41072797247850771ed17d01ff1a300c986fc0d"
        },
        "date": 1686088110973,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 111523102,
            "range": "± 2790487",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 255829,
            "range": "± 26418",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rvantonder@gmail.com",
            "name": "Rijnard van Tonder",
            "username": "rvantonder"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7bdbe3934f72354ad90746dcab75f17dc4d38bdf",
          "message": "docs: fix link to event filter anchor (#12357)\n\n## Description \r\n\r\nSee title.\r\n\r\nSide question: is there a command to generate `openrpc.json` from the\r\n`indexer.rs` file, because it looks like `openrpc.json` descriptions are\r\ngenerated from there? I didn't discover one and just made the manual\r\ncorresponding changes.\r\n\r\n## Test Plan \r\n\r\nJust a doc link fix (manually checked the correct link works at\r\nhttps://docs.sui.io/build/event_api#event-filters)\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\nDoc fix for broken link.",
          "timestamp": "2023-06-07T00:56:33Z",
          "tree_id": "1e272276cb71bf9f6ca73ce10d36738385d04265",
          "url": "https://github.com/MystenLabs/sui/commit/7bdbe3934f72354ad90746dcab75f17dc4d38bdf"
        },
        "date": 1686099925899,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 109692758,
            "range": "± 9607133",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 302957,
            "range": "± 4478",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7aa4619f8c112a0ffe72559818798d7716b4a97a",
          "message": "Authority Aggregator exits early when there are too many conflicting txes (#12358)\n\n## Description \r\n\r\nCurrently, if a tx has a lot of conflicts, it's likely that we don't\r\nexit until we talk to every validator, which isn't effective, most times\r\nthan not. This PR adds an early exit point, when the stake of most\r\nstaked tx + retryable stake is less than the quorum stake, we know for\r\nsure this object is equivocated. One example it tackles with is, when\r\none obj has two txes, each with f+1 stake.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\nAuthority Aggregator exits early when there are too many conflicting\r\ntxes",
          "timestamp": "2023-06-07T03:51:08Z",
          "tree_id": "de12ea79aeb3095a86b30c90d815f4097ceb0399",
          "url": "https://github.com/MystenLabs/sui/commit/7aa4619f8c112a0ffe72559818798d7716b4a97a"
        },
        "date": 1686110547641,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 156803370,
            "range": "± 6146199",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 322687,
            "range": "± 58139",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106645797+sadhansood@users.noreply.github.com",
            "name": "Sadhan Sood",
            "username": "sadhansood"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "996c583935d0b440e8cc1909bbaebaf32a833dbf",
          "message": "Add metric for command per sec (#10559)\n\n## Description \r\n\r\nAs title says",
          "timestamp": "2023-06-06T23:24:24-07:00",
          "tree_id": "87a53cb22682b2db8516d21202771920647f452d",
          "url": "https://github.com/MystenLabs/sui/commit/996c583935d0b440e8cc1909bbaebaf32a833dbf"
        },
        "date": 1686119719689,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 154010624,
            "range": "± 7069229",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 378865,
            "range": "± 44611",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emma@mystenlabs.com",
            "name": "Emma Zhong",
            "username": "emmazzz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "36ae45e3dd1a29fb1bc0a854922148c6dacbc42c",
          "message": "[benchmark] add option to use different gas price in shared counter txns (#12195)\n\n## Description \r\n\r\nThis PR adds an option to `sui-benchmark` allowing us to pass in a max\r\ntip amount for shared counter workloads. Each shared counter transaction\r\npicks a random gas price increment between 0 and this max amount, and\r\nuse RGP + the picked increment as the gas price. This will be useful for\r\nexperimenting later. Following PRs will add metrics exposing the rank\r\ncorrelation between gas price and txn processing order. We may also\r\nintroduce separate workloads with specific gas price behavior later.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-07T17:24:40Z",
          "tree_id": "941ea205d87cd9b5c2deb8c41c9bbd460788c198",
          "url": "https://github.com/MystenLabs/sui/commit/36ae45e3dd1a29fb1bc0a854922148c6dacbc42c"
        },
        "date": 1686162249886,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 109058833,
            "range": "± 8725262",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 256758,
            "range": "± 11931",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f3e2d7c86e39eae70e7c3c1c120818a3d252a1bc",
          "message": "[move: hardening] enforce enum order on variants (#12157)\n\n## Description \r\n\r\nWhen introducing u16, u32, u256 a while back, I noticed it was possible\r\nto break multiple dependent systems if some enums were modified out of\r\norder.\r\nSo I put a comment to warn folks\r\n```\r\n    // NOTE: Added in bytecode version v6, do not reorder!\r\n```\r\nThis PR now adds a test which ensures that new enum variants are\r\nappended in a backward-compat manner\r\nSample output:\r\n```\r\npanicked at 'Enum variant Address has been swapped with AddressNew at position 3. Not allowed: enum must be backward compatible.'\r\n```\r\nUsage:\r\n`#[test_variant_order(path/to/snapshot/file.yaml)]`\r\n\r\n\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-07T16:09:19-04:00",
          "tree_id": "7056d4e7d594cb6b5e968f4dd0fb0d8a0c23aad5",
          "url": "https://github.com/MystenLabs/sui/commit/f3e2d7c86e39eae70e7c3c1c120818a3d252a1bc"
        },
        "date": 1686169390773,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 164559607,
            "range": "± 5067478",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 337808,
            "range": "± 35347",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "31ee5c7b512d24400fca981a929b5020d83bffba",
          "message": "[easy/chore] Use `range_iter ` over `unbounded_iter ` (#12371)\n\n## Description \r\n\r\nUse `range_iter ` over `unbounded_iter ` in parts of authority\r\n\r\n## Test Plan \r\n\r\nNormal tests\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-07T17:35:23-04:00",
          "tree_id": "2592a9eb331f4ed21199ea0afadacba19ceaafba",
          "url": "https://github.com/MystenLabs/sui/commit/31ee5c7b512d24400fca981a929b5020d83bffba"
        },
        "date": 1686174359307,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 151551049,
            "range": "± 5853262",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 347177,
            "range": "± 28957",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ceac292ebe83bcb895c5e4b2209ad04e12728076",
          "message": "move out interpreter match (#12396)\n\n## Description \r\n\r\nMoves out the interpreter instr match into a func so its simpler to add\r\npre/post hooks, and overall cleaner.\r\n\r\n## Test Plan \r\n\r\nexisting unit tests\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-07T18:01:59-04:00",
          "tree_id": "96c0202771e348c62ac6e509894da3a8d1b5bf99",
          "url": "https://github.com/MystenLabs/sui/commit/ceac292ebe83bcb895c5e4b2209ad04e12728076"
        },
        "date": 1686175958623,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 158593556,
            "range": "± 4514633",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 369980,
            "range": "± 64434",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tmn@mystenlabs.com",
            "name": "Todd Nowacki",
            "username": "tnowacki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "80e1bbd51dfad2f8437ce2506488b31bc5284f5a",
          "message": "[move-compiler] Added warning suppression (#12084)\n\n## Description \r\n\r\n- Added warning suppression via an `#[allow(..)]` attribute\r\n- Warnings now tell you how to suppress them \r\n- Special ones include `allow(unused)` and `allow(all)` to suppress\r\nunused item warnings or any warning respectively\r\n  - Thoughts on surfacing these in the help message?\r\n\r\n## Test Plan \r\n\r\n- Added tests\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-07T16:45:17-07:00",
          "tree_id": "9e4418f462308d06b74d8f2217c4c1d53c37e7cf",
          "url": "https://github.com/MystenLabs/sui/commit/80e1bbd51dfad2f8437ce2506488b31bc5284f5a"
        },
        "date": 1686182158685,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 161176188,
            "range": "± 4469868",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 314550,
            "range": "± 52863",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "defd87d1d8bc28b51de5a89f423b517489f2612e",
          "message": "call get_highest_pruned_checkpoint_seq_number to get the lowest available checkpoint for state sync (#12399)\n\n## Description \r\n\r\nWire things up.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\nState sync now answer checkpoint availability inquiry by calling\r\ncheckpoint_store.get_highest_pruned_checkpoint_seq_number",
          "timestamp": "2023-06-08T09:47:43-07:00",
          "tree_id": "4b8e51065848d864a93dc9cbace6791b41a95918",
          "url": "https://github.com/MystenLabs/sui/commit/defd87d1d8bc28b51de5a89f423b517489f2612e"
        },
        "date": 1686243744645,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 160424152,
            "range": "± 10235869",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 385079,
            "range": "± 40955",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jonas-lj@users.noreply.github.com",
            "name": "Jonas Lindstrøm",
            "username": "jonas-lj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "73b2a424efc0a0fd5e7286c5be5611cbfeb797f3",
          "message": "Support for Secp256r1 in Typescript (#12250)\n\n## Description \r\n\r\nAdd support for Sec256r1 (P-256) in the typescript SDK.\r\n\r\n## Test Plan \r\n\r\nUnit tests.\r\n\r\n### Release notes\r\n\r\nAdd support for ECDSA over the sec256r1 curve, also known as P-256, in the Typescript SDK.",
          "timestamp": "2023-06-08T20:01:50+02:00",
          "tree_id": "e43353b2f6af6b6886d5638a8e572fda4366ed63",
          "url": "https://github.com/MystenLabs/sui/commit/73b2a424efc0a0fd5e7286c5be5611cbfeb797f3"
        },
        "date": 1686248108377,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 105329277,
            "range": "± 2895449",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 281697,
            "range": "± 22354",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3dc281a1e53d85537eca55073d92d63dbf882272",
          "message": "[transaction orchestrator] also subscribe to effects when waiting for a WIP transaction (#12372)\n\n## Description \r\n\r\nSome transaction timeout happens with a data race in this way (ordered\r\nby time):\r\n1. client sends Tx (1)\r\n2. Tx(1) is processed, quorum driver notifies transaction orchestrator\r\nthe tx finishes.\r\n3. transaction orchestrator gets the notification, working on finishing\r\nup (e.g. removing the tx from the write ahead log, local execution)\r\n4. client sends Tx(2) again, Tx(2) registers for notification, and see\r\nthe same tx is already WIP, so it awaits.\r\n5. transaction orchestrator cleans up write ahead log and finishes local\r\nexecution, responds to Tx(1)\r\n6. Tx(2) times out because no more notification is coming\r\n\r\nThis PR fixes it by also subscribing to effects when it awaits, such\r\nthat if the effects is available before the tickets, it means it misses\r\nthe notification, and will ask quorum driver to form a cert again.\r\n\r\nThis PR also removes `fn notify_read_executed_effects_digests` because\r\nit's not in use.\r\n\r\n## Test Plan \r\n\r\nThis change is a bit hard to test because of the nature of race\r\nconditions. But we make sure it does not break the existing tests.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\nFixes a race condition that may very occasionally time out a transaction\r\nrequest when it's submitted multiple times. Removes unused function\r\n`notify_read_executed_effects_digests`.",
          "timestamp": "2023-06-08T13:14:15-07:00",
          "tree_id": "2d375419de3bcd6abe9175976f1c137bf55ac782",
          "url": "https://github.com/MystenLabs/sui/commit/3dc281a1e53d85537eca55073d92d63dbf882272"
        },
        "date": 1686256102006,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145720486,
            "range": "± 6712722",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 314303,
            "range": "± 10887",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "12d54e4bbb456477eaa47f15a659e00699e6d5b5",
          "message": "add wait for finality times out metrics in transaction orchestrator (#12408)\n\n## Description \r\n\r\nThe timeout metric is worth alerting on.\r\n\r\n## Test Plan \r\n\r\n👀 \r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\nadd wait for finality times out metrics in transaction orchestrator",
          "timestamp": "2023-06-08T13:15:32-07:00",
          "tree_id": "353b9f8ce073f67037e701f566b75d6045955f78",
          "url": "https://github.com/MystenLabs/sui/commit/12d54e4bbb456477eaa47f15a659e00699e6d5b5"
        },
        "date": 1686256153621,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 148999535,
            "range": "± 4612518",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 314337,
            "range": "± 26169",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4128c2f629ffc91f7520b1297e2fe9e90b65d821",
          "message": "fix test flakiness introduced with early return upon many conflicts (#12415)\n\n## Description \r\n\r\nNow we don't exhaust every response when the tx is deadlock, the\r\nreturned conflicting txes list may look different depending on the order\r\nvalidators respond. In this PR we relax the assertion conditions\r\nadaptively.\r\n\r\n\r\n## Test Plan \r\n\r\ncargo test\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\nFix test flakiness introduced with early return upon many conflicts",
          "timestamp": "2023-06-08T18:56:28-07:00",
          "tree_id": "0aa95e92f8b694eee594682019a0588c6520330d",
          "url": "https://github.com/MystenLabs/sui/commit/4128c2f629ffc91f7520b1297e2fe9e90b65d821"
        },
        "date": 1686276604158,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146561395,
            "range": "± 4792282",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 405000,
            "range": "± 60977",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ashok@mystenlabs.com",
            "name": "Ashok Menon",
            "username": "amnn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b50fc32867efa3385f311696691672a8a8871cf2",
          "message": "[sui-execution] Introduce Verifier interface (#12329)\n\n## Description\r\n\r\nThis interface is used to perform metered verification during signing\r\n(verification during execution is handled internally, within the\r\nexecution layer).\r\n\r\nTo fully encapsulate metering within the execution layer, some tests\r\nneeded to be moved from `sui-core` to `sui-framework-tests` (which is\r\nlinked against the latest execution layer, so therefore can access\r\ninternal types).\r\n\r\nThis change also gets rid of the distinction between metered\r\nverification of module bytes and of deserialized `CompiledModules`\r\nwithin the execution layer, to reduce the interface surface area.\r\nInstead, a helper function has been added to the interface to first\r\ndeserialize the module.\r\n\r\n## Test Plan\r\n\r\n```\r\ncargo simtest\r\nenv SUI_SKIP_SIMTESTS=1 cargo nextest run\r\n```",
          "timestamp": "2023-06-09T08:42:09-07:00",
          "tree_id": "0550b3b747fd32ed5f46eb68db95cfb5d2e3949f",
          "url": "https://github.com/MystenLabs/sui/commit/b50fc32867efa3385f311696691672a8a8871cf2"
        },
        "date": 1686326008820,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 148801068,
            "range": "± 6170565",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 329316,
            "range": "± 20091",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ashok@mystenlabs.com",
            "name": "Ashok Menon",
            "username": "amnn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69e4e48ba217351c64d15dd06081b50aec309816",
          "message": "[sui-execution] Scaffold script to automate cutting new features (#12387)\n\n## Description\r\n\r\nThe scaffolding deals with argument parsing, and building a \"plan\" of\r\nwhich packages to duplicate based on that.\r\n\r\n## Test Plan:\r\n\r\nNew unit tests:\r\n\r\n```\r\nsui/sui-execution/cut$ cargo nextest run\r\n```\r\n\r\nRunning the plan that would create a new sui-execution cut:\r\n\r\n```\r\nsui$ cargo run --bin cut -- --feature v1 \\\r\n     -d sui-execution/latest:sui-execution/v1:-latest \\\r\n     -d external-crates/move:external-crates/move-execution \\\r\n     -p sui-adapter-latest \\\r\n     -p sui-move-natives-latest \\\r\n     -p sui-verifier-latest \\\r\n     -p move-bytecode-verifier \\\r\n     -p move-stdlib \\\r\n     -p move-vm-runtime\r\n```\r\n\r\nWhich produces the following output (locally):\r\n\r\n```\r\nCutting directories: [\r\n    Directory {\r\n        src: \"/Users/ashokmenon/sui/sui-execution/latest\",\r\n        dst: \"/Users/ashokmenon/sui/sui-execution/v1\",\r\n        suffix: Some(\r\n            \"-latest\",\r\n        ),\r\n    },\r\n    Directory {\r\n        src: \"/Users/ashokmenon/sui/external-crates/move\",\r\n        dst: \"/Users/ashokmenon/sui/external-crates/move-execution\",\r\n        suffix: None,\r\n    },\r\n]\r\n\r\nIncluding packages: [\r\n    \"sui-adapter-latest\",\r\n    \"sui-move-natives-latest\",\r\n    \"sui-verifier-latest\",\r\n    \"move-bytecode-verifier\",\r\n    \"move-stdlib\",\r\n    \"move-vm-runtime\",\r\n]\r\n\r\nPlan: Ok(\r\n    CutPlan(\r\n        {\r\n            \"move-bytecode-verifier\": CutPackage {\r\n                dst_name: \"move-bytecode-verifier-v1\",\r\n                src_path: \"/Users/ashokmenon/sui/external-crates/move/move-bytecode-verifier\",\r\n                dst_path: \"/Users/ashokmenon/sui/external-crates/move-execution/move-bytecode-verifier\",\r\n                ws_state: Exclude,\r\n            },\r\n            \"move-stdlib\": CutPackage {\r\n                dst_name: \"move-stdlib-v1\",\r\n                src_path: \"/Users/ashokmenon/sui/external-crates/move/move-stdlib\",\r\n                dst_path: \"/Users/ashokmenon/sui/external-crates/move-execution/move-stdlib\",\r\n                ws_state: Exclude,\r\n            },\r\n            \"move-vm-runtime\": CutPackage {\r\n                dst_name: \"move-vm-runtime-v1\",\r\n                src_path: \"/Users/ashokmenon/sui/external-crates/move/move-vm/runtime\",\r\n                dst_path: \"/Users/ashokmenon/sui/external-crates/move-execution/move-vm/runtime\",\r\n                ws_state: Exclude,\r\n            },\r\n            \"sui-adapter-latest\": CutPackage {\r\n                dst_name: \"sui-adapter-v1\",\r\n                src_path: \"/Users/ashokmenon/sui/sui-execution/latest/sui-adapter\",\r\n                dst_path: \"/Users/ashokmenon/sui/sui-execution/v1/sui-adapter\",\r\n                ws_state: Member,\r\n            },\r\n            \"sui-move-natives-latest\": CutPackage {\r\n                dst_name: \"sui-move-natives-v1\",\r\n                src_path: \"/Users/ashokmenon/sui/sui-execution/latest/sui-move-natives\",\r\n                dst_path: \"/Users/ashokmenon/sui/sui-execution/v1/sui-move-natives\",\r\n                ws_state: Member,\r\n            },\r\n            \"sui-verifier-latest\": CutPackage {\r\n                dst_name: \"sui-verifier-v1\",\r\n                src_path: \"/Users/ashokmenon/sui/sui-execution/latest/sui-verifier\",\r\n                dst_path: \"/Users/ashokmenon/sui/sui-execution/v1/sui-verifier\",\r\n                ws_state: Member,\r\n            },\r\n        },\r\n    ),\r\n)\r\n```",
          "timestamp": "2023-06-09T18:31:52Z",
          "tree_id": "2a0573356465787e9f343ebe869a89cca8de21ed",
          "url": "https://github.com/MystenLabs/sui/commit/69e4e48ba217351c64d15dd06081b50aec309816"
        },
        "date": 1686336172890,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 151561204,
            "range": "± 4740006",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 337580,
            "range": "± 63751",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b29b1fe4116c4f8d2a23a32857d9b903d27504da",
          "message": "indexer: exact epoch tx count (#12395)\n\n## Description\r\nBefore this PR, tx count was updated within an epoch. This is\r\nproblematic on backfill when data racing happens, as a result, epoch tx\r\ncount is not accurate.\r\n\r\nAlso removed the epoch updating on each checkpoint b/c it has caused\r\nconstant DB commit errors like\r\n```\r\n2023-06-07T23:13:27.759942Z  INFO sui_indexer::store::pg_indexer_store: Persisting epoch 19\r\n2023-06-07T23:13:36.865246Z  WARN sui_indexer::handlers::checkpoint_handler: Indexer epoch commit failed with error: PostgresWriteError(\"could not serialize access due to read/write dependencies among transactions\"), retrying after 100 milli-secs...\r\n2023-06-07T23:13:36.965945Z  INFO sui_indexer::store::pg_indexer_store: Persisting epoch 19\r\n2023-06-07T23:13:46.059553Z  WARN sui_indexer::handlers::checkpoint_handler: Indexer epoch commit failed with error: PostgresWriteError(\"could not serialize access due to read/write dependencies among transactions\"), retrying after 100 milli-secs...\r\n2023-06-07T23:13:46.160704Z  INFO sui_indexer::store::pg_indexer_store: Persisting epoch 19\r\n```\r\n\r\n## Test Plan\r\nBuild image and test with mainnet, verify in the DB.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-09T15:43:08-04:00",
          "tree_id": "8eea034f16f9ebc38832eeff551de4655d48639c",
          "url": "https://github.com/MystenLabs/sui/commit/b29b1fe4116c4f8d2a23a32857d9b903d27504da"
        },
        "date": 1686340316170,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 107087397,
            "range": "± 6588974",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 306466,
            "range": "± 11356",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "johnjosephmartin@icloud.com",
            "name": "John Martin",
            "username": "johnjmartin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "84aa25ee3f2477f7d18e49498728df5c9eddc32c",
          "message": "sui cli: support ssfn config generation (#12370)\n\n## Description \r\n\r\nAdding state sync fullnodes to internal test networks means needing a\r\nset of up-to-date peer ids within both validator configs and ssfn\r\nconfigs, eg:\r\n**ssfn-config-0.yaml**\r\n```\r\np2p-config:\r\n  listen-address: \"0.0.0.0:8084\"\r\n  external-address: /dns/lax-ssfn-2.ci.sui.io/udp/8084\r\n  seed-peers:\r\n    - peer-id: 61ff2d5b789815986984f132404bc81ca7e0d7aedfb5d6dea94d477ee2dfbd2a\r\n      address: /dns/lax-suival-f9471.ci.sui.io/udp/8084\r\n    - peer-id: a1df08a64bec30bddfed076c038d5104b0dcb03932c58128c4aa073c1a068f2f\r\n      address: /dns/lax-suival-add2f.ci.sui.io/udp/8084\r\n    - peer-id: c7cd54ebfed347df9831ebbf690711ba628cf9ca02aa2e5388907b918be6de8f\r\n```\r\n\r\n**validator-config-0.yaml**\r\n```\r\np2p-config:\r\n  listen-address: \"0.0.0.0:8084\"\r\n  external-address: /dns/lax-suival-f9471.ci.sui.io/udp/8084\r\n  seed-peers:\r\n    - peer-id: c9f0aae2d154496c36c581fd0c4c4f1e6c996df754ebb82eaa1547f549d62158\r\n      address: /dns/lax-ssfn-2.ci.sui.io/udp/8084\r\n    - peer-id: 440ec833f766fc9159c48aa8bc8b21a4885a4db2fc356921e7f33cda5cb3b39c\r\n      address: /dns/lax-ssfn-1.ci.sui.io/udp/8084\r\n```\r\n\r\nThis PR supports generating the two sets of peer-ids, it also makes\r\n`FullnodeConfigBuilder::new()` a bit more flexible with regard to\r\nsupporting different input generation.\r\n\r\n## Test Plan \r\n\r\nI'll test this works with an internal network before shipping \r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\nAdding support for an optional `ssfn_config_info` to the `sui genesis\r\n--from-config genesis.yaml` cli command. Using the additional\r\n`ssfn_config_info:`, a list of ssfn hosts can be passed to the `sui\r\ngenesis` cli, creating `ssfn-config-0.yaml` files which be used by state\r\nsync fullnodes.",
          "timestamp": "2023-06-09T15:52:34-07:00",
          "tree_id": "4de915886c2c5e71ad276d66faca62263eb41771",
          "url": "https://github.com/MystenLabs/sui/commit/84aa25ee3f2477f7d18e49498728df5c9eddc32c"
        },
        "date": 1686351821953,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 152869384,
            "range": "± 4002614",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 497689,
            "range": "± 42279",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e9f3f1fb775a7e4d1959d1a01161dab7cdda0a76",
          "message": "Fix memory leak in simtests, detect future leaks automatically (#11893)\n\n@longbowlu for some reason my previous attempt at this did not work,\r\neven though I remember staring at a memory profile showing that I had\r\nfixed it.",
          "timestamp": "2023-06-09T23:13:47Z",
          "tree_id": "e48b6168909a49bda897a2e5d075609a23f5607a",
          "url": "https://github.com/MystenLabs/sui/commit/e9f3f1fb775a7e4d1959d1a01161dab7cdda0a76"
        },
        "date": 1686353085706,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 154771826,
            "range": "± 7121985",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 317063,
            "range": "± 15619",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "97870774+arun-koshy@users.noreply.github.com",
            "name": "Arun Koshy",
            "username": "arun-koshy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e3da84a126d688834dfb1a15f42e0cb7d4f05fd",
          "message": "Add sui-metric-checker crate (#12326)\n\n## Description \r\n\r\nThe sui-metric-checker crate is used for querying prometheus metrics and\r\nvalidating the results. It will primarily be used to check for\r\nperformance regressions in nightly deployments. Requires api_key,\r\napi_user & prometheus url which can be found in sui-ops repo or by\r\nasking the PE team.\r\n\r\nExample usage:\r\n```\r\nRUST_LOG=debug cargo run --package sui-metric-checker --bin sui-metric-checker  -- --api-key xxxxxx --api-user incoming_metrics --config  private-testnet-performance-test.yaml\r\n```\r\n\r\nExample .yaml contents: \r\n```\r\nqueries:\r\n  # ***** Validator ******\r\n  # Check current epoch\r\n  - query: 'max(current_epoch{network=\"private-testnet\"})'\r\n    type: Instant\r\n  # Narwhal batch execution latency - p50\r\n  - query: 'histogram_quantile(0.50, sum by(le) (rate(batch_execution_latency_bucket{network=\"private-testnet\"}[15m])))'\r\n    type: !Range\r\n      start: \"now-8h\"\r\n      end: \"now\"\r\n      step: 60.0\r\n    validate_result:\r\n      threshold: 3.0\r\n      failure_condition: Greater\r\n  # TPS\r\n  - query: 'avg(rate(total_transaction_effects{network=\"private-testnet\"}[5m]))'\r\n    type: !Range\r\n      start: \"now-8h\"\r\n      end: \"now\"\r\n      step: 60.0\r\n    validate_result:\r\n      threshold: 5000.0\r\n      failure_condition: Less\r\n  # CPS\r\n  - query: 'avg (rate(batch_size_sum{network=\"private-testnet\"}[5m]))'\r\n    type: !Range\r\n      start: \"now-8h\"\r\n      end: \"now\"\r\n      step: 60.0\r\n    validate_result:\r\n      threshold: 5000.0\r\n      failure_condition: Less\r\n\r\n```\r\n\r\nExample error output:\r\n\r\n```\r\nError: Following queries failed to meet threshold conditions: [\r\n    \"After 3 retry attempts - Did not get expected response from server for histogram_quantile(0.5, sum by(le) (rate(latency_s_bucket{network=\\\"private-testnet\\\"}[15m])))\",\r\n    \"After 3 retry attempts - Did not get expected response from server for histogram_quantile(0.95, sum by(le) (rate(latency_s_bucket{network=\\\"private-testnet\\\"}[15m])))\",\r\n    \"After 3 retry attempts - Did not get expected response from server for sum(rate(num_success{network=\\\"private-testnet\\\"}[5m]))\",\r\n    \"Query \\\"histogram_quantile(0.50, sum by(le) (rate(batch_execution_latency_bucket{network=\\\"private-testnet\\\"}[15m])))\\\" returned value of 3.112150385622982 which is Greater 3\",\r\n    \"Query \\\"avg(rate(total_transaction_effects{network=\\\"private-testnet\\\"}[5m]))\\\" returned value of 1.081275647819765 which is Less 5500\",\r\n    \"Query \\\"avg (rate(batch_size_sum{network=\\\"private-testnet\\\"}[5m]))\\\" returned value of 0.24698238962944846 which is Less 5500\",\r\n]\r\n```",
          "timestamp": "2023-06-09T23:15:16Z",
          "tree_id": "07c15f13e40bb4408602c7cce12c3f9a2f9fdc04",
          "url": "https://github.com/MystenLabs/sui/commit/5e3da84a126d688834dfb1a15f42e0cb7d4f05fd"
        },
        "date": 1686353225181,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 162831248,
            "range": "± 6499085",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 349070,
            "range": "± 69483",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "113150618+dariorussi@users.noreply.github.com",
            "name": "Dario Russi",
            "username": "dariorussi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "98413acceafa3e9a9e48af2eee21f0bbe74ffa60",
          "message": "Use steps to charge for gas instead of buckets (#11929)\n\n## Description \r\n\r\nUse a round up function instead of buckets to charge for gas\r\n\r\n## Test Plan \r\n\r\nTests passing, I am also going to run a node to see the gas charged\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [x] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\nComplete release note will be tracked in\r\nhttps://github.com/MystenLabs/sui/pull/12429 because there is more than\r\none change coming and it makes more sense to track them all in one\r\nplace.\r\n\r\nWe are changing bucket computation for gas charges. \r\nBefore this protocol version gas for computation was put into buckets in\r\norder to group transactions that were roughly similar into the same\r\nprice/cost.\r\nThat, however, has created an inconsistency in the way charges operate\r\nand the way people optimize for gas.\r\nWith this change in the gas model, charges for gas do not follow the\r\nsteep progression that was defined with buckets. Charges are rounded up\r\nto the closest 1000 and that is all we do",
          "timestamp": "2023-06-11T21:54:14-05:00",
          "tree_id": "354d0d089221e53b814b3b78326b133033a8658e",
          "url": "https://github.com/MystenLabs/sui/commit/98413acceafa3e9a9e48af2eee21f0bbe74ffa60"
        },
        "date": 1686539007437,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 109181012,
            "range": "± 6644541",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 321943,
            "range": "± 11901",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "96da55d600ec6cc238ef4a2fdf361fa61db4f31b",
          "message": "Bump baptiste0928/cargo-install from 2.0.0 to 2.1.0 (#12432)",
          "timestamp": "2023-06-12T03:28:19Z",
          "tree_id": "c25db659136ef53f7f3c7e4daa4387e4ca1433e7",
          "url": "https://github.com/MystenLabs/sui/commit/96da55d600ec6cc238ef4a2fdf361fa61db4f31b"
        },
        "date": 1686541208561,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145657236,
            "range": "± 4357603",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 314154,
            "range": "± 13559",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emma@mystenlabs.com",
            "name": "Emma Zhong",
            "username": "emmazzz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1009fed9f732ad98741364e8993f19b44db7ead6",
          "message": "[consensus handler] reorder txns by gas price (#12266)\n\n## Description \r\n\r\nThis PR adds a step in consensus handler to reorder transactions in a\r\nNarwhal commit by their gas prices. Right now the reordering is purely\r\nbased on gas price, which will be later changed to be based on object\r\nhotness, etc, as well.\r\n\r\n## Test Plan \r\n\r\nAdded a test.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [x] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\nPreviously transactions in a Narwhal commit were ordered as the sub-dag\r\nis flattened in a depth-first traversal. Now we have added a round of\r\nordering that orders the user transactions in the same commit by gas\r\nprice, where a transaction with higher gas price will be added for\r\nexecution in the transaction manager first.",
          "timestamp": "2023-06-11T22:50:06-07:00",
          "tree_id": "614f9d1f2e06c3fca306ce390785c2550bc606f4",
          "url": "https://github.com/MystenLabs/sui/commit/1009fed9f732ad98741364e8993f19b44db7ead6"
        },
        "date": 1686549882454,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 151343443,
            "range": "± 4732468",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 309757,
            "range": "± 28883",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akihidis@gmail.com",
            "name": "Anastasios Kichidis",
            "username": "akichidis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34a42284ce2353a1805045879b2e797e324a650b",
          "message": "[refactor] consensus leader metrics  (#12365)\n\n## Description \r\n\r\nDescribe the changes or additions included in this PR.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-12T14:10:50+01:00",
          "tree_id": "1d275c8ae317dcd780ad75305a784c5f93416e63",
          "url": "https://github.com/MystenLabs/sui/commit/34a42284ce2353a1805045879b2e797e324a650b"
        },
        "date": 1686576159200,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 156063247,
            "range": "± 4450265",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 310422,
            "range": "± 26793",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "2895723+tzakian@users.noreply.github.com",
            "name": "Tim Zakian",
            "username": "tzakian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f7aecc63b1f1fe9d4e3dddabeb6641ab7361f247",
          "message": "Updates to Move layout calculation (#12440)\n\n## Description \r\n\r\nUpdates to layout calculation\r\n\r\n## Test Plan \r\n\r\nCurrent tests\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-12T14:06:01Z",
          "tree_id": "da5dada56ef591eb90b2b07d4694203f3acc5f7a",
          "url": "https://github.com/MystenLabs/sui/commit/f7aecc63b1f1fe9d4e3dddabeb6641ab7361f247"
        },
        "date": 1686579600210,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 154682389,
            "range": "± 7627598",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 349182,
            "range": "± 79039",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zlnju@outlook.com",
            "name": "wiggins-dev",
            "username": "wiggins-dev"
          },
          "committer": {
            "email": "sam@mystenlabs.com",
            "name": "Sam Blackshear",
            "username": "sblackshear"
          },
          "distinct": true,
          "id": "65a1f53b3772879c93d1cb908b9d13a2c97d53fb",
          "message": "update fee rate",
          "timestamp": "2023-06-12T07:12:40-07:00",
          "tree_id": "660dbabdbacab41eea815a717574c50eadaa27c6",
          "url": "https://github.com/MystenLabs/sui/commit/65a1f53b3772879c93d1cb908b9d13a2c97d53fb"
        },
        "date": 1686579861364,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 158788536,
            "range": "± 6324067",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 322145,
            "range": "± 27129",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tmn@mystenlabs.com",
            "name": "Todd Nowacki",
            "username": "tnowacki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d1d097ca380109586cdc2723d8cd026f86b1679",
          "message": "[move-compiler] Beginnings of a visitor framework. Expose Abstract Interpreter framework  (#12356)\n\n## Description \r\n\r\n- Added a notion of visitors to the compiler, but it is only currently\r\nimplemented for the abstract interpreter\r\n- Added a Helper trait for simple abstract interpreter passes \r\n- Implemented the ID leak verifier as an example of that interpreter\r\n  - Will hook it up in a future PR\r\n  \r\nExample output (when I turned off the filtering)\r\n```\r\n  error[Sui E01001]: invalid object construction\r\n     ┌─ /Users/tmn/sui/crates/sui-framework/packages/sui-framework/sources/clock.move:42:32\r\n     │  \r\n  42 │           transfer::share_object(Clock {\r\n     │ ╭────────────────────────────────^\r\n  43 │ │             id: object::clock(),\r\n     │ │             --  --------------- Non fresh UID from this position\r\n     │ │             │    \r\n     │ │             \r\n                  The UID must come directly from sui::object::new. Or for tests, it can come from sui::test_scenario::new_object\r\n  44 │ │             // Initialised to zero, but set to a real timestamp by a\r\n  45 │ │             // system transaction before it can be witnessed by a move\r\n  46 │ │             // call.\r\n  47 │ │             timestamp_ms: 0,\r\n  48 │ │         })\r\n     │ ╰─────────^ Invalid object creation without a newly created UID.\r\n```\r\n\r\n## Test Plan \r\n\r\nTested with the ID leak verifier \r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-12T09:29:18-07:00",
          "tree_id": "2ffca4bec3a1b292e056438713ac2b1d5d3be1fb",
          "url": "https://github.com/MystenLabs/sui/commit/7d1d097ca380109586cdc2723d8cd026f86b1679"
        },
        "date": 1686588169124,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 162928090,
            "range": "± 4591620",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 438142,
            "range": "± 32858",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ashok@mystenlabs.com",
            "name": "Ashok Menon",
            "username": "amnn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "208dda73ac506aaa32e043ff22d9b6f6b17fe46c",
          "message": "[protocol-config] Introduce Protocol Config 14 (#12448)\n\n## Description\r\n\r\nReserve Protocol Config 13 for only framework changes, in preparation to\r\ncherry-pick those changes to an earlier release. Moves gas rounding and\r\ntransaction ordering changes to version 14 (which isn't going to an\r\nearlier release)\r\n\r\n## Test Plan\r\n\r\n```\r\nsui$ cargo nextest run -p sui-protocol-config\r\n```\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [x] protocol change\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [x] breaking change for FNs (FN binary must upgrade)\r\n- [x] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\nReserve Protocol Config 13 for only framework changes, in preparation to\r\ncherry-pick those changes to an earlier release. Moves gas rounding and\r\ntransaction ordering changes to version 14 (which isn't going to an\r\nearlier release)",
          "timestamp": "2023-06-12T13:54:35-07:00",
          "tree_id": "6930c861b6dfc90ff603303d5fcb4639bbe0824a",
          "url": "https://github.com/MystenLabs/sui/commit/208dda73ac506aaa32e043ff22d9b6f6b17fe46c"
        },
        "date": 1686604236658,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 157697967,
            "range": "± 4566528",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 381326,
            "range": "± 47989",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jordan@mystenlabs.com",
            "name": "Jordan Gensler",
            "username": "Jordan-Mysten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1cfb1c9da3fb38bb73cf7a6ed8b6fdb595fda47b",
          "message": "[ts-sdk] Use protocol config in transaction builder (#12081)\n\n## Description \r\n\r\n- Adds `getProtocolConfig()`\r\n- Reworks the hard-coded limits to instead use the protocol config. As a\r\nperformance optimization, a `protocolConfig` option can be used instead\r\nof having it fetch whenever it builds the transaction. Additionally, you\r\ncan hard-code `limits` if you wish, to entirely avoid working with\r\nprotocol config (not recommended, but can be used to override protocol\r\nconfig if you wanted to for whatever reason).\r\n- I had to rework the limit for pure inputs so that it happens as\r\nvalidation instead of during serialization to bytes. This means that\r\npure inputs are completely unlimited (can grow to infinity).\r\n- Some things that previously errored during setting properties will now\r\nerror during transaction construction to bytes (for example, setting\r\npayment coins).\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\n---------\r\n\r\nCo-authored-by: Michael Hayes <michael.hayes@mystenlabs.com>",
          "timestamp": "2023-06-12T14:27:52-07:00",
          "tree_id": "007dccdc579fee79c634eba0c9caa3d55b6c3ce7",
          "url": "https://github.com/MystenLabs/sui/commit/1cfb1c9da3fb38bb73cf7a6ed8b6fdb595fda47b"
        },
        "date": 1686605813826,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 108991602,
            "range": "± 4842742",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 258703,
            "range": "± 14767",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "johnjosephmartin@icloud.com",
            "name": "John Martin",
            "username": "johnjmartin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87935bff4a24562ff50b27c76a9dd1d4d41d9b6d",
          "message": "[sui cli] Optional network_key_pair to ssfn_genesis_config (#12447)\n\n## Description \r\n\r\nAdds a optional network key to ssfn_genesis_config, eg:\r\n```\r\nssfn_config_info:\r\n  - p2p_address: /dns/lax-ssfn-2.testing.sui.io/udp/8084\r\n    network_key_pair: abcdefg123\r\n ```\r\n \r\nThis allows the fullnodes which consume from the ssfn's to use a static list of peer id's\r\n\r\n## Test Plan \r\n\r\nTested locally\r\n\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade binaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-12T14:38:39-07:00",
          "tree_id": "f1dd013a9a4b463e78541797cb48445bf40e1b77",
          "url": "https://github.com/MystenLabs/sui/commit/87935bff4a24562ff50b27c76a9dd1d4d41d9b6d"
        },
        "date": 1686606605565,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 152399468,
            "range": "± 4361022",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 312740,
            "range": "± 85233",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106645797+sadhansood@users.noreply.github.com",
            "name": "Sadhan Sood",
            "username": "sadhansood"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "17d8c411f4621f03420aa60b89469fdd43be61d6",
          "message": "Multiple small refactor to blob related code (#12400)\n\n## Description \r\n\r\nThis PR mostly cleans up some existing code. Primarily the main changes\r\nare:\r\n1. Move `blob` related code to blob.rs\r\n2. Have one single file format which is used for both summary and\r\ncontent files. It is already written as blobs, so just introduce a\r\ncommon abstraction\r\n3. Stop writing individual file's storage format and file compression in\r\nmanifest. It can be read from the file header directly\r\n\r\n5. ## Test Plan \r\n\r\nExisting tests",
          "timestamp": "2023-06-12T15:49:33-07:00",
          "tree_id": "1b3243fec7541fd59db07665cc48d21ced470a1c",
          "url": "https://github.com/MystenLabs/sui/commit/17d8c411f4621f03420aa60b89469fdd43be61d6"
        },
        "date": 1686611021834,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 161943866,
            "range": "± 4720053",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 429546,
            "range": "± 33632",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b754b1fb5c3421800f297e4e51271d78eec07f9a",
          "message": "Pickup proper db opts for iter (#12453)\n\n## Description \r\n\r\nRather than use default options, pickup the preset options\r\n\r\n## Test Plan \r\n\r\nNormal tests\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-13T00:47:41Z",
          "tree_id": "8945acbdd3526fd55c0d6c5e12e2ccf6b26e94e9",
          "url": "https://github.com/MystenLabs/sui/commit/b754b1fb5c3421800f297e4e51271d78eec07f9a"
        },
        "date": 1686618007272,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 152221358,
            "range": "± 7083747",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 369532,
            "range": "± 108855",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "108701016+joyqvq@users.noreply.github.com",
            "name": "Joy Wang",
            "username": "joyqvq"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ea9adb71a0fe38cab59a12928bfbaa5cb10b467",
          "message": "crypto: Multisig support in typescript (#12298)\n\n## Description \r\n\r\nThis PR 1) updates serialization for multisig signature format and still\r\nmaintain MultisigLegacy 2) add typescript support for the latest\r\nmultisig.\r\n\r\nDue to the incompatibility of roaring bitmap in typescript (no broswer\r\nsupport), we decide to upgrade the bitmap in multisig format to use\r\nplain bitmap instead of roaring bitmap in sui protocol. This results in\r\nmore compact serialization of a multisig: the bitmap field is reduced\r\nfrom 37 bytes to at most 10 bytes (max number of signers = 10).\r\n\r\nIn addition, we upgrade the public key serialization to use plain bytes\r\ninstead of string. This also reduce each pubkey serialization in\r\nmultisig.\r\n\r\nThe typescript sdk and rust keytool introduced in this PR follows the\r\nnew protocol. MultisigLegacy is still supported in the sui protocol to\r\nprovide backward compatibility. i.e. multisig returned from old rust\r\nkeytool or legacy client impl in other languages using the legacy format\r\ncan still be executed, but upgrade client to use latest serialization is\r\nstrongly recommended with better compression and first class support.\r\n\r\nThe multisig address remains unchanged. \r\n\r\nAfter https://github.com/MystenLabs/sui/pull/12250 lands rebase and\r\ninclude r1.\r\nThanks @damirka for bcs help!\r\n\r\n## Test Plan \r\n\r\nunit test ser/de for multisig legacy + latest. consistency test in\r\ntypescript vs rust.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-13T15:51:22Z",
          "tree_id": "88b89272456af5d1fa1926d11cad5e1bbc8875ab",
          "url": "https://github.com/MystenLabs/sui/commit/3ea9adb71a0fe38cab59a12928bfbaa5cb10b467"
        },
        "date": 1686672136879,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 149009882,
            "range": "± 8386643",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 323025,
            "range": "± 55222",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "51927076+phoenix-o@users.noreply.github.com",
            "name": "phoenix",
            "username": "phoenix-o"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aa471b7ae6b517623ff65fea41a58d55d49fe371",
          "message": "[pruner] remove point delete option (#12462)\n\nremove point delete method from the pruner",
          "timestamp": "2023-06-13T21:15:11+02:00",
          "tree_id": "5fd2c2cd216cbd347199357e9d709281fa5752d0",
          "url": "https://github.com/MystenLabs/sui/commit/aa471b7ae6b517623ff65fea41a58d55d49fe371"
        },
        "date": 1686684445351,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 107152569,
            "range": "± 7126159",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 364861,
            "range": "± 18845",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sam@mystenlabs.com",
            "name": "Sam Blackshear",
            "username": "sblackshear"
          },
          "committer": {
            "email": "sam@mystenlabs.com",
            "name": "Sam Blackshear",
            "username": "sblackshear"
          },
          "distinct": true,
          "id": "d06b0ddc6ec0e3e6b83c5a52efad8c5ae9c11317",
          "message": "[deepbook] Use fresh object ID rather than sender address in AccountCap\n\nUsing the sender address makes it possible to create AccountCap's that can access the same pool of funds in a tx that does not require an AccountCap as input. This is dangerous because it makes it easier for a malicious app to trick a user into signing a tx that creates an AccountCap that can access an existing pool of funds.",
          "timestamp": "2023-06-13T12:33:27-07:00",
          "tree_id": "d412ff58835a53e458d149f3c531ae6c08c4b13c",
          "url": "https://github.com/MystenLabs/sui/commit/d06b0ddc6ec0e3e6b83c5a52efad8c5ae9c11317"
        },
        "date": 1686685374625,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 108798421,
            "range": "± 9834953",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 312579,
            "range": "± 27485",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106645797+sadhansood@users.noreply.github.com",
            "name": "Sadhan Sood",
            "username": "sadhansood"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e4e634331147b3f3ac0be7ddb19e25aee44d68d1",
          "message": "Add archive state reader (#12402)\n\n## Description \r\n\r\nThis PR adds functions to allow reading checkpoints from archive. The\r\nmain functionality is in reader.rs\r\n## Test Plan \r\n\r\nAdded unit tests",
          "timestamp": "2023-06-13T13:05:09-07:00",
          "tree_id": "f45a2d73009bf04c76f07815c4ff627e984864ac",
          "url": "https://github.com/MystenLabs/sui/commit/e4e634331147b3f3ac0be7ddb19e25aee44d68d1"
        },
        "date": 1686687365628,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147028364,
            "range": "± 6540123",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 504928,
            "range": "± 63540",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tmn@mystenlabs.com",
            "name": "Todd Nowacki",
            "username": "tnowacki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a851ac735edd3603532032af01d9f04af5774ff7",
          "message": "[transactional tests] Switch to using AuthorityState (#11508)\n\n## Description \r\n\r\n- `--unmetered` is gone and instead you can manually override the\r\n`--max-gas` in init\r\n- `--protocol-config` cannot be updated between transactions, which made\r\nat least 1 test impossible\r\n- Many limit tests have been split by protocol-config version to deal\r\nwith this\r\n\r\n## Test Plan \r\n\r\n- Migrated most tests\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-14T02:54:26Z",
          "tree_id": "4b3d83087900445e5e73a1d41f0125d15ecb2296",
          "url": "https://github.com/MystenLabs/sui/commit/a851ac735edd3603532032af01d9f04af5774ff7"
        },
        "date": 1686712115937,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 154816500,
            "range": "± 4844714",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 331035,
            "range": "± 69339",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "2895723+tzakian@users.noreply.github.com",
            "name": "Tim Zakian",
            "username": "tzakian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "67bd0a5d15689755b3511e68ce85fee19f61f6ad",
          "message": "[move-unit-test] Add stack traces for tests that abort in natives (#12472)\n\n## Description \r\n\r\nFixes an issue where Move unit tests that had an unexpected abort in a\r\nnative function would not report a stack trace since we didn't capture\r\nexecution state on a call failure to a native function.\r\n\r\n## Test Plan \r\n\r\nAdded a regression test to make sure that we produce stack traces for\r\nnative functions that abort.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [X] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n* Adds stack traces for failing Move unit tests that abort in a Move\r\nnative function.",
          "timestamp": "2023-06-14T15:11:19Z",
          "tree_id": "812a26ac3a94ece2e7272b88524f47664f496480",
          "url": "https://github.com/MystenLabs/sui/commit/67bd0a5d15689755b3511e68ce85fee19f61f6ad"
        },
        "date": 1686756262541,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 157996074,
            "range": "± 4495119",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 329805,
            "range": "± 65833",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "williamprincesmith@gmail.com",
            "name": "William Smith",
            "username": "williampsmith"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "edaa731c4d85863ccfbed39abc586f7a55cb5635",
          "message": "[Core] Move executed_transactions_to_checkpoint table to epoch store (#12228)",
          "timestamp": "2023-06-14T08:54:35-07:00",
          "tree_id": "78d10916a38679c3b7be0630a78f55e79e256745",
          "url": "https://github.com/MystenLabs/sui/commit/edaa731c4d85863ccfbed39abc586f7a55cb5635"
        },
        "date": 1686758634208,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 108399720,
            "range": "± 3158779",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 361145,
            "range": "± 18762",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "113150618+dariorussi@users.noreply.github.com",
            "name": "Dario Russi",
            "username": "dariorussi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2d3f82201b8e9c99b2a4b52d1d40813a779e3a8b",
          "message": "Enable rounding for gas (#12467)\n\n## Description \r\n\r\nActually enable rounding\r\n\r\n## Test Plan \r\n\r\ncurrent tests\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-14T11:32:18-05:00",
          "tree_id": "75d81bc7bb03172d0bbf2c6e20661ca2512942ba",
          "url": "https://github.com/MystenLabs/sui/commit/2d3f82201b8e9c99b2a4b52d1d40813a779e3a8b"
        },
        "date": 1686761075792,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 158760542,
            "range": "± 4382058",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 317394,
            "range": "± 18546",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "123408603+healthydeve@users.noreply.github.com",
            "name": "Jian Lu",
            "username": "healthydeve"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a0bb4de7f60c061c45246b02c41479b2e05f1950",
          "message": "[Faucet] Adding batch request to sui faucet (#12257)\n\n## Description \r\n\r\nThis PR adds the `/v1/gas` api to the faucet which is the batch send\r\nrequest. The request gets put into a MCSP queue which another thread\r\npulls routinely from to serve up to 500 paysui transactions at once.\r\n\r\nThis also adds the `/v1/status` api to the faucet which checks on the\r\nstatus of the request based on a Uuid that is generated from the initial\r\ngas request. The status of any given Uuid is cached for 5 minutes after\r\nthe request completes, and if it is deleted the user will get nothing\r\nback.\r\n\r\nAdding batch request on faucet: \r\n\r\n<img width=\"1243\" alt=\"image\"\r\nsrc=\"https://github.com/MystenLabs/sui/assets/123408603/bfa62f4a-8d14-4cf6-b17a-91bbb9c54378\">\r\n\r\nIn Progress:\r\n\r\n![image](https://github.com/MystenLabs/sui/assets/123408603/f6546c54-774f-44dd-b07d-a2a30d4df777)\r\n\r\nSuccess:\r\n\r\n![image](https://github.com/MystenLabs/sui/assets/123408603/8ac43331-c4ae-49b1-97cd-12bd6bd7e39f)\r\n\r\nFollow up items:\r\nChange wallet to use new API\r\n\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\nLocal Testing / CI / CD / Will redirect discord devnet faucuet, and then\r\ntestnet faucet onto this endpoint\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-14T11:17:22-07:00",
          "tree_id": "9fa3175a70f3ac995cd2bc0dcbefc963303c7d2d",
          "url": "https://github.com/MystenLabs/sui/commit/a0bb4de7f60c061c45246b02c41479b2e05f1950"
        },
        "date": 1686767203642,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 112838633,
            "range": "± 5573612",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 309644,
            "range": "± 21793",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2c4e01c63986d2cda615e63c05ef96b3f520c480",
          "message": "Add a few more functions to move_building_blocks (#12477)\n\n## Description \r\n\r\nAdd a few cases, including unwrap (but not re-wrap), and\r\ncreate-and-wrap.\r\n\r\n## Test Plan \r\n\r\nCI\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-14T12:25:17-07:00",
          "tree_id": "23e8316eba0f5764f37e35848ebc90668e5ea795",
          "url": "https://github.com/MystenLabs/sui/commit/2c4e01c63986d2cda615e63c05ef96b3f520c480"
        },
        "date": 1686771269665,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 111986537,
            "range": "± 6169613",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 311102,
            "range": "± 25024",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "03df554cc9fcd0ddf4128b32397e60a700955749",
          "message": "Remove sui-core's dep to test-utils (#12496)\n\n## Description \r\n\r\nThe last use is in narwhal manager tests. Removing it as it just creates\r\na config.\r\n\r\n## Test Plan \r\n\r\nCI\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-14T13:15:10-07:00",
          "tree_id": "bc6737f3423721a2a7fbe255dd65be05f92764e3",
          "url": "https://github.com/MystenLabs/sui/commit/03df554cc9fcd0ddf4128b32397e60a700955749"
        },
        "date": 1686774407266,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 142957133,
            "range": "± 4374379",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 328928,
            "range": "± 18567",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106645797+sadhansood@users.noreply.github.com",
            "name": "Sadhan Sood",
            "username": "sadhansood"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ced0052d6a222cc0ba80cb622bb04b5cb6bd912",
          "message": "Add sui tool to sync node from an archive (#12409)\n\n## Description \r\n\r\nBy passing in the remote store config, a node operator can choose to\r\nmanually sync the node from archive.\r\n\r\n## Test Plan \r\n\r\nExecuted on testnet fullnodes, and found it to be working as expected.",
          "timestamp": "2023-06-14T17:21:59-07:00",
          "tree_id": "f4529dabdac5d03315f080430e93ee356acae298",
          "url": "https://github.com/MystenLabs/sui/commit/8ced0052d6a222cc0ba80cb622bb04b5cb6bd912"
        },
        "date": 1686789063565,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 109862434,
            "range": "± 7286843",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308300,
            "range": "± 21446",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ashok@mystenlabs.com",
            "name": "Ashok Menon",
            "username": "amnn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3a399bb13c7589185de248fa24fed7a163c07905",
          "message": "[deepbook] Refresh framework snapshot for protocol 13 (#12471)\n\n## Description\r\n\r\nBased on an update to `releases/sui-v1.3.0-release` (#12468)\r\n\r\n## Test Plan\r\n\r\n```\r\ncrates/sui-framework-snapshot$ cargo nextest run\r\n```\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration",
          "timestamp": "2023-06-15T02:25:57-07:00",
          "tree_id": "04cf7e8b49d069bfdb0a1e13a88fdc454ec99497",
          "url": "https://github.com/MystenLabs/sui/commit/3a399bb13c7589185de248fa24fed7a163c07905"
        },
        "date": 1686821911214,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 109516960,
            "range": "± 3192340",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 307908,
            "range": "± 31476",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "williamprincesmith@gmail.com",
            "name": "William Smith",
            "username": "williampsmith"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bbe7e272829c666ed6735c03b5fb782a5b941637",
          "message": "Enable simtests for checkpoint pruning (#12513)\n\n## Description \r\n\r\n* Enable pruning in `msim`\r\n* Introduce builder methods for setting n validators in a `TestCluster`/\r\n`Swarm` / `NetworkConfig` to be unpruned\r\n* Fixes up committe change stress test to keep 2/7 validators unpruned\r\nin order to allow new validators to catchup via state sync (without use\r\nof archival node)\r\n\r\n## Test Plan \r\n\r\nExisting tests\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-15T16:15:13Z",
          "tree_id": "cff188911cd6ee579bf2c87bd2cbcf23bdc107ba",
          "url": "https://github.com/MystenLabs/sui/commit/bbe7e272829c666ed6735c03b5fb782a5b941637"
        },
        "date": 1686846408241,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 148297822,
            "range": "± 4445951",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 313838,
            "range": "± 30812",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tmn@mystenlabs.com",
            "name": "Todd Nowacki",
            "username": "tnowacki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "00d05e3df087d7977aa69b360c64c6cef3903eb9",
          "message": "[cleanup][move] Remove unused extensions (#12506)\n\n## Description \r\n\r\n- Removed to-yul, async, and core-table extensions (and all related\r\ncode)\r\n\r\n## Test Plan \r\n\r\n- ran tests\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-15T09:35:50-07:00",
          "tree_id": "c2c8ab29d7e1ebfaf071c7fa63c8ce3778ef41ad",
          "url": "https://github.com/MystenLabs/sui/commit/00d05e3df087d7977aa69b360c64c6cef3903eb9"
        },
        "date": 1686847687312,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 149710150,
            "range": "± 5878507",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 387984,
            "range": "± 58145",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "113150618+dariorussi@users.noreply.github.com",
            "name": "Dario Russi",
            "username": "dariorussi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0a8837a52d675d8fbb54ed115d12e8cb2517d52b",
          "message": "Change cost tables for gas (#12505)\n\n## Description \r\n\r\nChange gas cost tables to reduce cost of transactions.\r\nRationale: \r\n- instructions start affecting time of execution on the upper end. Some\r\nnatives are more important than instructions. Also the change is still\r\nprotecting against DOS attacks by making the cost rise abruptly after a\r\ncertain point\r\n- stack height does not seem to have a strong correlation to execution\r\ntime, so we are making it matter less\r\n- for memory size we are going with the intuition that up to approx 1M\r\ncost is pretty linear. 1k transaction executing concurrently at the same\r\ntime (which we do not do and it's pretty foolish requiring 1k threads)\r\nwould take up to 1G of RAM. All those numbers do not seem problematic\r\n\r\nGoing to evaluate the impact against existing transactions\r\n\r\n## Test Plan \r\n\r\nExisting tests and manual checks against transaction executed to see the\r\nimpact\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-15T16:36:39-05:00",
          "tree_id": "ed6929f2ba765e9b6e3bb3bf3b937f3579248522",
          "url": "https://github.com/MystenLabs/sui/commit/0a8837a52d675d8fbb54ed115d12e8cb2517d52b"
        },
        "date": 1686865727834,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 106513781,
            "range": "± 4686941",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 314745,
            "range": "± 17496",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alex@mystenlabs.com",
            "name": "Alex Tsiliris",
            "username": "Eis-D-Z"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c30bd6f6e945b59aa8f07b0578f2de70f4c199cf",
          "message": "Fix docstring inaccuracy for kiosk::place function (#12487)\n\n## Description \r\n\r\nCorrect a docstring inaccuracy.\r\n\r\n## Test Plan \r\n\r\nNo need for testing. Only comment changes.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\n- minor patch in the Kiosk module documentation",
          "timestamp": "2023-06-16T16:02:39+03:00",
          "tree_id": "1ea24f4853c6515cc8db23039a7680a43b283063",
          "url": "https://github.com/MystenLabs/sui/commit/c30bd6f6e945b59aa8f07b0578f2de70f4c199cf"
        },
        "date": 1686921435067,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 159902856,
            "range": "± 4900275",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 311383,
            "range": "± 24018",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "113177674+ldback-aftermath@users.noreply.github.com",
            "name": "ldback-aftermath",
            "username": "ldback-aftermath"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b69e31adc98b263fefd764253d2f4100b144d2c3",
          "message": "[sui-framework] Add sui::table_vec::drop (#12536)\n\n## Description\r\n\r\nAutomatically drops a `sui::table_vec::TableVec<T>` where `T: drop`.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can skip the following section. Otherwise, please indicate what changed, and then add to the Release Notes section as highlighted during the release process.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [x] protocol change\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [x] breaking change for FNs (FN binary must upgrade)\r\n- [x] breaking change for validators or node operators (must upgrade binaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\nAdds `sui::table_vec::drop` to the Sui Framework, as of Protocol Version 14.\r\n\r\n---------\r\n\r\nCo-authored-by: Ashok Menon <ashok@mystenlabs.com>",
          "timestamp": "2023-06-16T07:52:03-07:00",
          "tree_id": "e43c5408be1e43eebb3f612ef4ea67130585a44e",
          "url": "https://github.com/MystenLabs/sui/commit/b69e31adc98b263fefd764253d2f4100b144d2c3"
        },
        "date": 1686927952824,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146568305,
            "range": "± 4530347",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 350607,
            "range": "± 23297",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ashok@mystenlabs.com",
            "name": "Ashok Menon",
            "username": "amnn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad7decb5eda3cf96f6d826c3085456a60bd89d3a",
          "message": "[sui-execution] Path utilities (#12517)\n\n## Description\r\n\r\nUtility functions for working with paths:\r\n\r\n- `normalize_path` to get rid of redundant `.` and `..` components.\r\n- `path_relative_to` to describe one path relative to another.\r\n- `shortest_new_prefix` to find the shortest path prefix that doesn't\r\nexist (i.e. needs to be created).\r\n- `deep_copy` to recursively copy files and directories with filtering\r\nby path.\r\n\r\nThese will be used when actually executing a plan.\r\n\r\n## Test Plan\r\n\r\nNew unit tests:\r\n\r\n```\r\nsui-execution/cut$ cargo nextest run\r\n```\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-16T09:27:16-07:00",
          "tree_id": "04e92613b682bf1b4abb49e8ff07f665dba09051",
          "url": "https://github.com/MystenLabs/sui/commit/ad7decb5eda3cf96f6d826c3085456a60bd89d3a"
        },
        "date": 1686933537378,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 113133144,
            "range": "± 8025025",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 362350,
            "range": "± 12947",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "135084671+stefan-mysten@users.noreply.github.com",
            "name": "stefan-mysten",
            "username": "stefan-mysten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f4f37d6461a345a52541bff9babf88926f9fb122",
          "message": "[CLI] Import wallet private key (#12504)\n\n## Description \r\n\r\nThe Sui CLI `keytool import` command now accepts either a MNEMONIC or a\r\nprivate key (from the Sui Wallet). The user exports a private key\r\nassociated with an account in the Wallet, and uses that private key in\r\nthe `keytool import` command in the CLI to import the account in the\r\nCLI.\r\n\r\n## Test Plan \r\n\r\nThere is a new function to test the new private key code\r\n(`test_private_keys_ed25519`)\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\nAdd support to the `keytool import` command to allow for importing a\r\nprivate key (from the wallet) in addition to the existing support of\r\nimporting an account via a mnemonic.",
          "timestamp": "2023-06-16T10:07:34-07:00",
          "tree_id": "addaab20c3669e4faf60f41b00003559a4590610",
          "url": "https://github.com/MystenLabs/sui/commit/f4f37d6461a345a52541bff9babf88926f9fb122"
        },
        "date": 1686935902938,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147203020,
            "range": "± 5042402",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 322464,
            "range": "± 18912",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emma@mystenlabs.com",
            "name": "Emma Zhong",
            "username": "emmazzz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d1c34fa307eea1afdcaa9121c28d31fc90069b8",
          "message": "Introduce protocol version 15 (#12548)\n\n## Description \r\n\r\nIntroduce a new protocol version 15 and move the txn reordering change\r\nand framework change from 14 to 15.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [x] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [x] breaking change for FNs (FN binary must upgrade)\r\n- [x] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\nWe want to limit the changes in protocol version 14 to gas changes so\r\nmoving the other changes, transaction reordering and framework change,\r\nto a new protocol version.",
          "timestamp": "2023-06-16T19:18:55-07:00",
          "tree_id": "04fbe68d78e9d6ff844b4a2d05c2e5437a04fec1",
          "url": "https://github.com/MystenLabs/sui/commit/1d1c34fa307eea1afdcaa9121c28d31fc90069b8"
        },
        "date": 1686968875804,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 107511617,
            "range": "± 6688487",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 314445,
            "range": "± 22322",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eugene@mystenlabs.com",
            "name": "Eugene Boguslavsky",
            "username": "ebmifa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d816269b13a63d029286d4aae95023587fbd812e",
          "message": "v1.4.0 Framework Snapshot (#12553)\n\n## Description \r\nv1.4.0 Framework Snapshot\r\n```\r\ncargo run --bin sui-framework-snapshot\r\n```\r\n\r\n## Test Plan \r\nn/a",
          "timestamp": "2023-06-17T03:11:58Z",
          "tree_id": "e0d5a8234ae41fbd6b63ad7e53afd92bc75e0aba",
          "url": "https://github.com/MystenLabs/sui/commit/d816269b13a63d029286d4aae95023587fbd812e"
        },
        "date": 1686972300247,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 153062267,
            "range": "± 6291205",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 373162,
            "range": "± 48913",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eugene@mystenlabs.com",
            "name": "Eugene Boguslavsky",
            "username": "ebmifa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d577848733a01f033a4e7d710807fe57dae88481",
          "message": "Sui `v1.5.0` version bump (#12555)\n\n## Description \r\nSui `v1.5.0` version bump\r\n\r\n## Test Plan \r\n`cargo build --release`",
          "timestamp": "2023-06-17T04:25:24Z",
          "tree_id": "f622b40e67c309ef0f91e1ac5179aec8a7bd2358",
          "url": "https://github.com/MystenLabs/sui/commit/d577848733a01f033a4e7d710807fe57dae88481"
        },
        "date": 1686976590756,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 156732673,
            "range": "± 5570846",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 377858,
            "range": "± 44493",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7672c80cdf84035c3725f9131b1a0619c8827125",
          "message": "TestClusterBuilder::build() do not return Result (#12545)\n\n## Description \r\n\r\nThere is no point to return Result and then always unwrap.\r\n\r\n## Test Plan \r\n\r\nCI\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-17T18:12:23-07:00",
          "tree_id": "200124fa81c6943e4cb6e7ef2c66caf37fff671d",
          "url": "https://github.com/MystenLabs/sui/commit/7672c80cdf84035c3725f9131b1a0619c8827125"
        },
        "date": 1687051433026,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 160810430,
            "range": "± 4435575",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 410965,
            "range": "± 56875",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ashok@mystenlabs.com",
            "name": "Ashok Menon",
            "username": "amnn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5982aa935b969022093abd3adfa5f9febb53e039",
          "message": "[sui-execution] CutPlan::execute (#12518)\n\n## Description\r\n\r\nImplement the process of executing a cut plan to copy packages and\r\nfix-up manifest files (for the copied crates, and the workspace).\r\n\r\nAlso implements `CutPlan::rollback` which is used by `execute` to\r\nclean-up after itself, if it fails. To support this, `CutPlan::discover`\r\nhas been updated to track the new directories it needed to create.\r\n\r\nThis PR does not address various usability issues (adding context to\r\nerror messages, a dry-run option, etc) which are to come.\r\n\r\n## Test Plan\r\n\r\nNew unit tests:\r\n```\r\nsui-execution/cut$ cargo nextest run\r\n```\r\n\r\nTry the CLI on a real example (warning, this will make changes to the\r\nrepo's working tree):\r\n\r\n```\r\nsui$ cargo run --bin cut -- --feature v1                    \\\r\n  -d sui-execution/latest:sui-execution/v1:-latest          \\\r\n  -d external-crates/move:external-crates/move-execution/v1 \\\r\n  -p sui-adapter-latest                                     \\\r\n  -p sui-move-natives-latest                                \\\r\n  -p sui-verifier-latest                                    \\\r\n  -p move-bytecode-verifier                                 \\\r\n  -p move-stdlib                                            \\\r\n  -p move-vm-runtime\r\n```\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-19T06:09:51-07:00",
          "tree_id": "2c6d4286b22422667812371504e75ed4c9a52f43",
          "url": "https://github.com/MystenLabs/sui/commit/5982aa935b969022093abd3adfa5f9febb53e039"
        },
        "date": 1687180874812,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 162421023,
            "range": "± 4137402",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 435578,
            "range": "± 28862",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ashok@mystenlabs.com",
            "name": "Ashok Menon",
            "username": "amnn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "40cd732fa4e202316c5b7a615295c9dd3776183c",
          "message": "[sui-execution] Add context to errors from CLI (#12537)\n\n## Description\r\n\r\nUse anyhow to introduce context to errors, to make them easier to debug.\r\n\r\n## Test Plan\r\n\r\nExisting unit tests:\r\n\r\n```\r\nsui-execution/cut$ cargo nextest run\r\n```\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-19T14:27:00Z",
          "tree_id": "b82ebda311f91c95e4c39879202f972c8d4fec50",
          "url": "https://github.com/MystenLabs/sui/commit/40cd732fa4e202316c5b7a615295c9dd3776183c"
        },
        "date": 1687185362875,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 107882910,
            "range": "± 3116555",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 314667,
            "range": "± 20666",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ashok@mystenlabs.com",
            "name": "Ashok Menon",
            "username": "amnn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "43c4502e837113c5477ceb9d1d191f338330d407",
          "message": "[sui-execution] Add dry-run option (#12538)\n\n## Description\r\n\r\nAdd a flag to display the cut plan without executing it.\r\n\r\n## Test Plan\r\n\r\n```\r\nsui$ cargo run --bin cut -- --dry-run --feature v1          \\\r\n     -d sui-execution/latest:sui-execution/v1:-latest       \\\r\n     -d external-crates/move:external-crates/move-execution \\\r\n     -p sui-adapter-latest                                  \\\r\n     -p sui-move-natives-latest                             \\\r\n     -p sui-verifier-latest                                 \\\r\n     -p move-bytecode-verifier                              \\\r\n     -p move-stdlib                                         \\\r\n     -p move-vm-runtime\r\n\r\nCopying packages in: /Users/ashokmenon/sui\r\n\r\nnew [workspace] members:\r\n - to:   sui-adapter-v1\r\n         sui-execution/v1/sui-adapter\r\n   from: sui-adapter-latest\r\n         sui-execution/latest/sui-adapter\r\n - to:   sui-move-natives-v1\r\n         sui-execution/v1/sui-move-natives\r\n   from: sui-move-natives-latest\r\n         sui-execution/latest/sui-move-natives\r\n - to:   sui-verifier-v1\r\n         sui-execution/v1/sui-verifier\r\n   from: sui-verifier-latest\r\n         sui-execution/latest/sui-verifier\r\n\r\nnew [workspace] excludes:\r\n - to:   move-bytecode-verifier-v1\r\n         external-crates/move-execution/move-bytecode-verifier\r\n   from: move-bytecode-verifier\r\n         external-crates/move/move-bytecode-verifier\r\n - to:   move-stdlib-v1\r\n         external-crates/move-execution/move-stdlib\r\n   from: move-stdlib\r\n         external-crates/move/move-stdlib\r\n - to:   move-vm-runtime-v1\r\n         external-crates/move-execution/move-vm/runtime\r\n   from: move-vm-runtime\r\n         external-crates/move/move-vm/runtime\r\n\r\nother packages:\r\n```\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-19T14:59:24Z",
          "tree_id": "0e923160f3e76cacb992d23d8812d8782353121b",
          "url": "https://github.com/MystenLabs/sui/commit/43c4502e837113c5477ceb9d1d191f338330d407"
        },
        "date": 1687187315491,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 106876762,
            "range": "± 7562020",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 264591,
            "range": "± 29307",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ashok@mystenlabs.com",
            "name": "Ashok Menon",
            "username": "amnn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6bd2c65cb6b3411434e7fcfadf4ed6d1e5e8ae72",
          "message": "[sui-execution][EASY] README (#12542)\n\n## Description\r\n\r\nAdding a brief readme to explain this internal tool.\r\n\r\n## Test Plan\r\n\r\n:eyes:\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-19T15:27:58Z",
          "tree_id": "d55fbec32f86f9468f2f4505f007fc513b1a0698",
          "url": "https://github.com/MystenLabs/sui/commit/6bd2c65cb6b3411434e7fcfadf4ed6d1e5e8ae72"
        },
        "date": 1687189214196,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 108616602,
            "range": "± 3068119",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 265894,
            "range": "± 13669",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akihidis@gmail.com",
            "name": "Anastasios Kichidis",
            "username": "akichidis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "068602247e00b8192a5209bac5ab37be2dd81802",
          "message": "[narwhal] introduce the LeaderSwapTable (#12465)\n\n## Description \r\n\r\nAs part of the leader election schedule change epic\r\nhttps://www.notion.so/mystenlabs/Leader-election-schedule-31e9abd06477436b9a38fd3282879093?pvs=4\r\n, the first step is to build a \"swap\" table based on the calculated\r\nreputation scores. As a reminder we do calculate the leader reputation\r\nscores every K commit rounds. Our goal is based on those scores to come\r\nup with a set of good & bad nodes. Then for next K commit rounds we do\r\nswap the occurrences of leaders of the bad nodes with the ones of the\r\ngood nodes.\r\n\r\nThis PR is the first step. As part of the upcoming work we'll need to \r\n- [ ] calculate the swap table on every K committed subdags & wire into\r\nthe leader election algorithm\r\n- [ ] restore correct swap table after crash/recovery\r\n- [ ] modify the commit path so we repeat the leader election when we\r\ncommit recursively\r\n- [ ] modify the proposer to support the new leader election\r\ncapabilities\r\n- [ ] ensure whole feature is gated behind a protocol config feature\r\nflag - and probably a config switch as we might need to have it disabled\r\nfor longer than a release cycle.\r\n- [ ] add testing\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-20T12:33:05Z",
          "tree_id": "41ce963bd300d41124690ec67880076405d70ef9",
          "url": "https://github.com/MystenLabs/sui/commit/068602247e00b8192a5209bac5ab37be2dd81802"
        },
        "date": 1687265101446,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 112526863,
            "range": "± 3256273",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 316821,
            "range": "± 13703",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jnaulty@mystenlabs.com",
            "name": "John Naulty Jr",
            "username": "jnaulty"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b7c5dfe1d57613825df7210f4e15eaf91d845558",
          "message": "Remove Dependabot Auto-Merge (#12503)\n\n## Description \r\n\r\nWhat: Turn off Dependabot Auto-Merge\r\n\r\nWhat this means for Maintainers: Project maintainers should provide a\r\nreview and sign-off on dependency update pull-requests.\r\n\r\nWhy: Trust, but verify.\r\nAuto-Approving code carries risk and signals blind trust in external\r\nthird-party code providers. Attackers can (and will) utilize this blind\r\ntrust to compromise downstream systems\r\n[1](https://arxiv.org/abs/2005.09535)\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-20T08:57:17-07:00",
          "tree_id": "4b61983a7381f1757829e91bd15cf4fc0ff20b4b",
          "url": "https://github.com/MystenLabs/sui/commit/b7c5dfe1d57613825df7210f4e15eaf91d845558"
        },
        "date": 1687277324873,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 158112845,
            "range": "± 5001980",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 375157,
            "range": "± 92563",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41b79cc6da4113718a1b8b1dfdb70300c6419b87",
          "message": "Stop depending on wrapped tombstone (#12412)\n\n## Description \r\n\r\nThis PR simplifies the definition of unwrapped_then_delete in\r\ntransaction effects by introducing a new feature flag.\r\nThe flag is currently disabled.\r\nWith the flag is set, we no longer depend on tombstone when deciding\r\nwhether to include an object in unwrapped_then_delete. Since we no\r\nlonger query the store, we don't have the previous version number\r\nanymore.\r\nSo we added a new variant in ObjectChange to cover UnwrapThenDelete,\r\ninstead of inside DeleteKind.\r\nWith this, we no longer need to depend on wrapped tombstones.\r\nStateAccumulator can then also be simplified to ignore them.\r\nAt the epoch boundary where this is enabled, we also re-accumulate the\r\nstate and override the existing state.\r\n\r\n## Test Plan \r\n\r\nAny suggestions on how I may test this?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-20T09:30:29-07:00",
          "tree_id": "e6f1993bba63b6c2e06255384feef4aa145fe007",
          "url": "https://github.com/MystenLabs/sui/commit/41b79cc6da4113718a1b8b1dfdb70300c6419b87"
        },
        "date": 1687279502942,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 163739239,
            "range": "± 6105628",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 315988,
            "range": "± 51524",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eugene@mystenlabs.com",
            "name": "Eugene Boguslavsky",
            "username": "ebmifa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "85a740ffa121c9630fdea4a0180160ff54956467",
          "message": "Moving release notes check into rust.yml (#12522)\n\n## Description \r\nMoving release notes check into rust.yml\r\n\r\n## Test Plan \r\nWill test once this lands",
          "timestamp": "2023-06-20T10:32:46-07:00",
          "tree_id": "12284996de895f685909e0ab4bd91100c13b9189",
          "url": "https://github.com/MystenLabs/sui/commit/85a740ffa121c9630fdea4a0180160ff54956467"
        },
        "date": 1687283211104,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 112764717,
            "range": "± 3654657",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 313606,
            "range": "± 23789",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8f1adfced90fb62ec87271786045a624aaf393e7",
          "message": "update mysten sim (#12583)",
          "timestamp": "2023-06-20T18:57:30Z",
          "tree_id": "a27c22192e31b0c69cb55761fbf1672470b5d39a",
          "url": "https://github.com/MystenLabs/sui/commit/8f1adfced90fb62ec87271786045a624aaf393e7"
        },
        "date": 1687288299116,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 153242712,
            "range": "± 5193891",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 323961,
            "range": "± 30281",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tmn@mystenlabs.com",
            "name": "Todd Nowacki",
            "username": "tnowacki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8e1ac58bd4b178c67b20300b5f617b78df2647db",
          "message": "[bytecode verifier] Improve performance of stacks (#11289)\n\n## Description \r\n\r\n- Reduce memory allocation for abstract stacks in the verifier\r\n- Certain operations can introduce multiple copies of the same type on\r\nthe stack. This run-length style encoding will reduce allocation in\r\nthose cases\r\n\r\n## Test Plan \r\n\r\n- Not a observable change, used existing tests \r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-20T22:28:06Z",
          "tree_id": "fe88215d4945dd4baa9b33d3225cfff89605b2f9",
          "url": "https://github.com/MystenLabs/sui/commit/8e1ac58bd4b178c67b20300b5f617b78df2647db"
        },
        "date": 1687300642373,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 111798554,
            "range": "± 8625853",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 354684,
            "range": "± 20999",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "81660174+mwtian@users.noreply.github.com",
            "name": "mwtian",
            "username": "mwtian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a37cc42c89317a35b9304a2d267da3aea27e7067",
          "message": "[Narwhal] disable min_delay_timer after skipping rounds in proposer (#12580)\n\n## Description \r\n\r\nCurrently `min_delay_timer` is reset in proposer for the next round,\r\nafter skipping rounds because of receiving higher round parents. The\r\nnetwork mostly increments rounds at an interval of `min_header_delay`.\r\nSo the following can happen,\r\n- Primary A receives parents from round 15, skips proposing round 14.\r\n- Primary A waits for min_header_delay=0.5s to propose at round 15.\r\n- Primary A receives parents from round 16, skips proposing round 15.\r\n\r\nThis change avoids the additional wait in `min_delay_timer` when the\r\nproposer skips rounds, to help the lagging primary become get in sync\r\nwith the network.\r\n\r\nThis change is intentionally simplified. A bigger refactor along with\r\nsome fixes to proposer will be done in a future PR.\r\n\r\n\r\n## Test Plan \r\n\r\nThis has shown to make header proposal rate more consistent with less\r\ndips across validators in private testnet.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-20T23:59:40Z",
          "tree_id": "0be1fea0b8ee59c718527154505f7ea66042a0c8",
          "url": "https://github.com/MystenLabs/sui/commit/a37cc42c89317a35b9304a2d267da3aea27e7067"
        },
        "date": 1687306328622,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 110601893,
            "range": "± 3194317",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 316705,
            "range": "± 16425",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eugene@mystenlabs.com",
            "name": "Eugene Boguslavsky",
            "username": "ebmifa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6865f5e6abdee5624c5f7f948a4a46bc800a0192",
          "message": "Fixing release notes check cmd (#12586)\n\n## Description \r\nFixing release notes check cmd\r\n\r\n## Test Plan \r\n👀",
          "timestamp": "2023-06-21T00:34:34Z",
          "tree_id": "3691b52a09897a641594a1f187e2edef29c161fb",
          "url": "https://github.com/MystenLabs/sui/commit/6865f5e6abdee5624c5f7f948a4a46bc800a0192"
        },
        "date": 1687308211851,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 110861373,
            "range": "± 4083448",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 317740,
            "range": "± 17553",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106645797+sadhansood@users.noreply.github.com",
            "name": "Sadhan Sood",
            "username": "sadhansood"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f533b3f435903a858991cff798dbdfc1e7f9f452",
          "message": "Switch to tokio::spawn_blocking for archive task which does blocking file i/o (#12531)\n\n## Description \r\n\r\nThe checkpoint tailer task does blocking file i/o in tight loop and yet\r\nit was being invoked in the async context. This would cause the receiver\r\nto not receive mpsc channel messages (or receive them after a very long\r\ndelay) as it was likely assigned to the same thread as tailer (the one\r\ninvoking blocking calls) and the tailer would not yield the thread\r\n(since it tails checkpoints in a loop). This was causing the archive\r\nfiles to wait a long time on local fs before they could get uploaded to\r\ns3.\r\n\r\nThe fix is simple - just move the tailer to `spawn_blocking` instead of\r\n`spawn` and that fixes the problem. After this change, I see no such\r\nissue and receiver receives channel messages instantly and files are\r\ngetting uploaded without any delay.\r\nAs an added bonus, the code is a little simpler too now as I was able to\r\neliminate one function call.\r\n\r\n## Test Plan \r\n\r\nExisting tests. Unfortunately, it seems like usage of `spawn_blocking`\r\nis incompatible with simulator because I keep getting deadlock detected\r\nerror messages and this log line seems to indicate why:\r\n```\r\n2022-01-03T02:04:56.000000Z  WARN node{id=1 name=\"client\"}: tokio::sim::runtime: /Users/sadhansood/.cargo/git/checkouts/mysten-sim-6c6e892b5d19dc47/e4b1466/msim-tokio/src/sim/runtime.rs:62: spawn_blocking() call in simulator may cause deadlocks if spawned task attempts to do I/O\r\n```\r\nSwitching sim tests to tokio tests to make them work.",
          "timestamp": "2023-06-20T17:35:57-07:00",
          "tree_id": "9822025af0396c1a98aa5bc0aab2c17338d263bc",
          "url": "https://github.com/MystenLabs/sui/commit/f533b3f435903a858991cff798dbdfc1e7f9f452"
        },
        "date": 1687308471592,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 158621320,
            "range": "± 6550386",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 345211,
            "range": "± 43011",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adam@mystenlabs.com",
            "name": "Adam Welc",
            "username": "awelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "968605c8710d1863727a9a2cf5cb736b1e2bde00",
          "message": "[move-compiler] Added warnings for unused functions and types (#12425)\n\n## Description \r\n\r\nAdded compiler warnings for unused (uninstantiated) struct types and\r\nunused (not called) private functions that were originally proposed as\r\nlinters in https://github.com/MystenLabs/sui/pull/11212\r\n\r\n## Test Plan \r\n\r\nWill add tests\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\nThe compiler features additional warnings for unused private functions\r\nand unused (uninstantiated) struct types.",
          "timestamp": "2023-06-21T01:55:48-07:00",
          "tree_id": "51d5ba90976183663ec0d882aae271ace829f27f",
          "url": "https://github.com/MystenLabs/sui/commit/968605c8710d1863727a9a2cf5cb736b1e2bde00"
        },
        "date": 1687338492396,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 106230832,
            "range": "± 3601202",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 310273,
            "range": "± 5333",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "108701016+joyqvq@users.noreply.github.com",
            "name": "Joy Wang",
            "username": "joyqvq"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "22089dfd92aa347555bf35ba936beb15d658541e",
          "message": "chore: fix feature flags (#12596)\n\n## Description \r\n\r\nFix clippy errors on methods not found\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-21T11:10:36-04:00",
          "tree_id": "8473ee7f6d6dc0698b8ed5be39336d6d7d19c0b9",
          "url": "https://github.com/MystenLabs/sui/commit/22089dfd92aa347555bf35ba936beb15d658541e"
        },
        "date": 1687360787402,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 108748119,
            "range": "± 3725448",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 267366,
            "range": "± 10767",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "210e3257cfa244a9a028b888d5bb7e545b506175",
          "message": "Separate effects_v1 file (#12591)\n\n## Description \r\n\r\nMove EffectsV1 to a separate file from the trait.\r\n\r\n## Test Plan \r\n\r\nTrivial refactoring.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-21T09:08:53-07:00",
          "tree_id": "2171aa3085ac1d268a46b64b66ca48e1aa462e8a",
          "url": "https://github.com/MystenLabs/sui/commit/210e3257cfa244a9a028b888d5bb7e545b506175"
        },
        "date": 1687364621802,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 149645365,
            "range": "± 4284974",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 320365,
            "range": "± 27170",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d8d500edd17349930610b75cfd30c3d69dfb400",
          "message": "indexer: unique transaction recipient row (#12597)\n\n## Description \r\n\r\nBefore this PR, `recipients` table had multiple rows for an recipient if\r\nthe recipient received multiple objects, this PR changed it to one row.\r\n\r\nOtherwise, on the reading side, I will have to group by transaction\r\ndigest to make sure the returned tx page will not have duplicate tx,\r\nwhich is super slow.\r\n\r\n## Test Plan \r\n\r\n1. cargo run indexer as a writer\r\n2. cargo run indexer as a reader and verify `recipients` related\r\nendpoints;\r\n```\r\ncurl --location --request POST http://127.0.0.1:3030 \\\r\n--header 'Content-Type: application/json' \\\r\n--data-raw '{\r\n    \"jsonrpc\": \"2.0\",\r\n    \"id\": 1,\r\n    \"method\": \"suix_queryTransactionBlocks\",\r\n    \"params\": [\r\n        {\r\n            \"filter\": {\r\n                \"FromOrToAddress\": \"0x3dc7a8a21f5d3bc17337260079688d8aefb76f27978e7ec082a5fb0d06bc8b39\"\r\n            }\r\n        },\r\n        null,\r\n        10,\r\n        false\r\n    ]\r\n}'\r\n{\"jsonrpc\":\"2.0\",\"error\":{\"code\":-32602,\"message\":\"invalid type: string \\\"0x3dc7a8a21f5d3bc17337260079688d8aefb76f27978e7ec082a5fb0d06bc8b39\\\", expected struct variant TransactionFilter::FromOrToAddress at line 4 column 103\"},\"id\":1}%                                                                                                                                          \r\n\r\ncurl --location --request POST http://127.0.0.1:3030 \\\r\n--header 'Content-Type: application/json' \\\r\n--data-raw '{\r\n    \"jsonrpc\": \"2.0\",\r\n    \"id\": 1,\r\n    \"method\": \"suix_queryTransactionBlocks\",\r\n    \"params\": [\r\n        {\r\n            \"filter\": {\r\n                \"FromOrToAddress\": {addr: \"0x3dc7a8a21f5d3bc17337260079688d8aefb76f27978e7ec082a5fb0d06bc8b39\"}\r\n            }\r\n        },\r\n        null,\r\n        10,\r\n        false\r\n    ]\r\n}'\r\n{\"jsonrpc\":\"2.0\",\"error\":{\"code\":-32700,\"message\":\"Parse error\"},\"id\":null}%                                                                                                              \r\ncurl --location --request POST http://127.0.0.1:3030 \\\r\n--header 'Content-Type: application/json' \\\r\n--data-raw '{\r\n    \"jsonrpc\": \"2.0\",\r\n    \"id\": 1,\r\n    \"method\": \"suix_queryTransactionBlocks\",\r\n    \"params\": [\r\n        {\r\n            \"filter\": {\r\n                \"FromOrToAddress\": {\"addr\": \"0x3dc7a8a21f5d3bc17337260079688d8aefb76f27978e7ec082a5fb0d06bc8b39\"}\r\n            }\r\n        },\r\n        null,\r\n        10,\r\n        false\r\n    ]\r\n}'\r\n{\"jsonrpc\":\"2.0\",\"result\":{\"data\":[{\"digest\":\"7CuBm1AnLgkBMB6GiEn5d3RizznF5LbawjJTs8A5dcXF\",\"timestampMs\":\"1681318800000\",\"checkpoint\":\"0\"}],\"nextCursor\":\"7CuBm1AnLgkBMB6GiEn5d3RizznF5LbawjJTs8A5dcXF\",\"hasNextPage\":false},\"id\":1}%                                                                                                                                              \r\n\r\ncurl --location --request POST http://127.0.0.1:3030 \\\r\n--header 'Content-Type: application/json' \\\r\n--data-raw '{\r\n    \"jsonrpc\": \"2.0\",\r\n    \"id\": 1,\r\n    \"method\": \"suix_queryTransactionBlocks\",\r\n    \"params\": [\r\n        {\r\n            \"filter\": {\r\n                \"FromAndToAddress\": {\"from\": \"0x0000000000000000000000000000000000000000000000000000000000000000\", \"to\": \"0x3dc7a8a21f5d3bc17337260079688d8aefb76f27978e7ec082a5fb0d06bc8b39\"}\r\n            }\r\n        },\r\n        null,\r\n        10,\r\n        false\r\n    ]\r\n}'\r\n{\"jsonrpc\":\"2.0\",\"result\":{\"data\":[{\"digest\":\"7CuBm1AnLgkBMB6GiEn5d3RizznF5LbawjJTs8A5dcXF\",\"timestampMs\":\"1681318800000\",\"checkpoint\":\"0\"}],\"nextCursor\":\"7CuBm1AnLgkBMB6GiEn5d3RizznF5LbawjJTs8A5dcXF\",\"hasNextPage\":false},\"id\":1}%       \r\n```\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-21T12:33:25-04:00",
          "tree_id": "3386d15fe364bba77f64f990ec700633be9dbcb0",
          "url": "https://github.com/MystenLabs/sui/commit/1d8d500edd17349930610b75cfd30c3d69dfb400"
        },
        "date": 1687366111690,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 159475625,
            "range": "± 4781062",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 312863,
            "range": "± 73031",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "williamprincesmith@gmail.com",
            "name": "William Smith",
            "username": "williampsmith"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d5047bd55567201ab5133f4e2236ad07e49f27d",
          "message": "Perform full checkpoint pruning at epoch boundary in simtests (#12529)\n\n## Description \r\n\r\nThis is just to be extra sure that we are testing the worst case tx/fx\r\npruning in order to maximize hitting edge cases. At epoch boundary,\r\nafter the epoch store has been swapped, we prune all eligible\r\ntransactions and effects (which should be all existing transactions and\r\neffects at that point), and ensure that we can continue. This more\r\nstrongly confirms that the protocol does not depend on prune-eligible\r\ntransactions and effects at any point.\r\n\r\n## Test Plan \r\n\r\nAll reconfig simtests will exercise this\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-21T10:58:45-07:00",
          "tree_id": "1725ceb94f10d356447757fa3cc5549b94a2f8f2",
          "url": "https://github.com/MystenLabs/sui/commit/6d5047bd55567201ab5133f4e2236ad07e49f27d"
        },
        "date": 1687370867244,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 109502425,
            "range": "± 9505267",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 315346,
            "range": "± 27858",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aschran@mystenlabs.com",
            "name": "Andrew Schran",
            "username": "aschran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "824887a3a9eafa125abcbbca03020de134255670",
          "message": "Add metrics for anemo socket buffer sizes. (#12449)",
          "timestamp": "2023-06-21T12:54:00-07:00",
          "tree_id": "2d3535819bf2fd6fcaccce45b3a324dbde6761e6",
          "url": "https://github.com/MystenLabs/sui/commit/824887a3a9eafa125abcbbca03020de134255670"
        },
        "date": 1687377797784,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 107094823,
            "range": "± 5337127",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 362324,
            "range": "± 32057",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eugene@mystenlabs.com",
            "name": "Eugene Boguslavsky",
            "username": "ebmifa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87a344e10204b484684afc14868a6da57598f79e",
          "message": "Fixing checking for release notes (#12616)\n\n## Description \r\nFixing checking for release notes\r\n\r\n## Test Plan \r\n👀",
          "timestamp": "2023-06-21T15:34:18-07:00",
          "tree_id": "076e8744eba816a00bc858b85761913a62b9399e",
          "url": "https://github.com/MystenLabs/sui/commit/87a344e10204b484684afc14868a6da57598f79e"
        },
        "date": 1687387582496,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 108869707,
            "range": "± 5080376",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 261533,
            "range": "± 21810",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rvantonder@gmail.com",
            "name": "Rijnard van Tonder",
            "username": "rvantonder"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8aed75fe20be0d8aa33678ba7d32beb300d9c9d4",
          "message": "move: source service scaffolding (#12500)\n\n## Description \r\n\r\nThis adds a basic server (with `actix`) for serving source.\r\n\r\n## Test Plan \r\n\r\nAdded a basic test that will exercise end-to-end functionality later.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-06-22T00:34:06Z",
          "tree_id": "691579995ab407c880c8c89a5a4888b205dad6ca",
          "url": "https://github.com/MystenLabs/sui/commit/8aed75fe20be0d8aa33678ba7d32beb300d9c9d4"
        },
        "date": 1687394716184,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 106194996,
            "range": "± 3614753",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 352980,
            "range": "± 26990",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "115710624+wiggins-dev@users.noreply.github.com",
            "name": "wiggins-dev",
            "username": "wiggins-dev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "652fa40efe5c90bf96a37998d6d59468ed93ddc3",
          "message": "[deepbook] Introducing the implementation of self-matching prevention.  (#12464)\n\n## Description\r\n\r\nThe self-matching prevention mechanism ensures that the matching engine\r\ntakes measures to avoid unnecessary trades\r\nwhen matching a user's buy/sell order with their own sell/buy order.\r\n\r\nThere are four Self-Trade Prevention Options.\r\n1. Decrement & cancel: Cancel smaller order and decrement larger order\r\nby the smaller size.\r\n                                         If the same size, cancel both.\r\n2. Cancel oldest: Cancel older (resting) order in full.\r\nContinue to execute the newer taking order.\r\n3. Cancel newest: Cancel newer (taking) order in full.\r\nLet the old resting order remain on the order book.\r\n4. Cancel both: Cancel both orders immediately.\r\n\r\nFor now, we have only implemented the behavior of canceling the oldest\r\norder.\r\nHowever, we have reserved the self_matching_prevention option as a\r\nparameter\r\nin case we need to implement other behaviors in the future.\r\nThis approach allows us to maintain backward compatibility\r\nand provides us with the capability to extend functionality.\r\n\r\n## Test Plan\r\n\r\ncd to deepbook dir and run \"sui move test\"\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [✅] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [✅] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\nImplemented Self-matching prevention through canceling the oldest order.\r\n\r\n---------\r\n\r\n---------\r\n\r\nCo-authored-by: Mark Logan <mark@mystenlabs.com>",
          "timestamp": "2023-06-22T00:48:37-04:00",
          "tree_id": "fc11bf6edc036bbc4c594de0dff11dd2d7a1cfcc",
          "url": "https://github.com/MystenLabs/sui/commit/652fa40efe5c90bf96a37998d6d59468ed93ddc3"
        },
        "date": 1687410234965,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 154526604,
            "range": "± 5929145",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 310855,
            "range": "± 12024",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "027d976ae3d698eec0aad2942d39b1c58cdfe83b",
          "message": "Enable simplified_unwrap_then_delete (#12579)\n\n## Description \r\n\r\nThis PR adds protocol config version 16, and enables a new feature flag\r\nsimplified_unwrap_then_delete.\r\nUnder this new feature flag, we no longer consult the object store when\r\nconstructing unwrapped_then_deleted in the effects, and no longer\r\ninclude wrapped tombstones in state accumulator. It will require a\r\nre-accumulation at epoch change during the upgrade.\r\n\r\n## Test Plan \r\n\r\nAdded tests in previous CI.\r\nWill also sync testnet, and deploy this upgrade on devnet.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [X] protocol change\r\n- [X] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [X] breaking change for FNs (FN binary must upgrade)\r\n- [X] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\nPrior to this change, unwrapped_then_deleted field in TransactionEffects\r\nonly contain unwrapped then deleted objects that previously existed in\r\nthe store (i.e. was once unwrapped in its lifetime). If an object was\r\nalways wrapped since creation and was never unwrapped ever, it wouldn't\r\nshow up in unwrapped_then_deleted. This this change, we no longer makes\r\nsuch distinction. As long as an object is unwrapped then deleted in a\r\ntransaction, it would show up in effects regardless of its history. This\r\nsimplifies the logic of handling them significantly.\r\nTo properly maintain the state of the system accurately with this\r\nchange, at the epoch boundary when this upgrades happens, we must\r\nre-accumulate the state root hash of all objects in the store. This\r\nprocess takes a few seconds on mainnet. Testnet can take a much longer\r\ntime (30s-1min) since it contains significantly more objects. Users may\r\nobserve a brief slow down of the network during epoch change when this\r\nis applied.",
          "timestamp": "2023-06-22T09:50:41-07:00",
          "tree_id": "f687f9e6e3f679a6a62a6ca9684f456046c57533",
          "url": "https://github.com/MystenLabs/sui/commit/027d976ae3d698eec0aad2942d39b1c58cdfe83b"
        },
        "date": 1687453350532,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 154656072,
            "range": "± 5245901",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 323700,
            "range": "± 23685",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b8bab73e83926880d9c5cc141ca8f3d4924e381",
          "message": "Remove unused module (#12615)",
          "timestamp": "2023-06-22T09:57:02-07:00",
          "tree_id": "fadcd5453c9b9235e2fc46208356d34d77598620",
          "url": "https://github.com/MystenLabs/sui/commit/0b8bab73e83926880d9c5cc141ca8f3d4924e381"
        },
        "date": 1687453698909,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 158464754,
            "range": "± 4561807",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 389869,
            "range": "± 51778",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}