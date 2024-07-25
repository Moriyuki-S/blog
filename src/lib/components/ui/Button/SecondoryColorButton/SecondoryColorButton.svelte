<script>
	import { Button } from "flowbite-svelte";

</script>
<Button {...$$props} class="bg-secondory-500 hover:bg-secondory-600 dark:bg-secondory-600 dark:hover:bg-secondory-700 focus-within:ring-secondory-500">
    <slot />
</Button>