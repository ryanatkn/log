<script lang="ts">
	// A list of `DigestItem`s.

	export let date: string;
</script>

<div class="digest panel markup">
	<h3>{date}</h3>
	<ul>
		<slot />
	</ul>
</div>

<style>
	.digest {
		padding: var(--spacing_xl);
		margin-bottom: var(--spacing_xl3);
	}
</style>
