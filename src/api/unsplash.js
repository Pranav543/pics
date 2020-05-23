import axios from 'axios';

export default axios.create({
	baseURL : 'https://api.unsplash.com',
	headers : {
		Authorization : 'Client-ID k9ka6TtBRqItKvwbA8hdCZ9lerwAu3bbnbNTbcGzGSs'
	}
});
