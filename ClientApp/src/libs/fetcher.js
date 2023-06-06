import axios from "axios";

const VOCAB_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/"
export const vocabFetcher = word => axios.get(`${VOCAB_URL}${word}`).then(res => {
    return res.data
})
.catch(err => err.response.status)
