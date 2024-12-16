import { ActivityIndicator, ImageBackground, View } from "react-native";
import { s } from "./styles";
import { colors } from "@/styles/theme";
import { Button } from "@/components/button";
import { router } from "expo-router";
import { IconArrowLeft } from "@tabler/icons-react-native";

type Props = {
  uri: string;
};

export function Cover({ uri }: Props) {
  return (
    <ImageBackground source={{ uri }} style={s.containter}>
      <View style={s.header}>
        <Button style={{ width: 40, height: 40 }} onPress={() => router.back()}>
          <Button.Icon icon={IconArrowLeft} />
        </Button>
      </View>
    </ImageBackground>
  );
}
