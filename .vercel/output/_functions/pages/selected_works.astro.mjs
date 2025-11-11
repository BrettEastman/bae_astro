/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_2M5_QxBQ.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_W9T-CK1Q.mjs';
export { renderers } from '../renderers.mjs';

const $$SelectedWorks = createComponent(($$result, $$props, $$slots) => {
  const ulClass = "mb-4 p-2";
  const aClass = "border-b border-primary10 dark:border-primary70 hover:text-accentDark hover:border-none duration-200";
  const pageTitle = "About";
  const description = "Here you will find a list of selected classical and new music compositions by Brett Austin Eastman.";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h3 class="flex justify-around uppercase text-3xl md:text-4xl mt-4 pb-8">
Selected Works
</h3> <div class="flex flex-col max-w-5xl m-auto"> <div class="leading-relaxed text-lg md:text-xl"> <ul${addAttribute(ulClass, "class")}> <a${addAttribute(aClass, "class")} href="https://youtu.be/s_re25nOkq8" target="_blank"><em>Internal/External</em></a> for solo flute and Max MSP electronics (2022)
<a${addAttribute(aClass, "class")} href="https://drive.google.com/file/d/1MRRoPEmUf1chrqRHbMwg3b_8IYUsvMip/view?usp=sharing" target="_blank"><b>score</b></a> </ul> <ul${addAttribute(ulClass, "class")}> <a${addAttribute(aClass, "class")} href="https://youtu.be/J451WMaAms8" target="_blank"><em>Glimmer/Glow</em></a> for two pianists and two percussionists (2021)
</ul> <ul${addAttribute(ulClass, "class")}> <a${addAttribute(aClass, "class")} href="https://youtu.be/o5zRH8hLEc0" target="_blank"><em>How Deep is the Valley</em></a> for piano and Max MSP electronics (2020)
</ul> <ul${addAttribute(ulClass, "class")}> <a${addAttribute(aClass, "class")} href="https://youtu.be/1y72j58PL-Y" target="_blank"><em>Passover</em></a> for solo flute (2020) -
<a${addAttribute(aClass, "class")} href="https://drive.google.com/file/d/12ygPHCzmbl4aT7BpYVQOv9TIcrlbDy0Y/view?usp=sharing" target="_blank"><b>score</b></a> </ul> <ul${addAttribute(ulClass, "class")}> <a${addAttribute(aClass, "class")} href="https://youtu.be/HyKHnJb5nfI" target="_blank"><em>In Response</em></a> for solo flute and fixed media (2019)
</ul> <ul${addAttribute(ulClass, "class")}> <a${addAttribute(aClass, "class")} href="https://youtu.be/CbMFIUBiRjg" target="_blank"><em>Paraphrase</em></a> for bass clarinet, viola, and piano (2019) -
<a${addAttribute(aClass, "class")} href="https://newmusicshelf.com/product/paraphrase/" target="_blank"><b>score</b></a> </ul> <ul${addAttribute(ulClass, "class")}> <a${addAttribute(aClass, "class")} href="https://youtu.be/S7T-7jmADfA" target="_blank"><em>Keepsake (for Rishi)</em></a> for amplified contrabass flute and contraforte (2018) -
<a${addAttribute(aClass, "class")} href="https://drive.google.com/file/d/1qR65uv7CkxfHIUbQVhsGZmMe7ZxnwqHF/view?usp=sharing" target="_blank"><b>score</b></a> </ul> <ul${addAttribute(ulClass, "class")}> <a${addAttribute(aClass, "class")} href="https://youtu.be/ym51ZzgkxN0" target="_blank"><em>La Musique</em></a> for flute and alto flute (2017) -
<a${addAttribute(aClass, "class")} href="https://newmusicshelf.com/product/la-musique-brett-austin-eastman/" target="_blank"><b>score</b></a> </ul> <ul${addAttribute(ulClass, "class")}> <a${addAttribute(aClass, "class")} href="https://youtu.be/qX9J_GU7hwI" target="_blank"><em>MISMA</em></a> for violin, clarinet, cello, and piano (2017)
</ul> <ul${addAttribute(ulClass, "class")}> <a${addAttribute(aClass, "class")} href="https://soundcloud.com/brett-austin-eastman-1/mainframe-movements-4-5-6-7" target="_blank"><em>MAINFRAME</em></a> for string quartet (2016) -
<a${addAttribute(aClass, "class")} href="https://newmusicshelf.com/product/mainframe/" target="_blank"><b>score</b></a> </ul> </div> </div> ` })}`;
}, "/Users/brettaustineastman/workspace/BrettEastman/Apps/bae_astro/src/pages/selected_works.astro", void 0);

const $$file = "/Users/brettaustineastman/workspace/BrettEastman/Apps/bae_astro/src/pages/selected_works.astro";
const $$url = "/selected_works";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SelectedWorks,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
