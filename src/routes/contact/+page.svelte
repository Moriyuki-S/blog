<script lang="ts">
	import { Button, Input, Label, Textarea } from 'flowbite-svelte';
</script>

<main class="pt-5 md:pt-10">
	<hgroup class="*:text-center">
		<h1 class="text-xl font-bold md:text-3xl">お問い合わせ</h1>
		<p class="text-xs mt-4 md:text-lg">
			<!--問い合わせの説明-->
			以下のフォームにてお問い合わせください。
		</p>
	</hgroup>
	<form method="post">
		<div class="flex flex-col items-center gap-y-5 pt-8 px-5 max-w-[50rem] *:w-full md:mx-auto">
			<fieldset>
				<Label for="form-name" class="mb-2">お名前（必須）</Label>
				<Input type="text" id="form-name" required name="name" />
			</fieldset>
			<fieldset>
				<Label for="form-email" class="mb-2">メールアドレス（必須）</Label>
				<Input
					type="email"
					id="form-email"
					required
					placeholder="sample@example.com"
					name="email"
				/>
			</fieldset>
			<fieldset>
				<Label for="form-content" class="mb-2">お問い合わせ内容（必須）</Label>
				<Textarea id="form-content" rows="5" required name="contents" />
			</fieldset>
			<Button type="submit" class="max-w-28">送信する</Button>
		</div>
	</form>
</main>
