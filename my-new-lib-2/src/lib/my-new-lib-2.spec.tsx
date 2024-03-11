import { render } from '@testing-library/react';

import MyNewLib2 from './my-new-lib-2';

describe('MyNewLib2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyNewLib2 />);
    expect(baseElement).toBeTruthy();
  });
});
