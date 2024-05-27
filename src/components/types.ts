import { CustomerType } from "@/api/types";

export type DialogProps = {
  open: boolean;
  onClose?: (value?: boolean) => void;
  setOpen: (value: ((prevState: boolean) => boolean) | boolean) => void;
  handleReset: () => void;
  handleDelete: () => void;
};

export type DeleteDialogProps = DialogProps;

export type CustomerActions = {
  id?: string;
  handleEdit: (id: string) => () => void;
  handleDelete: (id: string) => () => void;
};

export type CustomerEditActions = {
  updateCustomer: (customer: CustomerType) => void;
  customer: CustomerType;
};

export type EditDialogProps = DialogProps & CustomerEditActions;
