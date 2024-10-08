import ButtonAppBar from "@/components/ButtonAppBar";
import ToggleColorMode from "@/components/ToggleColorMode";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <ButtonAppBar />
      <ToggleColorMode />
      <Button variant="text">Button</Button>
      <TextField label="Text Field" variant="outlined" />
      <FormControlLabel control={<Checkbox />} label="Checkbox" />
      <Typography variant="h6">Typography</Typography>
    </div>
  );
}
