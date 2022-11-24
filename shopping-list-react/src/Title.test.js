import { toHaveTextContent } from "@testing-library/jest-dom/dist/matchers";
import { render } from "@testing-library/react";
import { Title } from "./Title";

test("renders an h1", () => {
    const name = 'Josephinechong';
    const { getByText } = render(<Title name={ name }/>);
    const h1 = getByText(`${name}'s Shopping List`);
    expect(h1).toHaveTextContent("Josephinechong's Shopping List");
});