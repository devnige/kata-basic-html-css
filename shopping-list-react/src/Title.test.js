import { toHaveTextContent } from "@testing-library/jest-dom/dist/matchers";
import { render } from "@testing-library/react";
import { Title } from "./Title";

test("renders an h1", () => {
    const { getByText } = render(<Title />);
    const h1 = getByText(/My Shopping List/);
    expect(h1).toHaveTextContent("My Shopping List");
});