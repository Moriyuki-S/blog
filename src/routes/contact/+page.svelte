<script lang="ts">
	import { GOOGLE_FORM_SRC } from '$lib/config';
</script>

<svelte:head>
	<title>お問い合わせ</title>
	<meta name="description" content="ページのフォームからお問い合わせください。" />
	<meta name="robots" content="noindex" />
</svelte:head>

<main class="pt-5 md:pt-10">
	<hgroup class="*:text-center pt-10 md:pt-5">
		<h1 class="text-xl font-bold md:text-3xl">お問い合わせ</h1>
		<p class="text-xs mt-4 md:text-lg">以下のフォームにてお問い合わせください。</p>
	</hgroup>
	<div class="max-w-full pt-10 w-[95%] mx-auto">
		<iframe
			title="お問い合わせフォーム"
			src={GOOGLE_FORM_SRC}
			width="95%"
			height="818"
			frameborder="0"
			marginheight="0"
			marginwidth="0">読み込んでいます…</iframe
		>
	</div>
</main>
