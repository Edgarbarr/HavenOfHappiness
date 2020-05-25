import ShopActionTypes from './shop.types';
// const INITIAL_STATE = {
//   collections: {
//     earrings: {
//       id: 1,
//       title: "Earrings",
//       routeName: "earrings",
//       items: {
//         "Adorable Chicken Nugget Earrings":{
//           id: 1,
//           name: "Adorable Chicken Nugget Earrings",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/8809e4/2234671449/il_1588xN.2234671449_3ugr.jpg",
//             "https://i.etsystatic.com/19638897/r/il/b7aaf2/2234655873/il_794xN.2234655873_7kiy.jpg"],
//           price: 16.81,
//           itemUrl: "earrings"
//         },
//         "Eggs and Bacon Toast Charm Earrings":{
//           id: 2,
//           name: "Eggs and Bacon Toast Charm Earrings",
//           imageUrl:
//            ["https://i.etsystatic.com/19638897/r/il/f6952c/2199945255/il_1588xN.2199945255_26w7.jpg"],
//           price: 12.71,
//           itemUrl: "earrings"
//         },
//         "Miniature Pizza Stud Earrings set":{
//           id: 3,
//           name: "Miniature Pizza Stud Earrings set",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/266182/2140521215/il_1588xN.2140521215_b277.jpg"],
//           price: 5.98,
//           itemUrl: "earrings"
//         },
//         "Chocolate Chip Cookie Stud Earring set":{
//           id: 4,
//           name: "Chocolate Chip Cookie Stud Earring set",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/5dd36d/2140503927/il_794xN.2140503927_olxv.jpg"],
//           price: 5.98,
//           itemUrl: "earrings"
//         },
//         "Peanut butter Toast Charm Earrings":{
//           id: 5,
//           name: "Peanut butter Toast Charm Earrings",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/7a869f/2152377834/il_1588xN.2152377834_6fi9.jpg"],
//           price: 12.71,
//           itemUrl: "earrings"
//         },
//         "Jam Toast Charm Earrings":{
//           id: 6,
//           name: "Jam Toast Charm Earrings",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/88cb76/2152398518/il_1588xN.2152398518_ga7q.jpg"],
//           price: 12.71,
//           itemUrl: "earrings"
//         },
//         "Cheese Slice Toast Charm Earrings":{
//           id: 7,
//           name: "Cheese Slice Toast Charm Earrings",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/38faec/2152390184/il_1588xN.2152390184_o63u.jpg"],
//           price: 12.71,
//           itemUrl: "earrings"
//         },
//         "Butter Toast Charm Earrings":{
//           id: 8,
//           name: "Butter Toast Charm Earrings",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/ef29f0/2152387004/il_1588xN.2152387004_7avs.jpg"],
//           price: 12.71,
//           itemUrl: "earrings"
//         },
//         "Avocado Toast Charm Earrings":{
//           id: 9,
//           name: "Avocado Toast Charm Earrings",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/5fb674/2152373290/il_1588xN.2152373290_4q3s.jpg"],
//           price: 12.71,
//           itemUrl: "earrings"
//         },
//         "Adorable Avocado Studs Earrings":{
//           id: 10,
//           name: "Adorable Avocado Studs Earrings",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/65444b/2187131986/il_1588xN.2187131986_1llm.jpg"],
//           price: 7.11,
//           itemUrl: "earrings"
//         },
//         "Cute Halloween themed earrings":{
//           id: 11,
//           name: "Cute Halloween themed earrings",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/243a07/2059200747/il_1588xN.2059200747_lko3.jpg"],
//           price: 10.46,
//           itemUrl: "earrings"
//         },
//     },
//   },
//     necklaces: {
//       id: 2,
//       title: "Necklaces",
//       routeName: "necklaces",
//       items: {
//         "Macaroni and Cheese Necklace":{
//           id: 12,
//           name: "Macaroni and Cheese Necklace",
//           imageUrl:
//            ["https://i.etsystatic.com/19638897/r/il/2135e8/2224762201/il_1588xN.2224762201_fqdj.jpg"],
//           price: 9.71,
//           itemUrl: "necklaces"
//         },
//         "Buttered Toast Necklace":{
//           id: 13,
//           name: "Buttered Toast Necklace",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/155b4f/2112387587/il_1588xN.2112387587_qqp8.jpg"],
//           price: 8.22,
//           itemUrl: "necklaces"
//         },
//         "Winged Star Necklace":{
//           id: 14,
//           name: "Winged Star Necklace",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/89c38b/2083167170/il_1588xN.2083167170_qit7.jpg"],
//           price: 7.47,
//           itemUrl: "necklaces"
//         },
//         "Avocado Toast Charm Necklace":{
//           id: 15,
//           name: "Avocado Toast Charm Necklace",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/c8bd57/2118337777/il_1588xN.2118337777_klhq.jpg"],
//           price: 8.22,
//           itemUrl: "necklaces"
//         },
//         "Eggs and Bacon Toast Necklace":{
//           id: 16,
//           name: "Eggs and Bacon Toast Necklace",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/4a07f2/2070770848/il_1588xN.2070770848_gkqn.jpg"],
//           price: 8.22,
//           itemUrl: "necklaces"
//         },
//         "Jelly Toast Necklace":{
//           id: 17,
//           name: "Jelly Toast Necklace",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/a3cb85/2070771322/il_1588xN.2070771322_dk5x.jpg"],
//           price: 8.22,
//           itemUrl: "necklaces"
//         },
//         "Peanut Butter Toast Necklace":{
//           id: 18,
//           name: "Peanut Butter Toast Necklace",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/fe9e02/2115159813/il_1588xN.2115159813_acnh.jpg"],
//           price: 8.22,
//           itemUrl: "necklaces"
//         },
//         "Cheese Slice Toast Necklace":{
//           id: 19,
//           name: "Cheese Slice Toast Necklace",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/f72128/2118339405/il_1588xN.2118339405_hx0y.jpg"],
//           price: 8.15,
//           itemUrl: "necklaces"
//         },
//         "Tiny Dumpling/ Pot Sticker Necklace":{
//           id: 20,
//           name: "Tiny Dumpling/ Pot Sticker Necklace",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/092019/2187094008/il_794xN.2187094008_s0xq.jpg"],
//           price: 9.64,
//           itemUrl: "necklaces"
//         },
//         "Avocado Necklace":{
//           id: 21,
//           name: "Avocado Necklace",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/29ec22/2187082272/il_794xN.2187082272_52f7.jpg"],
//           price: 9.64,
//           itemUrl: "necklaces"
//         },
//         "Cute Rainbow Cloud Necklace":{
//           id: 22,
//           name: "Cute Rainbow Cloud Necklace ",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/674fd9/2177190940/il_794xN.2177190940_59b6.jpg"],
//           price: 11.49,
//           itemUrl: "necklaces"
//         },
//       },
//     },
//     'desk buddy': {
//       id: 3,
//       title: "Desk Buddy",
//       routeName: "desk buddy",
//       items: {
//         "Adorable Chicken Nugget figurine":{
//           id: 23,
//           name: "Adorable Chicken Nugget figurine",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/f423a0/2088607658/il_794xN.2088607658_6fpr.jpg"],
//           price: 20.92,
//           itemUrl: "desk buddy"
//         },
//       },
//     },
//     'polymer clay charms': {
//       id: 4,
//       title: "Polymer Clay Charms",
//       routeName: "polymer clay charms",
//       items: {
//         "Super Cute Chicken Nugget Charm,Keychain":{
//           id: 24,
//           name: "Super Cute Chicken Nugget Charm,Keychain",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/e76d79/1877667482/il_1588xN.1877667482_gjv6.jpg"],
//           price: 5.98,
//           itemUrl: "polymer clay charms"
//         },
//         "Cute Miniature Banana Charm":{
//           id: 25,
//           name: "Cute Miniature Banana Charm",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/3353bb/1995757350/il_1588xN.1995757350_qnje.jpg"],
//           price: 6.72,
//           itemUrl: "polymer clay charms"
//         },
//         "Handmade Nutella Toast Charm-Cute Polymer Clay Charm":{
//           id: 26,
//           name: "Handmade Nutella Toast Charm-Cute Polymer Clay Charm",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/d88672/1995826792/il_1588xN.1995826792_3dwv.jpg"],
//           price: 6.72,
//           itemUrl: "polymer clay charms"
//         },
//         "Super cute realistic Pumpkin Pie and whipped cream Charm-keychain":{
//           id: 27,
//           name:
//             "Super cute realistic Pumpkin Pie and whipped cream Charm-keychain",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/82ed09/2043352705/il_1588xN.2043352705_n918.jpg"],
//           price: 6.72,
//           itemUrl: "polymer clay charms"
//         },
//         "Cute Hamburger Polymer Clay Charm":{
//           id: 28,
//           name: "Cute Hamburger Polymer Clay Charm",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/7ceafa/2177175584/il_1588xN.2177175584_ko94.jpg"],
//           price: 8.97,
//           itemUrl: "polymer clay charms"
//         },
//         "Cute Handmade Strawberry Jelly Toast":{
//           id: 29,
//           name: "Cute Handmade Strawberry Jelly Toast",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/27a0a8/1995863022/il_794xN.1995863022_fb37.jpg"],
//           price: 6.67,
//           itemUrl: "polymer clay charms"
//         },
//         "Adorable Angry Spicy Chicken nugget charm":{
//           id: 30,
//           name: "Adorable Angry Spicy Chicken nugget charm keychain",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/7c3288/1950137122/il_794xN.1950137122_dupp.jpg"],
//           price: 5.93,
//           itemUrl: "polymer clay charms"
//         },
//         "Cosmic Brownie Charm":{
//           id: 31,
//           name: "Cosmic Brownie Charm",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/e6e189/2092911552/il_794xN.2092911552_l43g.jpg"],
//           price: 7.41,
//           itemUrl: "polymer clay charms"
//         },
//         "Happy Pizza Variety Charms":{
//           id: 32,
//           name: "Happy Pizza Variety Charms",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/3e41f8/2130851635/il_794xN.2130851635_h0wt.jpg"],
//           price: 6.67,
//           itemUrl: "polymer clay charms"
//         },
//         "Adorable Kawaii Popsicle":{
//           id: 33,
//           name: "Adorable Kawaii Popsicle",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/e39b6a/1948260682/il_794xN.1948260682_hn7i.jpg"],
//           price: 6.67,
//           itemUrl: "polymer clay charms"
//         },
//         "Adorable Shrimp Polymer Clay Charm":{
//           id: 34,
//           name: "Adorable Shrimp Polymer Clay Charm",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/b3f43e/2014709113/il_794xN.2014709113_55d4.jpg"],
//           price: 6.67,
//           itemUrl: "polymer clay charms"
//         },
//         "Fried Chicken Charm":{
//           id: 35,
//           name: "Fried Chicken Charm",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/d2b4b1/1917297755/il_794xN.1917297755_59kd.jpg"],
//           price: 8.15,
//           itemUrl: "polymer clay charms"
//         },
//         "Hot Dog Charm":{
//           id: 36,
//           name: "Hot Dog Charm",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/880c9e/2234672741/il_794xN.2234672741_1nnx.jpg"],
//           price: 6.30,
//           itemUrl: "polymer clay charms"
//         },
//         "Glow in the dark ghost charm":{
//           id: 37,
//           name: "Glow in the dark ghost charm",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/8f71e3/2084129479/il_794xN.2084129479_ej4e.jpg"],
//           price: 6.67,
//           itemUrl: "polymer clay charms"
//         },
//         "Realistic looking Chicken nugget charm":{
//           id: 38,
//           name: "Realistic looking Chicken nugget charm",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/042344/2224709529/il_794xN.2224709529_39y7.jpg"],
//           price: 4.82,
//           itemUrl: "polymer clay charms"
//         },
//         "Super Adorable realistic Dumpling Charm":{
//           id: 39,
//           name: "Super Adorable realistic Dumpling Charm",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/4caec4/2051222085/il_794xN.2051222085_sx5l.jpg"],
//           price: 7.04,
//           itemUrl: "polymer clay charms"
//         },
//         "Buttered Toast Charm":{
//           id: 40,
//           name: "Buttered Toast Charm",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/2ccb4c/1997667599/il_794xN.1997667599_lt5k.jpg"],
//           price: 6.67,
//           itemUrl: "polymer clay charms"
//         },
//         "Adorable Mochi Polymer Clay Charm":{
//           id: 41,
//           name: "Adorable Mochi Polymer Clay Charm",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/1d1b55/1869286076/il_794xN.1869286076_pah1.jpg"],
//           price: 6.67,
//           itemUrl: "polymer clay charms"
//         },
//         "Cute Avocado Egg Toast Charm":{
//           id: 42,
//           name: "Cute Avocado Egg Toast Charm",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/12cda9/1869283626/il_794xN.1869283626_bls2.jpg"],
//           price: 6.67,
//           itemUrl: "polymer clay charms"
//         },
//         "Cute Cheese Stick charm":{
//           id: 43,
//           name: "Cute Cheese Stick charm",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/e10de0/1968015612/il_794xN.1968015612_71cg.jpg"],
//           price: 5.93,
//           itemUrl: "polymer clay charms"
//         },
//         "Gingerbread Man Cookie Charms":{
//           id: 44,
//           name: "Gingerbread Man Cookie Charms",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/23eb7c/2140377181/il_794xN.2140377181_4vxz.jpg"],
//           price: 6.67,
//           itemUrl: "polymer clay charms"
//         },
//         "Cute Candy Cane Charms":{
//           id: 45,
//           name: "Cute Candy Cane Charms",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/9d5a3a/2146504641/il_794xN.2146504641_koi0.jpg"],
//           price: 6.67,
//           itemUrl: "polymer clay charms"
//         },
//         "Pizza Variety Charms":{
//           id: 46,
//           name: "Pizza Variety Charms",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/229a9f/2131012479/il_794xN.2131012479_c597.jpg"],
//           price: 7.41,
//           itemUrl: "polymer clay charms"
//         },
//         "Chocolate Frosting Cake Charm":{
//           id: 47,
//           name: "Chocolate Frosting Cake Charm",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/75544d/2083415914/il_794xN.2083415914_amic.jpg"],
//           price: 7.41,
//           itemUrl: "polymer clay charms"
//         },
//         "Strawberry Frosting Cake Charm":{
//           id: 48,
//           name: "Strawberry Frosting Cake Charm",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/b15b93/2130757635/il_794xN.2130757635_4ngd.jpg"],
//           price: 7.41,
//           itemUrl: "polymer clay charms"
//         },
//         "Adorable Little Kawaii planet Charm":{
//           id: 49,
//           name: "Adorable Little Kawaii planet Charm",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/8d6e01/1995484004/il_794xN.1995484004_ozx2.jpg"],
//           price: 6.67,
//           itemUrl: "polymer clay charms"
//         },
//         "Christmas Chicken Nugget Charms":{
//           id: 50,
//           name: "Christmas Chicken Nugget Charms",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/bb3619/2146503361/il_794xN.2146503361_hwer.jpg"],
//           price: 5.19,
//           itemUrl: "polymer clay charms"
//         },
//         "Miniature Fried Chicken Sandwich":{
//           id: 51,
//           name: "Miniature Fried Chicken Sandwich",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/8a04ac/2298208140/il_794xN.2298208140_hcmv.jpg"],
//           price: 8.90,
//           itemUrl: "polymer clay charms"
//         },
//         "Tiny Adorable French Fries Cup Charm":{
//           id: 52,
//           name: "Tiny Adorable French Fries Cup Charm",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/44bf24/2230766703/il_794xN.2230766703_3sh8.jpg"],
//           price: 7.41,
//           itemUrl: "polymer clay charms"
//         },
//         "Heart Christmas Cookie Charms":{
//           id: 53,
//           name: "Heart Christmas Cookie Charms",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/ba12ad/2092742464/il_794xN.2092742464_19fm.jpg"],
//           price: 6.67,
//           itemUrl: "polymer clay charms"
//         },
//         "Avocado Charms":{
//           id: 54,
//           name: "Avocado Charms",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/71b496/2179673304/il_794xN.2179673304_cwbo.jpg"],
//           price: 5.93,
//           itemUrl: "polymer clay charms"
//         },
//         "Cute Rainbow Cloud Charm":{
//           id: 55,
//           name: "Cute Rainbow Cloud Charm",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/bc181a/2177189038/il_794xN.2177189038_s9hu.jpg"],
//           price: 8.53,
//           itemUrl: "polymer clay charms"
//         },
//         "Cute Handmade Egg Bacon Toast":{
//           id: 56,
//           name: "Cute Handmade Egg Bacon Toast",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/ff1c51/2043415861/il_794xN.2043415861_td3w.jpg"],
//           price: 6.67,
//           itemUrl: "polymer clay charms"
//         },
//         "Cute Handmade Peanut Butter Toast":{
//           id: 57,
//           name: "Cute Handmade Peanut Butter Toast",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/c40d66/1995841408/il_794xN.1995841408_49x9.jpg"],
//           price: 6.67,
//           itemUrl: "polymer clay charms"
//         },
        
//       },
//     },
//     'resin charms keychain': {
//       id: 5,
//       title: "Resin Charms Keychain",
//       routeName: "resin charms keychain",
//       items: {
//         "Holographic Mixed Emotions Club Heart Charm":{
//           id: 58,
//           name: "Holographic Mixed Emotions Club Heart Charm",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/e761ca/2188284408/il_1588xN.2188284408_jn57.jpg"],
//           price: 11.21,
//           itemUrl: "resin charms keychain"
//         },
//         "Holographic Pastel goth Heart Charm":{
//           id: 59,
//           name: "Holographic Pastel goth Heart Charm",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/73782b/2235878543/il_1588xN.2235878543_gyrx.jpg"],
//           price: 11.21,
//           itemUrl: "resin charms keychain"
//         },
//         "Holographic Pink Kitten Heart Charm":{
//           id: 60,
//           name: "Holographic Pink Kitten Heart Charm",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/028550/2235879319/il_1588xN.2235879319_bhq6.jpg"],
//           price: 11.21,
//           itemUrl: "resin charms keychain"
//         },
//         "Holographic Pink Baby Doll Heart Charm":{
//           id: 61,
//           name: "Holographic Pink Baby Doll Heart Charm",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/9a1b38/2188290034/il_1588xN.2188290034_ek6i.jpg"],
//           price: 11.21,
//           itemUrl: "resin charms keychain"
//         },
//         "Holographic Blue/Pink Kawaii Heart Charm":{
//           id: 62,
//           name: "Holographic Blue/Pink Kawaii Heart Charm",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/491dd9/2235857781/il_1588xN.2235857781_3t7v.jpg"],
//           price: 11.21,
//           itemUrl: "resin charms keychain"
//         },
//         "Holographic Blue Heart Charm":{
//           id: 63,
//           name: "Holographic Blue Heart Charm",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/da17ef/2188316092/il_1588xN.2188316092_rvvm.jpg"],
//           price: 11.21,
//           itemUrl: "resin charms keychain"
//         },
//         "Holographic Blue Heart Charm":{
//           id: 64,
//           name: "Holographic Blue Heart Charm",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/da17ef/2188316092/il_794xN.2188316092_rvvm.jpg"],
//           price: 11.12,
//           itemUrl: "resin charms keychain"
//         },
//         "White Pegasus Charm":{
//           id: 65,
//           name: "White Pegasus Charm",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/6d42aa/2070783792/il_794xN.2070783792_ecvu.jpg"],
//           price: 9.64,
//           itemUrl: "resin charms keychain"
//         },
//         "Silver Peach Dummy Thicc Charm":{
//           id: 66,
//           name: "Silver Peach Dummy Thicc Charm",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/3499b5/2068300182/il_794xN.2068300182_1mu9.jpg"],
//           price: 8.15,
//           itemUrl: "resin charms keychain"
//         },
//         "Stunning Pastel glass looking handmade Mermaid Keychain":{
//           id: 67,
//           name: "Stunning Pastel glass looking handmade Mermaid Keychain",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/fafb36/2115191211/il_794xN.2115191211_dv0u.jpg"],
//           price: 10.83,
//           itemUrl: "resin charms keychain"
//         },
//         "Purple and White Mermaid Charm":{
//           id: 68,
//           name: "Purple and White Mermaid Charm",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/b33cd2/2115875981/il_794xN.2115875981_rzuw.jpg"],
//           price: 10.38,
//           itemUrl: "resin charms keychain"
//         },
//         "Sushi Keychain Charm":{
//           id: 69,
//           name: "Sushi Keychain Charm",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/f0ca49/2068380846/il_794xN.2068380846_lhhu.jpg"],
//           price: 9.64,
//           itemUrl: "resin charms keychain"
//         },
//         "Moon Child Ouija Keychain":{
//           id: 70,
//           name: "Moon Child Ouija Keychain",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/6fda36/2187160804/il_794xN.2187160804_dsuv.jpg"],
//           price: 10.38,
//           itemUrl: "resin charms keychain"
//         },
//         "Adorable Pastel Color Bear & Chick keychain":{
//           id: 71,
//           name: "Adorable Pastel Color Bear & Chick keychain",
//           imageUrl:
//             ["https://i.etsystatic.com/19638897/r/il/f8c9a9/2298039248/il_794xN.2298039248_md9u.jpg"],
//           price: 9.64,
//           itemUrl: "resin charms keychain"
//         },
//       },
//     },
//   },
// };
const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
}
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      }
      case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          collections: action.payload
        }
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload 
      }
    default:
      return state;
  }
};

export default shopReducer;
