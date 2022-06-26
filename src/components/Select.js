import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {useController} from 'react-hook-form';

const Select = ({label, data, control, name}) => {
  const {field} = useController({
    control,
    defaultValue: '',
    name,
  });

  return (
    <View style={styles.formRow}>
      <Text style={styles.formLabel}>{label}</Text>
      <SelectDropdown
        data={data}
        onSelect={(selectedItem, index) => field.onChange(selectedItem)}
        buttonTextAfterSelection={(selectedItem, index) => selectedItem}
        rowTextForSelection={(item, index) => item}
        defaultButtonText="Select"
        buttonStyle={{
          backgroundColor: '#fff',
          borderRadius: 10,
          width: '100%',
        }}
        buttonTextStyle={{
          color: '#999',
          fontSize: 14,
          textAlign: 'left',
        }}
        dropdownStyle={{
          backgroundColor: '#fff',
          borderRadius: 10,
        }}
      />
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  formRow: {
    paddingBottom: 15,
    paddingRight: 20,
    width: '50%',
  },
  formLabel: {
    fontSize: 14,
    color: 'white',
    marginBottom: 5,
  },
});
