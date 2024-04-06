import React from "react";
import theme from "../../../theme";
import { View } from "react-native";

const Spacing = ({width = theme.spacing}) => {
    return (
        <View style={{width: width}} />
    )
}

export default Spacing;