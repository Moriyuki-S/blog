<script lang="ts">
	import { Alert } from "flowbite-svelte";
	import { InfoCircleSolid } from "flowbite-svelte-icons";

    export let notFoundMessage: string;
    export let styleClass: string = '';
    export let color: 'red' | 'yellow' = 'red'


</script>

<Alert border {color} class={styleClass}>
    <InfoCircleSolid slot="icon" />
    <span class="font-bold">{notFoundMessage}</span>
</Alert>