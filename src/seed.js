

window.Seed = (function () {
    function generateVoteCount() {
        return Math.floor((Math.random() * 50) + 15);
    }

    const products = [
        {
            id: 1,
            productName: 'Yellow Pailee',
            productDescription: 'On-demand sand castle construction expertise.',
            url: '#',
            votes: generateVoteCount(),
            makerAvatarUrl: process.env.PUBLIC_URL + './images/avatars/daniel.jpg',
            productImageUrl: process.env.PUBLIC_URL + './images/products/image-rose.png'
        },
        {
            id: 2,
            productName: 'Supermajority: The Fantasy Congress League',
            productDescription: 'Earn points when your favorite politicians pass legislation.',
            url: '#',
            votes: generateVoteCount(),
            makerAvatarUrl: process.env.PUBLIC_URL + './images/avatars/elliot.jpg',
            productImageUrl: process.env.PUBLIC_URL + './images/products/image-aqua.png'

        },

        {
            id: 3,
            productName: 'Tinfoild: Tailored tinfoil hats',
            productDescription: 'We already have your measurements and shipping address.',
            url: '#',
            votes: generateVoteCount(),
            makerAvatarUrl: process.env.PUBLIC_URL + './images/avatars/helen.jpg',
            productImageUrl: process.env.PUBLIC_URL + './images/products/image-steel.png',
        },

        {
            id: 4,
            productName: 'Haught or Naught',
            productDescription: 'High-minded or absent-minded? You decide.',
            url: '#',
            votes: generateVoteCount(),
            makerAvatarUrl: process.env.PUBLIC_URL + './images/avatars/steve.jpg',
            productImageUrl: process.env.PUBLIC_URL + './images/products/image-yellow.png'
        },
    ];

    return { products : products };
}());
