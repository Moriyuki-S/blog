<script lang="ts">
	export let styleClass: string = '';
</script>

<h1 class={`text-4xl text-center font-bold md:pl-5 md:text-6xl ${styleClass}`}>
	<slot />
</h1>
