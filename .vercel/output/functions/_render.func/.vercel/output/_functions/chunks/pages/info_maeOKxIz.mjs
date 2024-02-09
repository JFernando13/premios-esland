/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, f as addAttribute } from '../astro__3JC62Wo.mjs';
import 'kleur/colors';
import 'html-escaper';
import { d as $$Hero, f as $$LinkToAction, e as $$Layout } from './archivo_YB4Hmy0P.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$Info = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Info;
  const kits = [
    {
      name: "logotipo y trofeos",
      href: "https://premiosesland.com/ESLAND_MEDIA_KIT_2022.ra",
      img: "/images/kit/logo-thropy.webp"
    },
    {
      name: "fondos de pantalla",
      href: "https://premiosesland.com/ESLAND_FONDOS.zip",
      img: "/images/kit/wallpaper-esland.webp"
    },
    {
      name: "nota de prensa",
      href: "https://premiosesland.com/Nota%20Prensa-ESLAND.pdf",
      img: "/images/kit/press-release.webp"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titlePage": "Informaci\xF3n", "description": "Premios Esland", "data-astro-cid-34s7mdjv": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "media": "image", "src": "/images/backgrounds/info-bg.webp", "data-astro-cid-34s7mdjv": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1 class="uppercase absolute z-10 lg:text-6xl text-5xl text-center font-tomaso tracking-widest -translate-y-14" data-astro-cid-34s7mdjv>
los premios esland
</h1> ` })} <main class="section flex flex-col gap-24 max-w-[1400px]" data-astro-cid-34s7mdjv> <section class="info-section" id="theater" data-astro-cid-34s7mdjv> <hgroup class="flex-1" id="theater-text" data-astro-cid-34s7mdjv> <h2 class="title" data-astro-cid-34s7mdjv>
Un reconocimiento único para creadores, creadoras y comunidades
</h2> <p data-astro-cid-34s7mdjv>
Los Premios ESLAND son una iniciativa privada promovida por el célebre
          streamer TheGrefg y buscan apoyar y reconocer la creación de contenido
          en el ámbito hispanohablante.
</p> <p data-astro-cid-34s7mdjv>
ESLAND es el acrónimo de ESPAÑA, LATINOAMÉRICA Y ANDORRA, tres
          localizaciones geográficas que comparten el idioma que las une más
          allá de cualquier frontera, ya sea física o virtual.
</p> </hgroup> <img src="/images/info/theater.webp" alt="theater esland 2024" class="info-img" id="theater-img" data-astro-cid-34s7mdjv> </section> <section class="info-section" id="trophies" data-astro-cid-34s7mdjv> <img src="/images/info/trophies.webp" alt="trophies esland 2024" class="info-img" id="trophies-img" data-astro-cid-34s7mdjv> <hgroup class="flex-1" id="trophies-text" data-astro-cid-34s7mdjv> <h2 class="title" data-astro-cid-34s7mdjv>el premio a la creación</h2> <p data-astro-cid-34s7mdjv>
El trofeo que se entrega a los ganadores y ganadoras en la ceremonia
          es <strong data-astro-cid-34s7mdjv>una representación de la letra “A” dividida en tres fragmentos</strong> y ensambladas a modo de artilugio futurista sobre el que se construye
          la narrativa del evento.
</p> <p data-astro-cid-34s7mdjv>
Un artefacto de origen desconocido que dota de <strong data-astro-cid-34s7mdjv>herramientas y habilidades para la creación.</strong> Una metáfora sobre la emancipación del talento gracias a la tecnología
          y la irrupción de los creadores de contenido en el mundo del entretenimiento.
</p> </hgroup> </section> <footer data-astro-cid-34s7mdjv> <h2 class="title-section-kit text-center mb-16" data-astro-cid-34s7mdjv>kit de prensa</h2> <section class="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-8 place-items-center place-content-center" data-astro-cid-34s7mdjv> ${kits.map((kit) => renderTemplate`<article class="item-kit w-full" data-astro-cid-34s7mdjv> ${renderComponent($$result2, "LinkToAction", $$LinkToAction, { "id": "btn-kit", "href": kit.href, "class": "px-12 py-2", "text": "descargar", "data-astro-cid-34s7mdjv": true })} <div class="relative" id="img-container" data-astro-cid-34s7mdjv> <img${addAttribute(kit.img, "src")} alt="kit esland 2024" class="img-show-kit" data-astro-cid-34s7mdjv> <img${addAttribute(kit.img, "src")} alt="kit esland 2024" class="img-bg-kit" data-astro-cid-34s7mdjv> </div> <h3 class="title-kit" data-astro-cid-34s7mdjv>${kit.name}</h3> </article>`)} </section> </footer> </main> ` })} `;
}, "/Users/juanfer/Dev/projects/clones/premios-esland/src/pages/info.astro", void 0);

const $$file = "/Users/juanfer/Dev/projects/clones/premios-esland/src/pages/info.astro";
const $$url = "/info";

export { $$Info as default, $$file as file, $$url as url };
