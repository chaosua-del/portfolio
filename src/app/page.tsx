import { Box } from "@chakra-ui/react";

import { DecoratedLayout } from "@/layouts";
import {
  Blog,
  Feedback,
  Intro,
  Pricing,
  Questions,
  Solutions
} from "@/modules/Home/widgets";

const page = () => {
  return (
    <DecoratedLayout>
      <Box>
        <Intro />
        <Solutions />
        <Feedback />
        <Pricing />
        <Questions />
        <Blog />
      </Box>
    </DecoratedLayout>
  );
};

export default page;
