import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import ConfirmationModal from '..';

import { messages } from '../../../constants/messages';

describe('ConfirmationModal', () => {
  const onDeleteMock = vi.fn();
  const onCancelMock = vi.fn();

  beforeEach(() => {
    render(
      <ConfirmationModal
        open={true}
        confirmationMessage={messages.deleteConfirmation}
        onCancel={onCancelMock}
        onDelete={onDeleteMock}
      />
    );
  });

  it('should render', async () => {
    const linkElement = await screen.findByText(messages.deleteConfirmation);
    expect(linkElement).toHaveTextContent(messages.deleteConfirmation);
  });

  describe('Cancel Button', () => {
    let cancelButton: HTMLElement;

    beforeEach(async () => {
      cancelButton = await screen.getByText(/Cancel/i);
    });

    it('should render', async () => {
      expect(cancelButton).toBeInTheDocument();
    });

    it('should triggers onClick', async () => {
      fireEvent.click(cancelButton);
      expect(onCancelMock).toHaveBeenCalled();
    });
  });

  describe('Delete Button', () => {
    let deleteButton: HTMLElement;

    beforeEach(async () => {
      deleteButton = await screen.getByText('Delete');
    });

    it('should render', async () => {
      expect(deleteButton).toBeInTheDocument();
    });

    it('should triggers onClick', async () => {
      fireEvent.click(deleteButton);
      expect(onCancelMock).toHaveBeenCalled();
    });
  });
});
