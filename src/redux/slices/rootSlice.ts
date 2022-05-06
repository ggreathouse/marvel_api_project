import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        name: 'DeadPool',
        description: "joined the Weapon X program after being kicked out of the U.S. Army Special Forces and given an artificial healing factor based on Wolverine's thanks to Dr. Emrys Killebrew, one of the head scientists",
        comics_appeared_in: 349,
        super_power: 'fast healing',
        preferred_weapon: 'blades and guns'
    },
    reducers : {
        chooseName: (state, action) => { state.name = action.payload},
        chooseDescription: (state, action) => { state.description = action.payload},
        chooseComics: (state, action) => { state.comics_appeared_in = action.payload},
        chooseSuper: (state, action) => { state.super_power = action.payload},
        chooseWeapon: (state, action) => { state.preferred_weapon = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const {chooseName, chooseComics, chooseDescription, chooseSuper, chooseWeapon} = rootSlice.actions