import { HelmetProvider } from "react-helmet-async";

export const WebpageTitle = ({ titleName }) => {
  return (
    <HelmetProvider>
      <title>MoMoekji | {titleName}</title>
    </HelmetProvider>
  );
};
