import axios from 'axios';

const SERVICE_DOM = "http://localhost:8000/schedule/"

class ScheduleService {
    getSchedule(){
        return axios.get(SERVICE_DOM)
    }

    createSchedule(){
        return axios.post(SERVICE_DOM)
    }
 
    updateSchedule(id){
        axios.patch(`SERVICE_DOM${id}`)
        
    }
}

export default new ScheduleService();