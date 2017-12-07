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
            makerAvatarUrl: 'src/images/avatars/daniel.jpg',
            productImageUrl: 'src/images/products/image-aqua.png',
        },
        {
            id: 2,
            productName: 'Supermajority: The Fantasy Congress League',
            productDescription: 'Earn points when your favorite politicians pass legislation.',
            url: '#',
            votes: generateVoteCount(),
            makerAvatarUrl: 'src/images/avatars/kristy.png',
            productImageUrl: 'src/images/products/image-rose.png',
        },
        {
            id: 3,
            productName: 'Tinfoild: Tailored tinfoil hats',
            productDescription: 'We already have your measurements and shipping address.',
            url: '#',
            votes: generateVoteCount(),
            makerAvatarUrl: 'src/images/avatars/veronika.jpg',
            productImageUrl: 'src/images/products/image-steel.png',
        },
        {
            id: 4,
            productName: 'Haught or Naught',
            productDescription: 'High-minded or absent-minded? You decide.',
            url: '#',
            votes: generateVoteCount(),
            makerAvatarUrl: 'src/images/avatars/molly.png',
            productImageUrl: 'src/images/products/image-yellow.png',
        },
    ];

    return { products: products };
}());
