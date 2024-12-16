import { View, Text } from "react-native";
import { s } from "./styles";
import { colors } from "@/styles/theme";
import { IconProps } from "@tabler/icons-react-native";

export type DetailsProps = {
  name: string;
  description: string;
  address: string;
  phone: string;
  coupons: number;
  rules: {
    id: string;
    description: string;
  }[];
};

type Props = {
  description: string;
  icon: React.ComponentType<IconProps>;
};

export function Info({ description, icon: Icon }: Props) {
  return (
    <View style={s.container}>
      <Icon size={16} color={colors.gray[400]} />
      <Text style={s.text}>{description}</Text>
    </View>
  );
}
