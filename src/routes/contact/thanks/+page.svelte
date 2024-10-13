<script>
	import { goto } from '$app/navigation';
	import { Button } from 'flowbite-svelte';

	// 遷移後に戻るボタンで戻れないようにする
	const navigateHome = () => {
		goto('/', {
			replaceState: true
		});
	};
</script>

<main class="w-full">
	<div class="w-full flex flex-col items-center gap-y-6 px-5 pt-5 md:pt-12">
		<hgroup class="pt-10 md:pt-5">
			<h1 class="text-2xl text-center font-bold mb-5 md:text-4xl">お問い合わせ完了</h1>
			<p class="mb-1 text-lg">お問い合わせありがとうございました。</p>
			<p class="text-lg">送信確認メールをお送りいたしましたので、ご確認ください。</p>
		</hgroup>
		<div>
			<img src="" alt="お問い合わせありがとうございます" width="250" height="250" />
		</div>
		<Button on:click={navigateHome}>ホームへ戻る</Button>
	</div>
</main>
