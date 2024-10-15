import * as contentful from 'contentful';
import { CONTENTFUL_SPACE_ID, CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN } from '$env/static/private';

const client = contentful.createClient({
	space: CONTENTFUL_SPACE_ID,
	accessToken: CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN
});

export default client;
