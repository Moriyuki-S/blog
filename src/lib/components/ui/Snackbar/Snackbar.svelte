<script lang="ts">
	import { CloseOutline } from "flowbite-svelte-icons";
	import { fade } from "svelte/transition";

    export let message: string;
    export let timeout: number = 5000;
    let active: boolean = true;

    const closeSnackbar = () => {
        active = false;
    };

    setTimeout(() => {
        closeSnackbar();
    }, timeout);

</script>

<div data-component="snackbar" transition:fade={{ duration: 1000 }} class={`${active ? "fixed right-8 bottom-8" : "hidden"} flex box-content bg-sky-500 items-center justify-center gap-x-4 px-5 py-2 rounded-md`}>
    <p class="text-white py-2">{message}</p>
    <button on:click|preventDefault={closeSnackbar} class="hover:bg-gray-200 transition-all rounded-sm">
        <div class="p-2">
            <CloseOutline color="white" class=""/>
        </div>
    </button>
</div>

<style>

</style>