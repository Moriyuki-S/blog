<script lang="ts">
	import { cubicInOut } from "svelte/easing";


	import { fade, type EasingFunction } from "svelte/transition";
    export let duration: number = 150;
    export let delay: number = 0;
    export let easing: EasingFunction = cubicInOut;

</script>
<div in:fade={{duration, delay, easing}}>
    <slot />
</div>