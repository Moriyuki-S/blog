<script lang="ts">
	import { Alert } from "flowbite-svelte";
	import { InfoCircleSolid } from "flowbite-svelte-icons";

    export let notFoundMessage: string;
    export let styleClass: string = "";


</script>

<Alert border color="red" class={styleClass}>
    <InfoCircleSolid slot="icon" />
    <span class="font-bold">{notFoundMessage}</span>
</Alert>