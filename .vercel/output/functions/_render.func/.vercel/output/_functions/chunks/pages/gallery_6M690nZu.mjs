import { g as gallery } from './archivo_YB4Hmy0P.mjs';

const GET = async ({
  url
}) => {
  const searchParams = url.searchParams;
  const edition = Number(searchParams.get("edition") ?? "1");
  const offset = Number(searchParams.get("offset") ?? "0");
  const remainingPhotos = gallery[edition].slice(offset);
  return new Response(JSON.stringify({
    remainingPhotos,
    offset,
    edition
  }));
};

export { GET };
