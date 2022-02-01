import * as React from "react";
import { useAutocomplete } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

import Chip from "../Chip";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import { useTheme } from "@mui/material/styles";
import GlobalStyles from "@mui/material/GlobalStyles";
const Root = styled("div")(
  () => `
  color: 'rgba(0,0,0,.85)';
  font-size: 14px;
`
);

const InputWrapper = styled("div")(
  () => `
  width: 300px;
  border: 1px solid #C7C7C7;
  background-color: #fff;
  border-radius: 4px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: #40a9ff;
  }

  &.focused {
    border-color: #396de7;
    
  }

  & input {
    background-color: #fff;
    color: 'rgba(0,0,0,.85)'
    height: 32px;
    box-sizing: border-box;
    padding: 4px 12px;
    overflow : hidden;
    width: 0;
    min-width: 32px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`
);

const Listbox = styled("ul")(
  ({ theme }) => `
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: #fff;
  overflow: auto;
  max-height: 200px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;
  & p {
    padding: 8px 12px;
    order :2;
    display: flex;
    cursor: pointer;
    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
    

    
  }
  
  
  & p[aria-selected='true'] {
    & svg {
      color: #1890ff;
    }
  }
  & li:hover {
    background-color : ${theme.palette.primary.contrastText}
    
    
  }
  & p[data-focus='true'] {
    & svg {
      color: ${theme.palette.common.black};
    },
  }
  

  
`
);

export interface ISelectChipsProps {
  label?: string;
  placeholder?: string;
  onChange?: any;
  width?: number;
  alert?: boolean;
  required?: boolean;
  options?: {
    id: number;
    name: string;
  }[];
  selectedOptions?: any;
  [key: string]: any;
}

const inputGlobalStyles = (
  <GlobalStyles
    styles={{
      scrollbarColor: "#264ca4 #f5f8ff !important",
      "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
        width: "6px",
        height: "6px",
        position: "absolute",
      },
      "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
        borderRadius: "4px",
        backgroundColor: "#264ca4",
        minWidth: "6px",
        minHeight: "6px",
      },
      "&::-webkit-scrollbar-track": {
        background: "#f5f8ff",
        position: "absolute",
      },
      "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
        background: "#12285a",
      },
    }}
  />
);

export default function MultipleSelectChip({
  label,
  placeholder,
  onChange,
  width,
  alert,
  options,
  required,
  selectedOptions,
  ...otherProps
}: ISelectChipsProps) {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "customized-hook-demo",
    defaultValue: selectedOptions,
    multiple: true,
    options: options!,
    onChange: (_, v) => {
      if (onChange) onChange(v);
    },
    getOptionLabel: (option) => option.name,
    isOptionEqualToValue: (t, v) => t.name === v.name,
  });
  const theme = useTheme();
  return (
    <Root>
      {inputGlobalStyles}
      <div {...getRootProps()}>
        <InputLabel
          {...getInputLabelProps()}
          sx={{
            ...theme.typography.h6,
            color: theme.palette.common.black,
            "&>span": {
              color: theme.palette.error.main,
            },
          }}
        >
          {label}
        </InputLabel>
        <InputWrapper ref={setAnchorEl} className={focused ? "focused" : ""}>
          {value.map((option: any, index: number) => (
            <Chip
              label={option.name}
              {...getTagProps({ index })}
              size="small"
              selected
              fromSelectChip
            />
          ))}
          <input
            {...getInputProps()}
            placeholder={placeholder}
            required={required}
            style={{
              height: "40px",
              backgroundImage: `url(${"https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-down-arrows-those-icons-fill-those-icons-6.png"})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "95% 50%",
              backgroundSize: "8px",
            }}
            {...otherProps}
          />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>
              <Typography
                sx={{
                  ...theme.typography.body1,
                }}
                {...getOptionProps({ option, index })}
              >
                {option.name} <CheckIcon fontSize="small" />
              </Typography>
            </li>
          ))}
        </Listbox>
      ) : null}
    </Root>
  );
}
