import { getGifs } from "../../helpers/getGifs";

describe("Pruebas con getGifs Fetch", () => {
  test("Debe traer 20 elementos", async () => {
    const gifs = await getGifs("One Punch");

    expect(gifs.length).toBe(20);
  });
});
