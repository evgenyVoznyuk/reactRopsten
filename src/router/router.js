
import Search from '~c/search';
import Result from '~c/result';
import E404 from '~c/errors/e404';

const routes = [
	{
		name: 'search',
		path: '/',
		component: Search,
		exact: true
	},
	{
		name: 'result',
		path: '/address/:id',
		component: Result,
		exact: true
	},
	{
		path: '**',
		component: E404
	}
];

export { routes };
