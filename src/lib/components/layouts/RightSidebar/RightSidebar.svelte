<script lang="ts">
	export let styleClass: string = '';
</script>

<aside class={`hidden md:block max-w-72 ${styleClass}`}>
	<slot />
</aside>
