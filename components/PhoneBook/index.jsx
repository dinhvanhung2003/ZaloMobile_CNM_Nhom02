import React, { useState } from 'react';
import { View, Text } from 'react-native';
import NavigationBar from '../../components/MessageScreen/NavigationBar';
import tw from 'twrnc';
import useTabNavigation from '../../hooks/useTabNavigation'; 

const PhoneBook = () => {
  const [activeTab, setActiveTab] = useState('Contacts');
  const handleTabPress = useTabNavigation(); 

  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`flex-1 justify-center items-center`}>
        <Text style={tw`text-xl`}>Welcome to the PhoneBook Screen!</Text>
      </View>
      <View style={tw`absolute bottom-0 w-full`}>
        <NavigationBar activeTab={activeTab} onTabPress={handleTabPress} />
      </View>
    </View>
  );
};

export default PhoneBook;
