<script lang="ts">
	// A list of `Bullet`s.

	export let date: string;
</script>

<div class="bulletin">
	<h3>{date}</h3>
	<ul>
		<slot />
	</ul>
</div>

<style>
</style>
