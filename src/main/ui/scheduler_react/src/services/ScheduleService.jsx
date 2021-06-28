import axios from 'axios';

const SERVICE_DOM = "http://localhost:8000/schedule"

class ScheduleService {
    getSchedule(){
        return axios.get(SERVICE_DOM)
    }

    createSchedule(){
        return axios.post(SERVICE_DOM)
    }
}

export default new ScheduleService();