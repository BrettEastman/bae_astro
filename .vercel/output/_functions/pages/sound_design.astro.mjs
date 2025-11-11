/* empty css                                 */
import { c as createComponent, e as createAstro, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_2M5_QxBQ.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_W9T-CK1Q.mjs';
import 'clsx';
/* empty css                                        */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$YouTube = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$YouTube;
  const QUALITY_PREFIXES = {
    120: "",
    default: "",
    320: "mq",
    medium: "mq",
    mq: "mq",
    480: "hq",
    high: "hq",
    hq: "hq",
    640: "sd",
    standard: "sd",
    sd: "sd",
    1280: "maxres",
    maxres: "maxres"
  };
  let {
    cookie = false,
    embedParams,
    loading = "lazy",
    noLink = false,
    thumbnail = "default",
    thumbnailRes = "sd",
    title,
    videoId,
    ...iframeAttributes
  } = Astro2.props;
  let params = { autoplay: 1, ...embedParams };
  let embedQuery = Object.keys(params).map((key) => `${key}=${params[key]}`).join("&");
  let embedUrl = `https://www.youtube${cookie ? "" : "-nocookie"}.com/embed${videoId ? `/${videoId}` : ""}${embedQuery ? `?${embedQuery}` : ""}`;
  let thumbnailUrl = !/^(default|1|2|3)$/.test(String(thumbnail)) ? thumbnail : `https://i.ytimg.com/vi/${videoId}/${QUALITY_PREFIXES[thumbnailRes]}${thumbnail}.jpg`;
  let linkSvg = `<svg viewBox="0 0 110 26"><use href="#a" style="stroke-width:2px;stroke:#000;stroke-opacity:.15;stroke-linejoin:round"/><path id="a" fill="#fff" d="M16.68.99c-3.13.04-9.66.17-11.69.69-1.49.4-2.59 1.6-2.99 3-.69 2.7-.68 8.31-.68 8.31S1.31 18.6 2 21.3c.39 1.5 1.59 2.6 2.99 3 2.69.7 13.4.68 13.4.68s10.7.01 13.4-.68c1.5-.4 2.59-1.6 2.99-3 .69-2.7.68-8.31.68-8.31s.11-5.61-.68-8.31c-.4-1.5-1.59-2.6-2.99-3C29.11.98 18.4.99 18.4.99s-.67-.01-1.71 0zm72.21.9v21.28h2.78l.31-1.37h.09c.3.5.71.88 1.21 1.18.5.3 1.08.4 1.68.4 1.1 0 1.99-.49 2.49-1.59.5-1.1.81-2.7.81-4.9v-2.4c0-1.6-.11-2.9-.31-3.9-.2-.89-.5-1.59-1-2.09-.5-.4-1.1-.59-1.9-.59-.59 0-1.18.19-1.68.49-.49.3-1.01.8-1.21 1.4V1.9h-3.28zm-49.99.78 3.9 13.9.18 6.71h3.31v-6.71l3.87-13.9h-3.37l-1.4 6.31c-.4 1.89-.71 3.19-.81 3.99h-.09c-.2-1.1-.51-2.4-.81-3.99l-1.37-6.31h-3.4zm29.59 0v2.71h3.4v17.9h3.28V5.38h3.4s0-2.71-.09-2.71h-9.99zM15 7.79l8.9 5.18-8.9 5.09V7.78zm89.4.09c-1.7 0-2.89.59-3.59 1.59-.69.99-.99 2.6-.99 4.9v2.59c0 2.2.3 3.9.99 4.9.7 1.1 1.8 1.59 3.5 1.59 1.4 0 2.38-.3 3.18-1 .7-.7 1.09-1.69 1.09-3.09v-.5l-2.9-.21c0 1-.08 1.6-.28 2-.1.4-.5.62-1 .62-.3 0-.61-.11-.81-.31-.2-.3-.3-.59-.4-1.09-.1-.5-.09-1.21-.09-2.21v-.78l5.71-.09v-2.62c0-1.6-.1-2.78-.4-3.68-.2-.89-.71-1.59-1.31-1.99-.7-.4-1.48-.59-2.68-.59zm-50.49.09c-1.09 0-2.01.18-2.71.68-.7.4-1.2 1.12-1.49 2.12-.3 1-.5 2.27-.5 3.87v2.21c0 1.5.1 2.78.4 3.78.2.9.7 1.62 1.4 2.12.69.5 1.71.68 2.81.78 1.19 0 2.08-.28 2.78-.68.69-.4 1.09-1.09 1.49-2.09.39-1 .49-2.3.49-3.9v-2.21c0-1.6-.2-2.87-.49-3.87-.3-.89-.8-1.62-1.49-2.12-.7-.5-1.58-.68-2.68-.68zm12.18.09v11.9c-.1.3-.29.48-.59.68-.2.2-.51.31-.81.31-.3 0-.58-.1-.68-.4-.1-.3-.18-.7-.18-1.4V8.16h-3.4v11.21c0 1.4.18 2.39.68 3.09.49.7 1.21 1 2.21 1 1.4 0 2.48-.69 3.18-2.09h.09l.31 1.78h2.59V8.16s-3.4 0-3.4-.09zm17.31 0v11.9c-.1.3-.29.48-.59.68-.2.2-.51.31-.81.31-.3 0-.58-.1-.68-.4-.1-.3-.21-.7-.21-1.4V8.16h-3.4v11.21c0 1.4.21 2.39.71 3.09.5.7 1.18 1 2.18 1 1.39 0 2.51-.69 3.21-2.09h.09l.28 1.78h2.62V8.16s-3.4 0-3.4-.09zm20.9 2.09c.4 0 .58.11.78.31.2.3.3.59.4 1.09.1.5.09 1.21.09 2.21v1.09h-2.5v-1.09c0-1 0-1.71.09-2.21 0-.4.11-.8.31-1 .2-.3.51-.4.81-.4zm-50.49.12c.5 0 .8.18 1 .68.19.5.28 1.3.28 2.4v4.68c0 1.1-.08 1.9-.28 2.4s-.5.68-1 .68-.79-.18-.99-.68c-.2-.5-.31-1.3-.31-2.4v-4.68c0-1.1.11-1.9.31-2.4s.49-.68.99-.68zm39.68.09c.3 0 .61.1.81.4.2.3.27.67.37 1.37.1.6.12 1.51.12 2.71l.09 1.9c0 1.1 0 1.99-.09 2.59-.1.6-.19 1.08-.49 1.28-.2.3-.5.4-.9.4-.3 0-.51-.08-.81-.18-.2-.1-.39-.29-.59-.59v-8.5c.1-.4.29-.7.59-1 .3-.3.6-.4.9-.4z"/></svg>`;
  let playButtonSvg = `<svg viewBox="0 0 68 48"><path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path><path d="M 45,24 27,14 27,34" fill="#fff"></path></svg>`;
  let gradientStyle = `.gradient{width:100%;height:49px;padding-bottom:50px;position:absolute;top:0;background-repeat:repeat-x;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==);pointer-events:none}`;
  let linkStyle = noLink ? "" : '.woyt{z-index:2;background:rgba(23,23,23,.8);border-bottom-right-radius:2px;border-top-right-radius:2px;bottom:5px;height:47px;position:absolute}.woyt-text{color:#fff;float:left;font:500 16px/16px "YouTube Noto",Roboto,Arial,Helvetica,sans-serif;margin-left:12px;margin-top:16px}.woyt-logo{float:right;height:16px;margin-left:9px;margin-right:12px;margin-top:16px;width:72px}';
  let style = `<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%;background:#000}img{position:absolute;width:100%;top:0;bottom:0;margin:auto}.button{position:absolute;left:50%;top:50%;width:68px;height:48px;margin-left:-34px;margin-top:-24px}.top{position:absolute;top:18px;left:18px;right:18px;display:flex;flex-wrap:nowrap}.title{color:#fff;font-size:18px;white-space:nowrap;word-wrap:normal;text-shadow:0 0 2px rgba(0,0,0,.5);font-family:"YouTube Noto",Roboto,Arial,Helvetica,sans-serif;line-height:1.3;text-overflow:ellipsis;overflow:hidden}${gradientStyle}${linkStyle}</style>`;
  let link = noLink ? "" : `<a href="https://www.youtube.com/watch?v=${videoId}${params.start ? `&t=${params.start}s` : ""}" target="_blank" aria-label="Watch on YouTube" class="woyt"><div aria-hidden="true"><div class="woyt-text">Watch on</div><div class="woyt-logo">${linkSvg}</div></div></a>`;
  let srcdoc = `${style}${link}<a href="${embedUrl}"><img src="${thumbnailUrl}" alt="${title}" loading="${loading}"><div class="gradient"></div><div class="top"><div class="title">${title}</div></div><div class="button">${playButtonSvg}</div></a>`;
  return renderTemplate`${maybeRenderHead()}<iframe${addAttribute(loading, "loading")}${addAttribute(embedUrl, "src")}${addAttribute(srcdoc, "srcdoc")}${addAttribute(title, "title")}${spreadAttributes(iframeAttributes)} allow="accelerometer;autoplay;encrypted-media;gyroscope;picture-in-picture" allowfullscreen frameborder="0" style="width:100%;aspect-ratio:16/9"></iframe>`;
}, "/Users/brettaustineastman/workspace/BrettEastman/Apps/bae_astro/node_modules/astro-lazy-youtube-embed/YouTube.astro", void 0);

const $$Astro = createAstro();
const $$YouTubeEmbedLazy = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$YouTubeEmbedLazy;
  const { videoId, title, thumbnailRes = "sd" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="stack" data-astro-cid-qifretay> ${renderComponent($$result, "YouTube", $$YouTube, { "title": title, "videoId": videoId, "thumbnailRes": thumbnailRes ? thumbnailRes : void 0, "data-astro-cid-qifretay": true })} </div> `;
}, "/Users/brettaustineastman/workspace/BrettEastman/Apps/bae_astro/src/components/YouTubeEmbedLazy.astro", void 0);

const $$SoundDesign = createComponent(($$result, $$props, $$slots) => {
  const aClass = "border-b border-primary10 dark:border-primary70 hover:text-accentDark hover:border-none duration-200";
  const pageTitle = "About";
  const description = "Learn more about Brett Austin Eastman's work in sound design.";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h3 class="flex justify-around uppercase mt-4 mb-4 pb-8 text-3xl md:text-4xl">
Sound Design
</h3> <div class="flex flex-col max-w-5xl m-auto text-lg md:text-xl"> <div class="leading-relaxed"> ${renderComponent($$result2, "YouTubeEmbedLazy", $$YouTubeEmbedLazy, { "videoId": "2KN08nZZjdw", "title": "The Murder of Hi Good (trailer)" })} <p class="mb-8 mt-5">
The Murder of Hi Good is a true-crime revisionist western shot on 35mm,
        Super 16mm, Super 8mm and digital video. Set in Northern California in
        1870, the film details the eventual murder of California’s most
        notorious Indian hunter, Hiram Good. Created over a seven year period by
        filmmaker Lee Lynch and co-written by art critic Doug Harvey, the film
        features a diverse set of performers including Los Angeles based
        artists, western re-enactors, and regional American Indians.
</p> <div class="mb-8"> <a${addAttribute(aClass, "class")} href="https://www.amazon.com/Murder-Hi-Good-David-Nordstrom/dp/B08W8W7BRF" target="_blank"><em>Watch</em></a> on Amazon
</div> <div class="mb-8"> <a${addAttribute(aClass, "class")} href="https://www.imdb.com/title/tt2182390/" target="_blank"><em>The Murder of Hi Good</em></a> on IMDB.
</div> </div> </div> ` })}`;
}, "/Users/brettaustineastman/workspace/BrettEastman/Apps/bae_astro/src/pages/sound_design.astro", void 0);

const $$file = "/Users/brettaustineastman/workspace/BrettEastman/Apps/bae_astro/src/pages/sound_design.astro";
const $$url = "/sound_design";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SoundDesign,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
