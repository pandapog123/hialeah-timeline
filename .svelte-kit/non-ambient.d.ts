
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/contact" | "/events" | "/events/create" | "/faq" | "/references" | "/resources" | "/resources/create";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/contact": Record<string, never>;
			"/events": Record<string, never>;
			"/events/create": Record<string, never>;
			"/faq": Record<string, never>;
			"/references": Record<string, never>;
			"/resources": Record<string, never>;
			"/resources/create": Record<string, never>
		};
		Pathname(): "/" | "/contact" | "/contact/" | "/events" | "/events/" | "/events/create" | "/events/create/" | "/faq" | "/faq/" | "/references" | "/references/" | "/resources" | "/resources/" | "/resources/create" | "/resources/create/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/gardens/City Hall.jpeg" | "/gardens/Clock.png" | "/gardens/Fountain.jpg" | "/robots.txt" | string & {};
	}
}