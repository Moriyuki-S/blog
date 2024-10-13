<script lang="ts">
    export let styleClass: string = '';
</script>

<div class={`ml-5 mb-2 md:ml-8 ${styleClass}`}>
    <slot />
</div>