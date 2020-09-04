import axios from "axios"

export default {
    getProjects: function() {
        const url = "http://localhost:8080/api/projects";
        return axios.get(url);
    }
}