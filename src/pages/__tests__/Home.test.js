import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Home from '../Home';
import MovieBox from '../../components/MovieBox';
const expect = global.expect;

configure({ adapter: new Adapter() });

describe("Home", () => {
  it("renders correctly", () => {
    shallow(<Home />);
  });

  it("includes an h1", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find("h1").length).toEqual(1);
  });
  
  it("includes an movies-list", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find("div .movies-list").length).toEqual(1);
  });

});



