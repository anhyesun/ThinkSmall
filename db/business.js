db.businesses.insertMany([
    {
        storeName: 'Tenth and Proper',
        storeOwner: 'Marion Fudge',
        location: '4483 W 10th Ave, Vancouver',
        lat: 49.264100,
        lng: -123.209000,
        description: 'Tenth & Proper, a unique fashion and lifestyle boutique specializing in beautifully crafted casual wear for women.',
        requests: [0],
        tags: [{ label: 'Call for Designers' }, { label: 'Clothing' }],
    }, {
        storeName: 'Hunter & Hare',
        imageUrl: 'https://images.unsplash.com/photo-1464869372688-a93d806be852?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        storeOwner: 'Joanne Bousaleh',
        location: '227 Union St, Vancouver',
        lat: 49.277824,
        lng: -123.098293,
        description: 'Boutique for women\'s clothing & accessories on consignment, plus jewelry, stationery & beauty items.',
        requests: [1, 2],
        tags: [{ label: 'Call for Logo Design' }, { label: 'Clothing' }],
    }, {
        storeName: 'Kosoo',
        imageUrl: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        storeOwner: 'James Lee',
        location: '832 Cardero St, Vancouver',
        lat: 49.289070,
        lng: -123.132530,
        description: 'High-end place with a warm feel providing Korean fusion small & large plates, a raw bar & cocktails.',
        tags: [{ label: 'Call for Delivery Personnel' }, { label: 'Food' }],
    }, {
        storeName: 'Red Cat Records',
        imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        storeOwner: 'Dave Gowans',
        location: '4332 Main St, Vancouver',
        lat: 49.246970,
        lng: -123.101130,
        description: 'Red Cat Records is an independent record store in Vancouver, voted one of the top ten indie stores in Canada by our customers (CBC 3 Searchlight).',
        tags: [{ label: 'Call for Translators' }, { label: 'Music Retail' }],
    }, {
        storeName: 'Viet House',
        imageUrl: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        storeOwner: 'Lily Tran',
        location: '3420 Cambie St, Vancouver',
        lat: 49.254690,
        lng: -123.114920,
        description: 'Traditional Vietnamese menu & chef specials in a casual setting with dark wood interior details.',
        tags: [{ label: 'Call for Translators' }, { label: 'Food' }],
    }, {
        storeName: 'Robba da Matti',
        imageUrl: 'https://images.unsplash.com/photo-1541013406133-94ed77ee8ba8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        storeOwner: 'Matti Rikkinen',
        location: '1127 Mainland St, Vancouver',
        lat: 49.275400,
        lng: -123.121240,
        description: 'Cozy Italian trattoria with a warm vibe & outdoor seating, plus homemade pasta mains & a tapas menu.',
        tags: [{ label: 'Italian' }, { label: 'Food' }],
    }, {
        storeName: '2nd Kosoo',
        imageUrl: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        storeOwner: 'James Lee',
        location: '832 Cardero St, Vancouver',
        lat: 49.289070,
        lng: -123.132530,
        description: 'High-end place with a warm feel providing Korean fusion small & large plates, a raw bar & cocktails.',
        tags: [{ label: 'Call for Delivery Personnel' }, { label: 'Food' }],
    }, {
        storeName: '2nd Tenth and Proper',
        imageUrl: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80',
        storeOwner: 'Marion Fudge',
        location: '4483 W 10th Ave, Vancouver',
        lat: 49.264100,
        lng: -123.209000,
        description: 'Tenth & Proper, a unique fashion and lifestyle boutique specializing in beautifully crafted casual wear for women.',
        tags: [{ label: 'Call for Designers' }, { label: 'Clothing' }],
    }, {
        storeName: '2nd Hunter & Hare',
        imageUrl: 'https://images.unsplash.com/photo-1464869372688-a93d806be852?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        storeOwner: 'Joanne Bousaleh',
        location: '227 Union St, Vancouver',
        lat: 49.277824,
        lng: -123.098293,
        description: 'Boutique for women\'s clothing & accessories on consignment, plus jewelry, stationery & beauty items.',
        tags: [{ label: 'Call for Logo Design' }, { label: 'Clothing' }],
    }, {
        storeName: '2nd Red Cat Records',
        imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        storeOwner: 'Dave Gowans',
        location: '4332 Main St, Vancouver',
        lat: 49.246970,
        lng: -123.101130,
        description: 'Red Cat Records is an independent record store in Vancouver, voted one of the top ten indie stores in Canada by our customers (CBC 3 Searchlight).',
        tags: [{ label: 'Call for Translators' }, { label: 'Music Retail' }],
    }, {
        storeName: '2nd Viet House',
        imageUrl: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        storeOwner: 'Lily Tran',
        location: '3420 Cambie St, Vancouver',
        lat: 49.254690,
        lng: -123.114920,
        description: 'Traditional Vietnamese menu & chef specials in a casual setting with dark wood interior details.',
        tags: [{ label: 'Call for Translators' }, { label: 'Food' }],
    }, {
        storeName: '2nd Robba da Matti',
        imageUrl: 'https://images.unsplash.com/photo-1541013406133-94ed77ee8ba8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        storeOwner: 'Matti Rikkinen',
        location: '1127 Mainland St, Vancouver',
        lat: 49.275400,
        lng: -123.121240,
        description: 'Cozy Italian trattoria with a warm vibe & outdoor seating, plus homemade pasta mains & a tapas menu.',
        tags: [{ label: 'Italian' }, { label: 'Food' }],
    }, {
        storeName: '3rd Viet House',
        imageUrl: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        storeOwner: 'Lily Tran',
        location: '3420 Cambie St, Vancouver',
        lat: 49.254690,
        lng: -123.114920,
        description: 'Traditional Vietnamese menu & chef specials in a casual setting with dark wood interior details.',
        tags: [{ label: 'Call for Translators' }, { label: 'Food' }],
    }, {
        storeName: '3rd Robba da Matti',
        imageUrl: 'https://images.unsplash.com/photo-1541013406133-94ed77ee8ba8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        storeOwner: 'Matti Rikkinen',
        location: '1127 Mainland St, Vancouver',
        lat: 49.275400,
        lng: -123.121240,
        description: 'Cozy Italian trattoria with a warm vibe & outdoor seating, plus homemade pasta mains & a tapas menu.',
        tags: [{ label: 'Italian' }, { label: 'Food' }],
    }, {
        storeName: '3rd Robba da Matti',
        imageUrl: 'https://images.unsplash.com/photo-1541013406133-94ed77ee8ba8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        storeOwner: 'Matti Rikkinen',
        location: '1127 Mainland St, Vancouver',
        lat: 49.275400,
        lng: -123.121240,
        description: 'Cozy Italian trattoria with a warm vibe & outdoor seating, plus homemade pasta mains & a tapas menu.',
        tags: [{ label: 'Italian' }, { label: 'Food' }],
    }
]);
