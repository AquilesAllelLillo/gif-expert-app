import React from "react";
import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react-hooks";
import { shallow } from "enzyme";
import useFetchGifs from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en el hook useFetchGifs", () => {
  test("Debe retornar el estado inicial", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("One Punch")
    );
    const { data, loading } = result.current;
    // const { data: images, loading } = useFetchGifs(category);

    await waitForNextUpdate();
    // console.log(data, loading);

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("Debe retornar un arreglo de imgs y el loading en False", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("One Punch")
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    // const { data: images, loading } = useFetchGifs(category);

    // console.log(data, loading);

    expect(data.length).toBe(20);
    expect(loading).toBe(false);
  });
});
