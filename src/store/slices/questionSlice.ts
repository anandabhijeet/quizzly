import {createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchQuizQuestions } from '../../api/API';
import { Difficulty } from '../../api/API';
import { QuestionsState } from '../../api/API';

type question ={

}
export const getQuestions = createAsyncThunk(
    "questions/QuizQuestions",
    async ({amount, difficulty, category}:{amount?:number, difficulty?:Difficulty, category?:number}, thunkApi) => {
        try{

            const response = await fetchQuizQuestions(
                amount,
                difficulty,
                category
            );
            
        // const response = await axios.get<question[]>("https://opentdb.com/api.php?amount=10");
        console.log("response",response);    
        return response;
            
        } catch (error: any){
            const message = error.message;
            return thunkApi.rejectWithValue(message)
        }
    }
);

interface Question_state {
    loading:boolean;
    error: string | null;
    data: any;
}

const initialState = {
    loading:false,
    error:null,
    data:null
} as Question_state;

const questionSlice = createSlice({
    name:"question",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(getQuestions.pending, (state, action)=>{
            state.loading = true;
        })
        .addCase(getQuestions.fulfilled, (state, action: PayloadAction<QuestionsState[]>)=>{
            state.loading = false;
            console.log("action", action.payload);
            state.data = action.payload;
        })
        .addCase(getQuestions.rejected, (state, action:PayloadAction<any>)=>{
            state.error = action.payload
        })
    }
})

export default questionSlice.reducer;