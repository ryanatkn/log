<script lang="ts">
	import {base} from '$app/paths';

	import Digest from '$lib/Digest.svelte';
	import DigestItem from '$lib/DigestItem.svelte';
</script>

<Digest date="Jan 24 2023">
	<DigestItem>
		renamed this project's main building block from <code>Bulletin</code> to <code>Digest</code>,
		seems nicer
	</DigestItem>
</Digest>
<Digest date="Jan 23 2023">
	<DigestItem>
		moved most of our projects on GitHub from <a href="https://github.com/feltcoop">@feltcoop</a> to
		<a href="https://github.com/feltjs">@feltjs</a>, which will be a nonprofit, tightening
		@feltcoop's scope to be a platform operator at
		<a href="https://www.felt.social/">felt.social</a> (still with the goal to be a
		<a href="https://platform.coop">platform co-op</a>), and making @feltjs and its repos a
		community project more explicitly
	</DigestItem>
</Digest>
<Digest date="Jan 22 2023">
	<DigestItem>
		posted the first draft of my second blog post, <a
			href="https://www.ryanatkn.com/blog/modeling-virtual-social-spaces-in-this-house-we-post-cat-pics-on-saturday"
			>Modeling virtual social spaces: in this house we post cat pics on Saturday</a
		>
	</DigestItem>
	<DigestItem>
		posted my Svelte 4 wishlist to
		<a href="https://np.reddit.com/r/sveltejs/comments/10iud65/comment/j5hh1wi/"
			>a Reddit thread in /r/sveltejs</a
		>:
		<blockquote>
			<ul>
				<li>
					an opt-in way to better scale components - this has been mentioned by the team. I'd love
					to construct Svelte components from data without the compiler! I have no idea how feasible
					that is but it might be enabled by this feature. This could be a path for end users to
					"author" Svelte components without sandboxing or the compiler (with limits, but the way I
					do this today with an AST+component is much worse).
				</li>
				<li>
					iterator support for <code>#each</code> or a similar construct (<code>#iterate</code>?
					it'd be nice to render sets/maps/etc without waste)
				</li>
				<li>my two favorite RFCs are inline components and directive forwarding</li>
				<li>
					shorthand style properties <code>style:--some_css_var</code> (without the
					<code>={'{'}var}</code> part - I don't care about using kebab-case specifically for CSS vars,
					I think this wasn't implemented because of that, but +1 for snake_case CSS vars)
				</li>
				<li>
					whitespace handling (inherited from HTML, so very unlikely to change I think), sometimes
					significant whitespace causes problems, and the fix makes the code much less readable,
					it's one of the only things I miss from JSX
				</li>
				<li>
					I don't have specific suggestions but slots have some limitations that would be cool to
					see lifted
				</li>
				<li>
					the syntax to pass CSS vars directly to components breaks things like <code
						>:last-child</code
					> and other selectors, I think it may be an intractable problem tho
				</li>
			</ul>
		</blockquote>
	</DigestItem>
</Digest>
<Digest date="Jan 17 2023">
	<DigestItem>
		added the <code>Board</code> view to Felt - it's like a chat room but upside-down, so the input
		is at the top and content flows downward, replies are nested, and the newest posts and replies
		appear at the top:
		<a href="https://github.com/feltcoop/felt-server/pull/663"
			>github.com/feltcoop/felt-server/pull/663</a
		>
		<img src="{base}/images/felt-board.webp" alt="a screenshot of the board" />
	</DigestItem>
</Digest>
<Digest date="Jan 11 2023">
	<DigestItem>
		published a repo with setup instructions and resources for my dev environment: <a
			href="https://github.com/ryanatkn/setup">github.com/ryanatkn/setup</a
		>
	</DigestItem>
	<DigestItem>
		merged a pull request with a change that was suggested by an AI for the first time: <a
			href="https://github.com/ryanatkn/setup/pull/2">github.com/ryanatkn/setup/pull/2</a
		>
	</DigestItem>
</Digest>
<Digest date="Jan 8 2023">
	<DigestItem>
		fixed a rendering performance problem in <a href="https://www.cosmicplayground.org/soggy-planet"
			>Soggy Planet</a
		>
		in <a href="https://www.cosmicplayground.org/">cosmicplayground</a>, closing
		<a href="https://github.com/ryanatkn/cosmicplayground/issues/56">this issue</a>
		with <a href="https://github.com/ryanatkn/cosmicplayground/pull/65">this PR</a> - the fix had me
		write
		<a
			href="https://github.com/ryanatkn/cosmicplayground/blob/a8af730bdb7fe4efe3c985ea96db2c7074e0bec9/src/lib/app/EarthViewerPixi.svelte#L177"
			>my first WebGL shader!</a
		> The code isn't great but it works, and I'll be able to use this pattern for more performance improvements
		and new rendering capabilities
	</DigestItem>
</Digest>
<Digest date="Jan 3 2023">
	<DigestItem>
		created <a href="https://ryanatkn.github.io/svelte-store-study">Svelte store study</a> for
		assessing several <a href="https://svelte.dev/docs#run-time-svelte-store">Svelte stores</a> 🧡
		<a href="https://github.com/ryanatkn/svelte-store-study">source</a>,
		<a href="https://github.com/ryanatkn/svelte-store-study/pull/1"
			>@ryanatkn/svelte-store-study#1</a
		>
	</DigestItem>
</Digest>
<Digest date="Jan 2 2023">
	<DigestItem>
		designed and implemented this website's digests (<a
			href="https://github.com/ryanatkn/log/pull/1">@ryanatkn/log#1</a
		>)
	</DigestItem>
	<DigestItem>
		published the first three digests here at <a href="https://log.ryanatkn.com">log.ryanatkn.com</a
		>
	</DigestItem>
</Digest>
<Digest date="Jan 1 2023">
	<DigestItem>
		created this project to log my doings (<a href="https://log.ryanatkn.com">log.ryanatkn.com</a>,
		<a href="https://github.com/ryanatkn/log">source</a>)
	</DigestItem>
	<DigestItem>
		started work on an ear training game named Earworm (<a href="https://ryanatkn.github.io/earworm"
			>ryanatkn.github.io/earworm</a
		>, <a href="https://github.com/ryanatkn/earworm">source</a>), porting code from
		<a
			href="https://github.com/ryanatkn/cosmicplayground/commit/331503280c52408f0bbe49ea745b182c5b6ccb67"
			>an old prototype</a
		>
		which was a followup design to my simple ear training game
		<a href="https://ryanatkn.github.io/ear-sharpener">Ear Sharpener</a> (<a
			href="https://github.com/ryanatkn/ear-sharpener">source</a
		>)
	</DigestItem>
	<DigestItem>
		improved the ability to create a <a href="https://github.com/feltcoop/felt-server">Felt</a>
		community and its initial objects from JSON data (<a
			href="https://github.com/feltcoop/felt-server/pull/643">@feltcoop/felt-server#632</a
		>)
	</DigestItem>
</Digest>
<Digest date="Dec 30 2022">
	<DigestItem>
		created a long-term project named twc (pronounced "twick") that's the
		<a href="https://wikipedia.org/wiki/Rich_client">thick</a> web client I want to be using (<a
			href="https://www.twc.land">twc.land</a
		>, <a href="https://github.com/ryanatkn/twc">source</a>)
	</DigestItem>
</Digest>