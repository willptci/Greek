import { Text, ScrollView, View, Image } from "react-native";
import { images, icons } from "@/constants";
import InputField from "@/components/InputField";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignUpPress = async () => {};

  return (
    <ScrollView className="flex-1 bg-general-200">
      <View className="flex-1 bg--general-200">
        <View className="flex items-center justify-center p-10">
          <Text className="font-MajorMono text-[78px] mt-10">Greek</Text>
          <View className="flex-row mt-2 items-center justify-center">
            <Image
              source={images.logo2}
              className="w-[30px] h-[30px]"
              resizeMode="contain"
            />
            <Text className="text-2xl text-black font-JakartaSemiBold p-5">
              Sign Up
            </Text>
            <Image
              source={images.logo2}
              className="w-[30px] h-[30px]"
              resizeMode="contain"
            />
          </View>
        </View>
        <View className="flex-1 w-full h-full p-5 mt-[-60px]">
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) =>
              setForm({
                ...form,
                name: value,
              })
            }
          />
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) =>
              setForm({
                ...form,
                email: value,
              })
            }
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            icon={icons.lock}
            value={form.password}
            onChangeText={(value) =>
              setForm({
                ...form,
                password: value,
              })
            }
          />
          <CustomButton
            title="Sign Up"
            onPress={onSignUpPress}
            className="mt-5"
          />

          <OAuth />

          <Link href="/sign-in" className="text-lg text-center text-black mt-2">
            <Text> Already have an Account? </Text>
            <Text className="text-general-400"> Log In </Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
