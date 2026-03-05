import { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";

type ActionRowProps = {
  icon: ReactNode;
  label: string;
  onPress: () => void;
};

export function ActionRow({ icon, label, onPress }: ActionRowProps) {
  return (
    <Pressable onPress={onPress} className="py-4">
      <View className="flex-row items-center gap-3">
        {icon}
        <Text className="text-[30px] font-semibold text-primary-60">{label}</Text>
      </View>
    </Pressable>
  );
}
