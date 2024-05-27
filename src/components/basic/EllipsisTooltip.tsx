import Zoom from "@mui/material/Zoom";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import { EllipsisTooltipProps } from "@/components/basic/types";

function EllipsisTooltip({ text, width }: EllipsisTooltipProps) {
  return (
    <Tooltip TransitionComponent={Zoom} title={text} placement="top-start" arrow>
      <div style={{ width: width, whiteSpace: "nowrap" }}>
        <Box
          component="div"
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          {text}
        </Box>
      </div>
    </Tooltip>
  );
}

export default EllipsisTooltip;
