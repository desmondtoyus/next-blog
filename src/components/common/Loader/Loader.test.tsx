import React from 'react';
import { render } from '@testing-library/react';
import { Loader } from './index';
import { LOADING_GIF_SRC } from '../../../constants';

describe(`<Loader/>`, () => {
  const props = {
    text: `Loading`,
    className: ``,
    loading: true,
    loadingIconURL: LOADING_GIF_SRC,
  };

  let component: HTMLElement;
  let image: HTMLElement;

  beforeEach(() => {
    const { getByText, getByAltText } = render(<Loader {...props} />);

    component = getByText(props.text);
    image = getByAltText(props.text);
  });

  it(`renders the component`, () => {
    expect(component).toBeInTheDocument();
  });

  it(`displays loading Icon & loading text`, () => {
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      `src`,
      `/_next/image?url=${encodeURIComponent(props.loadingIconURL)}&w=256&q=75`,
    );
  });

  it(`returns null when "loading" prop is false`, () => {
    const updatedProps = { ...props, loading: false };
    const { container } = render(<Loader {...updatedProps} />);
    expect(container.firstChild).toBeNull();
  });
});
