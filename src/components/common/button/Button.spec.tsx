import { describe, it } from 'vitest';
import { render } from 'test-utils';
import Button, { type ButtonProps } from './Button';
import { noop } from '@/helpers';

const renderButton = (
  props: ButtonProps = {
    onClick: noop,
  }
) => render(<Button {...props}>Click me</Button>);

describe('Button', () => {
  it('Renders the Button.vue component', () => {
    const { getByText } = renderButton();
    // Get by text will throw if there is no text, so there is
    // no need to add expect() check
    getByText('Click me');
  });
});
