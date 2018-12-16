import {LIVE_DRONE} from './types'

const selectDrone = (drone) => {
     return {
         type: LIVE_DRONE,
         drone: drone
     }
};

export default selectDrone;
