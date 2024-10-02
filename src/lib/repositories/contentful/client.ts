import * as contentful from 'contentful';
import { env } from '$env/dynamic/private';

const client = contentful.createClient({
	space: env.CONTENTFUL_SPACE_ID,
	accessToken: env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN
});

export default client;
