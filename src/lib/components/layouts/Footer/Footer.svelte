<script lang="ts">
	import { Footer, FooterCopyright } from 'flowbite-svelte';
	import { ArrowUpRightFromSquareSolid } from 'flowbite-svelte-icons';
</script>

<Footer class="w-full border-t pt-2 pb-[4.5rem] md:py-2">
	<FooterCopyright
		href="/"
		year={2024}
		by="Copyright りき"
		classSpan="block text-sm pb-2 text-gray-500 text-center dark:text-gray-400"
	/>
	<p class="border-t text-sm pt-4 pb-2 mx-5 indent-4 text-gray-500">
		このサイトはGoogle Analyticsを使用しています。 詳しくは
		<a
			class="underline text-blue-500"
			href="https://marketingplatform.google.com/about/analytics/terms/jp/"
			target="_blank"
			rel="noreferrer noopener"
		>
			Google Analyticsサービス利用規約
			<ArrowUpRightFromSquareSolid class="inline pb-1 w-5 h-5" />
		</a>
		や、
		<a
			class="underline text-blue-500"
			href="https://policies.google.com/technologies/ads?hl=ja"
			target="_blank"
			rel="noreferrer noopener"
		>
			Googleポリシーと規約ページ
			<ArrowUpRightFromSquareSolid class="inline pb-1 w-5 h-5" />
		</a>
		をご覧ください。
	</p>
</Footer>
