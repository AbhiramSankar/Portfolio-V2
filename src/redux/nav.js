import { createSlice } from "@reduxjs/toolkit";

export const navigation = createSlice ({
    name: "navigation",
    initialState: {
        current: '',
        isLoading: false,
        isReload: true,
        sectionCount: 1,
        maintenance: true,
    },
    reducers: {
        setCurrent: (state, action) => {
            state.current = action.payload
        },
        setLoading:(state, action) => {
            state.isLoading = action.payload
        },
        setReload:(state, action) => {
            state.isReload = action.payload
        },
        setSectionCount:(state, action) => {
            state.sectionCount = action.payload
        },
        setMaintenance:(state,action) => {
            if(action.payload === 'Azio0805ForMaint'){
                state.maintenance = false
            }
        }
    }
})

export const {
    setCurrent,
    setLoading,
    setReload,
    setSectionCount,
    setMaintenance
} = navigation.actions

export const navigationSelector = (state) => state.navigation

export default navigation.reducer