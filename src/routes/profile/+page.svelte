<script lang="ts">
	import RightSidebar from '$lib/components/layouts/RightSidebar/RightSidebar.svelte';
	import ArticleContents from '$lib/features/article/components/ArticleContents/ArticleContents.svelte';
	import {
		Modal,
		SpeedDial,
		SpeedDialButton,
		Breadcrumb,
		BreadcrumbItem,
		Alert
	} from 'flowbite-svelte';
	import {
		ArrowUpOutline,
		ListOutline,
		UserSolid,
		ExclamationCircleSolid
	} from 'flowbite-svelte-icons';
	import { fade } from 'svelte/transition';
	import profileIcon from '$lib/assets/images/profile-icon.png?enhanced';
	import PageTitleWrapper from '$lib/components/layouts/PageTitle/Wrapper/PageTitleWrapper.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle/PageTitle.svelte';
	import BreadcrumbWrapper from '$lib/components/layouts/Breadcrumb/BreadcrumbWrapper.svelte';

	let speedDialOpen: boolean = false;
	let tocModalOpen: boolean = false;

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		speedDialOpen = false;
	};

	const openTocModal = () => {
		tocModalOpen = true;
	};
</script>

<svelte:head>
	<title>プロフィール</title>
	<meta name="description" content="プロフィールページです。" />
</svelte:head>

<div class="pt-16 md:px-4">
	<BreadcrumbWrapper>
		<Breadcrumb>
			<BreadcrumbItem href="/" home>ホーム</BreadcrumbItem>
			<BreadcrumbItem href="/profile">プロフィール</BreadcrumbItem>
		</Breadcrumb>
	</BreadcrumbWrapper>
	<PageTitleWrapper center>
		<PageTitle styleClass="flex items-center">
			<UserSolid color="blue" class="me-2 pt-2 w-8 h-8 md:w-14 md:h-14" />
			プロフィール
		</PageTitle>
	</PageTitleWrapper>
</div>

<div
	class="w-full py-10 px-4 flex flex-col items-center md:items-start md:flex-row md:justify-around"
>
	<main
		class="w-full flex flex-col gap-y-3 items-center px-5 py-20 bg-white rounded-lg md:max-w-[50rem]"
	>
		<enhanced:img
			src={profileIcon}
			sizes="160px"
			class="w-40 h-40 rounded-full"
			alt="プロフィールアイコン"
		/>
		<h1 class="text-3xl text-center font-extrabold mt-4">りき</h1>
		<div id="bio-body" class="pt-3 leading-10">
			<p class="bio-first">はじめまして！</p>
			<p class="bio-first">理系大学生の<span class="font-bold">「りき」</span>と申します！</p>

			<h2 id="簡単な自己紹介">
				<a href="#簡単な自己紹介">簡単な自己紹介</a>
			</h2>
			<ul>
				<li>理系の大学3年生</li>
				<li>一人暮らし歴3年</li>
				<li>完全夜行性</li>
				<li>自炊せず、ほぼ外食</li>
			</ul>

			<h2 id="なぜブログを始めたのか？">
				<a href="#なぜブログを始めたのか？"> なぜブログを始めたのか？ </a>
			</h2>
			<p class="underline font-bold decoration-yellow-400 decoration-4">
				自由な時間やイベントの多い大学生活を、より多くの人が有意義に過ごせたらと思い、
				ブログを始めました。
			</p>
			<p>
				個人的に、大学生活は<span class="font-bold text-red-500">「情報戦」</span>だと思っています。
				<span class="font-bold underline decoration-wavy decoration-green-400"
					>「先輩や友達からいかに情報を仕入れるか」</span
				>で、大学生活の充実度は大きく変わると感じています。
			</p>
			<p>
				例えば、履修している授業の攻略法を先輩に聞いたり、友達と恋愛事情について話したりと、いろいろな場面で「情報を仕入れる」
				ことが重要になリます。しかし、ぶっちゃけ大学では仲のいい友達や先輩を作りにくいです（僕だけかもしれませんが笑）。
			</p>
			<p>
				そこで、このブログで僕自身の経験について発信することで、<span
					class="underline decoration-red-400 decoration-4"
					>大学生活に関する<span class="font-bold">「情報の仕入れ先」</span
					>的な役割を果たせれば</span
				>と思っています。
			</p>

			<h2 id="ブログの主な内容">
				<a href="#ブログの主な内容">ブログの主な内容</a>
			</h2>
			<p class="underline font-bold decoration-yellow-400 decoration-4">
				このブログでは僕自身が経験した大学生活や、それに役立つと思ったことを調べて記事に書きます。
			</p>
			<p>
				また、僕自身3年生ということもあり、まだ大学生が終わったわけではないので、<span
					class="font-bold underline decoration-wavy decoration-green-400"
					>現在進行形で体験していることなども発信するつもりです</span
				>。
			</p>
			<Alert color="yellow" class="font-bold text-base">
				<ExclamationCircleSolid slot="icon" />
				このブログは、僕自身の経験に基づいた意見や考えを発信しています。そのため、記事の内容には個人差があることをご了承ください。
			</Alert>
		</div>
	</main>
	<RightSidebar styleClass="hidden md:block md:w-72 md:h-[28rem] md:sticky md:top-28">
		<div class="w-full h-full p-5 bg-gray-50 rounded-lg">
			<p class="flex items-center text-2xl font-bold border-b pb-1">
				<ListOutline class="me-2" />
				目次
			</p>
			<div class="w-full h-full">
				<ArticleContents />
			</div>
		</div>
	</RightSidebar>
</div>

{#if speedDialOpen}
	<div
		transition:fade
		class="md:hidden w-full h-full fixed top-0 left-0 z-20 bg-gray-900 bg-opacity-50"
	></div>
{/if}

<SpeedDial
	color="cyanToBlue"
	gradient
	bind:open={speedDialOpen}
	defaultClass="md:hidden fixed end-6 bottom-20 z-30"
	tooltip="none"
	textOutside
>
	<SpeedDialButton
		name="目次"
		on:click={openTocModal}
		textOutsideClass="block absolute text-white -start-16 top-1/2 mb-px text-sm font-medium -translate-y-1/2"
	>
		<ListOutline />
	</SpeedDialButton>
	<SpeedDialButton
		name="先頭へ"
		on:click={scrollToTop}
		textOutsideClass="block absolute text-white -start-16 top-1/2 mb-px text-sm font-medium -translate-y-1/2"
	>
		<ArrowUpOutline />
	</SpeedDialButton>
</SpeedDial>

<Modal bind:open={tocModalOpen} class="md:hidden" outsideclose autoclose>
	<div slot="header">
		<h5 class="text-xl font-bold pl-5">目次</h5>
	</div>
	<button
		type="button"
		class="mx-auto block"
		on:click={() => (tocModalOpen = false)}
		on:keydown={(event) => {
			if (event.key === 'Enter' || event.key === ' ') {
				tocModalOpen = false;
			}
		}}
	>
		<ArticleContents />
	</button>
</Modal>

<style>
	#bio-body h2 {
		font-size: 1.5rem;
		font-weight: 600;
		margin-top: 2.5rem;
		margin-bottom: 1.5rem;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid #e2e8f0;
		scroll-margin-top: 98px;
	}

	#bio-body ul {
		list-style: disc;
		margin-left: 1.5rem;
	}

	#bio-body li {
		padding-left: 0.5rem;
	}

	#bio-body p {
		text-indent: 1.125rem;
		margin-bottom: 2rem;
	}

	#bio-body p.bio-first {
		margin-bottom: 1rem;
	}
</style>
