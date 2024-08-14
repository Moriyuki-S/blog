import contentful from 'contentful';

const client = contentful.createClient({
	space: import.meta.env.CONTENTFUL_SPACE_ID,
	accessToken: import.meta.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN
});

export default client;
