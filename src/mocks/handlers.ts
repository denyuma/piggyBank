import { rest } from 'msw';
import users from './api/users.json';

export const handlers = [
	rest.get('https://my.backend/book', (req, res, ctx) => {
		return res(
			ctx.json({
				title: 'Lord of the Rings',
				imageUrl: '/book-cover.jpg',
				description:
					'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
			}),
		);
	}),
	rest.get('/users', (req, res, ctx) => {
		return res(ctx.json(users));
	}),
];
