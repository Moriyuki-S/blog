<script lang="ts">
	import type { Tag } from "../../types/type";

    export let tag: Readonly<Tag>;
</script>

<div class="w-5 h-3 border">
    <img src={tag.iconUrl} alt={`${tag.name}のアイコン`}>
    <span>{tag.name}</span>
</div>