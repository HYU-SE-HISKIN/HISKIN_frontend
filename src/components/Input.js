import React, { useState, forwardRef } from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { Image } from "react-native";

const Container = styled.View`
  flex-direction: column;
  width: 100%;
`;
const Label = styled.Text`
  font-family: "LG EI Text - SemiBold";
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 11px;
  color: ${({ theme }) => theme.grey_0};
`;
const IvoryContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.ivory_1};
  border-radius: 16px;
  border: 1px solid
    ${({ theme, isFocused }) => (isFocused ? theme.black : theme.ivory_1)};
  padding: 24px;
  width: 319px;
  height: 40px;
`;
const StyledTextInput = styled.TextInput.attrs(({ theme, isFocused }) => ({
  placeholderTextColor: theme.grey_0,
}))`
  padding: 14px 11px;
  font-family: "LG EI Text - Regular";
  font-size: 16px;
  border-radius: 16px;
`;

const Input = forwardRef(
  (
    {
      label,
      value,
      onChangeText,
      onSubmitEditing,
      onBlur,
      placeholder,
      isPassword,
      returnKeyType,
      maxLength,
      svgComponent,
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <Container>
        <Label isFocused={isFocused}>{label}</Label>
        <IvoryContainer isFocused={isFocused}>
          {svgComponent}
          <StyledTextInput
            ref={ref}
            isFocused={isFocused}
            value={value}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setIsFocused(false);
              onBlur();
            }}
            placeholder={placeholder}
            secureTextEntry={isPassword}
            returnKeyType={returnKeyType}
            maxLength={maxLength}
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="none"
          />
        </IvoryContainer>
      </Container>
    );
  }
);

Input.defaultProps = {
  onBlur: () => {},
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  isPassword: PropTypes.bool,
  returnKeyType: PropTypes.oneOf(["done", "next"]),
  maxLength: PropTypes.number,
};

export default Input;
