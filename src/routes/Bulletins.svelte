<script lang="ts">
	import Bulletin from '$lib/Bulletin.svelte';
	import Bullet from '$lib/Bullet.svelte';
</script>

<Bulletin date="Jan 1 2023">
	<Bullet>
		created this project (<a href="https://log.ryanatkn.com">log.ryanatkn.com</a>), source code is
		<a href="https://github.com/ryanatkn/log">github.com/ryanatkn/log</a>
	</Bullet>
	<Bullet>
		started work on an ear training game named Earworm (<a href="https://ryanatkn.github.io/earworm"
			>ryanatkn.github.io/earworm</a
		>, <a href="https://github.com/ryanatkn/earworm">source</a>), porting it from
		<a
			href="https://github.com/ryanatkn/cosmicplayground/commit/331503280c52408f0bbe49ea745b182c5b6ccb67"
			>an old prototype</a
		>
		which was a followup design to my simple ear training game
		<a href="https://ryanatkn.github.io/ear-sharpener">Ear Sharpener</a> (<a
			href="https://github.com/ryanatkn/ear-sharpener">source</a
		>)
	</Bullet>
</Bulletin>
