import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'A 102-story Art Deco skyscraper in Midtown Manhattan, New York City.',
        imageUrl: 'https://cdn.getyourguide.com/img/tour_img-1739965-148.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            latitude: 40.748817,
            longitude: -73.985428
        },
        creator: 'u1'
    }, {
        id: 'p2',
        title: 'Empire State Building',
        description: 'A 102-story Art Deco skyscraper in Midtown Manhattan, New York City.',
        imageUrl: 'https://d12dkjq56sjcos.cloudfront.net/pub/media/catalog/product/cache/d9fe7781ddb2422361b5e0fbe1b7086d/e/s/esb_attr.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.748817,
            lng: -73.985428
        },
        creator: 'u2'
    }
]

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces} />
};

export default UserPlaces;