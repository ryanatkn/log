<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import Bulletins from './Bulletins.svelte';
</script>

<main>
	<Header />
	<div class=" column">
		<section>
			<header class="centered-hz">
				<h1><a class="panel padded-xl" href="https://github.com/ryanatkn/log">@ryanatkn/log</a></h1>
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
	header {
		text-align: center;
		margin: var(--spacing_xl3) 0;
	}
	@media (max-width: 400px) {
		h1 {
			font-size: var(--font_size_xl2);
		}
	}
	.column {
		flex: 1;
	}
</style>
