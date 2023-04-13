import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";

import { ParamListBase } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { useTranslate } from "./Translate.hooks";
import { Locale } from "../types";
import { Theme } from "../Theme";

interface TranslateProps extends BottomTabScreenProps<ParamListBase> {
  locale: Locale;
  theme: Theme;
}

export default function Translate({
  navigation,
  locale,
  theme,
}: TranslateProps) {
  const {
    changeText,
    translate,
    reTranslate,
    selecNativeLang,
    serverLanguages,
    setNativeLang,
    nativeLang,
    setSelectNativeLang,
    setLearnLang,
    selecLearnLang,
    setSelectLearnLang,
    learnLang,
  } = useTranslate();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.paper,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 30,
      }}
    >
      <TextInput
        onChangeText={changeText}
        style={{
          width: "100%",
          borderWidth: 1,
          borderColor: theme.text,
          padding: 8,
          fontSize: 16,
        }}
      />
      <Text style={styles.text}>{translate}</Text>
      <Text style={styles.reTranslate}>{reTranslate}</Text>
      <Modal
        style={styles.modalContainer}
        animationType="slide"
        transparent
        visible={selecNativeLang}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>{locale.select_native}</Text>
          <ScrollView style={styles.langItems}>
            {serverLanguages.map((item) => (
              <Pressable
                key={item.code}
                style={[
                  styles.langItem,
                  nativeLang === item.code ? styles.langItemActive : {},
                ]}
                onPress={() => {
                  setNativeLang(item.code);
                  setTimeout(() => {
                    setSelectNativeLang(false);
                  }, 500);
                }}
              >
                <Text style={styles.langText}>{item.name}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </Modal>
      <Modal
        style={styles.modalContainer}
        animationType="slide"
        transparent
        visible={selecLearnLang}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>{locale.select_learn}</Text>
          <ScrollView style={styles.langItems}>
            {serverLanguages.map((item) => (
              <Pressable
                key={item.code}
                style={[
                  styles.langItem,
                  learnLang === item.code ? styles.langItemActive : {},
                ]}
                onPress={() => {
                  setLearnLang(item.code);
                  setTimeout(() => {
                    setSelectLearnLang(false);
                  }, 500);
                }}
              >
                <Text style={styles.langText}>{item.name}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    margin: 10,
  },
  reTranslate: {
    fontSize: 16,
    margin: 10,
    fontWeight: "700",
  },
  modalContainer: {
    position: "relative",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  langItems: {
    position: "relative",
    minHeight: 500,
    width: "100%",
    marginTop: 12,
  },
  langItem: {
    borderRadius: 2,
    padding: 20,
  },
  langItemActive: {
    backgroundColor: "gray",
  },
  langText: {
    color: "black",
    textAlign: "center",
    fontSize: 18,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
