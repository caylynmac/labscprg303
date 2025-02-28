import React, { useState } from "react";
import { View, Button } from "react-native";
import CallAPI from "../components/callAPI";

const Lab5 = () => {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title={showComponent ? "Hide API Data" : "Show API Data"}
        onPress={() => setShowComponent((prev) => !prev)}
      />
      {showComponent && <CallAPI />}
    </View>
  );
};

export default Lab5;
