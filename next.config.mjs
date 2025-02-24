import { withPigment, extendTheme } from '@pigment-css/nextjs-plugin';

const theme = extendTheme({
});

const isProd = process.env.NODE_ENV === "production"

const nextConfig = {
  basePath: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : "",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default withPigment(nextConfig, { theme });
