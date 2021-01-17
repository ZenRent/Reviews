import React from 'react';
import { configure, shallow } from "enzyme";
import renderer from 'react-test-renderer';
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import App from './components/App';
import Modal from './components/Modal';
import ReviewEntry from './components/ReviewList';
import DataDisplay from './components/DataDisplay';


describe('Fundamental Tests', () => {
  it('Jester is running.', () => {
    expect(true).toEqual(true);
  });

  it("renders App without crashing", () => {
    shallow(<App />);
  });

  it("renders Modal without crashing", () => {
    shallow(<Modal />);
  });
  it("renders DataDisplay without crashing", () => {
    shallow(<DataDisplay />);
  });
});

describe('Advanced, Get Snapshot', () => {
  it('Shallow rendering', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
