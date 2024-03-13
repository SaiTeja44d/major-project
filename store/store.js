import { create } from "zustand";
import { streetLightData } from "@/helpers/constants";

const initialState = {
	streetLightData: streetLightData,
};
export const useStore = create((set) => ({
	...initialState,
	setStreetLightData: (data) => set({ streetLightData: data }),
}));
