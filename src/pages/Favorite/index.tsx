import React, { useState } from "react";

import { View, ScrollView } from "react-native";
import AsyncStorange from "@react-native-community/async-storage";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";

import styles from "./styles";
import { useFocusEffect } from "@react-navigation/native";

function Favorite() {
  const [favorites, setFavorites] = useState([]);

  function loadFavorites() {
    AsyncStorange.getItem("favorites").then((response) => {
      if (response) {
        const favoritedTeacher = JSON.parse(response);

        setFavorites(favoritedTeacher);

        console.log("Favoritos: ", favoritedTeacher);
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        {favorites.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} favorited />;
        })}
      </ScrollView>
    </View>
  );
}

export default Favorite;
