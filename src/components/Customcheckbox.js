import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Customcheckbox = ({ label, initialValue = false, onChange }) => {
  const [checked, setChecked] = useState(initialValue);

  const toggleCheckbox = () => {
    const newValue = !checked;
    setChecked(newValue);
    onChange(newValue);
  };

  return (
    <TouchableOpacity onPress={toggleCheckbox}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View
          style={{
            width: 24,
            height: 24,
            borderRadius: 12,
            borderWidth: 2,
            marginRight: 8,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: checked ? 'green' : 'gray',
          }}>
          {checked && (
            <View
              style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                backgroundColor: 'green',
              }}
            />
          )}
        </View>
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Customcheckbox;
