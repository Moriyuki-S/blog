import contentful from 'contentful';

console.log('CONTENTFUL_SPACE_ID:', import.meta.env.CONTENTFUL_SPACE_ID);
console.log('CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN:', import.meta.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN);

const client = contentful.createClient({
	space: import.meta.env.CONTENTFUL_SPACE_ID,
	accessToken: import.meta.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN
});

export default client;
