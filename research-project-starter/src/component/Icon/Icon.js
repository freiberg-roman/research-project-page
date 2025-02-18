import { styled } from '@pigment-css/react';
import { Mail, Activity ,Twitter, GitHub, Layers, Cpu, Coffee, Archive } from "react-feather";

const icons = {
  mail: Mail,
  twitter: Twitter,
  github: GitHub,
  layers: Layers,
  activity: Activity,
  cpu: Cpu,
  coffee: Coffee,
  archive: Archive,
};

const Icon = ({ id, size, strokeWidth = 1, ...delegated }) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper
      style={{
        "--size": size + "px",
        "--stroke-width": strokeWidth + "px",
      }}
      {...delegated}
    >
      <Component color="black" size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: var(--size);
  height: var(--size);

  & > svg {
    display: block;
    stroke-width: var(--stroke-width);
  }
`;

export default Icon;
