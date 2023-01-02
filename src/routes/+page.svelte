<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import Bulletins from './Bulletins.svelte';
</script>

<main>
	<Header />
	<div class="markup column">
		<section>
			<header class="centered-hz">
				<h1><a href="https://github.com/ryanatkn/log">@ryanatkn/log</a></h1>
			</header>
		</section>
		<section>
			<Bulletins />
		</section>
	</div>
	<Footer />
</main>

<style>
	main {
		min-height: 100%;
		width: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	h1 {
		text-align: center;
	}
	.column {
		flex: 1;
	}
</style>
