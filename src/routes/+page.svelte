<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import Bulletins from './Bulletins.svelte';
</script>

<main>
	<Header />
	<div class="column">
		<div class="centered-hz">
			<header class="panel">
				<h1>log.ryanatkn.com</h1>
				<div><a href="https://github.com/ryanatkn/log">source</a></div>
			</header>
		</div>
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
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		margin: var(--spacing_xl3) 0;
		padding: var(--spacing_xl);
	}
	h1 {
		margin-bottom: var(--spacing_xs);
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
