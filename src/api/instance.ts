import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1Yzc2NmRmMi05MzE3LTQ3ODQtOGRlZC1iODQ3NDQyMjk2NmEiLCJsb2dpbiI6ImFkbWluIiwiaWF0IjoxNjUzMjQzMjAzfQ.Ip2v4eZdHfYqe7u_h0Syi3M1CKHIZuPbYGOJG6TA70g';

const instance = axios.create({
  baseURL: 'https://desolate-crag-37445.herokuapp.com/',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default instance;
