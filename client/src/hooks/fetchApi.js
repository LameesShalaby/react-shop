import axios from "axios";

export const fetchApi =axios.create({
     baseURL: import.meta.env.VITE_API_URL,
     headers: { 
        Authorization: import.meta.env.VITE_API_TOKEN,
        // 'Authorization': 'Bearer 4745b1acdd5336b8f9e3516adebbbbac3cf93dc71059d3ede4eb770a30ed1ddf5d363bfff1d15e0bb7bb129c1dc3b1360cd302db6992bf1d91b09c707889c80a2843f059db7f12c95458711096c6abd58beb358f1e6952bb57d820d6b79be658be1907c8594332d676ac45db333e9b7fe6a3c91faebb5428534b22ec4f6f150e'
      },

})