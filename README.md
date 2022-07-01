
# Reddit Minimal

This app is a minimal application of **Reddit**, only allowing users to view 25 posts to avoid meaningless and endless scrolling.
This is intended to help all the die hard Reddit lovers that don't want to lose
on their everyday **productivity** yet still want to get that minimal dose of sweet internet content.

Live site is available [here](https://heroic-cheesecake-3c69c0.netlify.app/).

## Features
 - Initial view of the currently most popular posts on Reddit.
 - Subreddit menu to choose a different topic to view.
 - Search engine to find posts with a specific search key.

## How to use
The app is very user friendly and simplistic, the user is presented with content instantly on load, and can click the chosen topic or type a search term into the input field titled "search" and click the button!
The data flow follows the traditional flow of the common social media app, having the user scroll down to revel more units of content.

## Technologies

 - React
	 - Using a modular implantation where the following tree is implemented:
		```
		<App>
			<Header>
				<SearchBar>
			</Header>
			<Topics>
				<Topic/>
				   ⋮
			</Topics>
			<Posts>
				<Post/>
				   ⋮
			</Posts>
		</App>
		```


 - Redux
	 - Using a tree structured according to the following diagram:
					 ![graph](https://i.imgur.com/K8AhN5P_d.webp?maxwidth=660&fidelity=grand)


 - Jest and MSW
	 - Used for testing both unit tests and end to end tests, with mocked API data, resulting in the following:
	 
		
		>   PASS  src/features/posts/postsSlice.spec.js (5.389 s)
		  Posts reducer
		    √ should handle initial state (4 ms)                                                                     
		    √ should handle addPost (6 ms)     
		> 
		>  PASS  src/App.test.js (12.016 s)
		  √ Posts are filtered by topic (3365 ms)
		  √ Posts are filtered by search (2275 ms)   


## Development process
1. Trello board:
![board](https://i.ibb.co/xqvN1mj/Screenshot-2022-07-01-160307.jpg)

2. Wireframes:
![wireframe](https://i.imgur.com/SzkP4w4_d.webp?maxwidth=1520&fidelity=grand)

3. Final result:
![Final](https://i.ibb.co/DDPwP7S/Screenshot-2022-07-01-160447.jpg)
