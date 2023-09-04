export interface IConfirmationModalProps {
  open: boolean;
  confirmationMessage: string;
  onDelete: () => void;
  onCancel: () => void;
}
