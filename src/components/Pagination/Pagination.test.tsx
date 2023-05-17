import React from "react";
import { render, fireEvent } from "@testing-library/react";

import {
  // FaAngleDoubleLeft,
  // FaAngleDoubleRight,
  FaAngleLeft
  // FaAngleRight
} from "react-icons/fa";

import Pagination from ".";

describe("Pagination component", () => {
  const onPageChangeMock = jest.fn();

  afterEach(() => {
    onPageChangeMock.mockClear();
  });

  it("should render page numbers correctly when totalPages <= 5", () => {
    const { getByText } = render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={onPageChangeMock}
      />
    );

    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
    expect(getByText("3")).toBeInTheDocument();
    expect(getByText("4")).toBeInTheDocument();
    expect(getByText("5")).toBeInTheDocument();
  });

  it("should render page numbers correctly when totalPages > 5 and currentPage <= 2", () => {
    const { getByText } = render(
      <Pagination
        currentPage={2}
        totalPages={10}
        onPageChange={onPageChangeMock}
      />
    );

    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
    expect(getByText("3")).toBeInTheDocument();
    expect(getByText("4")).toBeInTheDocument();
    expect(getByText("5")).toBeInTheDocument();
  });

  it("should render page numbers correctly when totalPages > 5 and currentPage >= totalPages - 1", () => {
    const { getByText } = render(
      <Pagination
        currentPage={9}
        totalPages={10}
        onPageChange={onPageChangeMock}
      />
    );

    expect(getByText("6")).toBeInTheDocument();
    expect(getByText("7")).toBeInTheDocument();
    expect(getByText("8")).toBeInTheDocument();
    expect(getByText("9")).toBeInTheDocument();
    expect(getByText("10")).toBeInTheDocument();
  });

  it("should render page numbers correctly when totalPages > 5 and currentPage is in the middle", () => {
    const { getByText } = render(
      <Pagination
        currentPage={5}
        totalPages={10}
        onPageChange={onPageChangeMock}
      />
    );

    expect(getByText("3")).toBeInTheDocument();
    expect(getByText("4")).toBeInTheDocument();
    expect(getByText("5")).toBeInTheDocument();
    expect(getByText("6")).toBeInTheDocument();
    expect(getByText("7")).toBeInTheDocument();
  });

  it("should call onPageChange with the correct page number when a page button is clicked", () => {
    const { getByText } = render(
      <Pagination
        currentPage={3}
        totalPages={10}
        onPageChange={onPageChangeMock}
      />
    );

    fireEvent.click(getByText("5"));
    expect(onPageChangeMock).toHaveBeenCalledWith(5);

    fireEvent.click(getByText("1"));
    expect(onPageChangeMock).toHaveBeenCalledWith(1);

    fireEvent.click(getByText("3"));
    expect(onPageChangeMock).toHaveBeenCalledWith(3);
  });

  it("should call onPageChange with the correct page number when previous and next buttons are clicked", () => {
    const { getByTitle } = render(
      <Pagination
        currentPage={3}
        totalPages={10}
        onPageChange={onPageChangeMock}
      />
    );

    fireEvent.click(getByTitle("Página Anterior"));
    expect(onPageChangeMock).toHaveBeenCalledWith(2);

    fireEvent.click(getByTitle("Próxima Página"));
    expect(onPageChangeMock).toHaveBeenCalledWith(4);
  });

  it("should not render previous button when currentPage is 1", () => {
    const { queryByTestId } = render(
      <Pagination
        currentPage={1}
        totalPages={10}
        onPageChange={onPageChangeMock}
      />
    );

    expect(queryByTestId("prev-button")).toBeNull();
  });

  it("should not render next button when currentPage is equal to totalPages", () => {
    const { queryByTestId } = render(
      <Pagination
        currentPage={10}
        totalPages={10}
        onPageChange={onPageChangeMock}
      />
    );

    expect(queryByTestId("next-button")).toBeNull();
  });

  it("should call onPageChange with the correct page number when double left and double right buttons are clicked", () => {
    const { getByTitle } = render(
      <Pagination
        currentPage={3}
        totalPages={10}
        onPageChange={onPageChangeMock}
      />
    );

    fireEvent.click(getByTitle("Primeira Página"));
    expect(onPageChangeMock).toHaveBeenCalledWith(1);

    fireEvent.click(getByTitle("Última Página"));
    expect(onPageChangeMock).toHaveBeenCalledWith(10);
  });
});
