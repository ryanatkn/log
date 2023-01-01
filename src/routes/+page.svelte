<script lang="ts">
	import Mreows from '$lib/Mreows.svelte';

	let mreows: Array<{icon: string}> | undefined;
</script>

<main class="markup column">
	<section>
		<header class="centered-hz">
			<h1><a href="https://github.com/ryanatkn/log">@ryanatkn/log</a></h1>
		</header>
		<p><strong>status:</strong> hello world</p>
	</section>
	<section>
		<div>todo</div>
		<ul>
			<li>
				figure out an authoring flow (a task to make a file? increment like blog, check like
				migrations?)
			</li>
			<li>
				view both in a canonical form (designed root page, folders) and most recently changed (and
				other sorting, but mainly reverse chronological)
			</li>
		</ul>
	</section>
	<Mreows bind:mreows />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
	h1 {
		text-align: center;
	}
</style>
