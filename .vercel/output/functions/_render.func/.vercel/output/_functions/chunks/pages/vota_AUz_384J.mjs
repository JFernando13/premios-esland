/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderComponent, f as addAttribute } from '../astro__3JC62Wo.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */
import { e as $$Layout } from './archivo_YB4Hmy0P.mjs';
import { g as getSession } from './__0Z619rc3.mjs';
import { a as allCategories } from './candidates_-S3sL_CY.mjs';
import { useState, useEffect } from 'preact/hooks';
import { jsx, jsxs, Fragment } from 'preact/jsx-runtime';

const $$Astro$7 = createAstro();
const $$CheckPencilIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$CheckPencilIcon;
  return renderTemplate`${maybeRenderHead()}<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.464 16.714 3.572 3.572M7.036 16.714l-3.572 3.572M1 13.75h8.5s.5 0 .5.5v8.5s0 .5-.5.5H1s-.5 0-.5-.5v-8.5s0-.5.5-.5M1 .75h8.5s.5 0 .5.5v8.5s0 .5-.5.5H1s-.5 0-.5-.5v-8.5s0-.5.5-.5M15.7 13.55l-4.2 1.2 1.2-4.2 7.179-7.179a2.121 2.121 0 0 1 3 3ZM18.979 4.271l3 3M12.7 10.55l3 3"></path></svg>`;
}, "/Users/juanfer/Dev/projects/clones/premios-esland/src/components/icons/CheckPencilIcon.astro", void 0);

const $$Astro$6 = createAstro();
const $$PodiumIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$PodiumIcon;
  return renderTemplate`${maybeRenderHead()}<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 11.5h5s1 0 1 1v10s0 1-1 1h-5s-1 0-1-1v-10s0-1 1-1M1.5 17.5h4s1 0 1 1v4s0 1-1 1h-4s-1 0-1-1v-4s0-1 1-1M18.5 20.5h4s1 0 1 1v1s0 1-1 1h-4s-1 0-1-1v-1s0-1 1-1M13.5 3.5h1.921a.5.5 0 0 1 .293.905l-1.6 1.161.986 2.266a.5.5 0 0 1-.7.635L12 7.122 9.609 8.467a.5.5 0 0 1-.7-.635l.986-2.266-1.6-1.161a.5.5 0 0 1 .286-.905H10.5L11.534.82a.5.5 0 0 1 .933 0ZM1.5 13.5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M18.5 16.5a2 2 0 1 0 4 0 2 2 0 1 0-4 0"></path></svg>`;
}, "/Users/juanfer/Dev/projects/clones/premios-esland/src/components/icons/PodiumIcon.astro", void 0);

const $$Astro$5 = createAstro();
const $$ShareIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ShareIcon;
  return renderTemplate`${maybeRenderHead()}<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.074 10.212a4 4 0 1 0 0 3.574M19.5 8.5a4.01 4.01 0 1 0-3.575-2.213M15.925 17.712A4 4 0 1 0 19.5 15.5"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.5a4 4 0 0 1-3.575-2.213l-7.851 3.925a3.963 3.963 0 0 1 0 3.575l7.851 3.926A4 4 0 0 1 19.5 15.5"></path></svg>`;
}, "/Users/juanfer/Dev/projects/clones/premios-esland/src/components/icons/ShareIcon.astro", void 0);

const $$Astro$4 = createAstro();
const $$SortVoteIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SortVoteIcon;
  return renderTemplate`${maybeRenderHead()}<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.839 3.625a2.143 2.143 0 1 0 4.286 0 2.143 2.143 0 1 0-4.286 0M7.2 10.321a3.214 3.214 0 0 0-6.428 0M1.839 15.678a2.143 2.143 0 1 0 4.286 0 2.143 2.143 0 1 0-4.286 0M7.2 22.375a3.214 3.214 0 1 0-6.428 0M9.768 4h12.464a1 1 0 0 1 1 1v2.464a1 1 0 0 1-1 1H9.768h0V4h0ZM9.768 16h7a1 1 0 0 1 1 1v2.464a1 1 0 0 1-1 1h-7 0V16h0ZM9.768.75v22.5"></path></svg>`;
}, "/Users/juanfer/Dev/projects/clones/premios-esland/src/components/icons/SortVoteIcon.astro", void 0);

const $$Astro$3 = createAstro();
const $$TapButtonIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TapButtonIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="40" height="40" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.3177 3.91406 7.38277 9.83594 5.26118 7.71435"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.6875 13H2.25c-.39782 0-.77936-.158-1.06066-.4393C.908035 12.2794.75 11.8978.75 11.5V2.25c0-.39782.158035-.77936.43934-1.06066C1.47064.908035 1.85218.75 2.25.75H20c.3978 0 .7794.158035 1.0607.43934.2813.2813.4393.66284.4393 1.06066v9.25c0 .3978-.158.7794-.4393 1.0607S20.3978 13 20 13"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.75 23.1562-2.764-3.11c-.13865-.1523-.24569-.3306-.31493-.5246-.06923-.194-.09928-.3999-.08841-.6056.01088-.2057.06246-.4072.15177-.5928.0893-.1856.21455-.3517.36847-.4885.154-.1369.3335-.2419.5283-.3088.1948-.067.401-.0947.6065-.0814.2056.0132.4065.0672.5911.1586.1845.0915.3491.2186.4842.3741l1.937 2.179v-9c0-.3978.158-.7793.4393-1.0606.2813-.28131.6629-.43935 1.0607-.43935.3978 0 .7794.15804 1.0607.43935.2813.2813.4393.6628.4393 1.0606v6.75h1.5c1.1935 0 2.3381.4742 3.182 1.3181.8439.8439 1.318 1.9885 1.318 3.1819v.75"></path></svg>`;
}, "/Users/juanfer/Dev/projects/clones/premios-esland/src/components/icons/TapButtonIcon.astro", void 0);

const $$Astro$2 = createAstro();
const $$ThinkBrainIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ThinkBrainIcon;
  return renderTemplate`${maybeRenderHead()}<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8.65 23.5v-3H7.54a3 3 0 0 1-3-3v-3H1.85a.51.51 0 0 1-.41-.21.49.49 0 0 1-.07-.44C3.44 7.43 4.88.5 12.9.5a9.74 9.74 0 0 1 5.75 17.61v5.39"></path><path d="M18.62 7.15a3 3 0 0 0-3-2.65 3 3 0 0 0-1.31.31A2.49 2.49 0 0 0 9.85 5a2.49 2.49 0 1 0-.2 5 2.63 2.63 0 0 0 .8-.14 2.93 2.93 0 0 0 2.91 1.62A3.53 3.53 0 0 0 16.65 14a3.63 3.63 0 0 0 3.5-3.75 3.8 3.8 0 0 0-1.53-3.1Z"></path><path d="m10.45 9.86.29-.86a2.92 2.92 0 0 1 1.32-1.61l.59-.39M18.23 6c-2.11.53-2.42 1.57-2.58 2h0M18.19 13.62a4.94 4.94 0 0 0-1.5-2.71"></path></g></svg>`;
}, "/Users/juanfer/Dev/projects/clones/premios-esland/src/components/icons/ThinkBrainIcon.astro", void 0);

const $$Astro$1 = createAstro();
const $$VoteInstructions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$VoteInstructions;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-6 max-w-[1406px] mx-auto w-full" data-astro-cid-vqelm4ij> <h1 class="uppercase text-left text-3xl lg:text-5xl font-bold tracking-wider leading-loose max-w-xl text-balance" data-astro-cid-vqelm4ij>
las votaciones ya estan aqui
</h1> <button class="px-5 py-3 w-max text-lg lg:text-2xl link-action" id="login" data-astro-cid-vqelm4ij>
¡empezar con las votaciones!
</button> <p class="text-2xl max-w-3xl" data-astro-cid-vqelm4ij>
Ha llegado el momento más importante. <strong data-astro-cid-vqelm4ij>Votar en la 3ª Edición de los Premios.</strong> Para que tus votos se contabilicen de forma correcta, te dejamos algunos consejos:
</p> <ul class="flex flex-col gap-10 text-2xl font-extralight" data-astro-cid-vqelm4ij> <li data-astro-cid-vqelm4ij> ${renderComponent($$result, "SortVoteIcon", $$SortVoteIcon, { "data-astro-cid-vqelm4ij": true })} <span data-astro-cid-vqelm4ij>
vota, por orden de preferencia, hasta 4 nominados por categoría.
</span> </li> <li data-astro-cid-vqelm4ij> ${renderComponent($$result, "CheckPencilIcon", $$CheckPencilIcon, { "data-astro-cid-vqelm4ij": true })} <span data-astro-cid-vqelm4ij>no es obligatorio votar en cada categoria</span> </li> <li data-astro-cid-vqelm4ij> ${renderComponent($$result, "PodiumIcon", $$PodiumIcon, { "data-astro-cid-vqelm4ij": true })} <span data-astro-cid-vqelm4ij>no es obligatorio pero si se recomienda el uso del voto rankeado
</span> </li> <li data-astro-cid-vqelm4ij> ${renderComponent($$result, "TapButtonIcon", $$TapButtonIcon, { "data-astro-cid-vqelm4ij": true })} <span data-astro-cid-vqelm4ij>una vez tengas clara tu elección, asegurate de pulsar "enviar mis
        votos"</span> </li> <li data-astro-cid-vqelm4ij> ${renderComponent($$result, "ShareIcon", $$ShareIcon, { "data-astro-cid-vqelm4ij": true })} <span data-astro-cid-vqelm4ij>recuerda compartir tus votos en redes sociales</span> </li> <li data-astro-cid-vqelm4ij> ${renderComponent($$result, "ThinkBrainIcon", $$ThinkBrainIcon, { "data-astro-cid-vqelm4ij": true })} <span data-astro-cid-vqelm4ij>elige sabiamente y revisa tus votos, solo tienes una oportunidad</span> </li> </ul> </section> `;
}, "/Users/juanfer/Dev/projects/clones/premios-esland/src/components/vote-page/vote-instructions/VoteInstructions.astro", void 0);

function VoteFinal({
  previousPage,
  allVotes,
  goToSpecificPage
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/votes", {
        method: "POST",
        body: JSON.stringify({
          votes: allVotes
        })
      });
      if (!res.ok) {
        return setError(true);
      }
      previousPage();
      setError(false);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  if (error) {
    return jsx("p", {
      class: "first-letter:uppercase text-3xl lg:text-5xl font-semibold tracking-wide text-balance text-center",
      children: "Hubo un error al conectarse con la base datos. Por favor vuelva a intentarlo."
    });
  }
  return jsxs("section", {
    class: "flex flex-col gap-20",
    children: [jsxs("section", {
      class: "flex flex-col gap-8",
      children: [jsx("h1", {
        class: "first-letter:uppercase text-3xl lg:text-5xl font-semibold tracking-wide text-balance text-center",
        children: "tus votos finales"
      }), jsx("section", {
        class: "grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2",
        children: allCategories.map((category, index) => {
          const voteCategory = allVotes[index];
          const votes = category.candidates.flatMap((candidate) => {
            return voteCategory.includes(candidate.id) && candidate;
          });
          const isCandidate = (candidate) => {
            return candidate && typeof candidate === "object";
          };
          const candidatesVoted = votes.filter(isCandidate);
          return jsxs("article", {
            class: `bg-[#1682c7] hover:scale-105 hover:bg-[#54beff] transition-all flex flex-col items-center justify-center text-center h-44 ${loading && "opacity-55"}`,
            onClick: () => !loading && goToSpecificPage(index + 1),
            children: [jsx("picture", {
              class: "flex-1 grid grid-cols-2 h-full w-full",
              children: candidatesVoted.map((candidate) => {
                return jsx("img", {
                  src: `/images/candidates/${candidate.image}`,
                  alt: candidate.name,
                  class: "h-full object-cover object-center"
                });
              })
            }), jsx("h2", {
              class: "h-[30%] flex justify-center items-center font-semibold",
              children: category.categoryName
            })]
          });
        })
      })]
    }), jsxs("article", {
      class: "flex flex-col gap-4",
      children: [jsx("button", {
        class: "text-xl lg:text-2xl font-medium px-5 py-3 rounded-full uppercase text-blue-950 animate-fade-up bg-white hover:scale-125 hover:bg-yellow-300 hover:border-yellow-400 transition w-max self-center",
        onClick: handleSubmit,
        children: loading ? "enviando votos..." : "enviar mis votos"
      }), jsx("button", {
        onClick: () => !loading && previousPage,
        class: `hover:underline transition-all duration-1000 ${loading && "opacity-50"}`,
        children: "Editar mis votos"
      })]
    })]
  });
}

function AlertIcon() {
  return jsxs("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    children: [jsx("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }), jsx("path", {
      d: "M12 1.67c.955 0 1.845 .467 2.39 1.247l.105 .16l8.114 13.548a2.914 2.914 0 0 1 -2.307 4.363l-.195 .008h-16.225a2.914 2.914 0 0 1 -2.582 -4.2l.099 -.185l8.11 -13.538a2.914 2.914 0 0 1 2.491 -1.403zm.01 13.33l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -7a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z",
      "stroke-width": "0",
      fill: "currentColor"
    })]
  });
}

const CategoryTitle = ({
  children,
  isChanging
}) => {
  return jsxs("h1", {
    class: "relative tracking-[1px] font-tomaso text-xl sm:text-3xl text-center leading-snug flex justify-center items-center text-white",
    children: [jsx("svg", {
      class: `h-60 w-24 fill-current ${isChanging ? "translate-x-[6.5rem] sm:translate-x-[8.5rem]" : "translate-x-9 sm:translate-x-0"} transition duration-500`,
      viewBox: "0 0 90.35 240.43",
      children: jsx("path", {
        d: "m142.7 234.66-52.79 7.45L142.7 39.4 52.35 279.83z",
        transform: "translate(-52.35 -39.4)"
      })
    }), jsxs("div", {
      class: "flex justify-center items-center flex-col gap-y-4 w-72 px-10",
      children: [jsx("svg", {
        class: `absolute ${isChanging ? "scale-[1.2] sm:scale-[1.7] -translate-y-0" : "scale-100 -translate-y-28"} h-14 fill-current transition duration-500`,
        viewBox: "0 0 16.04 62.55",
        children: jsx("path", {
          d: "m300 38.16-8.02 46.7 8.02 15.85 8.02-15.85z",
          transform: "translate(-291.98 -38.16)"
        })
      }), jsx("span", {
        class: `${isChanging ? "invisible opacity-0" : "visible opacity-100"} delay-75 transition duration-300`,
        children
      })]
    }), jsx("svg", {
      class: `h-60 w-24 fill-current ${isChanging ? "-translate-x-[6.5rem] sm:-translate-x-[8.5rem]" : "-translate-x-9 sm:translate-x-0"} transition duration-500`,
      viewBox: "0 0 90.35 240.43",
      children: jsx("path", {
        d: "m457.3 234.66 52.79 7.45L457.3 39.4l90.35 240.43z",
        transform: "translate(-457.3 -39.4)"
      })
    })]
  });
};

function Header({
  categoryName,
  isChanging,
  votes
}) {
  return jsxs(Fragment, {
    children: [jsx(CategoryTitle, {
      isChanging,
      children: categoryName
    }), jsx("div", {
      class: "flex flex-col justify-center items-center gap-2",
      children: jsxs("p", {
        class: "text-yellow-300 font-bold flex gap-2 items-center",
        children: [jsx("span", {
          class: "text-xl capitalize",
          children: "votos realizados"
        }), jsxs("span", {
          class: "text-3xl",
          children: [votes.byCategory.length, "/", votes.maxVotes]
        })]
      })
    }), votes.hasMissingVotes && jsxs("div", {
      class: `text-red-800 capitalize font-semibold fixed bottom-8 right-14 bg-white px-6 py-4 z-10 rounded-lg flex items-center gap-3 ${votes.hasMissingVotes ? "animate-fade-down" : "animate-fade-up"}`,
      children: [jsx(AlertIcon, {}), "faltan votos por realizar"]
    })]
  });
}

function CameraIcon() {
  return jsxs("svg", {
    width: "16",
    height: "16",
    fill: "none",
    viewBox: "0 0 24 24",
    children: [jsx("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M17.3213 14.501c-.3204-.1755-.5195-.5117-.5195-.877v-3.2467c0-.3653.1991-.70155.5195-.87706l3.6075-1.9761c.6664-.36506 1.4804.11718 1.4804.87703v7.19893c0 .7598-.814 1.2421-1.4804.877l-3.6075-1.9761ZM8.43066 8.53223h4.12974v4.12967M5.91504 15.1943 12.438 8.67136"
    }), jsx("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.59082 19.499c-1.10457 0-2-.8954-2-2V6.50193c0-1.10457.89543-2 2-2H14.8013c1.1045 0 2 .89543 2 2V17.499c0 1.1046-.8955 2-2 2H3.59082Z"
    })]
  });
}

function Candidate({
  candidate,
  isChanging,
  index,
  handleVote,
  voteIndex
}) {
  const delay = index * 80 + "ms";
  const isVoted = voteIndex > 0;
  return jsxs("article", {
    class: `${isVoted ? "bg-yellow-500 text-white" : "bg-[#1682c7] hover:bg-sky-400 text-white"} h-full flex flex-col p-1 gap-1 rounded-md md:hover:scale-105 transition-all shadow-md shadow-black/20 ${isChanging ? "animate-fade-up" : ""} group`,
    style: {
      animationDelay: delay
    },
    onClick: () => handleVote({
      candidateID: candidate.id
    }),
    children: [jsxs("picture", {
      class: "flex-1 h-full flex flex-col gap-1 relative",
      children: [jsxs("div", {
        class: "flex justify-between z-10 items-center px-2 py-1",
        children: [voteIndex > 0 && jsx("span", {
          class: "rounded-full grid place-content-center w-6 h-6 text-sm font-bold bg-yellow-500",
          children: voteIndex
        }), jsx("a", {
          href: candidate.link ?? "",
          target: "_blank",
          class: "p-1 bg-white text-black rounded-full cursor-pointer hover:bg-black hover:text-white transition-colors",
          children: jsx(CameraIcon, {})
        })]
      }), jsx("img", {
        src: `/images/candidates/${candidate.image}`,
        alt: candidate.name,
        class: "w-full h-full rounded-md object-cover object-center bg-blue-600 absolute top-0 mix-blend-luminosity group-hover:mix-blend-normal transition-all"
      })]
    }), jsx("h2", {
      class: "self-center text-xs font-semibold",
      children: candidate.name
    })]
  });
}

function Candidates({
  candidates,
  isChanging,
  votes
}) {
  return jsx("section", {
    class: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 xl:auto-rows-[175px] auto-rows-[300px] gap-2",
    children: candidates?.map((candidate, index) => {
      const voteIndex = votes.byCategory?.indexOf(candidate.id) ?? -1;
      return jsx(Candidate, {
        candidate,
        isChanging,
        index,
        handleVote: votes.handleVote,
        voteIndex: voteIndex + 1
      });
    })
  });
}

function ArrowLeftIcon() {
  return jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    class: "w-6 h-6 rotate-180",
    children: jsx("path", {
      fill: "currentColor",
      stroke: "transparent",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m13.04 1.429 10.218 10.216a.5.5 0 0 1 0 .708L13.04 22.571a.5.5 0 0 1-.707 0l-2.756-2.756a.5.5 0 0 1-.014-.693L14.1 14.5h-13a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h13L9.566 4.878a.5.5 0 0 1 .012-.7l2.755-2.754a.5.5 0 0 1 .707.005Z"
    })
  });
}

function ArrowRightIcon() {
  return jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    class: "w-6 h-6",
    children: jsx("path", {
      fill: "currentColor",
      stroke: "transparent",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m13.04 1.429 10.218 10.216a.5.5 0 0 1 0 .708L13.04 22.571a.5.5 0 0 1-.707 0l-2.756-2.756a.5.5 0 0 1-.014-.693L14.1 14.5h-13a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h13L9.566 4.878a.5.5 0 0 1 .012-.7l2.755-2.754a.5.5 0 0 1 .707.005Z"
    })
  });
}

function Pagination({
  totalPages,
  handleNext,
  handlePrevious,
  currentPage
}) {
  return jsxs("section", {
    class: "flex gap-4 items-center",
    children: [jsx("button", {
      onClick: handlePrevious,
      class: "pagination",
      children: jsx(ArrowLeftIcon, {})
    }), jsxs("p", {
      class: "text-xl font-semibold items-center flex gap-2",
      children: [jsx("span", {
        children: "categoria"
      }), jsxs("span", {
        class: "text-3xl font-black",
        children: [currentPage, "/", totalPages]
      })]
    }), jsx("button", {
      onClick: handleNext,
      class: "pagination",
      children: jsx(ArrowRightIcon, {})
    })]
  });
}

function Session({
  user
}) {
  return jsxs("section", {
    class: "flex gap-4 flex-1",
    children: [jsx("img", {
      src: user.image ?? "",
      alt: `Imagen de foto de perfil de ${user.name}`,
      class: "w-12 h-12 rounded-full object-cover object-center"
    }), jsxs("article", {
      class: "flex flex-col gap-2justify-start",
      children: [jsx("h2", {
        class: "text-primary font-bold text-xl",
        children: user.name
      }), jsx("button", {
        class: "hover:underline text-sm self-start capitalize",
        id: "logout",
        children: "cerrar sección"
      })]
    })]
  });
}

function Footer({
  user,
  page,
  handlePage
}) {
  return jsxs("footer", {
    class: "flex justify-between gap-4 bg-black/50 backdrop-blur-xl px-8 py-4 items-center rounded",
    children: [jsx(Session, {
      user
    }), jsx(Pagination, {
      handleNext: handlePage.next,
      handlePrevious: handlePage.previous,
      currentPage: page.current,
      totalPages: page.total
    })]
  });
}

function useCandidates({
  currentPage
}) {
  const [candidatesByCategory, setCandidatesByCategory] = useState({});
  const [isChanging, setIsChanging] = useState(false);
  useEffect(() => {
    setIsChanging(true);
    async function fetchCandidates() {
      const res = await fetch(`/api/candidates.json?category=${currentPage - 1}`);
      const data = await res.json();
      setCandidatesByCategory(data);
    }
    fetchCandidates();
    setTimeout(() => setIsChanging(false), 1500);
  }, [currentPage]);
  return {
    candidatesByCategory,
    isChanging
  };
}

const totalPages$1 = 12;
function usePagination({
  handleMissingVotes
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const handleNext = () => {
    if (currentPage >= totalPages$1) {
      const missing = handleMissingVotes();
      if (!missing) {
        setCurrentPage(13);
      }
      return;
    }
    setCurrentPage(currentPage + 1);
  };
  const handlePrevious = () => {
    if (currentPage <= 1) {
      return setCurrentPage(totalPages$1);
    }
    setCurrentPage(currentPage - 1);
  };
  const goToSpecificPage = (page) => {
    if (page > totalPages$1)
      return;
    setCurrentPage(page);
  };
  return {
    handlePage: {
      next: handleNext,
      previous: handlePrevious,
      goToSpecificPage
    },
    page: {
      current: currentPage,
      total: totalPages$1
    }
  };
}

const totalPages = 12;
const maxVotes = 4;
let initialVotes = Array.from({
  length: totalPages
}, () => []);
function useVoteSystem() {
  const [votesAllCategories, setVotesAllCategories] = useState(initialVotes);
  const [hasMissingVotes, setHasMissingVotes] = useState(null);
  useEffect(() => {
    const getVotes = async () => {
      const res = await fetch(`/api/votes`);
      const data = await res.json();
      setVotesAllCategories(data.votes);
    };
    getVotes();
  }, []);
  const handleMissingVotes = () => {
    const hasMissing = votesAllCategories.some((voteCategory) => voteCategory.length !== maxVotes);
    setHasMissingVotes(hasMissing);
    setTimeout(() => setHasMissingVotes(null), 5e3);
    return hasMissing;
  };
  const {
    page,
    handlePage
  } = usePagination({
    handleMissingVotes
  });
  const candidates = useCandidates({
    currentPage: page.current
  });
  const handleVote = ({
    candidateID
  }) => {
    const voteCategory = votesAllCategories[page.current - 1];
    if (voteCategory.includes(candidateID)) {
      const deletedVote = voteCategory.filter((vote) => vote !== candidateID);
      return setVotesAllCategories((prev) => prev.with(page.current - 1, deletedVote));
    }
    if (voteCategory.length < 4) {
      return setVotesAllCategories((prev) => {
        const newVotes = prev.with(page.current - 1, [...voteCategory, candidateID]);
        newVotes.every((voteCategory2) => voteCategory2.length === maxVotes) && setHasMissingVotes(false);
        return newVotes;
      });
    }
  };
  return {
    votes: {
      all: votesAllCategories,
      hasMissingVotes,
      byCategory: votesAllCategories[page.current - 1],
      maxVotes,
      handleVote,
      handleMissingVotes
    },
    pagination: {
      page,
      handlePage
    },
    candidates
  };
}

function VoteSystem({
  user
}) {
  const {
    votes,
    candidates: {
      candidatesByCategory,
      isChanging
    },
    pagination: {
      page,
      handlePage
    }
  } = useVoteSystem();
  return jsx("section", {
    class: "max-w-7xl w-full flex flex-col gap-8",
    children: page.current > page.total ? jsx(VoteFinal, {
      previousPage: handlePage.previous,
      allVotes: votes.all,
      goToSpecificPage: handlePage.goToSpecificPage
    }) : jsxs(Fragment, {
      children: [jsx(Header, {
        votes,
        categoryName: candidatesByCategory?.categoryName ?? "",
        isChanging
      }), jsx(Candidates, {
        candidates: candidatesByCategory?.candidates ?? [],
        isChanging,
        votes
      }), jsx(Footer, {
        user: user ?? {},
        page,
        handlePage
      })]
    })
  });
}

const $$Astro = createAstro();
const $$Vota = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Vota;
  const session = await getSession(Astro2.request);
  const bg = session ? "/vote-bg.webp" : "/vote-bg-no-session.webp";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titlePage": "Votaci\xF3n", "description": "Premios Esland", "data-astro-cid-qptzwol4": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex justify-center items-center relative min-h-screen" data-astro-cid-qptzwol4> <img${addAttribute(`/images/backgrounds/${bg}`, "src")} alt="vote background without session" class="object-cover absolute -z-10 h-full object-center" data-astro-cid-qptzwol4> ${session ? renderTemplate`${renderComponent($$result2, "VoteSystem", VoteSystem, { "client:load": true, "user": session.user ?? {}, "client:component-hydration": "load", "client:component-path": "~/components/vote-page/vote-system/VoteSystem", "client:component-export": "VoteSystem", "data-astro-cid-qptzwol4": true })}` : renderTemplate`${renderComponent($$result2, "ContentNoSession", $$VoteInstructions, { "data-astro-cid-qptzwol4": true })}`} </main> ` })}  `;
}, "/Users/juanfer/Dev/projects/clones/premios-esland/src/pages/vota.astro", void 0);

const $$file = "/Users/juanfer/Dev/projects/clones/premios-esland/src/pages/vota.astro";
const $$url = "/vota";

export { $$Vota as default, $$file as file, $$url as url };
