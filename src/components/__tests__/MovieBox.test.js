import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import MovieBox from '../MovieBox';

configure({ adapter: new Adapter() });

describe("MovieBox", () => {
    it("renders correctly", () => {
      shallow(<MovieBox />);
    });
});
