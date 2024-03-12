import {create} from 'zustand';

const initialState = {
    streetLightData: [
        {
            id: "SL001",
            location: "Main Street, City Center",
            status: "Working",
            current_value: 0.75,
            voltage_value: 220,
            is_on: true,
        },
        {
            id: "SL002",
            location: "Park Avenue, West End",
            status: "Faulty",
            current_value: 0,
            voltage_value: 0,
            is_on: false,
        },
        {
            id: "SL003",
            location: "Broadway, Downtown",
            status: "Working",
            current_value: 0.9,
            voltage_value: 230,
            is_on: true,
        },
        {
            id: "SL004",
            location: "Oak Street, Residential Area",
            status: "Working",
            current_value: 0.8,
            voltage_value: 225,
            is_on: true,
        },
    ],
}
export const useStore = create((set) => ({
    ...initialState,
    setStreetLightData: (data) => set({streetLightData: data}),
}));