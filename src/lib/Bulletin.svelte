<script lang="ts">
	// A list of `Bullet`s.

	export let date: string;
</script>

<div class="bulletin panel markup">
	<h3>{date}</h3>
	<ul>
		<slot />
	</ul>
</div>

<style>
	.bulletin {
		padding: var(--spacing_xl);
		margin-bottom: var(--spacing_xl3);
	}
</style>
