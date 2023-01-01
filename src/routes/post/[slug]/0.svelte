<script lang="ts" context="module">
	import type {FeedItemData} from '$lib/feed';

	export const post: FeedItemData = {
		id: 'https://log.ryanatkn.com/post/0',
		title: 'A year of making open source web community software',
		url: 'https://log.ryanatkn.com/post/a-year-of-making-open-source-web-community-software',
		date_published: '2022-05-13T01:42:23.000Z',
		date_modified: '2022-11-29T01:42:23.000Z',
		summary:
			'I discuss my work on open source community software called Felt over the last year, giving a brief overview of the design and technology choices, and announcing our newsletter and podcast at FeltCoop.',
		tags: ['web', 'technology', 'software', 'open source', 'community'],
	};
</script>

<script lang="ts">
	import {base} from '$app/paths';
</script>

<p>abc {base}</p>
