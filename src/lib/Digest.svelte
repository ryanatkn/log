<script lang="ts">
	// A list of `DigestItem`s.

	export let date: string;

	$: id = date.replaceAll(' ', '-').toLowerCase();
	$: href = '#' + id;
</script>

<div class="digest panel markup">
	<h3><a {href} {id}>{date}</a></h3>
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
