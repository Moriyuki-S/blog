<script lang="ts">
	import {
		Button,
		GradientButton,
		Navbar,
		NavBrand,
		NavHamburger,
		NavLi,
		NavUl
	} from 'flowbite-svelte';
	import {
		BookmarkOutline,
		MessageDotsOutline,
		SearchOutline,
		UserOutline
	} from 'flowbite-svelte-icons';
</script>

<header class="w-full border-b fixed top-0 left-0 z-10">
	<Navbar aria-labelledby="desktop-navigation">
		<NavBrand href="/">
			<h1>ブログ</h1>
		</NavBrand>
		<NavHamburger />
		<div class="hidden md:flex gap-x-5 items-center">
			<NavUl>
				<NavLi href="/profile" class="inline-flex gap-x-1 items-center">
					<UserOutline />
					プロフィール
				</NavLi>
				<NavLi href="/articles/bookmark" class="inline-flex gap-x-1 items-center">
					<BookmarkOutline />
					ブックマーク
				</NavLi>
			</NavUl>
			<ul class="flex gap-x-4">
				<li>
					<GradientButton href="/search" color="cyan">
						<SearchOutline class="me-2" />
						記事を探す
					</GradientButton>
				</li>
				<li>
					<Button href="/contact" color="alternative">
						<MessageDotsOutline class="me-2" />
						お問い合わせ
					</Button>
				</li>
			</ul>
		</div>
	</Navbar>
</header>
