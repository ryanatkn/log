<script lang="ts">
	// An item in a `Bulletin`.
</script>

<li class="bullet">
	<slot />
</li>

<style>
	li :global(img) {
		display: block;
		margin-top: var(--spacing_xs);
		box-shadow: 1px 1px 4px #0002, 2px 2px 10px #0002;
	}
</style>
