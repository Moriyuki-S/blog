<script>
	import { ImagePlaceholder, Skeleton } from 'flowbite-svelte';
</script>

<article class="lg:min-w-80 w-full h-20 flex border rounded-lg overflow-hidden">
	<div class="w-24 h-20">
		<ImagePlaceholder imgOnly imgHeight="20" divClass="w-24 lg:w-36 *:max-w-full rounded-l-lg" />
	</div>
	<Skeleton divClass="grow h-20 pl-4 pr-2 pt-4" />
</article>
