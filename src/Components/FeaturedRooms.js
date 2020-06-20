import React, { Component } from 'react';
import { RoomContext } from '../Context';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';

class FeaturedRooms extends Component {
    static contextType = RoomContext
    state = {}
    render() {
        let { featuredRooms, loading } = this.context;
      let rooms = featuredRooms.map(room => {
            return <Room key={room.id} room={room} />
        })

        return (
            <section className='featured-rooms'>
                <Title title='featured rooms'/>
                <div className="featured-rooms-center">
                    {loading?<Loading />:rooms}
                </div>
                
            </section>
        );
    }
}

export default FeaturedRooms;