import { render } from '@testing-library/react';

import ConfirmationModal from '..';
import { messages } from '../../../constants/messages';

describe('ConfirmationModal', () => {
  test('Should render components', async () => {
    const modal = render(
      <ConfirmationModal
        open={true}
        confirmationMessage={messages.deleteConfirmation}
        onCancel={jest.fn}
        onDelete={jest.fn}
      />
    );

    const testsss = await modal.findByText(messages.deleteConfirmation);
    expect(testsss.textContent).toBe(messages.deleteConfirmation);
  });
});
