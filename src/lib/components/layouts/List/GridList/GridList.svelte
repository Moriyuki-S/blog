<script lang="ts">
	export let ulStyleClass: string = '';
</script>

<ul class={`grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ${ulStyleClass}`}>
	<slot />
</ul>
