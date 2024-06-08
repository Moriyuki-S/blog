<script lang="ts">
    import { page } from '$app/stores';
</script>

<main>
    <picture>
        <source srcset="">
    </picture>
    <h1>{$page.status}</h1>
    <p>{$page.error?.message}</p>
</main>