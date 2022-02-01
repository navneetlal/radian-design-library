import React, { useEffect, useState } from "react";

import MuiInputBase from '@mui/material/InputBase';
import MuiInputLabel from '@mui/material/InputLabel';
import MuiGrid from '@mui/material/Grid';
import MuiBox from '@mui/material/Box';
import NoSsr from '@mui/material/NoSsr';

import { useTheme } from "@mui/material/styles";
import Chips from "../Chip/Chip";

export interface IBootstrapInputProps {
  alert: boolean;
  width: number;
  placeholder: string;
  [key: string]: any;
}

const BootstrapInput = React.forwardRef<any, IBootstrapInputProps>(
  ({ alert, width, classes, placeholder, disabled, ...otherProps }, ref) => {
    const theme = useTheme();
    return (
      <MuiInputBase
        sx={{
          "label + &": {
            marginTop: theme.spacing(1),
          },
          flexGrow: 1,
          WebkitBoxFlex: 1,
          paddingBottom : '0px !important',
            

          "& .MuiInputBase-input": {
            order: "3px",
            padding: 0,
            ...theme.typography.body2,
            borderColor: alert
              ? theme.palette?.support?.error?.main
              : theme.palette.grey[100],
            alignSelf: "flex-end",
            height: '32px',
            color: `${theme.palette.common.black} !important`,
            minWidth: '50px',
          },
        }}
        inputRef={ref}
        placeholder={placeholder}
        disabled={disabled}
        {...otherProps}
      />
    );
  }
);

export interface IMultiSelectProps {
  label?: string;
  placeholder?: string;
  onChange?: any;
  width?: number;
  alert?: boolean;
  options?: string[];
  selectedOptions?: any;
  disabled?: boolean;
  [key: string]: any;
}

const tempFunc = () => {
  console.log();
}

export default function MultiSelect({
  label,
  placeholder,
  onChange = tempFunc,
  width,
  alert,
  options,
  disabled,
}: IMultiSelectProps) {
  const [value, setValue] = useState("");
  const [option, setOption] = useState(new Set(options || []));
  useEffect(() => {
    if (options) setOption(new Set(options));
  }, [options]);

  useEffect(() => {
    onChange([...option]);
  }, [option]);

  const handleAdd = () => {
    option.add(value);
    setOption(new Set(option));
    setValue("");
  };
  const handleDelete = (item: any) => () => {
    option.delete(item);
    setOption(new Set(option));
  };
  const theme = useTheme();

  return (
    <NoSsr>
      <div>
        <div>
          <MuiInputLabel
          disabled = {disabled}
            sx={{
              ...theme.typography.h6,
              color: "#1A1A1A",
            }}
          >
            {label}
          </MuiInputLabel>
          <MuiBox
            sx={{
              "label + &": {
                marginTop: theme.spacing(1),
                marginBottom: theme.spacing(1),
              },
              display: "flex",
              flexWrap: "wrap",
              borderRadius: '4px',
              position: "relative",
              ...theme.typography.body2,
              border: `1px solid ${theme.palette.grey[100]}`,
              backgroundColor: "#ffffff",
              borderColor: alert
                ? theme.palette?.support?.error?.main
                : theme.palette.grey[100],
              alignSelf: "flex-end",
              minHeight: '32px', 
              overflow: "hidden",
              padding: "4px 12px",
              paddingRight: 0,
              width: width ? `${width - 24}px` : `${200 - 24}px`,
              "&:focus-within": {
                borderColor: theme.palette.primary.main,
              },
            }}
          >
            <MuiGrid container spacing={1}>
              {[...option].map((item, index) => (
                <MuiGrid item key={index}>
                  <Chips
                    label={item}
                    selected
                    fromMultiSelect
                    size="small"
                    onDelete={handleDelete(item)}
                  />
                </MuiGrid>
              ))}
              <BootstrapInput
                placeholder={placeholder}
                width={width}
                style={{ flexGrow: '1px', paddingBottom: '4px' }}
                value={value}
                alert={alert}
                // onChange={(e: any) => setValue(e.target.value)}
                onChange={(e: any) => {
                  setValue(e.target.value);
                }}
                onKeyPress={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
                  if (!e.shiftKey && e.key === "Enter") {
                    e.preventDefault();
                    handleAdd();
                  }
                }}
                disabled={disabled}
              />
            </MuiGrid>
          </MuiBox>
        </div>
      </div>
    </NoSsr>
  );
}
