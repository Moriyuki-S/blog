<script lang="ts">
	export let styleClass: string = '';
</script>

<aside class={`hidden md:block max-w-72 border border-sky-200 ${styleClass}`}>
	<slot />
</aside>
