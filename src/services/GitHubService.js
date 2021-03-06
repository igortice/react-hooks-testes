import { GITHUB } from '../configs/Api';

export default class GitHubService {
  static myRepo = async username => {
    const options = {
      method: 'GET',
      url: `users/${username}/repos`
    };

    return await GITHUB(options);
  };
}
