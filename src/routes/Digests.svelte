<script lang="ts">
	import {base} from '$app/paths';

	import Digest from '$lib/Digest.svelte';
	import DigestItem from '$lib/DigestItem.svelte';

	// TODO change this so each `DigestItem` is a separate component, and drive everything with data
</script>

<Digest date="Mar 1 2023">
	<DigestItem>
		added the editor proof-of-concept for <a href="https://control.ssag.dev/">control.ssag.dev</a>
		(pull
		<a href="https://github.com/ryanatkn/control.ssag.dev/pull/5">#5</a>,
		<a href="https://github.com/ryanatkn/control.ssag.dev/pull/6">#6</a>)
	</DigestItem>
</Digest>
<Digest date="Feb 25 2023">
	<DigestItem>
		changed <a href="https://github.com/feltcoop/dealt">dealt</a> (<a href="https://www.dealt.dev/"
			>dealt.dev</a
		>) to have its stages and entities be data-driven, opening up some interesting opportunities (<a
			href="https://github.com/feltcoop/dealt/pull/62">#62</a
		>)
	</DigestItem>
</Digest>
<Digest date="Feb 22 2023">
	<DigestItem>
		added the hello worlds for <a href="https://www.ssag.dev/">ssag.dev</a> (<a
			href="https://github.com/ryanatkn/ssag">source</a
		>, pull
		<a href="https://github.com/ryanatkn/ssag/pull/1">#1</a>,
		<a href="https://github.com/ryanatkn/ssag/pull/2">#2</a>) and
		<a href="https://control.ssag.dev/">control.ssag.dev</a>
		(<a href="https://github.com/ryanatkn/control.ssag.dev">source</a>, pull
		<a href="https://github.com/ryanatkn/control.ssag.dev/pull/1">#1</a>,
		<a href="https://github.com/ryanatkn/control.ssag.dev/pull/2">#2</a>)
	</DigestItem>
</Digest>
<Digest date="Feb 20 2023">
	<DigestItem>
		revamped the camera in <a href="https://github.com/feltcoop/dealt">dealt</a> (<a
			href="https://www.dealt.dev/">dealt.dev</a
		>, pull
		<a href="https://github.com/feltcoop/dealt/pull/59">#59</a>) and published
		<a href="https://www.npmjs.com/package/@feltcoop/dealt">@feltcoop/dealt@0.4.0</a>, examples at
		<a href="https://www.dealt.dev/membrane">dealt.dev/membrane</a>
		and
		<a href="https://www.dealt.dev/gravity">dealt.dev/gravity</a>
	</DigestItem>
</Digest>
<Digest date="Feb 5 2023">
	<DigestItem>
		in <a href="https://github.com/feltjs/felt-ui">felt-ui</a> made
		<a href="https://ui.felt.dev/library/Whiteboard">Whiteboard.svelte</a> data-driven, and used
		those changes to make
		<a href="https://ui.felt.dev/sketch/whiteboard">the whiteboard sketch</a> collaborative by
		piggybacking <a href="https://github.com/feltjs/felt-server">felt-server</a>'s infrastructure
		when iframed (pull <a href="https://github.com/feltjs/felt-ui/pull/274">#274</a>)
	</DigestItem>
</Digest>
<Digest date="Feb 1 2023">
	<DigestItem>
		deployed the new <a href="https://www.felt.dev/">www.felt.dev</a> (pull
		<a href="https://github.com/feltjs/felt/pull/5">#5</a>) and
		<a href="https://ui.felt.dev/">ui.felt.dev</a>
		(pull <a href="https://github.com/feltjs/felt-ui/pull/273">#273</a>)
	</DigestItem>
	<DigestItem>
		in <a href="https://github.com/feltjs/felt-ui">felt-ui</a> added
		<a href="https://ui.felt.dev/library/Whiteboard">Whiteboard.svelte</a>
		and
		<a href="https://ui.felt.dev/sketch/whiteboard">the whiteboard sketch</a>
		(pull <a href="https://github.com/feltjs/felt-ui/pull/269">#269</a>)
	</DigestItem>
	<DigestItem>
		in <a href="https://github.com/feltjs/felt-server">felt-server</a> merged a change that allows
		clients to construct actions using a generic form (pull
		<a href="https://github.com/feltjs/felt-server/pull/614">#614</a>)
	</DigestItem>
</Digest>
<Digest date="Jan 28 2023">
	<DigestItem>
		<p>
			<a href="https://github.com/ryanatkn/ryanatkn.com/pull/9">revised</a> and
			<a href="https://hci.social/@ryanatkn/109768104377997044">tooted</a>
			about my second blog post,
			<a
				href="https://www.ryanatkn.com/blog/modeling-virtual-social-spaces-in-this-house-we-post-cat-pics-on-saturday"
				>"Modeling virtual social spaces: in this house we post cat pics on Saturday"</a
			>, with more on Mastodon:
		</p>
		<blockquote>
			<blockquote>
				<a href="https://social.coop/@ntnsndr">@ntnsndr@social.coop</a> (<a
					href="https://hci.social/@ntnsndr@social.coop/109769071559782405">Mastodon</a
				>): WIth
				<a href="https://mediarxiv.org/sf432/">ntnsndr.in/ImplicitFeudalism</a> in mind, I'm curious
				whether there is any possibility of checking the power of Control? Is there a way in which that
				could be non-absolute?
			</blockquote>
			<blockquote>
				<p>
					<a href="https://hci.social/@ryanatkn">@ryanatkn@hci.social</a> (<a
						href="https://hci.social/@ryanatkn/109770113441485629">Mastodon</a
					>): Yeah! Here's how we're thinking about it right now with Felt. Still ratcheting up the
					ladder to climb out of the feudal hole.
				</p>
				<p>
					Control is held at the group/org/community level (Felt names these "hubs" now) by actors.
					In the default hub template the creator gets the all-powerful "steward" role, but the hub
					itself has an actor, and control is transferable/sharable. The hub actor's actions are
					controllable by automated/assisted/direct processes. Other group actors could be involved.
				</p>
				<blockquote>
					<p>
						to clarify, "steward" is just the name for a role in the default hub template and a
						convenient way to reference the idea, they can be constrained with fine-grained
						permissions like any other customizable role - this contrasts with Slack (no
						customizable roles) and Discord (coarse-grained permissions)
					</p>
					<p>
						given this API you could design a set of roles that split powers, separating/balancing
						concerns
					</p>
					<p>
						hub templates make it easy to share pre-fab designs with the initial
						roles/permissions/etc
					</p>
				</blockquote>
				<p>
					In our implementation, actors are assigned roles which have permissions. You helped me
					realize that by splitting permissions among roles we could support non-absolute power with
					this: <a href="https://hci.social/@ryanatkn/109770994846184255"
						>hci.social/@ryanatkn/109770994846184255</a
					>
				</p>
				<p>
					An all-powerful group actor's actions could result from collective governance processes
				</p>
				<p>
					or, I think we can support designing systems with structural checks and balances through
					permission assignment, so any actors could have mutually co-checking subsets of
					permissions in a hub
				</p>
				<p>
					That's the first-order UX prioritized by end users. This second part is ignorable by most
					people most of the time, but for the governance enthusiast:
				</p>
				<p>
					Hubs are hosted on infrastructure controlled by "operator" actors. These have the power to
					pull the plug, and may technically have hub control bypassing stewards, like modifying a
					database.
				</p>
				<p>
					Maybe there's instance/server/etc levels between infra and hub, but that's an impl detail.
					Felt has instances controlled by "admins".
				</p>
				<p>
					The operator actor could be co-ops/nonprofits/other orgs, or as you've written about,
					bl0ckchains or similar. Bchain enthusiasm makes sense here b/c the operator won't pull the
					plug or modify the db barring acts of God. <a href="https://www.felt.social/"
						>Felt.social</a
					> plans to be a platform co-op operator providing infra.
				</p>
				<p>
					btw I love this so much, Boba Board (<a href="https://www.boba.social/">boba.social</a>)
					has leaned into *explicit* feudalism for their fandom communities, owning it right in the
					brand! "Be the Monarch of Your Own Realm!"
				</p>
			</blockquote>
			<p><a href="https://hci.social/@ntnsndr@social.coop/109769071559782405">link</a></p>
		</blockquote>
	</DigestItem>
	<DigestItem>
		<p>
			wrote <a
				href="https://np.reddit.com/r/sveltejs/comments/10necle/five_svelte_games_to_learn_how_to_code/"
				>a long comment</a
			>
			about <a href="https://ryanatkn.github.io/svelte-snake-sports">svelte🐍snake🐍sports</a> (<a
				href="https://github.com/ryanatkn/svelte-snake-sports">source</a
			>) on aliensite:
		</p>
		<blockquote>
			<p>
				Oh hey I'm the Svelte Snake Sports author, thanks for the mention. A few things if anyone
				tries to learn from the the code:
			</p>
			<ul>
				<li>
					The code is not refined at all. Some parts are pretty clean, but at the top level where
					the games are implemented, it's kind of a mess. If I had more time/energy I'd refactor a
					lot of things and figure out better interfaces. The goal was to support highly varying
					kinds of games, and I succeeded at getting my designs to work, but I wouldn't point
					beginners at the codebase to learn from unless they were very motivated and understood how
					weird some of it is.
				</li>
				<li>
					There's some experimentation with component instances exporting their objects for external
					access as an alternative to plain modules or stores -- in particular
					<a
						href="https://github.com/ryanatkn/svelte-snake-sports/blob/main/src/lib/SnakeGame.svelte"
						><code>$lib/SnakeGame.svelte</code></a
					>. That's why it has <code>{'<'}svelte:options accessors /></code> at the top. I wanted to
					be able to use Svelte's sweet component-level reactivity. The pattern works but it makes initialization
					much harder. I'm dubious about its value because of that.
				</li>
				<li>
					The REPL version is broken because some dependencies had major version bumps and the REPL
					is just importing from unpkg without versions. I was thinking I should bundle everything
					into a single script -- I have a fork of the repo for publishing to NPM for the REPL
					because it fails with types in the Svelte files. Pretty hacky all around. I thought the
					REPL version was important for the project to be more approachable but it's been a
					headache, mostly because of my own mistakes.
				</li>
				<li>
					I like the AI generated images (it took a <em>while</em> to get cute-looking snakes) but I
					probably won't do it in the future for this kind of project, I'd draw/code my own or pay artists
					instead.
				</li>
			</ul>
			<p>It was a lot of fun to make though! I was needing a break from more serious work.</p>
			<p>
				Just tried it on mobile and it seems the tap location calculations are off if you're
				scrolled on the page, I know what I did wrong and will probably fix soon. It's also scaling
				weirdly when I scroll, darn.
			</p>
			<p>
				Also if you click "show settings" at the bottom you can change the map size and some other
				things. Lots of potential but I ran out of steam. I have a different <a
					href="https://github.com/ryanatkn/cosmicplayground">non-snake action game</a
				> that I'll probably work on instead when I have that itch to scratch. It has some gameplay but
				is unfinished/unpolished and it's not communicated well.
			</p>
			<p>
				<a
					href="https://np.reddit.com/r/sveltejs/comments/10necle/five_svelte_games_to_learn_how_to_code/"
					>link</a
				>
			</p>
		</blockquote>
	</DigestItem>
</Digest>
<Digest date="Jan 24 2023">
	<DigestItem>
		renamed this project's main building block from <code>Bulletin</code> to <code>Digest</code>,
		seems friendlier and better for puns (<a
			href="https://github.com/ryanatkn/log/commit/63214e4a6ae2a1d196b3565b13f3fd6fb55a48ce"
			>commit</a
		>)
	</DigestItem>
</Digest>
<Digest date="Jan 23 2023">
	<DigestItem>
		moved most of our projects on GitHub from <a href="https://github.com/feltcoop">@feltcoop</a> to
		<a href="https://github.com/feltjs">@feltjs</a>, which will be a nonprofit, tightening
		@feltcoop's scope to be a platform operator at
		<a href="https://www.felt.social/">felt.social</a> (still with the goal to be a
		<a href="https://platform.coop/">platform co-op</a>), and making @feltjs and its repos a
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
		<p>
			posted my Svelte 4 wishlist to
			<a href="https://np.reddit.com/r/sveltejs/comments/10iud65/comment/j5hh1wi/"
				>a Reddit thread in /r/sveltejs</a
			>:
		</p>
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
		<p>
			added the <code>Board</code> view to Felt - it's like a chat room but upside-down, so the
			input is at the top and content flows downward, replies are nested, and the newest posts and
			replies appear at the top:
			<a href="https://github.com/feltjs/felt-server/pull/663"
				>github.com/feltjs/felt-server/pull/663</a
			>
		</p>
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
		improved the ability to create a <a href="https://github.com/feltjs/felt-server">Felt</a>
		community and its initial objects from JSON data (<a
			href="https://github.com/feltjs/felt-server/pull/643">@feltjs/felt-server#632</a
		>)
	</DigestItem>
</Digest>
