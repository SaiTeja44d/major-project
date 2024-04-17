import { create } from "zustand";
import { streetLightData } from "@/helpers/constants";

const initialState = {
	streetLightData: streetLightData,
	isLoggedIn: false,
	loggedUserData: {},
};
export const useStore = create((set) => ({
	...initialState,
	setStreetLightData: (data) => set({ streetLightData: data }),
	setIsLoggedIn: (status) => set({ isLoggedIn: status }),
	setLoggedUserData: (data) => set({ loggedUserData: data }),
}));
