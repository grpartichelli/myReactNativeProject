"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Count_1 = require("./Count");
function App() {
    return (<react_native_1.View style={styles.container}>
      <Count_1.Count count={0}/>
    </react_native_1.View>);
}
exports["default"] = App;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
