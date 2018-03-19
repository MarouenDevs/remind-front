import axios from 'axios';
import config from '../config/config';


const getNotes = () => {
    return axios.get(`${config.apiUrl}/notes`);

};

const searchNotes = (value) => {
    return axios.get(`${config.apiUrl}/notes/search/${value}`);

};

const postNote = (data) => {
    return axios.post(`${config.apiUrl}/notes/add`,data);

};

const deleteNote = (data) => {
    return axios.delete(`${config.apiUrl}/notes/delete/${data.id}`,);

};

export {getNotes, postNote, deleteNote,searchNotes};