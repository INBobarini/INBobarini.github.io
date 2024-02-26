const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.PwOykazS.js","app":"_app/immutable/entry/app.puoJZHrT.js","imports":["_app/immutable/entry/start.PwOykazS.js","_app/immutable/chunks/entry.l7FKyNzc.js","_app/immutable/chunks/scheduler.AytH20NP.js","_app/immutable/entry/app.puoJZHrT.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/scheduler.AytH20NP.js","_app/immutable/chunks/index.QO2q0poE.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-E0pFp8_S.js')),
			__memo(() => import('./chunks/1-mvrb8PAX.js')),
			__memo(() => import('./chunks/2-v6-G-RDt.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
