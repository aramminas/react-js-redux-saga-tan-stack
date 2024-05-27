import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import { Gender } from "@/components/customers/types";
import { RadioGenderType } from "@/components/basic/types";

function RadioGender({ onChange, error, gender }: RadioGenderType) {
  return (
    <FormControl error={!!error}>
      <FormLabel id="gender">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="gender"
        name="gender"
        onChange={onChange}
        defaultValue={gender || ""}
      >
        <FormControlLabel value="female" control={<Radio />} label={Gender.FEMALE} />
        <FormControlLabel value="male" control={<Radio />} label={Gender.MALE} />
        <FormControlLabel value="other" control={<Radio />} label={Gender.OTHER} />
        <FormHelperText>{error}</FormHelperText>
      </RadioGroup>
    </FormControl>
  );
}

export default RadioGender;
