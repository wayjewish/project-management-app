import axios, { AxiosInstance } from 'axios';
import { api } from '../../api';
import { IBoardData } from '../../../types';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5OWQzMTczMy03NTE0LTQ0MzQtYTNjZC0xZjUxMTIyOTMyZWMiLCJsb2dpbiI6ImFkbWluIiwiaWF0IjoxNjUzMDYwMDk3fQ.vzS0nBjU0jbODVxpzj0Ka3KSLGs7OXw94yEDwscYZkQ';

class UserService {
  endpoint: string;
  instance: AxiosInstance;

  constructor() {
    this.endpoint = '/signin';
    this.instance = axios.create({
      baseURL: api.url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getUserToken() {
    return this.instance.get(this.endpoint);
  }

}

export default new UserService();
