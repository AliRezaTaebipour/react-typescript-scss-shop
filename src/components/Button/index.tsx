import { ButtonProps } from "../../types/Form";

function Button(props: ButtonProps): JSX.Element {
  return <button {...props} />;
}

export default Button;
