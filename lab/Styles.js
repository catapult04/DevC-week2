import { StyleSheet } from "react-native";

export const HeadStyles = StyleSheet.create({
  headContainer: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f3f6fa",
  },
  emptyView: {
    width: 25+10,
  },
  instagram: {
    flex: 1,
    height: 50,
  },
  inboxIcon: {
    marginRight: 10,
  }
});

export const PostStyles = StyleSheet.create({
  avatarContainer: {
    borderTopWidth: 1,
    borderTopColor: "lightgrey",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50/2,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 10,
  },

  image: {
    flex: 1,
    width: null,
    height: 200,
    resizeMode: 'contain',

  },

  actionIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingTop: 10,
    zIndex: 1,
  },
  actionIcon: {
    marginLeft: 10,
  },
  likeCountContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    zIndex: 1,
  },
  likeCount: {
    fontSize: 15,
    fontWeight: "normal",
    marginLeft: 10,
  },
});