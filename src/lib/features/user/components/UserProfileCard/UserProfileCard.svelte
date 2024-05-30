<script lang="ts">
	import { Avatar, Button, Card } from 'flowbite-svelte';
    import type { Administrator } from '../../types/type';

    export let user: Administrator;
</script>

<Card padding="md">
    <div class="flex flex-col items-center gap-y-5">
        <Avatar src={user.iconUrl} alt='管理人のプロフィールアイコン' size="lg" />
        <hgroup>
            <h5 class="text-xl text-center mb-8">
                {user.name}
            </h5>
            <p class="max-h-40">
                {user.biography}
            </p>
        </hgroup>
        <Button href="/">詳しく見る</Button>
    </div>
</Card>