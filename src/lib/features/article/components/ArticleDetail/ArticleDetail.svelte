<script lang="ts">
	import type { Article } from "../../types/type";

    export let article: Readonly<Article>;
</script>

<article class="w-full">

    <h2>{article.title}</h2>
    <div>
        <img src={article.imageUrl} alt={`「${article.title}」のイメージ画像`}>
    </div>
    <div>
        {article.content}
    </div>


</article>