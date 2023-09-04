import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import CustomButton from '..';

describe('CustomButton', () => {
  let customButton: HTMLElement;
  const handleButtonFn = vi.fn();

  beforeEach(async () => {
    render(
      <CustomButton
        className="create-button"
        handleButton={handleButtonFn}
        type="primary"
        title="Create Project"
      />
    );

    customButton = await screen.getByText(/Create Project/i);
  });

  it('should render', async () => {
    expect(customButton).toBeInTheDocument();
  });

  it('should triggers onClick', async () => {
    fireEvent.click(customButton);
    expect(handleButtonFn).toHaveBeenCalled();
  });
});
