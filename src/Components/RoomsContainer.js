import React from 'react';
import RoomsFilter from '../Components/RoomsFilter';
import RoomsList from '../Components/RoomsList';
import { withRoomConsumer } from '../Context';
import Loading from '../Components/Loading';

function RoomsContainer({ context }) {
    const { loading, sortedRooms, rooms } = context;
    if (loading) {
        return <Loading />
    } else
        return (
            <div>
                <RoomsFilter rooms={rooms} />
                <RoomsList rooms={sortedRooms} />
            </div>
        )
}

export default withRoomConsumer(RoomsContainer)


















// import React from 'react';
// import RoomsFilter from '../Components/RoomsFilter';
// import RoomsList from '../Components/RoomsList';
// import { RoomConsumer } from '../Context';
// import Loading from '../Components/Loading';



// const RoomsContainer = () => {
//     return (
//         <RoomConsumer>
//             {
//                 (value => {
//                     const {loading,sortedRooms,rooms} = value;
//                     if(loading){
//                         return <Loading/>
//                     } else
//                     return (
//                         <div>
//                             <h1>hello from roomscontainer</h1>
//                             <RoomsFilter rooms={rooms} />
//                             <RoomsList rooms={sortedRooms}/>
//                         </div>
//                     )
//                 })
//             }

//         </RoomConsumer>
//     );
// }

// export default RoomsContainer;