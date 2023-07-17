import { render, screen } from "@testing-library/react";
import Teams from ".";

describe("Teams tests", ()=>{
    test("greetings from teams page renders", ()=>{
        //arrange
        render(<Teams/>);

        //act

        //assert
        const helloFromTeamsElement = screen.getByText("Hello from teams page!!");
        expect(helloFromTeamsElement).toBeInTheDocument();
    });
});