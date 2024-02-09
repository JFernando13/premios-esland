/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderComponent, f as addAttribute, e as renderSlot } from '../astro__3JC62Wo.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { c as $$Logo, d as $$Hero, e as $$Layout } from './archivo_YB4Hmy0P.mjs';
/* empty css                          */

const $$Astro$4 = createAstro();
const $$Intro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Intro;
  return renderTemplate`${maybeRenderHead()}<section class="section max-w-[60ch] text-xl"> ${renderComponent($$result, "Logo", $$Logo, { "class": "m-auto h-auto w-16 text-white" })} <h1 class="text-center text-5xl font-semibold tracking-wide my-8 text-pretty">
Bienvenidos/as <br> a los Premios ESLAND
</h1> <div class="flex flex-col gap-[1em]"> <p>
El cine tiene los Oscars, la música tiene los Grammy y <strong>el streaming tiene los ESLAND</strong>. Los premios que celebran la creatividad y el talento de los mejores
      creadores de contenido de <strong>la comunidad hispanohablante</strong> </p> <p>
España, Latinoamérica y Andorra unidas por creadores, creadoras y sus
      comunidades, para recordar y revivir <strong>algunos de los mejores momentos del año.</strong> </p> <p>
Tras dos galas celebradas, una en el Palau de la Música Catalana de
      Barcelona, y otra en el Auditorio Nacional de la Ciudad de México, solo
      queda esperar a <strong>la tercera edición en Andorra.</strong> </p> </div> </section>`;
}, "/Users/juanfer/Dev/projects/clones/premios-esland/src/components/home-page/intro/Intro.astro", void 0);

const $$Astro$3 = createAstro();
const $$BentoItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BentoItem;
  const { title, subtitle, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`${Astro2.props.class} col-span-10 flex flex-col justify-end rounded-xl
  backdrop-blur-md
  border border-black/10
  shadow-inner shadow-white/10
  overflow-hidden group`, "class")}> <!-- Overlay --> <div class="absolute h-full w-full
    bg-gradient-to-b from-transparent from-30% via-[#151836]/80 to-[#151836]/90"></div> <!-- Image container --> <div class="transition-scale absolute -z-10 h-full w-full bg-blue-950 bg-cover bg-center bg-no-repeat opacity-90 bg-blend-luminosity duration-700 ease-in-out group-hover:scale-110 background-img"${addAttribute(`background-image: url('${url}')`, "style")}></div> <!-- Content --> <hgroup class="p-8 flex flex-col gap-2 z-20"> <div> <h2 class="text-balance text-3xl font-semibold uppercase text-white"> ${title} </h2> <h3 class="text-3xl font-semibold text-sky-200/80">${subtitle}</h3> </div> ${renderSlot($$result, $$slots["content"])} </hgroup> </article>`;
}, "/Users/juanfer/Dev/projects/clones/premios-esland/src/components/home-page/bento/BentoItem.astro", void 0);

const $$Astro$2 = createAstro();
const $$Bento = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Bento;
  return renderTemplate`${maybeRenderHead()}<section class="section max-w-[1400px] grid grid-cols-10 auto-rows-[30rem] gap-4" data-astro-cid-cu3egc7z> ${renderComponent($$result, "BentoItem", $$BentoItem, { "url": "/images/bento/mountain.webp", "title": "andorra: el c\xE9nit de los premios esland", "class": "lg:col-span-4", "data-astro-cid-cu3egc7z": true }, { "content": ($$result2) => renderTemplate`<p data-astro-cid-cu3egc7z>
Una nueva edición <strong data-astro-cid-cu3egc7z>cargada de novedades</strong> y contenido, que empezará
      varias semanas antes de la ansiada gala. <strong data-astro-cid-cu3egc7z>
Directos especiales, colaboraciones, conciertos y mucho más</strong> en lo que será una auténtica fiesta dedicada a la creación de contenido.
</p>` })} ${renderComponent($$result, "BentoItem", $$BentoItem, { "title": "la gala", "class": "lg:col-span-6", "subtitle": "17 de febrero de 2024", "url": "/images/bento/grefg.webp", "data-astro-cid-cu3egc7z": true }, { "content": ($$result2) => renderTemplate`<p data-astro-cid-cu3egc7z>
Una gala de premios llena de <strong data-astro-cid-cu3egc7z>contenido de primer nivel</strong> y <strong data-astro-cid-cu3egc7z>muchas sorpresas</strong>, en la que descubrirán los ganadores de esta tercera edición de los
      Premios ESLAND.
</p>` })} ${renderComponent($$result, "BentoItem", $$BentoItem, { "title": "la alfombra blanca", "class": "lg:col-span-6", "subtitle": "16 de febrero de 2024", "url": "/images/bento/pistas.webp", "data-astro-cid-cu3egc7z": true }, { "content": ($$result2) => renderTemplate`<p data-astro-cid-cu3egc7z>
Este año, el momento de la alfombra azul será sustituido y mejorado,
      gracias a los increíbles paisajes andorranos, por una <strong data-astro-cid-cu3egc7z>
alfombra blanca en plena nieve</strong>, situada en las <strong data-astro-cid-cu3egc7z>pistas de esquí de Andorra</strong>.
</p>` })} ${renderComponent($$result, "BentoItem", $$BentoItem, { "title": "disfruta del reddit de la comunidad", "class": "lg:col-span-4", "url": "/images/bento/laptop.webp", "data-astro-cid-cu3egc7z": true }, { "content": ($$result2) => renderTemplate`<p data-astro-cid-cu3egc7z>
Este año, el reddit no formará parte de las votaciones de los premios,
      pero sí que <strong data-astro-cid-cu3egc7z>formará parte de la comunidad</strong>. El subreddit
      oficial de los Premios ESLAND está abierto para ti. Comparte tus clips,
      opiniones e <strong data-astro-cid-cu3egc7z>interactúa con toda la comunidad</strong> del streaming
      hispanohablante.
</p>` })} </section> `;
}, "/Users/juanfer/Dev/projects/clones/premios-esland/src/components/home-page/bento/Bento.astro", void 0);

const $$Astro$1 = createAstro();
const $$PreFooter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PreFooter;
  return renderTemplate`${maybeRenderHead()}<section class="section w-full max-w-[1400px] flex flex-col gap-6"> <h3 class="text-3xl text-center font-medium uppercase">
Guia de la 3era edición de los premios ESLAND
</h3> ${renderComponent($$result, "lite-youtube", "lite-youtube", { "videoid": "nYPVr2IYTtk", "autoload": true, "class": "rounded-xl shadow-2xl shadow-white/10", "params": "playsinline=1&controls=0&enablejsapi=1" })} </section> `;
}, "/Users/juanfer/Dev/projects/clones/premios-esland/src/components/home-page/pre-footer/PreFooter.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titlePage": "Premios Esland", "description": "Premios Esland" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "media": "video", "src": "/images/backgrounds/home-bg.webm" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<hgroup class="absolute z-20 gap-8 flex flex-col items-center"> <h1 class="flex gap-4 text-4xl md:text-6xl lg:gap-20 lg:text-8xl"> <span>E</span> <span>S</span> <span>L</span> ${renderComponent($$result3, "Logo", $$Logo, { "class": "h-9 md:h-[3.75rem] lg:h-24 scale-150" })} <span>N</span> <span>D</span> </h1> <p class="text-xl lg:text-2xl text-center text-wrap px-4 pt-[18px]">
Premios a la Comunidad Hispanohablante de Streaming
</p> <a href="/vota" class="w-fit lg:text-xl font-bold tracking-[.25em] no-underline px-8 py-3 border border-solid border-white rounded-xl uppercase text-blue-950 bg-white">Vota</a> </hgroup> ` })} <main> ${renderComponent($$result2, "Intro", $$Intro, {})} ${renderComponent($$result2, "Bento", $$Bento, {})} ${renderComponent($$result2, "PreFooter", $$PreFooter, {})} </main> ` })} `;
}, "/Users/juanfer/Dev/projects/clones/premios-esland/src/pages/index.astro", void 0);

const $$file = "/Users/juanfer/Dev/projects/clones/premios-esland/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
