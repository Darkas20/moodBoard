import React from 'react';
import styled from 'styled-components/native';

import Icon from './Icon';

import { ICON_SIZE } from 'styles/sizes';
import { Colors, Spacing } from 'styles';
import { MAIN_THEME } from 'styles/colors';
import { scaleFont } from 'styles/mixins';

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const Input = (props: Props) => {
  const { value, onChange, placeholder } = props;

  const handleClear = () => {
    onChange('');
  };

  const renderClearButton = () => {
    return value.length ? (
      <ClearButton onPress={handleClear}>
        <Icon
          name="cancel"
          size={ICON_SIZE[13]}
          color={Colors.TYPO_TEXT_SECONDARY}
        />
      </ClearButton>
    ) : (
      <></>
    );
  };

  return (
    <Container>
      <Icon
        name="search"
        size={ICON_SIZE[13]}
        color={Colors.TYPO_TEXT_SECONDARY}
      />
      <InputField
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={Colors.TYPO_TEXT_SECONDARY}
      />
      {renderClearButton()}
    </Container>
  );
};

const InputField = styled.TextInput`
  color: ${Colors.TYPO_TEXT_PRIMARY};
  flex: 1;
  margin: 0 12px;
  font-size: ${scaleFont(15)}px;
`;

const ClearButton = styled.TouchableOpacity`
  background-color: transparent;
`;

const Container = styled.View`
  background-color: ${MAIN_THEME.BG_SECONDARY};
  padding: ${Spacing.SIZE[6]}px ${Spacing.SIZE[12]}px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export default Input;
