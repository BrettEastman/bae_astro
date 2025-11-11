import { c as createComponent, e as createAstro, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_2M5_QxBQ.mjs';
import { $ as $$Image } from './_astro_assets_DbY_ADPO.mjs';

const $$Astro = createAstro();
const $$Profile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Profile;
  const { alt, imageMetaData, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="py-4"> <div class="flex flex-col items-center justify-center"> ${renderComponent($$result, "Image", $$Image, { "width": 750, "alt": alt, "src": imageMetaData, "class": "rounded-lg" })} <h2 class="py-4 font-medium text-20">${name ? name : ""}</h2> </div> </div>`;
}, "/Users/brettaustineastman/workspace/BrettEastman/Apps/bae_astro/src/components/Profile.astro", void 0);

export { $$Profile as $ };
