import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import clubService from './clubService'




const initialState = {
    clubs: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//Create new club
export const createClub = createAsyncThunk('clubs/create', async (clubData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await clubService.createClub(clubData, token)
    } catch (error) {
        const message= 
          (error.response && error.response.data && error.response.data.message) || 
          error.message ||  error.toString()   
        return thunkAPI.rejectWithValue(message)
    }
})

//Get user clubs
export const getClubs = createAsyncThunk('clubs/getAll', async (_, thunkAPI) => {
    try {
        return await clubService.getClubs()
    } catch (error) {
        const message= 
          (error.response && error.response.data && error.response.data.message) || 
          error.message ||  error.toString()   
        return thunkAPI.rejectWithValue(message)
    }
}) 

//Delete user club
export const deleteClub = createAsyncThunk('clubs/delete', async (clubId, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await clubService.deleteClub(clubId, token)
    } catch (error) {
        const message= 
          (error.response && error.response.data && error.response.data.message) || 
          error.message ||  error.toString()   
        return thunkAPI.rejectWithValue(message)
    }
})

//Join club
export const joinClub = createAsyncThunk('clubs/update', async (clubId, userId, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await clubService.deleteClub(clubId, userId, token)
    } catch (error) {
        const message= 
          (error.response && error.response.data && error.response.data.message) || 
          error.message ||  error.toString()   
        return thunkAPI.rejectWithValue(message)
    }
})


export const clubSlice = createSlice({
    name: 'club',
    initialState, 
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createClub.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createClub.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.clubs.push(action.payload)
            })
            .addCase(createClub.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getClubs.pending, state => {
                state.isLoading = true
            })
            .addCase(getClubs.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.clubs = action.payload
               
            })
            .addCase(getClubs.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteClub.pending, state => {
                state.isLoading = true
            })
            .addCase(deleteClub.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.clubs = state.clubs.filter((club) => club._id !== action.payload.id)

            })
            .addCase(deleteClub.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(joinClub.pending, state => {
                state.isLoading = true
            })
            .addCase(joinClub.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.clubs((club) => club.id === action.payload)

            })
            .addCase(joinClub.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const {reset} = clubSlice.actions
export default clubSlice.reducer