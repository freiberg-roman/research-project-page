import { withPigment, extendTheme } from '@pigment-css/nextjs-plugin';

const theme = extendTheme({
});

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default withPigment(nextConfig, { theme });
