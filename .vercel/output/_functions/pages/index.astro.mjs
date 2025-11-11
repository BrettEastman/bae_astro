/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_2M5_QxBQ.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_W9T-CK1Q.mjs';
import { $ as $$Profile } from '../chunks/Profile_BwjVn18d.mjs';
export { renderers } from '../renderers.mjs';

const Headshot = new Proxy({"src":"/_astro/BrettProfile.C3FUEoM_.jpg","width":1717,"height":1717,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/brettaustineastman/workspace/BrettEastman/Apps/bae_astro/src/images/BrettProfile.jpg";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Home";
  const description = "Brett Austin Eastman is a musician and composer from San Francisco.";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col justify-around p-4"> <div class="flex justify-around"> ${renderComponent($$result2, "Profile", $$Profile, { "imageMetaData": Headshot, "alt": "Picture of Brett Austin Eastman" })} </div> </main> ` })}`;
}, "/Users/brettaustineastman/workspace/BrettEastman/Apps/bae_astro/src/pages/index.astro", void 0);

const $$file = "/Users/brettaustineastman/workspace/BrettEastman/Apps/bae_astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
