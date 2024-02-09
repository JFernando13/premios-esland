/* empty css                            */
import 'html-escaper';
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, f as addAttribute, s as spreadAttributes, g as renderComponent, h as renderHead } from '../astro__3JC62Wo.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */
/* empty css                            */
import { useState, useEffect } from 'preact/hooks';
import { jsxs, jsx, Fragment } from 'preact/jsx-runtime';
import { s as styles, a as styles$1 } from '../archivo.bf6fba92_9ioV8Ce2.mjs';

const gallery = [
	[
		{
			height: 767,
			width: 1152
		},
		{
			height: 768,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 1152,
			width: 767
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 1152,
			width: 767
		},
		{
			height: 768,
			width: 1152
		},
		{
			height: 1344,
			width: 2016
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 1152,
			width: 767
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 409,
			width: 614
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 409,
			width: 614
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 768,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 1152,
			width: 767
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 614,
			width: 410
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 768,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 1152,
			width: 767
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 1152,
			width: 767
		},
		{
			height: 767,
			width: 1152
		},
		{
			height: 767,
			width: 1152
		}
	],
	[
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		},
		{
			height: 685,
			width: 1200
		}
	]
];

const $$Astro$c = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Hero;
  const { media, src } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="w-screen h-[120vh] relative animate-fade"> <section class="flex place-content-center place-items-center h-full w-full"> ${renderSlot($$result, $$slots["default"])} ${media === "video" && renderTemplate`<video${addAttribute(src, "src")} autoplay muted loop playsinline class="w-full h-full object-cover object-top clip-path-v"></video>`} ${media === "image" && renderTemplate`<img${addAttribute(src, "src")} alt="esland-intro" class="w-full h-full object-cover object-top clip-path-v">`} </section> ${media === "video" && renderTemplate`<video${addAttribute(src, "src")} autoplay muted loop playsinline class="object-cover blur-3xl absolute -bottom-48 -z-10 h-full w-full"></video>`} ${media === "image" && renderTemplate`<img${addAttribute(src, "src")} alt="esland-info-hero" class="object-cover blur-3xl absolute -bottom-4 -z-10 h-full w-full">`} </section>`;
}, "/Users/juanfer/Dev/projects/clones/premios-esland/src/components/shared/Hero.astro", void 0);

const $$Astro$b = createAstro();
const $$LinkToAction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$LinkToAction;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(["link-action", Astro2.props.class], "class:list")}${spreadAttributes(Astro2.props)} data-astro-cid-mrxkosbn>${text}</a> `;
}, "/Users/juanfer/Dev/projects/clones/premios-esland/src/components/shared/LinkToAction.astro", void 0);

const $$Astro$a = createAstro();
const $$Logo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Logo;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0 200L75 162L32 168L75 0L0 200Z" fill="currentColor"></path> <path d="M160 200L85 162L128 168L85 0L160 200Z" fill="currentColor"></path> <path d="M71 119L80 64L90 119L80 139L71 119Z" fill="currentColor"></path> </svg>`;
}, "/Users/juanfer/Dev/projects/clones/premios-esland/src/components/icons/Logo.astro", void 0);

const $$Astro$9 = createAstro();
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Link;
  const { href } = Astro2.props;
  const { pathname } = Astro2.url;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`${pathname === href ? "active" : ""}`, "class")} data-astro-cid-u5yof633> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "/Users/juanfer/Dev/projects/clones/premios-esland/src/components/global/navbar/Link.astro", void 0);

const $$Astro$8 = createAstro();
const $$NavBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$NavBar;
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 w-full px-8 py-4 z-50" data-astro-cid-ztirimra> <div class="flex items-center max-w-[1308px] mx-auto gap-14" data-astro-cid-ztirimra> <a href="/" data-astro-cid-ztirimra> ${renderComponent($$result, "Logo", $$Logo, { "class": "w-12 h-12", "data-astro-cid-ztirimra": true })} </a> <nav class="flex flex-1 items-center justify-between" data-astro-cid-ztirimra> <div class="flex gap-8 uppercase text-xl" data-astro-cid-ztirimra> ${renderComponent($$result, "Link", $$Link, { "href": "/vota", "data-astro-cid-ztirimra": true }, { "default": ($$result2) => renderTemplate`vota` })} ${renderComponent($$result, "Link", $$Link, { "href": "/info", "data-astro-cid-ztirimra": true }, { "default": ($$result2) => renderTemplate`info` })} ${renderComponent($$result, "Link", $$Link, { "href": "/archivo", "data-astro-cid-ztirimra": true }, { "default": ($$result2) => renderTemplate`archivo` })} </div> ${renderComponent($$result, "LinkToAction", $$LinkToAction, { "text": "criterios de nominacio\u0301n", "class": "px-4 py-2 text-sm", "href": "https://drive.google.com/file/d/1D7IvIqMyqAoG58fuk8bc0JvhAmrWBbOK/view", "target": "_blank", "data-astro-cid-ztirimra": true })} </nav> </div> </header> `;
}, "/Users/juanfer/Dev/projects/clones/premios-esland/src/components/global/navbar/NavBar.astro", void 0);

const $$Astro$7 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/juanfer/Dev/projects/clones/premios-esland/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$6 = createAstro();
const $$TwitterIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$TwitterIcon;
  return renderTemplate`${maybeRenderHead()}<svg class="size-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17"> <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"></path> </svg>`;
}, "/Users/juanfer/Dev/projects/clones/premios-esland/src/components/icons/TwitterIcon.astro", void 0);

const $$Astro$5 = createAstro();
const $$InstagramIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$InstagramIcon;
  return renderTemplate`${maybeRenderHead()}<svg class="size-6" xmlns="http://www.w3.org/2000/svg" width="256" height="256" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path fill="currentColor" d="M128 23.064c34.177 0 38.225.13 51.722.745 12.48.57 19.258 2.655 23.769 4.408 5.974 2.322 10.238 5.096 14.717 9.575 4.48 4.479 7.253 8.743 9.575 14.717 1.753 4.511 3.838 11.289 4.408 23.768.615 13.498.745 17.546.745 51.723 0 34.178-.13 38.226-.745 51.723-.57 12.48-2.655 19.257-4.408 23.768-2.322 5.974-5.096 10.239-9.575 14.718-4.479 4.479-8.743 7.253-14.717 9.574-4.511 1.753-11.289 3.839-23.769 4.408-13.495.616-17.543.746-51.722.746-34.18 0-38.228-.13-51.723-.746-12.48-.57-19.257-2.655-23.768-4.408-5.974-2.321-10.239-5.095-14.718-9.574-4.479-4.48-7.253-8.744-9.574-14.718-1.753-4.51-3.839-11.288-4.408-23.768-.616-13.497-.746-17.545-.746-51.723 0-34.177.13-38.225.746-51.722.57-12.48 2.655-19.258 4.408-23.769 2.321-5.974 5.095-10.238 9.574-14.717 4.48-4.48 8.744-7.253 14.718-9.575 4.51-1.753 11.288-3.838 23.768-4.408 13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155 3.555 52.297 1.392 61.602.77 75.226.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774.622 13.625 2.785 22.93 5.95 31.071 3.27 8.417 7.647 15.556 14.763 22.672 7.116 7.116 14.254 11.492 22.672 14.763 8.142 3.165 17.446 5.328 31.07 5.95 13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95 8.418-3.27 15.556-7.647 22.672-14.763 7.116-7.116 11.493-14.254 14.764-22.672 3.164-8.142 5.328-17.446 5.95-31.07.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0Zm0 62.27C91.698 62.27 62.27 91.7 62.27 128c0 36.302 29.428 65.73 65.73 65.73 36.301 0 65.73-29.428 65.73-65.73 0-36.301-29.429-65.73-65.73-65.73Zm0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667-19.103 42.667-42.667 42.667Zm83.686-110.994c0 8.484-6.876 15.36-15.36 15.36-8.483 0-15.36-6.876-15.36-15.36 0-8.483 6.877-15.36 15.36-15.36 8.484 0 15.36 6.877 15.36 15.36Z"></path></svg>`;
}, "/Users/juanfer/Dev/projects/clones/premios-esland/src/components/icons/InstagramIcon.astro", void 0);

const $$Astro$4 = createAstro();
const $$RedditIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$RedditIcon;
  return renderTemplate`${maybeRenderHead()}<svg class="size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M14.238 15.348c.085.084.085.221 0 .306-.465.462-1.194.687-2.231.687l-.008-.002-.008.002c-1.036 0-1.766-.225-2.231-.688-.085-.084-.085-.221 0-.305.084-.084.222-.084.307 0 .379.377 1.008.561 1.924.561l.008.002.008-.002c.915 0 1.544-.184 1.924-.561.085-.084.223-.084.307 0zm-3.44-2.418c0-.507-.414-.919-.922-.919-.509 0-.923.412-.923.919 0 .506.414.918.923.918.508.001.922-.411.922-.918zm13.202-.93c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-.129c0-.851-.695-1.543-1.55-1.543-.417 0-.795.167-1.074.435-1.056-.695-2.485-1.137-4.066-1.194l.865-2.724 2.343.549-.003.034c0 .696.569 1.262 1.268 1.262.699 0 1.267-.566 1.267-1.262s-.568-1.262-1.267-1.262c-.537 0-.994.335-1.179.804l-2.525-.592c-.11-.027-.223.037-.257.145l-.965 3.038c-1.656.02-3.155.466-4.258 1.181-.277-.255-.644-.415-1.05-.415-.854.001-1.549.693-1.549 1.544 0 .566.311 1.056.768 1.325-.03.164-.05.331-.05.5 0 2.281 2.805 4.137 6.253 4.137s6.253-1.856 6.253-4.137c0-.16-.017-.317-.044-.472.486-.261.82-.766.82-1.353zm-4.872.141c-.509 0-.922.412-.922.919 0 .506.414.918.922.918s.922-.412.922-.918c0-.507-.413-.919-.922-.919z"></path></svg>`;
}, "/Users/juanfer/Dev/projects/clones/premios-esland/src/components/icons/RedditIcon.astro", void 0);

const $$Astro$3 = createAstro();
const $$GithubIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$GithubIcon;
  return renderTemplate`${maybeRenderHead()}<svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"></path> </svg>`;
}, "/Users/juanfer/Dev/projects/clones/premios-esland/src/components/icons/GithubIcon.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-black/40" data-astro-cid-obp2au2k> <div class="mx-auto w-full max-w-screen-xl p-4 px-6 py-6 lg:py-8" data-astro-cid-obp2au2k> <div class="md:flex md:justify-between" data-astro-cid-obp2au2k> <div class="mb-6 flex flex-col md:mb-0" data-astro-cid-obp2au2k> <a href="https://premiosesland.com/" class="-mt-14 flex items-center justify-center" data-astro-cid-obp2au2k> ${renderComponent($$result, "Logo", $$Logo, { "class": "h-auto w-24", "data-astro-cid-obp2au2k": true })} </a> <div class="mt-6 flex justify-center gap-x-4" data-astro-cid-obp2au2k> <a href="#" class="text-white hover:text-primary duration-300" data-astro-cid-obp2au2k> ${renderComponent($$result, "TwitterIcon", $$TwitterIcon, { "data-astro-cid-obp2au2k": true })} <span class="sr-only" data-astro-cid-obp2au2k>Twitter</span> </a> <a href="#" class="text-white hover:text-primary duration-300" data-astro-cid-obp2au2k> ${renderComponent($$result, "InstagramIcon", $$InstagramIcon, { "data-astro-cid-obp2au2k": true })} <span class="sr-only" data-astro-cid-obp2au2k>Instagram</span> </a> <a href="#" class="text-white hover:text-primary duration-300" data-astro-cid-obp2au2k> ${renderComponent($$result, "RedditIcon", $$RedditIcon, { "data-astro-cid-obp2au2k": true })} <span class="sr-only" data-astro-cid-obp2au2k>Reddit</span> </a> </div> </div> <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6 place-items-center" data-astro-cid-obp2au2k> <div data-astro-cid-obp2au2k> <h2 class="mb-6 text-sm font-semibold uppercase text-white" data-astro-cid-obp2au2k>Legal</h2> <ul class="flex flex-col gap-2 font-medium text-gray-400" data-astro-cid-obp2au2k> <li data-astro-cid-obp2au2k> <a href="/aviso-legal" class="hover:underline hover:text-primary duration-300" data-astro-cid-obp2au2k>Aviso legal</a> </li> <li data-astro-cid-obp2au2k> <a href="/privacidad" class="hover:underline hover:text-primary duration-300" data-astro-cid-obp2au2k>Privacidad</a> </li> <li data-astro-cid-obp2au2k> <a href="/cookies" class="hover:underline hover:text-primary duration-300" data-astro-cid-obp2au2k>
cookies
</a> </li> </ul> </div> <div data-astro-cid-obp2au2k> <h2 class="mb-6 text-sm font-semibold uppercase text-white" data-astro-cid-obp2au2k>
mapa web
</h2> <ul class="flex flex-col gap-2 font-medium text-gray-400" data-astro-cid-obp2au2k> <li data-astro-cid-obp2au2k> <a href="/" class="hover:underline hover:text-primary duration-300" data-astro-cid-obp2au2k>Inicio</a> </li> <li data-astro-cid-obp2au2k> <a href="/info" class="hover:underline hover:text-primary duration-300" data-astro-cid-obp2au2k>Info</a> </li> <li data-astro-cid-obp2au2k> <a href="/archivo" class="hover:underline hover:text-primary duration-300" data-astro-cid-obp2au2k>Archivo</a> </li> </ul> </div> <div class="produced-by" data-astro-cid-obp2au2k> <h2 class="mb-0 text-sm font-semibold uppercase text-white" data-astro-cid-obp2au2k>
Producido por
</h2> <a class="hover:scale-110 transition block" href="https://www.ubiq.ad/" target="_blank" rel="noreferrer" data-astro-cid-obp2au2k> <img loading="lazy" src="/images/sponsors/ubiq-logo.svg" alt="Logo Ubiq" data-astro-cid-obp2au2k> </a> </div> </div> </div> <hr class="my-6 border-white/10 sm:mx-auto lg:my-8" data-astro-cid-obp2au2k> <div class="sm:flex sm:items-center sm:justify-between" data-astro-cid-obp2au2k> <span class="text-sm text-gray-400 sm:text-center" data-astro-cid-obp2au2k>© ESLAND 2021 - 2024 Todos los derechos reservados. - Esta no es la
        web oficial, desarrollada por @jfernando para fines divertidos
</span> <div class="mt-4 flex sm:mt-0 justify-center" data-astro-cid-obp2au2k> <a href="https://github.com/jfernando13" class="text-gray-500 hover:text-white ms-5 duration-300" data-astro-cid-obp2au2k> ${renderComponent($$result, "GithubIcon", $$GithubIcon, { "data-astro-cid-obp2au2k": true })} <span class="sr-only" data-astro-cid-obp2au2k>GitHub account</span> </a> </div> </div> </div> </footer> `;
}, "/Users/juanfer/Dev/projects/clones/premios-esland/src/components/global/footer/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { titlePage, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/images/brand/favicon.svg"><title>${titlePage} - Premios ESLAND 2024</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="overflow-x-hidden"> ${renderComponent($$result, "NavBar", $$NavBar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "/Users/juanfer/Dev/projects/clones/premios-esland/src/layouts/Layout.astro", void 0);

function TabEditions({
  handleEdition,
  edition: currentEdition
}) {
  const activeColor = "bg-sky-400";
  const inactiveColor = "bg-blue-900";
  const btnActive = (edition) => {
    return edition === currentEdition ? `${activeColor} flex-1 text-2xl` : `${inactiveColor} flex-0 text-sm`;
  };
  return jsxs("article", {
    class: "flex gap-2 max-w-[1024px] mx-auto w-full",
    children: [jsx("button", {
      class: `${btnActive(0)} capitalize py-4 rounded-lg font-semibold transition-all duration-500 px-4 text-nowrap`,
      onClick: () => handleEdition(0),
      children: "1ra edición"
    }), jsx("button", {
      class: `${btnActive(1)} capitalize py-4 rounded-lg font-semibold hover:opacity-60 transition-all duration-500 px-4 text-nowrap`,
      onClick: () => handleEdition(1),
      children: "2da edición"
    })]
  });
}

function FinalistCard({
  position,
  edition,
  finalist
}) {
  return jsxs("article", {
    class: "flex flex-col gap-4 relative",
    children: [jsxs("span", {
      class: "absolute top-0 left-8 bg-white text-black rounded-b-lg px-4 py-2 text-xl font-medium flex justify-center items-center",
      children: [position, "º"]
    }), jsx("img", {
      src: `/images/editions/${edition}/palmares/desktop/${finalist.photo}.webp`,
      class: "object-cover object-center rounded-lg",
      alt: finalist?.name
    }), jsxs("hgroup", {
      class: "flex flex-col gap-2",
      children: [jsx("h3", {
        class: "text-xl font-bold tracking-tigh uppercase text-balance",
        children: finalist.name
      }), jsxs("p", {
        class: "flex flex-col uppercase",
        children: [jsxs("strong", {
          children: ["comunidad: ", finalist?.community]
        }), jsxs("strong", {
          children: ["streamers: ", finalist.streamers]
        }), jsxs("strong", {
          children: ["total: ", finalist.total]
        })]
      })]
    })]
  });
}

function Winners({
  winners,
  handleCategorySelected,
  categorySelected
}) {
  return jsx("article", {
    class: "flex flex-col gap-2 flex-1 min-w-80 xl:max-w-[350px] w-full",
    children: winners.map((winner) => jsxs("button", {
      class: `odd:bg-gradient-to-r odd:from-blue-600 odd:to-sky-400/45 bg-gradient-to-r from-gray-700 to-blue-900 flex justify-between px-4 py-0.5 rounded-sm items-center ${styles.winners} ${winner.categoria === categorySelected && styles.selected}`,
      onClick: () => handleCategorySelected(winner.categoria),
      children: [jsx("span", {
        class: "text-sm",
        children: winner.categoria
      }), jsx("span", {
        class: "text-xs font-bold",
        children: winner.ganador
      })]
    }))
  });
}

function transformData(data) {
  const transformedData = {
    first: {
      category: data.categoria,
      name: data.ganador,
      photo: data.foto1,
      community: data.comunidad1,
      streamers: data.streamers1,
      total: data.total1
    },
    second: {
      category: data.categoria,
      name: data.finalista,
      photo: data.foto2,
      community: data.comunidad2,
      streamers: data.streamers2,
      total: data.total2
    }
  };
  return transformedData;
}

const editions = [
	{
		edition: "1",
		name: "Primera edición",
		metrics: {
			news: 227,
			media: 3.2,
			views: 69.9
		},
		info: [
			{
				categoria: "Streamer del año",
				ganador: "Ibai",
				foto1: "streamer1",
				comunidad1: 41.05,
				streamers1: 75.6,
				total1: 58.33,
				finalista: "Auronplay",
				foto2: "streamer2",
				comunidad2: 32.85,
				streamers2: 8.1,
				total2: 20.48
			},
			{
				categoria: "Serie de contenido del año",
				ganador: "Tortillaland",
				foto1: "serie1",
				comunidad1: 39.92,
				streamers1: 27.7,
				total1: 33.81,
				finalista: "Egoland",
				foto2: "serie2",
				comunidad2: 26.09,
				streamers2: 40.6,
				total2: 33.35
			},
			{
				categoria: "Streamer revelación del año",
				ganador: "elXokas",
				foto1: "revelacion1",
				comunidad1: 27.74,
				streamers1: 54,
				total1: 40.87,
				finalista: "ElMariana",
				foto2: "revelacion2",
				comunidad2: 30.38,
				streamers2: 27,
				total2: 28.69
			},
			{
				categoria: "Evento del año",
				ganador: "La velada del año",
				foto1: "evento1",
				comunidad1: 48.78,
				streamers1: 72.9,
				total1: 60.84,
				finalista: "Mundial de globos",
				foto2: "evento2",
				comunidad2: 27.27,
				streamers2: 18.9,
				total2: 23.1
			},
			{
				categoria: "Mejor trayectoria",
				ganador: "Fernanfloo",
				foto1: "trayectoria1",
				comunidad1: 60.25,
				streamers1: 18.9,
				total1: 39.58,
				finalista: "Knekro",
				foto2: "trayectoria2",
				comunidad2: 19.68,
				streamers2: 37.8,
				total2: 28.74
			},
			{
				categoria: "Talk show del año",
				ganador: "The Wild Project",
				foto1: "talkshow1",
				comunidad1: 43.81,
				streamers1: 45.9,
				total1: 44.86,
				finalista: "YoInterneto",
				foto2: "talkshow2",
				comunidad2: 16.05,
				streamers2: 21.6,
				total2: 18.83
			},
			{
				categoria: "Canción del año",
				ganador: "El cuarteto de Ibai",
				foto1: "cancion1",
				comunidad1: 54.6,
				streamers1: 40.5,
				total1: 47.55,
				finalista: "Tofu Delivery",
				foto2: "cancion2",
				comunidad2: 10.41,
				streamers2: 29.7,
				total2: 20.1
			},
			{
				categoria: "Jägger del año",
				ganador: "Jägger boxeador",
				foto1: "jagger1",
				comunidad1: 36.09,
				streamers1: 51.3,
				total1: 43.7,
				finalista: "Profesor Jägger",
				foto2: "jagger2",
				comunidad2: 34.19,
				streamers2: 24.3,
				total2: 29.25
			},
			{
				categoria: "Streamer IRL del año",
				ganador: "Kidi",
				foto1: "irl1",
				comunidad1: 20.81,
				streamers1: 67.5,
				total1: 44.15,
				finalista: "Momo",
				foto2: "irl2",
				comunidad2: 51.39,
				streamers2: 16.2,
				total2: 33.79
			},
			{
				categoria: "Caster del año",
				ganador: "Kaquka",
				foto1: "caster1",
				comunidad1: 40.48,
				streamers1: 27,
				total1: 33.74,
				finalista: "Champi",
				foto2: "caster2",
				comunidad2: 24.41,
				streamers2: 29.7,
				total2: 27.1
			},
			{
				categoria: "Reportero/a de esports del año",
				ganador: "Cristinini",
				foto1: "reportero1",
				comunidad1: 66.01,
				streamers1: 35.1,
				total1: 50.56,
				finalista: "Yuste",
				foto2: "reportero2",
				comunidad2: 18.79,
				streamers2: 43.2,
				total2: 31
			},
			{
				categoria: "Jugador/a de esports del año",
				ganador: "Mixwell",
				foto1: "jugador1",
				comunidad1: 32.92,
				streamers1: 37.8,
				total1: 35.36,
				finalista: "Elyoya",
				foto2: "jugador2",
				comunidad2: 26.82,
				streamers2: 37.8,
				total2: 32.31
			},
			{
				categoria: "Roleplayer del año",
				ganador: "AgenteMaxo",
				foto1: "roleplayer1",
				comunidad1: 23.14,
				streamers1: 40.5,
				total1: 31.82,
				finalista: "Cristinini",
				foto2: "roleplayer2",
				comunidad2: 28.52,
				streamers2: 29.7,
				total2: 29.11
			},
			{
				categoria: "Baile del año",
				ganador: "Papi Gavi",
				foto1: "baile1",
				comunidad1: 45.96,
				streamers1: 35.1,
				total1: 40.53,
				finalista: "Ibai Llanos",
				foto2: "baile2",
				comunidad2: 25.14,
				streamers2: 54,
				total2: 39.57
			},
			{
				categoria: "Enfadado/a del año",
				ganador: "Agustin51",
				foto1: "enfadado1",
				comunidad1: 34.16,
				streamers1: 51.3,
				total1: 42.73,
				finalista: "ElXocas",
				foto2: "enfadado2",
				comunidad2: 23.06,
				streamers2: 18.9,
				total2: 20.98
			},
			{
				categoria: "Fail del año",
				ganador: "Ibai",
				foto1: "fail1",
				comunidad1: 47.59,
				streamers1: 27,
				total1: 37.29,
				finalista: "Ampeter",
				foto2: "fail2",
				comunidad2: 27.73,
				streamers2: 43.2,
				total2: 35.46
			},
			{
				categoria: "Clip del año",
				ganador: "El Kun",
				foto1: "clip1",
				comunidad1: 42.61,
				streamers1: 32.4,
				total1: 37.51,
				finalista: "Esto no es un juego",
				foto2: "clip2",
				comunidad2: 21.86,
				streamers2: 51.3,
				total2: 36.58
			}
		]
	},
	{
		edition: "2",
		name: "Segunda edición",
		metrics: {
			news: 616,
			media: 6.6,
			views: 730
		},
		info: [
			{
				categoria: "Streamer del año",
				ganador: "Ibai",
				foto1: "streamer1",
				comunidad1: 21,
				streamers1: 56.03,
				total1: 38.52,
				finalista: "Illojuan",
				foto2: "streamer2",
				comunidad2: 22,
				streamers2: 22.67,
				total2: 22.34
			},
			{
				categoria: "Mejor miniserie de contenido",
				ganador: "Squid Craft Games",
				foto1: "miniserie1",
				comunidad1: 82,
				streamers1: 96.3,
				total1: 89.15,
				finalista: "Saw Minecraft Games",
				foto2: "miniserie2",
				comunidad2: 11,
				streamers2: 0,
				total2: 5.5
			},
			{
				categoria: "Mejor trayectoria",
				ganador: "Germán Garmendia",
				foto1: "trayectoria"
			},
			{
				categoria: "Mejor serie de contenido",
				ganador: "Dedsafio 2",
				foto1: "serie1",
				comunidad1: 28,
				streamers1: 40.5,
				total1: 34.25,
				finalista: "Tortillaland 2",
				foto2: "serie2",
				comunidad2: 30,
				streamers2: 21,
				total2: 25.5
			},
			{
				categoria: "Streamer revelación",
				ganador: "Spreen",
				foto1: "revelacion1",
				comunidad1: 29,
				streamers1: 50.4,
				total1: 39.7,
				finalista: "Rivers",
				foto2: "revelacion2",
				comunidad2: 35,
				streamers2: 35.22,
				total2: 35.11
			},
			{
				categoria: "VTuber del año",
				ganador: "Zilverk",
				foto1: "vtuber1",
				comunidad1: 62,
				streamers1: 52.4,
				total1: 57.2,
				finalista: "NimuVT",
				foto2: "vtuber2",
				comunidad2: 29,
				streamers2: 43.9,
				total2: 36.45
			},
			{
				categoria: "Evento del año",
				ganador: "La velada del año II",
				foto1: "evento1",
				comunidad1: 92,
				streamers1: 98.21,
				total1: 95.61,
				finalista: "El partidazo de youtubers 2",
				foto2: "evento2",
				comunidad2: 3.6,
				streamers2: 1.79,
				total2: 2.4
			},
			{
				categoria: "Talk Show del año",
				ganador: "The Wild Project",
				foto1: "talkshow1",
				comunidad1: 52,
				streamers1: 75,
				total1: 63.5,
				finalista: "Charlando tranquilamente",
				foto2: "talkshow2",
				comunidad2: 21,
				streamers2: 15,
				total2: 18
			},
			{
				categoria: "Canción del año",
				ganador: "Solo - Robleis",
				foto1: "cancion1",
				comunidad1: 34,
				streamers1: 30.28,
				total1: 32.14,
				finalista: "La trampa es ley - Lit Killah",
				foto2: "cancion2",
				comunidad2: 29,
				streamers2: 31.04,
				total2: 30.02
			},
			{
				categoria: "Streamer IRL del año",
				ganador: "Kidi",
				foto1: "irl1",
				comunidad1: 21,
				streamers1: 46.47,
				total1: 33.74,
				finalista: "Viviendoenlacalle",
				foto2: "irl2",
				comunidad2: 26,
				streamers2: 27.64,
				total2: 26.82
			},
			{
				categoria: "Mejor cobertura informativa",
				ganador: "Gerard Romero",
				foto1: "cobertura1",
				comunidad1: 52,
				streamers1: 40.2,
				total1: 46.1,
				finalista: "Tamayovisión",
				foto2: "cobertura2",
				comunidad2: 15,
				streamers2: 24.55,
				total2: 19.75
			},
			{
				categoria: "Caster del año",
				ganador: "Vicky Palami",
				foto1: "caster1",
				comunidad1: 44,
				streamers1: 23.33,
				total1: 33.67,
				finalista: "Suja",
				foto2: "caster2",
				comunidad2: 25,
				streamers2: 28.03,
				total2: 26.51
			},
			{
				categoria: "Jugador de Esports del año",
				ganador: "Jelty",
				foto1: "esports1",
				comunidad1: 34,
				streamers1: 22.22,
				total1: 28.11,
				finalista: "Mixwell",
				foto2: "esports2",
				comunidad2: 21,
				streamers2: 30.55,
				total2: 25.78
			},
			{
				categoria: "Roleplayer del año",
				ganador: "JuanSGuarnizo",
				foto1: "roleplayer1",
				comunidad1: 45,
				streamers1: 39.93,
				total1: 42.47,
				finalista: "Agentemaxo",
				foto2: "roleplayer2",
				comunidad2: 26,
				streamers2: 29.51,
				total2: 27.76
			},
			{
				categoria: "Baile del año",
				ganador: "El Woody - Carreraaa",
				foto1: "baile1",
				comunidad1: 34,
				streamers1: 54.21,
				total1: 44.11,
				finalista: "Bailando en la velada - Respetacamiones24",
				foto2: "baile2",
				comunidad2: 18,
				streamers2: 27.65,
				total2: 22.83
			},
			{
				categoria: "Enfadado del año",
				ganador: "Luzu",
				foto1: "enfadado1",
				comunidad1: 49,
				streamers1: 60.43,
				total1: 54.72,
				finalista: "DJMario",
				foto2: "enfadado2",
				comunidad2: 22,
				streamers2: 27.68,
				total2: 24.84
			},
			{
				categoria: "Fail del año",
				ganador: "Ahí va mi burst - Manute",
				foto1: "fail1",
				comunidad1: 27,
				streamers1: 39.28,
				total1: 33.14,
				finalista: "La caída - Madre de Karchez",
				foto2: "fail2",
				comunidad2: 25,
				streamers2: 16.08,
				total2: 20.54
			}
		]
	}
];

function Section({
  children,
  title,
  size
}) {
  return jsxs("section", {
    class: `
        flex flex-col gap-10 lg:gap-20
        ${size === "medium" ? "max-w-6xl mx-auto" : ""}
        ${size === "full" ? "w-full items-center" : ""}
      `,
    children: [jsx("h2", {
      class: "text-4xl md:text-6xl uppercase font-tomaso text-center",
      children: title
    }), children]
  });
}

function Palamares({
  edition
}) {
  const [categorySelected, setCategorySelected] = useState("Streamer del año");
  const [isChange, setIsChange] = useState(false);
  const editionInfo = editions[edition].info;
  const twoFinalists = transformData(editions[edition].info.find((info) => info.categoria === categorySelected));
  const handleCategorySelected = (category) => {
    setCategorySelected(category);
    setIsChange(true);
  };
  useEffect(() => {
    categorySelected && setTimeout(() => {
      setIsChange(false);
    }, 1800);
  }, [categorySelected]);
  return jsx(Section, {
    title: "palmarés",
    size: "medium",
    children: jsxs("section", {
      class: "flex gap-12",
      children: [jsx(Winners, {
        winners: editionInfo,
        handleCategorySelected,
        categorySelected
      }), jsxs("article", {
        class: `flex gap-4 items-end ${isChange ? styles$1.animationFail : ""}`,
        children: [jsx(FinalistCard, {
          position: 1,
          edition: edition + 1,
          finalist: twoFinalists.first
        }), jsx(FinalistCard, {
          position: 2,
          edition: edition + 1,
          finalist: twoFinalists.second
        })]
      })]
    })
  });
}

function BtnLoadPhotos({
  edition,
  offset
}) {
  const [isOpen, setIsOpen] = useState(true);
  const loadPhotos = async () => {
    const res = await fetch(`/api/gallery.json?edition=${edition}&offset=${offset}`);
    const {
      remainingPhotos
    } = await res.json();
    const gallery = document.getElementById("gallery");
    const listImg = remainingPhotos.map((img, index) => {
      const containerImg = document.createElement("div");
      const firstImg = document.createElement("img");
      const secondImg = document.createElement("img");
      const srcImg = `/images/editions/${edition + 1}/gallery/thumbnails/img-${+offset + index + 1}.webp`;
      firstImg.setAttribute("src", srcImg);
      firstImg.setAttribute("width", img.width.toString());
      firstImg.setAttribute("height", img.height.toString());
      firstImg.classList.add("first-img");
      secondImg.setAttribute("src", srcImg);
      secondImg.setAttribute("width", img.width.toString());
      secondImg.setAttribute("height", img.height.toString());
      secondImg.classList.add("second-img");
      containerImg.appendChild(firstImg);
      containerImg.appendChild(secondImg);
      containerImg.classList.add("img-container");
      return containerImg.outerHTML;
    }).join("");
    gallery?.insertAdjacentHTML("beforeend", listImg);
    setIsOpen(false);
  };
  return jsx(Fragment, {
    children: isOpen && jsx("button", {
      class: "load-photos",
      onClick: loadPhotos,
      children: "descubrelas todas"
    })
  });
}

function Gallery({
  edition
}) {
  const photos = gallery[edition].slice(0, 10);
  return jsxs(Section, {
    title: "galería",
    size: "full",
    children: [jsx("section", {
      class: "columns-1 gap-x-6 md:columns-2 xl:columns-3",
      children: jsx("section", {
        class: "grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6",
        id: "gallery",
        children: photos.map((photo, index) => jsxs("div", {
          class: `group img-container`,
          children: [jsx("img", {
            src: `/images/editions/${edition + 1}/gallery/thumbnails/img-${index + 1}.webp`,
            alt: "photo",
            class: `first-img`,
            width: photo.width,
            height: photo.height
          }), jsx("img", {
            src: `/images/editions/${edition + 1}/gallery/thumbnails/img-${index + 1}.webp`,
            alt: "photo",
            class: `second-img scale-100`
          })]
        }))
      })
    }), jsx(BtnLoadPhotos, {
      edition,
      offset: photos.length
    })]
  });
}

function Main() {
  const [edition, setEdition] = useState(0);
  const handleEdition = (edition2) => {
    setEdition(edition2);
  };
  const metrics = editions[edition].metrics;
  return jsxs(Fragment, {
    children: [jsx(TabEditions, {
      handleEdition,
      edition
    }), jsx(Palamares, {
      edition
    }), jsx(Gallery, {
      edition
    }), jsx(Section, {
      title: "los esland en numeros",
      size: "medium",
      children: jsxs("section", {
        class: "grid grid-cols-1 lg:grid-cols-3 gap-y-10",
        id: "metrics",
        children: [jsxs("hgroup", {
          class: "flex flex-col justify-center items-center",
          children: [jsx("p", {
            class: `counter numberMetric`,
            children: metrics.views
          }), jsx("h3", {
            class: "titleMetric",
            children: "de visualizaciones"
          })]
        }), jsxs("hgroup", {
          class: "flex flex-col justify-center items-center",
          children: [jsx("p", {
            class: `counter numberMetric`,
            children: metrics.news
          }), jsx("h3", {
            class: "titleMetric",
            children: "noticias en prensa"
          })]
        }), jsxs("hgroup", {
          class: "flex flex-col justify-center items-center",
          children: [jsx("p", {
            class: `counter numberMetric`,
            children: metrics.media
          }), jsx("h3", {
            class: "titleMetric",
            children: "en medios ganados"
          })]
        })]
      })
    })]
  });
}

const $$Astro = createAstro();
const $$Archivo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Archivo;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titlePage": "Archivo de las ediciones anteriores", "description": "Premios Esland" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "media": "image", "src": "/images/backgrounds/archive-bg.webp" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="absolute z-20 gap-8 flex flex-col items-center -translate-y-20"> <h1 class="lg:text-6xl text-4xl text-center uppercase font-tomaso tracking-widest">
Ediciones anteriores
</h1> ${renderComponent($$result3, "LinkToAction", $$LinkToAction, { "text": "revive la ultima gala", "class": "px-5 py-3 text-xl lg:text-2xl font-medium", "href": "https://www.youtube.com/watch?v=1YmpPrqKP-g", "target": "_blank" })} </div> ` })} <main class="section flex flex-col gap-48"> ${renderComponent($$result2, "Main", Main, { "client:load": true, "client:component-hydration": "load", "client:component-path": "~/components/archive-page/Main", "client:component-export": "Main" })} </main> ` })} `;
}, "/Users/juanfer/Dev/projects/clones/premios-esland/src/pages/archivo.astro", void 0);

const $$file = "/Users/juanfer/Dev/projects/clones/premios-esland/src/pages/archivo.astro";
const $$url = "/archivo";

const archivo = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Archivo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ViewTransitions as $, $$NavBar as a, $$Footer as b, $$Logo as c, $$Hero as d, $$Layout as e, $$LinkToAction as f, gallery as g, archivo as h };
