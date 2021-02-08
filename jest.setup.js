/* eslint-disable react/prop-types */
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import mockedApp from '@__mocks__/config/app';

jest.mock('next/dynamic', () => () => (props) => (
  <div {...props}>DynamicComponent</div>
));

jest.mock('@config/app', () => mockedApp);

jest.mock('next/link', () => {
  return ({ children, ...rest }) => {
    return <a {...rest}>{children}</a>;
  };
});

Enzyme.configure({ adapter: new Adapter() });
