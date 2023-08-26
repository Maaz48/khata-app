import React, { useState } from "react";
import { Menu, TextInput, List } from "react-native-paper";
import InputComp from "./inputComp";
import IconButtonComp from "./iconButtonComp";
import { View } from "react-native";

const DropDownComp = ({
  label,
  items,
  onSelect,
  style,
  containerStyle,
  listItemWidth,
}) => {
  const [visible, setVisible] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [filteredItems, setFilteredItems] = useState(items);

  const showMenu = () => setVisible(true);
  const hideMenu = () => setVisible(false);

  const handleSearch = (text) => {
    setQuery(text);
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    hideMenu();
    onSelect(item); // Call the onSelect prop with the selected item
  };
  return (
    <View style={containerStyle}>
      <Menu
        visible={visible}
        onDismiss={hideMenu}
        anchor={
          <InputComp
            style={style}
            placeholder={label}
            value={selectedItem ? selectedItem.name : ""}
            onFocus={showMenu}
            itemOnRight={
              <IconButtonComp iconName="menu-down" onIconPress={showMenu} />
            }
          />
        }
      >
        <TextInput
          label="Search"
          value={query}
          onChangeText={handleSearch}
          right={<TextInput.Icon name="magnify" />}
        />
        {/* <List.Section> */}
        {filteredItems.map((item) => (
          <List.Item
            key={item.id}
            title={item.name}
            titleStyle={{ textAlign: "right" }}
            style={listItemWidth}
            onPress={() => handleSelectItem(item)}
          />
        ))}
        {/* </List.Section> */}
      </Menu>
    </View>
  );
};

export default DropDownComp;
