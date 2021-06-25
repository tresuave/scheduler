import axios from 'axios';

const MOOD_SERVICE = "http://localhost:8000/mood"

class MoodService {
    getMood(){
        return axios.get(MOOD_SERVICE)
    }

    createMood(){
        return axios.post(MOOD_SERVICE)
    }
    
}

export default new MoodService();