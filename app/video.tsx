import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useVideoPlayer, VideoView } from "expo-video";

const videoSource =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const Video = () => {
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });

  return (
    <View style={[styles.contentContainer]}>
      <VideoView style={styles.video} player={player} allowsFullscreen />
      {/* <View style={{ height: 29 }}></View> */}
      {/* <Text style={{ color: "white" }}>TEST</Text> */}
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  video: {
    flex: 1,
    width: "100%",
  },
});
