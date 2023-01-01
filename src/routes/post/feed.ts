import type {FeedData} from '$lib/feed';
import {posts} from '$lib/blog';

// TODO should this module be `blog` instead of `feed`?

export const feed: FeedData = {
	title: 'Ryan Atkinson',
	id: 'https://log.ryanatkn.com/',
	home_page_url: 'https://log.ryanatkn.com/',
	description: 'blog of a web developer making open source community software',
	icon: 'https://log.ryanatkn.com/favicon.png',
	favicon: 'https://log.ryanatkn.com/favicon.png',
	author: {
		name: 'Ryan Atkinson',
		url: 'https://log.ryanatkn.com/',
		email: 'mail@ryanatkn.com',
	},
	atom: {
		feed_url: 'https://log.ryanatkn.com/feed.xml',
	},
	items: posts,
};
