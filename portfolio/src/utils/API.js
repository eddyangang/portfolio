import axios from "axios"

export default {
    getProjects: function() {
        const url = "/api/projects";
        return axios.get(url);
    }
}