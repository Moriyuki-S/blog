import { createClient } from 'contentful';
import assert from 'assert';
import 'dotenv/config';

assert(process.env.CONTENTFUL_SPACE_ID, 'CONTENTFUL_SPACE_ID is not set');
assert(process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN);

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN
});

export default client;
