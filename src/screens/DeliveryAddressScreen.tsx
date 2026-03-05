import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, Text, TextInput, View } from "react-native";
import { ActionRow } from "../components/ActionRow";
import { useAddressStore } from "../store/useAddressStore";

export function DeliveryAddressScreen() {
  const {
    searchQuery,
    savedAddresses,
    setSearchQuery,
    useCurrentLocation,
    addNewAddress
  } = useAddressStore();

  return (
    <SafeAreaView className="flex-1 bg-[#f7f7f7]">
      <View className="px-4 pt-2">
        <View className="flex-row items-center gap-4">
          <Pressable className="h-12 w-12 items-center justify-center rounded-full bg-neutral-20">
            <Ionicons name="chevron-back" size={24} color="#404040" />
          </Pressable>

          <View>
            <Text className="text-[34px] font-bold text-neutral-100">Delivery Address</Text>
            <Text className="text-[32px] text-neutral-90">Where should we deliver your order?</Text>
          </View>
        </View>

        <View className="mt-5 flex-row items-center rounded-xl bg-neutral-20 px-4 py-3">
          <Ionicons name="search" size={20} color="#A6A6A6" />
          <TextInput
            placeholder="Search a street, area or landmark..."
            placeholderTextColor="#A6A6A6"
            value={searchQuery}
            onChangeText={setSearchQuery}
            className="ml-3 flex-1 text-[24px] text-neutral-100"
          />
        </View>

        <ActionRow
          label="Use your current location"
          onPress={useCurrentLocation}
          icon={<Ionicons name="locate-outline" size={22} color="#FF6A00" />}
        />

        <View className="h-px bg-neutral-30" />

        <ActionRow
          label="Add new address"
          onPress={addNewAddress}
          icon={<Ionicons name="add-circle-outline" size={22} color="#FF6A00" />}
        />

        <View className="h-px bg-neutral-30" />

        <View className="py-6">
          <Text className="text-[30px] font-bold uppercase text-neutral-100">Saved Address</Text>
          <Text className="mt-5 text-[30px] text-neutral-80">
            {savedAddresses.length === 0 ? "No saved address" : `${savedAddresses.length} saved addresses`}
          </Text>
        </View>

        <View className="h-px bg-neutral-30" />
      </View>
    </SafeAreaView>
  );
}
