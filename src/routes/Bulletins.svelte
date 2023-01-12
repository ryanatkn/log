<script lang="ts">
	import Bulletin from '$lib/Bulletin.svelte';
	import Bullet from '$lib/Bullet.svelte';
</script>

<Bulletin date="Jan 11 2023">
	<Bullet>
		published a repo with setup instructions and resources for my dev environment: <a
			href="https://github.com/ryanatkn/setup">github.com/ryanatkn/setup</a
		>
	</Bullet>
</Bulletin>
<Bulletin date="Jan 8 2023">
	<Bullet>
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
	</Bullet>
</Bulletin>
<Bulletin date="Jan 3 2023">
	<Bullet>
		created <a href="https://ryanatkn.github.io/svelte-store-study">Svelte store study</a> for
		assessing several <a href="https://svelte.dev/docs#run-time-svelte-store">Svelte stores</a> 🧡
		<a href="https://github.com/ryanatkn/svelte-store-study">source</a>,
		<a href="https://github.com/ryanatkn/svelte-store-study/pull/1"
			>@ryanatkn/svelte-store-study#1</a
		>
	</Bullet>
</Bulletin>
<Bulletin date="Jan 2 2023">
	<Bullet>
		designed and implemented this website's bulletins (<a
			href="https://github.com/ryanatkn/log/pull/1">@ryanatkn/log#1</a
		>)
	</Bullet>
	<Bullet>
		published the first three bulletins here at <a href="https://log.ryanatkn.com"
			>log.ryanatkn.com</a
		>
	</Bullet>
</Bulletin>
<Bulletin date="Jan 1 2023">
	<Bullet>
		created this project to log my doings (<a href="https://log.ryanatkn.com">log.ryanatkn.com</a>,
		<a href="https://github.com/ryanatkn/log">source</a>)
	</Bullet>
	<Bullet>
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
	</Bullet>
	<Bullet>
		improved the ability to create a <a href="https://github.com/feltcoop/felt-server">Felt</a>
		community and its initial objects from JSON data (<a
			href="https://github.com/feltcoop/felt-server/pull/643">@feltcoop/felt-server#632</a
		>)
	</Bullet>
</Bulletin>
<Bulletin date="Dec 30 2022">
	<Bullet>
		created a long-term project named twc (pronounced "twick") that's the
		<a href="https://wikipedia.org/wiki/Rich_client">thick</a> web client I want to be using (<a
			href="https://www.twc.land">twc.land</a
		>, <a href="https://github.com/ryanatkn/twc">source</a>)
	</Bullet>
</Bulletin>
