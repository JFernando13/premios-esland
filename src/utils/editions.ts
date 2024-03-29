import type { FinalistOld, TwoFinalists } from "~/types/editions.ts";

export function transformData(data: FinalistOld): TwoFinalists {
  const transformedData = {
    first: {
      category: data.categoria,
      name: data.ganador,
      photo: data.foto1,
      community: data.comunidad1,
      streamers: data.streamers1,
      total: data.total1,
    },
    second: {
      category: data.categoria,
      name: data.finalista,
      photo: data.foto2,
      community: data.comunidad2,
      streamers: data.streamers2,
      total: data.total2,
    },
  };

  return transformedData;
}