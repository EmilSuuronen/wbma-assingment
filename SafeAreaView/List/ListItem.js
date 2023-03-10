import {Image, Text, TouchableOpacity, View} from "react-native";
import PropTypes from "prop-types";

const ListItem = ({singleMedia}) => {
  const item = singleMedia;
    return (
      <TouchableOpacity>
        <View>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: item.thumbnails.w160}}
          />
        </View>
        <View>
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
}

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

export default ListItem;

