<script>
	import { ImagePlaceholder, Skeleton } from 'flowbite-svelte';
</script>

<div class="min-w-72 max-w-96 w-full border border-slate-200 rounded-md">
	<div class="w-full">
		<ImagePlaceholder imgOnly divClass="!max-w-full *:!max-w-full w-full" />
	</div>
	<div class="mb-4 px-4 pt-6 pb-2">
		<Skeleton size="sm" />
	</div>
</div>
