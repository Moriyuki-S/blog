<script lang="ts">
	export let styleClass: string = '';
</script>

<aside class={`hidden md:block ${styleClass}`}>
	<slot />
</aside>
