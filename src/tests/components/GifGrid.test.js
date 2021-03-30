import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  const category = "One Punch";
  let wrapper = shallow(<GifGrid category={category} />);

  test("Debe mostrarse correctamente", () => {
    useFetchGifs.mockReturn({
      data: [],
      loading: true,
    });
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar items cuando se cargan imagenes useFetchGifs", () => {
    const gifs = [
      {
        id: "abc",
        url: "https://algo.com",
        title: "Otra cosa",
      },
    ];

    useFetchGifs.mockReturn({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
