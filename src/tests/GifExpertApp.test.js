import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en <GifExpertApp />", () => {
  const category = "One Punch";
  let wrapper = shallow(<GifExpertApp />);

  test("Debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar una lista de categories", () => {
    const categories = ["One Punch", "Dragon Ball"];
    const wrapper = shallow(<GifExpertApp defaultCategory={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
