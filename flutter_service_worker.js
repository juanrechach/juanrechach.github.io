'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "f89db28227ec48576c4247890b4446f8",
"main.dart.js": "5b75380fe02aa2e3685d27202e48f2fd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "11e1a177d57c5da2bc6e3a6acc3010f4",
"assets/AssetManifest.bin": "f23c985c52c7c8213295ee3b94d98301",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "c5e08fe14034a5eaa259bbdaeb1cc3d5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/AssetManifest.bin.json": "b6bb4857171287ca50a44b8bf8ed5748",
"assets/fonts/MaterialIcons-Regular.otf": "5500dfe9f12c14dc038a9061cdc58cef",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "32552b5cc0a8fe183d9237e38eb60d61",
"assets/assets/data/multimaps.json": "d92ce41e729ea5d859fef56edcc428e7",
"assets/assets/boarditems/lasers/l1b.png": "a35e0973197ab62aff5de02a1019a633",
"assets/assets/boarditems/lasers/l2g.png": "299a988c04bb4e74fd7c6c4910b21188",
"assets/assets/boarditems/lasers/l2b.png": "dbb13b7f6b3926cee7e0e4d89b8ff3bc",
"assets/assets/boarditems/lasers/l2h.png": "ad2921dcca4486a46df8d4f05b663a25",
"assets/assets/boarditems/lasers/laserbeam2.png": "7fdcf11ac7dcd8382f9a6b3eaafafcdf",
"assets/assets/boarditems/lasers/l3b.png": "dbc36948debbe61d60da63bc501fdf06",
"assets/assets/boarditems/lasers/l1h.png": "2302176d6419ef73d925fb891ddf2041",
"assets/assets/boarditems/lasers/l3d.png": "7ae999cc74ab1c9ed91352cb0c286265",
"assets/assets/boarditems/lasers/laserflash.png": "eaa1673fe2eb3cdce3b46054e59bc3e3",
"assets/assets/boarditems/lasers/l3h.png": "77345ce2548f6ba82b6e0f491bc3567b",
"assets/assets/boarditems/lasers/laserbeam1.png": "ba6db0915fe6bd98242a086faeffe9ca",
"assets/assets/boarditems/lasers/laserbeam3.png": "1ed15c98067d3095f75003f0286a4a4e",
"assets/assets/boarditems/lasers/l1d.png": "6f057a33202400590e2269b10ab4bdf7",
"assets/assets/boarditems/lasers/l3g.png": "fd56adb30582358ff92f0fb0c6033d71",
"assets/assets/boarditems/lasers/l1g.png": "12d62500481f81451d42390e264f9658",
"assets/assets/boarditems/lasers/l2d.png": "6f5f67edfab4cc3bf643315455b0ea2e",
"assets/assets/boarditems/c4.png": "dab1f627b6de1844af91f661c645f3c6",
"assets/assets/boarditems/e_empty.png": "d3075b8db81a69fcb888bdeed142037e",
"assets/assets/boarditems/e4.png": "9c690847dce5285551220544382bf582",
"assets/assets/boarditems/wall1.png": "6e99fe6c942ba650def95af60d3143d6",
"assets/assets/boarditems/pusher_north.png": "5159537d2d1b524fccb5370da0645043",
"assets/assets/boarditems/e5.png": "c7636590164102d6c368a6edf0f5c94b",
"assets/assets/boarditems/e1.png": "cdd600ee25bfcb2aa53b933c65dab47c",
"assets/assets/boarditems/gearright.png": "e3b5e24e0903195fd496a43f95c90b74",
"assets/assets/boarditems/wall3.png": "1ee00c5cc096385717b46b5c67a89362",
"assets/assets/boarditems/ebomb.png": "d7b21e13f255ee1bf7ca51847bc3573f",
"assets/assets/boarditems/gearleft.png": "9c43443f7dafcba19fba7ab88c8afe60",
"assets/assets/boarditems/e2.png": "6ca93f309ccb75dae1a1cad4f02a7a47",
"assets/assets/boarditems/sliders/b5dfull.png": "3b65aaee2067a84e86f953a708191793",
"assets/assets/boarditems/sliders/b4b.png": "db6fd5a8b70a1bf7dd9fe0fea0a94686",
"assets/assets/boarditems/sliders/d3b.png": "979b0ea5ef74410d7660d4ef5fb31fb9",
"assets/assets/boarditems/sliders/b1bfull.png": "500ed1bb339d20d0378de95ea974ae97",
"assets/assets/boarditems/sliders/d1gfull.png": "22d0da5e66a0d25f72af42f09a628b03",
"assets/assets/boarditems/sliders/b5hfull.png": "93a18422da1dd6de8e5dfdef936a8150",
"assets/assets/boarditems/sliders/d2h.png": "734dd9c8fb54f60c2dbb3f089aae7a24",
"assets/assets/boarditems/sliders/b1d.png": "da976f6b0e37e05661a03aa4844100d5",
"assets/assets/boarditems/sliders/b4h.png": "44f615e53a889e1f424baf3bcf930211",
"assets/assets/boarditems/sliders/d4h.png": "b62486cdd1cf5542d80b1139566d79d5",
"assets/assets/boarditems/sliders/d3hfull.png": "429ba45f0858fffbbc262a512a55cfdb",
"assets/assets/boarditems/sliders/d4b.png": "19e6c86cad3d97c1d8648c68aa829658",
"assets/assets/boarditems/sliders/d3dfull.png": "9bf9a50d2c839a387c2ac12d4fa07975",
"assets/assets/boarditems/sliders/b5gfull.png": "1b93684c49b948f850ed0209e1ab3efd",
"assets/assets/boarditems/sliders/d6b.png": "3c1efdbc21b92bcc054d4d29f7ccc312",
"assets/assets/boarditems/sliders/d5h.png": "f47cdd94a05960202928389e2a5f21a8",
"assets/assets/boarditems/sliders/b5b.png": "51f3cb49350dc4191693fd17c404fdf7",
"assets/assets/boarditems/sliders/d2g.png": "5b193a8c7629d66702d495c7eb4135a3",
"assets/assets/boarditems/sliders/d1bfull.png": "164ff8b050efc0eec6fa10e288557d0a",
"assets/assets/boarditems/sliders/b4dfull.png": "4bbcddaa1e774ee2d935bc609973943c",
"assets/assets/boarditems/sliders/d5d.png": "c479459596df2d9a6c5a9bccebf4ded8",
"assets/assets/boarditems/sliders/b4gfull.png": "ff86b2538a223d7271fee5b1bec6ad33",
"assets/assets/boarditems/sliders/d6bfull.png": "a02c4e8382d92d6ae1cc52d16b61675c",
"assets/assets/boarditems/sliders/b1h.png": "af9942807e1e5ccd28ea4c52532f8d85",
"assets/assets/boarditems/sliders/b2hfull.png": "89657fa0c204db22a72936d26a308b53",
"assets/assets/boarditems/sliders/b2h.png": "ba67956578ebc3171dd21d7090f64302",
"assets/assets/boarditems/sliders/d1hfull.png": "9b49635174ebe713525d08baf10986a2",
"assets/assets/boarditems/sliders/b3gfull.png": "6c4b0dcc3fe4459651411b579128369c",
"assets/assets/boarditems/sliders/b1hfull.png": "d01de6adc3d7816c38aed06df18fc2ea",
"assets/assets/boarditems/sliders/b6h.png": "2299b525e90b1e3c2382d56ad0619a3a",
"assets/assets/boarditems/sliders/b5d.png": "53cd9a6fd068b40e73a6e33acc393097",
"assets/assets/boarditems/sliders/b6b.png": "d84da195c995b06e627cebf40e5cfd23",
"assets/assets/boarditems/sliders/b2d.png": "7a462b3d1e5650eb36001589aaa58de3",
"assets/assets/boarditems/sliders/b3d.png": "33c312eafe13d9149bdc550e605bed14",
"assets/assets/boarditems/sliders/b6bfull.png": "b9636daabcc1ee072fe997f494db0fc4",
"assets/assets/boarditems/sliders/b5g.png": "4e60d3e76bd3e0eb2fbaf2dc09d4c0e8",
"assets/assets/boarditems/sliders/d3gfull.png": "f651a8e41f490deb15de07a7ba97cb8d",
"assets/assets/boarditems/sliders/d1d.png": "e158dbd857554c8718babf9a963eafd0",
"assets/assets/boarditems/sliders/d1g.png": "6d71838b6fdd1932bac80f309abcfdac",
"assets/assets/boarditems/sliders/d3d.png": "8ab966eab53ed662771095d06efdc755",
"assets/assets/boarditems/sliders/d5b.png": "418100944343c436b19495b87322e06e",
"assets/assets/boarditems/sliders/d6h.png": "9359b5f84af59324d83ffec8c5c9f782",
"assets/assets/boarditems/sliders/d4d.png": "1dd50bd483e4456536f117945d96480c",
"assets/assets/boarditems/sliders/b1gfull.png": "46f9eb86d62947ce48e120eea236a942",
"assets/assets/boarditems/sliders/d2gfull.png": "0afba3366c1014a99a821787fcacb1dd",
"assets/assets/boarditems/sliders/b3bfull.png": "24b7880fdfb099d2853fa68aadb90e06",
"assets/assets/boarditems/sliders/b6dfull.png": "9991986db7ccbc18143f0d97d31d1632",
"assets/assets/boarditems/sliders/b4bfull.png": "4f0b78c8edf66f8f74d6a2843cfc689b",
"assets/assets/boarditems/sliders/b2b.png": "2733191b74957ab59185d67d3fdec835",
"assets/assets/boarditems/sliders/d6gfull.png": "6a7dee3124974ae203d16207a3b7a5a6",
"assets/assets/boarditems/sliders/b4hfull.png": "d365c3d6b01e8146d5660c19605894ef",
"assets/assets/boarditems/sliders/b5bfull.png": "7c92af5c35200b22f10991937f52b7e4",
"assets/assets/boarditems/sliders/d4g.png": "6eb7f54ba2a499706aee30c726568593",
"assets/assets/boarditems/sliders/d5bfull.png": "08169542530198b535a659f47f94dd41",
"assets/assets/boarditems/sliders/d3g.png": "4dc4dcebe98fbbb583b22ade834487e7",
"assets/assets/boarditems/sliders/b1g.png": "956116de25c85a1a77eb4d468d2401dd",
"assets/assets/boarditems/sliders/b4d.png": "947f02f0389675ca831f90503d0fa62b",
"assets/assets/boarditems/sliders/b5h.png": "1a35d82fb6602bd3437464429a25faca",
"assets/assets/boarditems/sliders/b1b.png": "0660091b06a88fb9e578bf467f13f4ed",
"assets/assets/boarditems/sliders/d6g.png": "35623df5093b3b5121513032bde5e4ce",
"assets/assets/boarditems/sliders/d2dfull.png": "f4b84369c2ef5e7ade1c840eea1d2fd8",
"assets/assets/boarditems/sliders/d5hfull.png": "3f7f8424ac57d922e40d1a71796d165c",
"assets/assets/boarditems/sliders/d3bfull.png": "4eea34b33fd93c1b2ee95a4761cd80b3",
"assets/assets/boarditems/sliders/d5dfull.png": "29f6d019684206853c38eaeb8987b09f",
"assets/assets/boarditems/sliders/b6gfull.png": "c8b879063444b1e90fc9aca2ff7cb1ae",
"assets/assets/boarditems/sliders/d6dfull.png": "c19f21ebe5a548e07b00356c167b3f75",
"assets/assets/boarditems/sliders/b6hfull.png": "b6fd05511a671b343782546680393264",
"assets/assets/boarditems/sliders/d2b.png": "15a1dca0ceeae34a3afc69bb2407d3bf",
"assets/assets/boarditems/sliders/d4gfull.png": "d49b9309859e9ed885b11d3a78a4f63f",
"assets/assets/boarditems/sliders/b2dfull.png": "c2c9722264134eda96ba928ba6823604",
"assets/assets/boarditems/sliders/d6hfull.png": "3aa581a4f8a466cb2fb3e6af226a8957",
"assets/assets/boarditems/sliders/d5gfull.png": "4482f028de0f6fd6e3205abd39611f00",
"assets/assets/boarditems/sliders/b3b.png": "332538d6f9fcec4ebd99f6a7a126c24a",
"assets/assets/boarditems/sliders/b2g.png": "21f6818b73960664dee62cb67aa9fcd4",
"assets/assets/boarditems/sliders/d4bfull.png": "d3ccaac5655e6be6d78cfbbc809102fa",
"assets/assets/boarditems/sliders/d1h.png": "f5107e64eee2c4fad1b12f4638961450",
"assets/assets/boarditems/sliders/d2hfull.png": "34fc792409766f42802cb38bb9f143e1",
"assets/assets/boarditems/sliders/d6d.png": "3d4342fa1ef1b3430546d46a2850c709",
"assets/assets/boarditems/sliders/d1b.png": "ea3f290698e81343dd57973caf0bb9e9",
"assets/assets/boarditems/sliders/d4hfull.png": "52c927fdd3ceb0af001742f60350ba04",
"assets/assets/boarditems/sliders/d2bfull.png": "101c5f363056fda9123aa73fcd682f1e",
"assets/assets/boarditems/sliders/d5g.png": "fa42b68cb8c59113f2f489626359dbd9",
"assets/assets/boarditems/sliders/b1dfull.png": "1bb486667f36feeacda377e8e88864c3",
"assets/assets/boarditems/sliders/b4g.png": "16cbf028b260c756c0ac49b2d67b9905",
"assets/assets/boarditems/sliders/b6g.png": "7589b23d23d61db6471b2bd10cced472",
"assets/assets/boarditems/sliders/d4dfull.png": "84138caaae9848970353b0d68f17a664",
"assets/assets/boarditems/sliders/d1dfull.png": "3f834f9abb6c72469160bd4da64c1e71",
"assets/assets/boarditems/sliders/b2bfull.png": "0b43c984ad8511e442069c15fb0c3eba",
"assets/assets/boarditems/sliders/d3h.png": "da36f38ca3996c93efc8a08ffa630d1b",
"assets/assets/boarditems/sliders/b6d.png": "2fcdebc74a86cdefa1308666be7f045f",
"assets/assets/boarditems/sliders/b2gfull.png": "f553b1b4c8319aec1de448ad2bf0f60d",
"assets/assets/boarditems/sliders/d2d.png": "269c2d7169881a027a0a5148da029706",
"assets/assets/boarditems/sliders/b3g.png": "c4d12edc05936101f8fa76d48792ac3d",
"assets/assets/boarditems/sliders/b3h.png": "e3da9fd6a9972b19a62bcd05a6075a8d",
"assets/assets/boarditems/sliders/b3hfull.png": "3651f4d1c28ee45fcb52127eae9028f0",
"assets/assets/boarditems/sliders/b3dfull.png": "fc6d3ac2911a85037c6577ab04de4a4e",
"assets/assets/boarditems/wall_south.png": "c46d974ee3a0803ce6e38f68e8f0ea37",
"assets/assets/boarditems/c5.png": "95088a7dad0e5760bdb71d4e7b1f87ce",
"assets/assets/boarditems/pusher_east.png": "2421b37a9db18b100b6a7832ff82c9bb",
"assets/assets/boarditems/pusher_springs.png": "46435c5a2a343d5404e6868601d582bf",
"assets/assets/boarditems/c2.png": "c80ca3b6df9e3bc40c51354a4b29eacd",
"assets/assets/boarditems/wall_north.png": "eb0cc8e32fbd7863a8c7562205d1f08a",
"assets/assets/boarditems/wall_east.png": "857ea19fbb52f96e4b570dee4b9c9f18",
"assets/assets/boarditems/wall2.png": "1fd6a613b71823e415da4fd593622aac",
"assets/assets/boarditems/hole.png": "de2eab6864f5b53e67c9d9858dbd1531",
"assets/assets/boarditems/c1.png": "3d2c422c1177cf4baca3301f5ab0e0e8",
"assets/assets/boarditems/e0.png": "3777b8f39da3830daf95aa2dfb284cf3",
"assets/assets/boarditems/c3.png": "2ebb3197f28afd6c9148d974eb599d85",
"assets/assets/boarditems/square.png": "e3bed47a7b0f0ce77b89ecd4d5dbf3d7",
"assets/assets/boarditems/e3.png": "6a597330f773bed73c9ba275d3b2b0ce",
"assets/assets/boarditems/wall_west.png": "e4b54197e23ef151690cb70ea69b0b4e",
"assets/assets/boarditems/c6.png": "547cfc7064eb44beb59933d3a40d1fbe",
"assets/assets/boarditems/pusher_south.png": "70ba6616c4ecb5f9b5b06d23258bd47a",
"assets/assets/boarditems/pusher_west.png": "9e4fcdeed18b34af7d13b7c627942f32",
"assets/assets/robots/robotnude.png": "49b37b9aced64d85119284e6e0257000",
"assets/assets/robots/frozenb.png": "dda858322b832e14cf4fa4bdee9fc064",
"assets/assets/robots/explblow.png": "4ba54bf0ade46f8eae2b0337d88c4654",
"assets/assets/robots/explsmoke.png": "7f53f94549f8803925abbfb6103df661",
"assets/assets/robots/explwreck3.png": "1f35f4a2037aab2e18b6b5b6f31aa8ef",
"assets/assets/robots/healingflash.png": "5646e9dbf17275296b12262feda6313f",
"assets/assets/robots/shieldbg1.png": "a0a9bc82c73b0786c4608cec059d7fb1",
"assets/assets/robots/shield0.png": "80ac8cdd424510cdfa9f1609455e65c1",
"assets/assets/robots/robotcockpitdarkred.png": "a25e4aae771d3402b383bc94ea34c7f5",
"assets/assets/robots/explwreck2.png": "8629c5402b2267033529448febb53a7d",
"assets/assets/robots/shieldbg2.png": "70aac3d59dfc08db84e9ec9cbf64d873",
"assets/assets/robots/respawnbot.png": "d7d3b92eb10cb394c8e20d88e60bef45",
"assets/assets/robots/explwreck4.png": "e343bdbc29477cd0af0b1327a26c7004",
"assets/assets/robots/robot_yellow.png": "fe6de12349057e11dc235edf641ccfa3",
"assets/assets/robots/robotcockpitred.png": "95776d3e762b275b7d706243845edc5c",
"assets/assets/robots/robot.riv": "10e3dbda9afbf66576c13fffb2092be6",
"assets/assets/robots/nrjrefill.png": "473a8e42c3e0913bdac645e49b6b79a5",
"assets/assets/robots/robotcockpitpink.png": "8b5ffaf5a74964338f231429335de287",
"assets/assets/robots/robotcockpitgreen.png": "62d44df9a0643805c4bfc51e09c1d5ef",
"assets/assets/robots/robotcockpitblue.png": "6fc7790b79006ad17588e05d57cfc3fb",
"assets/assets/robots/shield3.png": "1539dc781d21f1990b560f9a7010601a",
"assets/assets/robots/robotcockpitpurple.png": "7ab44d006949b7e605488b510d9a7536",
"assets/assets/robots/shield1.png": "b5c898853eec4330bee714e589fad885",
"assets/assets/robots/shield2.png": "0db9eab2d973e254d0ffe68ef2613a6e",
"assets/assets/robots/explwreck5.png": "9027947c401d1cc606b58b595421ddcb",
"assets/assets/robots/explwreck1.png": "e986f2adb86faa1e85e8a8341569208a",
"assets/assets/robots/robotcockpitorange.png": "00ecc392cec8ca76136490a669e110cb",
"assets/assets/robots/robotcockpitlightblue.png": "6c43b0d28c0f8fed2c3972503df0f8dd",
"assets/assets/robots/robotcockpityellow.png": "e474984e53198e1b2c1ed4c0469b6a1e",
"assets/assets/robots/explwreck6.png": "2ec824f361fb0833ce07edf00a0d0bb9",
"assets/assets/commands/bomb.png": "d7b21e13f255ee1bf7ca51847bc3573f",
"assets/assets/commands/slotfastright.png": "8810fe1a689b63cf2fbf677c905761e2",
"assets/assets/commands/autolaser.png": "96766773a3898adcf57812f872b72021",
"assets/assets/commands/slotforward.png": "4f7ba92a7e2a0514a34c64c39b8d220a",
"assets/assets/commands/slotturnleft.png": "d57830249e4d6b7400037922f4fda8fa",
"assets/assets/commands/slotlaser.png": "26648af05316c0acdddd9938fe711b4c",
"assets/assets/commands/slotblast.png": "8b27cbb6bc78dd878dc71ade43920212",
"assets/assets/commands/commands.riv": "23630a00ca0b9bb2ff68f4eed959ebdd",
"assets/assets/commands/slotbackward.png": "9a3671d7d13a0784beda25470a295674",
"assets/assets/commands/shield.png": "68d02942e5ff985b2380485f0fd8de40",
"assets/assets/commands/slotboost.png": "d9e98b45cc4db14cf0a69fd9bfcade1a",
"assets/assets/commands/partialrepair.png": "35530baa68435171c95caf0d1e15edbf",
"assets/assets/commands/xcross.png": "7675f724a6bbbeb1eff99945b153215f",
"assets/assets/commands/slotgreen.png": "d0f9d764742db2fd40192cb72b37781b",
"assets/assets/commands/slotempty.png": "f432e4613cc2b7b89af375606172dc55",
"assets/assets/commands/slotturnright.png": "15a1ae34916ee912b21c3677d1f898aa",
"assets/assets/commands/slotfastleft.png": "84b69cb4c9f66cc14e2ba121a938a5e6",
"assets/assets/background/bg4.png": "30bb5f245028fa0f1dfc6ac927795e74",
"assets/assets/background/fullbg4.png": "c3e38e8d86433fcdd5c1bc487b898641",
"assets/assets/background/groundtex/atex26.png": "46b890e8a1241daca3569bc8fd5fd9fd",
"assets/assets/background/groundtex/atex23.png": "cd2df666df884281c3a6fec0fb52317d",
"assets/assets/background/groundtex/atex13.png": "99f1941071b2c7978e13cb60d5d814c3",
"assets/assets/background/groundtex/atex10.png": "e7a2a93cf5848683cd0f0082a5e35cfc",
"assets/assets/background/groundtex/atex03.png": "ca6b427be065fa3570d907a74f210988",
"assets/assets/background/groundtex/atex08.png": "5535c5120cca5168c99684c27653e122",
"assets/assets/background/groundtex/atex05.png": "a86c380fccc724123c4dc66b7b58151a",
"assets/assets/background/groundtex/atex22.png": "504515e402b798230939747dd096fa6b",
"assets/assets/background/groundtex/atex09.png": "b32d92d01a070f280b3c76b60f74bec2",
"assets/assets/background/groundtex/atex29.png": "97aa152ade190e22fac1a5522787c3bd",
"assets/assets/background/groundtex/atex25.png": "775220151be438ba4c98bab2dd7a45d4",
"assets/assets/background/groundtex/atex07.png": "b76068b69f7b760ac42bf342acc4cc12",
"assets/assets/background/groundtex/atex20.png": "9ed3acffcec992efca19cb9b1453076d",
"assets/assets/background/groundtex/atex18.png": "b3d3c04d022c83583d3983a3418eee9b",
"assets/assets/background/groundtex/atex06.png": "3ce087507cd6f2a98b6cc9a79a8c671d",
"assets/assets/background/groundtex/atex19.png": "c660c904961a64b5eb371d2fd9a31265",
"assets/assets/background/groundtex/atex02.png": "1776416a10f069e7cf6e4c56e8e6fbca",
"assets/assets/background/groundtex/atex11.png": "903b44b84cf9f81a9aa9966196509cc3",
"assets/assets/background/groundtex/atex17.png": "090aa5757831efb8ddda40a3b8592885",
"assets/assets/background/groundtex/atex27.png": "b688148397dc89aa53d0e4b36ba09514",
"assets/assets/background/groundtex/atex24.png": "058c3f6564280a3dcadfc4f550874325",
"assets/assets/background/groundtex/atex14.png": "4ad6c0ea80d6a93b7af2098904693c90",
"assets/assets/background/groundtex/atex16.png": "be223f362eb839c1d937462622db9c9e",
"assets/assets/background/groundtex/atex28.png": "7b7ea0f65e663ade42d8037f193b81a5",
"assets/assets/background/groundtex/atex15.png": "c68f68f09f9519368f138919710ba783",
"assets/assets/background/groundtex/atex12.png": "05eb32e0468c94415dfb4936327edc6c",
"assets/assets/background/groundtex/atex04.png": "2d7f7b72b074e2c82874337260585c84",
"assets/assets/background/groundtex/atex01.png": "2de1fb8bd51769a254c49839675e4f02",
"assets/assets/background/groundtex/atex21.png": "3c4778310e070f7befa632abd781dc40",
"assets/assets/background/background/gtex30.png": "33ac635e4bcbdbb6428c3a77cd1ab1c1",
"assets/assets/background/background/gtex26.png": "284267c197acefe37128f263018aaf36",
"assets/assets/background/background/gtex19.png": "772c1608f77a62525af5637fafdb7412",
"assets/assets/background/background/gtex12.png": "a31c53a5332a9960013971ed489751de",
"assets/assets/background/background/gtex34.png": "c42761c4e9d1c469a16c5af7436796ea",
"assets/assets/background/background/gtex01.png": "1ba771afa4c41854f672cb6e422a9b47",
"assets/assets/background/background/gtex21.png": "ed01111200572e21cd06132523e0733b",
"assets/assets/background/background/gtex23.png": "f91cca162551ae9c2103d4c729c69261",
"assets/assets/background/background/gtex25.png": "ad0464c201a7fe94fb9b6cf242727f56",
"assets/assets/background/background/gtex05.png": "790ce943ecf0d0ae2a29269937661e41",
"assets/assets/background/background/gtex06.png": "6cc55d2bb928d963e9f4dc1e57ebab70",
"assets/assets/background/background/gtex13.png": "278f979ba123d0dbf3372e3d96c5a9e3",
"assets/assets/background/background/gtex07.png": "8051ec28725d04bd00b6cd98dd3d4f37",
"assets/assets/background/background/gtex28.png": "f2b77e7ca68caf4ebab2fe380c3ff06f",
"assets/assets/background/background/gtex33.png": "1e9526c3dc93bff5910f57b3eb1b30ef",
"assets/assets/background/background/gtex11.png": "25bd2e3c2249776ec021a557a92807a0",
"assets/assets/background/background/gtex14.png": "8f3eb34322f586580c92f3aede3e9fa6",
"assets/assets/background/background/gtex22.png": "92709fcad327f0466265b9bf174e6f35",
"assets/assets/background/background/gtex04.png": "6c87f9f2de03e9e9df99cf39a39d8121",
"assets/assets/background/background/gtex40.png": "e3bed47a7b0f0ce77b89ecd4d5dbf3d7",
"assets/assets/background/background/gtex09.png": "16e917da02e7be08324c323c4d9f048e",
"assets/assets/background/background/gtex35.png": "63b7e41d1cec1ce4e95392fa96883925",
"assets/assets/background/background/gtex37.png": "c7a6a0e940e7eb7521a832a7d32869bd",
"assets/assets/background/background/gtex16.png": "19c21c27496ec1859543117e326681cf",
"assets/assets/background/background/gtex39.png": "8f58078c91146ee4350dcb4c315780ee",
"assets/assets/background/background/gtex24.png": "ee14596341772c540cfb7d384fa257f4",
"assets/assets/background/background/gtex10.png": "3b13b5c57095396bf4bbc112645a17ad",
"assets/assets/background/background/gtex32.png": "25c69ebc79db2ed397046a26803aca6e",
"assets/assets/background/background/gtex38.png": "6418d8b0cca46008e4a5333f4fd2f1a2",
"assets/assets/background/background/gtex08.png": "fab944b333da000a482c97948e4a2da6",
"assets/assets/background/background/gtex02.png": "2195eaa6913ec401ae63eacf057e1b54",
"assets/assets/background/background/gtex18.png": "d965b847aa75cd18e8016d6e023d427e",
"assets/assets/background/background/gtex03.png": "93f30a394ec9971b7ec942099242cdd6",
"assets/assets/background/background/gtex29.png": "baa75fff28bd36e69c8fe3f97821181b",
"assets/assets/background/background/gtex36.png": "5b5b3adacfbeb28e3e358526a3eff38d",
"assets/assets/background/background/gtex17.png": "6fd7ff0da302e8e45b2b539b82cc47b2",
"assets/assets/background/background/gtex31.png": "d08cc53bb9ab60940fff75ba1c6cbfa6",
"assets/assets/background/background/gtex27.png": "9958f25279cb6be036945c874145d306",
"assets/assets/background/background/gtex15.png": "c12efbbd25bb505c541faa58dd79afba",
"assets/assets/background/background/gtex20.png": "787c118ffdab45c3a5bdc6af06d3922b",
"assets/assets/sounds/u_uiapparcube.wav": "e57739a9affcaa26133f058510d20561",
"assets/assets/sounds/fall.wav": "08a2a124fdc40b950491032f115ccba7",
"assets/assets/sounds/markreached.wav": "0952d5a55e08bacd15086327f2bffd5c",
"assets/assets/sounds/u_alarm.wav": "a322400ee0d929782ad6d9b2661a24ad",
"assets/assets/sounds/u_uidivpos.wav": "d5b4816110d90fcbe03cf285069dcd3e",
"assets/assets/sounds/bombexplosion.wav": "b3367de2c7c4cdfe788f6d928a841a30",
"assets/assets/sounds/getpowerup.wav": "78d6c98c6e2155dc74d5e3b96e5629a7",
"assets/assets/sounds/z_nrjrefill.wav": "36f6b916df47d1fa188f77a0364c67a7",
"assets/assets/sounds/u_uidivneg.wav": "2b86542b76f3054d122534cd27e02d83",
"assets/assets/sounds/u_uicommand.wav": "ac31d9ddaa8dd3428b08915584bb247f",
"assets/assets/sounds/xlaser0.wav": "b1f680943c4058c966d126ded1038f6d",
"assets/assets/sounds/pusheron.wav": "3c7c2b9513fd9f878216f57e83f16caf",
"assets/assets/sounds/bouncex.wav": "f51aeca475d4e625cc876092ca303efe",
"assets/assets/sounds/direction.wav": "db1b0d27abf64a15fcebd65bbb26545b",
"assets/assets/sounds/z_beltmove.wav": "f9de8b5bda5c0579c886ce931aff22c0",
"assets/assets/sounds/bouncey.wav": "f51aeca475d4e625cc876092ca303efe",
"assets/assets/sounds/freezin.wav": "cf6260af6e0cbbd07b566e03e5a800d6",
"assets/assets/sounds/turbo.wav": "8b81b63b81a34cda034dc24a44a65335",
"assets/assets/sounds/posx.wav": "2e526b4e548798f01a52ed1f94cea672",
"assets/assets/sounds/clic.wav": "19fd16f42849301ea1940cfae70b6a9b",
"assets/assets/sounds/nrjrefill.wav": "2105832eece49f98d27691583df8ee8a",
"assets/assets/sounds/u_uiselect.wav": "bb0d1923ff0e8b945247ba3fe7bfbdef",
"assets/assets/sounds/u_uislider.wav": "b930d9b70d176adbf51c672c43ebc28e",
"assets/assets/sounds/u_uihoover.wav": "bfc452ea1ab442e3d11de4bb429c4ba2",
"assets/assets/sounds/shieldhit.wav": "03283f0fe7243db64edc46fc85c311ba",
"assets/assets/sounds/blast.wav": "0a0e99b9c6bc5f915b4f1a253ff1d0ec",
"assets/assets/sounds/z_botexplosion.wav": "bae024208af8bf058591df33b81664df",
"assets/assets/sounds/u_invitation.wav": "ec3b5c0243eda56f2327036ad43366b4",
"assets/assets/sounds/autolaser.wav": "6557e61a116fb9b0d86e1aa6bdf967cb",
"assets/assets/sounds/lasershot.wav": "b05d8979bf6429c80e967b77df5acaff",
"assets/assets/sounds/respawn.wav": "49e885c58ba7bdc67994bb07f00a8863",
"assets/assets/sounds/z_damage.wav": "d6d2859e5e3e36278eb57561f9097426",
"assets/assets/sounds/u_validation.wav": "ac4e19ac9d23e00655c51ccbc8f0237f",
"assets/assets/sounds/simplebelts.wav": "c316376ab8efa3a36403429e670ab61c",
"assets/assets/sounds/z_bombexplosion.wav": "d62cdff38d59a6734faea97493e86b80",
"assets/assets/sounds/z_fall.wav": "4df8f57e9e8ce76a7da6833992b3a2ff",
"assets/assets/sounds/botexplosion.wav": "7a13bdfc30876821de92bba7dd4aa257",
"assets/assets/sounds/u_uinewuser.wav": "2b1d9e650771ba4cfd3c02c125255b1a",
"assets/assets/sounds/pushersoff.wav": "653c80d1256440809aa4001f5fce6cb6",
"assets/assets/sounds/boardlasers.wav": "dfa6a1fba78884faee09226d670ab462",
"assets/assets/sounds/posy.wav": "2e526b4e548798f01a52ed1f94cea672",
"assets/assets/sounds/bombdrop.wav": "c996b8c490e02bd02aa536ff3d988aff",
"assets/assets/sounds/z_freezin.wav": "3423c59f0aaf5b4e23ac19a0f8eb8189",
"assets/assets/sounds/gears.wav": "29a26a9cc1d3218590cd3d3b090a6fbb",
"assets/assets/sounds/u_uiclic.wav": "3489db8f9ca1ee4540373ee4fc458014",
"assets/assets/sounds/damage.wav": "5bfe992872e3d8cabe01da2ab73e3a9b",
"assets/assets/sounds/shieldin.wav": "4fdc73712f9332e389aaf598bf3d5d42",
"assets/assets/sounds/z_pusher.wav": "b3053b38aa1668db8945a9d9a274d1c8",
"assets/assets/sounds/z_blast.wav": "53fe81bd9b231ec5424c6cc5f8be52b5",
"assets/assets/sounds/u_uibeep.wav": "be175ffdceef177cf64a79f6c3fbbff6",
"assets/assets/sounds/shieldout.wav": "9d3ce7385136fda667d52d250913c077",
"manifest.json": "3fc29f9294b755bca0378065b89e216e",
"flutter_bootstrap.js": "f2d60e07dcaf0b6852c39c568d0de096",
"canvaskit/chromium/canvaskit.js.symbols": "9961e966e98a802d73942d48b15b86e7",
"canvaskit/chromium/canvaskit.wasm": "407d7dd73b05e38e5cafa7b789e22feb",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/canvaskit.wasm": "1febcf3fdbbfb632728ab3902c386b44",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js.symbols": "6c749208f75e81d9628fa894d73bfbdc",
"canvaskit/skwasm.wasm": "a2021418f5cb63318cbe273e2e75f877",
"canvaskit/canvaskit.js.symbols": "b7494490812ea0b4c2cbb3969019be96",
"canvaskit/skwasm.js": "ede049bc1ed3a36d9fff776ee552e414",
"index.html": "08ca76644a805d3f718ace0fe5a83d91",
"/": "08ca76644a805d3f718ace0fe5a83d91"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
