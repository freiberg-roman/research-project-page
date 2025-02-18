import { withPigment, extendTheme } from '@pigment-css/nextjs-plugin';

// To learn more about theming, visit https://github.com/mui/pigment-css/blob/master/README.md#theming
const theme = extendTheme({
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withPigment(nextConfig, { theme });
