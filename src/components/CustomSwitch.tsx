import React, { useContext } from 'react'
import { useState } from 'react'
import { Switch, Platform } from 'react-native'
import { ThemeContext } from '../context/themeContext/ThemeContext'

interface Props {
  isOn: boolean,
  onChange: (isEnabled: boolean) => void
}

const CustomSwitch = ({isOn, onChange} : Props) => {
  const {theme: { colors: { primary } }} = useContext(ThemeContext)
  const [isEnabled, setIsEnabled] = useState(isOn)
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  }
  return (
    <Switch
      trackColor={{ false: "#D9D9DB", true: primary }}
      thumbColor={Platform.OS === 'android' ? primary : ''}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  )
}

export default CustomSwitch
