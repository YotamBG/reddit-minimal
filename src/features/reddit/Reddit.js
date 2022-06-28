const Reddit = {
    fetchPosts(subreddit, searchTerm) {
        if(subreddit === ''){
            subreddit = 'popular';
        }
        let searchString = `https://www.reddit.com/r/${subreddit}`;

        if (searchTerm) {
            searchString += `/search.json?q=${searchTerm.replace(' ', '%20')}`;
        } else {
            searchString += `.json`;
        }

        return fetch(searchString)
            .then(response => {
                return response.json();
            }).then(jsonResponse => {
                return jsonResponse.data.children.map(child => child.data);
            });
    }
};

export default Reddit;