import { writable } from "svelte/store";
import type { ArticleId } from "../types/type";

export const BookmarkedArticlesIdStore = writable<ArticleId[]>([]);