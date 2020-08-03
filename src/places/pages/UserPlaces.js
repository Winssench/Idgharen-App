import React from 'react';
import PlaceList from '../components/PlaceList';
import {useParams} from 'react-router-dom';


const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world !',
        imageUrl: 'https://images.unsplash.com/photo-1583842761829-4245d7894246?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        address: '20 W 34th ST, NEW YORK, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world !',
        imageUrl: 'https://images.unsplash.com/photo-1583842761829-4245d7894246?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        address: '20 W 34th ST, NEW YORK, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u2'
    }
];

const UserPlaces = () => {

    const userId =   useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId );
  
    return (
      <PlaceList items={loadedPlaces} />
    );
};




export default UserPlaces;
