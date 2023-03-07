import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import styled from "styled-components";

export default function Snackbar({ open, text, handleClose, variant }) {
  const variants = {
    success: "green",
    error: "red",
    warning: "yellow",
    info: "blue",
  };

  const icons = {
    success: CheckCircleIcon,
    error: ExclamationCircleIcon,
    warning: ExclamationTriangleIcon,
    info: InformationCircleIcon,
  };

  const Icon = icons[variant];

  const StyledIcon = styled(Icon)`
    height: 1.25rem;
    width: 1.25rem;
  `;

  return (
    <SnackbarContainer className={`${variants[variant]}`}>
      <IconContainer aria-hidden="true">
        <StyledIcon />
      </IconContainer>

      <Text>{text}</Text>
      <CloseButton onClick={handleClose}>
        <XMarkIcon color="#fff" height={18} width={18} />
      </CloseButton>
    </SnackbarContainer>
  );
}

const SnackbarContainer = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 100000000;
  display: flex;
  max-width: 500px;
  width: 100%;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.75rem 0.875rem;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #fff;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

  &.green {
    background-color: #10b981;
  }

  &.red {
    background-color: #ef4444;
  }

  &.yellow {
    background-color: #f59e0b;
  }

  &.blue {
    background-color: #3b82f6;
  }
`;

const IconContainer = styled.span`
  margin-right: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.span`
  text-overflow: ellipsis;
  width: 100%;
`;

const CloseButton = styled.button`
  color: #fff;
  background-color: transparent;
  border: none;
  box-shadow: none;
  cursor: pointer;
`;
