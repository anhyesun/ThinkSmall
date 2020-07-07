db.users.insertMany([
    {
        givenName: 'John',
        familyName: 'Doe',
        email: 'jdoe@mail.io',
        imageUrl: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        description: 'Hi! I run a small business in Vancouver. Looking forward to meeting you all!',
    }, {
        givenName: 'Jane',
        familyName: 'Doe',
        email: 'jdoe@mail.io',
        imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        supplementaryUrl: 'https://unsplash.com/photos/6W4F62sN_yI',
        description: 'Hi everyone! I\'m a photographer :)',
        tags: ['Photographer'],
        available: true,
    }
]);
