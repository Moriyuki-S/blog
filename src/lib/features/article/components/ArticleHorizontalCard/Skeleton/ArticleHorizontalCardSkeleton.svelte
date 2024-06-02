<script>

	import { ImagePlaceholder, Skeleton } from "flowbite-svelte";

</script>
<article class="w-80 max-w-full h-20 flex pr-2 border rounded-lg overflow-y-hidden">
    <div class="w-36 h-full ">
        <ImagePlaceholder imgOnly imgHeight="20" divClass="w-36 *:max-w-full rounded-l-lg" />
    </div>
    <Skeleton divClass="grow h-full pl-4 pr-2 pt-4" />
</article>
