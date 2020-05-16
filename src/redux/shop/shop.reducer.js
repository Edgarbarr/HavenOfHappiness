const INITIAL_STATE = {
  inventory: {
    earrings: {
      id: 1,
      title: "Earrings",
      routeName: "earrings",
      items: {
        "Adorable Chicken Nugget Earrings":{
          id: 1,
          name: "Adorable Chicken Nugget Earrings",
          imageUrl:
            "https://i.etsystatic.com/19638897/r/il/8809e4/2234671449/il_1588xN.2234671449_3ugr.jpg",
          price: 16.81,
          itemUrl: "earrings"
        },
        "Eggs and Bacon Toast Charm Earrings":{
          id: 2,
          name: "Eggs and Bacon Toast Charm Earrings",
          imageUrl:
            "https://i.etsystatic.com/19638897/r/il/f6952c/2199945255/il_1588xN.2199945255_26w7.jpg",
          price: 12.71,
          itemUrl: "earrings"
        },
        "Miniature Pizza Stud Earrings set":{
          id: 3,
          name: "Miniature Pizza Stud Earrings set",
          imageUrl:
            "https://i.etsystatic.com/19638897/r/il/266182/2140521215/il_1588xN.2140521215_b277.jpg",
          price: 5.98,
          itemUrl: "earrings"
        },
        "Chocolate Chip Cookie Stud Earring set":{
          id: 4,
          name: "Chocolate Chip Cookie Stud Earring set",
          imageUrl:
            "https://i.etsystatic.com/19638897/r/il/5dd36d/2140503927/il_794xN.2140503927_olxv.jpg",
          price: 5.98,
          itemUrl: "earrings"
        },
        "Peanut butter Toast Charm Earrings":{
          id: 5,
          name: "Peanut butter Toast Charm Earrings",
          imageUrl:
            "https://i.etsystatic.com/19638897/r/il/7a869f/2152377834/il_1588xN.2152377834_6fi9.jpg",
          price: 12.71,
          itemUrl: "earrings"
        },
        "Jam Toast Charm Earrings":{
          id: 6,
          name: "Jam Toast Charm Earrings",
          imageUrl:
            "https://i.etsystatic.com/19638897/r/il/88cb76/2152398518/il_1588xN.2152398518_ga7q.jpg",
          price: 12.71,
          itemUrl: "earrings"
        },
        "Cheese Slice Toast Charm Earrings":{
          id: 7,
          name: "Cheese Slice Toast Charm Earrings",
          imageUrl:
            "https://i.etsystatic.com/19638897/r/il/38faec/2152390184/il_1588xN.2152390184_o63u.jpg",
          price: 12.71,
          itemUrl: "earrings"
        },
        "Butter Toast Charm Earrings":{
          id: 8,
          name: "Butter Toast Charm Earrings",
          imageUrl:
            "https://i.etsystatic.com/19638897/r/il/ef29f0/2152387004/il_1588xN.2152387004_7avs.jpg",
          price: 12.71,
          itemUrl: "earrings"
        },
        "Avocado Toast Charm Earrings":{
          id: 9,
          name: "Avocado Toast Charm Earrings",
          imageUrl:
            "https://i.etsystatic.com/19638897/r/il/5fb674/2152373290/il_1588xN.2152373290_4q3s.jpg",
          price: 12.71,
          itemUrl: "earrings"
        },
        "Adorable Avocado Studs Earrings":{
          id: 10,
          name: "Adorable Avocado Studs Earrings",
          imageUrl:
            "https://i.etsystatic.com/19638897/r/il/65444b/2187131986/il_1588xN.2187131986_1llm.jpg",
          price: 7.11,
          itemUrl: "earrings"
        },
        "Cute Halloween themed earrings":{
          id: 11,
          name: "Cute Halloween themed earrings",
          imageUrl:
            "https://i.etsystatic.com/19638897/r/il/243a07/2059200747/il_1588xN.2059200747_lko3.jpg",
          price: 10.46,
          itemUrl: "earrings"
        },
    },
  },
    necklaces: {
      id: 2,
      title: "Necklaces",
      routeName: "necklaces",
      items: {
        "Macaroni and Cheese Necklace":{
          id: 12,
          name: "Macaroni and Cheese Necklace",
          imageUrl:
            "https://i.etsystatic.com/19638897/r/il/2135e8/2224762201/il_1588xN.2224762201_fqdj.jpg",
          price: 9.71,
          itemUrl: "necklaces"
        },
        "Buttered Toast Necklace":{
          id: 13,
          name: "Buttered Toast Necklace",
          imageUrl:
            "https://i.etsystatic.com/19638897/r/il/155b4f/2112387587/il_1588xN.2112387587_qqp8.jpg",
          price: 8.22,
          itemUrl: "necklaces"
        },
        "Winged Star Necklace":{
          id: 14,
          name: "Winged Star Necklace",
          imageUrl:
            "https://i.etsystatic.com/19638897/r/il/89c38b/2083167170/il_1588xN.2083167170_qit7.jpg",
          price: 7.47,
          itemUrl: "necklaces"
        },
        "Avocado Toast Charm Necklace":{
          id: 15,
          name: "Avocado Toast Charm Necklace",
          imageUrl:
            "https://i.etsystatic.com/19638897/r/il/c8bd57/2118337777/il_1588xN.2118337777_klhq.jpg",
          price: 8.22,
          itemUrl: "necklaces"
        },
        "Eggs and Bacon Toast Necklace":{
          id: 16,
          name: "Eggs and Bacon Toast Necklace",
          imageUrl:
            "https://i.etsystatic.com/19638897/r/il/4a07f2/2070770848/il_1588xN.2070770848_gkqn.jpg",
          price: 8.22,
          itemUrl: "necklaces"
        },
        "Jelly Toast Necklace":{
          id: 17,
          name: "Jelly Toast Necklace",
          imageUrl:
            "https://i.etsystatic.com/19638897/r/il/a3cb85/2070771322/il_1588xN.2070771322_dk5x.jpg",
          price: 8.22,
          itemUrl: "necklaces"
        },
        "Peanut Butter Toast Necklace":{
          id: 18,
          name: "Peanut Butter Toast Necklace",
          imageUrl:
            "https://i.etsystatic.com/19638897/r/il/fe9e02/2115159813/il_1588xN.2115159813_acnh.jpg",
          price: 8.22,
          itemUrl: "necklaces"
        },
      },
    },
    'desk-buddy': {
      id: 3,
      title: "Desk Buddy",
      routeName: "desk-buddy",
      items: {
        "Adorable Chicken Nugget figurine":{
          id: 19,
          name: "Adorable Chicken Nugget figurine",
          imageUrl:
            "https://i.etsystatic.com/19638897/r/il/f423a0/2088607658/il_794xN.2088607658_6fpr.jpg",
          price: 20.92,
          itemUrl: "desk-buddy"
        },
      },
    },
    'polymer-clay-charms': {
      id: 4,
      title: "Polymer Clay Charms",
      routeName: "polymer-clay-charms",
      items: {
        "Super Cute Chicken Nugget Charm,Keychain":{
          id: 20,
          name: "Super Cute Chicken Nugget Charm,Keychain",
          imageUrl:
            "https://i.etsystatic.com/19638897/r/il/e76d79/1877667482/il_1588xN.1877667482_gjv6.jpg",
          price: 5.98,
          itemUrl: "polymer-clay-charms"
        },
        "Cute Miniature Banana Charm":{
          id: 21,
          name: "Cute Miniature Banana Charm",
          imageUrl:
            "https://i.etsystatic.com/19638897/r/il/3353bb/1995757350/il_1588xN.1995757350_qnje.jpg",
          price: 6.72,
          itemUrl: "polymer-clay-charms"
        },
        "Handmade Nutella Toast Charm-Cute Polymer Clay Charm":{
          id: 22,
          name: "Handmade Nutella Toast Charm-Cute Polymer Clay Charm",
          imageUrl:
            "https://i.etsystatic.com/19638897/r/il/d88672/1995826792/il_1588xN.1995826792_3dwv.jpg",
          price: 6.72,
          itemUrl: "polymer-clay-charms"
        },
        "Super cute realistic Pumpkin Pie and whipped cream Charm/keychain":{
          id: 23,
          name:
            "Super cute realistic Pumpkin Pie and whipped cream Charm/keychain",
          imageUrl:
            "https://i.etsystatic.com/19638897/r/il/82ed09/2043352705/il_1588xN.2043352705_n918.jpg",
          price: 6.72,
          itemUrl: "polymer-clay-charms"
        },
        "Cute Hamburger Polymer Clay Charm":{
          id: 24,
          name: "Cute Hamburger Polymer Clay Charm",
          imageUrl:
            "https://i.etsystatic.com/19638897/r/il/7ceafa/2177175584/il_1588xN.2177175584_ko94.jpg",
          price: 8.97,
          itemUrl: "polymer-clay-charms"
        },
      },
    },
    'resin-charms-keychain': {
      id: 5,
      title: "Resin Charms/Keychain",
      routeName: "resin-charms-keychain",
      items: {
        "Holographic Mixed Emotions Club Heart Charm":{
          id: 25,
          name: "Holographic Mixed Emotions Club Heart Charm",
          imageUrl:
            "https://i.etsystatic.com/19638897/r/il/e761ca/2188284408/il_1588xN.2188284408_jn57.jpg",
          price: 11.21,
          itemUrl: "resin-charms-keychain"
        },
        "Holographic Pastel goth Heart Charm":{
          id: 26,
          name: "Holographic Pastel goth Heart Charm",
          imageUrl:
            "https://i.etsystatic.com/19638897/r/il/73782b/2235878543/il_1588xN.2235878543_gyrx.jpg",
          price: 11.21,
          itemUrl: "resin-charms-keychain"
        },
        "Holographic Pink Kitten Heart Charm":{
          id: 27,
          name: "Holographic Pink Kitten Heart Charm",
          imageUrl:
            "https://i.etsystatic.com/19638897/r/il/028550/2235879319/il_1588xN.2235879319_bhq6.jpg",
          price: 11.21,
          itemUrl: "resin-charms-keychain"
        },
        "Holographic Pink Baby Doll Heart Charm":{
          id: 28,
          name: "Holographic Pink Baby Doll Heart Charm",
          imageUrl:
            "https://i.etsystatic.com/19638897/r/il/9a1b38/2188290034/il_1588xN.2188290034_ek6i.jpg",
          price: 11.21,
          itemUrl: "resin-charms-keychain"
        },
        "Holographic Blue/Pink Kawaii Heart Charm":{
          id: 29,
          name: "Holographic Blue/Pink Kawaii Heart Charm",
          imageUrl:
            "https://i.etsystatic.com/19638897/r/il/491dd9/2235857781/il_1588xN.2235857781_3t7v.jpg",
          price: 11.21,
          itemUrl: "resin-charms-keychain"
        },
        "Holographic Blue Heart Charm":{
          id: 30,
          name: "Holographic Blue Heart Charm",
          imageUrl:
            "https://i.etsystatic.com/19638897/r/il/da17ef/2188316092/il_1588xN.2188316092_rvvm.jpg",
          price: 11.21,
          itemUrl: "resin-charms-keychain"
        },
      },
    },
  },
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
