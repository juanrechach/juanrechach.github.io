'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"version.json": "11e1a177d57c5da2bc6e3a6acc3010f4",
"manifest.json": "3fc29f9294b755bca0378065b89e216e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/AssetManifest.bin.json": "820e210fab8e874633e6dbdd300a1071",
"assets/AssetManifest.bin": "09f311985800991bce708bbd5e91a711",
"assets/AssetManifest.json": "fcb21a6afca0ee4ef1684227dce33414",
"assets/assets/boarditems/c5.png": "95088a7dad0e5760bdb71d4e7b1f87ce",
"assets/assets/boarditems/square.png": "e3bed47a7b0f0ce77b89ecd4d5dbf3d7",
"assets/assets/boarditems/c2.png": "c80ca3b6df9e3bc40c51354a4b29eacd",
"assets/assets/boarditems/wall.png": "6e99fe6c942ba650def95af60d3143d6",
"assets/assets/boarditems/e_empty.png": "d3075b8db81a69fcb888bdeed142037e",
"assets/assets/boarditems/e4.png": "9c690847dce5285551220544382bf582",
"assets/assets/boarditems/pusher_east.png": "2421b37a9db18b100b6a7832ff82c9bb",
"assets/assets/boarditems/e1.png": "cdd600ee25bfcb2aa53b933c65dab47c",
"assets/assets/boarditems/lasers/l3g.png": "fd56adb30582358ff92f0fb0c6033d71",
"assets/assets/boarditems/lasers/l2b.png": "dbb13b7f6b3926cee7e0e4d89b8ff3bc",
"assets/assets/boarditems/lasers/l2d.png": "6f5f67edfab4cc3bf643315455b0ea2e",
"assets/assets/boarditems/lasers/l2h.png": "ad2921dcca4486a46df8d4f05b663a25",
"assets/assets/boarditems/lasers/l2g.png": "299a988c04bb4e74fd7c6c4910b21188",
"assets/assets/boarditems/lasers/l3b.png": "dbc36948debbe61d60da63bc501fdf06",
"assets/assets/boarditems/lasers/l1d.png": "6f057a33202400590e2269b10ab4bdf7",
"assets/assets/boarditems/lasers/laserbeam2.png": "7fdcf11ac7dcd8382f9a6b3eaafafcdf",
"assets/assets/boarditems/lasers/l1b.png": "a35e0973197ab62aff5de02a1019a633",
"assets/assets/boarditems/lasers/l3d.png": "7ae999cc74ab1c9ed91352cb0c286265",
"assets/assets/boarditems/lasers/l1g.png": "12d62500481f81451d42390e264f9658",
"assets/assets/boarditems/lasers/laserbeam3.png": "1ed15c98067d3095f75003f0286a4a4e",
"assets/assets/boarditems/lasers/l3h.png": "77345ce2548f6ba82b6e0f491bc3567b",
"assets/assets/boarditems/lasers/l1h.png": "2302176d6419ef73d925fb891ddf2041",
"assets/assets/boarditems/lasers/laserbeam1.png": "ba6db0915fe6bd98242a086faeffe9ca",
"assets/assets/boarditems/lasers/laserflash.png": "eaa1673fe2eb3cdce3b46054e59bc3e3",
"assets/assets/boarditems/gearright.png": "e3b5e24e0903195fd496a43f95c90b74",
"assets/assets/boarditems/wall_south.png": "c46d974ee3a0803ce6e38f68e8f0ea37",
"assets/assets/boarditems/e0.png": "3777b8f39da3830daf95aa2dfb284cf3",
"assets/assets/boarditems/ebomb.png": "d7b21e13f255ee1bf7ca51847bc3573f",
"assets/assets/boarditems/c6.png": "547cfc7064eb44beb59933d3a40d1fbe",
"assets/assets/boarditems/pusher_north.png": "5159537d2d1b524fccb5370da0645043",
"assets/assets/boarditems/sliders/d1hfull.png": "9b49635174ebe713525d08baf10986a2",
"assets/assets/boarditems/sliders/d3hfull.png": "429ba45f0858fffbbc262a512a55cfdb",
"assets/assets/boarditems/sliders/b6hfull.png": "b6fd05511a671b343782546680393264",
"assets/assets/boarditems/sliders/d5gfull.png": "4482f028de0f6fd6e3205abd39611f00",
"assets/assets/boarditems/sliders/b2h.png": "ba67956578ebc3171dd21d7090f64302",
"assets/assets/boarditems/sliders/d1g.png": "6d71838b6fdd1932bac80f309abcfdac",
"assets/assets/boarditems/sliders/d5h.png": "f47cdd94a05960202928389e2a5f21a8",
"assets/assets/boarditems/sliders/d4gfull.png": "d49b9309859e9ed885b11d3a78a4f63f",
"assets/assets/boarditems/sliders/d3bfull.png": "4eea34b33fd93c1b2ee95a4761cd80b3",
"assets/assets/boarditems/sliders/b3bfull.png": "24b7880fdfb099d2853fa68aadb90e06",
"assets/assets/boarditems/sliders/d4g.png": "6eb7f54ba2a499706aee30c726568593",
"assets/assets/boarditems/sliders/d5g.png": "fa42b68cb8c59113f2f489626359dbd9",
"assets/assets/boarditems/sliders/b6b.png": "d84da195c995b06e627cebf40e5cfd23",
"assets/assets/boarditems/sliders/b1d.png": "da976f6b0e37e05661a03aa4844100d5",
"assets/assets/boarditems/sliders/d2dfull.png": "f4b84369c2ef5e7ade1c840eea1d2fd8",
"assets/assets/boarditems/sliders/b1dfull.png": "1bb486667f36feeacda377e8e88864c3",
"assets/assets/boarditems/sliders/b5d.png": "53cd9a6fd068b40e73a6e33acc393097",
"assets/assets/boarditems/sliders/b1gfull.png": "46f9eb86d62947ce48e120eea236a942",
"assets/assets/boarditems/sliders/d4hfull.png": "52c927fdd3ceb0af001742f60350ba04",
"assets/assets/boarditems/sliders/d1gfull.png": "22d0da5e66a0d25f72af42f09a628b03",
"assets/assets/boarditems/sliders/b6d.png": "2fcdebc74a86cdefa1308666be7f045f",
"assets/assets/boarditems/sliders/d2g.png": "5b193a8c7629d66702d495c7eb4135a3",
"assets/assets/boarditems/sliders/b2g.png": "21f6818b73960664dee62cb67aa9fcd4",
"assets/assets/boarditems/sliders/b5g.png": "4e60d3e76bd3e0eb2fbaf2dc09d4c0e8",
"assets/assets/boarditems/sliders/d2b.png": "15a1dca0ceeae34a3afc69bb2407d3bf",
"assets/assets/boarditems/sliders/d5d.png": "c479459596df2d9a6c5a9bccebf4ded8",
"assets/assets/boarditems/sliders/d6h.png": "9359b5f84af59324d83ffec8c5c9f782",
"assets/assets/boarditems/sliders/b2gfull.png": "f553b1b4c8319aec1de448ad2bf0f60d",
"assets/assets/boarditems/sliders/b6g.png": "7589b23d23d61db6471b2bd10cced472",
"assets/assets/boarditems/sliders/b1hfull.png": "d01de6adc3d7816c38aed06df18fc2ea",
"assets/assets/boarditems/sliders/b4g.png": "16cbf028b260c756c0ac49b2d67b9905",
"assets/assets/boarditems/sliders/b5h.png": "1a35d82fb6602bd3437464429a25faca",
"assets/assets/boarditems/sliders/b3b.png": "332538d6f9fcec4ebd99f6a7a126c24a",
"assets/assets/boarditems/sliders/b3hfull.png": "3651f4d1c28ee45fcb52127eae9028f0",
"assets/assets/boarditems/sliders/d5b.png": "418100944343c436b19495b87322e06e",
"assets/assets/boarditems/sliders/d5bfull.png": "08169542530198b535a659f47f94dd41",
"assets/assets/boarditems/sliders/d2d.png": "269c2d7169881a027a0a5148da029706",
"assets/assets/boarditems/sliders/d4d.png": "1dd50bd483e4456536f117945d96480c",
"assets/assets/boarditems/sliders/b5gfull.png": "1b93684c49b948f850ed0209e1ab3efd",
"assets/assets/boarditems/sliders/b4gfull.png": "ff86b2538a223d7271fee5b1bec6ad33",
"assets/assets/boarditems/sliders/d1dfull.png": "3f834f9abb6c72469160bd4da64c1e71",
"assets/assets/boarditems/sliders/d4bfull.png": "d3ccaac5655e6be6d78cfbbc809102fa",
"assets/assets/boarditems/sliders/d1h.png": "f5107e64eee2c4fad1b12f4638961450",
"assets/assets/boarditems/sliders/d3g.png": "4dc4dcebe98fbbb583b22ade834487e7",
"assets/assets/boarditems/sliders/d4b.png": "19e6c86cad3d97c1d8648c68aa829658",
"assets/assets/boarditems/sliders/b6bfull.png": "b9636daabcc1ee072fe997f494db0fc4",
"assets/assets/boarditems/sliders/b3g.png": "c4d12edc05936101f8fa76d48792ac3d",
"assets/assets/boarditems/sliders/b5dfull.png": "3b65aaee2067a84e86f953a708191793",
"assets/assets/boarditems/sliders/b1bfull.png": "500ed1bb339d20d0378de95ea974ae97",
"assets/assets/boarditems/sliders/d1d.png": "e158dbd857554c8718babf9a963eafd0",
"assets/assets/boarditems/sliders/d6hfull.png": "3aa581a4f8a466cb2fb3e6af226a8957",
"assets/assets/boarditems/sliders/b3dfull.png": "fc6d3ac2911a85037c6577ab04de4a4e",
"assets/assets/boarditems/sliders/b1b.png": "0660091b06a88fb9e578bf467f13f4ed",
"assets/assets/boarditems/sliders/b2d.png": "7a462b3d1e5650eb36001589aaa58de3",
"assets/assets/boarditems/sliders/d6bfull.png": "a02c4e8382d92d6ae1cc52d16b61675c",
"assets/assets/boarditems/sliders/d6gfull.png": "6a7dee3124974ae203d16207a3b7a5a6",
"assets/assets/boarditems/sliders/b4hfull.png": "d365c3d6b01e8146d5660c19605894ef",
"assets/assets/boarditems/sliders/b3gfull.png": "6c4b0dcc3fe4459651411b579128369c",
"assets/assets/boarditems/sliders/b4bfull.png": "4f0b78c8edf66f8f74d6a2843cfc689b",
"assets/assets/boarditems/sliders/d6g.png": "35623df5093b3b5121513032bde5e4ce",
"assets/assets/boarditems/sliders/b4d.png": "947f02f0389675ca831f90503d0fa62b",
"assets/assets/boarditems/sliders/b3h.png": "e3da9fd6a9972b19a62bcd05a6075a8d",
"assets/assets/boarditems/sliders/b6gfull.png": "c8b879063444b1e90fc9aca2ff7cb1ae",
"assets/assets/boarditems/sliders/d5dfull.png": "29f6d019684206853c38eaeb8987b09f",
"assets/assets/boarditems/sliders/b2hfull.png": "89657fa0c204db22a72936d26a308b53",
"assets/assets/boarditems/sliders/d3dfull.png": "9bf9a50d2c839a387c2ac12d4fa07975",
"assets/assets/boarditems/sliders/d3h.png": "da36f38ca3996c93efc8a08ffa630d1b",
"assets/assets/boarditems/sliders/d2h.png": "734dd9c8fb54f60c2dbb3f089aae7a24",
"assets/assets/boarditems/sliders/b4b.png": "db6fd5a8b70a1bf7dd9fe0fea0a94686",
"assets/assets/boarditems/sliders/d6b.png": "3c1efdbc21b92bcc054d4d29f7ccc312",
"assets/assets/boarditems/sliders/d1b.png": "ea3f290698e81343dd57973caf0bb9e9",
"assets/assets/boarditems/sliders/b2bfull.png": "0b43c984ad8511e442069c15fb0c3eba",
"assets/assets/boarditems/sliders/b5bfull.png": "7c92af5c35200b22f10991937f52b7e4",
"assets/assets/boarditems/sliders/d2hfull.png": "34fc792409766f42802cb38bb9f143e1",
"assets/assets/boarditems/sliders/d3b.png": "979b0ea5ef74410d7660d4ef5fb31fb9",
"assets/assets/boarditems/sliders/b4h.png": "44f615e53a889e1f424baf3bcf930211",
"assets/assets/boarditems/sliders/b5b.png": "51f3cb49350dc4191693fd17c404fdf7",
"assets/assets/boarditems/sliders/b6dfull.png": "9991986db7ccbc18143f0d97d31d1632",
"assets/assets/boarditems/sliders/b2dfull.png": "c2c9722264134eda96ba928ba6823604",
"assets/assets/boarditems/sliders/d1bfull.png": "164ff8b050efc0eec6fa10e288557d0a",
"assets/assets/boarditems/sliders/b4dfull.png": "4bbcddaa1e774ee2d935bc609973943c",
"assets/assets/boarditems/sliders/b5hfull.png": "93a18422da1dd6de8e5dfdef936a8150",
"assets/assets/boarditems/sliders/b1h.png": "af9942807e1e5ccd28ea4c52532f8d85",
"assets/assets/boarditems/sliders/d2gfull.png": "0afba3366c1014a99a821787fcacb1dd",
"assets/assets/boarditems/sliders/d2bfull.png": "101c5f363056fda9123aa73fcd682f1e",
"assets/assets/boarditems/sliders/b3d.png": "33c312eafe13d9149bdc550e605bed14",
"assets/assets/boarditems/sliders/d6d.png": "3d4342fa1ef1b3430546d46a2850c709",
"assets/assets/boarditems/sliders/b1g.png": "956116de25c85a1a77eb4d468d2401dd",
"assets/assets/boarditems/sliders/d4h.png": "b62486cdd1cf5542d80b1139566d79d5",
"assets/assets/boarditems/sliders/d4dfull.png": "84138caaae9848970353b0d68f17a664",
"assets/assets/boarditems/sliders/d5hfull.png": "3f7f8424ac57d922e40d1a71796d165c",
"assets/assets/boarditems/sliders/d3gfull.png": "f651a8e41f490deb15de07a7ba97cb8d",
"assets/assets/boarditems/sliders/d6dfull.png": "c19f21ebe5a548e07b00356c167b3f75",
"assets/assets/boarditems/sliders/b2b.png": "2733191b74957ab59185d67d3fdec835",
"assets/assets/boarditems/sliders/d3d.png": "8ab966eab53ed662771095d06efdc755",
"assets/assets/boarditems/sliders/b6h.png": "2299b525e90b1e3c2382d56ad0619a3a",
"assets/assets/boarditems/wall_east.png": "857ea19fbb52f96e4b570dee4b9c9f18",
"assets/assets/boarditems/e3.png": "6a597330f773bed73c9ba275d3b2b0ce",
"assets/assets/boarditems/pusher_south.png": "70ba6616c4ecb5f9b5b06d23258bd47a",
"assets/assets/boarditems/background/gtex07.png": "8051ec28725d04bd00b6cd98dd3d4f37",
"assets/assets/boarditems/wall_west.png": "e4b54197e23ef151690cb70ea69b0b4e",
"assets/assets/boarditems/e2.png": "6ca93f309ccb75dae1a1cad4f02a7a47",
"assets/assets/boarditems/wall_north.png": "eb0cc8e32fbd7863a8c7562205d1f08a",
"assets/assets/boarditems/hole.png": "de2eab6864f5b53e67c9d9858dbd1531",
"assets/assets/boarditems/pusher_west.png": "9e4fcdeed18b34af7d13b7c627942f32",
"assets/assets/boarditems/e5.png": "c7636590164102d6c368a6edf0f5c94b",
"assets/assets/boarditems/c3.png": "2ebb3197f28afd6c9148d974eb599d85",
"assets/assets/boarditems/c1.png": "3d2c422c1177cf4baca3301f5ab0e0e8",
"assets/assets/boarditems/gearleft.png": "9c43443f7dafcba19fba7ab88c8afe60",
"assets/assets/boarditems/c4.png": "dab1f627b6de1844af91f661c645f3c6",
"assets/assets/boarditems/pusher_springs.png": "46435c5a2a343d5404e6868601d582bf",
"assets/assets/data/multimaps.json": "d92ce41e729ea5d859fef56edcc428e7",
"assets/assets/robots/explwreck3.png": "1f35f4a2037aab2e18b6b5b6f31aa8ef",
"assets/assets/robots/shield2.png": "0db9eab2d973e254d0ffe68ef2613a6e",
"assets/assets/robots/robotcockpitpink.png": "8b5ffaf5a74964338f231429335de287",
"assets/assets/robots/robotcockpitred.png": "95776d3e762b275b7d706243845edc5c",
"assets/assets/robots/healingflash.png": "5646e9dbf17275296b12262feda6313f",
"assets/assets/robots/shield0.png": "80ac8cdd424510cdfa9f1609455e65c1",
"assets/assets/robots/robotcockpityellow.png": "e474984e53198e1b2c1ed4c0469b6a1e",
"assets/assets/robots/nrjrefill.png": "473a8e42c3e0913bdac645e49b6b79a5",
"assets/assets/robots/robotcockpitgreen.png": "62d44df9a0643805c4bfc51e09c1d5ef",
"assets/assets/robots/robotcockpitblue.png": "6fc7790b79006ad17588e05d57cfc3fb",
"assets/assets/robots/robotcockpitpurple.png": "7ab44d006949b7e605488b510d9a7536",
"assets/assets/robots/shield3.png": "1539dc781d21f1990b560f9a7010601a",
"assets/assets/robots/robotcockpitorange.png": "00ecc392cec8ca76136490a669e110cb",
"assets/assets/robots/explwreck5.png": "9027947c401d1cc606b58b595421ddcb",
"assets/assets/robots/shield1.png": "b5c898853eec4330bee714e589fad885",
"assets/assets/robots/robot.riv": "10e3dbda9afbf66576c13fffb2092be6",
"assets/assets/robots/shieldbg2.png": "70aac3d59dfc08db84e9ec9cbf64d873",
"assets/assets/robots/explsmoke.png": "7f53f94549f8803925abbfb6103df661",
"assets/assets/robots/robotcockpitdarkred.png": "a25e4aae771d3402b383bc94ea34c7f5",
"assets/assets/robots/robot_yellow.png": "fe6de12349057e11dc235edf641ccfa3",
"assets/assets/robots/respawnbot.png": "d7d3b92eb10cb394c8e20d88e60bef45",
"assets/assets/robots/explwreck1.png": "e986f2adb86faa1e85e8a8341569208a",
"assets/assets/robots/explwreck6.png": "2ec824f361fb0833ce07edf00a0d0bb9",
"assets/assets/robots/explwreck2.png": "8629c5402b2267033529448febb53a7d",
"assets/assets/robots/frozenb.png": "dda858322b832e14cf4fa4bdee9fc064",
"assets/assets/robots/robotnude.png": "49b37b9aced64d85119284e6e0257000",
"assets/assets/robots/explwreck4.png": "e343bdbc29477cd0af0b1327a26c7004",
"assets/assets/robots/robotcockpitlightblue.png": "6c43b0d28c0f8fed2c3972503df0f8dd",
"assets/assets/robots/explblow.png": "4ba54bf0ade46f8eae2b0337d88c4654",
"assets/assets/robots/shieldbg1.png": "a0a9bc82c73b0786c4608cec059d7fb1",
"assets/assets/commands/slotlaser.png": "26648af05316c0acdddd9938fe711b4c",
"assets/assets/commands/partialrepair.png": "35530baa68435171c95caf0d1e15edbf",
"assets/assets/commands/slotforward.png": "4f7ba92a7e2a0514a34c64c39b8d220a",
"assets/assets/commands/slotempty.png": "f432e4613cc2b7b89af375606172dc55",
"assets/assets/commands/autolaser.png": "96766773a3898adcf57812f872b72021",
"assets/assets/commands/slotfastright.png": "8810fe1a689b63cf2fbf677c905761e2",
"assets/assets/commands/slotblast.png": "8b27cbb6bc78dd878dc71ade43920212",
"assets/assets/commands/slotgreen.png": "d0f9d764742db2fd40192cb72b37781b",
"assets/assets/commands/slotturnleft.png": "d57830249e4d6b7400037922f4fda8fa",
"assets/assets/commands/xcross.png": "7675f724a6bbbeb1eff99945b153215f",
"assets/assets/commands/shield.png": "68d02942e5ff985b2380485f0fd8de40",
"assets/assets/commands/slotfastleft.png": "84b69cb4c9f66cc14e2ba121a938a5e6",
"assets/assets/commands/slotturnright.png": "15a1ae34916ee912b21c3677d1f898aa",
"assets/assets/commands/bomb.png": "d7b21e13f255ee1bf7ca51847bc3573f",
"assets/assets/commands/slotboost.png": "d9e98b45cc4db14cf0a69fd9bfcade1a",
"assets/assets/commands/slotbackward.png": "9a3671d7d13a0784beda25470a295674",
"assets/NOTICES": "d73c699960981f9af8d9a19f5d519a05",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "094b912d41dc6733f7c63666132492bd",
"main.dart.js": "fda73289e04c759cd73d069b7a741c21",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
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
