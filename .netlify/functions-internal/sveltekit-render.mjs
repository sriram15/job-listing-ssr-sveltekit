import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.8264ff6e.js","imports":["_app/immutable/entry/start.8264ff6e.js","_app/immutable/chunks/index.d7db5ae4.js","_app/immutable/chunks/singletons.efea9592.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.6e07577a.js","imports":["_app/immutable/entry/app.6e07577a.js","_app/immutable/chunks/index.d7db5ae4.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
