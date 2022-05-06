import { FC } from "react";
import styled from "@emotion/styled";

interface Props {
  className?: string;
}

const App: FC<Props> = ({ className }) => {
  return (
    <h1 className={className}>Welcome aboard</h1>
  );
};

const Styled = styled(App)`
  color: purple;
`;

export default Styled;
