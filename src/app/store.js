import {configureStore} from '@reduxjs/toolkit';
import CounterSlice from '../features/addcartno/counterslice'


export default configureStore({
reducer:{
    counter : CounterSlice
}
})  