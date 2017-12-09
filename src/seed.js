import avatar from './images/avatars/daniel.jpg';

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
            makerAvatarUrl: './images/avatars/daniel.jpg',

            productImageUrl: './images/products/image-aqua.jpg',
        },
        {
            id: 2,
            productName: 'Supermajority: The Fantasy Congress League',
            productDescription: 'Earn points when your favorite politicians pass legislation.',
            url: '#',
            votes: generateVoteCount(),
            makerAvatarUrl: {avatar},
            productImageUrl: './images/products/image-rose.png',
        },
        {
            id: 3,
            productName: 'Tinfoild: Tailored tinfoil hats',
            productDescription: 'We already have your measurements and shipping address.',
            url: '#',
            votes: generateVoteCount(),
            makerAvatarUrl: './images/avatars/veronika.jpg',
            productImageUrl: './images/products/image-steel.png',
        },
        {
            id: 4,
            productName: 'Haught or Naught',
            productDescription: 'High-minded or absent-minded? You decide.',
            url: '#',
            votes: generateVoteCount(),
            makerAvatarUrl: './images/avatars/molly.png',
            productImageUrl: './images/products/image-yellow.png',
        },
    ];

    return { products : products };
}());
