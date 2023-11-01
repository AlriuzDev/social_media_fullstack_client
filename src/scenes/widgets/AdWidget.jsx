import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.jpeg"
      />
      <FlexBetween>
        <Typography color={main}>FakeAdvertising</Typography>
        <Typography color={medium}>FakeAdvertisingfakeURL.fake</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        You path to an increased portfolio of fake APPS.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdWidget;
