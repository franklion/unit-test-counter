/*
 * setupTest file
 * create-react-app default config rootDir: src/setupTest.js
 */
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new Adapter() });