<script lang="ts">
    export let styleClass: string = '';
    export let center: boolean = false;
    $: centerStyleClass = center ? 'flex justify-center items-center': '';
</script>

<div class={`w-full h-24 px-2 md:h-48 ${centerStyleClass} ${styleClass}`} >
    <slot />
</div>