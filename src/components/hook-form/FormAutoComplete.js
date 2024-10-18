import PropTypes from 'prop-types'
import { useFormContext, Controller } from 'react-hook-form'
import { Autocomplete, TextField } from '@mui/material'

FormAutoComplete.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.node
}

const FormAutoComplete = ({ name, label, helperText, ...other }) => {
  const { control, setValue } = useFormContext()

  return (
    <Controller name={name} control={control} render={({ field, fieldState: { error } }) => {
      <Autocomplete
        {...field}
        onChange={(event, newValue) => setValue(name, newValue, { shouldValidate: true })}
        renderInput={(params) => (
          <TextField
            label={label}
            error={!!error}
            helperText={error ? error?.message : helperText}
            {...params}
          />
        )}
        {...other}
      />
    }} />
  )
}

export default FormAutoComplete