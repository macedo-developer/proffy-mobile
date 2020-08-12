import React from "react";

import { View, Image, Text } from "react-native";

import styles from "./style";
import { RectButton } from "react-native-gesture-handler";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

const TeacherItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              "https://avatars0.githubusercontent.com/u/51935321?s=460&u=96e365fd38fcdabd5aa97ab462db5bc4499f49e2&v=4",
          }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Renata Macedo</Text>
          <Text style={styles.subject}>Matemática</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A fugit magni
        totam numquam labore temporibus explicabo, iure ullam nesciunt
        accusantium alias dicta consectetur itaque, ipsam officia. Explicabo
        sunt quod fugiat!
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora {"   "}
          <Text style={styles.priceValue}>R$ 80,00</Text>
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
