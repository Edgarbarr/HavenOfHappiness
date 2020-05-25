
const INITIAL_STATE = {
    sections: [
        {
            title: "EARRINGS",
            imageUrl: "https://i.etsystatic.com/19638897/r/il/f6952c/2199945255/il_1588xN.2199945255_26w7.jpg",
            id: 1,
            linkUrl: "shop/earrings"
        },
        {
            title: "NECKLACES",
            imageUrl: "https://i.etsystatic.com/19638897/r/il/c8bd57/2118337777/il_1588xN.2118337777_klhq.jpg",
            id: 2,
            linkUrl: "shop/necklaces"
        },
        {
            title: "DESK BUDDY",
            imageUrl: "https://i.etsystatic.com/19638897/r/il/e4e921/2088607756/il_1588xN.2088607756_9f43.jpg",
            id: 3,
            linkUrl: "shop/desk buddy"
        },
        {
            title: "POLYMER CLAY CHARMS",
            imageUrl: "https://i.etsystatic.com/19638897/r/il/2ccb4c/1997667599/il_1588xN.1997667599_lt5k.jpg",
            id: 4,
            size: "large",
            linkUrl: "shop/polymer clay charms"
        },
        {
            title: "RESIN CHARMS/KEYCHAIN",
            imageUrl: "https://i.etsystatic.com/19638897/r/il/f8c9a9/2298039248/il_794xN.2298039248_md9u.jpg",
            id: 5,
            size: "large",
            linkUrl: "shop/resin charms keychain"
        }
    ]
}
const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: 
            return state;
    }
}

export default directoryReducer;