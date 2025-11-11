/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_2M5_QxBQ.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_W9T-CK1Q.mjs';
import { $ as $$Profile } from '../chunks/Profile_BwjVn18d.mjs';
export { renderers } from '../renderers.mjs';

const Headshot = new Proxy({"src":"/_astro/BrettFull.j_GEnl1G.jpg","width":1500,"height":2250,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/brettaustineastman/workspace/BrettEastman/Apps/bae_astro/src/images/BrettFull.jpg";
							}
							
							return target[name];
						}
					});

const $$About = createComponent(($$result, $$props, $$slots) => {
  const pClass = "mb-4 p-2 text-lg md:text-xl";
  const aClass = "border-b border-primary10 dark:border-primary70 hover:text-accentDark hover:border-none duration-200";
  const pageTitle = "About";
  const description = "Learn more about Brett Austin Eastman's biography as a musician and composer.";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h3 class="flex justify-around uppercase text-3xl mt-4 pb-8 md:text-4xl">
About
</h3> <div class="flex flex-col max-w-5xl m-auto"> <div class="leading-relaxed"> <p${addAttribute(pClass, "class")}>
Brett Austin Eastman is a composer, performing musician, <a href="https://www.bretteastman.dev/"${addAttribute(aClass, "class")} target="_blank">software engineer</a>, and recording engineer whose music has been performed by Yarn/Wire
        and Del Sol String Quartet. He has recently been commissioned by
        Tingyuan Luo, Slow Wave, Keyed Kontraptions and Siroko Duo. He was a
        semifinalist in the NYC Contemporary Music Symposium competition of
        2021.
</p> <p${addAttribute(pClass, "class")}>
As a concert curator, he recently co-produced a concert series with
        professional flutist, Jessie Nucho, featuring music for flute and
        electronics inspired by different forms of feedback. The first concert
<a href="https://www.youtube.com/playlist?list=PLRDiqQA9ARRvqdbpj2EwppjEFiyToFvAR"${addAttribute(aClass, "class")} target="_blank">“In Response”</a> was presented January 2020 and focused on the physical and emotional effects
        of feedback in dialog, in communication. In July 2021, they presented the
        second concert <a href="https://www.youtube.com/playlist?list=PLRDiqQA9ARRtXNc5Hfa1dWq4uOK8VhoSt"${addAttribute(aClass, "class")} target="_blank">“Self vs. Other”</a> which explored anxiety and feelings of isolation in the shelter-in-place
        life. The third and final concert of the series, <a href="https://www.youtube.com/playlist?list=PLRDiqQA9ARRtZSPPrWyg8-Lr7pMooMbWw"${addAttribute(aClass, "class")} target="_blank">"Reality"</a>, focused on feedback loops which harm our natural world. In 2019,
        Brett composed for a concert he co-curated with the ensemble Slow Wave,
        featuring new music for <a${addAttribute(aClass, "class")} href="https://youtu.be/CbMFIUBiRjg" target="_blank">viola, clarinet, and piano</a>. In 2018, he curated and produced a concert for the quartet, End Times
        Ensemble, titled <a href="https://www.youtube.com/playlist?list=PLRDiqQA9ARRt5xNmiK0mdHk82Q1nw-Mx9"${addAttribute(aClass, "class")} target="_blank">“Punk in Times of War”</a>, which featured Messiaen’s Quatuor pour la fin du Temps, Nick
        Vasallo’s When the War Began, and the premiere of Eastman’s <a href="https://youtu.be/qX9J_GU7hwI"${addAttribute(aClass, "class")} target="_blank">MISMA</a>.
</p> <p${addAttribute(pClass, "class")}>
As a performing musician, he cofounded, coproduced and played bass in
        sci-fi punk band <a href="https://youtu.be/cxE2yLfjLwc?si=sJkGvyU71x7XVS6c"${addAttribute(aClass, "class")} target="_blank">Andy Human and the Reptoids</a>, and he currently plays drums for <a href="https://youtu.be/24A90kzXBhA?si=keqhioUeJ1GI9GsL"${addAttribute(aClass, "class")} target="_blank">R.E. Seraphin</a> and <a href="https://youtu.be/O7pCLNfe57U?si=uKTRY-XA5HwD_8br"${addAttribute(aClass, "class")} target="_blank">The Aerosols</a>. He has toured throughout the United States and Europe in various
        groups. As a recording engineer, he has produced records by Bay Area
        underground bands including <a${addAttribute(aClass, "class")} href="https://evernever-records.bandcamp.com/album/dragged-through-the-garden" target="_blank">Preening</a>, <a${addAttribute(aClass, "class")} href="https://soundcloud.com/upset-the-rhythm/the-world-hot-shopper" target="_blank">The World</a>, <a${addAttribute(aClass, "class")} href="https://andyhumanthereptoids.bandcamp.com/album/psychic-sidekick" target="_blank">AH & the Reps</a>, <a${addAttribute(aClass, "class")} href="https://soundcloud.com/grazer-records/pang-young-professionals" target="_blank">Pang</a>, <a${addAttribute(aClass, "class")} href="https://lenz.bandcamp.com/album/ways-to-end-a-day" target="_blank">Lenz</a>, and <a${addAttribute(aClass, "class")} href="https://baus.bandcamp.com/album/idol-minds" target="_blank">Baus</a>, among others. He did sound design for and co-wrote (with <a href="http://www.jonraskin.com/"${addAttribute(aClass, "class")} target="_blank">Jon Raskin</a>) the score for the feature-length film, <a href="https://www.amazon.com/Murder-Hi-Good-David-Nordstrom/dp/B08W8W7BRF"${addAttribute(aClass, "class")} target="_blank">“The Murder of Hi Good”</a>, by filmmaker Lee Lorenzo Lynch. View Brett's Discogs page <a href="https://www.discogs.com/artist/2229898-Brett-Eastman"${addAttribute(aClass, "class")} target="_blank">here</a> for more information.
</p> <div class="flex justify-around p-2"> ${renderComponent($$result2, "Profile", $$Profile, { "imageMetaData": Headshot, "alt": "Picture of Brett Austin Eastman" })} </div> <p class="flex justify-around text-sm mb-4">Photo by Travis Woodland</p> <p${addAttribute(pClass, "class")}>
Brett was born in Redmond, WA on April 13, 1980. He grew up in Redding,
        CA before moving to San Francisco to study at San Francisco State
        University. He studied classical percussion with David Rosenthal, piano
        with Inara Morgenstern, and composition with <a href="https://www.richardfestinger.com/"${addAttribute(aClass, "class")} target="_blank">Richard Festinger</a>, Josh Levine, and Carlos Sánchez-Gutiérrez.
</p> </div> </div> ` })}`;
}, "/Users/brettaustineastman/workspace/BrettEastman/Apps/bae_astro/src/pages/about.astro", void 0);

const $$file = "/Users/brettaustineastman/workspace/BrettEastman/Apps/bae_astro/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
